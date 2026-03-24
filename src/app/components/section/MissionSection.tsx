// src/components/landing/About.tsx
"use client";

import { ScanFace, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-white py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div>
            <p className="text-green-primary font-bold text-sm tracking-wide uppercase">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mt-2">
              Grounded in Nature Dedicated to Purity
            </h2>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Driven by a passion for sustainable farming, we harness AI and real-time data to help you deliver nature's finest harvest—pure, fresh, and intelligently grown for a healthier tomorrow.
          </p>

          <button className="h-12 bg-green-light/20 text-green-dark-pill px-8 rounded-full flex items-center gap-2 text-sm font-semibold hover:bg-green-light/30 transition shadow-inner">
            More Details
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Right: Irregular Shaped Image & Label */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] h-[600px] bg-slate-200 rounded-[140px] overflow-hidden shadow-lg border-4 border-white flex items-center justify-center">
            <div className="text-center text-green-700/60 p-12 flex flex-col items-center gap-6">
              <ScanFace className="w-24 h-24 stroke-1 text-green-primary" />
              <p className="text-lg font-semibold leading-snug">AI-Powered Disease Detection:<br /> Just Point & Scan</p>
            </div>

            {/* Deep Green Label (e.g., Since 20XX) */}
            <div className="absolute bottom-10 left-[-40px] bg-green-dark-pill text-white font-medium text-xs px-6 py-3 rounded-full shadow-lg transform -rotate-12 border-2 border-white">
              Since 20XX
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}