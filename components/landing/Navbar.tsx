"use client";

import { cn } from "@/lib/utils";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                scrolled
                    ? "bg-white/80 backdrop-blur-md border-stone-200 py-3 shadow-sm"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-emerald-950 text-white flex items-center justify-center rounded-lg shadow-lg group-hover:bg-emerald-900 transition-colors">
                        <BookOpen size={20} />
                    </div>
                    <span className={cn(
                        "text-xl font-serif font-bold tracking-tight transition-colors",
                        scrolled ? "text-stone-900" : "text-stone-900"
                    )}>
                        AMH<span className="text-emerald-800">.Cours</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {["Méthode", "Programme", "Témoignages", "FAQ"].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-emerald-800",
                                scrolled ? "text-stone-600" : "text-stone-700"
                            )}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <button
                    onClick={() => scrollToSection("pricing")}
                    className={cn(
                        "px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105",
                        scrolled
                            ? "bg-emerald-950 text-white shadow-emerald-900/10"
                            : "bg-white text-emerald-950 shadow-black/5"
                    )}
                >
                    Rejoindre la cohorte
                </button>
            </div>
        </nav>
    );
}
