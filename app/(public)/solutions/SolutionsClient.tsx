"use client";

import { 
  Cpu, 
  ShieldCheck, 
  CloudLightning, 
  Layers, 
  Terminal, 
  Database, 
  Network, 
  Lock, 
  Workflow, 
  Server, 
  Blocks
} from "lucide-react";
import HeroSection from "./HeroSection";
import SolutionSection from "./SolutionSection";
import CtaSection from "./CtaSection";

export default function SolutionsClient() {
  return (
    <main className="min-h-screen bg-transparent text-white pt-32 pb-24 px-4 overflow-hidden relative">
      
      {/* ─── AMBIENT BACKGROUND GLOWS ─── */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-cyber-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-cyber-purple/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-cyber-blue/5 rounded-full blur-[150px] pointer-events-none" />

      {/* HERO HEADER */}
      <HeroSection />

      <div className="max-w-6xl mx-auto space-y-32 md:space-y-48 relative z-10">

        {/* SECTION 1: ARTIFICIAL INTELLIGENCE */}
        <SolutionSection
          id="ai"
          icon={Cpu}
          badgeColorClass="bg-cyber-cyan/10 border-cyber-cyan/30"
          iconColorClass="text-cyber-cyan"
          title={<>Next-Gen AI & <span className="text-cyber-cyan">Automation</span></>}
          description="Bukan sekadar chatbot biasa. Kami membangun kecerdasan buatan terintegrasi menggunakan Large Language Models (LLM) privat dan Machine Learning prediktif yang disesuaikan dengan dataset unik perusahaan Anda."
          features={[
            "Enterprise Cognitive Agents & Custom LLM",
            "Analisis Prediktif Data Skala Besar",
            "Otomatisasi Alur Kerja Operasional Multi-Departemen"
          ]}
        >
          <div className="p-6 md:p-8 bg-white/[0.01] backdrop-blur-md border border-white/10 rounded-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent pointer-events-none" />
            <div className="space-y-4 font-mono text-xs text-slate-text">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-cyber-cyan flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5" /> ai_agent_core.py</span>
                <span className="text-white/30">STATUS: ACTIVE</span>
              </div>
              <p className="text-emerald-400">&gt; Initializing neural network cluster...</p>
              <p>&gt; Loading enterprise proprietary dataset vectors [OK]</p>
              <p>&gt; Optimizing token processing hyper-parameters...</p>
              <div className="p-4 bg-black/40 border border-white/5 rounded-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-cyber-blue" />
                  <div>
                    <p className="text-white font-bold font-sans text-sm">Vector Knowledge Base</p>
                    <p className="text-[10px]">12.4M Tokens Indexed</p>
                  </div>
                </div>
                <span className="text-[10px] bg-cyber-cyan/20 text-cyber-cyan px-2 py-0.5 rounded border border-cyber-cyan/30">99.8% Sync</span>
              </div>
            </div>
          </div>
        </SolutionSection>


        {/* SECTION 2: CYBER SECURITY */}
        <SolutionSection
          id="cyber-security"
          icon={ShieldCheck}
          badgeColorClass="bg-cyber-purple/10 border-cyber-purple/30"
          iconColorClass="text-cyber-purple"
          title={<>Cyber Security <span className="text-cyber-purple">Architecture</span></>}
          description="Membangun benteng pertahanan digital tanpa kompromi. Kami menerapkan framework keamanan komprehensif mulai dari Zero-Trust Network Architecture, enkripsi end-to-end dinamis, hingga audit penetrasi berkala."
          features={[
            "Audit Kerentanan & Penetration Testing Siber",
            "Mitigasi Ancaman Real-time Menggunakan AI SIEM",
            "Kepatuhan Standar Regulasi Data Internasional (ISO 27001)"
          ]}
          isReversed
        >
          <div className="p-6 md:p-8 bg-white/[0.01] backdrop-blur-md border border-white/10 rounded-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 to-transparent pointer-events-none" />
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                <Lock className="w-5 h-5 text-cyber-purple" />
                <p className="text-xs text-white font-bold font-sans">Zero-Trust Auth</p>
                <p className="text-[10px] font-mono text-slate-text">Identity Verified Strict</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-2">
                <Network className="w-5 h-5 text-cyber-cyan" />
                <p className="text-xs text-white font-bold font-sans">WAF Protection</p>
                <p className="text-[10px] font-mono text-slate-text">DDOS Mitigated Layer 7</p>
              </div>
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl col-span-2 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
                  <span className="text-xs font-mono">ENCRYPTION TYPE: AES-GCM-256</span>
                </div>
                <span className="text-[10px] font-mono text-cyber-cyan">MIL-SPEC</span>
              </div>
            </div>
          </div>
        </SolutionSection>


        {/* SECTION 3: DEVOPS & CLOUD HYBRID */}
        <SolutionSection
          id="devops"
          icon={CloudLightning}
          badgeColorClass="bg-cyber-blue/10 border-cyber-blue/30"
          iconColorClass="text-cyber-blue"
          title={<>DevOps & <span className="text-cyber-blue">Cloud Hybrid</span></>}
          description="Hancurkan batasan skalabilitas sistem. Kami memodernisasi infrastruktur server warisan perusahaan menuju arsitektur multi-cloud orchestration berbasis Kubernetes yang menjamin waktu aktif maksimal serta efisiensi biaya server yang masif."
          features={[
            "Integrasi CI/CD Pipeline Otomatis Penuh",
            "Migrasi Infrastruktur ke AWS, Azure, & Cloud Privat",
            "Orkestrasi Kontainer Komputasi Berkapasitas Tinggi"
          ]}
        >
          <div className="p-6 md:p-8 bg-white/[0.01] backdrop-blur-md border border-white/10 rounded-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent pointer-events-none" />
            <div className="space-y-4 font-mono text-xs text-slate-text">
              <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Server className="w-4 h-4 text-cyber-blue" />
                  <span className="font-sans font-bold text-white">AWS Cluster Instance</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">HEALTHY</span>
              </div>
              <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Workflow className="w-4 h-4 text-cyber-cyan" />
                  <span className="font-sans font-bold text-white">GitHub Actions Pipeline</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">SUCCESS</span>
              </div>
              <div className="flex justify-between text-[11px] px-1 text-slate-text/60">
                <span>Avg Latency: 14ms</span>
                <span>Load Balancer: Optimal</span>
              </div>
            </div>
          </div>
        </SolutionSection>


        {/* SECTION 4: CUSTOM ENTERPRISE SAAS */}
        <SolutionSection
          id="custom-software"
          icon={Layers}
          badgeColorClass="border-white/10"
          iconColorClass="text-cyber-cyan"
          title={<>Custom Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">SaaS Solutions</span></>}
          description="Singkirkan sistem eceran terpisah yang tidak efisien. Kami membangun perangkat lunak internal berskala korporat dengan arsitektur multi-tenant kustom yang menyinkronkan data inti operasi pusat dengan seluruh anak perusahaan secara real-time."
          features={[
            "Arsitektur Multi-Tenant Terisolasi Aman",
            "Sinkronisasi API Core dengan Legacy Internal ERP",
            "Dashboard Analitik Konsolidasi Lintas Divisi"
          ]}
          isReversed
        >
          <div className="p-6 md:p-8 bg-white/[0.01] backdrop-blur-md border border-white/10 rounded-2xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent pointer-events-none" />
            <div className="grid grid-cols-1 gap-3 font-sans text-xs">
              <div className="p-3 bg-black/50 border border-cyber-cyan/20 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Blocks className="w-4 h-4 text-cyber-cyan" />
                  <p className="font-bold text-white">Multi-Tenant Dashboard</p>
                </div>
                <span className="text-[10px] text-slate-text">Ready</span>
              </div>
              <div className="p-3 bg-black/30 border border-white/5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Database className="w-4 h-4 text-slate-text" />
                  <p className="font-bold text-white/70">Subsidiary Data Isolation Engine</p>
                </div>
                <span className="text-[10px] text-slate-text">Isolated</span>
              </div>
            </div>
          </div>
        </SolutionSection>

      </div>

      {/* FOOTER INTERACTION CTA */}
      <CtaSection />

    </main>
  );
}