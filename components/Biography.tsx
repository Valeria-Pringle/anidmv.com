'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Biography() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section id="biography" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div className="relative w-full h-[550px] rounded-lg overflow-hidden">
            <Image
              src="/images/anid_mv.jpeg"
              alt="Anid_MV"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          </div>

          <div className="space-y-6">
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="font-orbitron text-4xl md:text-5xl font-bold text-fucsia"
            >
              Mi Bio
            </motion.h2>
            <p className="text-lg text-texto-gris">
              Norma Anid Muñoz Vizcarra, conocida artísticamente como <span className="animate-glow text-fucsia">Anid_MV</span>, nació el 26 de junio del 2002 en Poway, California, en el seno de una familia mexicana originaria de Ensenada, Baja California. A sus 23 años, <span className="animate-glow text-fucsia">Anid_MV</span> ya ha comenzado a forjar su camino como cantautora dentro del panorama musical.
            </p>
            <p className="text-lg text-texto-gris">
              Desde muy joven mostró una conexión profunda con la música. Su primer acercamiento fue a través del coro de una iglesia, donde participó siendo niña. Esa experiencia, aparentemente sencilla, marcó el inicio de lo que con el tiempo se convertiría en su pasión: componer y cantar.
            </p>

            {!isExpanded && (
              <button 
                onClick={() => setIsExpanded(true)}
                className="mt-4 px-6 py-2 bg-fucsia text-white rounded-full hover:bg-opacity-80 transition-colors"
              >
                Ver más
              </button>
            )}

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="text-lg text-texto-gris">
                  A los 16 años comenzó a escribir sus primeras canciones, usando la música como canal para expresar sus emociones, experiencias y visión del mundo. Cada letra refleja su historia, sus raíces y la fusión cultural que la define.
                </p>
                <p className="text-lg text-texto-gris">
                  <span className="animate-glow text-fucsia">Anid_MV</span> es el resultado de una voz que nació en un coro y que hoy busca resonar mucho más allá de él. Con autenticidad y alma, continúa trabajando en su arte, compartiendo su verdad canción tras canción.
                </p>
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="mt-4 px-6 py-2 bg-morado text-white rounded-full hover:bg-opacity-80 transition-colors animate-glow"
                >
                  Ver menos
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
