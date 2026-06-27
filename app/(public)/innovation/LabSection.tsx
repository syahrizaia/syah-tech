"use client";

import { motion, Variants } from "framer-motion";
import { FlaskConical, Radio, Atom } from "lucide-react";

interface LabSectionProps {
  variants: Variants;
}

export default function LabSection({ variants }: LabSectionProps) {
  return (
    <section id="lab" className="scroll-mt-28 border-t border-white/5 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={variants}
        className="md:col-span-7 space-y-6"
      >
        <div className="p-3 bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple rounded-xl w-fit">
          <FlaskConical className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-mono text-cyber-purple uppercase tracking-wider block mb-1">PROYEK ALPHA-X</span>
          <h2 className="text-2xl md:text-4xl font-display font-bold">
            Syah Advanced <span className="text-cyber-purple">R&D Lab</span>
          </h2>
        </div>
        <p className="text-sm md:text-base text-slate-text leading-relaxed text-justify">
          Laboratorium Inti Syah Tech berfungsi sebagai inkubator teknologi tingkat tinggi berisiko besar namun berdampak eksponensial. Kami fokus memecahkan batas performa sistem konvensional menggunakan optimalisasi algoritma tingkat rendah (<span className="font-bold">low-level system re-engineering</span>) dan simulasi jaringan desentralisasi.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
            <h5 className="text-sm font-bold text-white font-sans">Komputasi Kuantum Paralel</h5>
            <p className="text-xs text-slate-text">Eksperimentasi enkripsi post-quantum untuk pertahanan data masa depan.</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1">
            <h5 className="text-sm font-bold text-white font-sans">Neural Network Terdistribusi</h5>
            <p className="text-xs text-slate-text">Inkubasi kecerdasan AI lokal tanpa ketergantungan pada server cloud global.</p>
          </div>
        </div>
      </motion.div>
      
      {/* Visual Ornamen Telemetri Lab */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="md:col-span-5 p-6 bg-gradient-to-br from-obsidian-950 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl relative overflow-hidden font-mono text-xs text-slate-text"
      >
        <div className="absolute top-0 right-0 p-3">
          <Radio className="w-4 h-4 text-cyber-purple animate-pulse" />
        </div>
        <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-4">
          <Atom className="w-4 h-4 text-cyber-cyan animate-spin-slow" />
          <span className="text-white font-bold">CORE_LAB_TELEMETRY</span>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Cluster Efficiency:</span>
            <span className="text-cyber-cyan font-bold">98.42%</span>
          </div>
          <div className="flex justify-between">
            <span>Data Processed/Sec:</span>
            <span className="text-white">4.12 PB/s</span>
          </div>
          <div className="flex justify-between">
            <span>Cryptography Shield:</span>
            <span className="text-emerald-400 bg-emerald-400/10 px-1.5 rounded text-[10px]">REINFORCED</span>
          </div>
          <div className="pt-4 border-t border-white/5 space-y-1 text-[11px] text-cyber-purple">
            <p>&gt; sys_quantum_test --simulate</p>
            <p className="text-white/40">&gt; Quantum coherence sustained for 1420ms...</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}