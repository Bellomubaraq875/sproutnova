export const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        hero_title: "Welcome to our website",
        hero_subtitle: "We deliver quality services",
        contact_button: "Contact Us",
    },
    fr: {
        nav_home: "Accueil",
        nav_about: "À propos",
        hero_title: "Bienvenue sur notre site web",
        hero_subtitle: "Nous fournissons des services de qualité",
        contact_button: "Contactez-nous",
    },
} as const;

export type Language = keyof typeof translations;
