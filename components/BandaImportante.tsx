'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

const banda = [
  {
    id: 2,
    name: 'Manager',
    handle: '@purple.xfi',
    imageUrl: '/images/xfi.jpg', // Placeholder image
    profileUrl: 'https://instagram.com/purple.xfi',
  },
  {
    id: 1,
    name: 'GoodFellas',
    handle: '@goodfellas_oficial_',
    imageUrl: '/images/productor.png', 
    profileUrl: 'https://www.instagram.com/goodfellas_oficial_/',
  },

  {
    id: 3,
    name: 'Camarógrafo',
    handle: '@padrinoli.mp4',
    imageUrl: '/images/camarografo.png', // Placeholder image
    profileUrl: 'https://instagram.com/padrinoli.mp4',
  },
  {
    id: 4,
    name: 'BLACK GANG',
    handle: '@lablackgang',
    imageUrl: '/images/blackgang.png', // Placeholder image
    profileUrl: 'https://instagram.com/lablackgang',
  },
];

export function BandaImportante() {
  return (
    <section id="banda" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="font-orbitron text-4xl md:text-5xl font-bold text-fucsia mb-12"
          >
            Banda Importante
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {banda.map((miembro) => (
              <motion.a
                key={miembro.id}
                href={miembro.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-fondo-negro bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-morado transition-colors duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={miembro.imageUrl}
                    alt={`Foto de ${miembro.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-texto-gris">{miembro.name}</h3>
                <p className="text-azul flex items-center justify-center gap-2">
                  <FaInstagram />
                  {miembro.handle}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
