# Narcisse Triano Racing #88

Official website for Narcisse Triano, F4 driver with Kiwi Motorsport in the Formula Pro USA Western Championship, on the road to F1 Academy. The site's main job is landing sponsors.

Built with [Astro](https://astro.build) and Tailwind CSS v4. It's a fully static site, so it can be hosted anywhere for free.

## Pages

| Route | What's on it |
|---|---|
| `/` | Hero, stat strip, story and "road so far" timeline, why partner, photo gallery, tier preview |
| `/partner` | Full sponsorship pitch: tiers, in-kind, merch, the $100K car goal, partner wall, contact form |
| `/404` | Off-track page |

The sponsorship deck is sent on request only (through the contact form), so it is not hosted on the site.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Requires Node 22+.

## Editing content

Nearly everything lives in **`src/data/site.ts`**: stats, timeline, tiers, gallery captions, social links, GoFundMe and merch links, fundraising progress, and the partner list. Change it there and both pages update.

**Photos.** Images live in `public/images/`. Each photo has a full-size version and a `-sm` version (720px wide) that phones download instead.

| File | Where it shows |
|---|---|
| `hero.jpg` | Home hero (purple #188 at Laguna Seca) |
| `headshot.jpg` | Story section portrait |
| `podium.jpg`, `laguna-pits.jpg`, `sonoma-888-a.jpg`, `in-car.jpg`, `sonoma-888-b.jpg`, `practice-car.jpg` | Home gallery |
| `signature-white.webp`, `signature-red.webp`, `signature.webp` | NTriano logo (header, footer, quote, partner page) |
| `merch-front.webp`, `merch-back.webp` | Merch section on the partner page |

Current photos came from screenshots, so swap in full-size originals when Narcisse sends them (same file names, plus a 720px `-sm` copy). Only use photos of cars she has raced (#188, #888); the black and yellow car is a practice car. Gallery captions, crop position, and alt text are in `site.ts`.

**Partners.** Add sponsors to the `partners` array in `site.ts` (logos go in `public/partners/`). Empty slots show "Your brand here" up to four total.

**Fundraising progress.** Update `fundraising.raised` in `site.ts` as money comes in. Set it to `null` to hide the bar.

**Tier prices.** Prices are kept in `site.ts` but hidden on the site, per Narcisse. Set `showTierPrices = true` to show them.

**Links.** GoFundMe (`donateUrl`), Square merch links (`shop`), and socials (`contact`) are all in `site.ts`.

**Brand colors and fonts.** Defined once in `src/styles/global.css` under `@theme`.

## Contact form

Without setup, the form opens the visitor's email app with everything pre-filled. To have it send directly instead:

1. Create a free form at [formspree.io](https://formspree.io) pointed at Narcisse's email.
2. Copy the form ID (the part after `/f/`).
3. Locally: put it in `.env` as `PUBLIC_FORMSPREE_ID=xxxx`. On GitHub: Settings > Secrets and variables > Actions > Variables, add `PUBLIC_FORMSPREE_ID`.

## Deploying (test build on GitHub Pages)

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages on every push to `main`. The test site lives at:

**https://curiouskiwii.github.io/NarciseTriano/**

1. Repo Settings > Pages > Source: **GitHub Actions**.
2. Push to `main`.

Because the site is served from a subfolder, `astro.config.mjs` sets `base: "/NarciseTriano"`, and every internal link goes through the `u()` helper in `src/lib/url.ts`. Use `u("/some-path")` for any new internal link or asset.

Note: GitHub Pages on a private repo requires GitHub Pro (or Team/Enterprise). On a free account, make the repo public or Pages won't publish.

### Moving to narcissetriano.com later

1. In `astro.config.mjs`, set `site` to `https://narcissetriano.com` and remove `base`.
2. Add `public/CNAME` containing `narcissetriano.com`.
3. At the registrar, point the apex domain at GitHub Pages (A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and add a `www` CNAME to `curiouskiwii.github.io`. Then tick "Enforce HTTPS" in Pages settings.

## Before launch checklist

- [ ] Replace screenshot photos with full-size originals.
- [ ] Confirm where narcissetriano.com is registered (possibly Canva) and point it here.
- [ ] Set up Formspree so the contact form sends directly (optional).
- [ ] Update results and the 2027 schedule once the calendar and FIA license are set.
