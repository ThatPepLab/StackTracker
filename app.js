const STORAGE_KEY = 'tpl-personal-stack-v1';
const PRODUCTS = [
  '5-Amino-1MQ','ACE-031','Adamax','Adipotide','AHK-Cu','AICAR','Alprostadil','AOD-9604','ARA-290',
  'BPC-157','BPC-157 + TB-500 (Wolverine)','Botulinum Toxin','Bronchogen','Cagrilintide','Cagrilintide + Semaglutide','Cardiogen','Cartalax','Cerebrolysin','Cerebroprotein Hydrolysate',
  'CJC-1295 No DAC','CJC-1295 No DAC + Ipamorelin','CJC-1295 With DAC','Cortagen','Crystagen','Dermorphin','Dihexa','DSIP','Eloralintide','Epithalon','EPO',
  'Follistatin','FOXO4-DRI','GDF-8','GHK-Cu','GHRP-2 Acetate','GHRP-6 Acetate','GLOW (BPC-157 + TB-500 + GHK-Cu)','Glutathione','Gonadorelin Acetate',
  'HCG','Healthy Hair Skin Nails Blend','Hexarelin Acetate','HGH 191AA','HGH Fragment 176-191','HMG','Humanin','Hyaluronic Acid','IGF-1 LR3','IGF-DES','Insulin','Ipamorelin',
  'Kisspeptin-10','KLOW','KPV','L-Carnitine','LC120','LC216','Lemon Bottle','Lipo-B','Lipo-C','Lipo-C Fat Blaster','Lipo-C Plus','Lipo Lab PPC Solution','LL-37','Matrixyl','Mazdutide','Melanotan-1','Melanotan-2','Melatonin','MIC Blend',
  'MGF','MK-677','MOTS-C','NA Semax Amidate','NAD+','Oxytocin Acetate','PE-22-28','PEG-MGF','Pinealon','PNC-27','PT-141','Relaxation PM',
  'Retatrutide','Retatrutide + Cagrilintide','Retatrutide + Tirzepatide','Selank','Selank + Semax','Semaglutide','Semax','Sermorelin Acetate',
  'SLU-PP-322','SLU-PP-332','Snap-8','SS-31','Super Human Blend','Survodutide','TB-500 / Thymosin Beta-4','Tesamorelin','Tesamorelin + Ipamorelin','Testagen',
  'Testosterone Cypionate','Testosterone Enanthate','Thymalin','Thymalin / Thymulin','Thymosin Alpha-1','Tirzepatide','Vasoactive Intestinal Peptide (VIP)','Vesugen','Vilon','Vitamin B12'
];
const PRODUCT_STRENGTHS = {"5-Amino-1MQ":[5,10,50],"ACE-031":[1],"Adamax":[5,10],"Adipotide":[2,5,10],"AHK-Cu":[20,50,100],"AICAR":[50,100],"Alprostadil":[20],"AOD-9604":[2,5,10],"ARA-290":[10,16,30,40,50],"BPC-157":[2,5,10,20],"BPC-157 + TB-500 (Wolverine)":[5,10,15,20,30],"Bronchogen":[20],"Cagrilintide":[2,5,10,20],"Cagrilintide + Semaglutide":[2.5,5,10,20],"Cardiogen":[10,20],"Cartalax":[20],"Cerebrolysin":[60],"Cerebroprotein Hydrolysate":[60],"CJC-1295 No DAC":[2,5,10],"CJC-1295 No DAC + Ipamorelin":[5,10,20],"CJC-1295 With DAC":[2,5,10],"Cortagen":[20],"Crystagen":[20],"Dermorphin":[5,10],"Dihexa":[10],"DSIP":[2,5,10,15],"Eloralintide":[5,10],"Epithalon":[10,25,50],"Follistatin":[1],"FOXO4-DRI":[2,5,10,16],"GDF-8":[1],"GHK-Cu":[50,100],"GHRP-2 Acetate":[5,10,15],"GHRP-6 Acetate":[5,10],"GLOW (BPC-157 + TB-500 + GHK-Cu)":[70,80],"Glutathione":[600,1500],"Gonadorelin Acetate":[2],"Hexarelin Acetate":[2,5,10],"HGH Fragment 176-191":[5,10,15],"Humanin":[10],"Hyaluronic Acid":[5],"IGF-1 LR3":[0.1,1],"IGF-DES":[0.1],"Ipamorelin":[2,5,10],"Kisspeptin-10":[5,10],"KLOW":[80],"KPV":[5,10,30],"L-Carnitine":[10,200,500,600,1200,5000],"LC120":[10],"LC216":[10],"Lemon Bottle":[10],"Lipo-C Fat Blaster":[526],"LL-37":[5,10],"Matrixyl":[10],"Mazdutide":[5,10,15,100],"Melanotan-1":[5,10],"Melanotan-2":[10],"Melatonin":[10,20],"MIC Blend":[10],"MGF":[2],"MK-677":[5],"MOTS-C":[5,10,15,20,30,40],"NA Semax Amidate":[30],"NAD+":[100,500,1000],"Oxytocin Acetate":[2,5,10],"PE-22-28":[5,10],"PEG-MGF":[2],"Pinealon":[5,10,20],"PNC-27":[5,10],"PT-141":[10],"Relaxation PM":[10],"Retatrutide":[5,10,15,20,30,40,50,60,100],"Retatrutide + Cagrilintide":[10],"Retatrutide + Tirzepatide":[60],"Selank":[5,10,30],"Selank + Semax":[10,20],"Semaglutide":[5,10,15,20,30,50],"Semax":[5,10,30],"Sermorelin Acetate":[2,5,10,15],"SLU-PP-322":[5],"SLU-PP-332":[5],"Snap-8":[10,20,100],"SS-31":[10,50],"Super Human Blend":[865],"Survodutide":[10],"TB-500 / Thymosin Beta-4":[2,5,10,20],"Tesamorelin":[2,5,10,15,20],"Tesamorelin + Ipamorelin":[10],"Testagen":[20],"Testosterone Cypionate":[250],"Testosterone Enanthate":[250],"Thymalin":[10],"Thymalin / Thymulin":[10,20],"Thymosin Alpha-1":[2,5,10],"Tirzepatide":[5,10,15,20,30,40,45,50,60,70,80,90,100,120],"Vasoactive Intestinal Peptide (VIP)":[5,10],"Vesugen":[10,20],"Vilon":[20],"Vitamin B12":[1,10]};
const RECON_OPTIONS = [0.5,1,1.5,2,2.5,3];

