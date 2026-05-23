import { BRAND, whatsappLink } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050403] border-t border-[#C9A96E]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-playfair text-xl font-bold tracking-wide text-[#FAF8F6]">
              {BRAND.short}
            </span>
            <span className="block text-[9px] tracking-[0.35em] text-[#C9A96E] uppercase font-inter font-light -mt-0.5">
              {BRAND.tagline}
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#sobre"
              className="text-xs font-inter tracking-[0.15em] uppercase text-[#D7CCC8]/40 hover:text-[#D7CCC8] transition-colors duration-300"
            >
              Sobre
            </a>
            <a
              href="#catalogo"
              className="text-xs font-inter tracking-[0.15em] uppercase text-[#D7CCC8]/40 hover:text-[#D7CCC8] transition-colors duration-300"
            >
              Catálogo
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-inter tracking-[0.15em] uppercase text-[#D7CCC8]/40 hover:text-[#C9A96E] transition-colors duration-300"
            >
              Contato
            </a>
          </div>

          <p className="text-[10px] font-inter tracking-wider text-[#D7CCC8]/25">
            © {currentYear} {BRAND.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
