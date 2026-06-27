"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface SolutionSectionProps {
  id: string;
  icon: React.ComponentType<any>;
  badgeColorClass: string;
  iconColorClass: string;
  title: React.ReactNode;
  description: string;
  features: string[];
  isReversed?: boolean;
  children: React.ReactNode; // Tempat kontainer visual/skrip kode diisi dinamis
}

export default function SolutionSection({
  id,
  icon: Icon,
  badgeColorClass,
  iconColorClass,
  title,
  description,
  features,
  isReversed = false,
  children
}: SolutionSectionProps) {
  
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id={id} className="scroll-mt-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
      {/* Kolom Informasi Teks */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className={`md:col-span-6 space-y-6 ${isReversed ? "order-1 md:order-2" : ""}`}
      >
        <div className={`p-3 rounded-xl w-fit border ${badgeColorClass}`}>
          <Icon className={`w-6 h-6 ${iconColorClass}`} />
        </div>
        <h2 className="text-2xl md:text-4xl font-display font-bold">
          {title}
        </h2>
        <p className="text-sm md:text-base text-slate-text leading-relaxed text-justify">
          {description}
        </p>
        <ul className="space-y-3 font-medium text-xs md:text-sm text-white/80">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <CheckCircle2 className={`w-4 h-4 shrink-0 ${iconColorClass}`} />
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>
      
      {/* Kolom Visual / Kontainer Skrip Code */}
      <motion.div 
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={`md:col-span-6 ${isReversed ? "order-2 md:order-1" : ""}`}
      >
        {children}
      </motion.div>
    </section>
  );
}