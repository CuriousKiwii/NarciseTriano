/**
 * All of the site's editable content lives here.
 * Update stats, tiers, photos, and contact info in this one file;
 * the pages pick up the changes automatically.
 *
 * Source of truth: Narcisse's 2026 Sponsorship Prospectus.
 */

export const driver = {
  name: "Narcisse Triano",
  firstName: "Narcisse",
  carNumber: "15",
  team: "Kiwi Motorsport",
  series: "F4 West Coast Championship",
  seriesShort: "F4 West Coast",
  goal: "F1 Academy",
  season: "2026",
  tagline: "Purpose. Speed. Impact.",
  quote:
    "Racing is my purpose and my drive, and it's how I want to inspire others to chase the impossible.",
};

export const contact = {
  email: "narcisseontrack08@gmail.com",
  // Shown only on the partner page. Set to "" to hide it everywhere.
  phone: "480-599-0648",
  instagram: { handle: "narcisseontrack", url: "https://instagram.com/narcisseontrack" },
  tiktok: { handle: "narcisseontrack", url: "https://www.tiktok.com/@narcisseontrack" },
  website: "narcissetriano.com",
};

/** Big red stat strip. Update these as the season goes on. */
export const stats = [
  { value: "3 of 4", label: "Podiums", note: "First four races of the season" },
  { value: "200K+", label: "Avg. monthly views", note: "Across social platforms, growing monthly" },
  { value: "5.2K+", label: "Social followers", note: "~4K Instagram, ~1.2K TikTok" },
  { value: "F1 Academy", label: "The goal", note: "Racing alongside F1 race weekends" },
];

/** Ticker ribbon at the top of the home page. */
export const ticker = [
  `Season ${driver.season} // ${driver.series}`,
  `Team // ${driver.team}`,
  "3 podiums in first 4 races",
  "Next step // Owning my own car",
  `Destination // ${driver.goal}`,
  "Partnerships open now",
];

/** "Road so far" timeline. Newest last. */
export const timeline = [
  {
    label: "Licensed",
    title: "SCCA license at Radford Racing School",
    body: "Earned my SCCA competition license at Radford Racing School in Arizona.",
    done: true,
  },
  {
    label: "Racecraft",
    title: "K1 Speed Racing League, Phoenix",
    body: "Sharpened racecraft wheel to wheel in the Phoenix league.",
    done: true,
  },
  {
    label: "Now",
    title: "Formula 4 with Kiwi Motorsport",
    body: "Competing in the F4 West Coast Championship. Three podiums in my first four races.",
    done: true,
  },
  {
    label: "Next",
    title: "Owning my own race car",
    body: "A full season in my own car, so I can keep building my program and prove myself.",
    done: false,
  },
  {
    label: "Goal",
    title: "F1 Academy",
    body: "Racing on the F1 weekend schedule, in front of F1's global broadcast audience.",
    done: false,
  },
];

/**
 * Car ownership goal. Set `raised` to a number to show a progress bar,
 * or leave it null to show the goal without a progress meter.
 */
export const carGoal = {
  amount: 100_000,
  raised: null as number | null,
  summary:
    "Owning my race car for the season is the real, immediate goal, and it costs roughly $100,000. I'm building toward it one partnership at a time.",
};

export const whyPartner = [
  {
    title: "A growing audience",
    body: "Averaging 200,000+ views per month across social platforms, with steady month-over-month growth.",
  },
  {
    title: "On the suit and helmet",
    body: "Your brand is on my suit and helmet at every race weekend, plus in the photo and video content from each event.",
  },
  {
    title: "Active on two platforms",
    body: "About 4K followers on Instagram and 1.2K on TikTok, both growing steadily.",
  },
  {
    title: "A real relationship",
    body: "You work with me directly. I represent your brand on and off the track.",
  },
];

export const getInEarly = [
  "International exposure through F1's broadcast and media reach once I'm racing at F1 Academy level.",
  "Ground-floor pricing. Today's tiers are a fraction of what this exposure will cost once I'm there.",
  "A better brand story. Partners who backed me early are part of the come-up, and the payoff.",
];

