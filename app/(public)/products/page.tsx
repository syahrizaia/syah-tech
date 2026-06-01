/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, Variants } from "framer-motion";
import { 
  Cpu, 
  ShieldCheck, 
  Network, 
  ArrowUpRight, 
  Terminal, 
  Zap, 
  Boxes,
  Activity,
  ExternalLink,
  Laptop
} from "lucide-react";
import Link from "next/link";

interface ProductItem {
  id: string;
  name: string;
  version: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<any>;
  colorClass: string;
  badgeColor: string;
  features: string[];
  metrics: { label: string; value: string };
}

interface ShowcaseWebsite {
  title: string;
  category: string;
  tech: string[];
  performance: string;
  link: string;
  description: string;
}

const WHATSAPP_NUMBER = "6282114487163";

export default function ProductsPage() {
  
  // Type-safe animation variant untuk mencegah TS Error
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

  // Dataset Produk Unggulan Syah Tech
  const productLineup: ProductItem[] = [
    {
      id: "nexus-ai",
      name: "Syah Nexus AI",
      version: "v3.2",
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
      version: "v2.8",
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
      version: "v4.0",
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
      title: "SMK Gema Nusantara",
      category: "School Profile Website",
      tech: ["React", "JavaScript", "Redis", "Tailwind"],
      performance: "99/100 Mobile Speed",
      link: "https://smk-gema-nusantara.vercel.app",
      description: "Portal informasi digital resmi yang dirancang sebagai pusat komunikasi utama bagi siswa, orang tua, dan calon peserta didik."
    },
    {
      title: "KaryaMandiri Hub",
      category: "Web Application / Dashboard",
      tech: ["Next.js", "TypeScript", "WebSockets", "Supabase"],
      performance: "Laten Transmisi < 15ms",
      link: "https://karya-mandiri.vercel.app",
      description: "Platform portofolio digital yang dirancang khusus untuk memfasilitasi para profesional dan kreator dalam menampilkan hasil karya terbaik mereka secara mandiri dan elegan."
    },
    {
      title: "Syah Group",
      category: "Corporate Cloud Software",
      tech: ["TypeScript", "NestJS", "PostgreSQL", "Docker"],
      performance: "99.99% Uptime Verified",
      link: "https://syahgroup.vercel.app",
      description: "Sistem manajemen manajemen sumber daya terpusat untuk perusahaan skala manufaktur besar guna memangkas overhead operasional."
    }
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
          {productLineup.map((product) => {
            const ProductIcon = product.icon;
            const waMessage = `Halo Tim Core Dev Syah Tech,%0A%0ASaya tertarik untuk meminta akses uji coba dan mendiskusikan implementasi untuk produk berikut:%0A%0A- *Produk:* ${product.name}%0A- *Versi:* ${product.version}%0A- *Modul:* ${product.tagline}%0A%0AMohon informasi lebih detail mengenai prasyarat sistem, metode deployment, serta skema integrasi skala enterprise.%0A%0ABerikut data profil singkat instansi kami:%0A- *Nama:* %0A- *Nama Perusahaan/Instansi:* %0A- *Kebutuhan Khusus:* %0A%0ATerima kasih.`;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

            return (
              <motion.div 
                key={product.id}
                variants={fadeUp}
                className={`p-6 rounded-2xl bg-zinc-900/90 border border-white/10 backdrop-blur-md flex flex-col justify-between shadow-2xl transition-all group ${product.colorClass}`}
              >
                <div className="space-y-4">
                  {/* Bagian Atas Card */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white/[0.04] border border-white/10 rounded-xl text-white group-hover:bg-transparent transition-colors">
                      <ProductIcon className="w-6 h-6 transition-colors" />
                    </div>
                    <span className={`text-[10px] font-mono border px-2 py-0.5 rounded-md ${product.badgeColor}`}>
                      {product.version}
                    </span>
                  </div>

                  {/* Judul & Deskripsi */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold font-display tracking-tight text-white">
                      {product.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-text italic">
                      {product.tagline}
                    </p>
                  </div>
                  
                  <p className="text-xs md:text-sm text-slate-text font-light leading-relaxed text-justify pt-1">
                    {product.description}
                  </p>

                  {/* Daftar Fitur Utama */}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <span className="text-[10px] font-mono text-slate-text/70 tracking-wider block uppercase">ARSITEKTUR UTAMA:</span>
                    <ul className="text-xs space-y-1.5 text-white/90 font-sans">
                      {product.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <Zap className="w-3 h-3 text-white/40 shrink-0" /> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bagian Bawah Card (Metrik & CTA) */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4 font-mono">
                  <div className="text-left">
                    <span className="text-[9px] text-slate-text/60 block uppercase tracking-tight">{product.metrics.label}</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1">
                      <Activity className="w-3 h-3 text-emerald-400 animate-pulse" /> {product.metrics.value}
                    </span>
                  </div>

                  <Link 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 text-xs font-bold font-sans bg-white/10 hover:bg-white/20 border border-white/10 text-white px-3 py-2 rounded-xl transition-all shadow-md"
                  >
                    Minta Akses <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ─── BAGIAN PAMERAN WEB (WEBSITE SHOWCASE HUB) ─── */}
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
            <motion.div 
              key={index}
              variants={fadeUp}
              className="p-5 rounded-2xl bg-zinc-900/90 border border-white/10 flex flex-col justify-between shadow-2xl hover:border-cyber-purple/50 transition-all group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyber-purple uppercase text-[10px] tracking-wider font-semibold">
                    {site.category}
                  </span>
                  <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px] font-bold">
                    {site.performance}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white tracking-tight group-hover:text-cyber-purple transition-colors">
                  {site.title}
                </h4>

                <p className="text-xs text-slate-text leading-relaxed font-light text-justify">
                  {site.description}
                </p>

                {/* Badges Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {site.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono bg-black text-slate-text border border-white/10 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex justify-end">
                <Link
                  href={site.link}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-text hover:text-cyber-purple transition-colors"
                >
                  Inspect Node <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── CUSTOM DEPLOYMENT BANNER ─── */}
      <section className="max-w-5xl mx-auto bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-cyber-purple/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="space-y-3 max-w-xl">
          <h3 className="text-xl md:text-2xl font-display font-bold flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyber-purple" /> Butuh Solusi Arsitektur Kustom?
          </h3>
          <p className="text-xs md:text-sm text-slate-text leading-relaxed">
            Jika modul ekosistem standar atau pameran rekayasa situs web kami di atas memerlukan modifikasi khusus, pembatasan jaringan terisolasi penuh (*air-gapped integration*), atau skema deployment hibrida khusus untuk korporasi Anda, core engineer kami siap merakitnya khusus untuk Anda.
          </p>
        </div>
        <Link 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Tim%20Dev%20Core%20Syah%20Tech%2C%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20arsitektur%20perangkat%20lunak%20dan%20sistem%20kustom%20untuk%20perusahaan%20kami.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple text-obsidian-950 font-bold px-5 py-3 rounded-xl text-xs md:text-sm hover:opacity-90 transition-all font-sans shrink-0 h-fit shadow-md"
        >
          Hubungi Tim Dev Core
        </Link>
      </section>

    </main>
  );
}