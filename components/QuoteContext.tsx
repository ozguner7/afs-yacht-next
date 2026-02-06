"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    yachtName: string;
    city: string;
    note: string;
    kvkkParams: boolean;
    marketingConsent: boolean;
};

const initialFormData: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    yachtName: "",
    city: "",
    note: "",
    kvkkParams: false,
    marketingConsent: false
};

type QuoteContextType = {
    selectedProducts: string[];
    setSelectedProducts: React.Dispatch<React.SetStateAction<string[]>>;
    selectedProductDetails: Record<string, Record<string, string>>;
    setSelectedProductDetails: React.Dispatch<React.SetStateAction<Record<string, Record<string, string>>>>;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
    addProduct: (id: string, details?: Record<string, string>) => void;
    removeProduct: (id: string) => void;
    clearBasket: () => void;
};

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
    const [selectedProductDetails, setSelectedProductDetails] = useState<Record<string, Record<string, string>>>({});
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const savedProducts = localStorage.getItem("quote_selectedProducts");
        const savedDetails = localStorage.getItem("quote_selectedProductDetails");
        const savedFormData = localStorage.getItem("quote_formData");
        const savedStep = localStorage.getItem("quote_step");

        if (savedProducts) setSelectedProducts(JSON.parse(savedProducts));
        if (savedDetails) setSelectedProductDetails(JSON.parse(savedDetails));

        let loadedStep = 1;
        if (savedStep) loadedStep = parseInt(savedStep);

        if (savedFormData) {
            const parsedData = JSON.parse(savedFormData);
            setFormData(parsedData);

            // Smart Resume: If user has entered any contact info, jump to step 2
            if (parsedData.firstName || parsedData.lastName || parsedData.email || parsedData.phone) {
                loadedStep = 2;
            }
        }

        setCurrentStep(loadedStep);
        setIsLoaded(true);
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem("quote_selectedProducts", JSON.stringify(selectedProducts));
    }, [selectedProducts, isLoaded]);

    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem("quote_selectedProductDetails", JSON.stringify(selectedProductDetails));
    }, [selectedProductDetails, isLoaded]);

    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem("quote_formData", JSON.stringify(formData));
    }, [formData, isLoaded]);

    useEffect(() => {
        if (!isLoaded) return;
        localStorage.setItem("quote_step", currentStep.toString());
    }, [currentStep, isLoaded]);

    const addProduct = (id: string, details: Record<string, string> = {}) => {
        setSelectedProducts(prev => {
            if (prev.includes(id)) return prev;
            return [...prev, id];
        });
        if (Object.keys(details).length > 0) {
            setSelectedProductDetails(prev => ({
                ...prev,
                [id]: details
            }));
        }
    };

    const removeProduct = (id: string) => {
        setSelectedProducts(prev => prev.filter(pid => pid !== id));
        setSelectedProductDetails(prev => {
            const newDetails = { ...prev };
            delete newDetails[id];
            return newDetails;
        });
    };

    const clearBasket = () => {
        setSelectedProducts([]);
        setSelectedProductDetails({});
        setFormData(initialFormData);
        setCurrentStep(1);
    };

    return (
        <QuoteContext.Provider value={{
            selectedProducts,
            setSelectedProducts,
            selectedProductDetails,
            setSelectedProductDetails,
            formData,
            setFormData,
            currentStep,
            setCurrentStep,
            addProduct,
            removeProduct,
            clearBasket
        }}>
            {children}
        </QuoteContext.Provider>
    );
};

export const useQuote = () => {
    const context = useContext(QuoteContext);
    if (context === undefined) {
        throw new Error("useQuote must be used within a QuoteProvider");
    }
    return context;
};
