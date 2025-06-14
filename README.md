# Next.js Frontend – OpenRouter Chatbot Playground

A modern Next.js 15 (TypeScript, Tailwind, shadcn/ui) frontend for interacting with OpenRouter AI models and Flask APIs.

## Features
- Modern, responsive UI with professional theming
- Dark/light theme toggle
- Chatbot playground with:
  - Model selection (GPT-3.5 Turbo, Mistral 7B, Claude 3 Haiku)
  - Markdown & code block rendering
  - Copy to clipboard for code, prompts, and responses
  - Edit, regenerate, and delete for messages (ChatGPT-like)
  - Chat history persistence (localStorage)
  - Typing animation, auto-scroll, and mobile support
  - Docs/examples tab and model info cards
- API playground for Flask endpoints
- Built with shadcn/ui, lucide-react, @headlessui/react, framer-motion

## Setup

```sh
cd nextjs-frontend
npm install
npm run dev
```
- Visit: http://localhost:3000/

### Environment Variables
Create a `.env.local` file (not committed) with:
```
OPENROUTER_API_KEY=your-openrouter-key-here
```
Or use `.env.example` as a template.

## Deployment
- Deploy to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/)
- **Set `OPENROUTER_API_KEY` in your deployment environment variables (never commit your real key!)**

## Project Structure
- `src/pages/chatbot.tsx` — Main chatbot playground
- `src/components/MarkdownMessage.tsx` — Markdown/code rendering
- `src/components/CopyButton.tsx` — Copy to clipboard
- `src/components/ModelInfoCard.tsx` — Model info cards
- `src/components/ThemeToggle.tsx` — Theme switcher
- `src/components/Header.tsx` / `Footer.tsx` — Layout
- `src/pages/index.tsx` — Main page

## Customization
- Add more models or features in `chatbot.tsx` and `ModelInfoCard.tsx`.
- Update API endpoints as needed.

## License
MIT
