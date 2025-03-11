"use client";

import Tag from "@/components/Tag";
import { Timeline } from "@/components/Timeline";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLock } from "react-icons/fa";

function VerdiRedirection() {
  window.open('https://verdi-events.com/', '_blank');
};

function KikleoRedirection() {
  window.open('https://kikleo.com/', '_blank');
};

export default function Experiences() {
  const [isSecretVisible, setSecretVisible] = useState(false);

  const timelineData = [
    {
      title: "2020",
      content: (
        <p>
          Développeur & Graphiste chez{" "}
          <span
            role="button"
            tabIndex={0}
            onClick={VerdiRedirection}
            onKeyDown={(e) => e.key === 'Enter' && VerdiRedirection()}
            className="cursor-pointer inline-block text-violet-500 font-bold border border-violet-500 rounded-full px-1 transition-colors duration-200 hover:bg-violet-600 hover:text-white focus:outline-none"
          >
            @VerdiEvents
          </span>
          <br />
          - Création de scripts
          <br />
          - Création de pages HTML/CSS
          <br />
          - Réalisation de flyers, logo, animations
        </p>
      ),
    },
    {
      title: "2023",
      content: (
        <p>
          Développeur Front-End chez{" "}
          <span
            role="button"
            tabIndex={0}
            onClick={KikleoRedirection}
            onKeyDown={(e) => e.key === 'Enter' && KikleoRedirection()}
            className="cursor-pointer inline-block text-violet-500 font-bold border border-violet-500 rounded-full px-1 transition-colors duration-200 hover:bg-violet-600 hover:text-white focus:outline-none"
          >
            @Kikleo
          </span>
          <br />
          - Gestion & affichage de l’UI
          <br />
          - Web-app Responsive
        </p>
      ),
    },
    {
      title: "2025",
      content: (
        <p>
          Auto-Entrepreneur{" "}
          <span
            role="button"
            tabIndex={0}
            onClick={() => setSecretVisible(true)}
            onKeyDown={(e) => e.key === 'Enter' && setSecretVisible(true)}
            className="cursor-pointer inline-block text-violet-500 font-bold border border-violet-500 rounded-full px-1 transition-colors duration-200 hover:bg-violet-600 hover:text-white focus:outline-none"
          >
            @TopSecret
          </span>
          <br />
          - Boutique e-Commerce
          <br />
          - Vente de vêtements concepts
          <br />
          - Création de site internet [FullStack]
        </p>
      ),
    }
  ];

  return (
    <section id="experiences" className="py-20 md:py-48">
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col">
          <Tag>Experiences</Tag>
          <Timeline data={timelineData} />
        </div>
      </div>

      <AnimatePresence>
        {isSecretVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={() => setSecretVisible(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 text-white p-6 rounded-lg shadow-lg max-w-sm mx-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaLock size={24} className="text-violet-600" />
                <h2 className="text-xl font-bold">Projet confidentiel</h2>
              </div>
              <p className="text-lg">
                Ce projet est actuellement top secret et ne peut pas être révélé pour l'instant.
              </p>
              <button
                onClick={() => setSecretVisible(false)}
                className="mt-4 px-4 py-2 bg-violet-600 rounded hover:bg-violet-700"
              >
                Compris !
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}