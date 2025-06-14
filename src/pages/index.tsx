import Header from "../components/Header";
import Footer from "../components/Footer";
import ApiForm from "../components/ApiForm";
import { motion } from "framer-motion";
import { BookText, Hash, RefreshCw, Thermometer, RotateCcw, CheckCircle2 } from "lucide-react";

const apiCards = [
	{
		icon: <BookText className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
		name: "Word Count",
		example: "This is a test sentence",
		description: "Returns the number of words in the input text.",
	},
	{
		icon: <Hash className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
		name: "Number Addition",
		example: "1 2 3.5 4",
		description: "Returns the sum of all numbers in the input.",
	},
	{
		icon: <RotateCcw className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
		name: "String Reversal",
		example: "hello world",
		description: "Returns the reversed input string.",
	},
	{
		icon: <Thermometer className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
		name: "Temperature Conversion",
		example: "100 C or 212 F",
		description: "Converts between Celsius and Fahrenheit.",
	},
	{
		icon: <CheckCircle2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
		name: "Palindrome Check",
		example: "racecar",
		description: "Checks if the input is a palindrome.",
	},
];

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
			<Header />
			<main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
				<div className="max-w-4xl mx-auto w-full space-y-8">
					<motion.section
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 mt-8"
					>
						<h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-400">
							About This Project
						</h2>
						<p className="text-gray-700 dark:text-gray-200 mb-2">
							<b>My Fullstack API Playground</b> is a modern web app to demo and
							interact with 5 different Flask API endpoints. Try out word count,
							number addition, string reversal, temperature conversion, and
							palindrome check—all in one place!
						</p>
					</motion.section>

					<motion.section
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="grid grid-cols-1 md:grid-cols-2 gap-6"
					>
						{apiCards.map((api) => (
							<div
								key={api.name}
								className="flex items-start gap-4 bg-gradient-to-br from-blue-50/80 to-indigo-50/60 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow p-5"
							>
								<div>{api.icon}</div>
								<div>
									<h3 className="font-semibold text-lg text-blue-800 dark:text-blue-300">
										{api.name}
									</h3>
									<p className="text-gray-700 dark:text-gray-200 text-sm mb-1">
										{api.description}
									</p>
									<span className="text-xs text-gray-500 dark:text-gray-400">
										Example:{" "}
										<code className="bg-gray-100 dark:bg-gray-800 rounded px-1">
											{api.example}
										</code>
									</span>
								</div>
							</div>
						))}
					</motion.section>

					<motion.section
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className="flex justify-center"
					>
						<motion.div
							initial={{ scale: 0.95, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="w-full max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6"
						>
							<ApiForm />
						</motion.div>
					</motion.section>
				</div>
			</main>
			<Footer />
		</div>
	);
}
