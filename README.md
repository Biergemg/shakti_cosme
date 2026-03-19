# Shakti Cosmetología

Landing one-page de producción para Shakti Cosmetología en Next.js App Router.

## Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Vitest + Testing Library

## Scripts
- `npm run dev` — entorno local
- `npm run lint` — lint
- `npm run typecheck` — typecheck
- `npm run test:run` — tests en modo CI
- `npm run build` — build de producción
- `npm run verify` — lint + tests + build

## Estructura
- `config/` — configuración global del sitio
- `content/` — narrativa y datos editables de la landing
- `types/` — contratos de contenido
- `components/layout/` — header/footer
- `components/home/` — secciones de la home
- `components/ui/` — primitives reutilizables
- `components/seo/` — wrappers JSON-LD
- `lib/` — helpers puros (seo, analytics, contact, format)

## Variables de entorno
Copia `.env.example` y reemplaza:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

## Assets SEO
Este proyecto usa metadata assets de App Router:
- `app/icon.png`
- `app/apple-icon.png`
- `app/opengraph-image.png`
- `app/twitter-image.png`
- `app/favicon.ico`
