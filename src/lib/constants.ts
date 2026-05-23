export const BRAND = {
  name: 'Arbo Marcenaria',
  short: 'ARBO',
  tagline: 'Marcenaria',
} as const;

export const WHATSAPP_NUMBER = '5548991678804';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const whatsappLink = (message?: string) =>
  message
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;

/** Prefixo para assets em public/ (GitHub Pages usa /page-arbo) */
export const publicPath = (path: string): string => {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};

/** Substituir por imagem em public/logo.png quando disponível */
export const LOGO_PATH = publicPath('/logo.png');

export const HERO_VIDEO_PATH = publicPath('/hero/workshop.mp4');
export const HERO_VIDEO_OBJECT_POSITION = '58% center';
export const ABOUT_IMAGE_PATH = publicPath('/images/about.png');
