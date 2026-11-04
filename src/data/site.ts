/**
 * All of the site's editable content lives here.
 * Update stats, results, tiers, photos, and links in this one file;
 * the pages pick up the changes automatically.
 *
 * Sources: Narcisse's sponsorship prospectus and her website questionnaire (Nov 2026).
 */

export const driver = {
  name: "Narcisse Triano",
  firstName: "Narcisse",
  /** The 88 stays the same; the leading digit changes by event (#188, #888). */
  carNumber: "88",
  team: "Kiwi Motorsport",
  series: "Formula Pro USA Western Championship",
  seriesShort: "Formula Pro USA West",
  category: "F4",
  goal: "F1 Academy",
  nextSeason: "2027",
  location: "Phoenix, AZ",
  tagline: "Purpose. Speed. Impact.",
  quote:
    "Racing is my purpose and my drive, and it's how I want to inspire others to chase the impossible.",
};

export const contact = {
  email: "narcisseontrack08@gmail.com",
  instagram: { handle: "narcisseontrack", url: "https://instagram.com/narcisseontrack" },
  tiktok: { handle: "narcisseontrack", url: "https://www.tiktok.com/@narcisseontrack" },
  youtube: { handle: "narcisseontrack", url: "https://www.youtube.com/@narcisseontrack" },
  website: "narcissetriano.com",
};

/** "Support my journey" button. Fans can give here; sponsors use the partner page. */
export const donateUrl = "https://gofund.me/33d6aca6a";

/** Merch is sold through Square. Each product has its own Square link. */
export const shop = {
  products: "NTriano hoodies, hats, and shirts",
  links: [
    { label: "Signature hoodie", url: "https://square.link/u/n8Zj51lS" },
    { label: "Hats", url: "https://square.link/u/YPXTtmJz" },
  ],
};

/** Big red stat strip. */
export const stats = [
  { value: "3", label: "Podiums", note: "From 4 races in my first season" },
  { value: "1", label: "Pole position", note: "Plus P2 in qualifying twice" },
  { value: "200K+", label: "Avg. monthly views", note: "Across social platforms" },
  { value: "5.3K+", label: "Social followers", note: "4.1K Instagram, 1.2K TikTok" },
];

/** Ticker ribbon at the top of the home page. */
export const ticker = [
  `${driver.category} // ${driver.series}`,
  `Team // ${driver.team}`,
  "3 podiums + 1 pole in my first season",
  `Next // Full ${driver.nextSeason} championship`,
  `Destination // ${driver.goal}`,
  "Partnerships open now",
];

/** 2026 season results, race by race. */
export const results = {
  season: "2026",
  summary: `Ran a partial 2026 season with 3 podiums, now raising support to compete in the full ${driver.nextSeason} championship.`,
  weekends: [
    {
      track: "Sonoma Raceway",
      month: "April 2026",
      car: "#888",
      races: [
        { name: "Race 1", result: "DNF" },
        { name: "Race 2", result: "P3" },
      ],
    },
    {
      track: "WeatherTech Raceway Laguna Seca",
      month: "June 2026",
      car: "#188",
      races: [
        { name: "Race 1", result: "P3" },
        { name: "Race 2", result: "P3" },
      ],
    },
  ],
  qualifying: "1 pole position and P2 in qualifying twice.",
};

