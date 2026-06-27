"use client";

import { motion, Variants } from "framer-motion";
import { ResearchPillar } from "./types";

interface PillarCardProps {
  pillar: ResearchPillar;
  variants: Variants;
}

export default function PillarCard({ pillar, variants }: PillarCardProps) {
  const Icon = pillar.icon;

  return (
    <motion.div 
      variants={variants} 
      className={`p-6 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-md transition-all group relative ${pillar.hoverClass}`}
    >
      <div className={`p-3 rounded-xl w-fit mb-5 border ${pillar.iconClass}`}>
        <Icon className="w-5 h-5" />
      </div>
      <h4 className="text-lg font-bold mb-2 group-hover:text-cyber-cyan transition-colors group-hover:text-inherit">
        {pillar.title}
      </h4>
      <p className="text-xs md:text-sm text-slate-text leading-relaxed">
        {pillar.description}
      </p>
    </motion.div>
  );
}