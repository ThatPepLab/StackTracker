# Personal Stack Tracker

A mobile-friendly, static stack and vial tracker designed for GitHub Pages.

## Features

- Select or enter a product, vial strength and reconstitution volume
- Convert each dose into U-100 syringe units
- Support fixed or varying weekly dose patterns (for example `3, 3, 4`)
- Record a dose with one **Taken** button
- Track remaining vial contents, protocol week and cycle doses
- Warn when one complete dose remains or the vial is insufficient
- Undo the last dose, view timestamped history, and record a newly reconstituted vial
- Export and import a JSON backup
- Store data locally in the browser; no server or account required

## GitHub Pages

Publish the repository from the root of the default branch in **Settings → Pages**. No build step is required.

## Privacy

Tracking data is stored in the browser's `localStorage`. It is not committed to GitHub. Clearing browser data, changing devices, or using a different browser will not carry history over; use **Export backup** when needed.

## Scope

This is a recordkeeping and calculation tool. It does not verify product identity, sterility, safety, interactions, or medical appropriateness.
