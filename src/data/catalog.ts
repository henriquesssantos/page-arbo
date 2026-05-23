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
    src: '/catalogo/download.jfif',
    title: 'Mesa Suspensa Industrial',
    category: 'Escritório',
  },
  {
    src: '/catalogo/download (1).jfif',
    title: 'Adega de Parede',
    category: 'Decoração',
  },
  {
    src: '/catalogo/download (2).jfif',
    title: 'Mesa de Centro Maciça',
    category: 'Sala de Estar',
  },
  {
    src: '/catalogo/download3.jfif',
    title: 'Escritório Flutuante',
    category: 'Home Office',
  },
];
