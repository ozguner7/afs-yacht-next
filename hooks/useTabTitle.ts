import { useEffect, useRef } from "react";
import { useLanguage } from "../components/LanguageContext";
import { useQuote } from "../components/QuoteContext";

export const useTabTitle = () => {
    const { t } = useLanguage();
    const { selectedProducts } = useQuote();
    const originalTitle = useRef("");

    useEffect(() => {
        originalTitle.current = document.title;

        const handleVisibilityChange = () => {
            if (document.hidden && selectedProducts.length > 0) {
                // User left the tab AND has products
                document.title = "🚢 Ürünlerinizi unutmayın!";
            } else {
                // User came back or no products
                document.title = originalTitle.current;
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            document.title = originalTitle.current; // Restore on unmount
        };
    }, [selectedProducts.length]); // Re-run if product count changes to ensure fresh state closure if needed, though ref + fresh read is better.
};
