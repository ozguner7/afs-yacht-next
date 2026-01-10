"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "../data/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('TR');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const setLanguage = (lang: Language) => {
        if (lang === language) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setLanguageState(lang);
            setIsTransitioning(false);
        }, 300); // 300ms fade out/in
    };

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    // Load persisted language
    useEffect(() => {
        const saved = localStorage.getItem('language') as Language;
        if (saved && translations[saved]) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLanguageState(saved);
        }
    }, []);

    // Persist language
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isTransitioning }}>
            <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
