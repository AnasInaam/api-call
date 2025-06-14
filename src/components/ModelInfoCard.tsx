import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Bot } from "lucide-react";

interface ModelInfoCardProps {
  name: string;
  provider: string;
  example: string;
  description: string;
}

export default function ModelInfoCard({ name, provider, example, description }: ModelInfoCardProps) {
  return (
    <Card className="w-full max-w-xs bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-2xl border-0">
      <CardHeader className="flex flex-row items-center gap-2">
        <Bot className="w-5 h-5 text-blue-600 dark:text-blue-300" />
        <CardTitle className="text-lg font-bold text-blue-700 dark:text-blue-300">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-gray-500 mb-2">Provider: {provider}</div>
        <div className="text-sm mb-2">{description}</div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded p-2 text-xs font-mono text-gray-700 dark:text-gray-100">
          <span className="font-semibold">Example:</span> {example}
        </div>
      </CardContent>
    </Card>
  );
}
