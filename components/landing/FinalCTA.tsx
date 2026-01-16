"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
    return (
        <section className="w-full py-32 bg-emerald-950 relative overflow-hidden flex items-center justify-center">

            {/* Background Texture & Grain */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/50 border border-emerald-800 text-emerald-300 text-sm font-medium mb-4">
                        <Sparkles size={14} />
                        <span>Dernières places disponibles</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Ne laissez pas une autre année <br />
                        <span className="text-emerald-400">passer sans comprendre.</span>
                    </h2>

                    <p className="text-xl text-emerald-100/60 max-w-2xl mx-auto font-light leading-relaxed">
                        Vous avez deux choix aujourd'hui : fermer cette page et continuer comme avant, ou nous rejoindre et transformer votre prière dans 12 semaines.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <button
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group px-8 py-4 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-lg rounded-xl shadow-xl shadow-amber-900/20 transition-all hover:-translate-y-1 flex items-center gap-2"
                        >
                            Je rejoins le Groupe
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-sm text-emerald-400/60 mt-4 sm:mt-0">
                            Garantie 30 jours • Satisfait ou Remboursé
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
