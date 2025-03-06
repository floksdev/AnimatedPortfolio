"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Exemple de données pour la timeline
const timelineItems = [
  {
    title: 'Début de l\'aventure',
    date: 'Janvier 2020',
    description: 'Lancement de mon premier projet futuriste.',
  },
  {
    title: 'Projets Innovants',
    date: 'Mars 2021',
    description: 'Mise en œuvre de solutions high-tech en entreprise.',
  },
  {
    title: 'Leadership Technologique',
    date: 'Septembre 2022',
    description: 'Direction d\'une équipe de développement pour un produit révolutionnaire.',
  },
  // Ajoutez d'autres éléments selon vos expériences...
];

export default function HorizontalTimeline() {
  return (
    <section className="bg-gray-900 py-10">
      <h2 className="text-center text-3xl text-blue-400 mb-8">Ma Timeline Futuriste</h2>
      {/* Container horizontal scrollable */}
      <div className="flex overflow-x-scroll snap-x snap-mandatory space-x-8 px-4">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] snap-start bg-gray-800 rounded-lg p-6 shadow-xl hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl text-blue-300 font-bold">{item.title}</h3>
            <span className="block text-sm text-gray-500">{item.date}</span>
            <p className="mt-3 text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
