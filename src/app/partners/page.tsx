"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import {
   Handshake,
   Briefcase,
   Globe2,
   TrendingUp,
   ShieldCheck
} from "lucide-react";
import { useI18n } from "@/app/providers";

export default function PartnershipPage() {
   const { t } = useI18n();

   useEffect(() => {
      // FIX: Cast to any or ensure key exists
      document.title = t("partnerships.hero.title" as any).replace("<br/>", " ") || "Partnerships | LAB Foundation";
   }, [t]);

   return (
      <main className="bg-[#000814] min-h-screen relative overflow-x-hidden text-white font-sans">

         {/* --- Ambient Background Glows --- */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--lab-blue)_0%,transparent_70%)] opacity-10 blur-[120px] pointer-events-none" />
         <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--lab-sky)_0%,transparent_70%)] opacity-10 blur-[120px] pointer-events-none" />

         {/* hero section */}
         <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
               <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
                  // FIX: Cast to any just in case, though literals usually work
                  alt={t("partnerships.hero.alt" as any)}
                  fill
                  className="object-cover opacity-40"
                  priority
               />
               {/* Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/80 via-[#000814]/60 to-[#000814]" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center w-[90%] md:w-[80%] mx-auto mt-20">
               <span className="inline-block py-2 px-6 rounded-full border border-[var(--lab-blue)]/30 text-[var(--lab-blue-light)] text-sm font-bold uppercase tracking-wider mb-6 bg-[var(--lab-blue)]/10 backdrop-blur-sm">
                  {t("partnerships.hero.badge")}
               </span>
               <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight" dangerouslySetInnerHTML={{ __html: t("partnerships.hero.title" as any) }} />
               <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                  {t("partnerships.hero.subtitle")}
               </p>
               <div className="mt-10 flex justify-center">
                  <Link href="/contact">
                     <Button variant="pill" size="lg" className="min-w-[200px] justify-center">
                        {t("partnerships.hero.cta")}
                     </Button>
                  </Link>
               </div>
            </div>
         </section>


         {/* Benefit grid */}
         <section className="py-24 relative z-10">
            <div className="w-[90%] md:w-[80%] mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("partnerships.benefits.title")}</h2>
                  <p className="text-white/60 max-w-2xl mx-auto">
                     {t("partnerships.benefits.subtitle")}
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     {
                        titleKey: "partnerships.benefits.items.impact.title",
                        descKey: "partnerships.benefits.items.impact.desc",
                        icon: <TrendingUp size={32} />,
                        color: "text-[var(--lab-blue)]",
                        border: "border-[var(--lab-blue)]/30"
                     },
                     {
                        titleKey: "partnerships.benefits.items.reach.title",
                        descKey: "partnerships.benefits.items.reach.desc",
                        icon: <Globe2 size={32} />,
                        color: "text-[var(--lab-sky)]",
                        border: "border-[var(--lab-sky)]/30"
                     },
                     {
                        titleKey: "partnerships.benefits.items.execution.title",
                        descKey: "partnerships.benefits.items.execution.desc",
                        icon: <ShieldCheck size={32} />,
                        color: "text-[var(--lab-yellow)]",
                        border: "border-[var(--lab-yellow)]/30"
                     }
                  ].map((item, i) => (
                     <Card key={i} className={`p-8 group hover:-translate-y-2 transition-transform duration-300 border ${item.border}`}>
                        <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                           {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                           {/* FIX: Cast to any for dynamic key */}
                           {t(item.titleKey as any)}
                        </h3>
                        <p className="text-white/60 leading-relaxed">
                           {/* FIX: Cast to any for dynamic key */}
                           {t(item.descKey as any)}
                        </p>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         {/* 3. PARTNERSHIP MODELS (Split Layouts) */}
         <section className="py-24 bg-[#0a1128] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="w-[90%] md:w-[80%] mx-auto space-y-16 relative z-10">

               {/* Model 1: Corporate (Blue Theme) */}
               <div className="flex flex-col lg:flex-row gap-8 bg-[#000814]/50 border border-[var(--lab-blue)]/20 rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                     <span className="text-[var(--lab-blue)] font-bold tracking-widest text-sm uppercase mb-4">
                        {t("partnerships.models.corporate.badge")}
                     </span>
                     <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        {t("partnerships.models.corporate.title")}
                     </h2>
                     <p className="text-white/70 text-lg mb-8 leading-relaxed">
                        {t("partnerships.models.corporate.desc")}
                     </p>
                     <ul className="space-y-4 mb-8">
                        {[0, 1, 2].map((idx) => (
                           <li key={idx} className="flex items-center gap-3 text-white/80">
                              <div className="w-2 h-2 rounded-full bg-[var(--lab-blue)]" />
                              {/* FIX: Cast to any for dynamic template literal */}
                              {t(`partnerships.models.corporate.list.${idx}` as any)}
                           </li>
                        ))}
                     </ul>
                     <Link href="/contact">
                        <Button variant="outline" className="w-max border-[var(--lab-blue)] text-[var(--lab-blue)] hover:bg-[var(--lab-blue)] hover:text-white">
                           {t("partnerships.models.corporate.cta")}
                        </Button>
                     </Link>
                  </div>
                  <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                     <Image
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1000&auto=format&fit=crop"
                        alt="Corporate Meeting"
                        fill
                        className="object-cover"
                     />
                     <div className="absolute inset-0 bg-[var(--lab-blue)]/10 mix-blend-overlay"></div>
                  </div>
               </div>

               {/* Model 2: NGO/Foundations (Sky Theme) */}
               <div className="flex flex-col lg:flex-row-reverse gap-8 bg-[#000814]/50 border border-[var(--lab-sky)]/20 rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                     <span className="text-[var(--lab-sky)] font-bold tracking-widest text-sm uppercase mb-4">
                        {t("partnerships.models.ngo.badge")}
                     </span>
                     <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        {t("partnerships.models.ngo.title")}
                     </h2>
                     <p className="text-white/70 text-lg mb-8 leading-relaxed">
                        {t("partnerships.models.ngo.desc")}
                     </p>
                     <ul className="space-y-4 mb-8">
                        {[0, 1, 2].map((idx) => (
                           <li key={idx} className="flex items-center gap-3 text-white/80">
                              <div className="w-2 h-2 rounded-full bg-[var(--lab-sky)]" />
                              {/* FIX: Cast to any for dynamic template literal */}
                              {t(`partnerships.models.ngo.list.${idx}` as any)}
                           </li>
                        ))}
                     </ul>
                     <Link href="/contact">
                        <Button variant="outline" className="w-max border-[var(--lab-sky)] text-[var(--lab-sky)] hover:bg-[var(--lab-sky)] hover:text-[#000814]">
                           {t("partnerships.models.ngo.cta")}
                        </Button>
                     </Link>
                  </div>
                  <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                     <Image
                        src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1000&auto=format&fit=crop"
                        alt="Field Collaboration"
                        fill
                        className="object-cover"
                     />
                     <div className="absolute inset-0 bg-[var(--lab-sky)]/10 mix-blend-overlay"></div>
                  </div>
               </div>

            </div>
         </section>

         {/* =========================================
          4. PARTNER LOGOS (Marquee)
      ========================================= */}
         <section className="py-20 relative z-10 border-t border-white/5">
            <div className="w-[90%] md:w-[80%] mx-auto text-center mb-10">
               <h4 className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">{t("partnerships.marquee.title")}</h4>
            </div>

            <div className="relative w-full overflow-hidden">
               <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#000814] to-transparent z-10 pointer-events-none"></div>
               <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#000814] to-transparent z-10 pointer-events-none"></div>

               <div className="flex gap-16 items-center animate-scroll whitespace-nowrap w-max">
                  {[...Array(3)].map((_, i) => (
                     <div key={i} className="flex gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-3xl font-bold text-white">Google</span>
                        <span className="text-3xl font-bold text-white">Microsoft</span>
                        <span className="text-3xl font-bold text-white">Unilever</span>
                        <span className="text-3xl font-bold text-white">GatesFoundation</span>
                        <span className="text-3xl font-bold text-white">TechStars</span>
                        <span className="text-3xl font-bold text-white">GlobalGiving</span>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* =========================================
          5. CTA SECTION
      ========================================= */}
         <section className="py-32 relative overflow-hidden text-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--lab-blue)]/20 to-transparent pointer-events-none"></div>

            <div className="w-[90%] md:w-[80%] mx-auto relative z-10">
               <Card className="p-12 md:p-20 border-[var(--lab-yellow)]/20 bg-[#0a1128]/80 backdrop-blur-md">
                  <div className="inline-flex items-center justify-center p-4 bg-[var(--lab-yellow)]/10 rounded-full text-[var(--lab-yellow)] mb-8">
                     <Handshake size={32} />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                     {t("partnerships.cta_footer.title")}
                  </h2>
                  <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                     {t("partnerships.cta_footer.desc")}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-6">
                     <a href="mailto:partnerships@labfoundation.org">
                        <Button
                           variant="pill"
                           size="lg"
                           className="min-w-[250px] justify-center h-16 text-lg bg-white text-[#000814] hover:bg-gray-100"
                           icon={<Briefcase size={20} />}
                        >
                           {t("partnerships.cta_footer.btn_primary")}
                        </Button>
                     </a>
                     <Link href="/contact">
                        <Button
                           variant="outline"
                           size="lg"
                           className="min-w-[250px] justify-center h-16 text-lg border-white/20 hover:bg-white/10"
                        >
                           {t("partnerships.cta_footer.btn_secondary")}
                        </Button>
                     </Link>
                  </div>
               </Card>
            </div>
         </section>

      </main>
   );
}