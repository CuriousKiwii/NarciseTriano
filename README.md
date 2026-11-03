# Narcisse Triano Racing #15

Official website for Narcisse Triano, Formula 4 driver with Kiwi Motorsport in the F4 West Coast Championship, on the road to F1 Academy. The site's main job is landing sponsors.

Built with [Astro](https://astro.build) and Tailwind CSS v4. It's a fully static site, so it can be hosted anywhere for free.

## Pages

| Route | What's on it |
|---|---|
| `/` | Hero, stat strip, story and "road so far" timeline, why partner, photo gallery, tier preview |
| `/partner` | Full sponsorship pitch: tiers, in-kind, merch, the $100K car goal, partner wall, contact form |
| `/404` | Off-track page |

The sponsorship prospectus PDF lives at `public/Narcisse-Triano-Sponsorship-Prospectus.pdf` and is linked from both pages.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Requires Node 22+.

## Editing content

Nearly everything lives in **`src/data/site.ts`**: stats, timeline, tiers, gallery captions, social handles, email, phone, and the partner list. Change it there and both pages update.

**Photos.** Drop images into `public/images/` with these names and they appear automatically. Until then a styled placeholder shows in each slot.

| File | Where it shows | Suggested size |
|---|---|---|
| `hero.jpg` | Home hero, large right panel | 1600 x 1000, landscape |
| `gallery-1.jpg` to `gallery-3.jpg` | Home gallery cards | 1200 x 900 |

**Partners.** When someone signs, add them to the `partners` array in `site.ts` and put their logo in `public/partners/`. The "Your brand here" slots go away once there's at least one partner.

**Fundraising progress.** Set `carGoal.raised` to a dollar amount to show a progress bar under the $100K goal. Leave it `null` to hide the bar.

**Brand colors and fonts.** Defined once in `src/styles/global.css` under `@theme`.

## Contact form

Without setup, the form opens the visitor's email app with everything pre-filled. To have it send directly instead:

1. Create a free form at [formspree.io](https://formspree.io) pointed at Narcisse's email.
2. Copy the form ID (the part after `/f/`).
3. Locally: put it in `.env` as `PUBLIC_FORMSPREE_ID=xxxx`. On GitHub: Settings > Secrets and variables > Actions > Variables, add `PUBLIC_FORMSPREE_ID`.

## Deploying

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages on every push to `main`.

1. Repo Settings > Pages > Source: **GitHub Actions**.
2. Push to `main`.
3. Custom domain: `public/CNAME` is set to `narcissetriano.com`. At the domain registrar, point the apex domain at GitHub Pages (A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) and add a `www` CNAME to `<github-username>.github.io`. Then tick "Enforce HTTPS" in Pages settings.

Netlify, Vercel, and Cloudflare Pages also work with zero config (build command `npm run build`, output folder `dist`). If you use one of those, delete the workflow file.

## Before launch checklist

- [ ] Confirm car number (`driver.carNumber`, currently **15**, carried over from the design mockup). Also update `public/favicon.svg` and `public/og.jpg` if it changes.
- [ ] Confirm season year and that stats are current (3 of 4 podiums, 200K+ views, 5.2K+ followers).
- [ ] Confirm Instagram/TikTok handles are `@narcisseontrack`.
- [ ] Decide whether the phone number should be public (`contact.phone`, set to `""` to hide).
- [ ] Add real race photos to `public/images/`.
- [ ] Set up Formspree (optional).
- [ ] Point the domain.
