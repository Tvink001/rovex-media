// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Public marketing brand is "Rovex Media"; the legal entity in Terms/Privacy is
// "Rhine Media" (rhine-media.com). Both are intentional - see src/data/site.ts.
export default defineConfig({
  site: 'https://rovex-media.pages.dev',
  output: 'static',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  build: { inlineStylesheets: 'always' },
  integrations: [sitemap()],
  image: {
    // Heavy source PNGs (up to 1200px / ~0.9MB each) are re-encoded to sized
    // AVIF/WebP at their real display dimensions.
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: { limitInputPixels: false },
    },
  },
  fonts: [
    {
      name: 'Manrope',
      cssVariable: '--font-manrope',
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google(),
      weights: [300, 400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
});
