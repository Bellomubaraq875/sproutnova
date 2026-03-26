"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Sprout, 
  CloudSun, 
  ScanSearch, 
  BarChart4, 
  TestTube2, 
  BellRing, 
  Leaf 
} from "lucide-react";

const features = [
  {
    title: "Crop Recommendation",
    desc: "Get AI-powered suggestions on the best crops based on soil, season, and location.",
    icon: <Sprout className="text-green-primary" size={24} />,
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop",
    tag: "AI Planning"
  },
  {
    title: "Weather Intelligence",
    desc: "Access real-time weather insights to plan irrigation and harvesting effectively.",
    icon: <CloudSun className="text-green-primary" size={24} />,
    image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=800&auto=format&fit=crop",
    tag: "Real-time"
  },
  {
    title: "AI Disease Detection",
    desc: "Scan crops or describe symptoms to detect diseases instantly with high accuracy.",
    icon: <ScanSearch className="text-green-primary" size={24} />,
    image: "/images/aidetection.png",
    tag: "Instant Scan"
  },
  {
    title: "Farm Analytics",
    desc: "Track yield, crop health, and performance through an intuitive data dashboard.",
    icon: <BarChart4 className="text-green-primary" size={24} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tag: "Big Data"
  },
  {
    title: "Soil Analysis",
    desc: "Understand soil composition and improve fertility using data-driven chemical insights.",
    icon: <TestTube2 className="text-green-primary" size={24} />,
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=800&auto=format&fit=crop",
    tag: "Nutrient Check"
  },
  {
    title: "Smart Alerts",
    desc: "Receive urgent alerts on weather risks, diseases, and important farm activities.",
    icon: <BellRing className="text-green-primary" size={24} />,
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7370?q=80&w=800&auto=format&fit=crop",
    tag: "Push Notify"
  },
];

export default function FeatureSection() {
  const { scrollYProgress } = useScroll();
  
  // Parallax Green & Gray Leaves
  const yParallax1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="relative w-full py-24 bg-[#E6F0E9]/30 overflow-hidden">
      
      {/* --- Animated Leafy Background (Green & Gray) --- */}
      <div className="absolute inset-0 pointer-events-none select-none -z-10">
        <motion.div style={{ y: yParallax1 }} className="absolute top-20 left-[5%] text-neutral-400/10">
          <Leaf size={220} strokeWidth={1} />
        </motion.div>
        <motion.div style={{ y: yParallax2 }} className="absolute bottom-20 right-[5%] text-green-primary/5">
          <Leaf size={300} strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-dark font-bold uppercase tracking-[0.3em] text-[10px] block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display text-neutral-900 leading-tight"
          >
            Powerful Features for <br />
            <span className="italic text-green-primary font-display">Smart Farming</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neutral-500 text-lg font-sans max-w-xl mx-auto"
          >
            Everything you need to make smarter farming decisions, powered by AI and real-time data.
          </motion.p>
        </div>

        {/* Staggered Grid (3 Columns Desktop, 2 Tablet, 1 Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: (index % 3) * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className={`flex flex-col ${index % 2 !== 0 ? "lg:mt-12" : ""}`}
            >
              <div className="group bg-white rounded-[2.5rem] p-6 shadow-xl shadow-green-dark/5 border border-white h-full flex flex-col relative transition-all hover:shadow-2xl hover:-translate-y-2">
                
                {/* Floating Icon Box */}
                <div className="absolute top-10 right-10 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center border border-neutral-100 group-hover:bg-white group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>

                {/* Beautified Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] mb-8">
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content */}
                <div className="px-2 space-y-3 flex-grow">
                  <h3 className="text-2xl font-bold text-neutral-900 font-sans leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed font-sans">
                    {feature.desc}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-8 pt-6 border-t border-neutral-50 flex items-center justify-between">
                   <span className="text-[10px] font-black uppercase tracking-widest text-green-dark/40">
                    {feature.tag}
                   </span>
                   <div className="w-8 h-8 rounded-full bg-nav-bg flex items-center justify-center group-hover:bg-green-primary group-hover:text-white transition-all">
                      <ArrowRightIcon className="w-4 h-4" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple Arrow Sub-component
function ArrowRightIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}