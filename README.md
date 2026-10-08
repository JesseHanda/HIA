# Hearts in Action — landing page

Astro + Tailwind (AstroWind template), static output.

## Edit your content

Everything editable lives in **`src/data/program.ts`** (search for `EDIT`):

| Placeholder                          | Where                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------- |
| `<!-- STRIPE PAYMENT LINK URL -->`   | `integrations.stripePaymentLink`                                       |
| `<!-- VIDEO / YOUTUBE EMBED URL -->` | `integrations.videoEmbedUrl` (e.g. `https://www.youtube.com/embed/ID`) |
| `<!-- WEB3FORMS ACCESS KEY -->`      | `integrations.web3formsAccessKey` (free key at web3forms.com)          |
| Dates, venue, map link, contact      | `program`                                                              |
| e-Transfer email / security Q&A      | `etransfer`                                                            |
| Background-check / first-aid badges  | `safety` (flip to `true` only when accurate)                           |
| Gallery photos                       | `gallery[].src` → files in `public/gallery/`                           |
| Educator photo                       | `photo` in `src/components/hia/Educator.astro`                         |

Also set `site.site` in `src/config.yaml` and the Sitemap line in `public/robots.txt` to your real domain.

## Commands

`npm install` · `npm run dev` · `npm run build` · `npm run check`

## Deploy on Cloudflare Pages

Connect the repo (root = this folder) and use: build command `npm run build`, output directory `dist`.
Optionally set env var `NODE_VERSION=22`.
