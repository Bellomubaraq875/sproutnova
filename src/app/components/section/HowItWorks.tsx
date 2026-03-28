'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClipboardList, Cpu, LineChart, Leaf, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
    const { scrollYProgress } = useScroll();

    // Parallax Green & Gray Background Leaves
    const yLeaf1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const yLeaf2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const steps = [
        {
            title: "Input Farm Data",
            desc: "Enter your farm details, soil type, or upload crop images for analysis.",
            icon: <ClipboardList size={28} />,
            tag: "The Beginning"
        },
        {
            title: "AI Processing",
            desc: "Our intelligent system analyzes your data using advanced algorithms.",
            icon: <Cpu size={28} />,
            tag: "The Brain"
        },
        {
            title: "Get Insights",
            desc: "Receive actionable recommendations to improve yield and prevent losses.",
            icon: <LineChart size={28} />,
            tag: "The Result"
        },
    ];

    return (
        <section className="relative w-full bg-white py-24 md:py-32 overflow-visible">

            {/* --- Background Leafy Elements (Green & Gray) --- */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <motion.div style={{ y: yLeaf1 }} className="absolute top-20 left-[5%] text-neutral-400/10">
                    <Leaf size={200} strokeWidth={1} />
                </motion.div>
                <motion.div style={{ y: yLeaf2 }} className="absolute bottom-20 right-[5%] text-green-primary/5">
                    <Leaf size={280} strokeWidth={0.5} />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* items-start is required for sticky to function */}
                <div className="grid lg:grid-cols-3 gap-20 items-start overflow-visible">

                    {/* --- LEFT SIDE: Sticky Header --- */}
                    <aside className="lg:col-span-1 lg:sticky lg:top-32 self-start space-y-8">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-green-primary font-bold uppercase tracking-[0.4em] text-[10px] block"
                            >
                                The Process
                            </motion.span>
                            <h2 className="text-4xl md:text-6xl font-display text-neutral-900 leading-tight">
                                How It <br />
                                <span className="italic text-green-dark font-display">Works</span>
                            </h2>
                        </div>

                        <p className="text-neutral-500 text-lg leading-relaxed font-sans max-w-sm">
                            SproutNova simplifies farming decisions in just three easy steps, bridging the gap between nature and data.
                        </p>

                        <div className="pt-6">
                            <button className="flex items-center gap-4 text-green-dark font-bold group">
                                <span className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-green-primary group-hover:text-white transition-all duration-300">
                                    <ArrowRight size={20} />
                                </span>
                                <span className="uppercase tracking-widest text-[10px]">Start Your Analysis</span>
                            </button>
                        </div>
                    </aside>

                    {/* --- RIGHT SIDE: Scrolling Steps --- */}
                    <div className="lg:col-span-2 space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative bg-nav-bg/20 rounded-[3rem] p-10 border border-neutral-100 flex items-start gap-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-green-dark/5"
                            >
                                {/* Step Number Badge */}
                                <div className="absolute top-10 right-10 text-[60px] font-display text-green-primary/10 select-none group-hover:text-green-primary/20 transition-colors">
                                    0{index + 1}
                                </div>

                                {/* Icon Column */}
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-primary shadow-lg border border-neutral-50 group-hover:bg-green-primary group-hover:text-white transition-all duration-300">
                                        {step.icon}
                                    </div>
                                    {/* Vertical Connect Line (except for last item) */}
                                    {index !== steps.length - 1 && (
                                        <div className="w-[2px] h-20 bg-gradient-to-b from-green-primary/20 to-transparent" />
                                    )}
                                </div>

                                {/* Content Column */}
                                <div className="space-y-4 pt-2">
                                    <span className="text-[9px] font-black text-green-dark uppercase tracking-widest opacity-40">
                                        {step.tag}
                                    </span>
                                    <h3 className="text-3xl font-bold text-neutral-900 font-sans group-hover:text-green-primary transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-500 text-base leading-relaxed font-sans max-w-md">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;