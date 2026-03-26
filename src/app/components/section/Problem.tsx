"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Leaf } from "lucide-react";

const problems = [
    {
        title: "Unpredictable Yields",
        description: "Traditional farming relies on guesswork, leading to inconsistent harvests and financial instability.",
        image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop",
        tag: "High Risk",
    },
    {
        title: "Soil Degradation",
        description: "Lack of real-time NPK and pH data results in over-fertilization and long-term soil health decline.",
        image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=800&auto=format&fit=crop",
        tag: "Soil Crisis",
    },
    {
        title: "Climate Volatility",
        description: "Changing weather patterns make planting schedules unreliable without hyper-local forecasting.",
        image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=800&auto=format&fit=crop",
        tag: "Climate Impact",
    },
    {
        title: "Hidden Diseases",
        description: "Crop infections often go unnoticed until it's too late, wiping out entire sections of the farm.",
        image: "/images/heroImage.png",
        tag: "Crop Infection",
    },
];

const Problem = () => {
    const { scrollYProgress } = useScroll();

    // Parallax for Green and Grey Leaves
    const yParallax1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const yParallax2 = useTransform(scrollYProgress, [0, 1], [0, 120]);

    return (
        <section className="relative w-full py-24 bg-[#E6F0E9]/30 overflow-hidden">

            {/* --- Animated Background: Green and Grey Theme --- */}
            <div className="absolute inset-0 pointer-events-none select-none -z-10">
                {/* Grey Leaf Top Left */}
                <motion.div style={{ y: yParallax1 }} className="absolute top-20 left-[5%] text-neutral-400/10">
                    <Leaf size={180} strokeWidth={1} />
                </motion.div>
                {/* Green Leaf Bottom Right */}
                <motion.div style={{ y: yParallax2 }} className="absolute bottom-40 right-[8%] text-green-primary/5">
                    <Leaf size={240} strokeWidth={0.5} />
                </motion.div>
                {/* Grey Leaf Center */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/3 text-neutral-300/10"
                >
                    <Leaf size={60} strokeWidth={1} />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-green-dark font-bold uppercase tracking-[0.3em] text-[10px]"
                    >
                        The Challenge
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display text-neutral-900 leading-tight"
                    >
                        Farming shouldn't be a <br />
                        <span className="italic text-green-primary">game of chance.</span>
                    </motion.h2>
                </div>

                {/* Staggered Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((prob, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col ${index % 2 !== 0 ? "lg:mt-12" : "lg:mb-12"}`}
                        >
                            <div className="bg-white rounded-[2.5rem] p-5 shadow-xl shadow-green-dark/5 border border-white h-full flex flex-col group relative">

                                {/* Star Rating Badge (Lime Green) */}
                                <div className={`absolute left-1/2 -translate-x-1/2 z-20 bg-[#D9F99D] px-4 py-1.5 rounded-full flex gap-1 shadow-sm ${index % 2 === 0 ? "-top-4" : "-bottom-4"}`}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={10} className="fill-green-dark text-green-dark" />
                                    ))}
                                </div>

                                {/* Real Problem Image */}
                                <div className="relative aspect-square overflow-hidden rounded-[2rem] mb-6">
                                    <Image
                                        src={prob.image}
                                        alt={prob.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Subtle dark overlay for contrast */}
                                    <div className="absolute inset-0 bg-black/5" />
                                </div>

                                {/* Card Content */}
                                <div className="text-center flex-grow flex flex-col justify-center px-2 mb-6">
                                    <h3 className="text-lg font-bold text-neutral-900 font-sans mb-3 group-hover:text-green-primary transition-colors">
                                        {prob.title}
                                    </h3>
                                    <p className="text-neutral-500 text-xs leading-relaxed font-sans line-clamp-3">
                                        {prob.description}
                                    </p>
                                </div>

                                {/* Problem Status Tag */}
                                <div className="bg-nav-bg text-green-dark text-[10px] font-black uppercase tracking-widest py-3 rounded-full text-center">
                                    {prob.tag}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;