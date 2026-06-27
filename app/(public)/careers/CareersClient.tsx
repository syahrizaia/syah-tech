"use client";

import { Variants } from "framer-motion";
import { JobPosition } from "./types";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import JobBoardSection from "./JobBoardSection";
import ProtocolSection from "./ProtocolSection";

export default function CareersClient() {
  
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

      {/* HERO HEADER COMPONENT */}
      <HeroSection />

      {/* CULTURAL BENEFITS COMPONENT */}
      <BenefitsSection />

      {/* ACTIVE JOB BOARD COMPONENT */}
      <JobBoardSection 
        positions={openPositions} 
        containerVariants={containerVariants} 
        itemVariants={fadeUp} 
      />

      {/* HIRING PROCESS PROTOCOL COMPONENT */}
      <ProtocolSection />

    </main>
  );
}