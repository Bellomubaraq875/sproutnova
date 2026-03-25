"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Leaf } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="relative w-full bg-nav-bg py-28 px-6 text-center overflow-hidden">

      {/* --- Animated Leafy Background Elements --- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Top Left Leaf */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -left-10 text-green-light/20 opacity-40"
        >
          <Leaf size={240} strokeWidth={1} />
        </motion.div>

        {/* Bottom Right Leaf */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 -right-20 text-green-primary/10 opacity-30"
        >
          <Leaf size={320} strokeWidth={0.5} />
        </motion.div>

        {/* Floating Small Leaf Center Left */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -40, 0], rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-[10%] text-green-dark/5"
        >
          <Leaf size={40} />
        </motion.div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-green-dark font-bold uppercase tracking-[0.2em] text-xs font-sans block"
        >
          Newsletter
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display text-neutral-900 leading-tight"
        >
          Stay Fresh, Stay Inspired <br />
          Join Our <span className="text-green-primary italic">Organic Family!</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative max-w-xl mx-auto mt-12"
        >
          <form className="flex items-center bg-white rounded-full p-2 shadow-xl border border-white/50 backdrop-blur-sm group focus-within:ring-4 focus-within:ring-green-primary/10 transition-all">
            <input
              type="email"
              placeholder="Write your business mail.."
              className="flex-1 bg-transparent px-6 py-3 text-neutral-800 placeholder:text-neutral-400 outline-none font-sans text-sm"
              required
            />
            <button
              type="submit"
              className="bg-green-dark text-yellow px-10 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-green-primary hover:scale-[1.02] transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-green-dark/20"
            >
              Subscribe Now
              <Send size={16} />
            </button>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-neutral-400 text-[11px] mt-6 font-sans uppercase tracking-[0.3em] font-medium"
          >
            • No spam • Weekly insights • Expert advice •
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default Newsletter;