export type Tier = {
  name: string;
  price: string;
  bestFit: string;
  includesPrevious?: string;
  perks: string[];
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    name: "Bronze",
    price: "$1,000 – $1,500",
    bestFit: "Local shops, gyms, restaurants, family-owned businesses",
    perks: [
      "One dedicated social media post per month, plus regular Story mentions",
      "Name and logo on the website partner page, with a link",
    ],
  },
  {
    name: "Silver",
    price: "$6,000 – $8,000",
    bestFit: "Regional businesses ready for real visibility",
    includesPrevious: "Bronze",
    perks: [
      "Logo on helmet OR fireproof suit (secondary placement)",
      "2+ social posts per month",
      "Mentioned in race-weekend recap posts",
    ],
  },
  {
    name: "Gold",
    price: "$10,000 – $15,000",
    bestFit: "Growth-focused brands wanting strong visibility",
    includesPrevious: "Silver",
    perks: [
      "Primary suit placement",
      "Featured on a co-branded merch drop",
      "Bio mention across all platforms and on the website homepage",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    price: "$25,000 – $30,000",
    bestFit: "Companies wanting a season-long brand partner",
    includesPrevious: "Gold",
    perks: [
      "Premium helmet placement, in addition to the suit",
      "Custom co-branded merch line (revenue share available)",
      "Race-weekend appearances and meet & greets",
    ],
  },
  {
    name: "Title Partner",
    price: "$100,000",
    bestFit: "One anchor brand funding full car ownership for the season",
    includesPrevious: "Platinum",
    perks: [
      "Primary livery and car placement, plus \"presented by\" naming rights",
      "Exclusive behind-the-scenes content series",
      "First right of refusal for future campaigns as I progress",
      "VIP paddock experience for your team and clients",
    ],
  },
];

export const tierNote =
  "Car placement is reserved for the Title Partner, the single partnership that funds full ownership of my race car for the season. Every other tier is built around suit, helmet, and social media placement.";

/**
 * Gallery photos. Drop image files into /public/images and set `src`
 * (for example "/images/podium.jpg"). Any photo without a file shows a
 * styled placeholder so the layout still looks right.
 */
export const gallery = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Narcisse's black and yellow #15 F4 car kicking up dust through a desert corner",
    tag: "Full send",
    title: "Desert corner",
    caption: "Carrying speed through the turn in the #15 car.",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "The #15 F4 car parked trackside at dusk",
    tag: "The machine",
    title: "Car #15",
    caption: "My Formula 4 car with Kiwi Motorsport.",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "A #15 formula car sliding through a corner in a cloud of tire smoke",
    tag: "Trackside",
    title: "Tire smoke",
    caption: "Finding the limit, one corner at a time.",
  },
];

export const heroImage = {
  src: "/images/hero.jpg",
  alt: "Narcisse Triano in the #15 F4 car on pit lane at sunset",
  label: "Kiwi Motorsport // F4 West Coast",
};

/** Cutout of Narcisse in her race suit, and her "Proud" signature mark. */
export const driverPortrait = { src: "/images/driver.webp", alt: "Narcisse Triano in her race suit and helmet" };
export const signature = { src: "/images/signature.webp", alt: "Narcisse's Proud signature" };

/** Merch shown on the partner page (from narcissetriano.com). */
export const merch = [
  { src: "/images/merch-front.webp", alt: "Black hoodie with a photo of Narcisse in her race suit" },
  { src: "/images/merch-back.webp", alt: "Back of the hoodie with the #15 car, checkered flags, and the Proud signature" },
];

/**
 * Current partners. While this is empty, the site shows open "your brand here"
 * slots. Add a logo file to /public/partners and list it like:
 *   { name: "Acme Co", logo: "/partners/acme.svg", url: "https://acme.com", tier: "Gold" }
 */
export const partners: { name: string; logo?: string; url?: string; tier?: string }[] = [];

export const nav = [
  { label: "Story", href: "/#story" },
  { label: "Season", href: "/#season" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Partner", href: "/partner" },
  { label: "Contact", href: "/partner#contact" },
];

/** The downloadable prospectus in /public. */
export const prospectusPdf = "/Narcisse-Triano-Sponsorship-Prospectus.pdf";
