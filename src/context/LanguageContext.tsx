"use client";

import { createContext, useContext, useEffect, useState } from "react";
// import { translations, Language } from "@/lib/translations";
import { translations, Language } from "@/lib/translations"

type LanguageContextType = {
    lang: Language;
    t: (key: keyof typeof translations.en) => string;
    toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<Language>("en");

    // Load saved language
    useEffect(() => {
        const saved = localStorage.getItem("lang") as Language | null;
        if (saved) setLang(saved);
    }, []);

    const toggleLang = () => {
        const nextLang = lang === "en" ? "fr" : "en";
        setLang(nextLang);
        localStorage.setItem("lang", nextLang);
    };

    const t = (key: keyof typeof translations.en) => {
        return translations[lang][key];
    };

    return (
        <LanguageContext.Provider value={{ lang, t, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
    return ctx;
};
