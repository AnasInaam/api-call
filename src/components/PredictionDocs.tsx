import { Bot, Home } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";

const docs = [
  {
    icon: <Home className="w-7 h-7 text-green-600 dark:text-green-400" />,
    title: "House Price Prediction API",
    description: "Predicts the price of a house based on features like area, bedrooms, bathrooms, stories, parking, and amenities. Powered by a trained machine learning model deployed on FastAPI.",
    details: [
      "Input: area, bedrooms, bathrooms, stories, parking, mainroad, guestroom, basement, hotwaterheating, airconditioning.",
      "Output: Predicted price in USD.",
      "Model: Random Forest Regressor (best RMSE on test set).",
      "API Endpoint: /predict (POST)"
    ]
  }
];

export default function PredictionDocs() {
  return (
    <div className="grid grid-cols-1 gap-6 mb-8">
      {docs.map((doc) => (
        <Card key={doc.title} className="bg-gradient-to-br from-green-50/80 to-blue-50/60 dark:from-gray-800 dark:to-gray-900 shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            {doc.icon}
            <CardTitle className="text-green-800 dark:text-green-300 text-lg">{doc.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-2 text-gray-700 dark:text-gray-200">
              {doc.description}
            </CardDescription>
            <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-300">
              {doc.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
