# Next.js Frontend

A modern Next.js 15 (TypeScript, Tailwind) frontend for interacting with the Flask API.

## Setup

```sh
cd nextjs-frontend
npm install
npm run dev
```
- Visit: http://localhost:3000/

## Features
- Clean, responsive UI
- Dark/light theme toggle
- API form for all 5 Flask endpoints
- Loading indicator while waiting for results

## Deployment
- Deploy to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/)

## Project Structure
- `src/components/ApiForm.tsx` — Main API interaction form
- `src/components/ThemeToggle.tsx` — Theme switcher
- `src/components/Header.tsx` / `Footer.tsx` — Layout
- `src/pages/index.tsx` — Main page

## Customization
- Update API base URL in `ApiForm.tsx` if your backend URL changes.

## License
MIT
