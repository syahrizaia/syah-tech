"use client";

import { motion, Variants } from "framer-motion";
import { 
  Cpu, 
  ShieldCheck, 
  CloudLightning, 
  Layers, 
  CheckCircle2, 
  Terminal, 
  Database, 
  Network, 
  Lock, 
  Workflow, 
  Server, 
  Blocks
} from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
  
  // Animasi Varian untuk Konten
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-4 overflow-hidden relative">
      
      {/* ─── AMBIENT BACKGROUND GLOWS ─── */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-cyber-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-cyber-purple/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-cyber-blue/5 rounded-full blur-[150px] pointer-events-none" />

      {/* ─── HERO HEADER ─── */}
      <section className="max-w-4xl mx-auto text-center mb-24 md:mb-36 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-xs font-mono uppercase tracking-widest mb-6"
        >
          Core Architecture
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-6"
        >
          Solusi Arsitektur &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple">
            Infrastruktur Digital
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-lg text-slate-text max-w-2xl mx-auto font-light leading-relaxed"
        >
          Kami merekayasa ekosistem teknologi tingkat tinggi yang aman, scalable, dan siap menghadapi otomatisasi masa depan.
        </motion.p>
      </section>

      <div className="max-w-6xl mx-auto space-y-32 md:space-y-48 relative z-10">

        {/* ─── SECTION 1: ARTIFICIAL INTELLIGENCE ─── */}
        <section id="ai" className="scroll-mt-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="md:col-span-6 space-y-6"
          >
            <div className="p-3 bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan rounded-xl w-fit">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold">
              Next-Gen AI & <span className="text-cyber-cyan">Automation</span>
            </h2>
            <p className="text-sm md:text-base text-slate-text leading-relaxed text-justify">
              Bukan sekadar chatbot biasa. Kami membangun kecerdasan buatan terintegrasi menggunakan Large Language Models (LLM) privat dan Machine Learning prediktif yang disesuaikan dengan dataset unik perusahaan Anda.
            </p>
            <ul className="space-y-3 font-medium text-xs md:text-sm text-white/80">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0" /> Enterprise Cognitive Agents & Custom LLM</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0" /> Analisis Prediktif Data Skala Besar</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0" /> Otomatisasi Alur Kerja Operasional Multi-Departemen</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 p-6 md:p-8 bg-white/[0.01] backdrop-blur-md border border-white/10 rounded-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent pointer-events-none" />
            <div className="space-y-4 font-mono text-xs text-slate-text">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-cyber-cyan flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5" /> ai_agent_core.py</span>
                <span className="text-white/30">STATUS: ACTIVE</span>
              </div>
              <p className="text-emerald-400">&gt; Initializing neural network cluster...</p>
              <p>&gt; Loading enterprise proprietary dataset vectors [OK]</p>
              <p>&gt; Optimizing token processing hyper-parameters...</p>
              <div className="p-4 bg-black/40 border border-white/5 rounded-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-cyber-blue" />
                  <div>
                    <p className="text-white font-bold font-sans text-sm">Vector Knowledge Base</p>
                    <p className="text-[10px]">12.4M Tokens Indexed</p>
                  </div>
                </div>
                <span className="text-[10px] bg-cyber-cyan/20 text-cyber-cyan px-2 py-0.5 rounded border border-cyber-cyan/30">99.8% Sync</span>
              </div>
            </div>
          </motion.div>
        </section>


        {/* ─── SECTION 2: CYBER SECURITY ─── */}
        <section id="cyber-security" className="scroll-mt-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 order-2 md:order-1 p-6 md:p-8 bg-white/[0.01] backdrop-blur-md border border-white/10 rounded-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 to-transparent pointer-events-none" />
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                <Lock className="w-5 h-5 text-cyber-purple" />
                <p className="text-xs text-white font-bold font-sans">Zero-Trust Auth</p>
                <p className="text-[10px] font-mono text-slate-text">Identity Verified Strict</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                <Network className="w-5 h-5 text-cyber-cyan" />
                <p className="text-xs text-white font-bold font-sans">WAF Protection</p>
                <p className="text-[10px] font-mono text-slate-text">DDOS Mitigated Layer 7</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl col-span-2 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
                  <span className="text-xs font-mono">ENCRYPTION TYPE: AES-GCM-256</span>
                </div>
                <span className="text-[10px] font-mono text-cyber-cyan">MIL-SPEC</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="md:col-span-6 order-1 md:order-2 space-y-6"
          >
            <div className="p-3 bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple rounded-xl w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold">
              Cyber Security <span className="text-cyber-purple">Architecture</span>
            </h2>
            <p className="text-sm md:text-base text-slate-text leading-relaxed text-justify">
              Membangun benteng pertahanan digital tanpa kompromi. Kami menerapkan framework keamanan komprehensif mulai dari Zero-Trust Network Architecture, enkripsi end-to-end dinamis, hingga audit penetrasi berkala.
            </p>
            <ul className="space-y-3 font-medium text-xs md:text-sm text-white/80">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyber-purple shrink-0" /> Audit Kerentanan & Penetration Testing Siber</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyber-purple shrink-0" /> Mitigasi Ancaman Real-time Menggunakan AI SIEM</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyber-purple shrink-0" /> Kepatuhan Standar Regulasi Data Internasional (ISO 27001)</li>
            </ul>
          </motion.div>
        </section>


        {/* ─── SECTION 3: DEVOPS & CLOUD HYBRID ─── */}
        <section id="devops" className="scroll-mt-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="md:col-span-6 space-y-6"
          >
            <div className="p-3 bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue rounded-xl w-fit">
              <CloudLightning className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold">
              DevOps & <span className="text-cyber-blue">Cloud Hybrid</span>
            </h2>
            <p className="text-sm md:text-base text-slate-text leading-relaxed text-justify">
              Hancurkan batasan skalabilitas sistem. Kami memodernisasi infrastruktur server warisan perusahaan menuju arsitektur multi-cloud orchestration berbasis Kubernetes yang menjamin waktu aktif maksimal serta efisiensi biaya server yang masif.
            </p>
            <ul className="space-y-3 font-medium text-xs md:text-sm text-white/80">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyber-blue shrink-0" /> Integrasi CI/CD Pipeline Otomatis Penuh</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyber-blue shrink-0" /> Migrasi Infrastruktur ke AWS, Azure, & Cloud Privat</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyber-blue shrink-0" /> Orkestrasi Kontainer Komputasi Berkapasitas Tinggi</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 p-6 md:p-8 bg-white/[0.01] backdrop-blur-md border border-white/10 rounded-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent pointer-events-none" />
            <div className="space-y-4 font-mono text-xs text-slate-text">
              <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Server className="w-4 h-4 text-cyber-blue" />
                  <span className="font-sans font-bold text-white">AWS Cluster Instance</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">HEALTHY</span>
              </div>
              <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Workflow className="w-4 h-4 text-cyber-cyan" />
                  <span className="font-sans font-bold text-white">GitHub Actions Pipeline</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">SUCCESS</span>
              </div>
              <div className="flex justify-between text-[11px] px-1 text-slate-text/60">
                <span>Avg Latency: 14ms</span>
                <span>Load Balancer: Optimal</span>
              </div>
            </div>
          </motion.div>
        </section>


        {/* ─── SECTION 4: CUSTOM ENTERPRISE SAAS ─── */}
        <section id="custom-software" className="scroll-mt-28 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 order-2 md:order-1 p-6 md:p-8 bg-white/[0.01] backdrop-blur-md border border-white/10 rounded-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent pointer-events-none" />
            <div className="grid grid-cols-1 gap-3 font-sans text-xs">
              <div className="p-3 bg-black/50 border border-cyber-cyan/20 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Blocks className="w-4 h-4 text-cyber-cyan" />
                  <p className="font-bold text-white">Multi-Tenant Dashboard</p>
                </div>
                <span className="text-[10px] text-slate-text">Ready</span>
              </div>
              <div className="p-3 bg-black/30 border border-white/5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Database className="w-4 h-4 text-slate-text" />
                  <p className="font-bold text-white/70">Subsidiary Data Isolation Engine</p>
                </div>
                <span className="text-[10px] text-slate-text">Isolated</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="md:col-span-6 order-1 md:order-2 space-y-6"
          >
            <div className="p-3 bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 border border-white/10 text-white rounded-xl w-fit">
              <Layers className="w-6 h-6 text-cyber-cyan" />
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold">
              Custom Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">SaaS Solutions</span>
            </h2>
            <p className="text-sm md:text-base text-slate-text leading-relaxed text-justify">
              Singkirkan sistem eceran terpisah yang tidak efisien. Kami membangun perangkat lunak internal berskala korporat dengan arsitektur multi-tenant kustom yang menyinkronkan data inti operasi pusat dengan seluruh anak perusahaan secara real-time.
            </p>
            <ul className="space-y-3 font-medium text-xs md:text-sm text-white/80">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0" /> Arsitektur Multi-Tenant Terisolasi Aman</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0" /> Sinkronisasi API Core dengan Legacy Internal ERP</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0" /> Dashboard Analitik Konsolidasi Lintas Divisi</li>
            </ul>
          </motion.div>
        </section>

      </div>

      {/* ─── CONTEXT FOOTER INTERACTION CTA ─── */}
      <section className="mt-32 max-w-4xl mx-auto text-center relative z-10">
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.01] border border-white/10 backdrop-blur-md">
          <h3 className="text-xl md:text-3xl font-display font-bold mb-4">Butuh Konsultasi Arsitektur Spesifik?</h3>
          <p className="text-xs md:text-sm text-slate-text max-w-xl mx-auto mb-6">
            Tim teknis ahli Syah Tech siap membantu membedah tantangan sistem Anda melalui sesi audit arsitektur IT mendalam.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyber-cyan to-cyber-blue text-obsidian-950 font-bold px-6 py-3 rounded-full hover:opacity-90 transition-all text-xs md:text-sm shadow-lg shadow-cyber-cyan/10"
          >
            Hubungi Solusi Enterprise
          </Link>
        </div>
      </section>

    </main>
  );
}