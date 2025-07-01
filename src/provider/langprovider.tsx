"use client"
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<"en" | "fr">("fr");

    return <LanguageContext.Provider value={{ lang, setLang }}>
        {children}
    </LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext);