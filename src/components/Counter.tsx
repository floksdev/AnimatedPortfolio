"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function CountAnimation({
  number,
  className,
}: {
  number: number;
  className: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      count.set(0);
      const animation = animate(count, number, { duration: 2 });
      return () => animation.stop();
    }
  }, [isInView, number, count]);

  return <motion.h1 ref={ref} className={cn(className)}>{rounded}</motion.h1>;
}
