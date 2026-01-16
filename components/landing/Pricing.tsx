"use client";

import { Check, ShieldCheck, ArrowRight, Star } from "lucide-react";

export function Pricing() {
    return (
        <section className="w-full py-24 bg-stone-50 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[#fbfbf9]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

            <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">

                <div className="bg-white rounded-[2rem] border border-stone-200 shadow-2xl shadow-stone-900/5 overflow-hidden relative">

                    {/* Official Header */}
                    <div className="bg-stone-900 text-white p-6 md:p-8 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                        <div className="relative z-10 flex flex-col items-center gap-3">
                            <div className="flex gap-1 mb-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-amber-500 fill-amber-500" />)}
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-amber-50">Candidatures Ouvertes</h2>
                            <p className="text-stone-400 text-sm font-medium tracking-wide uppercase">Session Mars 2026</p>
                        </div>
                    </div>

                    <div className="p-10 md:p-14 md:pb-12">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-stone-100 pb-10">
                            <div>
                                <h3 className="text-4xl font-serif font-bold text-stone-900 mb-2">Cycle Complet</h3>
                                <p className="text-stone-500 text-lg">Formation Intensive (3 Mois)</p>
                            </div>
                            <div className="mt-6 md:mt-0 text-right">
                                <p className="text-stone-400 line-through font-serif text-lg decoration-red-300">997€</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-emerald-900 tracking-tight">497€</span>
                                    <span className="text-stone-500 text-sm font-medium uppercase">/unique</span>
                                </div>
                                <p className="text-emerald-600 text-xs font-bold uppercase tracking-wide mt-2 bg-emerald-50 px-2 py-1 rounded inline-block">
                                    Ou 3x 166€ sans frais
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {[
                                "24 Séances en Direct (Zoom)",
                                "Replays Illimités à Vie",
                                "Correction Prononciation (Tajwid)",
                                "Support WhatsApp 7j/7 Privé",
                                "Accès Bibliothèque Ressources",
                                "Certificat de Fin de Cycle"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                        <Check size={12} className="text-emerald-800" strokeWidth={3} />
                                    </div>
                                    <span className="text-stone-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-5 bg-emerald-900 text-white rounded-xl font-medium text-lg shadow-xl shadow-emerald-900/20 hover:scale-[1.01] hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group">
                            Réserver ma place maintenant
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-amber-500" />
                        </button>

                        <div className="mt-6 text-center">
                            <p className="text-stone-500 text-sm flex items-center justify-center gap-2">
                                <ShieldCheck size={16} className="text-emerald-600" />
                                Garantie Satisfait ou Remboursé (30 jours)
                            </p>
                        </div>

                    </div>

                    {/* Bottom strip */}
                    <div className="h-2 w-full bg-gradient-to-r from-emerald-900 via-emerald-800 to-amber-600" />

                </div>

                <p className="text-center text-stone-400 text-xs mt-10 max-w-lg mx-auto leading-relaxed">
                    Les places sont strictement limitées à 30 étudiants par groupe pour garantir la qualité du suivi personnalisé par le Cheikh.
                </p>

            </div>
        </section>
    );
}
