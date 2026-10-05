"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, ArrowRight, Cpu, ShieldCheck, Network, Cloud, Activity, Braces, Radio, Layers3, LockKeyhole, Workflow, Database, Server, KeyRound, Sparkles } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "99.99%", label: "Infrastructure uptime" },
  { value: "12M+", label: "Threats blocked" },
  { value: "250+", label: "Solutions delivered" },
];

const modules = [
  { code: "NX-01", name: "Nexus AI", descriptor: "Private intelligence layer", metric: "8.4k Tok/s", metricLabel: "cluster throughput", icon: Cpu, tint: "cyan", tags: ["Private LLM", "RAG", "On-premise"] },
  { code: "AG-02", name: "Aegis Security", descriptor: "Zero-trust by design", metric: "99.998%", metricLabel: "threat mitigation", icon: ShieldCheck, tint: "violet", tags: ["Zero trust", "Post-quantum", "SIEM"] },
  { code: "SN-03", name: "Synapse Mesh", descriptor: "Resilient distributed systems", metric: "0.12 ms", metricLabel: "node sync latency", icon: Network, tint: "blue", tags: ["Self-healing", "Edge-ready", "Mesh"] },
];

const capabilities = [
  { icon: Sparkles, index: "01", title: "Private AI systems", copy: "Model orchestration and intelligent workflows that keep enterprise data within your control.", color: "text-cyan-300" },
  { icon: KeyRound, index: "02", title: "Zero-trust security", copy: "Identity-first protection, continuous verification, and security telemetry across every layer.", color: "text-violet-300" },
  { icon: Cloud, index: "03", title: "Hybrid cloud platform", copy: "Resilient workloads across private cloud, public cloud, and distributed edge environments.", color: "text-blue-300" },
  { icon: Database, index: "04", title: "Custom software", copy: "Purpose-built enterprise software that connects teams, data, and critical operations.", color: "text-emerald-300" },
];

