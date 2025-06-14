import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CopyButton from "./CopyButton";

export default function MarkdownMessage({ content }: { content: string }) {
  // Fallback: if response looks like code but is not wrapped, wrap in triple backticks
  let safeContent = content;
  if (
    /^(\s*function|const |let |var |def |class )/.test(content) &&
    !content.trim().startsWith("```") &&
    !content.includes("\n```")
  ) {
    safeContent = '\n\n```\n' + content + '\n```\n';
  }
  const components = {
    code({
      inline,
      children,
      ...props
    }: any) {
      if (!inline) {
        const codeString = String(children).replace(/\n$/, "");
        return (
          <div className="relative group">
            <pre className="bg-gray-900 text-green-200 rounded p-3 overflow-x-auto text-sm my-2 dark:bg-gray-800 dark:text-green-200 border border-gray-700 dark:border-gray-600">
              <code {...props}>{children}</code>
            </pre>
            <div className="absolute top-2 right-2 opacity-80 group-hover:opacity-100">
              <CopyButton value={codeString} />
            </div>
          </div>
        );
      }
      return (
        <code className="bg-gray-200 dark:bg-gray-700 rounded px-1 py-0.5 text-sm font-mono text-blue-700 dark:text-blue-200 border border-gray-300 dark:border-gray-600" {...props}>
          {children}
        </code>
      );
    },
    a({ children, ...props }: any) {
      return (
        <a className="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100" {...props}>
          {children}
        </a>
      );
    },
    li({ children, ...props }: any) {
      return <li className="mb-1 ml-4 list-disc" {...props}>{children}</li>;
    },
  };
  return (
    <ReactMarkdown
      children={safeContent}
      remarkPlugins={[remarkGfm]}
      components={components}
    />
  );
}
