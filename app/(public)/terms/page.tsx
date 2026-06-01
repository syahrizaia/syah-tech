"use client";

import { motion, Variants } from "framer-motion";
import { 
  FileText, 
  Terminal, 
  Layers, 
  ShieldAlert, 
  Cpu, 
  Gavel, 
  CheckCircle2, 
  AlertTriangle,
} from "lucide-react";

export default function TermsOfServicePage() {
  
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
      <div className="absolute top-[8%] left-[-10%] w-[450px] h-[450px] bg-cyber-blue/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[45%] right-[-15%] w-[400px] h-[400px] bg-cyber-purple/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ─── HERO HEADER ─── */}
      <section className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue text-xs font-mono uppercase tracking-widest mb-6"
        >
          <Gavel className="w-3.5 h-3.5" /> Node Protocol Agreement v4.2
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-5"
        >
          Syarat & Ketentuan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-cyan">
            Penggunaan Layanan
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-base text-slate-text max-w-2xl mx-auto font-light"
        >
          Terakhir Diperbarui: Juni 2026 • Harap baca protokol pemanfaatan infrastruktur komputasi, perangkat lunak kustom, dan hak lisensi ekosistem Syah Tech.
        </motion.p>
      </section>

      {/* ─── TWO COLUMN LAYOUT ─── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        
        {/* KOLOM KIRI: PASAL SYARAT & KETENTUAN */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-8 space-y-10"
        >
          {/* Ketentuan 1 */}
          <motion.div variants={fadeUp} className="space-y-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-white flex items-center gap-3">
              <span className="text-cyber-blue font-mono text-sm">01/</span> 
              <FileText className="w-4 h-4 text-cyber-blue" /> Penerimaan Dokumen & Perjanjian
            </h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed text-justify">
              Dengan mengakses situs ini, menginisiasi formulir konsultasi, atau mengintegrasikan API produksi milik Syah Tech, Anda menyatakan tunduk dan sepakat mengikatkan diri pada seluruh yurisdiksi ketentuan yang tercantum di sini. Jika instansi Anda menolak bagian dari protokol ini, kami menyarankan untuk menghentikan interaksi sistem pada node jaringan kami segera.
            </p>
          </motion.div>

          {/* Ketentuan 2 */}
          <motion.div variants={fadeUp} className="space-y-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-white flex items-center gap-3">
              <span className="text-cyber-purple font-mono text-sm">02/</span> 
              <Cpu className="w-4 h-4 text-cyber-purple" /> Hak Lisensi & Batas Penggunaan Sistem
            </h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed text-justify">
              Kecuali produk open-source yang kami rilis di repositori publik, seluruh arsitektur visual, skrip automasi AI, logika penyeimbang beban (<span className="font-bold">load-balancing</span>), dan kode sumber biner yang tersemat pada ekosistem Syah Tech adalah hak milik intelektual eksklusif kami. Anda dilarang keras melakukan rekayasa balik (<span className="font-bold">reverse engineering</span>), ekstraksi otomatis (<span className="font-bold">scraping</span>), atau memindai celah kerentanan tanpa izin tertulis eksplisit dari divisi siber kami.
            </p>
          </motion.div>

          {/* Ketentuan 3 */}
          <motion.div variants={fadeUp} className="space-y-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-white flex items-center gap-3">
              <span className="text-cyber-cyan font-mono text-sm">03/</span> 
              <Layers className="w-4 h-4 text-cyber-cyan" /> Jaminan Tingkat Layanan (SLA)
            </h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed text-justify">
              Layanan konsultasi awal dan visualisasi teknologi pada situs ini disediakan berdasarkan prinsip <span className="font-bold">&quot;as is&quot;</span> (sebagaimana adanya) dan <span className="font-bold">&quot;as available&quot;</span> (selama tersedia). Perjanjian performa waktu aktif (<span className="font-bold">uptime guarantees</span>), penalti kegagalan infrastruktur, dan ganti rugi teknis secara penuh hanya berlaku jika diatur secara terpisah di dalam kontrak Master Services Agreement (MSA) korporasi resmi yang ditandatangani bermaterai.
            </p>
          </motion.div>

          {/* Ketentuan 4 */}
          <motion.div variants={fadeUp} className="space-y-3">
            <h3 className="text-lg md:text-xl font-display font-bold text-white flex items-center gap-3">
              <span className="text-cyber-blue font-mono text-sm">04/</span> 
              <ShieldAlert className="w-4 h-4 text-cyber-blue" /> Penyalahgunaan & Pemutusan Sepihak
            </h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed text-justify">
              Syah Tech memegang kedaulatan mutlak untuk mencabut hak akses IP, mematikan token integrasi, atau menolak formulir aplikasi konsultasi dari entitas mana pun terbukti secara forensik melakukan manipulasi data, spamming saluran transmisi, atau tindakan manipulatif ilegal lainnya yang berpotensi merugikan stabilitas node internal kami.
            </p>
          </motion.div>
        </motion.div>

        {/* KOLOM KANAN: SERVICE AGREEMENT WIDGET */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/10 backdrop-blur-md space-y-6 sticky top-28">
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-blue uppercase tracking-wider pb-3 border-b border-white/5">
              <Terminal className="w-4 h-4" /> Node Deployment Status
            </div>

            <div className="space-y-3 font-mono text-[11px] text-slate-text">
              <div className="flex justify-between">
                <span>Agreement Scope:</span>
                <span className="text-white">Global Enterprise</span>
              </div>
              <div className="flex justify-between">
                <span>Jurisdiction Node:</span>
                <span className="text-cyber-blue">Republic of Indonesia</span>
              </div>
              <div className="flex justify-between">
                <span>Enforcement Level:</span>
                <span className="text-cyber-cyan bg-cyber-cyan/10 px-1.5 rounded text-[10px] border border-cyber-cyan/20">IMMUTABLE</span>
              </div>
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl space-y-2 font-sans">
              <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-cyber-purple" /> Batasan Tanggung Jawab
              </h5>
              <p className="text-[11px] text-slate-text leading-relaxed">
                Syah Tech beserta anak perusahaan terafiliasi tidak bertanggung jawab atas kerugian finansial, penurunan traffic bisnis, atau kegagalan operasional akibat pemanfaatan kode komparatif eksternal di luar pengawasan engineer kami.
              </p>
            </div>

            <div className="pt-2">
              <div className="p-3 bg-cyber-blue/5 border border-cyber-blue/20 text-cyber-blue rounded-xl text-center font-sans text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Terms Framework Binding
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}