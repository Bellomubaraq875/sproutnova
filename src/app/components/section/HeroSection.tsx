"use client";

import React from "react";
import Image from "next/image";
import { Search, Sprout, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden min-h-[80vh] flex items-center">

      {/* 1. Full Farmland Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
          // src="/images/heroImage.png"
          alt="Green Farmland Background"
          fill
          className="object-cover"
          priority
        />
        {/* Minty Overlay to maintain brand color and text readability */}
        <div className="absolute inset-0 bg-[#E6F0E9]/30 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* Left Side: Visual Composition */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[480px] aspect-[4/5]">

            {/* Main Image Container - Plant Image */}
            <div className="absolute inset-0 bg-neutral-200 rounded-t-[160px] rounded-bl-[160px] rounded-br-3xl overflow-hidden border-[6px] border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1000&auto=format&fit=crop"
                alt="Healthy Plant Analysis"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Subtle Gradient Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col items-center justify-end p-10 space-y-2">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <Sprout size={32} className="text-white" />
                </div>
                <p className="text-white font-bold text-lg uppercase tracking-wider">
                  Smart Crop Analysis
                </p>
              </div>
            </div>

            {/* Floating Top-Right Box - Secondary Plant Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-32 h-32 rounded-[32px] border-[4px] border-white shadow-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=400&auto=format&fit=crop"
                alt="Seedling"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-green-primary/20 flex items-center justify-center">
                <MousePointer2 size={32} className="text-white fill-white drop-shadow-md" />
              </div>
            </motion.div>

            {/* Side Decoration Dots */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-white/50 backdrop-blur-md rounded-full shadow-sm" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-display text-neutral-900 leading-[1.1] tracking-tight">
            Delivering the <br />
            Finest of <span className="text-green-primary">Nature's Gifts</span>
          </h1>

          <p className="text-neutral-600 text-lg max-w-md font-sans leading-relaxed">
            Harnessing AI to monitor soil health, predict weather trends, and detect crop diseases before they spread.
          </p>

          {/* Search Bar */}
          <div className="relative group max-w-lg">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full h-16 pl-8 pr-36 rounded-full border-none bg-white shadow-lg text-neutral-700 focus:ring-2 focus:ring-green-primary transition-all outline-none"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-green-dark text-yellow px-8 rounded-full flex items-center gap-2 font-bold hover:bg-green-primary transition-all active:scale-95">
              <Search size={18} />
              Search
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex gap-12 pt-4 border-t border-neutral-900/10">
            <div>
              <h3 className="text-5xl font-black text-neutral-900">10+</h3>
              <p className="text-neutral-500 font-bold uppercase text-xs tracking-widest">Years of experience</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-neutral-900">3.5k+</h3>
              <p className="text-neutral-500 font-bold uppercase text-xs tracking-widest">Farmer around world</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;