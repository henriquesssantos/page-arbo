'use client';

import { motion } from 'framer-motion';
import HeroVideo from './HeroVideo';
import { whatsappLink } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen" id="hero">
      <div className="relative h-screen w-full overflow-hidden">
        <HeroVideo />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/30" />

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20 mx-auto max-w-[1440px]">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '4rem' }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-[1px] bg-[#C9A96E] mb-8"
            />

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] text-[#FAF8F6] tracking-tight"
            >
              A arte de
              <br />
              <span className="text-[#C9A96E]">transformar</span>
              <br />
              madeira em vida
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 md:mt-8 text-base md:text-lg font-inter font-light text-[#D7CCC8]/80 leading-relaxed max-w-md tracking-wide"
            >
              Cada peça é uma obra-prima única, esculpida com décadas de tradição
              artesanal e acabamento impecável.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 md:mt-12 flex flex-wrap gap-4"
            >
              <a
                href="#catalogo"
                className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#C9A96E] text-[#C9A96E] rounded-none overflow-hidden transition-all duration-500 hover:text-[#1A1A1A]"
              >
                <span className="absolute inset-0 bg-[#C9A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <span className="relative text-sm font-inter font-light tracking-[0.2em] uppercase">
                  Ver Catálogo
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

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#C9A96E]/10 border border-[#C9A96E]/20 text-[#D7CCC8] rounded-none overflow-hidden transition-all duration-500 hover:border-[#C9A96E]/50 hover:text-[#FAF8F6]"
              >
                <span className="relative text-sm font-inter font-light tracking-[0.2em] uppercase">
                  Fale Conosco
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#sobre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 left-6 md:left-12 lg:left-20 z-10 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-12 bg-gradient-to-b from-[#C9A96E] to-transparent"
          />
          <span className="text-[10px] font-inter tracking-[0.3em] uppercase text-[#D7CCC8]/50 rotate-90 origin-left translate-x-4">
            Explorar
          </span>
        </motion.a>
      </div>
    </section>
  );
}
