# Project structure notes

- `src/App.jsx`: public marketing experience, simulated login, audit workspace views, evidence picker and demo sign-off gate.
- `src/styles.css`: responsive styles for public, login, workspace, tables, timeline, modal and mobile breakpoints.
- `src/main.jsx`: React DOM bootstrap.
- `public/`: static assets served from the site root.
- `e2e/`: Playwright browser tests; `helpers.js` centralises the demo login flow.
- `playwright.config.js`: starts Vite on `127.0.0.1:5173` and records traces/screenshots on failures.