/** "Road so far" timeline. Oldest first. */
export const timeline = [
  {
    label: "Start",
    title: "K1 Speed karting",
    body: "Learned racecraft in the K1 Speed league in Phoenix.",
    done: true,
  },
  {
    label: "Italy",
    title: "Track time in Italy",
    body: "Seat time at Motodromo Castelletto di Branduzzo.",
    done: true,
  },
  {
    label: "Licensed",
    title: "SCCA license at Radford Racing School",
    body: "Earned my SCCA competition license, then trained with Radford and Kiwi Motorsport.",
    done: true,
  },
  {
    label: "2026",
    title: "First F4 season",
    body: "Partial season in Formula Pro USA with Kiwi Motorsport: 4 races, 3 podiums, 1 pole.",
    done: true,
  },
  {
    label: "2027",
    title: "Full championship season",
    body: "A full season with Kiwi Motorsport in the Formula Pro USA Western Championship.",
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
 * Fundraising goal. Set `raised` to a number to show the progress bar,
 * or null to hide it.
 */
export const fundraising = {
  goal: 200_000,
  raised: 30_000 as number | null,
  breakdown: [
    { label: `Full ${driver.nextSeason} season`, amount: 100_000 },
    { label: "F1 Academy", amount: 100_000 },
  ],
  summary: `$100K gets me through the full ${driver.nextSeason} season, and $100K goes toward F1 Academy. I'm building toward it one partner and one supporter at a time.`,
};

export const story = {
  /** Short version for the homepage. */
  short:
    "I started late, without money or connections, and with no idea where to begin. Through my faith, I decided to chase racing anyway, and I haven't stopped since.",
  intro:
    "I'm Narcisse Triano, a 23-year-old F4 driver with Kiwi Motorsport. I'm outgoing, determined, and completely passionate about racing, but I love people just as much as the track. I'm working my way toward F1 Academy, and I want to bring as many people along on the journey as I can.",
  full: [
    "I played sports my whole life and always dreamed of going pro. After high school, that dream started to fade. It felt like the door had closed.",
    "A few years later I found Jesus, and my faith changed everything. I realized that with Him by my side, I could chase anything, so I went after the thing I'd always been obsessed with: racing.",
    "On paper it didn't make sense. I was starting late, I didn't come from money, and I had no idea where to begin. But I started anyway. I researched, took the first step, and kept pushing no matter what. I've been throwing everything I have into it ever since.",
  ],
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
    title: "Proven on track",
    body: "3 podiums and a pole position from my first 4 races in Formula Pro USA.",
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

/** Prices stay in the data but are hidden on the site. Set true to show them. */
export const showTierPrices = false;
export const tiersStartingAt = "$1,000";

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
    bestFit: "One anchor brand funding the full season",
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
  "Car placement is reserved for the Title Partner, the single partnership that funds my full season. Every other tier is built around suit, helmet, and social media placement.";

/**
 * Gallery photos. Each has a full-size file and a "-sm" version for phones.
 * `position` controls the crop (CSS object-position).
 */
export const gallery = [
  {
    src: "/images/podium.jpg",
    alt: "Narcisse on the third step of the podium, holding the trophy overhead",
    tag: "Podium",
    title: "P3 in the winner's circle",
    caption: "One of three podiums in my first season.",
    position: "50% 30%",
  },
  {
    src: "/images/laguna-pits.jpg",
    alt: "Narcisse in the purple #188 car in the paddock at Laguna Seca",
    tag: "Laguna Seca // June",
    title: "Car #188",
    caption: "Ready to roll out at Laguna Seca.",
    position: "50% 60%",
  },
  {
    src: "/images/sonoma-888-a.jpg",
    alt: "The orange #888 car on track at Sonoma Raceway",
    tag: "Sonoma // April",
    title: "Car #888",
    caption: "My first race weekend, at Sonoma.",
    position: "50% 55%",
  },
  {
    src: "/images/in-car.jpg",
    alt: "Narcisse strapped into the cockpit wearing a red and white helmet",
    tag: "Cockpit",
    title: "Strapped in",
    caption: "Getting ready for a practice session.",
    position: "50% 40%",
  },
  {
    src: "/images/sonoma-888-b.jpg",
    alt: "The orange #888 car through a corner at Sonoma Raceway",
    tag: "Sonoma // April",
    title: "On the attack",
    caption: "Carrying speed through the corner in #888.",
    position: "50% 50%",
  },
  {
    src: "/images/practice-car.jpg",
    alt: "The black and yellow practice car on track",
    tag: "Testing",
    title: "Practice days",
    caption: "Seat time in the practice car between race weekends.",
    position: "50% 55%",
  },
];

export const photoCredit = "Photos by family & friends.";

export const heroImage = {
  src: "/images/hero.jpg",
  alt: "Narcisse in the purple #188 car at Laguna Seca",
  label: "#188 // Laguna Seca",
};

export const headshot = { src: "/images/headshot.jpg", alt: "Narcisse Triano in an Astars race suit, holding a helmet" };

/** NTriano signature, her main logo. White for dark backgrounds, original gradient for accents. */
export const logo = {
  white: "/images/signature-white.webp",
  red: "/images/signature-red.webp",
  color: "/images/signature.webp",
  alt: "NTriano",
};

/** Merch shown on the partner page (from narcissetriano.com). */
export const merch = [
  { src: "/images/merch-front.webp", alt: "Black NTriano hoodie with a photo of Narcisse in her race suit" },
  { src: "/images/merch-back.webp", alt: "Back of the hoodie with the car, checkered flags, and the NTriano signature" },
];

/**
 * Partners. Add a logo file to /public/partners and list it like:
 *   { name: "Acme Co", logo: "/partners/acme.svg", url: "https://acme.com", tier: "Gold" }
 */
export const partners: { name: string; logo?: string; url?: string; tier?: string }[] = [
  { name: "Racing Ritual" },
];

export const nav = [
  { label: "Story", href: "/#story" },
  { label: "Results", href: "/#results" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Partner", href: "/partner" },
  { label: "Contact", href: "/partner#contact" },
];
