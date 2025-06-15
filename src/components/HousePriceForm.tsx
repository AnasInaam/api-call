import React, { useState } from "react";
import { Card } from "../components/ui/card";
import { Sparkles } from "lucide-react";

const API_URL = "https://house-price-api-0k5l.onrender.com/predict";

const defaultForm = {
  area: 1500,
  bedrooms: 3,
  bathrooms: 2,
  stories: 1,
  parking: 1,
  mainroad: 1,
  guestroom: 0,
  basement: 0,
  hotwaterheating: 0,
  airconditioning: 1
};

type FormState = typeof defaultForm;

export default function HousePriceForm() {
  const [form, setForm] = useState<FormState>(defaultForm);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Prediction failed");
      const data = await res.json();
      setResult(`Predicted Price: $${data.price.toLocaleString()}`);
    } catch (err: any) {
      setError(err.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-lg mx-auto p-8 bg-white dark:bg-gray-900 shadow-xl rounded-2xl">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-6 h-6 text-blue-500 dark:text-blue-300" />
        <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400">Enter House Features</h3>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {Object.entries(defaultForm).map(([key, val]) => (
          <div key={key} className="flex flex-col">
            <label htmlFor={key} className="text-sm font-medium mb-1 capitalize text-gray-700 dark:text-gray-200">
              {key.replace(/_/g, " ")}
            </label>
            <input
              id={key}
              name={key}
              type="number"
              value={form[key as keyof FormState]}
              onChange={handleChange}
              className="rounded border px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        ))}
        <div className="col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Predicting..." : "Predict Price"}
          </button>
        </div>
      </form>
      {result && <div className="mt-4 text-green-600 font-semibold">{result}</div>}
      {error && <div className="mt-4 text-red-600 font-semibold">{error}</div>}
    </Card>
  );
}
