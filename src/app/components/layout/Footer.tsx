"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Mail, MapPin, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-neutral-900 pt-24 pb-12 overflow-hidden">

            {/* --- Aesthetic Background Accents --- */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-primary/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* --- Top Section: Brand & Newsletter --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/5">

                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-green-primary rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:rotate-12">
                                <Leaf size={20} fill="currentColor" />
                            </div>
                            <span className="text-2xl font-display font-bold text-white tracking-tight">
                                Sprout<span className="text-green-primary">Nova</span>
                            </span>
                        </Link>
                        <p className="text-neutral-400 text-lg leading-relaxed max-w-md font-sans">
                            Bridging the gap between nature and technology. We use AI to redefine
                            the harvest, helping farmers grow smarter and purer for a sustainable future.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Linkedin, Twitter, Github].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-green-primary hover:text-white hover:border-green-primary transition-all"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col justify-end">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[3rem] relative overflow-hidden">
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-2xl font-bold text-white font-sans">Stay rooted in the future.</h3>
                                <p className="text-neutral-400 text-sm">Join our newsletter for AI-driven farming insights and seasonal updates.</p>
                                <form className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-green-primary transition-colors"
                                    />
                                    <button className="bg-green-primary hover:bg-green-primary/90 text-white font-bold px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group">
                                        Subscribe
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                            <Leaf className="absolute -bottom-10 -right-10 text-white/5 rotate-45" size={240} />
                        </div>
                    </div>
                </div>

                {/* --- Middle Section: Links Grid --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20">

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-primary">Product</h4>
                        <ul className="space-y-4">
                            {['Features', 'Dashboard', 'Disease AI', 'Analytics'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors font-sans">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-primary">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Our Vision', 'Careers', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors font-sans">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6 md:col-span-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-primary">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-green-primary/10 group-hover:text-green-primary transition-all">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-neutral-500 tracking-widest">Email Us</p>
                                    <p className="text-white text-sm font-sans">bellomubaraq@gmail.com</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-green-primary/10 group-hover:text-green-primary transition-all">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-neutral-500 tracking-widest">Location</p>
                                    <p className="text-white text-sm font-sans">Ibadan, Nigeria</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- Bottom Bar --- */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-neutral-500 text-xs font-sans">
                        © {currentYear} SproutNova. Designed for the Future of Farming.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-neutral-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-neutral-500 hover:text-white text-xs transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>

            {/* Footer Leaf Accent (Bottom Center) */}
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 text-white/5 pointer-events-none">
                <Leaf size={400} strokeWidth={0.5} />
            </div>
        </footer>
    );
}