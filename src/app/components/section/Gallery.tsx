'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/app/providers";

const galleryItems = [
    { id: 1, key: "education", image: "/images/edu.jpeg" },
    { id: 2, key: "cleanWater", image: "/images/cleanwater.jpeg" },
    { id: 3, key: "womenEmpowerment", image: "/images/womenemp.jpg" },
    { id: 4, key: "medicalOutreach", image: "/images/medical-outreach.jpeg" },
    { id: 5, key: "disasterRelief", image: "/images/Foodoutreach.jpeg" },
];

export default function GallerySection() {
    const { t } = useI18n();
    const [activeIndex, setActiveIndex] = useState(0);

    const total = galleryItems.length;

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % total);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + total) % total);
    const goToSlide = (index: number) => setActiveIndex(index);

    const getVisibleItems = () => [
        { ...galleryItems[(activeIndex - 1 + total) % total], position: -1 },
        { ...galleryItems[activeIndex], position: 0 },
        { ...galleryItems[(activeIndex + 1) % total], position: 1 },
    ];

    return (
        <section className="relative py-20 bg-[#000814] overflow-hidden">
            <div className="w-[90%] lg:w-[80%] mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    
                    <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
                        {t("gallery.badge")}
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {t("gallery.heading")}
                    </h2>
                </div>

                {/* Carousel */}
                <div className="relative h-[380px] sm:h-[450px] md:h-[550px] flex items-center justify-center group">

                    {/* Left */}
                    <button
                        onClick={prevSlide}
                        aria-label={t("gallery.prev")}
                        className="absolute left-4 md:left-0 z-30 w-12 h-12 rounded-full bg-[var(--lab-sky)]/80 md:bg-[var(--lab-sky)] backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-[var(--lab-blue)] hover:scale-110 transition-all"
                    >
                        <ArrowLeft size={24} />
                    </button>

                    {/* Right */}
                    <button
                        onClick={nextSlide}
                        aria-label={t("gallery.next")}
                        className="absolute right-4 md:right-0 z-30 w-12 h-12 rounded-full bg-[var(--lab-sky)]/80 md:bg-[var(--lab-sky)] backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-[var(--lab-blue)] hover:scale-110 transition-all"
                    >
                        <ArrowRight size={24} />
                    </button>

                    {/* Slides */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {getVisibleItems().map((item) => {
                            const isCenter = item.position === 0;

                            return (
                                <motion.div
                                    key={`${item.id}-${activeIndex}`}
                                    initial={{
                                        x: item.position === 0 ? "0%" : item.position === -1 ? "-60%" : "60%",
                                        scale: isCenter ? 1 : 0.85,
                                        filter: isCenter ? "blur(0px)" : "blur(4px)",
                                    }}
                                    animate={{
                                        x: item.position === 0
                                            ? "0%"
                                            : item.position === -1
                                                ? "calc(-50% - 4rem)"
                                                : "calc(50% + 4rem)",
                                        scale: isCenter ? 1 : 0.7,
                                        filter: isCenter ? "blur(0px)" : "blur(3px)",
                                    }}
                                    transition={{ duration: 0.6, type: "spring" }}
                                    drag={isCenter ? "x" : false}
                                    onDragEnd={(_, info) => {
                                        if (info.offset.x < -50) nextSlide();
                                        if (info.offset.x > 50) prevSlide();
                                    }}
                                    className={`absolute h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10
                    w-[85%] sm:w-[70%] md:w-[50%]
                    ${!isCenter ? "hidden md:block cursor-pointer" : ""}`}
                                    onClick={() => {
                                        if (!isCenter) {
                                            const idx = galleryItems.findIndex(g => g.id === item.id);
                                            setActiveIndex(idx);
                                        }
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        // FIX: Cast to any to bypass strict type check on dynamic key
                                        alt={t(`gallery.items.${item.key}` as any)}
                                        fill
                                        className="object-cover"
                                        priority={isCenter}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000814]/80 via-transparent to-transparent" />

                                    {isCenter && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute bottom-10 left-1/2 -translate-x-1/2"
                                        >
                                            <div className="flex items-center gap-4 bg-white/90 px-6 py-2 rounded-full shadow-lg">
                                                <span className="font-bold text-[#000814]">
                                                    {/* FIX: Cast to any to bypass strict type check on dynamic key */}
                                                    {t(`gallery.items.${item.key}` as any)}
                                                </span>
                                                <div className="w-10 h-10 rounded-full bg-[#000814] flex items-center justify-center text-white">
                                                    <ArrowUpRight size={18} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-10">
                    {galleryItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-3 rounded-full transition-all ${activeIndex === index ? "bg-[var(--lab-blue)] w-8" : "bg-white/20 w-3"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}