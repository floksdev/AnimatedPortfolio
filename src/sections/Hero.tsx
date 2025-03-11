"use client";

import Button from "@/components/Button";
import Pic from "@/assets/images/me.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="py-16">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center flex-col gap-10"
        >
          <motion.div variants={itemVariants}>
            <Image alt="Profil-picture" className="w-25" src={Pic} />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="py-1 px-3 bg-gradient-to-r from-violet-500 to-purple-700 rounded-full text-white font-bold"
          >
            ✨ Qui-suis-je ?
          </motion.div>
        </motion.div>

        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-6xl font-medium text-center mt-6"
        >
          Curieux et innovant, je vous
          <br />
          invite à découvrir un univers
          <br />
          où chaque projet est une
          <br />
          aventure en devenir
        </motion.h1>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center text-xl text-white/50 mt-8 max-w-3xl mx-auto"
        >
          Passionné depuis toujours par la technologie et le graphisme, j’ai choisi la{" "}
          <br />
          programmation pour donner vie à mes idées débordantes. Actuellement étudiant{" "}
          <br />
          en 3ème année à Epitech Paris, je repousse sans cesse les limites de ma créativité.
        </motion.p>
      </div>
    </section>
  );
}
