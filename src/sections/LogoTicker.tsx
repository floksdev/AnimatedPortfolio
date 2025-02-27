"use client";

import { Fragment } from "react";
import ExpressJS from "@/assets/images/techno/ExpressJS.svg";
import ReactJS from "@/assets/images/techno/ReactJS.svg";
import NextJS from "@/assets/images/techno/NextJS.svg";
import Javascript from "@/assets/images/techno/Javascript.svg";
import Typescript from "@/assets/images/techno/Typescript.svg";
import HTML from "@/assets/images/techno/HTML5.svg";
import CSS from "@/assets/images/techno/CSS3.svg";
import Tailwind from "@/assets/images/techno/TailwindCSS.svg";
import Go from "@/assets/images/techno/Go.svg";
import MongoDB from "@/assets/images/techno/MongoDB.svg";
import Bash from "@/assets/images/techno/Bash.svg";
import Cmake from "@/assets/images/techno/Cmake.svg";
import Bulma from "@/assets/images/techno/Bulma.svg";
import MySQL from "@/assets/images/techno/MySQL.svg";
import MariaDB from "@/assets/images/techno/MariaDB.svg";
import Cpp from "@/assets/images/techno/C++.svg";
import C from "@/assets/images/techno/C.svg";
import FramerMotion from "@/assets/images/techno/FramerMotion.svg";
import InfiniteScrollingLogosAnimation from "@/components/InfiniteScrollAnimation";


import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { name: "ExpressJS", image: ExpressJS },
    { name: "ReactJS", image: ReactJS },
    { name: "NextJS", image: NextJS },
    { name: "Javascript", image: Javascript },
    { name: "Typescript", image: Typescript },
    { name: "HTML", image: HTML },
    { name: "CSS", image: CSS },
    { name: "Tailwind", image: Tailwind },
    { name: "Go", image: Go },
    { name: "MongoDB", image: MongoDB },
    { name: "Bash", image: Bash },
    { name: "Cmake", image: Cmake },
    { name: "Bulma", image: Bulma },
    { name: "MySQL", image: MySQL },
    { name: "MariaDB", image: MariaDB },
    { name: "C++", image: Cpp },
    { name: "C", image: C },
    { name: "FramerMotion", image: FramerMotion },
];

export default function LogoTicker() {
    return (
    <section className="py-24 overflow-x-clip">
        <div className="container">
            <h3 className="text-center text-white/50 text-xl">18 langages, frameworks et technologies maîtrisés</h3>
            <div className="flex overflow-hidden mt-7 [mask-image:linear-gradient(to_right,transparent,black_90%,transparent)]">
                <InfiniteScrollingLogosAnimation/>
            </div>
        </div>
    </section>
    );
}
