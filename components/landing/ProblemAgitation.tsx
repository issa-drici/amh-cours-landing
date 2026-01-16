"use client";

import { XCircle, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ProblemAgitation() {
    return (
        <section className="w-full py-32 bg-stone-900 text-stone-100 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-950/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-stone-800/40 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header: The Pain Point */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/30 border border-red-900/50 text-red-200 text-sm font-medium mb-8">
                        <AlertTriangle size={16} className="text-red-500" />
                        <span>Le constat est brutal</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] mb-8">
                        Pourquoi <span className="text-stone-500 line-through decoration-red-500/50 decoration-4">90%</span> des étu&#8203;diants <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-500">
                            abandonnent
                        </span> après 3 mois ?
                    </h2>
                    <p className="text-xl text-stone-400 font-light leading-relaxed">
                        Vous avez essayé les applications, les vidéos YouTube, les livres de grammaire.
                        Pourtant, devant le Coran, les mots restent muets. Ce n'est pas votre faute.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LE PIÈGE (The Old Way) */}
                    <div className="space-y-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-900/20 to-stone-800/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative p-8 bg-stone-950/50 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-red-500/20 transition-all">
                                <div className="flex items-start gap-6">
                                    <div className="mt-1 p-3 bg-red-950/30 rounded-lg border border-red-900/20 shrink-0">
                                        <XCircle className="w-6 h-6 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-red-100 mb-3">L'illusion de la gratuité</h3>
                                        <p className="text-stone-400 leading-relaxed">
                                            Les vidéos YouTube décousues vous donnent l'impression d'apprendre, mais vous tournez en rond sans structure ni correction. <span className="text-stone-200 font-medium">Vous perdez des années.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-900/20 to-stone-800/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative p-8 bg-stone-950/50 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-red-500/20 transition-all">
                                <div className="flex items-start gap-6">
                                    <div className="mt-1 p-3 bg-red-950/30 rounded-lg border border-red-900/20 shrink-0">
                                        <XCircle className="w-6 h-6 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-red-100 mb-3">L'isolement total</h3>
                                        <p className="text-stone-400 leading-relaxed">
                                            Personne pour corriger votre prononciation (Tajwid). Personne pour répondre à vos blocages. <span className="text-stone-200 font-medium">Vous finissez par lâcher.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* THE BRIDGE (Visual transition) */}
                    <div className="relative h-full min-h-[400px] flex flex-col justify-center items-center text-center space-y-8 p-10 bg-emerald-950/10 rounded-3xl border border-emerald-900/20">
                        {/* Decorative Circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-serif font-bold text-emerald-100 mb-6">Il existe une autre voie</h3>

                            <ul className="space-y-5 text-left mx-auto max-w-sm">
                                {[
                                    "Un plan semaine par semaine",
                                    "Un mentor qui vous répond",
                                    "Un groupe qui vous porte"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.2 }}
                                        className="flex items-center gap-3 text-stone-300 font-medium"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-10 group flex items-center gap-2 mx-auto text-amber-500 font-bold tracking-wide uppercase text-sm"
                            >
                                Voir la différence
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
