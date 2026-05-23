import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Arbo Marcenaria — Móveis Artesanais de Alto Padrão',
  description:
    'Marcenaria artesanal especializada em móveis sob medida com madeiras nobres. Cada peça é uma obra-prima única, esculpida com tradição e acabamento impecável.',
  keywords: [
    'marcenaria artesanal',
    'móveis sob medida',
    'madeira nobre',
    'móveis de luxo',
    'marcenaria premium',
    'Arbo Marcenaria',
  ],
  openGraph: {
    title: 'Arbo Marcenaria — Móveis Artesanais de Alto Padrão',
    description:
      'Marcenaria artesanal especializada em móveis sob medida com madeiras nobres.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
