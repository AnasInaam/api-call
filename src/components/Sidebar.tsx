import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Bot, FlaskConical, Landmark, Home as House } from "lucide-react";

const menuItems = [
	{ name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
	{ name: "Chatbot", href: "/chatbot", icon: <Bot className="w-5 h-5" /> },
	{ name: "Predict House Price", href: "/house-price", icon: <House className="w-5 h-5" /> },
	{ name: "Text & Number Utilities", href: "/flask-api", icon: <FlaskConical className="w-5 h-5" /> },
	{ name: "About", href: "/about", icon: <Landmark className="w-5 h-5" /> },
];

export default function Sidebar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			{/* Hamburger for mobile */}
			<button
				className="fixed top-4 left-4 z-40 md:hidden p-2 rounded bg-white/80 dark:bg-gray-900/80 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
				aria-label={open ? "Close menu" : "Open menu"}
				onClick={() => setOpen((v) => !v)}
			>
				{open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
			</button>

			{/* Sidebar overlay for mobile */}
			<div
				className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
					}`}
				onClick={() => setOpen(false)}
				aria-hidden={!open}
			/>

			{/* Sidebar */}
			<nav
				className={`fixed top-0 left-0 min-h-screen h-full w-64 z-50 bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-800 transform transition-transform duration-300 md:translate-x-0 md:static md:block
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
				style={{ height: '100vh' }}
				aria-label="Sidebar"
			>
				<div className="flex flex-col h-full py-8 px-6 gap-4">
					<span className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 mb-8 select-none">FlexAPI Studio</span>
					<ul className="flex flex-col gap-2 flex-1">
						{menuItems.map((item) => (
							<li key={item.name}>
								<Link href={item.href} passHref legacyBehavior>
									<a
										className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-800 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
										tabIndex={0}
										aria-label={item.name}
										onClick={() => setOpen(false)}
									>
										{item.icon}
										{item.name}
									</a>
								</Link>
							</li>
						))}
					</ul>
					<div className="mt-auto pt-8">
						<span className="text-xs opacity-80 text-gray-500 dark:text-gray-400 block text-center">
							© {new Date().getFullYear()} My Fullstack App v0.1.0 — Powered by Next.js, Flask, and Tailwind CSS.
						</span>
					</div>
				</div>
			</nav>
		</>
	);
}
