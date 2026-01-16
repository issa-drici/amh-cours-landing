"use client";

import { User, Briefcase, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function WhoIsThisFor() {
    const avatars = [
        {
            icon: <Briefcase className="w-8 h-8 text-emerald-900" />,
            title: "L'Actif Pressé",
            tagline: "Pas de temps à perdre",
            description: "Vous avez un travail, une famille. Vous ne pouvez pas passer 2h/jour à étudier. Vous cherchez l'efficacité maximale.",
            image: "/images/persona-active.png",
            features: ["1h30 de cours / semaine", "Replays disponibles 24/7"]
        },
        {
            icon: <Heart className="w-8 h-8 text-emerald-900" />,
            title: "Le Chercheur de Sens",
            tagline: "Connexion spirituelle",
            description: "Vous voulez comprendre ce que vous récitez. L'arabe n'est pas une fin en soi, c'est un moyen de vous rapprocher d'Allah.",
            image: "/images/persona-spiritual.jpg",
            features: ["Vocabulaire Coranique", "Tafsir linguistique"]
        },
        {
            icon: <User className="w-8 h-8 text-emerald-900" />,
            title: "Le Déçu des App",
            tagline: "Besoin de structure",
            description: "Vous avez accumulé du vocabulaire sur Duolingo mais vous ne savez pas faire une phrase. Vous avez besoin d'un vrai professeur.",
            image: "/images/persona-frustrated.png",
            features: ["Correction en direct", "Plan structuré"]
        }
    ];

    return (
        <section className="w-full py-24 bg-stone-50 text-stone-900 border-t border-stone-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                        Est-ce que c'est pour <span className="text-emerald-800 underline decoration-amber-500/30 decoration-4">vous</span> ?
                    </h2>
                    <p className="text-xl text-stone-600">
                        Nous n'acceptons pas tout le monde. Cette formation est conçue spécifiquement pour ces 3 profils.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {avatars.map((avatar, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-[2rem] border border-stone-100 shadow-xl shadow-stone-200/50 overflow-hidden flex flex-col h-full group"
                        >
                            {/* Image Header */}
                            <div className="h-48 w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img src={avatar.image} alt={avatar.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                                {/* Icon Badge */}
                                <div className="absolute -bottom-6 right-8 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center z-20 border border-stone-50 rotate-3 group-hover:rotate-6 transition-transform">
                                    {avatar.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 pt-10 flex-grow flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">{avatar.tagline}</span>
                                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">{avatar.title}</h3>
                                <p className="text-stone-600 leading-relaxed mb-6 font-medium">
                                    {avatar.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-stone-100 space-y-3">
                                    {avatar.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-stone-500">
                                            <CheckCircle2 size={16} className="text-emerald-600" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
