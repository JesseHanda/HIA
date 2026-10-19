# CHALLO Kids Club — landing page

Astro + Tailwind (AstroWind template), static output.

## Edit your content

Everything editable lives in **`src/data/program.ts`** (search for `EDIT`):

| Placeholder                          | Where                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------- |
| `<!-- VIDEO / YOUTUBE EMBED URL -->` | `integrations.videoEmbedUrl` (e.g. `https://www.youtube.com/embed/ID`) |
| `<!-- WEB3FORMS ACCESS KEY -->`      | `integrations.web3formsAccessKey` (free key at web3forms.com)          |
| Dates, location                      | `program.upcomingNote` and the Details section                         |
| Contact email / phone                | `program.contactEmail`, `program.contactPhone` (hidden while empty)    |
| Background-check / first-aid badges  | `safety` (flip to `true` only when accurate)                           |
| Gallery photos                       | `gallery[].src` → files in `public/gallery/`                           |
| Educator photo                       | `photo` in `src/components/hia/Educator.astro`                         |

Pricing, checkout and registration are hidden for now; the enquiry form (`EnquiryModal.astro`) replaces them. The previous registration modal, Stripe/e-Transfer settings and pricing section are in git history.

Also set `site.site` in `src/config.yaml` and the Sitemap line in `public/robots.txt` to your real domain.

## Commands

`npm install` · `npm run dev` · `npm run build` · `npm run check`

## Deploy on Cloudflare

Connect the repo (root = this folder) and use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (reads `wrangler.jsonc`, uploads `dist/`)
- Optional env var: `NODE_VERSION=22`

If you use the older Pages flow instead, there is no deploy command: build `npm run build`, output directory `dist`.
