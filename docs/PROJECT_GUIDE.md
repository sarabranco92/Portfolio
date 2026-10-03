# Portfolio — project guide

Sara Branco’s React/Vite portfolio with introduction, skills, project gallery, contact form and animated presentation.

## Scope and source

This guide describes the default branch `main` reviewed on 3 October 2026. Commands were checked against committed manifests and configuration; applications and external integrations were not executed as part of this documentation update.

## Repository map

- `src/App.jsx`
- `src/data/portfolio.json`
- `src/data/skills.json`
- `src/components/Contact/contact.jsx`
- `src/style/_main.scss`
- `vite.config.js`

## Prerequisites and local use

Clone the repository and enter its root directory:

```sh
git clone https://github.com/sarabranco92/Portfolio.git
cd Portfolio
```

Install Node.js and npm compatible with the committed dependencies. A fresh install/build has not established an exact supported Node version for this repository. Keep the committed lockfile and do not mix npm and Yarn lockfile updates unintentionally.

```sh
npm install
npm start
```

The Vite terminal prints the local URL (normally port 5173). See the configuration notes below before trying integrations.

## Available npm scripts

From the repository root unless a directory is explicitly specified. These are existing commands, not evidence of a successful run.

| Command | Committed behavior |
| --- | --- |
| `npm start` | `vite` |
| `npm run dev` | `vite` |
| `npm run build` | `vite build` |
| `npm run lint` | `eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0` |
| `npm run preview` | `vite preview` |
| `npm run predeploy` | `npm run build` — publishes or prepares publishing; not a local check |
| `npm run deploy` | `gh-pages -d build` — publishes or prepares publishing; not a local check |

## Configuration and implementation notes

HashRouter supplies `/` and `/main` routes. Contact submits to Formspree in the contact component. The Vite base is `/Portfolio/` and output is `build/`; change the base if deploying at a different path. The deploy script publishes `build/` with gh-pages and therefore writes to GitHub. Do not use it as a local verification command.

## Verification checklist

Open the introduction and `/#/main`, inspect project links and skills, check an unknown hash route, and verify the contact form using a controlled message only when intended.

No dedicated automated test/spec files were found in the reviewed application tree. Where a test script exists, its presence alone does not establish test coverage.

## Maintenance

Keep this guide in sync when routes, commands, environment variables or hosting paths change. Use development databases/accounts for integration checks. Keep private credentials in server-side environment configuration and out of documentation. No new license or ownership terms are introduced by this guide; retain existing repository notices.
