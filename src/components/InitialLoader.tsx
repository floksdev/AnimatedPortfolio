"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const handleLoad = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setIsLoaded(true), 800);
    };

    if (document.readyState !== 'complete') {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + (Math.random() * 15), 100));
      }, 200);
    } else {
      handleLoad();
    }

    window.addEventListener('load', handleLoad);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setIsLoaded(true), 1200);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-neutral-950 flex flex-col items-center justify-center gap-6"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          >
            <div className="w-24 h-24 bg-violet-400 rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-bold text-neutral-950">TW</span>
            </div>
          </motion.div>

          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="h-full bg-violet-400 origin-left"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold text-violet-400">
              {Math.round(progress)}%
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/80"
            >
              Chargement...
            </motion.span>
          </motion.div>

          <AnimatePresence>
            {progress >= 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="absolute inset-0 flex items-center justify-center bg-neutral-950/80"
              >
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}