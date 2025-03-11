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
    { text: "!", className: "text-white font-black" },
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-10">
          <Tag>Annonce</Tag>
          <TypewriterEffect
            words={words}
            className="
                mx-auto
                w-full
                max-w-md          /* par défaut sur mobile */
                sm:max-w-lg       /* dès 640px */
                md:max-w-2xl      /* dès 768px */
                lg:max-w-3xl      /* dès 1024px, plus large */
                px-4
                text-2xl          /* taille du texte par défaut */
                sm:text-4xl       /* dès 640px */
                md:text-5xl       /* dès 768px */
                font-medium 
                text-center 
                leading-tight
            "
            cursorClassName="text-violet-600"
        />
        </div>
      </div>
    </section>
  );
}
