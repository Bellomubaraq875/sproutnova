'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  const { scrollYProgress } = useScroll();

  // Subtle parallax for the "Background Flora"
  const yLeaf = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateOrb = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section className="relative w-full py-28 md:py-40 px-6 bg-white overflow-hidden">

      {/* --- Minimalist Background Accents --- */}
      <motion.div
        style={{ y: yLeaf }}
        className="absolute top-20 right-[15%] text-neutral-100 -z-10"
      >
        <Leaf size={400} strokeWidth={0.5} />
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* --- Left Content: Bold & Airy --- */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center lg:justify-start gap-2"
            >
              <Sparkles size={16} className="text-green-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">
                Next-Gen Agriculture
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-8xl font-display text-neutral-900 leading-[0.95]">
              Start Smart. <br />
              Grow <span className="italic text-green-primary">Pure.</span>
            </h2>
          </div>

          <p className="text-neutral-500 text-lg md:text-xl font-sans leading-relaxed max-w-md mx-auto lg:mx-0">
            Join a global community of forward-thinking farmers using AI to redefine the harvest.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8 pt-4 justify-center lg:justify-start">
            <button className="group flex items-center gap-6 text-neutral-900 font-bold text-lg">
              <span className="w-16 h-16 rounded-full bg-green-dark text-white flex items-center justify-center group-hover:bg-green-primary transition-all duration-500 shadow-xl shadow-green-dark/20">
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="uppercase tracking-widest text-xs">Join the movement</span>
            </button>
          </div>
        </div>

        {/* --- Right Content: The "Organic Orb" --- */}
        <div className="lg:w-1/2 relative flex justify-center">
          <motion.div
            style={{ rotate: rotateOrb }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
          >
            {/* The Main Shape */}
            <div className="absolute inset-0 bg-nav-bg/40 rounded-[100px] rotate-12 blur-2xl" />
            <div className="absolute inset-0 bg-green-dark rounded-full overflow-hidden border-[12px] border-white shadow-2xl">
              {/* Abstract Green Pattern or Real Macro Plant Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-primary to-green-dark-pill opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center text-white/10">
                <Leaf size={300} strokeWidth={0.5} />
              </div>

              {/* Central Floating Text inside the Orb */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                <div className="w-12 h-1 bg-yellow mb-6" />
                <p className="text-white font-display text-2xl md:text-4xl italic leading-tight">
                  The Future is <br /> Nature-First
                </p>
              </div>
            </div>

            {/* Floating Mini Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white p-6 rounded-3xl shadow-2xl border border-neutral-100 hidden md:block"
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-green-dark">2.4k</span>
                <span className="text-[8px] font-black uppercase text-neutral-400 tracking-tighter">Active Nodes</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}