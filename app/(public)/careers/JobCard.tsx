"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { JobPosition } from "./types";

interface JobCardProps {
  job: JobPosition;
  variants: Variants;
}

export default function JobCard({ job, variants }: JobCardProps) {
  return (
    <motion.div 
      variants={variants}
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
  );
}