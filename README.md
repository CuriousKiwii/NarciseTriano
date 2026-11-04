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

## Deploying

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages on every push to `main`. The site is live at **https://narcissetriano.com** (custom domain set in `public/CNAME` and in the repo's Settings > Pages).

The domain is registered through the church Canva account. Its DNS (Canva > Settings > Web domains > narcissetriano.com > Advanced settings) points at GitHub Pages:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | curiouskiwii.github.io |

**Reverting to the old Canva site:** in Canva, reconnect the domain to Canva on that same Advanced settings page. A full offline backup of the old site was taken on Nov 4, 2026 (separate zip), and the original design plus a copy are in the Canva account.

Internal links and assets go through the `u()` helper in `src/lib/url.ts`, so the site can also be built under a subfolder by setting `base` in `astro.config.mjs`.

## Before launch checklist

- [ ] Replace screenshot photos with full-size originals.
- [ ] Set up Formspree so the contact form sends directly (optional).
- [ ] Update results and the 2027 schedule once the calendar and FIA license are set.
