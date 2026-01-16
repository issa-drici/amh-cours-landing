"use client";

import { Brain, Sparkles, BookOpen, Layers } from "lucide-react";
import { motion } from "framer-motion";

export function Methodology() {
    return (
        <section className="w-full py-32 bg-stone-50 text-stone-900 border-t border-stone-200 relative overflow-hidden">

            {/* Elegant Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/60 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Editorial Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="text-emerald-900 font-bold tracking-[0.2em] text-xs uppercase border-b border-amber-500/30 pb-1">Notre Approche Unique</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 leading-tight mb-6">
                        Ne mémorisez pas. <br />
                        <span className="italic text-emerald-900">Comprenez.</span>
                    </h2>

                    <p className="text-xl text-stone-600 font-serif leading-relaxed">
                        L'arabe n'est pas une suite de règles mathématiques. C'est une mélodie.
                        Nous vous apprenons à "sentir" la langue (Al-Fahm) avant de l'analyser.
                    </p>
                </div>

                {/* The 3 Pillars - Editorial Style */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Pillar 1 */}
                    <div className="group relative bg-white p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Brain size={120} />
                        </div>
                        <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-500">
                            <Layers size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Architecture</h3>
                        <p className="text-stone-600 leading-relaxed">
                            Nous déconstruisons les phrases du Coran pour vous montrer leur squelette. Vous n'apprenez pas des mots isolés, mais des concepts connectés.
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="group relative bg-white p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <BookOpen size={120} />
                        </div>
                        <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-500">
                            <BookOpen size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Immersion</h3>
                        <p className="text-stone-600 leading-relaxed">
                            80% de pratique. Dès la première semaine, vous lisez des textes réels. Votre cerveau s'habitue à la beauté de la langue, pas à sa douleur.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="group relative bg-white p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Sparkles size={120} />
                        </div>
                        <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center mb-8 group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-500">
                            <Sparkles size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Clarté</h3>
                        <p className="text-stone-600 leading-relaxed">
                            Fini le jargon incompréhensible. Nous utilisons des analogies simples pour expliquer des règles complexes. L'arabe devient logique.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
