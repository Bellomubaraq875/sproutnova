"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import Button from "../../components/ui/Button";
// import Card from "../../components/ui/Card";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

import {
  ArrowUpRight,
  Siren,
  HeartPulse,
  GraduationCap,
  Globe2,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { useI18n } from "@/app/providers";

export default function WorkPage() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t("workPage.hero.title") || "Our Work | LAB Foundation";
  }, [t]);

  return (
    <main className="bg-[#000814] min-h-screen relative overflow-hidden text-white font-sans">
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--lab-blue)_0%,transparent_70%)] opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--lab-sky)_0%,transparent_70%)] opacity-10 blur-[120px] pointer-events-none" />

      {/* Hero section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/community.jpg"
            alt={t("workPage.hero.alt") || "LAB Foundation Field Work"}
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/80 via-[#000814]/40 to-[#000814]" />
        </div>

        <div className="relative z-10 text-center w-[90%] md:w-[80%] mx-auto mt-20">
          <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
            {t("workPage.hero.badge")}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
            {t("workPage.hero.title")}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            {t("workPage.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* 2. KEY AREAS OF WORK (Grid) */}
      <section className="py-24 relative z-10">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("workPage.areas.title")}</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[var(--lab-blue)] to-[var(--lab-sky)] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titleKey: "workPage.areas.emergency.title",
                descKey: "workPage.areas.emergency.desc",
                icon: <Siren size={32} />,
                color: "text-red-400",
                bg: "bg-red-500/10",
                border: "border-red-500/20"
              },
              {
                titleKey: "workPage.areas.healthcare.title",
                descKey: "workPage.areas.healthcare.desc",
                icon: <HeartPulse size={32} />,
                color: "text-[var(--lab-blue)]",
                bg: "bg-[var(--lab-blue)]/10",
                border: "border-[var(--lab-blue)]/20"
              },
              {
                titleKey: "workPage.areas.education.title",
                descKey: "workPage.areas.education.desc",
                icon: <GraduationCap size={32} />,
                color: "text-[var(--lab-yellow)]",
                bg: "bg-[var(--lab-yellow)]/10",
                border: "border-[var(--lab-yellow)]/20"
              }
            ].map((item, i) => (
              <Card
                key={i}
                className={`p-8 md:p-10 flex flex-col items-start gap-6 group hover:-translate-y-2 transition-transform duration-300 border ${item.border}`}
              >
                <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center border border-white/5 shadow-inner`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--lab-sky)] transition-colors">
                    {/* FIX: Cast to any */}
                    {t(item.titleKey as any)}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {/* FIX: Cast to any */}
                    {t(item.descKey as any)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHERE WE WORK (Regions) */}
      <section className="py-24 bg-[#010c1e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        <div className="w-[90%] md:w-[80%] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-24">
              <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
                {t("workPage.regions.globalBadge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {t("workPage.regions.title")}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {t("workPage.regions.subtitle")}
              </p>

              <div className="flex items-center gap-4 text-white/50 text-sm font-medium">
                <Globe2 size={20} className="text-[var(--lab-blue)]" />
                <span>{t("workPage.regions.stats.countries")}</span>
                <span className="w-1 h-1 rounded-full bg-white/30"></span>
                <span>{t("workPage.regions.stats.continents")}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Africa Card */}
              <Card className="p-8 border-white/5 hover:border-[var(--lab-yellow)]/50 transition-colors group">
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--lab-yellow)]/10 flex items-center justify-center text-[var(--lab-yellow)]">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t("workPage.regions.africa.title")}</h3>
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  {[
                    "workPage.regions.africa.0",
                    "workPage.regions.africa.1",
                    "workPage.regions.africa.2",
                    "workPage.regions.africa.3",
                    "workPage.regions.africa.4",
                    "workPage.regions.africa.5"
                  ].map((countryKey, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                      <CheckCircle2 size={16} className="text-[var(--lab-yellow)]" />
                      {/* FIX: Cast to any */}
                      {t(countryKey as any)}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Asia Pacific Card */}
              <Card className="p-8 border-white/5 hover:border-[var(--lab-sky)]/50 transition-colors group">
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--lab-sky)]/10 flex items-center justify-center text-[var(--lab-sky)]">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t("workPage.regions.asia.title")}</h3>
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  {[
                    "workPage.regions.asia.0",
                    "workPage.regions.asia.1",
                    "workPage.regions.asia.2",
                    "workPage.regions.asia.3",
                    "workPage.regions.asia.4",
                    "workPage.regions.asia.5"
                  ].map((countryKey, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                      <CheckCircle2 size={16} className="text-[var(--lab-sky)]" />
                      {/* FIX: Cast to any */}
                      {t(countryKey as any)}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--lab-blue)]/10 to-[var(--lab-sky)]/10 pointer-events-none"></div>

        <div className="w-[90%] md:w-[80%] mx-auto relative z-10">
          <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
            {t("workPage.cta.badge")}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">{t("workPage.cta.title")}</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            {t("workPage.cta.subtitle")}
          </p>

          <div className="flex justify-center">
            <Link href="/pages/donate">
              <Button
                variant="pill"
                size="lg"
                className="min-w-[200px] justify-center shadow-[0_0_30px_rgba(var(--lab-blue-rgb),0.3)]"
                icon={<ArrowUpRight size={20} />}
              >
                {t("workPage.cta.button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}