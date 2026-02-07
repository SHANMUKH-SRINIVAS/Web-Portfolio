# Portfolio

A single-page portfolio to showcase your projects, experience, and education for recruiters.  
Smooth scroll, classic typography, and responsive layout.

## Run locally

```bash
cd Portfolio
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. http://localhost:5173).

## Customize your content

Edit **`src/data.js`** and replace placeholder values with your own:

- **profile** — name, tagline, location, email, LinkedIn, GitHub, resume link, about paragraph
- **experience** — roles, companies, periods, bullet points
- **education** — degrees, institutions, periods, highlights
- **projects** — title, description, tech stack, live URL, repo URL (and optional image path)

After editing, save and the dev server will reload.

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to Vercel, Netlify, or any static host.
