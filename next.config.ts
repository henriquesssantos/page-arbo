import type { NextConfig } from 'next';

/** Build para GitHub Pages: GITHUB_PAGES=true no workflow */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'page-arbo';
const basePath = isGithubPages ? `/${repoName}` : '';

const nextConfig: NextConfig = {
  ...(isGithubPages ? { output: 'export' } : {}),
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : undefined,
  trailingSlash: isGithubPages,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