let state = loadState();
const $ = (s, root=document) => root.querySelector(s);
const dialog = $('#stackDialog');
const form = $('#stackForm');
const vialDialog = $('#vialDialog');
const vialForm = $('#vialForm');

function loadState(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {items:[]}; }
  catch { return {items:[]}; }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); render(); }
function uid(){ return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`; }
function doseToMg(amount, unit){ return unit === 'mcg' ? amount / 1000 : amount; }
function totalDoseMg(amount, unit, doseBasis='total', componentCount=1){
  return doseToMg(amount,unit) * (doseBasis === 'each' ? componentCount : 1);
}
function nice(n, max=3){ return Number(n.toFixed(max)).toString(); }
function displayDate(value){ return new Date(value).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'}); }
function isOngoing(item){ return item.durationType === 'ongoing'; }
function dosesTotal(item){ return isOngoing(item) ? Infinity : item.cycleWeeks * item.timesPerWeek; }
function cycleTaken(item){ const taken=item.startCompleted+item.logs.length; return isOngoing(item)?taken:Math.min(taken,dosesTotal(item)); }
function peopleCount(item){ return Number(item.peopleCount)||1; }
function scheduledDoseAt(item,taken){
  const week=isOngoing(item)?Math.floor(taken/item.timesPerWeek)+1:Math.min(item.cycleWeeks,Math.floor(taken/item.timesPerWeek)+1);
  const maintenance=item.dosePattern[taken%item.dosePattern.length];
  if(item.protocolType!=='titration') return {amount:maintenance,stage:'NEXT DOSE',maintenance:true};
  const starter=Number(item.starterDose), starterWeeks=Number(item.starterWeeks), every=Number(item.increaseEveryWeeks), increase=Number(item.doseIncrease);
  if(week<=starterWeeks) return {amount:Math.min(starter,maintenance),stage:`STARTER DOSE · WEEK ${week}`,maintenance:starter>=maintenance};
  const steps=Math.floor((week-starterWeeks-1)/every)+1;
  const amount=Math.min(maintenance,starter+(steps*increase));
  return {amount,stage:amount>=maintenance?'MAINTENANCE DOSE':`TITRATION DOSE · WEEK ${week}`,maintenance:amount>=maintenance};
}
function scheduledDose(item){ return scheduledDoseAt(item,cycleTaken(item)); }
function nextDose(item){
  return scheduledDose(item).amount;
}
function shotsInVial(item){
  const doseMg = totalDoseMg(nextDose(item),item.doseUnit,item.doseBasis,item.componentCount)*peopleCount(item);
  return doseMg > 0 ? Math.floor((item.remainingMg + 1e-9) / doseMg) : 0;
}
function protocolRemainingMg(item){
  if(isOngoing(item)) return 0;
  let mg=0;
  for(let i=cycleTaken(item);i<dosesTotal(item);i++) mg+=totalDoseMg(scheduledDoseAt(item,i).amount,item.doseUnit,item.doseBasis,item.componentCount)*peopleCount(item);
  return mg;
}
function inventoryStatus(item){
  const unopened=Number(item.unopenedVials)||0, requiredMg=protocolRemainingMg(item), onHandMg=item.remainingMg+(unopened*item.vialMg);
  return {requiredMg,onHandMg,requiredVials:isOngoing(item)?null:Math.ceil(requiredMg/item.vialMg),onHandVials:(item.remainingMg>0?1:0)+unopened,additionalVials:isOngoing(item)?0:Math.max(0,Math.ceil((requiredMg-onHandMg)/item.vialMg))};
}
function currentWeek(item){ const week=Math.floor(cycleTaken(item)/item.timesPerWeek)+1; return isOngoing(item)?week:Math.min(item.cycleWeeks,week); }
function getItem(id){ return state.items.find(x => x.id === id); }
function selectedVialMg(){ return $('#vialMg').value==='custom' ? Number($('#customVialMg').value) : Number($('#vialMg').value); }
function updateStrengthOptions(preferred=null){
  const strengths=PRODUCT_STRENGTHS[$('#product').value.trim()]||[];
  const select=$('#vialMg'), current=preferred??selectedVialMg();
  select.innerHTML=strengths.map(v=>`<option value="${v}">${nice(v)} mg</option>`).join('')+'<option value="custom">Other strength…</option>';
  if(strengths.includes(Number(current))) select.value=String(Number(current));
  else if(strengths.length && preferred===null) select.value=String(strengths[0]);
  else select.value='custom';
  $('#customVialMg').hidden=select.value!=='custom';
  if(select.value==='custom'&&current) $('#customVialMg').value=current;
  updatePreview();
}

function render(){
  const grid = $('#stackGrid'); grid.innerHTML = '';
  $('#emptyState').hidden = state.items.length > 0;
  grid.hidden = state.items.length === 0;
  const active=state.items.filter(i=>!i.endedAt), ongoingCount=active.filter(isOngoing).length;
  const totalLeft=active.filter(i=>!isOngoing(i)).reduce((n,i)=>n+(Math.max(0,dosesTotal(i)-cycleTaken(i))*peopleCount(i)),0);
  const low=active.filter(i=>{ const inv=inventoryStatus(i); return isOngoing(i)?inv.onHandVials<=2:(shotsInVial(i)<=1||inv.additionalVials>0)&&cycleTaken(i)<dosesTotal(i); }).length;
  $('#summary').innerHTML = `<div class="summary-card"><span>Active protocols</span><strong>${active.length}</strong></div><div class="summary-card"><span>Cycle doses remaining</span><strong>${totalLeft}${ongoingCount?' + ongoing':''}</strong></div><div class="summary-card"><span>Vials needing attention</span><strong>${low}</strong></div>`;
  state.items.forEach(item => grid.append(renderCard(item)));
}

function renderCard(item){
  const card = $('#cardTemplate').content.firstElementChild.cloneNode(true);
  card.dataset.id = item.id;
  const ongoing=isOngoing(item), taken=cycleTaken(item), total=dosesTotal(item), remaining=ongoing?Infinity:Math.max(0,total-taken);
  const scheduled=scheduledDose(item), dose=scheduled.amount, singleDoseMg=totalDoseMg(dose,item.doseUnit,item.doseBasis,item.componentCount), people=peopleCount(item), doseMg=singleDoseMg*people;
  const concentration = item.vialMg / item.reconMl;
  const units = (singleDoseMg / concentration) * 100;
  const shots = shotsInVial(item);
  const inventory=inventoryStatus(item);
  $('h3',card).textContent = item.product;
  $('.timing',card).textContent = item.timing || `${item.timesPerWeek}× weekly`;
  $('.dose-stage',card).textContent=scheduled.stage;
  const doseSuffix=item.doseBasis==='each'?` each × ${item.componentCount}`:'';
  $('.next-dose',card).textContent = remaining ? `${nice(dose)} ${item.doseUnit}${doseSuffix}` : 'Cycle complete';
  $('.draw-units',card).textContent = remaining ? `${nice(units,1)} units per person${people===2?' · shared ×2':''}` : 'No scheduled doses remaining';
  $('.vial-left',card).textContent = `${nice(item.remainingMg)} mg · ~${shots} ${people===2?'shared session':'shot'}${shots===1?'':'s'}`;
  $('.cycle-left',card).textContent = ongoing?'Ongoing · no end date':people===2?`${remaining*2} doses · ${remaining} shared sessions`:`${remaining} of ${total} shots`;
  $('.coverage',card).textContent = ongoing?`${inventory.onHandVials} vial${inventory.onHandVials===1?'':'s'} on hand · reorder at 2`:inventory.additionalVials?`${inventory.onHandVials} on hand · need ${inventory.additionalVials} more`:`${inventory.onHandVials} on hand · protocol covered`;
  $('.week-label',card).textContent = ongoing?`Week ${currentWeek(item)} · ongoing`:`Week ${currentWeek(item)} of ${item.cycleWeeks}`;
  $('.shot-label',card).textContent = `${taken} taken`;
  $('.progress-fill',card).style.width = ongoing?'100%':`${total?taken/total*100:0}%`;
  const warning = $('.warning',card);
  if (remaining && inventory.additionalVials>0){ warning.hidden=false; warning.textContent=`Inventory is short by ${inventory.additionalVials} vial${inventory.additionalVials===1?'':'s'} for the remaining protocol.`; }
  if (remaining && shots === 1){ warning.hidden=false; warning.textContent=`One ${people===2?'shared session':'shot'} remains in this vial. Reconstitute the next vial now.`; }
  if (remaining && shots === 0){ warning.hidden=false; warning.classList.add('urgent'); warning.textContent=`Not enough remains for the next ${people===2?'shared session':'full dose'}. Reconstitute a new vial.`; }
  const endStatus=$('.end-status',card), endButton=card.querySelector('[data-action="end"]'), resumeButton=card.querySelector('[data-action="resume"]');
  if(ongoing && inventory.onHandVials<=2 && shots>0){ warning.hidden=false; warning.textContent=`Only ${inventory.onHandVials} vial${inventory.onHandVials===1?' remains':'s remain'}. Reorder now to maintain this ongoing protocol.`; }
  if(ongoing) endButton.hidden=true;
  if(item.endedAt){
    endStatus.hidden=false; endStatus.textContent=`Protocol ended ${displayDate(item.endedAt)} · Six-week break ends ${displayDate(item.breakEndsAt)}`;
    $('.dose-stage',card).textContent='PROTOCOL ENDED'; $('.next-dose',card).textContent=`Resume after ${displayDate(item.breakEndsAt)}`; $('.draw-units',card).textContent='Dose history and inventory are preserved';
    endButton.hidden=true; resumeButton.hidden=false;
  }
  const takenBtn = $('.taken-button',card); takenBtn.disabled = !!item.endedAt || !remaining || item.remainingMg + 1e-9 < doseMg;
  takenBtn.addEventListener('click',()=>takeDose(item.id));
  $('.menu-button',card).addEventListener('click',()=>{ const a=$('.card-actions',card); a.hidden=!a.hidden; });
  $('.card-actions',card).addEventListener('click',e=>{ const action=e.target.dataset.action; if(action) handleAction(action,item.id,card); });
  return card;
}

function takeDose(id){
  const item=getItem(id), amount=nextDose(item), mg=totalDoseMg(amount,item.doseUnit,item.doseBasis,item.componentCount)*peopleCount(item);
  if(item.endedAt) return;
  if (item.remainingMg + 1e-9 < mg) return;
  item.remainingMg=Math.max(0,item.remainingMg-mg);
  item.logs.push({id:uid(),at:new Date().toISOString(),amount,unit:item.doseUnit,mg,people:peopleCount(item)});
  saveState();
}

function handleAction(action,id,card){
  const item=getItem(id);
  if(action==='edit') openDialog(item);
  if(action==='add-vials'){
    $('#vialItemId').value=id; $('#vialsToAdd').value=1; vialDialog.showModal();
  }
  if(action==='end'){
    const ended=new Date(), breakEnd=new Date(ended); breakEnd.setDate(breakEnd.getDate()+42); item.endedAt=ended.toISOString(); item.breakEndsAt=breakEnd.toISOString(); saveState();
  }
  if(action==='resume'){
    item.endedAt=null; item.breakEndsAt=null; saveState();
  }
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
    box.innerHTML=item.logs.length ? item.logs.slice().reverse().map(l=>`<div class="history-item"><span>${new Date(l.at).toLocaleString()}</span><strong>${nice(l.amount)} ${l.unit}${(l.people||1)===2?' each · shared':''}</strong></div>`).join('') : '<p class="history-empty">No doses recorded in this app yet.</p>';
  }
}

function openDialog(item=null){
  form.reset(); $('#editId').value=item?.id||''; $('#dialogTitle').textContent=item?'Edit protocol':'Add to stack';
  $('#vialCount').value=1; $('#currentWeek').value=1; $('#takenThisWeek').value=0; $('#doseUnit').value='mg'; $('#doseBasis').value='total'; $('#componentCount').value=2; $('#protocolType').value='fixed'; $('#durationType').value='cycle'; $('#starterWeeks').value=4; $('#increaseEveryWeeks').value=4; form.querySelector('input[name="sharedProtocol"][value="1"]').checked=true;
  if(item){
    $('#product').value=item.product; updateStrengthOptions(item.vialMg); $('#reconMl').value=String(item.reconMl); $('#vialCount').value=(Number(item.unopenedVials)||0)+1;
    $('#doseUnit').value=item.doseUnit; $('#doseBasis').value=item.doseBasis||'total'; $('#componentCount').value=item.componentCount||2; $('#protocolType').value=item.protocolType||'fixed'; $('#durationType').value=item.durationType||'cycle'; $('#starterDose').value=item.starterDose||''; $('#starterWeeks').value=item.starterWeeks||4; $('#doseIncrease').value=item.doseIncrease||''; $('#increaseEveryWeeks').value=item.increaseEveryWeeks||4; $('#dosePattern').value=item.dosePattern.join(', '); $('#timesPerWeek').value=item.timesPerWeek; $('#cycleWeeks').value=item.cycleWeeks||1;
    form.querySelector(`input[name="sharedProtocol"][value="${peopleCount(item)}"]`).checked=true;
    $('#currentWeek').value=currentWeek(item); $('#takenThisWeek').value=cycleTaken(item)%item.timesPerWeek; $('#timing').value=item.timing;
  } else {
    updateStrengthOptions();
  }
  updateDurationFields(); updatePreview(); dialog.showModal();
}
function parsePattern(){ return $('#dosePattern').value.split(',').map(v=>Number(v.trim())).filter(v=>v>0); }
function updateDurationFields(){
  const ongoing=$('#durationType').value==='ongoing';
  $('#cycleLengthLabel').hidden=ongoing;
  $('#cycleWeeks').required=!ongoing;
}
function updatePreview(){
  const vial=selectedVialMg(), recon=Number($('#reconMl').value), pattern=parsePattern(), unit=$('#doseUnit').value, basis=$('#doseBasis').value, count=Number($('#componentCount').value)||2, isTitration=$('#protocolType').value==='titration', ongoing=$('#durationType').value==='ongoing';
  $('#componentCountLabel').hidden=basis!=='each';
  $('#titrationFields').hidden=!isTitration;
  $('#patternHelp').textContent=isTitration?'Enter the full maintenance dose. Titration will build to this amount.':'One amount for each dose in the week. Use one number for the same dose every time.';
  if(!vial||!recon||!pattern.length){ $('#dosePreview').textContent='Enter vial, reconstitution and dose details to calculate the draw.'; return; }
  const conc=vial/recon, draws=pattern.map(d=>nice(totalDoseMg(d,unit,basis,count)/conc*100,1));
  const explanation=basis==='each'?` (${nice(pattern[0])} ${unit} × ${count} components)`:'';
  let titration='',coverage='';
  if(isTitration){
    const start=Number($('#starterDose').value), weeks=Number($('#starterWeeks').value), increase=Number($('#doseIncrease').value), every=Number($('#increaseEveryWeeks').value);
    if(start&&weeks&&increase&&every) titration=`<br>Starts at <strong>${nice(start)} ${unit}</strong> for ${weeks} week${weeks===1?'':'s'}, then increases ${nice(increase)} ${unit} every ${every} week${every===1?'':'s'} until maintenance.`;
  }
  const times=Number($('#timesPerWeek').value),cycleWeeks=Number($('#cycleWeeks').value),current=Number($('#currentWeek').value)||1,takenThisWeek=Number($('#takenThisWeek').value)||0,people=Number(form.querySelector('input[name="sharedProtocol"]:checked')?.value)||1,vials=Number($('#vialCount').value)||1;
  if(times&&(ongoing||cycleWeeks)){
    const temp={durationType:ongoing?'ongoing':'cycle',cycleWeeks:ongoing?1:cycleWeeks,timesPerWeek:times,dosePattern:pattern,protocolType:isTitration?'titration':'fixed',starterDose:Number($('#starterDose').value),starterWeeks:Number($('#starterWeeks').value),doseIncrease:Number($('#doseIncrease').value),increaseEveryWeeks:Number($('#increaseEveryWeeks').value),doseUnit:unit,doseBasis:basis,componentCount:count,peopleCount:people,startCompleted:(current-1)*times+takenThisWeek,logs:[],vialMg:vial,remainingMg:vial,unopenedVials:Math.max(0,vials-1)};
    const inventory=inventoryStatus(temp);
    coverage=ongoing?`<br><strong>Ongoing protocol</strong> · ${vials} vial${vials===1?'':'s'} on hand · reorder warning begins at 2.`:`<br><strong>${people===2?'Shared protocol: ':''}${inventory.requiredVials} vial${inventory.requiredVials===1?'':'s'} required</strong> from the current point · ${vials} on hand${inventory.additionalVials?` · <strong>${inventory.additionalVials} more needed</strong>`:' · covered'}.`;
  }
  $('#dosePreview').innerHTML=`<strong>${nice(conc)} mg/mL</strong> · Maintenance draw: <strong>${draws.join(' / ')} units</strong>${explanation} per person.${titration}${coverage}`;
}

form.addEventListener('submit',e=>{
  e.preventDefault();
  const pattern=parsePattern(), times=Number($('#timesPerWeek').value), week=Number($('#currentWeek').value), thisWeek=Number($('#takenThisWeek').value);
  if(!pattern.length) return alert('Enter at least one valid dose.');
  if(pattern.length!==1 && pattern.length!==times) return alert('Use one repeating dose, or enter one dose amount for each weekly dose.');
  const protocolType=$('#protocolType').value;
  const ongoing=$('#durationType').value==='ongoing';
  if(protocolType==='titration' && pattern.length!==1) return alert('Titration protocols require one repeating maintenance dose.');
  if(protocolType==='titration' && (!Number($('#starterDose').value)||!Number($('#starterWeeks').value)||!Number($('#doseIncrease').value)||!Number($('#increaseEveryWeeks').value))) return alert('Complete all titration schedule fields.');
  if(protocolType==='titration' && Number($('#starterDose').value)>=pattern[0]) return alert('Starter dose must be lower than the maintenance dose.');
  if(thisWeek>=times) return alert('Already taken this week must be less than the number taken per week.');
  const id=$('#editId').value, existing=id?getItem(id):null, vialMg=selectedVialMg(), vialCount=Number($('#vialCount').value);
  if(!vialMg) return alert('Select or enter a vial strength.');
  const logs=existing?.logs??[], requestedCompleted=(week-1)*times+thisWeek;
  const values={id:id||uid(),product:$('#product').value.trim(),vialMg,reconMl:Number($('#reconMl').value),unopenedVials:Math.max(0,vialCount-1),doseUnit:$('#doseUnit').value,doseBasis:$('#doseBasis').value,componentCount:$('#doseBasis').value==='each'?Number($('#componentCount').value):1,peopleCount:Number(form.querySelector('input[name="sharedProtocol"]:checked').value),protocolType,durationType:ongoing?'ongoing':'cycle',starterDose:protocolType==='titration'?Number($('#starterDose').value):null,starterWeeks:protocolType==='titration'?Number($('#starterWeeks').value):null,doseIncrease:protocolType==='titration'?Number($('#doseIncrease').value):null,increaseEveryWeeks:protocolType==='titration'?Number($('#increaseEveryWeeks').value):null,dosePattern:pattern,timesPerWeek:times,cycleWeeks:ongoing?1:Number($('#cycleWeeks').value),startCompleted:Math.max(0,requestedCompleted-logs.length),timing:$('#timing').value.trim(),remainingMg:existing?.remainingMg??vialMg,logs};
  if(existing) Object.assign(existing,values); else state.items.push(values);
  saveState(); dialog.close();
});

$('#products').innerHTML=PRODUCTS.map(p=>`<option value="${p}"></option>`).join('');
$('#reconMl').innerHTML=RECON_OPTIONS.map(v=>`<option value="${v}">${v} mL</option>`).join('');
$('#product').addEventListener('input',()=>{ if(PRODUCTS.includes($('#product').value.trim())) updateStrengthOptions(); });
$('#product').addEventListener('change',()=>updateStrengthOptions());
$('#vialMg').addEventListener('change',()=>{ $('#customVialMg').hidden=$('#vialMg').value!=='custom'; updatePreview(); });
$('#addStackButton').addEventListener('click',()=>openDialog());
document.querySelectorAll('[data-open-modal]').forEach(b=>b.addEventListener('click',()=>openDialog()));
document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',()=>dialog.close()));
form.addEventListener('input',updatePreview);
$('#durationType').addEventListener('change',()=>{ updateDurationFields(); updatePreview(); });
vialForm.addEventListener('submit',e=>{
  e.preventDefault();
  const item=getItem($('#vialItemId').value), count=Number($('#vialsToAdd').value);
  if(!item||!Number.isInteger(count)||count<1) return;
  item.unopenedVials=(Number(item.unopenedVials)||0)+count;
  saveState(); vialDialog.close();
});
document.querySelectorAll('[data-close-vials]').forEach(b=>b.addEventListener('click',()=>vialDialog.close()));
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
