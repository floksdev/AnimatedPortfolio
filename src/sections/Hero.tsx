"use client";

import Button from "@/components/Button";
import Pic from "@/assets/images/me.svg";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="py-16">
            <div className="container">
                <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} className="flex items-center justify-center flex-col gap-10">
                    <Image className="w-25" src={Pic}></Image>
                    <div className="py-1 px-3 bg-gradient-to-r from-violet-500 to-purple-700 rounded-full text-white font-bold">✨ Qui-suis-je ?</div>
                </motion.div>
                <motion.h1 initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} className="text-6xl md:text-6xl font-medium text-center mt-6">
                    Curieux et innovant, je vous<br />
                    invite à découvrir un univers<br />
                    où chaque projet est une <br />
                    aventure en devenir
                </motion.h1>
                <motion.p initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} className="text-center text-xl text-white/50 mt-8 max-w-3xl mx-auto">
                    Passionné depuis toujours par la technologie et le graphisme, j’ai choisi la <br />
                    programmation pour donner vie à mes idées débordantes. Actuellement étudiant <br/ >
                    en 3ème année à Epitech Paris, je repousse sans cesse les limites de ma créativité.
                </motion.p>
            </div>
        </section>
    );
}
