"use client";

import { motion, Variants } from "framer-motion";
import { 
  Terminal, 
  Globe, 
  Zap, 
  Sparkles,
  ArrowRight,
  MapPin,
  Clock,
  Briefcase
} from "lucide-react";
import Link from "next/link";

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  tags: string[];
  link: string;
}

export default function CareersPage() {
  
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

  // Dataset Lowongan Pekerjaan Aktif
  const openPositions: JobPosition[] = [
    {
      title: "Senior AI & LLM Systems Architect",
      department: "Core Intelligence Lab",
      location: "Jakarta / Hybrid",
      type: "Full-time",
      tags: ["Python", "PyTorch", "Vector DB", "LLMOps"],
      link: "#apply"
    },
    {
      title: "Principal Cloud Infrastructure & DevOps Engineer",
      department: "Cloud Orkestrasi",
      location: "Remote (Indonesia)",
      type: "Full-time",
      tags: ["Kubernetes", "AWS", "Terraform", "CI/CD"],
      link: "#apply"
    },
    {
      title: "Cyber Security Penetration Tester & Cryptographer",
      department: "Defensive Security Team",
      location: "Jakarta / On-site",
      type: "Full-time",
      tags: ["Zero-Trust", "Reverse Eng", "ISO 27001"],
      link: "#apply"
    },
    {
      title: "Full-Stack Software Engineer (Next.js & Go)",
      department: "Enterprise SaaS Applications",
      location: "Remote / Hybrid",
      type: "Full-time",
      tags: ["Next.js", "Golang", "TypeScript", "PostgreSQL"],
      link: "#apply"
    }
  ];

  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-4 overflow-hidden relative">
      
      {/* ─── AMBIENT RADIAL GLOWS ─── */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-cyber-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] bg-cyber-blue/5 rounded-full blur-[150px] pointer-events-none" />

      {/* ─── HERO HEADER ─── */}
      <section className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan text-xs font-mono uppercase tracking-widest mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" /> Talent Acquisition Phase v2.6
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight mb-6"
        >
          Rakit Kode Mutakhir,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple">
            Pimpin Revolusi Sistem
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-lg text-slate-text max-w-2xl mx-auto font-light leading-relaxed"
        >
          Kami mencari para pemikir radikal, arsitek data, dan pemburu bug yang siap mendedikasikan keahliannya untuk membangun infrastruktur enterprise digital masa depan.
        </motion.p>
      </section>

      {/* ─── KULTUR & BENEFIT BENCHMARK ─── */}
      <section className="max-w-6xl mx-auto mb-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md">
            <div className="p-2.5 bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan rounded-lg w-fit mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-1.5">Kedaulatan Remote / Hybrid</h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed">
              Kami percaya pada produktivitas berbasis hasil, bukan absensi fisik baku. Pilih ekosistem kerja terbaik Anda secara fleksibel.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md">
            <div className="p-2.5 bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue rounded-lg w-fit mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-1.5">Infrastruktur Kelas Atas</h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed">
              Akses workstation mutakhir, anggaran riset internal mandiri, dan komputasi awan premium tanpa batas untuk eksperimen Anda.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md">
            <div className="p-2.5 bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple rounded-lg w-fit mb-4">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-1.5">Kurikulum R&D Intensif</h3>
            <p className="text-xs md:text-sm text-slate-text leading-relaxed">
              Alokasikan waktu khusus setiap minggu untuk menguji teknologi spekulatif di R&D Lab internal Syah Tech bersama tim ahli kami.
            </p>
          </div>

        </div>
      </section>

      {/* ─── JOB BOARD ACTIVE SECTION ─── */}
      <section id="open-roles" className="max-w-4xl mx-auto mb-28 relative z-10 scroll-mt-28">
        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyber-cyan" /> Lowongan Terbuka
            </h2>
            <p className="text-xs text-slate-text mt-0.5">Bergabunglah dan amankan posisi teknologi Anda segera.</p>
          </div>
          <span className="text-xs font-mono bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan px-2.5 py-1 rounded-md">
            {openPositions.length} POSISI AKTIF
          </span>
        </div>

        {/* List Lowongan */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {openPositions.map((job, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              className="p-5 md:p-6 rounded-xl bg-white/[0.01] border border-white/5 backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] hover:border-cyber-cyan/20 transition-all group"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-wider text-cyber-cyan uppercase block">
                  {job.department}
                </span>
                <h4 className="text-base md:text-lg font-bold group-hover:text-cyber-cyan transition-colors">
                  {job.title}
                </h4>
                
                {/* Meta data */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-text/70 pt-1 font-sans">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.type}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono bg-black/40 text-slate-text/80 px-2 py-0.5 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tombol Apply */}
              <Link 
                href={job.link}
                className="inline-flex items-center justify-center gap-1.5 border border-white/10 group-hover:border-cyber-cyan/40 group-hover:bg-cyber-cyan group-hover:text-obsidian-950 px-4 py-2.5 rounded-xl text-xs font-bold font-sans transition-all shrink-0 md:self-center"
              >
                Kirim Dokumen <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── HIRING PROTOCOL (PROSES SELEKSI) ─── */}
      <section className="max-w-5xl mx-auto bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 text-white/25 font-mono text-7xl font-extrabold select-none pointer-events-none">
          SYS_RECRUIT
        </div>
        
        <div className="mb-10 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-display font-bold">Protokol Penilaian Bakat Kami</h3>
          <p className="text-xs text-slate-text mt-1">Langkah taktis penyaringan tim teknologi inti Syah Tech.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10 font-sans">
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyber-cyan">FASE 01</div>
            <h5 className="font-bold text-sm text-white">Vetting Dokumen & Portofolio</h5>
            <p className="text-xs text-slate-text leading-relaxed">
              Peninjauan riwayat arsitektur kode dan kontribusi open-source nyata yang pernah Anda kerjakan sebelumnya.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyber-blue">FASE 02</div>
            <h5 className="font-bold text-sm text-white">Pertahanan Arsitektur (<span className="font-bold">Live Defense</span>)</h5>
            <p className="text-xs text-slate-text leading-relaxed">
              Sesi bedah kasus sistem berskala besar langsung dengan para Technical Lead internal kami tanpa tes hafalan algoritma kuno.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyber-purple">FASE 03</div>
            <h5 className="font-bold text-sm text-white">Sinkronisasi Onboarding</h5>
            <p className="text-xs text-slate-text leading-relaxed">
              Integrasi identitas token internal, penyerahan hardware, dan penyelarasan visi besar ekosistem digital bersama.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}