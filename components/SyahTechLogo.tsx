import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  iconSize?: number;
}

export default function SyahTechLogo({ 
  className = "", 
  showText = true, 
  iconSize = 32 
}: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* ─── ICON LOGO (MONOGRAM S + T) ─── */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
      >
        <defs>
          {/* Gradasi warna sesuai tema Syah Tech */}
          <linearGradient id="cyberCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#0070f3" />
          </linearGradient>
          <linearGradient id="cyberPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0070f3" />
            <stop offset="100%" stopColor="#bd00ff" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Hexagon / Perimeter Frame */}
        <polygon 
          points="50,5 90,28 90,72 50,95 10,72 10,28" 
          stroke="url(#cyberCyan)" 
          strokeWidth="3" 
          strokeOpacity="0.3"
          fill="none" 
        />

        {/* Struktur Huruf 'S' (Atas & Tengah) */}
        <path
          d="M 25 30 L 75 30 L 75 45 L 25 55 L 25 70 L 75 70"
          stroke="url(#cyberCyan)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
        />

        {/* Struktur Huruf 'T' (Batang Vertikal Penembus Tengah) */}
        <path
          d="M 50 15 L 50 85"
          stroke="url(#cyberPurple)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />

        {/* Core Node / Titik Pusat Data Semikonduktor */}
        <circle cx="50" cy="50" r="6" fill="#ffffff" filter="url(#glow)" />
        <circle cx="25" cy="30" r="4" fill="#00f0ff" />
        <circle cx="75" cy="70" r="4" fill="#bd00ff" />
      </svg>

      {/* ─── TEKS BRANDING ─── */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="text-lg font-black tracking-wider uppercase font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400">
            SYAH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">TECH</span>
          </span>
          <span className="text-[9px] font-mono tracking-widest uppercase text-slate-text/60 -mt-0.5">
            Core Dev Ecosystem
          </span>
        </div>
      )}
    </div>
  );
}