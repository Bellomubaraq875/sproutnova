'use client'

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link"; // FIX: Import Link from next/link
import Button from "../ui/Button";
import { useI18n } from "@/app/providers";

export default function CTASection() {
    const { t } = useI18n();

    return (
        <section className="relative py-32 bg-[#000814] overflow-hidden flex items-center justify-center">

            {/* --- Background Effects --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#000814]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[radial-gradient(circle,var(--lab-sky)_0%,transparent_60%)] opacity-30 blur-[100px]"></div>
            </div>

            {/* --- Content Container --- */}
            <div className="w-[80%] mx-auto relative z-10 flex flex-col items-center text-center">

                <div className="absolute top-[-40px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute bottom-[-40px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-10"
                >
                    {/* Badge */}
                    <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
                        {t("cta.badge")}
                    </span>

                    {/* Main Heading */}
                    <h2 className="text-5xl md:text-5xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                        {t("cta.heading")}
                    </h2>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-white/60 mb-12 max-w-xl mx-auto leading-relaxed font-light">
                        {t("cta.subtext")}
                    </p>

                    {/* Buttons Row */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        {/* Volunteer Button */}
                        <Link href="/volunteer">
                            <Button
                                variant="pill"
                                size="lg"
                                icon={<ArrowUpRight size={20} />}
                                className="border-white/20 bg-transparent hover:bg-white/5 hover:border-white/40"
                            >
                                {t("cta.volunteer")}
                            </Button>
                        </Link>

                        {/* Donate Button */}
                        <Link href="/donate">
                            <Button
                                variant="pill"
                                size="lg"
                                icon={<ArrowUpRight size={20} />}
                                className="border-white/20 bg-transparent hover:bg-white/5 hover:border-white/40"
                            >
                                {t("cta.donate")}
                            </Button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}