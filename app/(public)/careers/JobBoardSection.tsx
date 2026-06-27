"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase } from "lucide-react";
import { JobPosition } from "./types";
import JobCard from "./JobCard";

interface JobBoardSectionProps {
  positions: JobPosition[];
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function JobBoardSection({ 
  positions, 
  containerVariants, 
  itemVariants 
}: JobBoardSectionProps) {
  return (
    <section id="open-roles" className="max-w-4xl mx-auto mb-28 relative z-10 scroll-mt-28">
      <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8">
        <div>
          <h2 className="text-xl md:text-2xl font-display font-bold flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-cyber-cyan" /> Lowongan Terbuka
          </h2>
          <p className="text-xs text-slate-text mt-0.5">Bergabunglah dan amankan posisi teknologi Anda segera.</p>
        </div>
        <span className="text-xs font-mono bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan px-2.5 py-1 rounded-md">
          {positions.length} POSISI AKTIF
        </span>
      </div>

      {/* List Lowongan Terbuka */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4"
      >
        {positions.map((job, idx) => (
          <JobCard key={idx} job={job} variants={itemVariants} />
        ))}
      </motion.div>
    </section>
  );
}