"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { 
  Send, 
  Terminal, 
  ShieldCheck, 
  Building2, 
  Mail, 
  MessageSquare, 
  CheckCircle2,
  Clock,
  HelpCircle,
  Hash
} from "lucide-react";

export default function ContactPage() {
  // State Form Komponen
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    scope: "ai",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Type-safe animation variant untuk mencegah TS Error
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi Pengiriman Enkripsi Data Ke Server
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-4 overflow-hidden relative">
      
      {/* ─── AMBIENT RADIAL GLOWS ─── */}
      <div className="absolute top-[10%] right-[-10%] w-[450px] h-[450px] bg-cyber-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-cyber-purple/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ─── HERO HEADER ─── */}
      <section className="max-w-4xl mx-auto text-center mb-16 md:mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-mono uppercase tracking-widest mb-6"
        >
          <ShieldCheck className="w-3.5 h-3.5" /> End-to-End Encrypted Session
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-5"
        >
          Inisiasi Audit &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple">
            Konsultasi Sistem
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-base text-slate-text max-w-2xl mx-auto font-light leading-relaxed"
        >
          Diskusikan kerentanan arsitektur digital, integrasi otomasi AI, atau skalabilitas infrastruktur cloud korporasi Anda langsung bersama core engineer kami.
        </motion.p>
      </section>

      {/* ─── GRID KONTEN UTAMA ─── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
        
        {/* KOLOM KIRI: METADATA & TELEMETRI SALURAN */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 space-y-6 md:pr-4"
        >
          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyber-cyan flex items-center gap-2">
              <Terminal className="w-4 h-4" /> Secure Channels
            </h3>
            <p className="text-xs text-slate-text leading-relaxed">
              Jika perusahaan Anda mewajibkan protokol komunikasi tertutup khusus (Air-Gapped/NDAs pra-diskusi), silakan hubungi simpul utama kami langsung:
            </p>
            
            <div className="space-y-3 pt-2 text-xs font-mono">
              <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyber-blue shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-text block">SECURE BACKBONE MAIL</span>
                  <span className="text-white hover:text-cyber-cyan transition-colors">syahrizaalsistani@gmail.com</span>
                </div>
              </div>
              <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center gap-3">
                <Clock className="w-4 h-4 text-cyber-purple shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-text block">RESPONSE PROTOCOL MATRIX</span>
                  <span className="text-white">&lt; 12 Hours SLA Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* SLA FAQ Box Mini */}
          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-3">
            <h4 className="text-xs font-bold font-sans flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5 text-cyber-purple" /> Apa langkah selanjutnya?
            </h4>
            <ol className="text-xs text-slate-text space-y-2 list-decimal list-inside font-light leading-relaxed">
              <li>Penyelarasan jadwal kalender via email enkripsi aman.</li>
              <li>Sesi briefing kebutuhan teknis 30 menit tanpa dipungut biaya.</li>
              <li>Penyerahan draf proposal arsitektur awal beserta estimasi biaya.</li>
            </ol>
          </div>
        </motion.div>

        {/* KOLOM KANAN: FORM KONSULTASI INTERAKTIF */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-7"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-white/[0.01] border border-white/10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-blue/[0.02] to-transparent pointer-events-none" />
            
            {/* Tampilan Ketika Form Sukses Dikirim */}
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full w-fit mx-auto animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold">Inisiasi Transmisi Sukses</h3>
                <p className="text-xs md:text-sm text-slate-text max-w-sm mx-auto leading-relaxed">
                  Data konsultasi sistem telah dienkripsi dan berhasil masuk ke antrean utama. Core Engine kami akan menghubungi Anda sesegera mungkin.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-mono text-cyber-cyan hover:underline pt-4 block mx-auto"
                >
                  &gt; Kirim aplikasi baru
                </button>
              </motion.div>
            ) : (
              
              /* Komponen Utama HTML Form */
              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field Nama */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-text flex items-center gap-1.5">
                      <Hash className="w-3 h-3 text-cyber-cyan" /> NAMA PERWAKILAN
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Syahriza Ikhsan"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyber-cyan/50 text-white transition-all"
                    />
                  </div>

                  {/* Field Korporasi */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-text flex items-center gap-1.5">
                      <Building2 className="w-3 h-3 text-cyber-blue" /> NAMA PERUSAHAAN
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. PT Telekomunikasi Inti"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyber-blue/50 text-white transition-all"
                    />
                  </div>
                </div>

                {/* Field Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-text flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-cyber-purple" /> EMAIL KORPORAT / BISNIS
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="e.g. name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyber-purple/50 text-white transition-all"
                  />
                </div>

                {/* Dropdown Scope Solusi */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-text flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-cyber-cyan" /> CAKUPAN ARSITEKTUR UTAMA
                  </label>
                  <select 
                    value={formData.scope}
                    onChange={(e) => setFormData({...formData, scope: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyber-cyan/50 text-white transition-all appearance-none cursor-pointer"
                  >
                    <option value="ai" className="bg-obsidian-950">Next-Gen AI & Automation Lab</option>
                    <option value="security" className="bg-obsidian-950">Cyber Security Architecture Audits</option>
                    <option value="devops" className="bg-obsidian-950">DevOps & Cloud Hybrid Orchestration</option>
                    <option value="saas" className="bg-obsidian-950">Custom Enterprise SaaS Infrastructure</option>
                  </select>
                </div>

                {/* Field Detail Masalah */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-text flex items-center gap-1.5">
                    <MessageSquare className="w-3 h-3 text-cyber-blue" /> RINGKASAN TANTANGAN SISTEM
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Deskripsikan secara ringkas masalah beban server, kebocoran data, otomasi alur kerja, atau arsitektur teknologi yang ingin Anda bedah..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-cyber-blue/50 text-white transition-all resize-none leading-relaxed"
                  />
                </div>

                {/* Tombol Kirim Form */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple text-obsidian-950 font-bold py-3 px-6 rounded-xl text-xs md:text-sm hover:opacity-90 transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-obsidian-950 border-t-transparent rounded-full animate-spin" />
                      Memproses Enkripsi Saluran...
                    </>
                  ) : (
                    <>
                      Kirim Aplikasi Konsultasi <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>
        </motion.div>

      </div>
    </main>
  );
}