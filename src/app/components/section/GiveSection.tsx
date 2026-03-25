'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Gift, Heart, Calendar } from "lucide-react";
import Button from "../ui/Button";
import { useI18n } from "@/app/providers";

const gifts = [
  { id: 1, key: "handcrafted", image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop", link: "/shop", icon: <Gift className="text-[var(--lab-yellow)]" size={24} /> },
  { id: 2, key: "essential", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop", link: "/essential-gifts", icon: <Heart className="text-[var(--lab-blue)]" size={24} /> },
  { id: 3, key: "monthly", image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop", link: "/monthly", icon: <Calendar className="text-[var(--lab-sky)]" size={24} /> },
];

export default function GiveSection() {
  const { t } = useI18n();

  return (
    <section className="relative py-24 bg-[#000814]">
      <div className="w-[80%] mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
            {t("give.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("give.heading")}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            {t("give.subtext")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gifts.map((gift) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative bg-[#020d2b] border border-white/5 rounded-[2rem] overflow-hidden hover:border-[var(--lab-blue)]/30 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={gift.image}
                  // FIX: Cast to any
                  alt={t(`give.cards.${gift.key}.title` as any)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020d2b] to-transparent opacity-90" />
                <div className="absolute bottom-4 left-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
                  {gift.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-2 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {/* FIX: Cast to any */}
                  {t(`give.cards.${gift.key}.title` as any)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {/* FIX: Cast to any */}
                  {t(`give.cards.${gift.key}.description` as any)}
                </p>
                <div className="pt-6 border-t border-white/5">
                  <Button
                    variant="pill"
                    size="sm"
                    icon={<ArrowUpRight size={16} />}
                    className="w-full justify-between bg-white/5 border-transparent hover:bg-white/10 hover:border-white/20"
                  >
                    {/* FIX: Cast to any */}
                    {t(`give.cards.${gift.key}.button` as any)}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}