'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { catalogItems } from '@/data/catalog';
import { whatsappLink } from '@/lib/constants';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function CatalogSection() {
  return (
    <section id="catalogo" className="relative bg-[#0a0805] py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1510_0%,_#0a0805_70%)]" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            variants={cardVariants}
            custom={0}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] font-inter tracking-[0.35em] uppercase text-[#C9A96E]">
              Catálogo
            </span>
            <div className="w-12 h-[1px] bg-[#C9A96E]" />
          </motion.div>

          <motion.h2
            variants={cardVariants}
            custom={1}
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAF8F6] leading-tight"
          >
            Peças que inspiram
          </motion.h2>

          <motion.p
            variants={cardVariants}
            custom={2}
            className="mt-4 text-base font-inter font-light text-[#D7CCC8]/60 max-w-md mx-auto"
          >
            Conheça algumas das nossas criações artesanais, feitas com madeira nobre e dedicação.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {catalogItems.map((item, i) => (
            <motion.div
              key={item.src}
              variants={cardVariants}
              custom={i}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1510]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0805] via-[#0a0805]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute inset-3 border border-[#C9A96E]/0 group-hover:border-[#C9A96E]/30 transition-all duration-500 pointer-events-none" />

                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-inter tracking-[0.3em] uppercase text-[#C9A96E]/70 bg-[#0a0805]/60 backdrop-blur-sm px-3 py-1.5">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-playfair text-lg md:text-xl text-[#FAF8F6] leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <div className="mt-2 w-0 group-hover:w-8 h-[1px] bg-[#C9A96E] transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-14 md:mt-20"
        >
          <a
            href={whatsappLink('Olá! Gostaria de ver mais peças do catálogo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4 border border-[#C9A96E]/40 text-[#C9A96E] overflow-hidden transition-all duration-500 hover:text-[#1A1A1A]"
          >
            <span className="absolute inset-0 bg-[#C9A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <span className="relative text-sm font-inter font-light tracking-[0.2em] uppercase">
              Ver catálogo completo
            </span>
            <svg
              className="relative w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
