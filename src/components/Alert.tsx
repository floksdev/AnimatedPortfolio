"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface AlertProps {
  message: string;
  description?: string;
  duration?: number;
  onClose?: () => void;
}

export default function AlertComponent({ 
  message, 
  description, 
  duration = 3000, 
  onClose = () => {} 
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="top-5 left-1/2 transform -translate-x-1/2 bg-violet-600 border border-white text-white font-bold p-4 rounded-lg shadow-lg z-50"
        >
          <div className="flex items-start">
            <div className="flex-grow">
              <p className="font-bold text-lg">{message}</p>
              {description && <p className="mt-1 text-sm">{description}</p>}
            </div>
            <button 
              onClick={() => {
                setVisible(false);
                onClose();
              }} 
              className="ml-4 text-white hover:text-neutral-400"
              aria-label="Fermer l'alerte"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
