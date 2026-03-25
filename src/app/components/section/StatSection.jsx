'use client'

import { motion } from "framer-motion";
import { GraduationCap, HeartPulse, Users, LineChart } from "lucide-react";
import { useI18n } from "@/app/providers"; 

export default function ImpactSection() {
  const { t } = useI18n();

  const stats = [
    {
      id: 1,
      value: "10,000+",
      labelKey: "impact.children_educated",
      icon: <GraduationCap size={48} className="text-white" />,
      bgColor: "bg-[var(--lab-sky)]" 
    },
    {
      id: 2,
      value: "5,000+",
      labelKey: "impact.families_healthcare",
      icon: <HeartPulse size={48} className="text-white" />,
      bgColor: "bg-[var(--lab-blue)]"
    },
    {
      id: 3,
      value: "1,200+",
      labelKey: "impact.women_empowered",
      icon: <Users size={48} className="text-white" />,
      bgColor: "bg-[var(--lab-yellow)]"
    },
    {
      id: 4,
      value: "20+",
      labelKey: "impact.projects_launched",
      icon: <LineChart size={48} className="text-white" />,
      bgColor: "bg-[#000a2a]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-24 bg-[#000814] overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-20">
         <div className="absolute top-10 -left-20 w-[600px] h-[600px] rounded-full border border-[var(--lab-blue)]/20"></div>
         <div className="absolute top-20 -left-10 w-[500px] h-[500px] rounded-full border border-[var(--lab-blue)]/20"></div>
         <div className="absolute top-32 left-0 w-[400px] h-[400px] rounded-full border border-[var(--lab-blue)]/20"></div>
      </div>

      <div className="w-[80%] mx-auto relative z-10 text-center">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center"
        >
          <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
            {t("impact.label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {t("impact.headline")}
          </h2>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row w-full shadow-2xl"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className={`
                flex-1 p-10 flex flex-col items-center justify-center text-center h-[320px]
                ${stat.bgColor}
                rounded-2xl lg:rounded-none mb-4 lg:mb-0
                ${index === 0 ? "lg:rounded-l-[2.5rem]" : ""}
                ${index === stats.length - 1 ? "lg:rounded-r-[2.5rem]" : ""}
                transition-transform duration-300 hover:z-10 hover:scale-105
              `}
            >
              <div className="mb-6 opacity-90">
                {stat.icon}
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {stat.value}
              </h3>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-[200px]">
                {t(stat.labelKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
