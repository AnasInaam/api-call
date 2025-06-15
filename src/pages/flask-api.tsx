import dynamic from "next/dynamic";
import Head from "next/head";
import Layout from "../components/Layout";
const ApiForm = dynamic(() => import("../components/ApiForm"), { ssr: false });
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

export default function FlaskApiPage() {
	return (
		<Layout>
			<Head>
				<title>Flask API Playground | My Fullstack App</title>
				<meta
					name="description"
					content="Try out 5 different Flask API endpoints: word count, number addition, string reversal, temperature conversion, and palindrome check."
				/>
			</Head>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
				<div className="max-w-2xl w-full">
					<h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400 text-center">
						Flask API Playground
					</h2>
					<p className="mb-6 text-gray-700 dark:text-gray-200 text-center">
						Interact with 5 different Flask API endpoints: word count, number
						addition, string reversal, temperature conversion, and palindrome
						check. Enter your input and see the results instantly!
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
					</div>
					<ApiForm />
				</div>
			</div>
		</Layout>
	);
}
