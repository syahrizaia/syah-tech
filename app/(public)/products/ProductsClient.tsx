"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, ShieldCheck, Network, Terminal, Boxes, Laptop } from "lucide-react";
import { ProductItem, ShowcaseWebsite } from "./types";
import ProductCard from "./ProductCard";
import WebsiteCard from "./WebsiteCard";
import DeploymentBanner from "./DeploymentBanner";

const WHATSAPP_NUMBER = "6282114487163";

export default function ProductsClient() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const productLineup: ProductItem[] = [
    {
      id: "nexus-ai",
      name: "Syah Nexus AI",
      version: "v1.0",
      tagline: "Private Enterprise LLM Orchestrator",
      description: "Mesin orkestrasi model kecerdasan buatan terlokalisasi untuk memproses otomatisasi alur kerja tanpa mengekspos data internal ke server cloud eksternal publik.",
      icon: Cpu,
      colorClass: "hover:border-cyber-cyan/30 group-hover:text-cyber-cyan",
      badgeColor: "bg-cyber-cyan/10 border-cyber-cyan/30 text-cyber-cyan",
      features: ["Konteks Memori Vektor Terisolasi", "Arsitektur Multi-Model On-Premise", "SLA Inferensi Rata-rata < 45ms"],
      metrics: { label: "Cluster Throughput", value: "8.4k Tok/s" }
    },
    {
      id: "aegis-security",
      name: "Syah Aegis Security",
      version: "v1.0",
      tagline: "Zero-Trust Cryptographic Guard",
      description: "Sistem pertahanan lapis perimeter siber otomatis dengan otentikasi kriptografi tanpa kunci publik konvensional, mendeteksi anomali paket data secara real-time.",
      icon: ShieldCheck,
      colorClass: "hover:border-cyber-purple/30 group-hover:text-cyber-purple",
      badgeColor: "bg-cyber-purple/10 border-cyber-purple/30 text-cyber-purple",
      features: ["Proteksi Post-Quantum Encryption", "Penyaringan Serangan Paket Lapis 7", "Immutable Audit Logging Matrix"],
      metrics: { label: "Threat Mitigation", value: "99.998%" }
    },
    {
      id: "synapse-mesh",
      name: "Syah Synapse Mesh",
      version: "v1.0",
      tagline: "Self-Healing Distributed Database Network",
      description: "Infrastruktur basis data grafik terdistribusi murni yang mampu mereplikasi jaringannya secara dinamis melewati batas server regional yang terisolasi (air-gapped).",
      icon: Network,
      colorClass: "hover:border-cyber-blue/30 group-hover:text-cyber-blue",
      badgeColor: "bg-cyber-blue/10 border-cyber-blue/30 text-cyber-blue",
      features: ["Auto-Routing Graph Topology", "Kompitalasi Konsensus Super Cepat", "Sistem Penyembuhan Node Mandiri"],
      metrics: { label: "Sync Latency Node", value: "0.12 ms" }
    }
  ];

  const clientWebsites: ShowcaseWebsite[] = [
    {
      title: "KaryaMandiri",
      category: "Web Application / Dashboard",
      tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "WebSockets"],
      performance: "Laten Transmisi < 15ms",
      link: "https://karya-mandiri.vercel.app",
      description: "Platform portofolio digital yang dirancang khusus untuk memfasilitasi para profesional dan kreator dalam menampilkan hasil karya terbaik mereka secara mandiri dan elegan."
    },
    {
      title: "Syah Group",
      category: "Corporate Cloud Software",
      tech: ["Next.js", "TypeScript", "Neon.tech", "PostgreSQL", "Tailwind"],
      performance: "99.99% Uptime Verified",
      link: "https://syahgroup.vercel.app",
      description: "Sistem manajemen manajemen sumber daya terpusat untuk perusahaan skala manufaktur besar guna memangkas overhead operasional."
    },
    {
      title: "CV Berkat Mandiri",
      category: "E-Commerce / Supply Chain Website",
      tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Docker"],
      performance: "99/100 Mobile Speed",
      link: "https://cvberkatmandiri.vercel.app",
      description: "Platform digital resmi untuk distributor karung skala nasional yang mengintegrasikan katalog produk, manajemen stok real-time, dan sistem pemesanan B2B secara efisien."
    },
  ];

  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-4 overflow-hidden relative">
      {/* ─── AMBIENT RADIAL GLOWS ─── */}
      <div className="absolute top-[10%] right-[-5%] w-[450px] h-[450px] bg-cyber-cyan/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-cyber-blue/5 rounded-full blur-[180px] pointer-events-none" />

      {/* ─── HERO HEADER ─── */}
      <section className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-mono uppercase tracking-widest mb-6"
        >
          <Boxes className="w-3.5 h-3.5 animate-pulse" /> Core Product Ecosystem v3.1
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-6"
        >
          Arsitektur Lunak:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple">
            Modul Siap Pakai
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-lg text-slate-text max-w-2xl mx-auto font-light leading-relaxed"
        >
          Perangkat lunak tingkat industri (<span className="font-bold">enterprise</span>) yang dirancang khusus untuk memecahkan hambatan performa komputasi, keandalan data, dan ancaman keamanan ekosistem digital Anda.
        </motion.p>
      </section>

      {/* ─── PRODUCT BENTO GRID ─── */}
      <section className="max-w-6xl mx-auto relative z-10 mb-28">
        <div className="border-b border-white/10 pb-4 mb-8">
          <h2 className="text-xl font-display font-bold flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyber-cyan" /> Core Software Engines
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {productLineup.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              variants={fadeUp} 
              whatsappNumber={WHATSAPP_NUMBER} 
            />
          ))}
        </motion.div>
      </section>

      {/* ─── WEBSITE SHOWCASE HUB ─── */}
      <section className="max-w-6xl mx-auto relative z-10 mb-28 font-sans">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <div>
            <h2 className="text-xl font-display font-bold flex items-center gap-2">
              <Laptop className="w-4 h-4 text-cyber-purple" /> Custom Web Deployments
            </h2>
            <p className="text-xs text-slate-text mt-0.5">Situs web mutakhir dengan performa Lighthouse mendekati sempurna.</p>
          </div>
          <span className="text-[10px] font-mono bg-cyber-purple/20 border border-cyber-purple/40 text-cyber-purple px-2 py-0.5 rounded">
            PRODUCTION READY
          </span>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {clientWebsites.map((site, index) => (
            <WebsiteCard 
              key={index} 
              site={site} 
              variants={fadeUp} 
            />
          ))}
        </motion.div>
      </section>

      {/* ─── CUSTOM DEPLOYMENT BANNER ─── */}
      <DeploymentBanner whatsappNumber={WHATSAPP_NUMBER} />
    </main>
  );
}