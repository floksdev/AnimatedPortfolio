"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const AnimatedPoint = ({
  containerRef,
  heightTransform,
  children,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  heightTransform: any;
  children?: React.ReactNode;
}) => {
  const pointRef = useRef<HTMLDivElement>(null);
  const [pointOffset, setPointOffset] = useState(0);

  useEffect(() => {
    if (pointRef.current && containerRef.current) {
      const pointRect = pointRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setPointOffset(pointRect.top - containerRect.top);
    }
  }, [containerRef]);

  const litValue = useTransform(
    heightTransform,
    [pointOffset - 50, pointOffset + 50],
    [0, 1],
    { clamp: true }
  );
  const scale = useTransform(litValue, [0, 1], [1, 1.2]);
  const filterValue = useTransform(
    litValue,
    [0, 1],
    ["brightness(1)", "brightness(1.5)"]
  );

  return (
    <motion.div
      ref={pointRef}
      style={{ scale, filter: filterValue }}
      className="flex justify-center items-center h-10 w-10 rounded-full bg-violet-600 border border-violet-700 p-2"
    >
      {children}
    </motion.div>
  );
};

const AnimatedItem = ({
  containerRef,
  heightTransform,
  children,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  heightTransform: any;
  children: React.ReactNode;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (itemRef.current && containerRef.current) {
      const itemRect = itemRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setItemOffset(itemRect.top - containerRect.top);
    }
  }, [containerRef]);

  const litValue = useTransform(
    heightTransform,
    [itemOffset - 50, itemOffset + 50],
    [0, 1],
    { clamp: true }
  );

  const scale = useTransform(litValue, [0, 1], [1, 1.05]);
  const filterValue = useTransform(
    litValue,
    [0, 1],
    ["brightness(0.8)", "brightness(1.1)"]
  );

  return (
    <motion.div ref={itemRef} style={{ scale, filter: filterValue }}>
      {children}
    </motion.div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const barStopOffset = 180;

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setContainerHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, containerHeight - barStopOffset]
  );
  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, 1]
  );

  return (
    <div className="w-full bg-transparent font-sans">
      <div className="flex justify-center items-center mt-8">
        <h1 className="font-bold text-6xl w-[60%] text-center h-15">
          Voici mes expériences <span className="text-violet-600">professionnelles</span>
        </h1>
      </div>
      <div
        ref={containerRef}
        className="relative max-w-7xl mx-auto pb-20 flex flex-col items-center"
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[100px] w-[4px] h-full z-0 overflow-hidden">
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="w-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>

        <div className="flex flex-col items-center space-y-10 z-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center pt-10 md:pt-40 md:gap-10"
            >
              <AnimatedPoint
                containerRef={containerRef}
                heightTransform={heightTransform}
              >
                <div className="h-4 w-4 rounded-full bg-violet-700 border border-violet-800 p-2"></div>
              </AnimatedPoint>

              <AnimatedItem
                containerRef={containerRef}
                heightTransform={heightTransform}
              >
                <div className="font-bold text-neutral-400 text-6xl">
                  {item.title}
                </div>
              </AnimatedItem>

              <AnimatedItem
                containerRef={containerRef}
                heightTransform={heightTransform}
              >
                <div className="flex items-center justify-center border rounded-3xl w-auto bg-neutral-800 p-6 text-white font-medium text-xl h-auto">
                  {item.content}
                </div>
              </AnimatedItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
