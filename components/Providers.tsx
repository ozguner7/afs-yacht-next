"use client";

import { ThemeWrapper } from "./ThemeWrapper";
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <ThemeWrapper>
                    {children}
                </ThemeWrapper>
            </LanguageProvider>
        </ThemeProvider>
    );
};