export default function SyahTechLanding() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="ambient-glow pointer-events-none absolute left-1/2 top-[-16rem] h-[42rem] w-[65rem] -translate-x-1/2 rounded-full bg-cyber-cyan/[0.09] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-16rem] top-[38rem] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.08] blur-[140px]" />

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-36 sm:px-8 md:min-h-[760px] md:grid-cols-[1.08fr_.92fr] md:gap-10 md:pt-40 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }} className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyber-cyan/20 bg-cyber-cyan/[0.06] px-3.5 py-2 font-mono text-[10px] tracking-[.17em] text-cyber-cyan sm:text-[11px]">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
            DIGITAL TRANSFORMATION & IT <span className="text-white/25">/</span> SYSTEMS ONLINE
          </div>
          <h1 className="max-w-3xl text-[clamp(2.8rem,6.8vw,5.8rem)] font-semibold leading-[.99] tracking-[-.065em]">
            Engineering the <span className="hero-highlight bg-gradient-to-r from-cyan-300 via-cyber-cyan to-blue-400 bg-clip-text text-transparent">systems</span>{" behind what’s next."}
          </h1>
          <p className="mt-7 max-w-xl text-[15px] leading-7 text-slate-300/75 sm:text-base">
            Kami merancang infrastruktur AI, keamanan zero-trust, dan jaringan cloud terdistribusi untuk organisasi yang beroperasi tanpa kompromi.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyber-cyan px-6 py-3.5 text-sm font-semibold text-[#041117] shadow-[0_0_34px_rgba(6,182,212,.2)] transition hover:bg-cyan-300">
              Jadwalkan konsultasi <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link href="/solutions" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.06]">
              Jelajahi solusi <ArrowDownRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 flex items-center gap-3 font-mono text-[10px] tracking-wider text-white/40"><LockKeyhole className="h-3.5 w-3.5 text-emerald-400" /> PRIVATE BY ARCHITECTURE <span className="text-white/15">•</span> BUILT FOR ENTERPRISE</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .97, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-[570px]">
          <div className="absolute -inset-8 rounded-[3rem] bg-cyber-cyan/[0.045] blur-3xl" />
          <div className="dashboard-card relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#090e18]/90 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
              <div className="flex items-center gap-2.5"><div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-red-400/70"/><i className="h-2 w-2 rounded-full bg-amber-300/70"/><i className="h-2 w-2 rounded-full bg-emerald-400/70"/></div><span className="ml-2 font-mono text-[10px] text-white/45">SYAH / SYSTEM OBSERVABILITY</span></div>
              <span className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-300"><Activity className="h-3 w-3"/> LIVE</span>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
              <div className="bg-[#090e18] p-5 sm:p-6"><div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-white/40"><Cpu className="h-3.5 w-3.5 text-cyber-cyan"/> INTELLIGENCE CORE</div><div className="mt-5 text-3xl font-medium tracking-tight">8.4<span className="text-cyber-cyan">k</span></div><div className="mt-1 font-mono text-[10px] text-white/40">TOKENS / SEC</div><div className="mt-5 flex h-10 items-end gap-1">{[28,44,36,62,49,78,57,86,65,94,72,82,56,70,90,74,100,67,82,93,61,79,53,69].map((height, i) => <span key={i} className="telemetry-bar flex-1 rounded-t-[2px] bg-gradient-to-t from-cyber-blue/20 to-cyber-cyan/80" style={{height:`${height}%`,opacity:.5+height/200,animationDelay:`${i * 65}ms`}}/>)}</div></div>
              <div className="bg-[#090e18] p-5 sm:p-6"><div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-white/40"><ShieldCheck className="h-3.5 w-3.5 text-violet-300"/> THREAT DEFENSE</div><div className="mt-5 text-3xl font-medium tracking-tight">99.99<span className="text-violet-300">%</span></div><div className="mt-1 font-mono text-[10px] text-white/40">POLICY ENFORCEMENT</div><div className="mt-5 flex h-10 items-center gap-1.5">{Array.from({length:22},(_,i)=><span key={i} className={`h-1.5 flex-1 rounded-full ${i<20?"bg-emerald-400/70":"bg-white/10"}`}/>)}</div></div>
              <div className="col-span-2 bg-[#090e18] p-5 sm:p-6"><div className="flex items-center justify-between"><div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-white/40"><Network className="h-3.5 w-3.5 text-blue-300"/> DISTRIBUTED MESH</div><span className="rounded border border-emerald-400/15 bg-emerald-400/[0.06] px-2 py-1 font-mono text-[9px] text-emerald-300">12 NODES HEALTHY</span></div><div className="relative mt-5 h-28 overflow-hidden rounded-xl border border-white/[0.06] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,.10),transparent_66%)] sm:h-32"><div className="absolute inset-0 opacity-50" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",backgroundSize:"24px 24px"}}/><svg viewBox="0 0 500 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full"><g stroke="rgba(6,182,212,.24)" strokeWidth="1">{[[72,62,155,35],[72,62,155,90],[155,35,242,57],[155,90,242,57],[242,57,330,30],[242,57,330,91],[330,30,425,58],[330,91,425,58]].map(([x1,y1,x2,y2],i)=><line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>)}</g><g>{[[72,62],[155,35],[155,90],[242,57],[330,30],[330,91],[425,58]].map(([cx,cy],i)=><g key={i} className="mesh-node" style={{animationDelay:`${i * 240}ms`}}><circle cx={cx} cy={cy} r="8" fill="rgba(6,182,212,.10)"/><circle cx={cx} cy={cy} r="3" fill={i===3?"#67e8f9":"#3b82f6"}/></g>)}</g></svg><span className="absolute bottom-2 left-3 font-mono text-[8px] tracking-widest text-white/25">REGIONAL MESH TOPOLOGY / ENCRYPTED</span><div className="absolute right-4 top-1/2 -translate-y-1/2"><div className="orbit-core" aria-hidden="true"><span className="orbit-ring orbit-ring-a"/><span className="orbit-ring orbit-ring-b"/><span className="orbit-ring orbit-ring-c"/><span className="orbit-sphere"/><span className="orbit-satellite orbit-satellite-a"/><span className="orbit-satellite orbit-satellite-b"/></div></div></div></div>
            </div>
            <div className="flex items-center justify-between px-5 py-3 font-mono text-[9px] text-white/35"><span>EDGE CLUSTER / JAKARTA-01</span><span>LATENCY <b className="font-normal text-cyber-cyan">12 ms</b></span><span>BUILD 4.2.1</span></div>
          </div>
        </motion.div>
      </section>

      <section className="relative border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/[0.07] px-5 py-3 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
          {stats.map((stat, i) => <motion.div key={stat.label} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="flex items-center justify-between py-5 sm:justify-center sm:gap-4 sm:py-7"><span className="font-mono text-[10px] uppercase tracking-[.12em] text-white/40">{stat.label}</span><span className="text-2xl font-medium tracking-tight text-white sm:text-3xl">{stat.value}</span></motion.div>)}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end"><div><div className="mb-4 flex items-center gap-2 font-mono text-[10px] tracking-[.2em] text-cyber-cyan"><Layers3 className="h-3.5 w-3.5"/> SOFTWARE ENGINES / 01—03</div><h2 className="max-w-2xl text-3xl font-semibold tracking-[-.04em] sm:text-5xl">Core systems, built for <span className="text-white/40">real-world complexity.</span></h2></div><Link href="/products" className="group inline-flex items-center gap-2 pb-1 text-sm text-white/55 transition hover:text-cyber-cyan">Lihat seluruh produk <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></Link></div>
        <div className="grid gap-4 lg:grid-cols-3">
          {modules.map((module,i)=>{const Icon=module.icon;return <motion.article key={module.code} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.5,delay:i*.08}} className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] sm:p-7"><div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-cyber-cyan/[0.035] blur-3xl transition group-hover:bg-cyber-cyan/[0.09]"/><div className="relative flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.15em] text-white/35">{module.code} / CORE ENGINE</span><Icon className={`h-[18px] w-[18px] ${module.tint=== "cyan"?"text-cyber-cyan":module.tint==="violet"?"text-violet-300":"text-blue-300"}`}/></div><h3 className="relative mt-10 text-2xl font-semibold tracking-tight">{module.name}</h3><p className="relative mt-1 text-sm text-white/45">{module.descriptor}</p><div className="relative mt-7 border-t border-white/[0.08] pt-5"><div className="flex items-end justify-between"><div><div className="font-mono text-[9px] uppercase tracking-[.14em] text-white/35">{module.metricLabel}</div><div className={`mt-1 text-xl font-medium ${module.tint=== "cyan"?"text-cyan-200":module.tint==="violet"?"text-violet-200":"text-blue-200"}`}>{module.metric}</div></div><span className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> ACTIVE</span></div><div className="mt-5 flex flex-wrap gap-2">{module.tags.map(tag=><span key={tag} className="rounded-md border border-white/[0.08] bg-black/20 px-2.5 py-1.5 font-mono text-[9px] text-white/45">{tag}</span>)}</div></div></motion.article>})}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#080d15]/65 py-24 sm:py-28">
        <div className="pointer-events-none absolute -left-28 top-1/4 h-80 w-80 rounded-full bg-violet-500/[0.08] blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div><div className="mb-4 flex items-center gap-2 font-mono text-[10px] tracking-[.2em] text-cyber-cyan"><Server className="h-3.5 w-3.5"/> ENGINEERED CAPABILITIES / 04</div><h2 className="max-w-2xl text-3xl font-semibold tracking-[-.04em] sm:text-5xl">One partner across your <span className="text-white/40">digital foundation.</span></h2></div>
            <Link href="/solutions" className="group inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-cyber-cyan">Semua kapabilitas <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item,i)=>{const Icon=item.icon;return <motion.article key={item.index} initial={{opacity:0,y:20,rotateX:8}} whileInView={{opacity:1,y:0,rotateX:0}} viewport={{once:true,margin:"-40px"}} transition={{duration:.55,delay:i*.1}} whileHover={{y:-6,rotateX:-2,rotateY:2,transition:{duration:.2}}} style={{transformStyle:"preserve-3d"}} className="group min-h-[220px] rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-colors hover:border-cyber-cyan/25 hover:bg-white/[0.045] sm:p-6"><div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.15em] text-white/30">CAPABILITY / {item.index}</span><Icon className={`h-4 w-4 ${item.color} transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}/></div><h3 className="mt-9 text-lg font-semibold tracking-tight">{item.title}</h3><p className="mt-2 text-sm leading-6 text-white/45">{item.copy}</p><div className="mt-5 h-px origin-left scale-x-0 bg-gradient-to-r from-cyber-cyan to-transparent transition-transform duration-500 group-hover:scale-x-100"/></motion.article>})}
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-white/[0.06] py-5" aria-label="Technology stack">
        <motion.div aria-hidden="true" animate={{x:["0%","-50%"]}} transition={{duration:30,ease:"linear",repeat:Infinity}} className="flex w-max items-center gap-9 whitespace-nowrap font-mono text-[10px] tracking-[.16em] text-white/35 sm:gap-14 sm:text-[11px]">
          {[0,1,2,3].map((set)=><div key={set} className="flex items-center gap-9 sm:gap-14">{["NEXT.JS / TYPESCRIPT","KUBERNETES / CONTAINERS","AWS / HYBRID CLOUD","POSTGRESQL / VECTOR DB","ZERO-TRUST / SIEM","EDGE / DISTRIBUTED MESH"].map((tech,i)=><span key={tech} className="flex items-center gap-3"><span className={`h-1.5 w-1.5 rounded-full ${i%3===0?"bg-cyber-cyan":i%3===1?"bg-blue-400":"bg-violet-400"} animate-pulse`}/>{tech}</span>)}</div>)}
        </motion.div>
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 md:pb-32 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.055] via-white/[0.025] to-cyber-blue/[0.06] p-7 sm:p-12 md:flex md:items-center md:justify-between md:p-14"><div className="absolute -right-10 -top-36 h-80 w-80 rounded-full bg-cyber-blue/[0.12] blur-[90px]"/><div className="relative"><div className="mb-4 flex items-center gap-2 font-mono text-[10px] tracking-[.18em] text-cyber-cyan"><Braces className="h-3.5 w-3.5"/> RESEARCH & DEVELOPMENT <Radio className="ml-2 h-3.5 w-3.5 text-emerald-400"/></div><h2 className="max-w-2xl text-3xl font-semibold tracking-[-.04em] sm:text-4xl">From research to resilient systems.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/50">Eksplorasi arsitektur baru untuk AI privat, kriptografi, dan infrastruktur edge di lab inovasi kami.</p></div><Link href="/innovation" className="group relative mt-7 inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-medium transition hover:border-cyber-cyan/40 hover:text-cyber-cyan md:mt-0">Kunjungi R&D Lab <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></Link><Cloud className="pointer-events-none absolute bottom-5 right-1/3 h-24 w-24 text-white/[0.025]"/><Workflow className="pointer-events-none absolute bottom-8 right-10 h-14 w-14 text-white/[0.05]"/></div>
      </section>
    </main>
  );
}
