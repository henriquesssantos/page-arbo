import { publicPath } from '@/lib/constants';

export interface CatalogItem {
  src: string;
  title: string;
  category: string;
}

/**
 * Adicione novas entradas ao incluir imagens em public/catalogo/
 */
export const catalogItems: CatalogItem[] = [
  {
    src: publicPath('/catalogo/download.jfif'),
    title: 'Mesa Suspensa Industrial',
    category: 'Escritório',
  },
  {
    src: publicPath('/catalogo/download (1).jfif'),
    title: 'Adega de Parede',
    category: 'Decoração',
  },
  {
    src: publicPath('/catalogo/download (2).jfif'),
    title: 'Mesa de Centro Maciça',
    category: 'Sala de Estar',
  },
  {
    src: publicPath('/catalogo/download3.jfif'),
    title: 'Escritório Flutuante',
    category: 'Home Office',
  },
];
