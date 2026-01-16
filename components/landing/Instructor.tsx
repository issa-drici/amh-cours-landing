"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export function Instructor() {
    return (
        <section className="w-full py-24 bg-white text-stone-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row items-stretch min-h-[600px] border border-stone-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-200/50">

                    {/* Visual Half - Left */}
                    <div className="w-full md:w-5/12 relative bg-stone-100 min-h-[400px] md:min-h-full group hover:sepia-[.2] transition-all duration-700">
                        <Image
                            src="/images/instructor-portrait.png"
                            alt="Cheikh Youssouf Cherraj"
                            fill
                            className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex flex-col justify-end p-10 text-white">
                            <span className="font-serif italic text-2xl tracking-wide opacity-90">"La langue est la clé du cœur."</span>
                            <div className="h-1 w-12 bg-amber-500 mt-4" />
                        </div>
                    </div>

                    {/* Content Half - Right */}
                    <div className="w-full md:w-7/12 p-12 md:p-20 flex flex-col justify-center bg-white relative">
                        {/* Quote mark decoration */}
                        <Quote className="absolute top-12 right-12 text-stone-100 rotate-180" size={120} />

                        <div className="relative z-10 max-w-lg">
                            <p className="text-emerald-800 font-bold uppercase tracking-widest text-xs mb-6">Votre Mentor</p>

                            <h2 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-8 leading-none">
                                Cheikh <br />
                                <span className="text-stone-400">Youssouf</span>
                            </h2>

                            <div className="space-y-6 text-lg text-stone-600 font-serif leading-relaxed">
                                <p>
                                    Expert en langue arabe et sciences religieuses, spécialisé dans l'enseignement aux francophones.
                                </p>
                                <p>
                                    Après avoir enseigné à plus de 2,500 élèves francophones, j'ai réalisé une chose : ce n'est pas l'élève qui échoue, c'est la méthode qui n'est pas adaptée.
                                </p>
                                <p>
                                    Ma mission est simple : vous donner les clés pour ouvrir le Coran et comprendre enfin ce que votre Créateur vous dit, sans intermédiaire.
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-4 text-sm font-sans">
                                <div className="px-4 py-2 bg-stone-100 rounded-full border border-stone-200 font-semibold text-stone-700">
                                    🎓 Ijazah & Sanad
                                </div>
                                <div className="px-4 py-2 bg-stone-100 rounded-full border border-stone-200 font-semibold text-stone-700">
                                    🌍 15 Ans d'expérience
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
