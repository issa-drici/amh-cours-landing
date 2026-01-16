"use client";

import { Clock, Video, BookOpen, Coffee } from "lucide-react";

export function TypicalWeek() {
    const schedule = [
        {
            time: "Quotidien",
            title: "Micro-Learning",
            desc: "15 min / jour d'exercices ciblés.",
            icon: <Coffee className="w-5 h-5 text-stone-600" />,
            color: "bg-stone-100 border-stone-200"
        },
        {
            time: "Jeudi 20h",
            title: "Séance Grammaire",
            desc: "Fondamentaux et structure de la langue.",
            icon: <BookOpen className="w-5 h-5 text-emerald-800" />,
            color: "bg-emerald-50 border-emerald-100"
        },
        {
            time: "Dimanche 20h",
            title: "Séance Tafsir & Pratique",
            desc: "Immersion spirituelle et lecture.",
            icon: <Video className="w-5 h-5 text-amber-700" />,
            color: "bg-amber-50 border-amber-100"
        }
    ];

    return (
        <section className="w-full py-24 bg-stone-50 border-t border-stone-200">
            <div className="max-w-5xl mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2 block">Détails Logistiques</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
                            Un rythme conçu pour <br /> les vies actives.
                        </h2>
                    </div>
                    <p className="text-stone-500 max-w-xs text-sm font-medium border-l-2 border-stone-200 pl-4">
                        Tout est enregistré et disponible en replay illimité dès le lendemain.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {schedule.map((item, idx) => (
                        <div key={idx} className={`p-8 rounded-2xl border ${item.color} flex flex-col justify-between h-full min-h-[220px] transition-transform hover:-translate-y-1`}>
                            <div className="flexjustify-between items-start mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm inline-block">
                                    {item.icon}
                                </div>
                            </div>

                            <div>
                                <span className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">{item.time}</span>
                                <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">{item.title}</h3>
                                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline Visual */}
                <div className="mt-16 pt-16 border-t border-stone-200 hidden md:block">
                    <div className="relative flex justify-between text-center items-center">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-stone-200 -z-10" />

                        {["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"].map((day, i) => (
                            <div key={i} className={`relative bg-stone-50 px-2 ${day === "Jeudi" || day === "Dimanche" ? 'text-stone-900 font-bold' : 'text-stone-400 text-sm'}`}>
                                <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${(day === "Jeudi" || day === "Dimanche") ? 'bg-emerald-600 ring-4 ring-emerald-50' : 'bg-stone-300'}`} />
                                {day}
                                {(day === "Jeudi" || day === "Dimanche") && (
                                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full whitespace-nowrap">
                                        Live 20h
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
