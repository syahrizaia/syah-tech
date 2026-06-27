"use client";

import { motion, Variants } from "framer-motion";
import { Network, Cpu, GitBranch } from "lucide-react";
import { ResearchPillar, WhitepaperItem } from "./types";
import HeroSection from "./HeroSection";
import LabSection from "./LabSection";
import PillarCard from "./PillarCard";
import PublicationsSection from "./PublicationsSection";

export default function InnovationClient() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const researchPillars: ResearchPillar[] = [
    {
      title: "Self-Healing Mesh Network",
      description: "Riset mengenai protokol jaringan desentralisasi murni yang mampu memperbaiki rute transfer datanya sendiri secara otomatis ketika terjadi pemutusan massal.",
      icon: Network,
      hoverClass: "hover:border-cyber-cyan/20",
      iconClass: "bg-cyber-cyan/10 border-cyber-cyan/20 text-cyber-cyan"
    },
    {
      title: "Edge Hardware Optimization",
      description: "Pemetaan ulang arsitektur mikrokontroler IoT agar mampu mengeksekusi enkripsi data militer tingkat tinggi tanpa menghabiskan daya baterai perangkat.",
      icon: Cpu,
      hoverClass: "hover:border-cyber-blue/20",
      iconClass: "bg-cyber-blue/10 border-cyber-blue/20 text-cyber-blue"
    },
    {
      title: "Syah Open Ecosystem",
      description: "Kami percaya pada kemajuan bersama. Sebagian pustaka kode (library) fundamental hasil riset kami lepas ke publik agar dapat diakses oleh komunitas global.",
      icon: GitBranch,
      hoverClass: "hover:border-cyber-purple/20",
      iconClass: "bg-cyber-purple/10 border-cyber-purple/20 text-cyber-purple"
    }
  ];

  const whitepapers: WhitepaperItem[] = [
    {
      title: "Hyper-Scalable Vector Databases inside Air-Gapped Networks",
      published: "Q1 2026",
      fileSize: "4.2 MB",
      link: "#"
    },
    {
      title: "Mitigating Autonomous Network Collisions via Deterministic Graph Routers",
      published: "Q4 2025",
      fileSize: "2.8 MB",
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-4 overflow-hidden relative">
      
      {/* ─── AMBIENT RADIAL GLOWS ─── */}
      <div className="absolute top-[15%] right-[-5%] w-[450px] h-[450px] bg-cyber-blue/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[50%] left-[-10%] w-[500px] h-[500px] bg-cyber-cyan/5 rounded-full blur-[180px] pointer-events-none" />

      {/* HERO HEADER */}
      <HeroSection />

      <div className="max-w-6xl mx-auto space-y-32 relative z-10">

        {/* SECTION 1: MAIN R&D LAB */}
        <LabSection variants={fadeUp} />

        {/* SECTION 2: BENTO INOVASI */}
        <section className="space-y-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-3xl font-display font-bold">Pilar Riset Utama Kami</h3>
            <p className="text-xs md:text-sm text-slate-text mt-1">Sektor teknologi masa depan yang sedang kami akselerasi.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {researchPillars.map((pillar, idx) => (
              <PillarCard key={idx} pillar={pillar} variants={fadeUp} />
            ))}
          </motion.div>
        </section>

        {/* SECTION 3: KONTRIBUSI ILMIAH / PAPERS */}
        <PublicationsSection papers={whitepapers} />

      </div>
    </main>
  );
}