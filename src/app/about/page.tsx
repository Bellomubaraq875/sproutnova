"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import {
  ArrowUpRight,
  Users,
  GraduationCap,
  HeartPulse,
  LineChart
} from "lucide-react";
import { useI18n } from "@/app/providers";

// Real partnership logos using Wikimedia public domain SVGs
const partnerLogos = [
  { id: 1, src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/UNICEF_Logo_%28cropped%29.png", alt: "UNICEF" },
  { id: 2, src: "https://upload.wikimedia.org/wikipedia/commons/c/c2/WHO_logo.svg", alt: "World Health Organization" },
  { id: 3, src: "https://upload.wikimedia.org/wikipedia/commons/b/be/American_Red_Cross_logo.png", alt: "Red Cross" },
  { id: 4, src: "https://upload.wikimedia.org/wikipedia/commons/8/87/The_World_Bank_logo.svg", alt: "World Bank" },
  { id: 5, src: "https://upload.wikimedia.org/wikipedia/commons/1/17/USAID-Identity.svg", alt: "USAID" },
  { id: 6, src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Save_the_Children_Logo.svg", alt: "Save the Children" },
];

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <main className="bg-[#000814] text-white relative">
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--lab-blue)_0%,transparent_70%)] opacity-10 blur-[120px] pointer-events-none" />

      {/* hero stat */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/community.jpg"
            alt={t("aboutPage.hero.alt") as string || "LAB Foundation Team"}
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/80 via-[#000814]/50 to-[#000814]" />
        </div>

        <div className="relative z-10 text-center w-[90%] md:w-[80%] mx-auto mt-20">
          <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
            {t("aboutPage.hero.badge") as string}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
            {t("aboutPage.hero.heading") as string}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            {t("aboutPage.hero.subtext") as string}
          </p>
        </div>
      </section>

      {/* =========================================
          2. WHO WE ARE & IMAGES (Static Images)
      ========================================= */}
      <section className="py-24 relative z-10">
        <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
              {t("aboutPage.story.badge") as string}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {t("aboutPage.story.title") as string}
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>{t("aboutPage.story.paragraph1") as string}</p>
              <p>{t("aboutPage.story.paragraph2") as string}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="col-span-2 relative h-64 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                alt={t("aboutPage.story.image1_alt") as string || "Helping children"}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-48 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/eduscholarship.png"
                alt={t("aboutPage.story.image2_alt") as string || "Education"}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="50vw"
              />
            </div>
            <div className="relative h-48 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop"
                alt={t("aboutPage.story.image3_alt") as string || "Community"}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. OUR APPROACH
      ========================================= */}
      <section className="py-24 bg-[#010c1e] relative">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="mb-12 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-bold text-white">{t("aboutPage.approach.title") as string}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div className="flex flex-col gap-4">
              <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
                {t("aboutPage.approach.mission") as string}
              </span>

              <p className="text-xl font-semibold text-white leading-relaxed">
                {t("aboutPage.approach.missionText1") as string}
              </p>
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                {t("aboutPage.approach.missionText2") as string}
              </p>
            </div>

            <div className="flex flex-col gap-4">

              <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
                {t("aboutPage.approach.vision") as string}
              </span>

              <p className="text-xl font-semibold text-white leading-relaxed">
                {t("aboutPage.approach.visionText1") as string}
              </p>
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                {t("aboutPage.approach.visionText2") as string}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. PARTNERS (Animated Images)
      ========================================= */}
      <section className="py-16 bg-[#000814] border-b border-white/5 overflow-hidden">
        <div className="w-[90%] md:w-[80%] mx-auto text-center mb-10">
          <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
            {t("aboutPage.partners.title") as string}
          </h4>
        </div>

        <div className="relative w-full overflow-hidden flex items-center group">
          {/* Edge Gradients for smooth fade in/out effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#000814] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#000814] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="flex gap-16 items-center animate-scroll whitespace-nowrap w-max group-hover:[animation-play-state:paused]">
            {/* We map twice to create an infinite loop effect */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center">
                {partnerLogos.map((logo) => (
                  <div
                    key={`${i}-${logo.id}`}
                    className="relative w-32 h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          5. IMPACT STATISTICS
      ========================================= */}
      <section className="py-24 relative bg-[#000814]">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="text-center mb-16">

            <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
              {t("aboutPage.impact.badge") as string}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("aboutPage.impact.title") as string}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full shadow-2xl rounded-[2rem] overflow-hidden">
            {[
              { bg: "bg-[#1a1b4b] hover:bg-[#23245c]", icon: <GraduationCap size={48} />, number: t("aboutPage.impact.stat1_num"), label: t("aboutPage.impact.stat1_label") },
              { bg: "bg-[var(--lab-blue)] hover:brightness-110", icon: <HeartPulse size={48} />, number: t("aboutPage.impact.stat2_num"), label: t("aboutPage.impact.stat2_label") },
              { bg: "bg-[var(--lab-sky-light)] hover:brightness-110", icon: <Users size={48} />, number: t("aboutPage.impact.stat3_num"), label: t("aboutPage.impact.stat3_label") },
              { bg: "bg-[#0b1221] hover:bg-[#131d33]", icon: <LineChart size={48} />, number: t("aboutPage.impact.stat4_num"), label: t("aboutPage.impact.stat4_label") }
            ].map((stat, idx) => (
              <div key={idx} className={`${stat.bg} p-10 flex flex-col items-center text-center justify-center gap-6 h-[320px] transition-all group`}>
                <div className="text-white/90 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white">{stat.number as string}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{stat.label as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          6. CTA SECTION
      ========================================= */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="w-[90%] md:w-[80%] mx-auto relative z-10">
          <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
            {t("aboutPage.cta.badge") as string}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">{t("aboutPage.cta.heading") as string}</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">{t("aboutPage.cta.subtext") as string}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/pages/volunteer">
              <Button variant="pill" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 min-w-[200px] justify-center" icon={<Users size={20} />}>
                {t("aboutPage.cta.volunteerBtn") as string}
              </Button>
            </Link>
            <Link href="/pages/donate">
              <Button variant="pill" size="lg" className="min-w-[200px] justify-center" icon={<ArrowUpRight size={20} />}>
                {t("aboutPage.cta.donateBtn") as string}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}