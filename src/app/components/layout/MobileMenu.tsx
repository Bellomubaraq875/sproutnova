"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect } from "react";

interface NavLink {
  key: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: readonly NavLink[] | NavLink[]; // Accepts the links from Header
  lang: string;
  toggleLang: () => void;
  t: (key: string) => string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  lang,
  toggleLang,
  t
}: MobileMenuProps) {

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-[#000814]/95 backdrop-blur-md flex flex-col items-center justify-center animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
      >
        <X size={32} />
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col items-center gap-8 mb-12">
        {navLinks.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            onClick={onClose}
            className="text-2xl font-bold text-white hover:text-[var(--lab-sky)] transition-colors"
          >
            {t(link.key)}
          </Link>
        ))}
      </nav>

      {/* Mobile Language Toggle */}
      <button
        onClick={toggleLang}
        className="relative flex items-center w-32 h-12 bg-[#011372] rounded-full p-1 shadow-lg"
      >
        <div
          className={`absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-[var(--lab-yellow)] rounded-full shadow-md transform transition-transform duration-300 ${lang === "en" ? "translate-x-0" : "translate-x-full left-[4px]"
            }`}
        />
        <div className="relative z-10 flex w-full justify-between items-center text-sm font-bold tracking-widest px-1">
          <span className={`w-1/2 text-center ${lang === "en" ? "text-[#011372]" : "text-[var(--lab-sky)]"}`}>EN</span>
          <span className={`w-1/2 text-center ${lang === "fr" ? "text-[#011372]" : "text-[var(--lab-sky)]"}`}>FR</span>
        </div>
      </button>
    </div>
  );
}