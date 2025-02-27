import Tag from "@/components/Tag";
import { TypewriterEffect } from "@/components/typewriter-effect";


export default function Announcement() {
    const words = [
        { text: "Je", className: "text-white font-bold" },
        { text: "recherche", className: "text-purple-500 font-bold" },
        { text: "un", className: "text-white font-bold" },
        { text: "stage,", className: "text-purple-500 font-bold" },
        { text: "d'une", className: "text-white font-bold" },
        { text: "durée", className: "text-white font-bold" },
        { text: "de", className: "text-white font-bold" },
        { text: "4", className: "text-white font-bold" },
        { text: "mois", className: "text-white font-bold" },
        { text: "commençant", className: "text-white font-bold" },
        { text: "le", className: "text-white font-bold" },
        { text: "31", className: "text-purple-500 font-black" },
        { text: "mars", className: "text-purple-500 font-black" },
        { text: "2025", className: "text-purple-500 font-black" },
        { text: "!", className: "text-white font-black" }
    ];
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center items-center gap-10 flex-col">
                    <Tag>
                        Annonce
                    </Tag>
                    <TypewriterEffect words={words} className="text-6xl font-medium text-center" cursorClassName="text-purple-500" />
                </div>
            </div>
        </section>
    );
};
