"use client";

import { useTheme } from "@/components/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    const { darkMode } = useTheme();

    return (
        <div className={`font-sans antialiased transition-colors duration-500 ${darkMode ? 'bg-brand-navy text-slate-200' : 'bg-slate-50 text-slate-800'} ${!darkMode && 'light-mode'} min-h-screen flex flex-col`}>
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};
