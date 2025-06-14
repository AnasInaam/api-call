import Header from "../components/Header";
import Footer from "../components/Footer";
import ApiForm from "../components/ApiForm";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <ThemeToggle />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <ApiForm />
      </main>
      <Footer />
    </div>
  );
}
