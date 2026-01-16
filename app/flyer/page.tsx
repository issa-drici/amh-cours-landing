import { Play, Sparkles, CheckCircle2, QrCode, Phone } from "lucide-react";
import Image from "next/image";

export default function Flyer() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-8">
            {/* A4 Container - Digital representation for Screenshot */}
            {/* approx 794px x 1123px is A4 at 96dpi, scaling up for quality */}
            <div
                className="relative w-[800px] h-[1130px] bg-emerald-950 text-white overflow-hidden shadow-2xl flex flex-col"
                style={{ aspectRatio: '210/297' }}
            >

                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=2000&auto=format&fit=crop"
                        alt="Mosque Texture"
                        fill
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-emerald-950/70 backdrop-blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-transparent to-emerald-950/90" />
                </div>

                {/* Additional Atmospheric Glows (Optional, kept for depth) */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-1 pointer-events-none" />

                {/* HEADER Section */}
                <div className="p-12 pb-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-bold uppercase tracking-widest mb-6">
                        <Sparkles size={14} />
                        Nouvelle Session : Mars 2026
                    </div>

                    <h1 className="text-6xl font-serif font-bold leading-tight mb-4">
                        Apprenez l'Arabe. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                            Comprenez le Coran.
                        </span>
                    </h1>

                    <p className="text-xl text-stone-300 font-light max-w-2xl mx-auto">
                        Ne récitez plus sans comprendre. Rejoignez la méthode francophone de référence pour se reconnecter au sens de la parole d'Allah.
                    </p>
                </div>

                {/* MAIN VISUAL: Instructor + Proof */}
                <div className="flex-1 relative flex items-center justify-center px-12 py-4">

                    {/* Instructor Portrait Circle */}
                    <div className="relative w-64 h-64 rounded-full border-4 border-amber-500/30 shadow-2xl overflow-hidden mr-8 shrink-0">
                        <Image
                            src="/images/instructor-portrait.png"
                            alt="Cheikh Youssouf Cherraj"
                            fill
                            className="object-cover object-[50%_20%]"
                        />
                    </div>

                    {/* Teaching Points */}
                    <div className="space-y-6 max-w-md">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-emerald-900/50 rounded-lg border border-emerald-700">
                                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Méthode "Fahm"</h3>
                                <p className="text-stone-400 text-sm">On arrête le par cœur bête et méchant. On mise sur la compréhension logique de la langue.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-emerald-900/50 rounded-lg border border-emerald-700">
                                <Play className="w-6 h-6 text-emerald-400 fill-current" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Cours en Direct</h3>
                                <p className="text-stone-400 text-sm">Chaque Dimanche soir. Correction de prononciation en temps réel par le professeur.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-emerald-900/50 rounded-lg border border-emerald-700">
                                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Cheikh Youssouf Cherraj</h3>
                                <p className="text-stone-400 text-sm">Diplômé en Sciences Islamiques. 15 ans d'expérience. Pédagogie adaptée aux francophones.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER ACTION AREA */}
                <div className="bg-gradient-to-t from-black/80 to-transparent p-12 pt-4 relative z-20">
                    <div className="bg-white rounded-3xl p-8 flex items-center justify-between shadow-2xl border border-stone-200">

                        {/* CTA TEXT */}
                        <div>
                            <p className="text-emerald-900 font-bold uppercase tracking-widest text-sm mb-2">Places Limitées</p>
                            <h3 className="text-4xl font-serif font-black text-emerald-950 mb-2">Rejoindre le Groupe</h3>
                            <div className="flex items-center gap-2 text-stone-600 font-medium">
                                <Phone size={18} className="text-emerald-700" />
                                <span>06 12 34 56 78</span>
                                <span className="mx-2 text-stone-300">|</span>
                                <span>www.amh-cours.fr</span>
                            </div>
                        </div>

                        {/* QR CODE PLACEHOLDER */}
                        <div className="bg-white p-2 rounded-xl border-2 border-dashed border-emerald-900/20 flex flex-col items-center gap-2 w-32 shrink-0">
                            <div className="w-24 h-24 bg-stone-100 rounded-lg flex items-center justify-center text-stone-400">
                                <QrCode size={40} />
                            </div>
                            <span className="text-[10px] font-bold text-emerald-900 uppercase">Scanner ici</span>
                        </div>

                    </div>

                    <p className="text-center text-stone-200/60 text-sm mt-8 relative z-20 font-medium">
                        Ne jetez pas ce flyer sur la voie publique • AMH Cours © 2026
                    </p>
                </div>

            </div>
        </div>
    );
}
