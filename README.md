# Arbo Marcenaria — Landing Page

Landing page premium em Next.js 15, Tailwind CSS v4 e Framer Motion.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy (GitHub Pages)

O site é publicado em:

**https://henriquesssantos.github.io/page-arbo/**

### Configuração no GitHub

1. Repositório → **Settings** → **Pages**
2. Em **Build and deployment**, escolha **Source: GitHub Actions** (não use “Deploy from branch” — isso só mostra o README)
3. Cada push na branch `main` roda o workflow e publica a pasta `out` do Next.js

## Estrutura de assets

| Caminho | Uso |
|---------|-----|
| `public/hero/workshop.mp4` | Vídeo do hero |
| `public/images/about.png` | Seção Sobre |
| `public/catalogo/` | Fotos do catálogo |

Para novos itens do catálogo, adicione a imagem em `public/catalogo/` e uma entrada em `src/data/catalog.ts`.
