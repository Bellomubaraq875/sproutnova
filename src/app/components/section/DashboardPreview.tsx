'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    LayoutDashboard,
    LineChart,
    Droplets,
    CloudRain,
    CheckCircle2,
    AlertCircle,
    Leaf,
    ArrowRight,
    Activity
} from 'lucide-react';

export default function DashboardPreview() {
    const { scrollYProgress } = useScroll();

    // Parallax for background leaves
    const yLeaf = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const features = [
        "Real-time crop health tracking",
        "Weather and soil insights",
        "Yield performance analytics",
        "Smart alerts and recommendations"
    ];

    const activities = [
        { text: "Crop growth improving steadily", icon: <Leaf size={14} />, type: "success" },
        { text: "Weather alert: Heavy rain expected", icon: <CloudRain size={14} />, type: "alert" },
        { text: "Soil nutrients within optimal range", icon: <CheckCircle2 size={14} />, type: "success" }
    ];

    return (
        <section className="relative w-full bg-white py-24 md:py-32 overflow-visible">

            {/* --- Background Parallax (Green & Gray) --- */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <motion.div style={{ y: yLeaf }} className="absolute top-20 left-[5%] text-neutral-400/10">
                    <Leaf size={220} strokeWidth={1} />
                </motion.div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-nav-bg/30 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-20 items-start overflow-visible">

                    {/* --- LEFT SIDE: Sticky Content --- */}
                    <aside className="lg:w-1/3 lg:sticky lg:top-32 self-start space-y-8">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-green-primary font-bold uppercase tracking-[0.4em] text-[10px] block"
                            >
                                The Control Center
                            </motion.span>
                            <h2 className="text-4xl md:text-6xl font-display text-neutral-900 leading-tight">
                                Smart Farm <br />
                                <span className="italic text-green-dark font-display">Dashboard</span>
                            </h2>
                        </div>

                        <p className="text-neutral-500 text-lg leading-relaxed font-sans">
                            Monitor your farm performance in real-time with an intuitive dashboard.
                            Track crop health, weather conditions, and key insights all in one place.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {features.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-neutral-700 font-sans text-sm"
                                >
                                    <div className="w-5 h-5 rounded-full bg-green-light/20 flex items-center justify-center text-green-primary">
                                        <CheckCircle2 size={14} />
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="pt-6">
                            <button className="btn btn-primary group shadow-xl shadow-green-dark/10">
                                View Live Dashboard
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </aside>

                    {/* --- RIGHT SIDE: Scrolling Dashboard Preview --- */}
                    <div className="lg:w-2/3 space-y-10">
                        {/* The Main Dashboard Visual Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative bg-white rounded-[3rem] p-8 md:p-12 border border-neutral-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] overflow-hidden"
                        >
                            {/* Subtle Dashboard Header inside the card */}
                            <div className="flex justify-between items-center mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-primary text-white rounded-xl flex items-center justify-center shadow-lg">
                                        <LayoutDashboard size={20} />
                                    </div>
                                    <span className="font-bold text-neutral-900 font-sans">Farm Overview</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-primary animate-pulse" />
                                    <span className="text-[10px] font-black uppercase text-neutral-400 tracking-widest">Live Updates</span>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                                {[
                                    { label: "Crop Health", val: "85%", icon: <Activity size={18} />, color: "text-green-primary", bg: "bg-green-light/10" },
                                    { label: "Soil pH", val: "6.8", icon: <Droplets size={18} />, color: "text-yellow-600", bg: "bg-yellow-100/30" },
                                    { label: "Humidity", val: "42%", icon: <CloudRain size={18} />, color: "text-blue-600", bg: "bg-blue-100/30" }
                                ].map((stat, i) => (
                                    <div key={i} className={`${stat.bg} p-6 rounded-[2rem] border border-white transition-transform hover:scale-105 duration-300`}>
                                        <div className={`${stat.color} mb-3`}>{stat.icon}</div>
                                        <p className="text-xs text-neutral-500 font-sans">{stat.label}</p>
                                        <h3 className={`text-3xl font-bold font-sans ${stat.color}`}>{stat.val}</h3>
                                    </div>
                                ))}
                            </div>

                            {/* Visual Graph Area */}
                            <div className="relative h-48 bg-nav-bg/20 rounded-[2.5rem] border border-white/50 mb-10 flex flex-col items-center justify-center overflow-hidden">
                                <LineChart size={48} className="text-green-primary/20 mb-2" />
                                <span className="text-[10px] font-black uppercase text-neutral-400 tracking-widest">Yield Performance Graph</span>
                                {/* Decorative CSS line to simulate graph */}
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-primary/10" />
                                <motion.div
                                    animate={{ x: [-20, 20] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                    className="absolute bottom-10 left-10 w-32 h-32 bg-green-primary/5 rounded-full blur-3xl"
                                />
                            </div>

                            {/* Live Activity Feed */}
                            <div className="space-y-3">
                                <p className="text-[10px] font-black uppercase text-neutral-400 tracking-widest px-4 mb-4">Recent Activity</p>
                                {activities.map((act, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="bg-neutral-50/80 p-4 rounded-2xl border border-white flex items-center gap-4 transition-all"
                                    >
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${act.type === 'alert' ? 'bg-red/10 text-red' : 'bg-green-primary/10 text-green-primary'}`}>
                                            {act.icon}
                                        </div>
                                        <span className="text-sm font-sans text-neutral-700">{act.text}</span>
                                        {act.type === 'alert' && <AlertCircle size={14} className="ml-auto text-red animate-bounce" />}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}