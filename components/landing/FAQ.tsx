"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";

const faqs = [
    {
        question: "Je n'ai jamais fait d'arabe, est-ce pour moi ?",
        answer: "Absolument. Le niveau 1 est conçu pour les grands débutants. Nous reprenons tout depuis l'alphabet, mais avec une méthodologie adulte et intelligente (pas de 'A, B, C' infantilisant)."
    },
    {
        question: "Les horaires ne m'arrangent pas (Dimanche 20h)",
        answer: "Aucun souci. 40% de nos étudiants suivent la formation en différé. Les replays sont disponibles le lendemain matin sur votre espace membre, et vous pouvez poser vos questions sur WhatsApp à tout moment."
    },
    {
        question: "Quelle est la différence avec un institut gratuit ou une mosquée ?",
        answer: "La méthode et le suivi. En mosquée, le professeur gère 30 niveaux différents et n'a pas le temps de vous corriger individuellement. Ici, vous avez un mentor dédié, un programme structuré semaine par semaine, et une obligation de résultat."
    },
    {
        question: "Puis-je payer en plusieurs fois ?",
        answer: "Oui, nous offrons un paiement en 3 fois sans frais (3x 166€) pour rendre l'excellence accessible. Vous pouvez sélectionner cette option au moment du paiement."
    },
    {
        question: "Que se passe-t-il après les 3 mois ?",
        answer: "Vous aurez atteint le niveau A2 (Lecture fluide + Compréhension globale). Vous pourrez alors rejoindre le Niveau 2 (Grammaire avancée) ou continuer en autonomie avec les outils que nous vous aurons donnés."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-24 bg-stone-50 text-stone-900 border-t border-stone-200">
            <div className="max-w-3xl mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <MessageCircleQuestion className="w-10 h-10 text-stone-300 mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Questions Fréquentes</h2>
                    <p className="text-stone-500">Nous levons vos derniers doutes.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-stone-200 rounded-2xl overflow-hidden bg-white hover:border-emerald-200 transition-colors duration-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left group cursor-pointer"
                            >
                                <span className="font-serif font-bold text-lg text-stone-800 group-hover:text-emerald-900 transition-colors pr-8">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${openIndex === idx ? 'bg-emerald-900 border-emerald-900 text-white rotate-180' : 'bg-stone-50 border-stone-200 text-stone-400 group-hover:border-emerald-200'}`}>
                                    {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-stone-600 leading-relaxed font-medium border-t border-stone-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
