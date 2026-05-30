import { publicPath } from '@/lib/constants';

export interface CatalogItem {
  src: string;
  title: string;
  category: string;
}

const catalogFile = (filename: string) =>
  publicPath(`/catalogo/${encodeURIComponent(filename)}`);

/**
 * Adicione novas entradas ao incluir imagens em public/catalogo/
 */
export const catalogItems: CatalogItem[] = [
  {
    src: catalogFile('mesa flutuante.jfif'),
    title: 'Mesa Flutuante',
    category: 'Home Office',
  },
  {
    src: catalogFile('mesa de centro.jfif'),
    title: 'Mesa de Centro',
    category: 'Sala de Estar',
  },
  {
    src: catalogFile('wine decor.jfif'),
    title: 'Wine Decor',
    category: 'Decoração',
  },
  {
    src: catalogFile('nicho.jfif'),
    title: 'Nicho de Parede',
    category: 'Decoração',
  },
];
