"use client"
import { LanguageContextType } from "@/app/types/languageType";
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<string>("fr");

    return <LanguageContext.Provider value={{ lang, setLang }}>
        {children}
    </LanguageContext.Provider>
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};