import React, { useState, useEffect, useRef } from "react";
import { Bot, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Tab } from "@headlessui/react";
import ModelInfoCard from "../components/ModelInfoCard";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import CopyButton from "../components/CopyButton";
import Layout from "../components/Layout";

const MarkdownMessage = dynamic(() => import("../components/MarkdownMessage"), { ssr: false });

const MODELS = [
  {
    label: "GPT-3.5 Turbo (OpenAI)",
    value: "openai/gpt-3.5-turbo",
    provider: "OpenAI via OpenRouter",
    example: "Summarize this text: ...",
    description: "Fast, affordable, and capable for most general chat and Q&A tasks.",
  },
  {
    label: "Mistral 7B Instruct (MistralAI)",
    value: "mistralai/mistral-7b-instruct",
    provider: "MistralAI via OpenRouter",
    example: "Write a Python function to reverse a string.",
    description: "Open-source model, good for code and concise answers.",
  },
  {
    label: "Claude 3 Haiku (Anthropic)",
    value: "anthropic/claude-3-haiku",
    provider: "Anthropic via OpenRouter",
    example: "Explain quantum computing in simple terms.",
    description: "Anthropic's fast, safe, and helpful conversational model.",
  },
];

export default function ChatbotPage() {
  const [model, setModel] = useState(MODELS[0].value);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Load chat history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("chatbot-history");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  // Save chat history to localStorage
  useEffect(() => {
    localStorage.setItem("chatbot-history", JSON.stringify(messages));
  }, [messages]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (messages.length > 0) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, typing]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);
    setError(null);
    setTyping(true);
    try {
      const res = await fetch("/api/openrouter-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages: [
            ...messages.map((m) => ({ role: m.sender === "user" ? "user" : "assistant", content: m.text })),
            { role: "user", content: input },
          ],
        }),
      });
      const data = await res.json();
      setTyping(false);
      if (!res.ok) {
        let msg = "";
        if (res.status === 401) {
          msg = "Unauthorized: The server could not authenticate with OpenRouter. Please check your server API key.";
        } else if (res.status === 429) {
          msg = "Rate limit reached or quota exceeded. Please try again later or check your OpenRouter account.";
        } else if (data?.error) {
          msg = `API error: ${data.error}`;
        } else {
          msg = `API error: ${res.status}`;
        }
        setError(msg);
        setMessages((msgs) => [...msgs, { sender: "bot", text: `[Error: ${msg}]` }]);
        setLoading(false);
        return;
      }
      const botReply = data.choices?.[0]?.message?.content || "[No response]";
      setMessages((msgs) => [...msgs, { sender: "bot", text: botReply }]);
    } catch (err: any) {
      setTyping(false);
      setError(err.message || "Unknown error");
      setMessages((msgs) => [...msgs, { sender: "bot", text: "[Error: Could not get response from server]" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-2 md:px-0 py-8">
        <Tab.Group>
          <Tab.List className="flex space-x-2 rounded-xl bg-blue-100/60 dark:bg-gray-800/60 p-1 mb-6">
            <Tab
              className={({ selected }) =>
                `w-full py-2.5 text-sm leading-5 font-semibold rounded-lg ${
                  selected
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
                    : "text-blue-700 dark:text-blue-300"
                }`
              }
            >
              Chat
            </Tab>
            <Tab
              className={({ selected }) =>
                `w-full py-2.5 text-sm leading-5 font-semibold rounded-lg ${
                  selected
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
                    : "text-blue-700 dark:text-blue-300"
                }`
              }
            >
              Docs
            </Tab>
          </Tab.List>
          <Tab.Panels>
            {/* Chat Tab */}
            <Tab.Panel>
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* About Section */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 mb-4">
                  <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <Bot className="w-6 h-6" /> About This Project
                  </h2>
                  <p className="text-gray-700 dark:text-gray-200 mb-2">
                    A modern chatbot playground using OpenRouter.ai models. Try GPT-3.5, Mistral, or Claude for chat, code, and
                    more. Markdown, code blocks, chat history, and a beautiful UI included!
                  </p>
                </div>
                {/* Model Info Cards */}
                <div className="flex flex-wrap gap-4 justify-center mb-4">
                  {MODELS.map((m) => (
                    <ModelInfoCard
                      key={m.value}
                      name={m.label}
                      provider={m.provider}
                      example={m.example}
                      description={m.description}
                    />
                  ))}
                </div>
                {/* Chat UI */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1 text-blue-700 dark:text-blue-400">Model</label>
                  <div className="relative w-full max-w-xs">
                    <select
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full p-2 pr-8 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      {MODELS.map((m) => (
                        <option key={m.value} value={m.value}>
                          {m.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/60 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow p-5 min-h-[300px] flex flex-col gap-3 mb-4 overflow-y-auto max-h-[400px]">
                  {messages.length === 0 && (
                    <div className="text-gray-400 text-center mt-16">No messages yet. Start the conversation!</div>
                  )}
                  {messages.map((msg, i) => (
                    <div key={i} className={`group flex ${msg.sender === "user" ? "justify-end" : "justify-start"} relative`}>
                      <div
                        className={`px-4 py-2 rounded-2xl shadow text-sm max-w-[80%] ${
                          msg.sender === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        }`}
                      >
                        {msg.sender === "bot" ? (
                          <div className="flex flex-col gap-1">
                            <MarkdownMessage content={msg.text} />
                            <div className="flex gap-1 mt-1">
                              <CopyButton value={msg.text} />
                              <button
                                className="p-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700"
                                title="Regenerate response"
                                onClick={async () => {
                                  // Remove this bot message
                                  setMessages((msgs) => msgs.filter((_, idx) => idx !== i));
                                  // Resend the previous user message
                                  const prevUserMsg = messages[i - 1]?.text || "";
                                  if (prevUserMsg) {
                                    setInput(prevUserMsg);
                                    // Optionally, auto-send: await handleSend();
                                  }
                                }}
                              >
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4v5h.582M20 20v-5h-.581M5.582 9A7.974 7.974 0 0 1 12 4c2.21 0 4.21.896 5.657 2.343M18.418 15A7.974 7.974 0 0 1 12 20a7.978 7.978 0 0 1-5.657-2.343"/></svg>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            {msg.text}
                            <CopyButton value={msg.text} />
                          </div>
                        )}
                        {/* Edit and delete for user messages, delete for bot messages */}
                        <div className={`absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10`}>
                          {msg.sender === "user" && (
                            <button
                              className="p-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700"
                              title="Edit message"
                              onClick={() => {
                                setInput(msg.text);
                                setMessages((msgs) => msgs.filter((_, idx) => idx !== i));
                              }}
                            >
                              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h6l11.293-11.293a1 1 0 0 0 0-1.414l-3.586-3.586a1 1 0 0 0-1.414 0L3 15v6z"/></svg>
                            </button>
                          )}
                          <button
                            className="p-1 rounded hover:bg-red-100 dark:hover:bg-gray-800"
                            title="Delete message"
                            onClick={() => setMessages((msgs) => msgs.filter((_, idx) => idx !== i))}
                          >
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 7V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2"/></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="px-4 py-2 rounded-2xl shadow text-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 animate-pulse">
                        <span className="typing-dots">
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                        </span>
                        <style jsx>{`
                          .typing-dots {
                            display: inline-block;
                          }
                          .dot {
                            animation: blink 1.4s infinite both;
                            font-size: 1.5em;
                          }
                          .dot:nth-child(2) {
                            animation-delay: 0.2s;
                          }
                          .dot:nth-child(3) {
                            animation-delay: 0.4s;
                          }
                          @keyframes blink {
                            0%,
                            80%,
                            100% {
                              opacity: 0;
                            }
                            40% {
                              opacity: 1;
                            }
                          }
                        `}</style>
                      </div>
                    </div>
                  )}
                  {typing && !loading && (
                    <div className="flex justify-start">
                      <div className="px-4 py-2 rounded-2xl shadow text-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 animate-pulse">
                        <span className="typing-dots">
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                        </span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    disabled={loading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={loading || !input.trim()}
                    className="px-4 py-2 rounded bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition-colors disabled:opacity-60"
                  >
                    Send
                  </button>
                </div>
                {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}
              </motion.section>
            </Tab.Panel>
            {/* Docs Tab */}
            <Tab.Panel>
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 mb-4">
                  <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                    <Bot className="w-6 h-6" /> Docs & Examples
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1 mb-4">
                    <li>
                      Try{" "}
                      <span className="font-mono bg-gray-200 dark:bg-gray-700 rounded px-1">
                        Summarize this text: ...
                      </span>{" "}
                      for GPT-3.5 Turbo.
                    </li>
                    <li>
                      Ask{" "}
                      <span className="font-mono bg-gray-200 dark:bg-gray-700 rounded px-1">
                        Write a Python function to reverse a string.
                      </span>{" "}
                      for Mistral 7B.
                    </li>
                    <li>
                      Use{" "}
                      <span className="font-mono bg-gray-200 dark:bg-gray-700 rounded px-1">
                        Explain quantum computing in simple terms.
                      </span>{" "}
                      for Claude 3 Haiku.
                    </li>
                  </ul>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <b>Tips:</b> Use markdown for code, ask for step-by-step explanations, or try creative writing prompts!
                  </div>
                </div>
              </motion.section>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
      {/* Footer */}
      <Footer />
    </Layout>
  );
}
