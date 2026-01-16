"use client";

import { Check, X, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Comparison() {
    return (
        <section className="w-full py-24 bg-stone-900 border-t border-white/5 relative overflow-hidden">

            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16 text-stone-100">
                    Pourquoi le "Gratuit" vous coûte cher
                </h2>

                <div className="grid lg:grid-cols-3 gap-8 items-center">

                    {/* Old Way (Apps) */}
                    <div className="bg-stone-950/40 p-8 rounded-2xl border border-white/5 opacity-70 hover:opacity-100 transition-opacity">
                        <h3 className="text-xl font-bold text-stone-400 mb-6 text-center">Les Applis Gratuites</h3>
                        <ul className="space-y-4">
                            {[
                                "Vocabulaire hors contexte",
                                "Pas d'explication grammaticale",
                                "Aucune correction orale",
                                "Abandon moyen: 3 semaines"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-stone-500 items-center text-sm">
                                    <X size={16} className="text-red-900" />
                                    <span className="line-through decoration-stone-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* AMH Method (Hero Card) */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-emerald-950 p-10 rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-900/20 relative scale-105 z-20"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%] bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                            Recommandé
                        </div>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-serif font-bold text-white mb-2">Méthode AMH</h3>
                            <p className="text-emerald-200/80 text-sm">Le chemin le plus court vers le Coran</p>
                        </div>

                        <ul className="space-y-6">
                            {[
                                "Compréhension profonde (Fahm)",
                                "Correction Tajwid en direct",
                                "Groupe de motivation actif",
                                "Taux de réussite: 94%"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-white font-medium items-center">
                                    <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 pt-8 border-t border-emerald-500/20 text-center">
                            <span className="text-3xl font-bold text-white">12 Semaines</span>
                            <p className="text-emerald-200/60 text-xs mt-1">Pour transformer votre prière</p>
                        </div>
                    </motion.div>

                    {/* Old Way (Institute) */}
                    <div className="bg-stone-950/40 p-8 rounded-2xl border border-white/5 opacity-70 hover:opacity-100 transition-opacity">
                        <h3 className="text-xl font-bold text-stone-400 mb-6 text-center">Instituts Classiques</h3>
                        <ul className="space-y-4">
                            {[
                                "Horaires rigides (Soir/WE)",
                                "Classes surchargées (30+)",
                                "Cursus scolaire (3-5 ans)",
                                "Trop de théorie (Grammaire)"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-stone-500 items-center text-sm">
                                    <X size={16} className="text-red-900" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
