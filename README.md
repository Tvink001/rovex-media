# Rovex Media

Marketing site for Rovex Media: landing, contact, terms of service and privacy policy.

Built with Astro (static output), self-hosted Manrope and Inter, and build-time
image optimization to AVIF/WebP.

## Development

```
npm install
npm run dev      # http://localhost:4321
npm run build    # static build -> dist/
npm run preview  # preview the build
```

## Project layout

- `src/pages` - the four routes: index, contact, terms, privacy
- `src/layouts/Stage.astro` - shared shell; scales the 1920px design canvas to the viewport
- `src/components` - header and footer
- `src/data/site.ts` - copy and lists (verticals, traffic sources, partners, FAQ, footer)
- `src/assets/img` - source imagery, optimized at build time
