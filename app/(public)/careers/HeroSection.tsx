"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto text-center mb-24 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-xs font-mono uppercase tracking-widest mb-6"
      >
        <Sparkles className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" /> Talent Acquisition Phase v2.6
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-6"
      >
        Rakit Kode Mutakhir,{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple">
          Pimpin Revolusi Sistem
        </span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-sm md:text-lg text-slate-text max-w-2xl mx-auto font-light leading-relaxed"
      >
        Kami mencari para pemikir radikal, arsitek data, dan pemburu bug yang siap mendedikasikan keahliannya untuk membangun infrastruktur enterprise digital masa depan.
      </motion.p>
    </section>
  );
}