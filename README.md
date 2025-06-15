# FlexAPI Studio – Modern API Playground & AI Platform

FlexAPI Studio is a fullstack, production-ready platform for API testing, learning, and AI exploration. It features a beautiful Next.js frontend, multiple backend APIs (Flask and FastAPI), and a professional, accessible UI. Built for developers, students, and tech enthusiasts.

---

## 🌟 What is FlexAPI Studio?
FlexAPI Studio unifies interactive API playgrounds, machine learning demos, and AI chat in one seamless, responsive web application. Instantly test classic text/number utilities, predict house prices with ML, or chat with advanced AI models—all in a single, elegant interface.

---

## 🚀 Key Features
- **Text & Number Utilities:**
  - Try 5 Flask-powered endpoints: word count, number addition, string reversal, temperature conversion, and palindrome check.
- **House Price Prediction:**
  - Enter house features and get instant price predictions from a trained ML model (Random Forest Regressor) via FastAPI.
- **AI Chatbot Playground:**
  - Chat with GPT-3.5 Turbo, Mistral 7B, or Claude 3 Haiku (OpenRouter). Supports markdown/code, chat history, model selection, and more.
- **Modern UI:**
  - Responsive, accessible, and mobile-friendly. Built with Next.js 15, Tailwind CSS, shadcn/ui, lucide-react, framer-motion.
- **Sidebar Navigation:**
  - Consistent, accessible sidebar with hamburger menu on mobile.
- **Theming:**
  - Light/dark mode toggle, beautiful gradients, and professional design.
- **Docs & About:**
  - Comprehensive documentation and About page with team, mission, contact, and tech stack info.

---

## 🛠️ How It Works
- **Frontend:** Next.js 15 (TypeScript), Tailwind CSS, shadcn/ui, lucide-react, framer-motion, @headlessui/react.
- **Backend:**
  - **Flask API:** 5 endpoints for text/number operations, CORS enabled for frontend integration.
  - **FastAPI:** House price prediction with ML model and Pydantic validation.
- **API Flow:** Next.js frontend communicates with Flask and FastAPI backends via HTTP. Chatbot uses a Next.js API route as a secure proxy to OpenRouter.ai.

---

## 🧭 User Flow
1. **Navigation:** Access all features via the sidebar (responsive, accessible).
2. **API Playgrounds:** Each playground (Text & Number Utilities, House Price, Chatbot) provides forms and docs for easy input and instant results.
3. **Docs & About:** Find detailed documentation and team/company info.

---

## 💻 Tech Stack
- **Frontend:** Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, lucide-react, framer-motion, @headlessui/react
- **Backend:** FastAPI (Python), Flask (Python), scikit-learn, pandas, joblib, pydantic
- **Deployment:** Vercel/Netlify (frontend), Render (Flask API), custom server (FastAPI)

---

## 📦 Project Structure
- `src/pages/index.tsx` — Landing page
- `src/pages/flask-api.tsx` — Text & Number Utilities playground
- `src/pages/house-price.tsx` — House Price Prediction playground
- `src/pages/chatbot.tsx` — AI Chatbot playground
- `src/pages/about.tsx` — About page (team, mission, contact)
- `src/pages/docs.tsx` — API documentation
- `src/components/Sidebar.tsx` — Sidebar navigation
- `src/components/Layout.tsx` — Shared layout
- `src/components/Header.tsx` / `Footer.tsx` — Branding and layout
- `src/components/ApiForm.tsx`, `HousePriceForm.tsx`, `PredictionDocs.tsx`, etc. — UI and forms
- `public/favicon.ico` — Favicon (replace to customize)

---

## ⚡ Getting Started
```sh
cd nextjs-frontend
npm install
npm run dev
```
Visit: http://localhost:3000/

### Environment Variables
Create a `.env.local` file (not committed) with:
```
OPENROUTER_API_KEY=your-openrouter-key-here
```
Or use `.env.example` as a template.

---

## 🌐 Deployment
- Deploy to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/)
- **Set `OPENROUTER_API_KEY` in your deployment environment variables (never commit your real key!)**

---

## 👥 Team & Contact
- **Founder & Lead Developer:** Anas Inaam
- **Email:** support@myapp.com
- **Phone:** +91 98765 43210
- **Office:** 91 Springboard, 4th Floor, C2, Sector 1, Noida, Uttar Pradesh, India
- [LinkedIn](https://www.linkedin.com/in/anasinaam) | [GitHub](https://github.com/AnasInaam)
- [Careers: Join our team](https://github.com/AnasInaam)

---

## 📝 License
MIT

---

## 🙌 Why Use FlexAPI Studio?
- Unified, elegant interface for API testing, ML demos, and AI chat
- Professional, accessible, and mobile-first design
- Open source, extensible, and easy to deploy or customize

> Explore, learn, and build with FlexAPI Studio!
