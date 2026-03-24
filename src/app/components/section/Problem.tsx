"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CloudRain, ThermometerSnowflake, Activity } from "lucide-react";

const problems = [
    {
        title: "Unpredictable Yields",
        description: "Traditional farming relies on guesswork, leading to inconsistent harvests and financial instability.",
        icon: <Activity className="text-orange" size={28} />,
        borderColor: "border-orange/20",
        bgColor: "bg-orange/5",
    },
    {
        title: "Soil Degradation",
        description: "Lack of real-time NPK and pH data results in over-fertilization and long-term soil health decline.",
        icon: <AlertTriangle className="text-red" size={28} />,
        borderColor: "border-red/20",
        bgColor: "bg-red/5",
    },
    {
        title: "Climate Volatility",
        description: "Changing weather patterns make planting schedules unreliable without hyper-local forecasting.",
        icon: <CloudRain className="text-blue-accent" size={28} />,
        borderColor: "border-blue-accent/20",
        bgColor: "bg-blue-accent/5",
    },
    {
        title: "Hidden Diseases",
        description: "Crop infections often go unnoticed until it's too late, wiping out entire sections of the farm.",
        icon: <ThermometerSnowflake className="text-green-dark" size={28} />,
        borderColor: "border-green-dark/20",
        bgColor: "bg-green-dark/5",
    },
];

const Problem = () => {
    return (
        <section className="w-full py-24 bg-[#F9FAFB]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-green-primary font-bold tracking-widest uppercase text-sm"
                    >
                        The Challenge
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display text-neutral-900 mt-4 leading-tight"
                    >
                        Farming shouldn't be a <span className="italic text-green-dark">game of chance.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-500 text-lg mt-6 font-sans"
                    >
                        Modern agriculture faces complex hurdles that traditional methods can no longer solve alone. We identified the core bottlenecks holding your farm back.
                    </motion.p>
                </div>

                {/* Problem Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((prob, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`p-8 rounded-[2rem] border-2 ${prob.borderColor} ${prob.bgColor} transition-all duration-300`}
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                                {prob.icon}
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3 font-sans">
                                {prob.title}
                            </h3>
                            <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                                {prob.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Transition */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-10 bg-green-dark rounded-[3rem] text-center relative overflow-hidden"
                >
                    {/* Decorative background shape */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-primary/10 rounded-full -mr-20 -mt-20 blur-3xl" />

                    <h3 className="text-2xl md:text-3xl font-display text-yellow mb-6 relative z-10">
                        Ready to turn these challenges into growth?
                    </h3>
                    <button className="btn btn-primary relative z-10 !bg-yellow !text-green-dark hover:!bg-white transition-colors">
                        Explore our Solution
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;