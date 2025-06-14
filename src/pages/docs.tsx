import React from "react";
import { motion } from "framer-motion";
import { ClipboardCopy } from "lucide-react";

const apiDocs = [
	{
		name: "Word Count",
		endpoint: "/word_count",
		example: '{ "input": "This is a test sentence" }',
		curl: "curl -X POST https://your-flask-api/word_count -H 'Content-Type: application/json' -d '{\"input\":\"This is a test sentence\"}'",
		description: "Returns the number of words in the input text.",
	},
	{
		name: "Number Addition",
		endpoint: "/number_addition",
		example: '{ "input": "1 2 3.5 4" }',
		curl: "curl -X POST https://your-flask-api/number_addition -H 'Content-Type: application/json' -d '{\"input\":\"1 2 3.5 4\"}'",
		description: "Returns the sum of all numbers in the input.",
	},
	{
		name: "String Reversal",
		endpoint: "/string_reversal",
		example: '{ "input": "hello world" }',
		curl: "curl -X POST https://your-flask-api/string_reversal -H 'Content-Type: application/json' -d '{\"input\":\"hello world\"}'",
		description: "Returns the reversed input string.",
	},
	{
		name: "Temperature Conversion",
		endpoint: "/temperature_conversion",
		example: '{ "input": "100 C" }',
		curl: "curl -X POST https://your-flask-api/temperature_conversion -H 'Content-Type: application/json' -d '{\"input\":\"100 C\"}'",
		description: "Converts between Celsius and Fahrenheit.",
	},
	{
		name: "Palindrome Check",
		endpoint: "/palindrome_check",
		example: '{ "input": "racecar" }',
		curl: "curl -X POST https://your-flask-api/palindrome_check -H 'Content-Type: application/json' -d '{\"input\":\"racecar\"}'",
		description: "Checks if the input is a palindrome.",
	},
];

const copyToClipboard = (text: string) => {
	navigator.clipboard.writeText(text);
};

export default function Docs() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="max-w-3xl mx-auto w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 mt-8 mb-12"
		>
			<h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">
				API Documentation
			</h2>
			<p className="mb-6 text-gray-700 dark:text-gray-200">
				All endpoints accept a POST request with a JSON body containing an{" "}
				<code className="bg-gray-100 dark:bg-gray-800 rounded px-1">input</code>{" "}
				field.
			</p>
			<div className="space-y-6">
				{apiDocs.map((api) => (
					<div
						key={api.name}
						className="bg-gradient-to-br from-blue-50/80 to-indigo-50/60 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow p-5"
					>
						<h3 className="font-semibold text-lg text-blue-800 dark:text-blue-300 mb-1">
							{api.name}
						</h3>
						<p className="text-gray-700 dark:text-gray-200 text-sm mb-2">
							{api.description}
						</p>
						<div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
							<span className="text-xs text-gray-500 dark:text-gray-400">
								Endpoint:
							</span>
							<code className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 text-xs font-mono">
								{api.endpoint}
							</code>
						</div>
						<div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
							<span className="text-xs text-gray-500 dark:text-gray-400">
								Example Input:
							</span>
							<code className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 text-xs font-mono">
								{api.example}
							</code>
						</div>
						<div className="flex flex-col md:flex-row md:items-center gap-2">
							<span className="text-xs text-gray-500 dark:text-gray-400">
								cURL Example:
							</span>
							<code className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 text-xs font-mono break-all">
								{api.curl}
							</code>
							<button
								onClick={() => copyToClipboard(api.curl)}
								className="ml-2 p-1 rounded bg-blue-100 dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors"
								title="Copy cURL command"
							>
								<ClipboardCopy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
							</button>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
}
