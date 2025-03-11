"use client";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-neutral-950 border-t-4 border-violet-600">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        <p className="text-center text-sm text-gray-400 font-extralight">
            Portfolio créé avec passion grâce à Next.js, Tailwind CSS et Framer Motion
        </p>
        <motion.a
          href="https://fr.trustpilot.com/evaluate/tristan-wehrle.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Donner votre avis sur Trustpilot"
          className="flex items-center gap-2 border border-violet-600 rounded-full px-4 py-2 text-violet-600 font-semibold transition-colors duration-200 hover:bg-violet-600 hover:text-white focus:outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaStar className="text-xl" />
          Votre avis m'intéresse
        </motion.a>
        <p className="text-sm text-gray-400">
          © Tristan Wehrle {currentYear} - Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
