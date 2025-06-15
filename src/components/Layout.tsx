import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ThemeProvider } from "next-themes";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-10">{children}</main>
      </div>
    </div>
  </ThemeProvider>
);

export default Layout;
