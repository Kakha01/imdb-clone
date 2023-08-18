"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-black dark:text-white text-slate-900 transition-colors duration-200 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  )
}
