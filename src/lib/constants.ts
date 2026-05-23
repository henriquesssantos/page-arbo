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

/** Substituir por imagem em public/logo.png quando disponível */
export const LOGO_PATH = '/logo.png';

/** Vídeo de fundo do hero (em public/hero/) */
export const HERO_VIDEO_PATH = '/hero/workshop.mp4';

/** Desloca o enquadramento para a direita (área livre à esquerda para texto) */
export const HERO_VIDEO_OBJECT_POSITION = '58% center';

/** Imagem estática na seção Sobre */
export const ABOUT_IMAGE_PATH = '/images/about.png';
