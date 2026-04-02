"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Leaf,
    Sparkles,
    ArrowRight,
    ScanSearch,
    CheckCircle2,
    Zap,
    ShieldCheck,
    TrendingUp,
    Activity
} from "lucide-react";

import FeatureSection from "../components/section/FeatureSection";
import HowItWorks from "../components/section/HowItWorks";
import CTA from "../components/section/CTA";

export default function FeaturesPage() {
    const { scrollYProgress } = useScroll();
    const yLeaf = useTransform(scrollYProgress, [0, 1], [0, -300]);

    const benefits = [
        {
            title: "Increase Yield",
            desc: "Make smarter decisions that improve productivity through AI precision.",
            icon: <TrendingUp className="text-green-primary" size={24} />,
        },
        {
            title: "Reduce Losses",
            desc: "Detect diseases early and prevent terminal damage before it spreads.",
            icon: <ShieldCheck className="text-green-primary" size={24} />,
        },
        {
            title: "Save Time",
            desc: "Automate manual scouting with real-time digital AI insights.",
            icon: <Zap className="text-green-primary" size={24} />,
        },
    ];

    return (
        <main className="relative bg-white overflow-hidden">
            {/* --- Background Parallax Leaves --- */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <motion.div style={{ y: yLeaf }} className="absolute top-40 left-[5%] text-neutral-400/10">
                    <Leaf size={300} strokeWidth={0.5} />
                </motion.div>
            </div>

            {/* --- 1. Refined Hero Section --- */}
            <section className="relative pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center lg:justify-start gap-2"
                        >
                            <Sparkles size={16} className="text-green-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">
                                The Ecosystem
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display text-neutral-900 leading-tight"
                        >
                            Explore Powerful <br />
                            <span className="italic text-green-primary font-display">Features</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-neutral-500 text-lg font-sans max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            SproutNova combines AI, real-time data, and smart analytics to help
                            farmers make better decisions and increase productivity.
                        </motion.p>
                    </div>

                    {/* Hero Image - High Definition Botanical Tech */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white"
                    >
                        <Image
                            src="/images/featurehero.png"
                            alt="Advanced Greenhouse Farming"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-green-dark/10" />
                        {/* Floating Glass Badge */}
                        <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] text-white">
                            <Activity className="mb-2 text-yellow" size={24} />
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">System Status</p>
                            <p className="font-display italic text-lg">Optimized Yield</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- 2. Core Features --- */}
            <FeatureSection />

            {/* --- 3. Adjusted AI Disease Detection --- */}
            <section className="py-24 px-6 bg-nav-bg/20 border-y border-neutral-100">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 space-y-8"
                    >
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-primary shadow-lg">
                                <ScanSearch size={24} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display text-neutral-900 leading-tight">
                                AI Disease <br />
                                <span className="italic text-green-dark">Detection</span>
                            </h2>
                        </div>

                        <p className="text-neutral-600 text-lg leading-relaxed font-sans max-w-lg">
                            Detect crop diseases instantly using image scanning. Get accurate diagnosis and treatment recommendations.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Instant Image Analysis",
                                "Symptom AI Diagnosis",
                                "Treatment Suggestions",
                                "Early Loss Prevention"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-neutral-700 font-sans">
                                    <CheckCircle2 size={16} className="text-green-primary shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="btn btn-primary group">
                            Try Detection Now
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Reduced Box-Size Visual Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 relative flex justify-center"
                    >
                        <div className="relative w-full max-w-[380px] aspect-square rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-xl">
                            <Image
                                src="/images/detection.png"
                                alt="Healthy Leaf Scan"
                                fill
                                className="object-cover"
                            />
                            {/* Dynamic Scan Line */}
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 w-full h-[2px] bg-green-primary shadow-[0_0_15px_#22C55E] z-10"
                            />
                            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center">
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl text-white text-center">
                                    <p className="text-[8px] font-black uppercase tracking-widest opacity-70">Scanning...</p>
                                    <p className="font-display italic text-sm">Clear Health</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- 4. How It Works --- */}
            <HowItWorks />

            {/* --- 5. Benefits --- */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-display text-neutral-900 leading-tight">
                            Why Choose <br />
                            <span className="italic text-green-primary">SproutNova?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-white border border-neutral-100 shadow-xl shadow-green-dark/5 hover:-translate-y-2 transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-nav-bg flex items-center justify-center mb-6 group-hover:bg-green-primary group-hover:text-white transition-colors">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-3 font-sans">{benefit.title}</h3>
                                <p className="text-neutral-500 leading-relaxed font-sans text-sm">
                                    {benefit.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 6. CTA --- */}
            <CTA />
        </main>
    );
}