"use client";

import { motion } from "framer-motion";
import { 
  Terminal, 
  ShieldCheck, 
  Mail, 
  Clock, 
  HelpCircle
} from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactClient() {
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
            
            {/* Memanggil Komponen Form Mandiri */}
            <ContactForm />
            
          </div>
        </motion.div>

      </div>
    </main>
  );
}