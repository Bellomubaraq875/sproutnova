'use client';

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import Button from "../ui/Button";
import { useSubscribe } from "@/hooks/useSubscribe";
import AlertPopup from "../ui/alertPopUp";
import { useI18n } from "@/app/providers";

export default function NewsletterSection() {
  const { t } = useI18n();
  const { subscribe, loading, error } = useSubscribe();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    language: "English",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState<"success" | "error">("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    const ok = await subscribe({
      name: fullName || "Anonymous",
      email: formData.email,
      language: formData.language,
    });

    if (ok) {
      setFormData({ firstName: "", lastName: "", email: "", language: "English" });
      setAlertVariant("success");
      setAlertMessage(t("newsletter.success"));
      setShowAlert(true);
    } else {
      setAlertVariant("error");
      setAlertMessage(error || t("newsletter.error"));
      setShowAlert(true);
    }
  };

  return (
    <>
      <section className="relative py-24 bg-[#000814] text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
              {t("newsletter.stayconnected")}
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              {t("newsletter.joinCommunity")}
            </h2>

            <p className="mt-6 text-gray-300 text-lg">
              {t("newsletter.subText")}
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              {/* Names */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  name="firstName"
                  placeholder={t("newsletter.firstName") as any}
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--lab-sky)] focus:ring-1 focus:ring-[var(--lab-sky)] transition-all duration-300 hover:border-white/20"
                />
                <input
                  name="lastName"
                  placeholder={t("newsletter.lastName") as any}
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--lab-sky)] focus:ring-1 focus:ring-[var(--lab-sky)] transition-all duration-300 hover:border-white/20"
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-[var(--lab-sky)] transition-colors duration-300"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("newsletter.emailPlaceholder") as any}
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--lab-sky)] focus:ring-1 focus:ring-[var(--lab-sky)] transition-all duration-300 hover:border-white/20"
                />
              </div>

              {/* Language Selector */}
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--lab-sky)] focus:ring-1 focus:ring-[var(--lab-sky)] transition-all duration-300 hover:border-white/20 appearance-none cursor-pointer"
              >
                <option value="English" className="bg-[#000814] text-white">{t("languages.english") as any}</option>
                <option value="French" className="bg-[#000814] text-white">{t("languages.french") as any}</option>
              </select>

              {/* Subscribe Button */}
              <Button
                type="submit"
                disabled={loading}
                variant="pill"
                size="lg"
                icon={<ArrowUpRight size={20} />}
                className="w-full justify-center border-white/20 bg-transparent hover:bg-white/5 hover:border-[var(--lab-sky)]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {loading ? t("newsletter.subscribing" as any) : t("newsletter.subscribe" as any)}
              </Button>
            </form>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[420px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/newsletter.jpg"
              alt={t("newsletter.imageAlt")}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Alert Popup */}
      <AlertPopup
        open={showAlert}
        variant={alertVariant}
        title={alertVariant === "success" ? t("newsletter.successTitle") : t("newsletter.errorTitle")}
        message={alertMessage}
        onClose={() => setShowAlert(false)}
      />
    </>
  );
}
