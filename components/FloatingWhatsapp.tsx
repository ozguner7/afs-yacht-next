"use client";

import { WhatsApp } from "./icons";
import { useEffect, useState } from "react";

export const FloatingWhatsapp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <a
            href="https://wa.me/905549753777"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
            aria-label="Chat on WhatsApp"
        >
            <WhatsApp size={32} />
        </a>
    );
};
