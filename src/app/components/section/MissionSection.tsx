"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScanFace, ArrowRight, Leaf, ShieldCheck } from 'lucide-react';

export default function About() {
  const { scrollYProgress } = useScroll();

  // Parallax shifts for the large background leaves
  const yLarge1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yLarge2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotateLarge = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const leafVariants = {
    breeze: (delay: number) => ({
      y: [0, 15, -15, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.03, 0.97, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    }),
  };

  return (
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">

      {/* --- Animated Background Elements Layer --- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">

        {/* L1: Large Parallax Leaves (Green & Grey Mix) */}
        <motion.div style={{ y: yLarge1, rotate: rotateLarge }} className="absolute top-10 left-[2%] text-green-primary/5">
          <Leaf size={280} strokeWidth={0.5} />
        </motion.div>

        <motion.div style={{ y: yLarge2 }} className="absolute bottom-10 right-[2%] text-neutral-300/30">
          <Leaf size={320} strokeWidth={0.5} />
        </motion.div>

        {/* Small Breezy Leaves - Green/Grey Theme */}
        {/* Grey Leaf (Left Center) */}
        <motion.div
          variants={leafVariants}
          animate="breeze"
          custom={0.5}
          className="absolute top-[25%] left-[10%] text-neutral-400/20"
        >
          <Leaf size={60} strokeWidth={1} />
        </motion.div>

        {/* Green Leaf (Right Center) */}
        <motion.div
          variants={leafVariants}
          animate="breeze"
          custom={1.2}
          className="absolute top-[50%] right-[15%] text-green-primary/10"
        >
          <Leaf size={80} strokeWidth={1} />
        </motion.div>

        {/* Grey Leaf (Far Right Top) */}
        <motion.div
          variants={leafVariants}
          animate="breeze"
          custom={2}
          className="absolute top-[15%] right-[30%] text-neutral-200/40"
        >
          <Leaf size={45} strokeWidth={1.5} />
        </motion.div>

        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-nav-bg/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* --- Left: Text Content --- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-3">
            <span className="inline-block text-green-primary font-bold text-xs uppercase tracking-[0.4em] font-sans px-4 py-1 bg-green-light/10 rounded-full">
              Our Story
            </span>
            <h2 className="text-4xl md:text-6xl font-display text-neutral-900 leading-[1.15]">
              Grounded in Nature <br />
              <span className="text-green-dark italic">Dedicated to Purity</span>
            </h2>
          </div>

          <p className="text-neutral-500 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
            Driven by a passion for sustainable farming, we harness AI and real-time data to help you deliver nature's finest harvest—pure, fresh, and intelligently grown for a healthier tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
            <button className="btn btn-primary group shadow-xl shadow-green-dark/20">
              More Details
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>

            <div className="flex items-center gap-3 px-6 py-3 bg-neutral-50 rounded-full border border-neutral-100">
              <ShieldCheck className="text-green-primary" size={22} />
              <div className="text-left">
                <p className="text-[10px] font-black text-neutral-900 uppercase tracking-widest">Global Standards</p>
                <p className="text-[10px] text-neutral-400 font-medium font-sans">100% Organic Certified</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Right: Image Composition --- */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[520px] h-[640px]"
          >
            <div className="relative w-full h-full rounded-[160px] overflow-hidden border-[10px] border-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] group">
              <Image
                src="/images/aboutimage.png"
                alt="Coffee Plant"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />

              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-yellow/50 shadow-[0_0_15px_#FACC15] z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 flex flex-col items-center justify-end pb-16 px-12 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center mb-6 border border-white/20 shadow-2xl"
                >
                  <ScanFace size={40} className="text-yellow" />
                </motion.div>
                <h3 className="text-2xl font-bold font-display text-white leading-tight">
                  AI-Powered Detection:<br />
                  <span className="text-yellow-soft italic">Real-time Leaf Analysis</span>
                </h3>
              </div>
            </div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-6 -left-12 bg-green-dark text-yellow px-10 py-5 rounded-full shadow-2xl border-4 border-white transform -rotate-6 z-20"
            >
              <span className="font-black text-sm tracking-[0.2em] uppercase">Est. 2026</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}