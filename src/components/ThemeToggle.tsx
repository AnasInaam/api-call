import * as React from "react";

const themes = ["light", "dark"] as const;
type Theme = typeof themes[number];

export default function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>("light");

  React.useEffect(() => {
    setMounted(true);
    // Only run on client
    const stored = localStorage.getItem("theme") as Theme | null;
    setTheme(stored || "light");
  }, []);

  React.useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  function handleToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const icon =
    theme === "light" ? (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
    ) : (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
    );

  const tooltip =
    theme === "light"
      ? "Switch to dark mode"
      : "Switch to light mode";

  if (!mounted) {
    // Prevent SSR mismatch: render nothing until mounted
    return <button aria-label="Toggle theme" className="invisible h-10 w-10" tabIndex={-1} disabled aria-hidden />;
  }

  return (
    <button
      aria-label="Toggle theme"
      title={tooltip}
      onClick={handleToggle}
      className="rounded-full p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-gray-800 dark:text-gray-100 mt-4 self-end shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
      tabIndex={0}
      type="button"
    >
      {icon}
      <span className="sr-only">{tooltip}</span>
    </button>
  );
}
