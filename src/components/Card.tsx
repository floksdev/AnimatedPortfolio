"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBook } from "react-icons/fa";

export const GlareCard = ({
  children,
  className,
  tags,
  url,
}: {
  children: React.ReactNode;
  className?: string;
  tags?: string[];
  url: string;
}) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    glare: { x: 50, y: 50 },
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });
  const containerStyle: React.CSSProperties & { [key: string]: string } = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--foil-size": "100%",
    "--opacity": "0",
    "--radius": "48px",
    "--easing": "ease",
    "--transition": "var(--duration) var(--easing)",
  };  

  const backgroundStyle = {
    "--step": "5%",
    "--foil-svg": `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")`,
    "--pattern": "var(--foil-svg) center/50% no-repeat",
    "--rainbow":
      "repeating-linear-gradient( 0deg,rgb(255,119,115) calc(var(--step) * 1),rgba(255,237,95,1) calc(var(--step) * 2),rgba(168,255,95,1) calc(var(--step) * 3),rgba(131,255,247,1) calc(var(--step) * 4),rgba(120,148,255,1) calc(var(--step) * 5),rgb(216,117,255) calc(var(--step) * 6),rgb(255,119,115) calc(var(--step) * 7) ) 0% var(--bg-y)/200% 700% no-repeat",
    "--diagonal":
      "repeating-linear-gradient( 128deg,#0e152e 0%,hsl(180,10%,60%) 3.8%,hsl(180,10%,60%) 4.5%,hsl(180,10%,60%) 5.2%,#0e152e 10%,#0e152e 12% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    "--shade":
      "radial-gradient( farthest-corner circle at var(--m-x) var(--m-y),rgba(255,255,255,0.1) 12%,rgba(255,255,255,0.15) 20%,rgba(255,255,255,0.25) 120% ) var(--bg-x) var(--bg-y)/300% no-repeat",
    backgroundBlendMode: "hue, hue, hue, overlay",
  };

  const updateStyles = () => {
    if (refElement.current) {
      const { background, rotate, glare } = state.current;
      refElement.current.style.setProperty("--m-x", `${glare.x}%`);
      refElement.current.style.setProperty("--m-y", `${glare.y}%`);
      refElement.current.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current.style.setProperty("--r-y", `${rotate.y}deg`);
      refElement.current.style.setProperty("--bg-x", `${background.x}%`);
      refElement.current.style.setProperty("--bg-y", `${background.y}%`);
    }
  };

  const getTagDescription = (tag: string) => {
    const descriptions: { [key: string]: string } = {
      "ReactJS": "une bibliothèque pour créer des interfaces utilisateur interactives.",
      "NodeJS": "un environnement d'exécution JavaScript pour le serveur.",
      "MongoDB": "une base de données NoSQL flexible et évolutive.",
      "C": "un langage de programmation bas niveau, efficace et rapide.",
      "Makefile": "un fichier de script pour automatiser la compilation de programmes.",
      "C++": "un langage de programmation performant et orienté objet.",
      "SFML": "une bibliothèque multimédia pour la création d'applications graphiques.",
      "UDP": "un protocole de communication sans connexion pour des échanges rapides.",
    };
    return descriptions[tag] || "une description non disponible pour ce tag.";
  };

  return (
    <div className="flex flex-col">
      <div
        style={containerStyle}
        className="relative isolate [contain:layout_style] [perspective:600px] transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-transform w-[320px] [aspect-ratio:17/21] cursor-pointer"
        ref={refElement}
        onClick={() => window.open(url, "_blank")}
        onPointerMove={(event) => {
          const rotateFactor = 0.4;
          const rect = event.currentTarget.getBoundingClientRect();
          const position = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
          };
          const percentage = {
            x: (100 / rect.width) * position.x,
            y: (100 / rect.height) * position.y,
          };
          const delta = {
            x: percentage.x - 50,
            y: percentage.y - 50,
          };

          const { background, rotate, glare } = state.current;
          background.x = 50 + percentage.x / 4 - 12.5;
          background.y = 50 + percentage.y / 3 - 16.67;
          rotate.x = -(delta.x / 3.5);
          rotate.y = delta.y / 2;
          rotate.x *= rotateFactor;
          rotate.y *= rotateFactor;
          glare.x = percentage.x;
          glare.y = percentage.y;

          updateStyles();
        }}
        onPointerEnter={() => {
          isPointerInside.current = true;
          if (refElement.current) {
            setTimeout(() => {
              if (isPointerInside.current) {
                refElement.current?.style.setProperty("--duration", "0s");
              }
            }, 300);
          }
        }}
        onPointerLeave={() => {
          isPointerInside.current = false;
          if (refElement.current) {
            refElement.current.style.removeProperty("--duration");
            refElement.current.style.setProperty("--r-x", "0deg");
            refElement.current.style.setProperty("--r-y", "0deg");
          }
        }}
      >
        <div className="h-full grid will-change-transform origin-center transition-transform duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] rounded-[var(--radius)] border border-slate-800 hover:[--opacity:0.6] hover:[--duration:200ms] hover:[--easing:linear] hover:filter-none overflow-hidden">
          <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))]">
            <div className={cn("h-full w-full bg-slate-950", className)}>
              {children}
            </div>
          </div>
          <div className="w-full h-full grid [grid-area:1/1] mix-blend-soft-light [clip-path:inset(0_0_1px_0_round_var(--radius))] opacity-[var(--opacity)] transition-opacity transition-background duration-[var(--duration)] ease-[var(--easing)] delay-[var(--delay)] will-change-background [background:radial-gradient(farthest-corner_circle_at_var(--m-x)_var(--m-y),_rgba(255,255,255,0.8)_10%,_rgba(255,255,255,0.65)_20%,_rgba(255,255,255,0)_90%)]" />
          <div
            className="w-full h-full grid [grid-area:1/1] mix-blend-color-dodge opacity-[var(--opacity)] will-change-background transition-opacity [clip-path:inset(0_0_1px_0_round_var(--radius))] [background-blend-mode:hue_hue_hue_overlay] [background:var(--pattern),_var(--rainbow),_var(--diagonal),_var(--shade)] relative after:content-[''] after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] after:bg-[inherit] after:mix-blend-exclusion after:[background-size:var(--foil-size),_200%_400%,_800%,_200%] after:[background-position:center,_0%_var(--bg-y),_calc(var(--bg-x)*_-1)_calc(var(--bg-y)*_-1),_var(--bg-x)_var(--bg-y)] after:[background-blend-mode:soft-light,_hue,_hard-light]"
            style={{ ...backgroundStyle }}
          />
        </div>
      </div>
      {tags && tags.length > 0 && (
        <div className="flex flex-row justify-center items-center gap-4 w-full mt-4">
          {tags.map((tag, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                transition: { duration: 0.3 },
              }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveTag(tag);
              }}
              className="border-2 border-violet-600 rounded-xl w-auto pr-1 pl-1 pb-0 bg-neutral-800 text-center cursor-pointer"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {activeTag && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setActiveTag(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 text-white p-6 rounded-lg shadow-lg max-w-sm mx-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaBook size={24} className="text-violet-600" />
                <h2 className="text-xl font-bold">Le saviez-vous ?</h2>
              </div>
              <p className="text-lg">
                <span className="font-bold">{activeTag}</span> est {getTagDescription(activeTag)}
              </p>
              <button
                onClick={() => setActiveTag(null)}
                className="mt-4 px-4 py-2 bg-violet-600 rounded hover:bg-violet-700"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
