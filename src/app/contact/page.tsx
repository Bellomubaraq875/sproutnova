"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import AlertPopUp from "@/app/components/ui/alertPopUp";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useI18n } from "@/app/providers";

export default function ContactPage() {
    const { t } = useI18n();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    useEffect(() => {
        document.title = t("contact.hero.title") || "Get in Touch | LAB Foundation";
    }, [t]);

    return (
        <main className="bg-[#000814] min-h-screen flex flex-col relative overflow-x-hidden font-sans">
            {showAlert && (
                <AlertPopUp
                    open={true}
                    variant="success"
                    title={t("contact.alert.title")}
                    message={t("contact.alert.message")}
                    onClose={() => setShowAlert(false)}
                    onContinue={() => setShowAlert(false)}
                />
            )}

            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src="/images/community.jpg"
                        alt={t("contact.hero.alt")}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/70 via-[#000814]/50 to-[#000814]"></div>
                </div>

                <div className="relative z-10 text-center px-4 mt-20 pt-60">
                    <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
                        {t("contact.hero.badge")}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                        {t("contact.hero.title")}
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {t("contact.hero.subtitle")}
                    </p>
                </div>
            </section>

            <div className="flex-grow py-20 relative z-10 pt-20">
                <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,var(--lab-sky)_0%,transparent_70%)] opacity-20 blur-3xl pointer-events-none"></div>

                <div className="w-[80%] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-30">
                        <div className="space-y-6">
                            <Card className="flex items-start gap-6 group hover:border-[var(--lab-blue)]/50 hover:shadow-[var(--lab-blue)]/20 transition-all duration-500">
                                <div className="w-12 h-12 rounded-full bg-[var(--lab-sky)]/30 text-[var(--lab-sky)] flex items-center justify-center shrink-0 border border-[var(--lab-blue)]/30 group-hover:bg-[var(--lab-blue)] group-hover:text-white transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{t("contact.location.title")}</h3>
                                    <p className="text-white/70 leading-relaxed">
                                        {t("contact.location.address")}
                                    </p>
                                </div>
                            </Card>

                            <Card className="flex items-start gap-6 group hover:border-[var(--lab-blue)]/50 hover:shadow-[var(--lab-blue)]/20 transition-all duration-500">
                                <div className="w-12 h-12 rounded-full bg-[var(--lab-sky)]/30 text-[var(--lab-sky)] flex items-center justify-center shrink-0 border border-[var(--lab-blue)]/30 group-hover:bg-[var(--lab-blue)] group-hover:text-white transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{t("contact.email.title")}</h3>
                                    <a href="mailto:info@labfoundation.org" className="text-[var(--lab-yellow)] font-medium hover:underline text-lg break-all transition-colors duration-200">
                                        info@labfoundation.org
                                    </a>
                                </div>
                            </Card>

                            <Card className="flex items-start gap-6 group hover:border-[var(--lab-blue)]/50 hover:shadow-[var(--lab-blue)]/20 transition-all duration-500">
                                <div className="w-12 h-12 rounded-full bg-[var(--lab-sky)]/30 text-[var(--lab-sky)] flex items-center justify-center shrink-0 border border-[var(--lab-blue)]/30 group-hover:bg-[var(--lab-blue)] group-hover:text-white transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{t("contact.phone.title")}</h3>
                                    <a href="tel:+234818005551234" className="text-white font-medium hover:text-[var(--lab-blue)] transition-colors duration-200 text-lg">
                                        {t("contact.phone.number")}
                                    </a>
                                </div>
                            </Card>
                        </div>

                        <div className="relative">
                            <Card className="p-8 md:p-10 border-[var(--lab-blue)]/20 backdrop-blur-sm shadow-xl">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 bg-gradient-to-r from-white via-white/90 to-[var(--lab-blue)] bg-clip-text text-transparent">
                                    {t("contact.form.title")}
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/60 tracking-wider ml-1 uppercase">
                                                {t("contact.form.nameLabel")}
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder={t("contact.form.namePlaceholder")}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[var(--lab-blue)] focus:ring-2 focus:ring-[var(--lab-blue)]/30 focus:bg-white/10 transition-all duration-300 hover:border-white/20"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/60 tracking-wider ml-1 uppercase">
                                                {t("contact.form.emailLabel")}
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder={t("contact.form.emailPlaceholder")}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[var(--lab-blue)] focus:ring-2 focus:ring-[var(--lab-blue)]/30 focus:bg-white/10 transition-all duration-300 hover:border-white/20"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/60 tracking-wider ml-1 uppercase">
                                            {t("contact.form.subjectLabel")}
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder={t("contact.form.subjectPlaceholder")}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[var(--lab-blue)] focus:ring-2 focus:ring-[var(--lab-blue)]/30 focus:bg-white/10 transition-all duration-300 hover:border-white/20"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-white/60 tracking-wider ml-1 uppercase">
                                            {t("contact.form.messageLabel")}
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder={t("contact.form.messagePlaceholder")}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[var(--lab-blue)] focus:ring-2 focus:ring-[var(--lab-blue)]/30 focus:bg-white/10 transition-all duration-300 hover:border-white/20 resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="pill"
                                        size="lg"
                                        icon={<Send size={18} />}
                                        className="border-white/20 bg-transparent hover:bg-white/5 hover:border-white/40"
                                    >
                                        {t("contact.form.submitButton")}
                                    </Button>
                                    
                                </form>
                            </Card>
                        </div>
                    </div>

                    <div className="mt-24 mb-10">
                        <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl h-[450px] relative backdrop-blur-sm">
                            <iframe
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                title={t("contact.map.title")}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.822854291!2d3.8711!3d7.3313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTknNTIuNyJOIDPCsDUyJzE2LjAiRQ!5e0!3m2!1sen!2sng!4v1625000000000"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
