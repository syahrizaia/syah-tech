"use client";

import { motion } from "framer-motion";
import { Orbit } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto text-center mb-28 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-xs font-mono uppercase tracking-widest mb-6"
      >
        <Orbit className="w-3.5 h-3.5 animate-spin-slow" /> Speculative Engineering
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-6"
      >
        Eksplorasi Tanpa Batas:{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-cyan">
          Fase R&D Hub
        </span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-sm md:text-lg text-slate-text max-w-2xl mx-auto font-light leading-relaxed"
      >
        Di Syah Tech, kami tidak menunggu masa depan terjadi. Kami merakitnya hari ini melalui riset komputasi radikal dan arsitektur eksperimental.
      </motion.p>
    </section>
  );
}