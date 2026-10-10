# TRACE — Complete Frontend Demo

A self-contained React + Vite frontend for TRACE, an evidence-led statutory revenue assurance experience.

## Included

- Responsive public landing page with product story, methodology and integrity sections
- Demo login page with clear simulated-authentication notice
- Audit workspace shell with overview, engagements, evidence room, reconciliation, findings, workpapers and sign-off navigation
- Searchable illustrative exception table and evidence timeline
- Local-only evidence file picker (it does not upload files)
- Explicit demo labels and disabled sign-off control to avoid implying backend approval
- Public favicon, web manifest, sample evidence-lineage illustration and robots file
- Playwright end-to-end tests for public navigation, demo authentication, audit investigation, audit trail, client upload interaction, reconciliation, demo labelling, sign-off state and workpaper review

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

Open a terminal in this folder (the folder containing `package.json`):

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```powershell
npm run build
npm run preview
```

## Run end-to-end tests

Install Chromium once:

```powershell
npx playwright install chromium
```

Then run:

```powershell
npm run test:e2e
```

Open a headed browser during tests:

```powershell
npm run test:e2e:headed
```

Open Playwright's interactive test UI:

```powershell
npm run test:e2e:ui
```

The Playwright configuration starts Vite automatically.

## Project structure

```text
Trace-frontend/
├── e2e/                         # 9 Playwright spec files + shared helper
├── docs/                        # API integration notes and boundaries
├── public/
│   ├── favicon.svg
│   ├── site.webmanifest
│   ├── robots.txt
│   └── images/trace-evidence-lineage.svg
├── src/
│   ├── App.jsx                  # Public site, demo login and workspace
│   ├── main.jsx                 # React entry point
│   └── styles.css               # Complete responsive styling
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── playwright.config.js
├── README.md
└── vite.config.js
```

## Honest demo boundaries

This is a runnable **frontend demonstration**, not a claim that the backend is integrated.

- Login is simulated locally. Any non-empty valid email and password opens the demo workspace.
- Workspace figures, organisations, findings, evidence events and variances are illustrative.
- The evidence picker previews a filename locally; it does not transmit a file.
- Sign-off is intentionally disabled. It does not persist approvals or assert that a ledger or evidence hash was verified.
- `.env.example` documents the API base URL for future integration; the current UI does not make authenticated API calls.

Do not use illustrative values as statutory audit evidence or production results.
