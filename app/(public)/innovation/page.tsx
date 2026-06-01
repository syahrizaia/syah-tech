"use client";

import { motion, Variants } from "framer-motion";
import { 
  FlaskConical, 
  Atom, 
  Orbit, 
  GitBranch, 
  LineChart, 
  Network, 
  Cpu, 
  Radio,
  ArrowUpRight
} from "lucide-react";

export default function InnovationPage() {
  
  // Type-safe animation variant untuk mencegah TS Error
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-4 overflow-hidden relative">
      
      {/* ─── AMBIENT RADIAL GLOWS ─── */}
      <div className="absolute top-[15%] right-[-5%] w-[450px] h-[450px] bg-cyber-blue/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[50%] left-[-10%] w-[500px] h-[500px] bg-cyber-cyan/5 rounded-full blur-[180px] pointer-events-none" />

      {/* ─── HERO HEADER ─── */}
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

      <div className="max-w-6xl mx-auto space-y-32 relative z-10">

        {/* ─── SECTION 1: MAIN R&D LAB (Target Anchor) ─── */}
        <section id="lab" className="scroll-mt-28 border-t border-white/5 pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
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
          
          {/* Visual Ornamen Lab - Konsol Monitoring Fiktif */}
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

        {/* ─── SECTION 2: BENTO INOVASI (Pilar Fokus Riset) ─── */}
        <section className="space-y-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-3xl font-display font-bold">Pilar Riset Utama Kami</h3>
            <p className="text-xs md:text-sm text-slate-text mt-1">Sektor teknologi masa depan yang sedang kami akselerasi.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Kartu 1: Jaringan Otonom */}
            <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md hover:border-cyber-cyan/20 transition-all group relative">
              <div className="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan rounded-xl w-fit mb-5">
                <Network className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold mb-2 group-hover:text-cyber-cyan transition-colors">Self-Healing Mesh Network</h4>
              <p className="text-xs md:text-sm text-slate-text leading-relaxed">
                Riset mengenai protokol jaringan desentralisasi murni yang mampu memperbaiki rute transfer datanya sendiri secara otomatis ketika terjadi pemutusan massal.
              </p>
            </motion.div>

            {/* Kartu 2: Silikon Kustom */}
            <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md hover:border-cyber-blue/20 transition-all group relative">
              <div className="p-3 bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue rounded-xl w-fit mb-5">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold mb-2 group-hover:text-cyber-blue transition-colors">Edge Hardware Optimization</h4>
              <p className="text-xs md:text-sm text-slate-text leading-relaxed">
                Pemetaan ulang arsitektur mikrokontroler IoT agar mampu mengeksekusi enkripsi data militer tingkat tinggi tanpa menghabiskan daya baterai perangkat.
              </p>
            </motion.div>

            {/* Kartu 3: Open-Source Contribution */}
            <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md hover:border-cyber-purple/20 transition-all group relative">
              <div className="p-3 bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple rounded-xl w-fit mb-5">
                <GitBranch className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold mb-2 group-hover:text-cyber-purple transition-colors">Syah Open Ecosystem</h4>
              <p className="text-xs md:text-sm text-slate-text leading-relaxed">
                Kami percaya pada kemajuan bersama. Sebagian pustaka kode (<span className="font-bold">library</span>) fundamental hasil riset kami lepas ke publik agar dapat diakses oleh komunitas global.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ─── SECTION 3: KONTRIBUSI ILMIAH / PAPERS ─── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-md">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyber-cyan text-xs font-mono uppercase tracking-wider">
              <LineChart className="w-4 h-4" /> Academic & Tech Publications
            </div>
            <h3 className="text-xl md:text-3xl font-display font-bold">Jurnal & Dokumen Putih Riset (<span className="font-extrabold">Whitepapers</span>)</h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed">
              Kami mendokumentasikan setiap penemuan krusial ke dalam jurnal teknis komparatif. Baca arsitektur matematika di balik sistem rekayasa perangkat lunak kami.
            </p>
          </div>
          <div className="space-y-3">
            <a href="#" className="p-4 rounded-xl border border-white/5 bg-black/20 flex items-center justify-between group hover:border-white/10 transition-colors">
              <div>
                <h5 className="text-xs md:text-sm font-bold text-white">Hyper-Scalable Vector Databases inside Air-Gapped Networks</h5>
                <span className="text-[10px] font-mono text-slate-text/60">Diterbitkan: Q1 2026 • PDF (4.2 MB)</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-text group-hover:text-cyber-cyan transition-colors shrink-0 ml-4" />
            </a>
            <a href="#" className="p-4 rounded-xl border border-white/5 bg-black/20 flex items-center justify-between group hover:border-white/10 transition-colors">
              <div>
                <h5 className="text-xs md:text-sm font-bold text-white">Mitigating Autonomous Network Collisions via Deterministic Graph Routers</h5>
                <span className="text-[10px] font-mono text-slate-text/60">Diterbitkan: Q4 2025 • PDF (2.8 MB)</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-text group-hover:text-cyber-cyan transition-colors shrink-0 ml-4" />
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}