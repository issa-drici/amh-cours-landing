"use client";

import { useState } from "react";
import { Plus, Minus, Book } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Curriculum() {
    const modules = [
        {
            title: "Mois 1 : Fondations & Lecture",
            subtitle: "Déchiffrer le code",
            content: "Objectif : Lire n'importe quel mot du Coran sans hésitation. Maîtrise de l'alphabet, des voyelles courtes/longues, et des règles de liaison (Hamza, Shadda)."
        },
        {
            title: "Mois 2 : Grammaire Structurelle",
            subtitle: "La logique de la phrase",
            content: "Comprendre comment les mots s'assemblent. Le Nom, le Verbe, la Particule. Construction de la phrase nominale et verbale. Les pronoms et la conjugaison de base."
        },
        {
            title: "Mois 3 : Immersion & Analyse",
            subtitle: "Premières traductions",
            content: "Application directe sur des sourates courtes (Al-Fatiha, An-Nas). Analyse grammaticale (I'rab) simplifiée. Construction du vocabulaire coranique fréquent."
        }
    ];

    return (
        <section className="w-full py-24 bg-white text-stone-900">
            <div className="max-w-4xl mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 mb-6">
                        <Book size={14} className="text-stone-500" />
                        <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Syllabus Académique</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Programme Détaillé</h2>
                    <p className="text-stone-500 font-medium">Un cursus intensif en 12 semaines.</p>
                </div>

                <div className="space-y-4">
                    {modules.map((module, i) => (
                        <div key={i} className="group border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-500/30 transition-all duration-300 bg-white">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-6">
                                    <span className="text-4xl font-serif font-black text-stone-200 group-hover:text-emerald-900/10 transition-colors">0{i + 1}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-900">{module.title}</h3>
                                        <p className="text-emerald-700 text-sm font-medium uppercase tracking-wider mt-1">{module.subtitle}</p>
                                    </div>
                                </div>
                                <div className="md:w-1/3">
                                    <p className="text-sm text-stone-600 leading-relaxed pl-4 border-l-2 border-emerald-100">
                                        {module.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
