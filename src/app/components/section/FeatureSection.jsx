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
    image: "/images/smartalert.png",
    tag: "Push Notify"
  },
];

export default function FeatureSection() {
  const { scrollYProgress } = useScroll();
  const yParallax1 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#E6F0E9]/30 overflow-visible">
      
      {/* Background Leaves */}
      <motion.div style={{ y: yParallax1 }} className="absolute top-20 left-[5%] text-neutral-400/10 -z-10">
        <Leaf size={220} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* --- THE FIX: items-start allows the child to be sticky --- */}
        <div className="flex flex-col lg:flex-row gap-16 items-start overflow-visible">
          
          {/* LEFT SIDE: STICKY BOX */}
          {/* self-start is an extra safety measure */}
          <aside className="lg:w-1/3 lg:sticky lg:top-32 self-start space-y-8 pb-10">
            <div className="space-y-4">
              <span className="text-green-dark font-bold uppercase tracking-[0.3em] text-[10px] block">
                Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-neutral-900 leading-tight">
                Powerful Features <br />
                for <span className="italic text-green-primary font-display">Smart Farming</span>
              </h2>
              <p className="text-neutral-500 text-lg font-sans leading-relaxed">
                Everything you need to make smarter farming decisions, powered by AI and real-time data.
              </p>
            </div>
            
            <button className="bg-green-primary text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-green-dark transition-all flex items-center gap-3 group">
              Explore Ecosystem
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </aside>

          {/* RIGHT SIDE: SCROLLING GRID */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                className={`flex flex-col ${index % 2 !== 0 ? "lg:mt-12" : ""}`}
              >
                <div className="group bg-white rounded-[2.5rem] p-6 shadow-xl shadow-green-dark/5 border border-white h-full flex flex-col relative transition-all hover:shadow-2xl">
                  {/* Floating Icon */}
                  <div className="absolute top-10 right-10 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center border border-neutral-100 text-green-primary group-hover:bg-green-primary group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>

                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden rounded-[2rem] mb-8">
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                  </div>

                  {/* Text */}
                  <div className="px-2 space-y-3 flex-grow">
                    <h3 className="text-2xl font-bold text-neutral-900 font-sans group-hover:text-green-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed font-sans">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Tag */}
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
      </div>
    </section>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}