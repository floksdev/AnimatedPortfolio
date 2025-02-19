import { section } from "framer-motion/client";
import Image from "next/image";
import logoImage from '@/assets/images/logo.svg'
import menuImage from '@/assets/images/menu.min.svg'
import Button from "@/components/Button";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return <section className="py-4 px-4 lg:py-8 lg:px-8">
        <div className="container max-w-5xl"></div>
            <div className="grid grid-cols-2 border lg:grid-cols-3 border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
            <div>
                <Image src={logoImage} alt="Layers logo" className="h-9 md:h-auto w-auto"/>
            </div>
            <div className="lg:flex justify-center items-center hidden">
                <nav className="flex gap-6 font-medium">
                    {navLinks.map(link => (
                        <a href={link.href} key={link.label}>{link.label}</a>
                    ))}
                </nav>
            </div>
            <div className="flex justify-end gap-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-menu md:hidden"
                    >
                        <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
                <Button className="hidden md:inline-flex items-center" variant="secondary">Log in</Button>
                <Button className="hidden md:inline-flex items-center" variant="primary">Sign up</Button>
            </div>
        </div>
    </section>;
}
