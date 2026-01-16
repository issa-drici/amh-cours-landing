"use client";

import { GraduationCap, Users, BookOpen, Clock } from "lucide-react";

export function SocialProof() {
    const credentials = [
        {
            icon: <GraduationCap size={20} className="text-emerald-800" />,
            label: "Diplômé en Sciences Islamiques",
            sub: "Formation Traditionnelle"
        },
        {
            icon: <Users size={20} className="text-emerald-800" />,
            label: "2,500+ Étudiants",
            sub: "Accompagnés depuis 2012"
        },
        {
            icon: <Clock size={20} className="text-emerald-800" />,
            label: "15 Ans d'Expérience",
            sub: "Pédagogie pour francophones"
        },
        {
            icon: <BookOpen size={20} className="text-emerald-800" />,
            label: "Auteur & Conférencier",
            sub: "Ouvrages de référence"
        }
    ];

    return (
        <section className="w-full py-10 bg-stone-50 border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

                {/* Mobile Label */}
                <span className="md:hidden text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                    Enseigné par un expert
                </span>

                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                    {credentials.map((cred, idx) => (
                        <div key={idx} className="flex items-center gap-3 group opacity-70 hover:opacity-100 transition-opacity duration-300">
                            <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                                {cred.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-stone-900 leading-none mb-1">{cred.label}</span>
                                <span className="text-[10px] font-sans font-medium uppercase tracking-wider text-stone-500">{cred.sub}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
