"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Leaf } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#E6F0E9] pt-16 pb-8 border-t border-green-primary/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block bg-[#064E3B] text-white px-6 py-2 rounded-full font-bold text-sm shadow-sm">
                            SproutNova
                        </Link>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            Empowering farmers with AI-driven insights for a more sustainable and productive future.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Facebook size={18} />} />
                            <SocialIcon icon={<Twitter size={18} />} />
                            <SocialIcon icon={<Instagram size={18} />} />
                            <SocialIcon icon={<Linkedin size={18} />} />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-[#064E3B] font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/services">Services</FooterLink>
                            <FooterLink href="/projects">Projects</FooterLink>
                            <FooterLink href="/contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: Tools */}
                    <div>
                        <h4 className="text-[#064E3B] font-bold mb-6">Platform</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/dashboard">Dashboard</FooterLink>
                            <FooterLink href="/disease">Disease Detection</FooterLink>
                            <FooterLink href="/soil">Soil Analysis</FooterLink>
                            <FooterLink href="/weather">Weather Insights</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-[#064E3B] font-bold mb-6">Stay Updated</h4>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full h-12 pl-5 pr-12 rounded-full border-none bg-white shadow-sm text-sm focus:ring-2 focus:ring-green-primary outline-none"
                            />
                            <button className="absolute right-1 top-1 bottom-1 aspect-square bg-green-primary text-white rounded-full flex items-center justify-center hover:bg-green-dark transition-colors">
                                <Leaf size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-green-dark/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-xs">
                        © {currentYear} SproutNova. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-xs text-neutral-500 hover:text-green-primary">Privacy Policy</Link>
                        <Link href="/terms" className="text-xs text-neutral-500 hover:text-green-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Sub-components for cleaner code
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <Link href={href} className="text-neutral-600 text-sm hover:text-green-primary transition-colors">
            {children}
        </Link>
    </li>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#064E3B] hover:bg-green-primary hover:text-white transition-all shadow-sm">
        {icon}
    </button>
);

export default Footer;