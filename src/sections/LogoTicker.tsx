"use client";

import InfiniteScrollingLogosAnimation from "@/components/InfiniteScrollAnimation";
import CountAnimation from "@/components/Counter";
import { useRef } from "react";

export default function LogoTicker() {
    const ref = useRef(null);
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
