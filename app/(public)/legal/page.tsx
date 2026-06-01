"use client";

import { motion, Variants } from "framer-motion";
import { 
  Scale, 
  FileText, 
  Lock, 
  EyeOff, 
  CheckCircle2, 
  FileCheck2, 
  Fingerprint,
  HardDriveDownload,
  AlertCircle
} from "lucide-react";

export default function LegalCompliancePage() {
  
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
      <div className="absolute top-[10%] left-[-15%] w-[500px] h-[500px] bg-cyber-purple/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-cyber-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ─── HERO HEADER ─── */}
      <section className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple text-xs font-mono uppercase tracking-widest mb-6"
        >
          <Scale className="w-3.5 h-3.5" /> Governance, Risk, and Compliance (GRC)
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-5"
        >
          Kedaulatan Data &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-cyan">
            Kepatuhan Regulasi
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-base text-slate-text max-w-2xl mx-auto font-light leading-relaxed"
        >
          Kami mengunci seluruh arsitektur perangkat lunak dan infrastruktur server sesuai dengan standar hukum keamanan internasional dan hukum privasi lokal yang ketat.
        </motion.p>
      </section>

      {/* ─── GRID PILAR UTAMA KEPATUHAN ─── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 mb-28">
        
        {/* SISI KIRI: PRINSIP LEGAL UTAMA */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-7 space-y-6"
        >
          <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-3">
            <div className="p-2 bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan rounded-lg w-fit">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold">Kepatuhan UU Pelindungan Data Pribadi (UU PDP)</h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed text-justify">
              Setiap sistem mutakhir yang kami rekayasa sepenuhnya mematuhi mandat <span className="font-bold">UU PDP Indonesia</span> dan penyelarasan <span className="font-bold">GDPR Uni Eropa</span>. Kami memastikan bahwa pemrosesan, penyimpanan enkripsi, hingga penghapusan data pengguna akhir diproses secara transparan tanpa celah kebocoran pihak ketiga.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-3">
            <div className="p-2 bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue rounded-lg w-fit">
              <EyeOff className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold">Kebijakan Isolasi Data & Non-Disclosure (NDA)</h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed text-justify">
              Data operasional korporasi Anda adalah kedaulatan mutlak Anda. Syah Tech menerapkan teknologi <span className="font-bold">Multi-Tenant Data Isolation Engine</span>. Kami menjamin secara hukum maupun infrastruktur bahwa dataset internal milik Anda tidak akan pernah digunakan untuk melatih model AI eksternal atau tercampur dengan anak perusahaan lain.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md space-y-3">
            <div className="p-2 bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple rounded-lg w-fit">
              <Fingerprint className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold">Protokol Audit Forensik Berkala</h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed text-justify">
              Infrastruktur log internal kami dirancang tidak dapat diubah (<span className="font-bold">immutable audit logs</span>). Ini mempermudah auditor hukum perusahaan Anda untuk melacak rantai keamanan data (<span className="font-bold">chain of custody</span>) jika sewaktu-waktu dibutuhkan pemeriksaan kepatuhan digital tak terduga.
            </p>
          </motion.div>
        </motion.div>

        {/* SISI KANAN: COMPLIANCE MATRIX (TABEL STANDAR) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/10 backdrop-blur-md space-y-6 sticky top-28">
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-purple uppercase tracking-wider pb-3 border-b border-white/5">
              <FileCheck2 className="w-4 h-4" /> Compliance Matrix Status
            </div>

            {/* List Sertifikasi */}
            <div className="space-y-4 font-sans text-xs">
              <div className="p-3.5 bg-black/40 border border-white/5 rounded-xl flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="font-bold text-white">ISO/IEC 27001 Alignment</h4>
                  <p className="text-[11px] text-slate-text">Standar Internasional Sistem Manajemen Keamanan Informasi (ISMS).</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded shrink-0 border border-emerald-400/20">
                  <CheckCircle2 className="w-3 h-3" /> PASSED
                </span>
              </div>

              <div className="p-3.5 bg-black/40 border border-white/5 rounded-xl flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="font-bold text-white">Zero-Trust Framework (NIST)</h4>
                  <p className="text-[11px] text-slate-text">Verifikasi identitas ketat, tanpa hak istimewa implisit pada jaringan internal.</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded shrink-0 border border-cyber-cyan/20">
                  <CheckCircle2 className="w-3 h-3" /> CERTIFIED
                </span>
              </div>

              <div className="p-3.5 bg-black/40 border border-white/5 rounded-xl flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="font-bold text-white">SOC 2 Type II Readiness</h4>
                  <p className="text-[11px] text-slate-text">Kepatuhan kriteria layanan kepercayaan pada privasi dan integritas pemrosesan data cloud.</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-cyber-blue bg-cyber-blue/10 px-2 py-0.5 rounded shrink-0 border border-cyber-blue/20">
                  <CheckCircle2 className="w-3 h-3" /> COMPLIANT
                </span>
              </div>
            </div>

            {/* Catatan Kaki Legal */}
            <div className="p-4 bg-cyber-purple/5 border border-cyber-purple/20 rounded-xl flex gap-3 text-[11px] leading-relaxed text-slate-text font-light">
              <AlertCircle className="w-4 h-4 text-cyber-purple shrink-0 mt-0.5" />
              <span>Semua salinan dokumen kepatuhan formal, laporan penanganan insiden (<span className="font-bold">SLA Incident Reports</span>), dan sertifikasi teknis dapat diminta secara tertutup oleh mitra korporasi melalui kanal komunikasi resmi kami.</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ─── DOKUMEN UNDUHAN LEGAL ─── */}
      <section className="max-w-4xl mx-auto border-t border-white/5 pt-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-text uppercase tracking-widest mb-4">
          <FileText className="w-4 h-4 text-cyber-cyan" /> Repository Legal Publik
        </div>
        <h3 className="text-xl md:text-2xl font-display font-bold mb-6">Unduh Protokol Transparansi</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto font-sans">
          <a href="#" className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between group hover:border-cyber-cyan/30 transition-all">
            <div>
              <h5 className="text-xs md:text-sm font-bold text-white group-hover:text-cyber-cyan transition-colors">Framework Tata Kelola Data Syah Tech</h5>
              <span className="text-[10px] font-mono text-slate-text/50">PDF V4.1 • Updated 2026</span>
            </div>
            <HardDriveDownload className="w-4 h-4 text-slate-text group-hover:text-cyber-cyan transition-all shrink-0 ml-4" />
          </a>
          
          <a href="#" className="p-4 rounded-xl border border-white/5 bg-white/[0.01] flex items-center justify-between group hover:border-cyber-purple/30 transition-all">
            <div>
              <h5 className="text-xs md:text-sm font-bold text-white group-hover:text-cyber-purple transition-colors">Protokol Kebocoran & Penanganan Insiden</h5>
              <span className="text-[10px] font-mono text-slate-text/50">PDF V2.0 • Security Advisory</span>
            </div>
            <HardDriveDownload className="w-4 h-4 text-slate-text group-hover:text-cyber-purple transition-all shrink-0 ml-4" />
          </a>
        </div>
      </section>

    </main>
  );
}