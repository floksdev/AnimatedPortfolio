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
import CountAnimation from "@/components/Counter";
import { useInView } from "motion/react"
import { useRef, useEffect } from "react";

export default function LogoTicker() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
    <section ref= {ref} className="py-24 overflow-x-clip">
        <div className="container">
            <div className="flex justify-center items-center gap-2">
                <CountAnimation number={18} className="text-7xl text-violet-500 font-bold"/>
                <h3 className="text-center text-white/50 text-xl font-bold">languages, frameworks et<br />technologies maîtrisés ....</h3>
            </div>
            <div className="flex overflow-hidden mt-7 [mask-image:linear-gradient(to_right,transparent,black_90%,transparent)]">
                <InfiniteScrollingLogosAnimation/>
            </div>
        </div>
    </section>
    );
}
