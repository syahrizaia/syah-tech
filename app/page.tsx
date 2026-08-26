"use client";

import { motion } from "framer-motion";
import { 
  Cpu, 
  ShieldAlert, 
  CloudLightning, 
  Terminal, 
  Code2, 
  ArrowUpRight, 
  Layers, 
  Radio,
  Users2,
  Zap
} from "lucide-react";
import Link from "next/link";

// Data Layanan Utama Syah Tech
const services = [
  {
    icon: <Cpu className="w-6 h-6 text-cyber-cyan" />,
    title: "Next-Gen AI & Automation",
    description: "Mengintegrasikan kecerdasan buatan kustom untuk otomatisasi alur kerja enterprise dan analisis prediktif skala besar."
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-cyber-cyan" />,
    title: "Cyber Security Architecture",
    description: "Perlindungan penetrasi penetratif, audit keamanan berkala, dan enkripsi data end-to-end berstandar militer."
  },
  {
    icon: <CloudLightning className="w-6 h-6 text-cyber-cyan" />,
    title: "Cloud Infrastructure & DevOps",
    description: "Modernisasi sistem warisan (legacy) ke arsitektur cloud hybrid yang scalable, high-availability, dan zero-downtime."
  },
  {
    icon: <Terminal className="w-6 h-6 text-cyber-cyan" />,
    title: "Custom Enterprise Software",
    description: "Pengembangan perangkat lunak internal kustom yang dirancang khusus untuk menyinkronkan operasi antar anak perusahaan."
  }
];

// Data Statistik
const stats = [
  { value: "99.99%", label: "Uptime Infrastructure" },
  { value: "12M+", label: "Cyber Attacks Blocked" },
  { value: "250+", label: "Enterprise Solutions Built" },
];

export default function SyahTechLanding() {
  return (
    <main className="min-h-screen bg-transparent text-white overflow-hidden relative selection:bg-cyber-cyan/30">
      
      {/* ─── ORNAMEN LATAR BELAKANG NEON GLOW ─── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      {/* Pendaran Cyan di Kiri Atas */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyber-cyan/10 rounded-full blur-[100px] md:blur-[160px] pointer-events-none animate-pulse" />
      {/* Pendaran Purple di Kanan Bawah */}
      <div className="absolute bottom-1/4 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-cyber-purple/10 rounded-full blur-[120px] pointer-events-none" />

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-4 max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Badge Berjalan/Animasi Atas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8"
        >
          <Radio className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-cyber-cyan uppercase">
            Division: Digital Transformation & IT
          </span>
        </motion.div>

        {/* Judul Utama dengan Border Aksentuasi Neon Cyber */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold leading-[1.15] md:leading-tight max-w-4xl tracking-tight mb-6"
        >
          Mengakselerasi Kedaulatan Digital Melalui{" "}
          <span className="inline-block border border-cyber-cyan/40 px-3 py-0.5 md:px-5 md:py-1 rounded-xl md:rounded-2xl bg-cyber-cyan/5 text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple align-middle mt-2 md:mt-0 shadow-[0_0_30px_rgba(0,242,254,0.1)]">
            Inovasi Mutakhir.
          </span>
        </motion.h1>

        {/* Sub-deskripsi */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-lg text-slate-text font-light max-w-2xl leading-relaxed mb-8 md:mb-12"
        >
          Syah Tech menyediakan infrastruktur komputasi awan, arsitektur keamanan siber tingkat tinggi, dan rekayasa perangkat lunak untuk transformasi bisnis berskala global.
        </motion.p>

        {/* Tombol Aksi Interaktif */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link 
            href="/contact" 
            className="group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyber-cyan to-cyber-blue text-obsidian-950 font-bold text-sm md:text-base rounded-full hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:shadow-[0_0_35px_rgba(0,242,254,0.5)]"
          >
            Memulai Proyek 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/solutions" 
            className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 rounded-full text-sm md:text-base font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            Lihat Solusi
          </Link>
        </motion.div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="border-y border-white/5 bg-white/[0.01] backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="space-y-1 md:space-y-2"
            >
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">
                {stat.value}
              </h2>
              <p className="text-xs md:text-sm text-slate-text/60 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CORE SOLUTIONS GRID SECTION ─── */}
      <section id="solutions" className="py-20 md:py-32 px-4 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5" /> Capabilities
          </div>
          <h2 className="text-2xl md:text-4xl font-display font-bold max-w-xl">
            Solusi Arsitektur Digital Skala <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">Enterprise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 bg-white/[0.01] backdrop-blur-md border border-white/10 rounded-2xl md:rounded-[24px] hover:border-cyber-cyan/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Glow Efek Sudut Card */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl w-fit mb-5 group-hover:bg-cyber-cyan/10 group-hover:border-cyber-cyan/30 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-text leading-relaxed text-justify">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── INTERACTIVE TECH STACK MARQUEE ─── */}
      <section className="py-16 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.01]">
        <div className="max-w-6xl mx-auto px-4 mb-10 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold tracking-widest text-cyber-cyan uppercase mb-1">Robust Frameworks</h4>
            <p className="text-xl font-display font-medium text-white">Didukung Oleh Teknologi Terdepan Industri</p>
          </div>
          <p className="text-xs md:text-sm text-slate-text max-w-xs md:text-right">
            Kami hanya mengimplementasikan teknologi modern demi menjamin kecepatan evolusi bisnis Anda.
          </p>
        </div>

        {/* Baris Simbol Animasi Tanpa Hambatan (Marquee) */}
        <div className="flex gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] py-2">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-4 shrink-0 whitespace-nowrap text-xs md:text-sm font-mono tracking-wider font-semibold text-slate-text"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-8 items-center pr-8">
                <span className="flex items-center gap-2"><Code2 className="w-4 h-4 text-cyber-cyan/40" /> NEXT.JS APP ROUTER</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-cyber-blue/40" /> TAILWIND CSS</span>
                <span className="flex items-center gap-2"><Users2 className="w-4 h-4 text-cyber-purple/40" /> TYPESCRIPT 5.X</span>
                <span className="flex items-center gap-2"><Layers className="w-4 h-4 text-cyber-cyan/40" /> AMAZON WEB SERVICES</span>
                <span className="flex items-center gap-2"><Cpu className="w-4 h-4 text-cyber-blue/40" /> KUBERNETES CONTAINER</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CALL TO ACTION (CTA) SECTION ─── */}
      <section className="py-20 md:py-32 px-4 max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-16 rounded-[2rem] md:rounded-[40px] bg-gradient-to-br from-white/[0.02] to-white/[0.005] border border-white/10 text-center relative overflow-hidden backdrop-blur-xl shadow-2xl"
        >
          {/* Efek Pendar Cahaya Besar di Tengah CTA */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-cyber-purple/20 rounded-full blur-[80px] pointer-events-none" />

          <h2 className="text-2xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6 leading-tight">
            Siap Mengamankan Masa Depan <br className="hidden md:inline" /> Infrastruktur Digital Anda?
          </h2>
          <p className="text-sm md:text-base text-slate-text max-w-2xl mx-auto mb-8 md:mb-12 font-light">
            Hubungi tim teknis ahli kami untuk sesi konsultasi mendalam atau audit arsitektur sistem IT gratis untuk perusahaan Anda.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyber-cyan to-cyber-blue text-obsidian-950 font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 shadow-xl text-sm md:text-base"
          >
            Hubungi Enterprise Consultant
          </Link>
        </motion.div>
      </section>

    </main>
  );
}