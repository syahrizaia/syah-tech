"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  Terminal, 
  Building2, 
  Mail, 
  MessageSquare, 
  CheckCircle2,
  Hash
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    scope: "ai",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pemetaan label drop-down agar teks di WhatsApp lebih manusiawi
  const scopeLabels: Record<string, string> = {
    ai: "Next-Gen AI & Automation Lab",
    security: "Cyber Security Architecture Audits",
    devops: "DevOps & Cloud Hybrid Orchestration",
    saas: "Custom Enterprise SaaS Infrastructure"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const whatsappTargetNumber = "6282114487163"; 
    
    const selectedScopeText = scopeLabels[formData.scope] || formData.scope;

    // Menyusun template teks pesan terstruktur
    const textMessage = `Halo Core Engineer Syah Tech,

Saya ingin menginisiasi audit & konsultasi sistem dengan rincian berikut:

*Nama Perwakilan:* ${formData.name}
*Nama Perusahaan:* ${formData.company}
*Email Bisnis:* ${formData.email}
*Cakupan Arsitektur:* ${selectedScopeText}

*Ringkasan Tantangan Sistem:*
${formData.message}

Terima kasih.`;

    // Mengubah teks string menjadi format URL Encoded aman
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${whatsappTargetNumber}?text=${encodedMessage}`;

    // Simulasi visual loading sejenak sebelum mengalihkan halaman
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Membuka tab/aplikasi WhatsApp tujuan
      window.open(whatsappUrl, "_blank");
    }, 1200);
  };

  if (isSubmitted) {
    return (
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
          Seluruh data input telah diubah menjadi skrip aman dan dialihkan menuju WhatsApp utama. Core Engine kami akan segera membalas chat Anda.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-xs font-mono text-cyber-cyan hover:underline pt-4 block mx-auto"
        >
          &gt; Kirim aplikasi baru
        </button>
      </motion.div>
    );
  }

  return (
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
            Mengompilasi Enkripsi Saluran...
          </>
        ) : (
          <>
            Hubungi via WhatsApp <Send className="w-3.5 h-3.5" />
          </>
        )}
      </button>

    </form>
  );
}