import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureCards from "../components/FeatureCards";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
			<Sidebar />
			<div className="flex-1 flex flex-col">
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
								Welcome to FlexAPI Studio
							</h2>
							<p className="text-gray-700 dark:text-gray-200 mb-2 text-lg">
								Explore a modern web app that lets you interact with multiple APIs and AI features. Try out classic Flask-powered utilities, chat with an AI assistant, or predict house prices using machine learning—all in one elegant, responsive interface.
							</p>
						</motion.section>

						<motion.section
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
						>
							<FeatureCards />
						</motion.section>
					</div>
				</main>
				<Footer />
			</div>
		</div>
	);
}
