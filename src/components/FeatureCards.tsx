import { FlaskConical, Home, Bot } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import Link from "next/link";

const features = [
	{
		icon: (
			<FlaskConical className="w-7 h-7 text-purple-600 dark:text-purple-400" />
		),
		title: "Text & Number Utilities",
		description:
			"Try out 5 different Flask API endpoints: word count, number addition, string reversal, temperature conversion, and palindrome check.",
		link: "/flask-api",
		button: "Try Utilities",
	},
	{
		icon: <Home className="w-7 h-7 text-green-600 dark:text-green-400" />,
		title: "House Price Prediction",
		description:
			"Predict house prices instantly using a machine learning model trained on real estate data.",
		link: "/house-price",
		button: "Predict House Price",
	},
	{
		icon: <Bot className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
		title: "Chatbot",
		description:
			"Conversational AI assistant powered by OpenAI, ready to answer your questions and help you explore AI capabilities.",
		link: "/chatbot",
		button: "Try Chatbot",
	},
];

export default function FeatureCards() {
	return (
		<div className="grid grid-cols-1 gap-6 mt-8">
			{features.map((f) => (
				<Card
					key={f.title}
					className="bg-gradient-to-br from-blue-50/80 to-indigo-50/60 dark:from-gray-800 dark:to-gray-900 shadow-lg"
				>
					<CardHeader className="flex flex-row items-center gap-4">
						{f.icon}
						<CardTitle className="text-blue-800 dark:text-blue-300 text-lg">
							{f.title}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription className="mb-4 text-gray-700 dark:text-gray-200">
							{f.description}
						</CardDescription>
						<Link href={f.link} passHref>
							<button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
								{f.button}
							</button>
						</Link>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
