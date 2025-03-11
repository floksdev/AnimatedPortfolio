"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse, 
  faFolderOpen, 
  faUserGraduate, 
  faFileLines 
} from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logoImage from '@/assets/images/logo.svg';
import Button from "@/components/Button";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Accueil", icon: faHouse, href: "#hero" },
    { label: "Projets", icon: faFolderOpen, href: "#projects" },
    { label: "Experiences", icon: faUserGraduate, href: "#experiences" },
    { label: "CV", icon: faFileLines, href: "#cv" },
];

function LinkedinRedirection() {
    window.open('https://linkedin.com/in/tristan-wehrle', '_blank');
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const homeRef = useRef(null);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        router.push(href);
    };

    return (
        <>
            <section ref={homeRef} className="py-4 px-4 lg:py-8 lg:px-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 md:grid-cols-3 rounded-full border-white/15 p-2 px-4 md:pr-2 items-center">
                            <div>
                                <a 
                                    href="#"
                                    onClick={(e) => handleNavClick(e, "#")}
                                >
                                    <Image src={logoImage} alt="Layers logo" className="h-9 md:h-8 w-auto" />
                                </a>
                            </div>
                            <div className="md:flex justify-center items-center hidden">
                                <nav className="flex gap-4 lg:gap-6 pr-8 lg:pr-20 font-medium">
                                    {navLinks.map(link => (
                                        <a
                                            href={link.href}
                                            key={link.label}
                                            className="transition-colors hover:text-violet-400 font-bold flex items-center gap-2"
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            title={link.label}
                                        >
                                            <FontAwesomeIcon 
                                                icon={link.icon} 
                                                className="w-5 h-5 md:w-6 md:h-6 lg:hidden" 
                                            />
                                            <span className="hidden lg:inline">{link.label}</span>
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
                                <Button 
                                    className="hidden md:inline-flex items-center gap-2" 
                                    variant="secondary" 
                                    onClick={LinkedinRedirection}
                                >
                                    <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                                    <span className="hidden lg:inline">Linkedin</span>
                                </Button>
                                <Button 
                                    className="hidden md:inline-flex items-center" 
                                    variant="primary" 
                                    href="#contact"
                                    onClick={(e) => {
                                        setIsOpen(false);
                                    }}
                                >
                                    Contact
                                </Button>
                            </div>
                        </div>
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
                                            onClick={(e) => handleNavClick(e, link.href)}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <div className="flex flex-col gap-2 w-full items-center">
                                        <Button
                                            variant="secondary"
                                            onClick={() => {
                                                LinkedinRedirection();
                                                setIsOpen(false);
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 mr-2" />
                                            Linkedin
                                        </Button>
                                        <Button
                                            className="inline-flex items-center"
                                            variant="primary"
                                            href="#contact"
                                            onClick={(e) => handleNavClick(e, "#contact")}
                                        >
                                            Contact
                                        </Button>
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