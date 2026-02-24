"use client";

import { ThemeWrapper } from "./ThemeWrapper";
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";

import { QuoteProvider } from "./QuoteContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <QuoteProvider>
                    <ThemeWrapper>
                        {children}
                    </ThemeWrapper>
                </QuoteProvider>
            </LanguageProvider>
        </ThemeProvider>
    );
};
