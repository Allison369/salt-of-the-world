# Salt of the World

**Daily Bread** — a gamified, editorial-styled Bible-learning web app.
https://dailybreadministries.netlify.app/
*Feed your faith. Grow every day.*

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 with a custom token-based design system
- State: React Context + localStorage (demo). Production: Supabase.

## Design

- Warm paper light theme and near-black dark theme, toggled in the header or in Settings
- Fraunces display serif + Inter UI type
- Lavender, mint, pink and lime accent palette
- "Spark" the flame mascot: five animated moods (idle, talking, happy, encouraging, excited) with blinking, arm waves and speech bubbles

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Features

- Landing, sign up / sign in, four-step onboarding
- Dashboard with daily-goal ring, XP, streak, stat tiles, recommended lesson and path map
- 8 learning paths, 57 lessons, 8 question types
- Lesson flow with hearts, instant feedback, mascot reactions and a completion summary
- Scripture memory (hide words → reconstruct), spaced review and bookmarks
- Practice mode, achievements, profile, settings and an admin area
- Bible translation preference: WEB, NIV, KJV, GNB

## Notes

- Demo persists everything in `localStorage` (no backend). Add Supabase for production.
- Admin access: sign up with an email containing `admin`.
- Scripture text shown in the demo is the World English Bible (public domain).

## Deploy on Netlify

`netlify.toml` is included — build command `npm run build`, publish directory `dist`, Node 22, and a
single-page-app redirect so direct links like `/dashboard` work.

**From GitHub (recommended)**

1. Netlify → *Add new site* → *Import an existing project* → GitHub → `Allison369/salt-of-the-world`
2. Keep the detected settings (`npm run build` / `dist`) and deploy.

**Manual drop**

```bash
npm run build
```

Then drag the `dist` folder onto <https://app.netlify.com/drop>. `dist/_redirects` keeps routing working.

**If a deploy fails**

- Open *Deploys → the failed deploy → Deploy log* and read the first error.
- "Command failed with exit code 1" during the build is usually Node — `NODE_VERSION = "22"` is already set in `netlify.toml`.
- "Page not found" when refreshing a route means the SPA redirect is missing; the new `netlify.toml` / `_redirects` fix it after a redeploy.
