import Tag from "@/components/Tag";
import { TypewriterEffect } from "@/components/TypeWriter";


export default function Announcement() {
    const words = [
        { text: "Je", className: "text-white font-bold" },
        { text: "recherche", className: "text-violet-600 font-bold" },
        { text: "un", className: "text-white font-bold" },
        { text: "stage,", className: "text-violet-600 font-bold" },
        { text: "d'une", className: "text-white font-bold" },
        { text: "durée", className: "text-white font-bold" },
        { text: "de", className: "text-white font-bold" },
        { text: "4", className: "text-white font-bold" },
        { text: "mois", className: "text-white font-bold" },
        { text: "commençant", className: "text-white font-bold" },
        { text: "le", className: "text-white font-bold" },
        { text: "31", className: "text-violet-600 font-black" },
        { text: "mars", className: "text-violet-600 font-black" },
        { text: "2025", className: "text-violet-600 font-black" },
        { text: "!", className: "text-white font-black" }
    ];
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center items-center gap-10 flex-col">
                    <Tag>
                        Annonce
                    </Tag>
                    <TypewriterEffect words={words} className="text-6xl font-medium text-center w-2/3" cursorClassName="text-violet-600" />
                </div>
            </div>
        </section>
    );
};
