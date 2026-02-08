"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BookOpen, Play, ScrollText } from "lucide-react";

/* 40 particules fixes, positions pré-calculées (évite le re-render) */
const PARTICLE_CLUSTERS = [
    { x: 15, y: 25 }, { x: 80, y: 20 }, { x: 50, y: 60 }, { x: 15, y: 80 }, { x: 85, y: 75 }
];
const SEED = 12345; // Pour des positions stables
function seededRandom(seed: number) {
    return () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };
}
const PARTICLE_DATA = (() => {
    const r = seededRandom(SEED);
    return Array.from({ length: 40 }, (_, i) => {
        const c = PARTICLE_CLUSTERS[i % 5];
        const spreadX = (r() + r() + r() - 1.5) * 12;
        const spreadY = (r() + r() + r() - 1.5) * 12;
        return {
            x: Math.max(0, Math.min(100, c.x + spreadX)),
            y: Math.max(0, Math.min(100, c.y + spreadY)),
            duration: 18 + r() * 12,
            delay: r() * 8,
            size: r() > 0.9 ? 5 : r() > 0.6 ? 4 : 3
        };
    });
})();

export function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-stone-50 text-stone-900 border-b border-stone-200">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Main Warm Glow */}
                <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-br from-amber-100/60 via-stone-200/20 to-transparent rounded-full blur-[120px]" />

                {/* Deep Forest Abstract Shadow */}
                <div className="absolute bottom-[-10%] left-[-10%] w-[900px] h-[900px] bg-gradient-to-tr from-emerald-950/5 via-emerald-900/5 to-transparent rounded-full blur-[100px]" />

                {/* Noise Overlays */}
                <div className="absolute inset-0 bg-noise opacity-30 mix-blend-multiply" />
            </div>

            {/* Abstract Heritage Elements (Floating) */}
            <div className="absolute inset-0 z-10 pointer-events-none md:block hidden">
                {/* Element 1: The Book */}
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[10%] text-stone-900/[0.03]"
                >
                    <BookOpen size={400} strokeWidth={0.5} />
                </motion.div>

                {/* Element 2: The Scroll */}
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[15%] left-[-5%] text-emerald-900/[0.03]"
                >
                    <ScrollText size={300} strokeWidth={0.5} />
                </motion.div>
            </div>

            {/* Particules légères - CSS uniquement, ~40 éléments au lieu de 1500+ */}
            <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none h-full w-full">
                {PARTICLE_DATA.map((p, i) => (
                    <div
                        key={i}
                        style={{
                            top: p.y + "%",
                            left: p.x + "%",
                            width: p.size + "px",
                            height: p.size + "px",
                            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
                        }}
                        className={cn(
                            "absolute rounded-full shadow-sm",
                            p.size > 3 ? "bg-amber-400 shadow-amber-400/50" : "bg-amber-500/80"
                        )}
                    />
                ))}
            </div>

            {/* Content Content - Centered Stack */}
            <div className="relative z-20 min-h-screen flex flex-col justify-center items-center pt-32 pb-24 max-w-[1200px] mx-auto px-6 md:px-12">

                {/* Text Block - Centered Top */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full max-w-7xl mx-auto text-center space-y-10 mb-20 relative"
                >

                    {/* Trust/Cohort Badge */}
                    <div className="inline-flex items-center gap-3 bg-white/60 border border-stone-200 backdrop-blur-sm rounded-full pr-6 pl-2 py-1.5 shadow-sm ring-1 ring-stone-900/5 hover:ring-stone-900/10 transition-all scale-105">
                        <span className="bg-emerald-900 text-emerald-50 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Nouveau</span>
                        <span className="text-sm font-medium text-stone-700">Groupe de Mars 2026</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse ml-1" />
                    </div>

                    {/* Headlines */}
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-bold tracking-tight leading-[1.1] text-stone-900 drop-shadow-sm px-4">
                            Comprenez le Coran <br />
                            <span className="italic text-emerald-950/90 relative inline-block mt-2">
                                et transformez vos prières
                                {/* Text Underline Effect */}
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-500/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed font-sans mt-6">
                            L'excellence académique au service de votre spiritualité.
                            <br className="hidden md:block" />
                            <span className="text-stone-900 font-medium">Programme intensif de 12 semaines en direct.</span>
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <button
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-8 py-4 bg-emerald-950 text-stone-50 font-serif font-medium rounded-lg text-lg overflow-hidden shadow-xl shadow-emerald-950/20 transition-all hover:scale-[1.02] hover:shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-emerald-950 z-0" />
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay" />
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Candidater maintenant
                                <span className="text-amber-500 group-hover:translate-x-1 transition-transform">→</span>
                            </span>
                        </button>

                        <button
                            onClick={() => document.getElementById('methode')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group px-8 py-4 bg-white border border-stone-200 text-stone-800 font-medium font-sans text-lg hover:border-emerald-600/50 hover:bg-emerald-50/50 transition-all rounded-lg shadow-sm hover:shadow-md flex items-center justify-center gap-3"
                        >
                            <Play className="w-4 h-4 text-emerald-800 fill-current opacity-80 group-hover:scale-110 transition-transform" />
                            <span>Découvrir la méthode</span>
                        </button>
                    </div>

                    {/* Social Proof (Refined) */}
                    <div className="pt-4 flex items-center justify-center gap-4 mt-2 max-w-md mx-auto">
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-stone-100 border-2 border-white flex items-center justify-center text-xs text-stone-400 font-serif overflow-hidden shadow-sm relative">
                                    <img
                                        src={`https://placehold.co/100/e5e5e5/1c1917`}
                                        alt={`User ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full bg-stone-900 border-2 border-white flex items-center justify-center text-xs text-white font-serif shadow-sm">
                                2k+
                            </div>
                        </div>
                        <div className="text-sm font-sans text-left">
                            <p className="text-stone-900 font-bold">Confiance de 2,500+ élèves</p>
                            <div className="flex text-amber-500/80 gap-0.5 text-xs">
                                ★★★★★ <span className="text-stone-400 ml-1 font-normal">(4.9/5)</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* VSL Placeholder - Bottom & Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="relative w-full max-w-5xl mx-auto"
                >
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/30 border border-stone-200 bg-stone-900 group cursor-pointer hover:shadow-emerald-900/40 transition-all transform hover:-translate-y-2">
                        {/* Image Placeholder */}
                        <img
                            src="/images/vsl-thumb.png"
                            alt="Présentation de la méthode"
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/20">
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg relative z-10">
                                    <Play className="w-6 h-6 text-emerald-900 fill-emerald-900 ml-1" />
                                </div>
                                {/* Pulse Effect */}
                                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 duration-1000" />
                            </div>
                        </div>

                        {/* Badge */}
                        <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur text-white text-sm font-medium px-4 py-1.5 rounded-full border border-white/10">
                            2 min 45
                        </div>
                    </div>

                    {/* Decorative Background Elements behind Video */}
                    <div className="absolute -inset-4 border border-emerald-900/5 rounded-[3rem] -z-10 rotate-1 scale-[1.01]" />
                    <div className="absolute -inset-4 border border-amber-600/5 rounded-[3rem] -z-10 -rotate-1 scale-[1.01]" />
                </motion.div>

            </div>
        </section>
    );
}
