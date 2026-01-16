"use client";

import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        name: "Karim B.",
        role: "Ingénieur (Paris)",
        content: "Je pensais ne jamais pouvoir lire le Coran sans bégayer. Après 2 mois, je lis fluidement et je comprends les versets pendant la prière. C'est un sentiment indescriptible.",
        rating: 5,
        highlight: true
    },
    {
        name: "Sarah M.",
        role: "Mère de famille (Lyon)",
        content: "Le format est parfait pour mon emploi du temps chargé. Le prof est bienveillant, on ne se sent jamais jugé. C'est ma bouffée d'oxygène de la semaine.",
        rating: 5,
        highlight: false
    },
    {
        name: "Mohamed A.",
        role: "Étudiant (Bruxelles)",
        content: "J'ai fait 3 ans d'institut le week-end, j'ai plus appris ici en 12 semaines. La méthode 'Fahm' change tout : on arrête de traduire dans sa tête.",
        rating: 5,
        highlight: false
    },
    {
        name: "Yassine D.",
        role: "Entrepreneur",
        content: "Enfin une approche adulte et intelligente de la langue arabe. Pas de par cœur bête et méchant. De la logique, de l'étymologie, du sens !",
        rating: 5,
        highlight: true
    },
    {
        name: "Amel K.",
        role: "Médecin",
        content: "La qualité pédagogique est universitaire. Cheikh Youssouf a un don pour simplifier. Je recommande à 1000%.",
        rating: 5,
        highlight: false
    }
];

export function Testimonials() {
    return (
        <section className="w-full py-24 bg-stone-900 text-stone-100 relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-stone-50 to-transparent opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-50 mb-4">
                        Ils ont transformé leur <br /><span className="text-amber-500">prière</span>
                    </h2>
                    <p className="text-stone-400">Rejoignez plus de 2,500 étudiants satisfaits.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={cn(
                                "p-8 rounded-2xl border transition-all duration-300 relative group hover:-translate-y-1",
                                t.highlight
                                    ? "bg-emerald-950/40 border-emerald-900/50 hover:border-emerald-500/30 md:row-span-2 flex flex-col justify-between"
                                    : "bg-stone-800/30 border-white/5 hover:border-white/10"
                            )}
                        >
                            <Quote className={cn("absolute top-6 right-6 opacity-10", t.highlight ? "text-emerald-500" : "text-stone-500")} size={40} />

                            <div>
                                <div className="flex gap-1 mb-4 text-amber-500">
                                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <p className={cn(
                                    "font-serif leading-relaxed mb-6",
                                    t.highlight ? "text-xl text-stone-100" : "text-stone-300"
                                )}>
                                    "{t.content}"
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm",
                                    t.highlight ? "bg-emerald-800 text-emerald-100" : "bg-stone-700 text-stone-300"
                                )}>
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-stone-100">{t.name}</h4>
                                    <p className="text-xs text-stone-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
