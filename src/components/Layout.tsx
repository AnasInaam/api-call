import React from "react";
import Header from "./Header";
import { ThemeProvider } from "next-themes";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  </ThemeProvider>
);

export default Layout;
