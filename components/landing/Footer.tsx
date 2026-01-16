"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Brand */}
                <div className="text-center md:text-left">
                    <h3 className="text-stone-100 font-serif text-2xl font-bold mb-2">AMH Cours</h3>
                    <p className="text-sm max-w-xs">
                        L'académie d'excellence pour l'étude du Coran et de la langue arabe.
                    </p>
                </div>

                {/* Socials */}
                <div className="flex gap-6">
                    <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-amber-500 transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
                    <a href="mailto:contact@amhcours.com" className="hover:text-amber-500 transition-colors"><Mail size={20} /></a>
                </div>

                {/* Copyright */}
                <div className="text-sm text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} AMH Cours.</p>
                    <p className="text-xs text-stone-600 mt-1">Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
