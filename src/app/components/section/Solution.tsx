'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, Scan, Activity, Droplets, CloudSun } from 'lucide-react';

export default function Solution() {
    const { scrollYProgress } = useScroll();
    const yLeaf = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const solutionPoints = [
        "Accurate crop recommendations tailored to your farm",
        "Early disease detection to prevent crop damage",
        "Data-driven insights for better yield and planning",
        "Real-time monitoring of weather and soil conditions"
    ];

    return (
        <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden">

            {/* --- General Leafy Background --- */}
            <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.03]">
                <Image
                    src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop"
                    alt="Subtle Leaf Pattern"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-20 items-start overflow-visible">

                    {/* --- LEFT SIDE: Sticky Content --- */}
                    <aside className="lg:w-1/2 lg:sticky lg:top-32 self-start space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2"
                            >
                                <Sparkles size={16} className="text-green-primary" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">
                                    The SproutNova Advantage
                                </span>
                            </motion.div>

                            <h2 className="text-4xl md:text-7xl font-display text-neutral-900 leading-[1.1]">
                                Smarter Farming <br />
                                with <span className="italic text-green-primary font-display">AI Intelligence</span>
                            </h2>
                        </div>

                        <p className="text-neutral-500 text-lg leading-relaxed font-sans max-w-xl">
                            SproutNova uses advanced AI and real-time data to help farmers
                            make better decisions, reduce losses, and increase productivity.
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 pt-4">
                            {solutionPoints.map((point, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 text-sm text-neutral-600 font-sans"
                                >
                                    <CheckCircle2 size={18} className="text-green-primary mt-0.5 shrink-0" />
                                    {point}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="pt-6">
                            <button className="btn btn-primary group shadow-xl shadow-green-dark/10">
                                Explore All Features
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </aside>

                    {/* --- RIGHT SIDE: Scrolling Visual / Rotating Scan --- */}
                    <div className="lg:w-1/2 w-full space-y-12">

                        {/* The Rotating Scan Portal */}
                        <div className="relative flex justify-center items-center py-20">
                            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">

                                {/* 1. Perpetual Rotating Outer Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border-[2px] border-dashed border-green-primary/30 z-10"
                                />

                                {/* 2. Rotating Inner Glow Ring */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 rounded-full border-t-4 border-green-primary z-20"
                                />

                                {/* 3. STATIC Real Image Center */}
                                <div className="absolute inset-[30px] md:inset-[50px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl z-30 group">
                                    <Image
                                        src="https://images.unsplash.com/photo-1599549336123-57a627038753?q=80&w=1200&auto=format&fit=crop"
                                        alt="Healthy Crop Scan"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    {/* Digital Overlay */}
                                    <div className="absolute inset-0 bg-green-dark/20 backdrop-blur-[1px] flex items-center justify-center">
                                        <div className="text-center p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] space-y-2">
                                            <Scan size={32} className="text-white mx-auto animate-pulse" />
                                            <p className="text-white font-display italic text-xl">98% Purity</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating "Insight" Cards */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-10 bg-white p-5 rounded-3xl shadow-xl border border-neutral-100 z-40 space-y-2"
                                >
                                    <div className="flex items-center gap-3">
                                        <Activity size={16} className="text-green-primary" />
                                        <span className="text-[10px] font-black uppercase text-neutral-400">Yield Prediction</span>
                                    </div>
                                    <p className="text-xl font-bold text-neutral-900">+25% Growth</p>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-10 -left-10 bg-white p-5 rounded-3xl shadow-xl border border-neutral-100 z-40 space-y-2"
                                >
                                    <div className="flex items-center gap-3">
                                        <Droplets size={16} className="text-blue-500" />
                                        <span className="text-[10px] font-black uppercase text-neutral-400">Soil Moisture</span>
                                    </div>
                                    <p className="text-xl font-bold text-neutral-900">Optimal (68%)</p>
                                </motion.div>

                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-green-primary/5 rounded-full blur-[100px] -z-10" />
                            </div>
                        </div>

                        {/* Weather Secondary Highlight */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-nav-bg/30 p-8 rounded-[3rem] border border-neutral-100 flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-lg group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <CloudSun size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-neutral-900">Favorable Weather</h4>
                                    <p className="text-sm text-neutral-500">Perfect conditions for Nitrogen application</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-neutral-900">28°C</p>
                                <p className="text-[9px] font-black uppercase text-neutral-400 tracking-widest">Ibadan, NG</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}