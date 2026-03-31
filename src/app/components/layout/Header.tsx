"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#E6F0E9] py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo - Pill Shaped Wrapper */}
        <Link href="/" className="group">
          <div className="bg-[#064E3B] text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-sm group-hover:bg-[#053d2e] transition-all">
            SproutNova
          </div>
        </Link>

        {/* Desktop Navigation Links - Centered */}
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-neutral-700 font-bold">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <Link href="/features" className="hover:text-green-600 transition">
            Features
          </Link>
          <Link href="#" className="hover:text-green-600 transition">
            Dashboard
          </Link>
          <Link href="#" className="hover:text-green-600 transition">
            Disease AI
          </Link>
        </div>

        {/* Action Button - Pill Shaped */}
        <div className="hidden md:block">
          <Link
            href="/register"
            className="bg-[#064E3B] text-[#FACC15] px-7 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-md inline-block"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#064E3B] font-bold text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-2">
          <Link href="/" className="block">Home</Link>
          <Link href="/features" className="block">Features</Link>
          <Link href="#" className="block">Dashboard</Link>
          <Link href="#" className="block">Disease AI</Link>
          <Link
            href="/register"
            className="bg-[#064E3B] text-center text-[#FACC15] py-3 rounded-full font-bold"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-600 font-semibold text-sm hover:text-[#064E3B] transition-colors"
    >
      {children}
    </Link>
  );
}