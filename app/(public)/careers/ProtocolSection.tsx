"use client";

export default function ProtocolSection() {
  return (
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
          <h5 className="font-bold text-sm text-white">Pertahanan Arsitektur (Live Defense)</h5>
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
  );
}