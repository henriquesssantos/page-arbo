'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ABOUT_IMAGE_PATH } from '@/lib/constants';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function AboutSection() {
  return (
    <section id="sobre" className="relative bg-[#0f0d0b] py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Subtle top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />

      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[60vh] bg-[#C9A96E]/[0.02] rounded-l-full blur-3xl" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-8"
            >
              {/* Section Label */}
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#C9A96E]" />
                <span className="text-[11px] font-inter tracking-[0.35em] uppercase text-[#C9A96E]">
                  Sobre Nós
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-[#FAF8F6]"
              >
                Tradição que se
                <br />
                <span className="text-[#C9A96E]">transforma</span> em arte
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-base md:text-lg font-inter font-light leading-relaxed text-[#D7CCC8]/70 max-w-lg"
              >
                A Arbo Marcenaria nasceu da paixão pela madeira e pelo desejo de criar
                peças que contam histórias. Cada projeto é desenvolvido com atenção
                meticulosa aos detalhes, utilizando madeiras nobres selecionadas e
                técnicas artesanais que preservam a essência de cada material.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={3}
                className="text-base md:text-lg font-inter font-light leading-relaxed text-[#D7CCC8]/70 max-w-lg"
              >
                Do conceito à entrega, acompanhamos cada etapa para garantir que
                sua peça reflita exclusividade, funcionalidade e a beleza natural
                da madeira.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="flex gap-12 pt-8 border-t border-[#C9A96E]/10"
              >
                {[
                  { number: '10+', label: 'Anos de\nexperiência' },
                  { number: '500+', label: 'Projetos\nentregues' },
                  { number: '100%', label: 'Feito à\nmão' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-playfair text-3xl md:text-4xl font-bold text-[#C9A96E]">
                      {stat.number}
                    </div>
                    <div className="mt-1 text-xs font-inter tracking-wider text-[#D7CCC8]/50 uppercase whitespace-pre-line">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Decorative Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* Using a frame from the workshop as decorative image */}
              <Image
                src={ABOUT_IMAGE_PATH}
                alt="Oficina Arbo Marcenaria"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0b] via-transparent to-transparent opacity-60" />

              {/* Decorative border */}
              <div className="absolute inset-4 border border-[#C9A96E]/20 pointer-events-none" />
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-[#C9A96E]/20 bg-[#C9A96E]/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
