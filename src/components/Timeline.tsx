"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

interface TimelineEntry {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Calcul de la hauteur avec useLayoutEffect et ResizeObserver pour rester synchro lors d'un redimensionnement
  useLayoutEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };
    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    if (ref.current) resizeObserver.observe(ref.current);
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
      if (ref.current) resizeObserver.unobserve(ref.current);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Transformation de la couleur pour les marqueurs : de noir à violet par exemple
  const markerColor = useTransform(scrollYProgress, [0, 1], ["#000000", "#8b5cf6"]);

  return (
    <div className="w-full bg-neutral-950 font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20" role="list">
        {data.map((item) => (
          <div
            key={item.id}
            role="listitem"
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div
                style={{ backgroundColor: markerColor }}
                className="h-10 absolute left-3 w-10 rounded-full flex items-center justify-center"
              >
                <motion.div
                  style={{ backgroundColor: markerColor }}
                  className="h-4 w-4 rounded-full border border-neutral-700 p-2"
                />
              </motion.div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {item.title}
              </h3>
              {/* La description sous forme de carte */}
              <div className="bg-white/10 shadow-lg rounded-lg p-6 border border-neutral-700">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,transparent,var(--tw-gradient-stops))] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
