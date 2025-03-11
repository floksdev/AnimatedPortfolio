"use client";

import { section } from "framer-motion/client";
import Image from "next/image";
import logoImage from '@/assets/images/logo.svg';
import menuImage from '@/assets/images/menu.min.svg';
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Accueil", href: "#" },
    { label: "Projets", href: "#projects" },
    { label: "Experiences", href: "#experiences" },
    { label: "CV", href: "#cv" },
];

function LinkedinRedirection() {
    window.open('https://linkedin.com/in/tristan-wehrle', '_blank');
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="py-4 px-4 lg:py-8 lg:px-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 border lg:grid-cols-3 rounded-full border-white/15 p-2 px-4 md:pr-2 items-center">
                            <div>
                                <a href="#">
                                    <Image src={logoImage} alt="Layers logo" className="h-9 md:h-8 w-auto" />
                                </a>
                            </div>
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex gap-6 pr-20 font-medium">
                                    {navLinks.map(link => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            className="transition-colors hover:text-violet-400 font-bold"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden cursor-pointer"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge("origin-left transition", isOpen && 'rotate-45 -translate-y-1')}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge("transition", isOpen && "opacity-0")}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge("origin-left transition", isOpen && '-rotate-45 translate-y-1')}
                                    ></line>
                                </svg>
                                {/* Boutons visibles sur md et plus */}
                                <Button className="hidden md:inline-flex items-center" variant="secondary" onClick={LinkedinRedirection}>
                                    Linkedin
                                </Button>
                                <Button className="hidden md:inline-flex items-center" variant="primary" href="#contact">
                                    Contact
                                </Button>
                            </div>
                        </div>
                        {/* Menu mobile incluant les liens et les boutons */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    className="md:hidden flex flex-col items-center gap-4 py-4 overflow-hidden"
                                >
                                    {navLinks.map(link => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            className="transition-colors hover:text-violet-400 font-bold"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <div className="flex flex-col gap-2 w-full items-center">
                                        <Button variant="secondary" onClick={LinkedinRedirection}>
                                            Linkedin
                                        </Button>
                                        {/* Utilisation d'un <a> pour le bouton "Contact" en mobile */}
                                        <a
                                            href="#contact"
                                            className="p-4 inline-flex items-center px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700"
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[96px] lg:pb-[130px]"></div>
        </>
    );
}
