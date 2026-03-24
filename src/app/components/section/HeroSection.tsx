"use client";

import React from "react";
import Link from "next/link";
import { Search, Sprout, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#E6F0E9] pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side: Visual Composition (Image Placeholders) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[480px] aspect-[4/5]">

            {/* Main Image Container - Irregular Rounded Corners from Reference */}
            <div className="absolute inset-0 bg-neutral-200 rounded-t-[160px] rounded-bl-[160px] rounded-br-3xl overflow-hidden border-[6px] border-white shadow-xl flex items-center justify-center">
              <div className="flex flex-col items-center text-center p-10 space-y-4">
                <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center">
                  <Sprout size={64} className="text-green-dark" />
                </div>
                <p className="text-green-dark font-bold text-lg uppercase tracking-wider">
                  Smart Crop Analysis
                </p>
              </div>
            </div>

            {/* Floating Top-Right Box (Small Image Placeholder) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-28 h-28 bg-green-primary rounded-[32px] border-[4px] border-white shadow-lg flex items-center justify-center"
            >
              <MousePointer2 size={40} className="text-white fill-white" />
            </motion.div>

            {/* Side Decoration Dots from Reference */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-neutral-200 rounded-full" />
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
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 leading-[1.1] tracking-tight">
            Delivering the <br />
            Finest of <span className="text-green-primary">Nature's Gifts</span>
          </h1>

          {/* Search Bar - Custom Pill Shape to match Image */}
          <div className="relative group max-w-lg">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full h-16 pl-8 pr-36 rounded-full border-none bg-white shadow-md text-neutral-700 focus:ring-2 focus:ring-green-primary transition-all outline-none"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-green-dark text-yellow px-8 rounded-full flex items-center gap-2 font-bold hover:opacity-90 transition-opacity">
              <Search size={18} />
              Search
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex gap-12 pt-4">
            <div>
              <h3 className="text-5xl font-black text-neutral-900">10+</h3>
              <p className="text-neutral-500 font-medium">Years of experience</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-neutral-900">3.5k+</h3>
              <p className="text-neutral-500 font-medium">Farmer around world</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;