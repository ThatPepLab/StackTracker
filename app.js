const STORAGE_KEY = 'tpl-personal-stack-v1';
const PRODUCTS = ['Retatrutide','Tirzepatide','Semaglutide','Tesamorelin','MOTS-c','SS-31','NAD+','AOD-9604','5-Amino-1MQ','BPC-157','TB-500 / TB4','BPC-157 + TB-500','Ipamorelin','CJC-1295 no DAC','CJC-1295 no DAC + Ipamorelin','Tesamorelin + Ipamorelin','Semax','Selank','PT-141','GHK-Cu','AHK-Cu'];

let state = loadState();
const $ = (s, root=document) => root.querySelector(s);
const dialog = $('#stackDialog');
const form = $('#stackForm');

function loadState(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {items:[]}; }
  catch { return {items:[]}; }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); render(); }
function uid(){ return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`; }
function doseToMg(amount, unit){ return unit === 'mcg' ? amount / 1000 : amount; }
function nice(n, max=3){ return Number(n.toFixed(max)).toString(); }
function dosesTotal(item){ return item.cycleWeeks * item.timesPerWeek; }
function cycleTaken(item){ return Math.min(item.startCompleted + item.logs.length, dosesTotal(item)); }
function nextDose(item){
  const pattern = item.dosePattern;
  return pattern[cycleTaken(item) % pattern.length];
}
function shotsInVial(item){
  const doseMg = doseToMg(nextDose(item), item.doseUnit);
  return doseMg > 0 ? Math.floor((item.remainingMg + 1e-9) / doseMg) : 0;
}
function currentWeek(item){ return Math.min(item.cycleWeeks, Math.floor(cycleTaken(item) / item.timesPerWeek) + 1); }
function getItem(id){ return state.items.find(x => x.id === id); }

function render(){
  const grid = $('#stackGrid'); grid.innerHTML = '';
  $('#emptyState').hidden = state.items.length > 0;
  grid.hidden = state.items.length === 0;
  const totalLeft = state.items.reduce((n,i)=>n+Math.max(0,dosesTotal(i)-cycleTaken(i)),0);
  const low = state.items.filter(i=>shotsInVial(i)<=1 && cycleTaken(i)<dosesTotal(i)).length;
  $('#summary').innerHTML = `<div class="summary-card"><span>Active protocols</span><strong>${state.items.length}</strong></div><div class="summary-card"><span>Cycle doses remaining</span><strong>${totalLeft}</strong></div><div class="summary-card"><span>Vials needing attention</span><strong>${low}</strong></div>`;
  state.items.forEach(item => grid.append(renderCard(item)));
}

function renderCard(item){
  const card = $('#cardTemplate').content.firstElementChild.cloneNode(true);
  card.dataset.id = item.id;
  const taken = cycleTaken(item), total = dosesTotal(item), remaining = Math.max(0,total-taken);
  const dose = nextDose(item), doseMg = doseToMg(dose,item.doseUnit);
  const concentration = item.vialMg / item.reconMl;
  const units = (doseMg / concentration) * 100;
  const shots = shotsInVial(item);
  $('h3',card).textContent = item.product;
  $('.timing',card).textContent = item.timing || `${item.timesPerWeek}× weekly`;
  $('.next-dose',card).textContent = remaining ? `${nice(dose)} ${item.doseUnit}` : 'Cycle complete';
  $('.draw-units',card).textContent = remaining ? `${nice(units,1)} units on a U-100 syringe` : 'No scheduled doses remaining';
  $('.vial-left',card).textContent = `${nice(item.remainingMg)} mg · ~${shots} shot${shots===1?'':'s'}`;
  $('.cycle-left',card).textContent = `${remaining} of ${total} shots`;
  $('.week-label',card).textContent = `Week ${currentWeek(item)} of ${item.cycleWeeks}`;
  $('.shot-label',card).textContent = `${taken} taken`;
  $('.progress-fill',card).style.width = `${total ? taken/total*100 : 0}%`;
  const warning = $('.warning',card);
  if (remaining && shots === 1){ warning.hidden=false; warning.textContent='One shot remains in this vial. Reconstitute the next vial now.'; }
  if (remaining && shots === 0){ warning.hidden=false; warning.classList.add('urgent'); warning.textContent='Not enough remains for the next full dose. Reconstitute a new vial.'; }
  const takenBtn = $('.taken-button',card); takenBtn.disabled = !remaining || item.remainingMg + 1e-9 < doseMg;
  takenBtn.addEventListener('click',()=>takeDose(item.id));
  $('.menu-button',card).addEventListener('click',()=>{ const a=$('.card-actions',card); a.hidden=!a.hidden; });
  $('.card-actions',card).addEventListener('click',e=>{ const action=e.target.dataset.action; if(action) handleAction(action,item.id,card); });
  return card;
}

function takeDose(id){
  const item=getItem(id), amount=nextDose(item), mg=doseToMg(amount,item.doseUnit);
  if (item.remainingMg + 1e-9 < mg) return;
  item.remainingMg=Math.max(0,item.remainingMg-mg);
  item.logs.push({id:uid(),at:new Date().toISOString(),amount,unit:item.doseUnit,mg});
  saveState();
}

function handleAction(action,id,card){
  const item=getItem(id);
  if(action==='edit') openDialog(item);
  if(action==='new-vial'){
    if(item.unopenedVials>0){ item.unopenedVials--; item.remainingMg=item.vialMg; saveState(); }
    else if(confirm('No prepared reserve vial is recorded. Add one newly reconstituted vial?')){ item.remainingMg=item.vialMg; saveState(); }
  }
  if(action==='undo'){
    const last=item.logs.pop(); if(last){ item.remainingMg=Math.min(item.vialMg,item.remainingMg+last.mg); saveState(); }
  }
  if(action==='delete' && confirm(`Remove ${item.product} and its local history?`)){ state.items=state.items.filter(x=>x.id!==id); saveState(); }
  if(action==='history'){
    const box=$('.history',card); box.hidden=!box.hidden;
    box.innerHTML=item.logs.length ? item.logs.slice().reverse().map(l=>`<div class="history-item"><span>${new Date(l.at).toLocaleString()}</span><strong>${nice(l.amount)} ${l.unit}</strong></div>`).join('') : '<p class="history-empty">No doses recorded in this app yet.</p>';
  }
}

function openDialog(item=null){
  form.reset(); $('#editId').value=item?.id||''; $('#dialogTitle').textContent=item?'Edit protocol':'Add to stack';
  $('#vialCount').value=1; $('#currentWeek').value=1; $('#takenThisWeek').value=0; $('#doseUnit').value='mg';
  if(item){
    $('#product').value=item.product; $('#vialMg').value=item.vialMg; $('#reconMl').value=item.reconMl; $('#vialCount').value=item.unopenedVials+1;
    $('#doseUnit').value=item.doseUnit; $('#dosePattern').value=item.dosePattern.join(', '); $('#timesPerWeek').value=item.timesPerWeek; $('#cycleWeeks').value=item.cycleWeeks;
    $('#currentWeek').value=currentWeek(item); $('#takenThisWeek').value=cycleTaken(item)%item.timesPerWeek; $('#timing').value=item.timing;
  }
  updatePreview(); dialog.showModal();
}
function parsePattern(){ return $('#dosePattern').value.split(',').map(v=>Number(v.trim())).filter(v=>v>0); }
function updatePreview(){
  const vial=Number($('#vialMg').value), recon=Number($('#reconMl').value), pattern=parsePattern(), unit=$('#doseUnit').value;
  if(!vial||!recon||!pattern.length){ $('#dosePreview').textContent='Enter vial, reconstitution and dose details to calculate the draw.'; return; }
  const conc=vial/recon, draws=pattern.map(d=>nice(doseToMg(d,unit)/conc*100,1));
  $('#dosePreview').innerHTML=`<strong>${nice(conc)} mg/mL</strong> · Weekly draw pattern: <strong>${draws.join(' / ')} units</strong> on a U-100 syringe.`;
}

form.addEventListener('submit',e=>{
  e.preventDefault();
  const pattern=parsePattern(), times=Number($('#timesPerWeek').value), week=Number($('#currentWeek').value), thisWeek=Number($('#takenThisWeek').value);
  if(!pattern.length) return alert('Enter at least one valid dose.');
  if(pattern.length!==1 && pattern.length!==times) return alert('Use one repeating dose, or enter one dose amount for each weekly dose.');
  if(thisWeek>=times) return alert('Already taken this week must be less than the number taken per week.');
  const id=$('#editId').value, existing=id?getItem(id):null, vialMg=Number($('#vialMg').value), vialCount=Number($('#vialCount').value);
  const logs=existing?.logs??[], requestedCompleted=(week-1)*times+thisWeek;
  const values={id:id||uid(),product:$('#product').value.trim(),vialMg,reconMl:Number($('#reconMl').value),unopenedVials:Math.max(0,vialCount-1),doseUnit:$('#doseUnit').value,dosePattern:pattern,timesPerWeek:times,cycleWeeks:Number($('#cycleWeeks').value),startCompleted:Math.max(0,requestedCompleted-logs.length),timing:$('#timing').value.trim(),remainingMg:existing?.remainingMg??vialMg,logs};
  if(existing) Object.assign(existing,values); else state.items.push(values);
  saveState(); dialog.close();
});

$('#products').innerHTML=PRODUCTS.map(p=>`<option value="${p}"></option>`).join('');
$('#addStackButton').addEventListener('click',()=>openDialog());
document.querySelectorAll('[data-open-modal]').forEach(b=>b.addEventListener('click',()=>openDialog()));
document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',()=>dialog.close()));
form.addEventListener('input',updatePreview);
$('#exportButton').addEventListener('click',()=>{
  const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}), a=document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download=`personal-stack-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(a.href);
});
$('#importInput').addEventListener('change',async e=>{
  try{ const next=JSON.parse(await e.target.files[0].text()); if(!Array.isArray(next.items)) throw new Error(); state=next; saveState(); }
  catch{ alert('That backup file could not be read.'); }
  e.target.value='';
});
render();
