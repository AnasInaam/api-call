import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ value, className = "" }: { value: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <button
      onClick={handleCopy}
      className={`ml-2 p-1 rounded hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors ${className}`}
      title="Copy to clipboard"
      aria-label="Copy to clipboard"
      type="button"
    >
      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-500" />}
    </button>
  );
}
