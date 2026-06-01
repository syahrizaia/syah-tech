"use client";

import { motion, Variants } from "framer-motion";
import { 
  ShieldCheck, 
  Database, 
  Lock, 
  Server, 
  UserCheck, 
  RefreshCw,
  Terminal,
  Fingerprint
} from "lucide-react";

export default function PrivacyPolicyPage() {
  
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
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-4 overflow-hidden relative">
      
      {/* ─── AMBIENT RADIAL GLOWS ─── */}
      <div className="absolute top-[5%] right-[-10%] w-[400px] h-[400px] bg-cyber-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-15%] w-[450px] h-[450px] bg-cyber-blue/5 rounded-full blur-[160px] pointer-events-none" />

      {/* ─── HERO HEADER ─── */}
      <section className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-xs font-mono uppercase tracking-widest mb-6"
        >
          <Fingerprint className="w-3.5 h-3.5" /> Privacy Matrix v4.0
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-5"
        >
          Kebijakan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple">
            Privasi & Data
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-base text-slate-text max-w-2xl mx-auto font-light"
        >
          Terakhir Diperbarui: Juni 2026 • Kebijakan ini menjelaskan bagaimana Syah Tech mengelola, memproses, dan memproteksi integritas data digital Anda.
        </motion.p>
      </section>

      {/* ─── TWO COLUMN LAYOUT ─── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        
        {/* KOLOM KIRI: PASAL-PASAL PRIVASI */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-8 space-y-10"
        >
          {/* Pasal 1 */}
          <motion.div variants={fadeUp} className="space-y-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-white flex items-center gap-3">
              <span className="text-cyber-cyan font-mono text-sm">01/</span> 
              <Database className="w-4 h-4 text-cyber-cyan" /> Data yang Kami Kumpulkan
            </h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed text-justify">
              Syah Tech hanya mengumpulkan informasi yang mutlak diperlukan untuk mengamankan komunikasi operasional Anda. Ini mencakup nama instansi, email korporat yang Anda serahkan via formulir konsultasi, serta telemetri teknis anonim (seperti alamat IP terenkripsi dan tipe peramban) guna mencegah serangan siber (<span className="font-bold">DDoS mitigation</span>) pada infrastruktur kami.
            </p>
          </motion.div>

          {/* Pasal 2 */}
          <motion.div variants={fadeUp} className="space-y-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-white flex items-center gap-3">
              <span className="text-cyber-blue font-mono text-sm">02/</span> 
              <Server className="w-4 h-4 text-cyber-blue" /> Pemrosesan & Lokasi Penyimpanan
            </h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed text-justify">
              Seluruh dataset digital diproses menggunakan kluster server awan terisolasi dengan perlindungan enkripsi <span className="font-bold">AES-256</span> baik saat data disimpan (<span className="font-bold">data-at-rest</span>) maupun saat ditransmisikan (<span className="font-bold">data-in-transit</span>). Kami tidak pernah menyewa, menjual, atau menukarkan data internal klien kepada broker data pihak ketiga mana pun.
            </p>
          </motion.div>

          {/* Pasal 3 */}
          <motion.div variants={fadeUp} className="space-y-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-white flex items-center gap-3">
              <span className="text-cyber-purple font-mono text-sm">03/</span> 
              <Lock className="w-4 h-4 text-cyber-purple" /> Penggunaan Kuki (Cookies) Teknologikal
            </h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed text-justify">
              Situs ini menggunakan kuki esensial berperforma tinggi untuk mengingat preferensi tema enkripsi visual dan mengoptimalkan kecepatan muat halaman (<span className="font-bold">caching performance</span>). Kuki ini bersifat sementara dan otomatis dihancurkan setelah sesi peramban Anda ditutup.
            </p>
          </motion.div>

          {/* Pasal 4 */}
          <motion.div variants={fadeUp} className="space-y-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-white flex items-center gap-3">
              <span className="text-cyber-cyan font-mono text-sm">04/</span> 
              <UserCheck className="w-4 h-4 text-cyber-cyan" /> Hak Kendali Pemilik Data
            </h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed text-justify">
              Sesuai ketentuan UU Pelindungan Data Pribadi (UU PDP), Anda memegang kendali penuh atas informasi Anda. Anda berhak mengajukan permohonan peninjauan, pembaruan, hingga penghapusan total (<span className="font-bold">right to be forgotten</span>) atas seluruh log data korespondensi Anda dari pusat data kami kapan saja melalui kanal operasi kami.
            </p>
          </motion.div>
        </motion.div>

        {/* KOLOM KANAN: ENCRYPTION STATUS WIDGET */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/10 backdrop-blur-md space-y-6 sticky top-28">
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan uppercase tracking-wider pb-3 border-b border-white/5">
              <Terminal className="w-4 h-4" /> Node Security Status
            </div>

            <div className="space-y-3 font-mono text-[11px] text-slate-text">
              <div className="flex justify-between">
                <span>Encryption Protocol:</span>
                <span className="text-white">TLS v1.3 Perfect</span>
              </div>
              <div className="flex justify-between">
                <span>Cipher Suite:</span>
                <span className="text-cyber-cyan">AES_256_GCM</span>
              </div>
              <div className="flex justify-between">
                <span>Data Isolation:</span>
                <span className="text-emerald-400 bg-emerald-400/10 px-1.5 rounded text-[10px]">ACTIVE</span>
              </div>
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2 font-sans">
              <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-cyber-blue animate-spin-slow" /> Amandemen Berkala
              </h5>
              <p className="text-[11px] text-slate-text leading-relaxed">
                Kebijakan ini dapat diperbarui sewaktu-waktu seiring berkembangnya regulasi hukum siber. Perubahan krusial akan ditandai dengan kenaikan versi kode rilis di atas halaman ini.
              </p>
            </div>

            <div className="pt-2">
              <div className="p-3 bg-cyber-cyan/5 border border-cyber-cyan/20 text-cyber-cyan rounded-xl text-center font-sans text-xs font-bold flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Privacy Protocol Enforced
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}