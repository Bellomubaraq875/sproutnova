"use client";

import { createContext, useContext } from "react";
import en from "./en.json";
import fr from "./fr.json";

export const dictionaries = {
    en,
    fr,
};

export type Lang = keyof typeof dictionaries;
export type TranslationKey = keyof typeof en;

type I18nContextType = {
    lang: Lang;
    t: (key: TranslationKey) => string;
};

export const I18nContext = createContext<I18nContextType>({
    lang: "en",
    t: (key) => dictionaries.en[key],
});

export function useTranslation() {
    return useContext(I18nContext);
}
