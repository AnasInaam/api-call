import dynamic from "next/dynamic";
import Head from "next/head";
import Layout from "../components/Layout";
import PredictionDocs from "../components/PredictionDocs";
import Footer from "../components/Footer";
const HousePriceForm = dynamic(() => import("../components/HousePriceForm"), { ssr: false });

export default function HousePricePage() {
  return (
    <Layout>
      <Head>
        <title>House Price Prediction | My Fullstack App</title>
        <meta name="description" content="Predict house prices using a machine learning model." />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400 text-center">House Price Prediction</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-200 text-center text-lg">
            Instantly predict house prices using a machine learning model trained on real estate data. Enter your house features below and get an accurate price estimate.
          </p>
          <PredictionDocs />
          <HousePriceForm />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
