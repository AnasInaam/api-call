import Head from "next/head";
import Layout from "../components/Layout";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Info, Mail, Globe, Users, Linkedin, Github, ShieldCheck, Sparkles } from "lucide-react";
import Footer from "../components/Footer"; // Importing the Footer component

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | FlexAPI Studio</title>
        <meta name="description" content="Learn more about FlexAPI Studio, our team, mission, and how to contact us." />
      </Head>
      <div className="max-w-3xl mx-auto w-full py-12 px-4 md:px-0">
        <Card className="mb-8 bg-gradient-to-br from-blue-50/80 to-indigo-50/60 dark:from-gray-800 dark:to-gray-900 shadow-lg">
          <CardHeader className="flex items-center gap-3">
            <Info className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-400">About FlexAPI Studio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-gradient-to-br from-blue-100/80 to-indigo-100/60 dark:from-gray-800 dark:to-gray-900 shadow flex gap-4 items-start">
                <Info className="w-8 h-8 text-blue-600 dark:text-blue-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">What is My Fullstack App?</h3>
                  <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
                    My Fullstack App is a modern, professional platform for API testing, learning, and AI exploration. It brings together interactive tools and playgrounds for developers, students, and tech enthusiasts—all in one seamless, responsive web application.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-br from-green-100/80 to-blue-50/60 dark:from-gray-900 dark:to-gray-800 shadow flex gap-4 items-start">
                <Globe className="w-8 h-8 text-green-600 dark:text-green-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-1 flex items-center gap-2">Key Features</h3>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-base space-y-1">
                    <li><b>API Playground:</b> Instantly try out and experiment with multiple APIs, including classic Flask-powered utilities, a machine learning house price prediction API, and a conversational AI chatbot.</li>
                    <li><b>House Price Prediction:</b> Enter house features and get instant price predictions powered by a trained machine learning model (Random Forest Regressor) deployed on a FastAPI backend.</li>
                    <li><b>Chatbot:</b> Chat with an AI assistant using state-of-the-art models (GPT-3.5 Turbo, Mistral 7B, Claude 3 Haiku) via OpenRouter, with markdown/code rendering, chat history, and advanced chat features.</li>
                  </ul>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-br from-purple-100/80 to-pink-50/60 dark:from-gray-900 dark:to-gray-800 shadow flex gap-4 items-start">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-1 flex items-center gap-2">How It Works</h3>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-base space-y-1">
                    <li><b>Frontend:</b> Next.js 15 (TypeScript), Tailwind CSS, shadcn/ui, lucide-react, framer-motion for a beautiful, accessible, and mobile-friendly UI. Sidebar navigation, theming, and layout are consistent across all pages.</li>
                    <li><b>Backend:</b> Flask API (5 endpoints for text/number operations, CORS enabled) and FastAPI (house price prediction with ML model and Pydantic validation).</li>
                    <li><b>API Flow:</b> The Next.js frontend communicates with both Flask and FastAPI backends via HTTP requests. The chatbot page uses a Next.js API route as a proxy to OpenRouter.ai for secure model access.</li>
                  </ul>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-br from-yellow-100/80 to-orange-50/60 dark:from-gray-900 dark:to-gray-800 shadow flex gap-4 items-start">
                <Mail className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center gap-2">User Flow</h3>
                  <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-200 text-base space-y-1">
                    <li><b>Navigation:</b> Access all features via a sidebar (responsive, accessible, with hamburger menu on mobile).</li>
                    <li><b>API Playgrounds:</b> Each playground (Flask APIs, House Price, Chatbot) provides forms and docs for easy input and instant results.</li>
                    <li><b>Docs & About:</b> Comprehensive documentation and About page detail all features, tech, and team info.</li>
                  </ol>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-br from-pink-100/80 to-blue-50/60 dark:from-gray-900 dark:to-gray-800 shadow flex gap-4 items-start">
                <ShieldCheck className="w-8 h-8 text-pink-600 dark:text-pink-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-pink-800 dark:text-pink-300 mb-1 flex items-center gap-2">Tech Stack</h3>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-base space-y-1">
                    <li><b>Frontend:</b> Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, lucide-react, framer-motion, @headlessui/react</li>
                    <li><b>Backend:</b> FastAPI (Python), Flask (Python), scikit-learn, pandas, joblib, pydantic</li>
                    <li><b>Deployment:</b> Vercel/Netlify (frontend), Render (Flask API), custom server (FastAPI)</li>
                  </ul>
                </div>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-br from-blue-200/80 to-green-100/60 dark:from-gray-800 dark:to-gray-900 shadow flex gap-4 items-start">
                <Sparkles className="w-8 h-8 text-blue-500 dark:text-blue-300 mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-1 flex items-center gap-2">Why Use This App?</h3>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 text-base space-y-1">
                    <li>Unified, elegant interface for API testing, ML demos, and AI chat</li>
                    <li>Professional, accessible, and mobile-first design</li>
                    <li>Open source, extensible, and easy to deploy or customize</li>
                  </ul>
                  <div className="mt-3 text-lg font-bold text-blue-700 dark:text-blue-400">Explore, learn, and build with My Fullstack App!</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Merged Contact Section */}
        <Card className="mb-8 bg-gradient-to-br from-blue-50/80 to-green-50/60 dark:from-gray-800 dark:to-gray-900 shadow-lg">
          <CardHeader className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <CardTitle className="text-xl font-semibold text-blue-800 dark:text-blue-300">Contact With Us</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200 mb-4">
              <li>Email: <a href="mailto:support@myapp.com" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200 transition">support@myapp.com</a></li>
              <li>Phone: <a href="tel:+919876543210" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200 transition">+91 98765 43210</a></li>
              <li>Office: 91 Springboard, 4th Floor, C2, Sector 1, Noida, Uttar Pradesh, India</li>
            </ul>
            <div className="flex gap-6 items-center">
              <a href="https://www.linkedin.com/in/anasinaam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/AnasInaam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 dark:text-gray-100 hover:text-blue-700 dark:hover:text-blue-400 transition">
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
            </div>
          </CardContent>
        </Card>
        {/* Team or Company Info Section */}
        <Card className="mb-8 bg-gradient-to-br from-green-50/80 to-blue-50/60 dark:from-gray-800 dark:to-gray-900 shadow-lg">
          <CardHeader className="flex items-center gap-3">
            <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
            <CardTitle className="text-xl font-semibold text-green-800 dark:text-green-300">Meet the Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <img src="https://ui-avatars.com/api/?name=Anas+Inaam&background=0D8ABC&color=fff" alt="Anas Inaam" className="w-14 h-14 rounded-full shadow" />
                  <span className="mt-2 font-semibold text-gray-800 dark:text-gray-100">Anas Inaam</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Founder & Lead Developer</span>
                </div>
                {/* Add more team members here if needed */}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-1">Our Mission</h4>
                <p className="text-gray-700 dark:text-gray-200 mb-2 text-sm">
                  To empower developers and learners with a seamless, beautiful platform for API testing, learning, and AI exploration.
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <a href="https://github.com/AnasInaam" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200 transition text-sm">Careers: Join our team</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
      {/* Final polish: subtle hover, spacing, accessibility */}
      <style jsx>{`
        a:focus {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
        a {
          transition: color 0.2s, background 0.2s;
        }
      `}</style>
    </Layout>
  );
}
