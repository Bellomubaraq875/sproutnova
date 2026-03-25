"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full">
            {/* 1. Newsletter Section - Light Mint Background */}
            

            {/* 2. Main Footer Section - Forest Green Background */}
            <div className="bg-green-dark text-white/90 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                        {/* Explore More Column */}
                        <div>
                            <h4 className="text-yellow-soft font-bold mb-8 text-lg">Explore More</h4>
                            <ul className="space-y-4">
                                <FooterLink href="/about">Our Story</FooterLink>
                                <FooterLink href="/services">Features Product</FooterLink>
                                <FooterLink href="/promise">Our Promise</FooterLink>
                                <FooterLink href="/testimonials">Testimonials</FooterLink>
                            </ul>
                        </div>

                        {/* Features Product Column */}
                        <div>
                            <h4 className="text-yellow-soft font-bold mb-8 text-lg">Features Product</h4>
                            <ul className="space-y-4">
                                <FooterLink href="#">Pure Organic Fruits</FooterLink>
                                <FooterLink href="#">Fresh Vegetables</FooterLink>
                                <FooterLink href="#">Grains & Pulses</FooterLink>
                                <FooterLink href="#">Herbs & Aromatic Spices</FooterLink>
                            </ul>
                        </div>

                        {/* Contact Us Column */}
                        <div>
                            <h4 className="text-yellow-soft font-bold mb-8 text-lg">Contact Us</h4>
                            <ul className="space-y-4 text-sm leading-relaxed text-white/70">
                                <li>+00 123 4567890</li>
                                <li>user@example.com</li>
                                <li>123 Street Name, City Name<br />State, Country, 12345</li>
                            </ul>
                        </div>

                        {/* About Statement & Socials */}
                        <div className="space-y-6">
                            <p className="text-sm leading-relaxed text-white/70">
                                Dedicated to eco-friendly farming practices, we prioritize sustainability
                                at every step, ensuring that our harvest not only nourishes.
                            </p>
                            <div className="flex gap-4">
                                <SocialIcon icon={<Facebook size={20} />} />
                                <SocialIcon icon={<Twitter size={20} />} />
                                <SocialIcon icon={<Instagram size={20} />} />
                                <SocialIcon icon={<Linkedin size={20} />} />
                            </div>
                        </div>
                    </div>

                    {/* Copyright Bar */}
                    <div className="pt-8 border-t border-white/10 flex justify-between items-center text-xs text-white/50">
                        <p>© {currentYear} SproutNova. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <li>
        <Link href={href} className="text-white/70 text-sm hover:text-yellow-soft transition-colors duration-200">
            {children}
        </Link>
    </li>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:bg-yellow-soft hover:text-green-dark hover:border-yellow-soft transition-all">
        {icon}
    </button>
);

export default Footer;