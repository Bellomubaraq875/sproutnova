"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { dictionaries, Lang, TranslationKey } from "@/lib/i18n";

type I18nContextType = {
    lang: Lang;
    t: (key: TranslationKey) => string;
    toggleLang: () => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");

    // Load saved language from localStorage on client
    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "en" || saved === "fr") {
            setLang(saved);
            document.documentElement.lang = saved;
        }
    }, []);

    // Toggle between EN and FR
    const toggleLang = () => {
        const next = lang === "en" ? "fr" : "en";
        setLang(next);
        localStorage.setItem("lang", next);
        document.documentElement.lang = next;
    };

    // Translation function with safe fallback
    const t = (key: TranslationKey) => dictionaries[lang][key] ?? key;

    return (
        <I18nContext.Provider value={{ lang, t, toggleLang }}>
            {children}
        </I18nContext.Provider>
    );
}


export const useI18n = () => {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within I18nProvider");
    return ctx;
};
