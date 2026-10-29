"use client";

import {
  memo,
  startTransition,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useSpring,
  useScroll,
} from "framer-motion";
import {
  X,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  MessageCircle,
  Share2,
  Check,
  Plus,
  ZoomIn,
  Search,
  ShoppingBag,
  LayoutGrid,
  Square,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/*  Add a photo by adding ONE line to `rawItems`.                             */
/* -------------------------------------------------------------------------- */

type Category =
  | "Bridal Collection"
  | "Designer Blouses"
  | "our Brides and Models"
  | "Party Wear"
  | "Traditional Wear"
  | "Festive Collection"
  | "Custom Designs";

interface GalleryItem {
  id: number;
  file: string;
  src: string;
  alt: string;
  category: Category;
  categories: Category[];
  title: string;
  description: string;
  words: string[];
}

const BASE = "/images/dev_fashion/";
const WHATSAPP = "918098558923";
const PAGE_SIZE = 12;
const STORAGE_KEY = "devfashion:my-edit";
const NOTE_KEY = "devfashion:cart-note";
const NAME_KEY = "devfashion:cart-name";

const categoryDefaults: Record<Category, { title: string; description: string }> = {
  "Bridal Collection": {
    title: "Bridal Couture",
    description:
      "Heavy zari and stone embroidery, hand-finished over weeks by our master karigars for your most important day.",
  },
  "Designer Blouses": {
    title: "Designer Blouse",
    description:
      "Statement blouses with refined cutwork, beadwork and structured sleeves, tailored to your exact measurements.",
  },
  "our Brides and Models": {
    title: "our Brides and Models",
    description:
      "Statement blouses with refined cutwork, beadwork and structured sleeves, tailored to your exact measurements.",
  },
  "Party Wear": {
    title: "Evening Edit",
    description:
      "Contemporary silhouettes in premium fabrics, designed to be noticed from the moment you walk in.",
  },
  "Traditional Wear": {
    title: "Heritage Weave",
    description:
      "Timeless drapes and raw-silk blouses finished with hand-crafted zari borders.",
  },
  "Festive Collection": {
    title: "Festive Edit",
    description:
      "Lightweight, layered pieces with hand-painted details, made for celebration.",
  },
  "Custom Designs": {
    title: "Bespoke Creation",
    description:
      "Drafted by hand for a perfect fit, with bespoke necklines and handcrafted embellishments.",
  },
};

// [file, category (or a list of categories), optional title, optional description]
const rawItems: [string, Category | Category[], string?, string?][] = [
  ["bls1.jpg", "Custom Designs"],
  ["bls2.jpg", "Custom Designs"],
  ["bls3.jpg", "Custom Designs"],
  ["bls4.jpg", "Custom Designs"],
  ["bls5.jpg", "Custom Designs"],
  ["bls6.jpg", "Custom Designs"],
  ["bls7.jpg", "Custom Designs"],
  ["bls8.jpg", "Custom Designs"],
  ["bls9.jpg", "Custom Designs"],
  ["bls10.jpg", "Custom Designs"],
  ["bls11.jpg", "Custom Designs"],
  ["bls12.jpg", "Custom Designs"],
  ["bls12.jpg", "Custom Designs"],


["b1.jpg", "Custom Designs"],
["b2.jpg", "Custom Designs"],
["b3.jpg", "Custom Designs"],
["b4.jpg", "Custom Designs"],
["b5.jpg", "Custom Designs"],
["b6.jpg", "Custom Designs"],
["b7.jpg", "Custom Designs"],
["b8.jpg", "Custom Designs"],
["b9.jpg", "Custom Designs"],
["b10.jpg", "Custom Designs"],
["b11.jpg", "Custom Designs"],
["b12.jpg", "Custom Designs"],
["b13.jpg", "Custom Designs"],
["b14.jpg", "Custom Designs"],
["b15.jpg", "Custom Designs"],
["b16.jpg", "Custom Designs"],
["b17.jpg", "Custom Designs"],
["b18.jpg", "Custom Designs"],
["b19.jpg", "Custom Designs"],
["b20.jpg", "Custom Designs"],
["b21.jpg", "Custom Designs"],
["b22.jpg", "Custom Designs"],
["b23.jpg", "Custom Designs"],
["b24.jpg", "Custom Designs"],
["b25.jpg", "Custom Designs"],
["b26.jpg", "Custom Designs"],
["b27.jpg", "Custom Designs"],
["b28.jpg", "Custom Designs"],
["b29.jpg", "Custom Designs"],
["b30.jpg", "Custom Designs"],
["b31.jpg", "Custom Designs"],
["b32.jpg", "Custom Designs"],
["b33.jpg", "Custom Designs"],
["b34.jpg", "Custom Designs"],
["b35.jpg", "Custom Designs"],


["b36.jpeg", "Custom Designs"],
["b37.jpeg", "Custom Designs"],
["b38.jpeg", "Custom Designs"],
["b39.jpeg", "Custom Designs"],
["b40.jpeg", "Custom Designs"],
["b41.jpeg", "Custom Designs"],
["b42.jpeg", "Custom Designs"],
["b43.jpeg", "Custom Designs"],
["b44.jpeg", "Custom Designs"],
["b45.jpeg", "Custom Designs"],
["b46.jpeg", "Custom Designs"],
["b47_nivi_main.jpeg", "Custom Designs"],
["b48.jpeg", "Custom Designs"],
["b49.jpeg", "Custom Designs"],
["b50.jpeg", "Custom Designs"],
["b51.jpeg", "Custom Designs"],
["b52.jpeg", "Custom Designs"],
["b53.jpeg", "Custom Designs"],
["b54.jpeg", "Custom Designs"],
["b55.jpeg", "Custom Designs"],
["b56.jpeg", "Custom Designs"],
["b57.jpeg", "Custom Designs"],
["b58.jpeg", "Custom Designs"],
["b59.jpeg", "Custom Designs"],
["b60.jpeg", "Custom Designs"],
["b61.jpeg", "Custom Designs"],
["b62.jpeg", "Custom Designs"],
["b63.jpeg", "Custom Designs"],

  ["old_blouse1.jpg", "Custom Designs"],
  ["old_blouse2.jpg", "Custom Designs"],
  ["old_blouse4.jpg", "Custom Designs"],
  ["old_blouse5.jpg", "Custom Designs"],
  ["aari1.jpg", "Custom Designs"],
  ["aari2.jpg", "Custom Designs"],
  ["aari3.jpg", "Custom Designs"],
  ["aari4.jpg", "Custom Designs"],
  ["aari5.jpg", "Custom Designs"],
  ["aari6.jpg", "Custom Designs"],
  ["aari7.jpg", "Custom Designs"],
  ["aari8.jpg", "Custom Designs"],

["lan_bls1.jpg", "Custom Designs"],
["lan_bls2.jpg", "Custom Designs"],
["lan_bls3.jpg", "Custom Designs"],
["lan_bls4.jpg", "Custom Designs"],
["lan_bls5.jpg", "Custom Designs"],
["lan_bls6.jpg", "Custom Designs"],
["lan_bls7.jpg", "Custom Designs"],
["lan_bls8.jpg", "Custom Designs"],
["lan_bls9.jpg", "Custom Designs"],
["lan_bls10.jpg", "Custom Designs"],
["lan_bls11.jpg", "Custom Designs"],
["lan_bls12.jpg", "Custom Designs"],
["lan_bls13.jpg", "Custom Designs"],
["lan_bls14.jpg", "Custom Designs"],
["lan_bls15.jpg", "Custom Designs"],
["lan_bls16.jpg", "Custom Designs"],
["lan_bls17.jpg", "Custom Designs"],
["lan_bls18.jpg", "Custom Designs"],
["lan_bls19.jpg", "Custom Designs"],
["lan_bls20.jpg", "Custom Designs"],
["lan_bls21.jpg", "Custom Designs"],
["lan_bls22.jpg", "Custom Designs"],
["lan_bls23.jpg", "Custom Designs"],
["lan_bls24.jpg", "Custom Designs"],
["lan_bls25.jpg", "Custom Designs"],
["lan_bls26.jpg", "Custom Designs"],
["lan_bls27.jpg", "Custom Designs"],


["client1.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client2.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client3.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client4.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client5.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client6.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client7.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client8.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client9.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client10.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client11.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client12.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client13.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client14.jpg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["client15.jpg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],



["nivi1.jpg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["nivi2.jpg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["nivi3.jpg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["nivi4.jpg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["nivi5.jpg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["nivi6.jpg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["nivi7.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["nivi8.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["nivi9.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["nivi10.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["nivi11.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["nivi12.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],
["nivi13.jpeg", ["Bridal Collection", "Custom Designs","our Brides and Models"]],

  ["deeps2.jpeg", "Custom Designs", "Luxury Ethnic Editorial", "Intricately detailed custom gown featuring bespoke neckline contours, handcrafted embellishments, and smooth pastel lining."],
  ["sadhana_main.png", "Bridal Collection", "Royal Velvet Aurora", "Dr. Sadhana · Dentist & Model | precision by profession, elegance by nature. Dressed by Dev Fashion. ஒவ்வொரு தையலிலும் நுணுக்கம், ஒவ்வொரு புன்னகையிலும் நேர்த்தி."],
  ["ammu.jpeg", "Designer Blouses", "Sheer Cutwork Blouse", "Modern sheer net back blouse with floral cutwork, fine bead borders and structured elbow-length sleeves."],
  ["deeps1.jpeg", "Traditional Wear", "Banarasi Heritage Styling", "A luxury drape matched with a raw-silk elbow sleeve blouse featuring hand-crafted zari borders."],
  ["ammu_deeps.jpeg", "Festive Collection", "Pastel Meadow Lehenga", "A lightweight, layered georgette lehenga featuring hand-painted floral elements."],
  ["ammu_sai.jpeg", "Custom Designs", "Tailoring Perfection", "Every pattern is hand-drafted by our master tailors to guarantee the perfect custom fit."],
  ["sadha_bls1.jpeg", "Bridal Collection", "Bridal Lehenga Panel", "Premium heavy zari and stone embroidery panels crafted over weeks by professional karigars."],
  ["sadhana_back.jpg", "Party Wear", "Contemporary Indo-Western", "Off-shoulder designer pattern in premium raw silk with soft pleating details."],


  ["mom_kid.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["kid3.jpg", "Custom Designs","our Brides and Models"],

  ["sadhana_beach_chudi.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_blue2.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_red_chudi.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_smile_flowers.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_smile_udha.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_smile5.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_smile6.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_temple.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_vilet.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_vilet2.png", ["Party Wear", "Custom Designs","our Brides and Models"]],

  ["sadhana_bw.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_smile4.jpg", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_beach1.jpg", ["Custom Designs", "Traditional Wear","our Brides and Models"]],
  ["sadhana_beach2.jpg", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_beach3.jpg", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_blue.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_kid1.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_kid2.png", ["Party Wear", "Festive Collection","our Brides and Models"]],
  ["sadhana_main.png", ["Party Wear", "Festive Collection","our Brides and Models"]],
  ["sadhana_orange.png", "Custom Designs"],
  ["sadhana_orange2.png", ["Party Wear", "Custom Designs","our Brides and Models"]],
  ["sadhana_red.png", ["Custom Designs", "Traditional Wear","our Brides and Models"]],
  ["sadhana_red2.png", ["Custom Designs", "Traditional Wear","our Brides and Models"]],
  ["sadhana_red3.png", ["Custom Designs", "Traditional Wear","our Brides and Models"]],
  ["sadhana_smile1.jpg", ["Custom Designs", "Traditional Wear","our Brides and Models"]],
  ["sadhana_smile2.jpg", ["Custom Designs", "Traditional Wear","our Brides and Models"]],
  ["sadhana_smile2_2.jpg", ["Custom Designs", "Traditional Wear","our Brides and Models"]],
  ["sadhana_smile3.jpg", ["Custom Designs", "Traditional Wear","our Brides and Models"]],
  ["sadhana_yello.jpg", ["Custom Designs", "Traditional Wear","our Brides and Models"]],
  ["sadhana1.png", ["Custom Designs", "Traditional Wear","our Brides and Models"]],
  ["sadhana2.jpeg", ["Custom Designs", "Traditional Wear","our Brides and Models"]],
  ["sadhana3.jpeg", ["Custom Designs", "Traditional Wear","our Brides and Models"]],



  ...Array.from({ length: 30 }, (_, i): [string, Category] => [
    `bls_port${i + 1}.jpg`,
    "Custom Designs",
  ]),

  ...Array.from({ length: 28 }, (_, i): [string, Category] => [
    `lan_bls${i + 1}.jpg`,
    "Bridal Collection",
  ]),
  ["custom_drs1.jpg", "Bridal Collection"],
];

// Merge duplicate files so the same photo never appears twice.
const mergedRaw: [string, Category[], string?, string?][] = (() => {
  const map = new Map<string, [string, Category[], string?, string?]>();
  rawItems.forEach(([file, cat, title, description]) => {
    const cats: Category[] = Array.isArray(cat) ? cat : [cat];
    const existing = map.get(file);
    if (!existing) {
      map.set(file, [file, [...cats], title, description]);
    } else {
      cats.forEach((c) => {
        if (!existing[1].includes(c)) existing[1].push(c);
      });
      if (!existing[2] && title) existing[2] = title;
      if (!existing[3] && description) existing[3] = description;
    }
  });
  return Array.from(map.values());
})();

const splitWords = (s: string) => s.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);

// Extra words so customers can find things by what they call them.
const aliases: [RegExp, string][] = [
  [/bls|blouse/i, "blouse blouses"],
  [/aari/i, "aari embroidery handwork"],
  [/kid|mom/i, "kids child children mother"],
  [/chudi/i, "churidar chudidar"],
  [/mehandhi|mehndi/i, "mehndi mehandi"],
  [/couple/i, "couple"],
];

const galleryItems: GalleryItem[] = (() => {
  const counters: Partial<Record<Category, number>> = {};
  return mergedRaw.map(([file, cats, title, description], index) => {
    const category = cats[0];
    const defaults = categoryDefaults[category];
    let finalTitle = title;
    if (!finalTitle) {
      counters[category] = (counters[category] ?? 0) + 1;
      finalTitle = `${defaults.title} ${String(counters[category]).padStart(2, "0")}`;
    }
    const fileBase = file.replace(/\.[^.]+$/, "");
    const extra = aliases.filter(([re]) => re.test(fileBase)).map(([, w]) => w).join(" ");
    const words = Array.from(
      new Set(splitWords(`${finalTitle} ${cats.join(" ")} ${fileBase} ${extra}`))
    );
    return {
      id: index + 1,
      file,
      src: `${BASE}${file}`,
      alt: `${finalTitle} – Dev Fashion`,
      category,
      categories: cats,
      title: finalTitle,
      description: description ?? defaults.description,
      words,
    };
  });
})();

const categories: ("All" | Category)[] = [
  "All",
  "Bridal Collection",
  "Designer Blouses",
  "Party Wear",
  "Traditional Wear",
  "Festive Collection",
  "Custom Designs",
];

const searchSuggestions = ["bridal", "blouse", "aari", "lehenga", "kids", "party"];

/* Hero slideshow: b1.jpg ... b35.jpg, all inside public/images/dev_fashion/ */
const HERO_FOLDER = "/images/dev_fashion/";
const HERO_PHOTOS = Array.from({ length: 35 }, (_, i) => `${HERO_FOLDER}b${i + 1}.jpg`);

function HeroPhoto({ src, priority }: { src: string; priority: boolean }) {
  const [failed, setFailed] = useState(false);

  // only shows if one file is really missing
  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center p-6 text-center text-xs text-stone-500">
        Could not load <code className="mx-1">{src}</code>
      </div>
    );
  }

  return (
    // plain <img>: no image optimizer, and exactly one request per photo
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Dev Fashion blouse design"
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-contain"
    />
  );
}

const SLIDE_MS = 4500;
const ZOOM = 2.4;

const pad = (n: number) => String(n).padStart(2, "0");
const EASE = [0.22, 1, 0.36, 1] as const;

const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

// Hides the file name in links. Old links (#look=bls11.jpg) still work.
const encodeLook = (file: string) =>
  btoa(file).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

const decodeLook = (token: string) => {
  try {
    return atob(token.replace(/-/g, "+").replace(/_/g, "/"));
  } catch {
    return token;
  }
};


/* -------------------------------------------------------------------------- */
/*  Design tokens (warm ivory + champagne gold)                               */
/* -------------------------------------------------------------------------- */

const IVORY = "bg-[#faf7f2]";
const GOLD_TEXT = "text-[#9a7b36]";
const GOLD_BG = "bg-[#9a7b36]";
const HAIR = "border-stone-900/10";
const serif = "font-serif";

/* -------------------------------------------------------------------------- */
/*  Slim ticker under the hero                                                */
/* -------------------------------------------------------------------------- */

const tickerWords = [
  "Hand-embroidered",
  "Made to measure",
  "Virtual measurements",
  "Bridal couture",
  "Designer blouses",
  "Aari work",
];

function Marquee() {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={key === "b"}>
      {tickerWords.map((w) => (
        <span key={w} className={`flex items-center gap-12 whitespace-nowrap ${serif} text-lg italic text-stone-500`}>
          {w}
          <span className={`${GOLD_TEXT} text-xs`}>✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`mt-16 overflow-hidden border-y ${HAIR} py-5 sm:mt-24`}>
      <style>{`@keyframes dfm-ticker{to{transform:translateX(-50%)}}.dfm-ticker{animation:dfm-ticker 50s linear infinite}@media (prefers-reduced-motion:reduce){.dfm-ticker{animation:none}}`}</style>
      <div className="dfm-ticker flex w-max">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Product card: aligned grid, quiet hover                                   */
/* -------------------------------------------------------------------------- */

interface CardProps {
  item: GalleryItem;
  index: number;
  priority: boolean;
  inCart: boolean;
  onOpen: (index: number) => void;
  onToggle: (src: string) => void;
}

const Card = memo(function Card({ item, index, priority, inCart, onOpen, onToggle }: CardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="group relative"
    >
      <button
        onClick={() => onOpen(index)}
        aria-label={`View ${item.title}`}
        className="block w-full text-left"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-200">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            quality={70}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
            priority={priority}
            className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.05]"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />
          <span className="pointer-events-none absolute inset-3 hidden border border-white/0 transition-colors duration-500 md:block md:group-hover:border-white/60" />
          <span className="pointer-events-none absolute left-3 top-3 text-[10px] tracking-[0.25em] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            {pad(index + 1)}
          </span>
          <span className="pointer-events-none absolute inset-x-0 bottom-5 hidden translate-y-2 items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white opacity-0 transition-all duration-500 md:flex md:group-hover:translate-y-0 md:group-hover:opacity-100">
            View design <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.25} />
          </span>
        </div>

        <figcaption className="mt-4 text-center">
          <p className={`text-[10px] font-medium uppercase tracking-[0.22em] ${GOLD_TEXT}`}>
            {item.category}
          </p>
          <p className={`mt-1.5 truncate ${serif} text-base text-stone-900 sm:text-lg`}>{item.title}</p>
        </figcaption>
      </button>

      {/* add to cart: sits on the photo, top right, 44px tap area */}
      <button
        onClick={() => onToggle(item.src)}
        aria-label={inCart ? "Remove from cart" : "Add to cart"}
        aria-pressed={inCart}
        className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center"
      >
        <motion.span
          key={inCart ? "on" : "off"}
          initial={{ scale: inCart ? 0.6 : 1 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 520, damping: 14 }}
          className={`flex h-8 w-8 items-center justify-center rounded-full shadow-sm backdrop-blur-sm ${
            inCart ? "bg-stone-900 text-white" : "bg-white/90 text-stone-900"
          }`}
        >
          {inCart ? <Check className="h-4 w-4" strokeWidth={1.5} /> : <Plus className="h-4 w-4" strokeWidth={1.25} />}
        </motion.span>
      </button>
    </motion.figure>
  );
});

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/*  stickyTop: height (px) of your fixed site navbar (0 if not fixed).        */
/* -------------------------------------------------------------------------- */

export default function GalleryLightbox({ stickyTop = 0 }: { stickyTop?: number }) {
  const [selected, setSelected] = useState<"All" | Category>("All");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cols, setCols] = useState<1 | 2>(2);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [active, setActive] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);
  const [saved, setSaved] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [custName, setCustName] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [copied, setCopied] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const gridRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const sentinelRef = useRef<HTMLDivElement>(null);
  const storageReady = useRef(false);
  const hashChecked = useRef(false);
  const lastFocus = useRef<HTMLElement | null>(null);
  const firstQuery = useRef(true);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });


  /* ---- cart persistence ---- */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setSaved(parsed.filter((s) => typeof s === "string"));
      }
      setNote(localStorage.getItem(NOTE_KEY) ?? "");
      setCustName(localStorage.getItem(NAME_KEY) ?? "");
    } catch {}
    storageReady.current = true;
  }, []);

  useEffect(() => {
    if (!storageReady.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      localStorage.setItem(NOTE_KEY, note);
      localStorage.setItem(NAME_KEY, custName);
    } catch {}
  }, [saved, note, custName]);

  /* ---- open a design from a shared link (#look=token) ---- */
  useEffect(() => {
    const m = window.location.hash.match(/^#look=(.+)$/);
    if (m) {
      const raw = decodeURIComponent(m[1]);
      const file = galleryItems.some((i) => i.file === raw) ? raw : decodeLook(raw);
      const idx = galleryItems.findIndex((i) => i.file === file);
      if (idx >= 0) {
        setDirection(1);
        setActive(idx);
      }
    }
    hashChecked.current = true;
  }, []);

  const savedSet = useMemo(() => new Set(saved), [saved]);
  const savedItems = useMemo(
    () => saved.map((src) => galleryItems.find((i) => i.src === src)).filter((i): i is GalleryItem => Boolean(i)),
    [saved]
  );

  const toggleSaved = useCallback((src: string) => {
    setSaved((prev) => (prev.includes(src) ? prev.filter((s) => s !== src) : [...prev, src]));
  }, []);

  useEffect(() => {
    if (sheetOpen && saved.length === 0) setSheetOpen(false);
  }, [sheetOpen, saved.length]);

  /* ---- search + filter ---- */
  const tokens = useMemo(() => splitWords(deferredQuery), [deferredQuery]);
  const isSearching = tokens.length > 0;

  const queryMatched = useMemo(
    () =>
      tokens.length
        ? galleryItems.filter((i) => tokens.every((t) => i.words.some((w) => w.startsWith(t))))
        : galleryItems,
    [tokens]
  );

  const filtered = useMemo(
    () => (selected === "All" ? queryMatched : queryMatched.filter((i) => i.categories.includes(selected))),
    [queryMatched, selected]
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: queryMatched.length };
    queryMatched.forEach((i) => i.categories.forEach((c) => (map[c] = (map[c] ?? 0) + 1)));
    return map;
  }, [queryMatched]);

  const slides = HERO_PHOTOS;
  const [slide, setSlide] = useState(0);
  const [slidePaused, setSlidePaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || slidePaused || active !== null || slides.length < 2) return;
    const t = setTimeout(() => setSlide((s) => (s + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [slide, slidePaused, active, reduceMotion, slides.length]);

  const stepSlide = (d: number) => setSlide((s) => (s + d + slides.length) % slides.length);

  const nearSlide = (i: number) => {
    const d = Math.abs(i - slide);
    return Math.min(d, slides.length - d) <= 1;
  };

  const shown = filtered.slice(0, visible);
  const current = active !== null ? filtered[active] : null;
  const showHero = selected === "All" && !isSearching;
  const hasFilter = isSearching || selected !== "All";

  /* ---- keep the address bar in sync so any open design can be shared ---- */
  useEffect(() => {
    if (!hashChecked.current) return;
    const { pathname, search, hash } = window.location;
    if (current) {
      window.history.replaceState(null, "", `${pathname}${search}#look=${encodeLook(current.file)}`);
    } else if (hash.startsWith("#look=")) {
      window.history.replaceState(null, "", `${pathname}${search}`);
    }
  }, [current]);

  useEffect(() => {
    setZoomed(false);
  }, [current?.id]);

  /* ---- helpers ---- */
  const ensureGridVisible = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const barH = barRef.current?.offsetHeight ?? 52;
    const top = grid.getBoundingClientRect().top;
    if (top < stickyTop + barH) {
      window.scrollTo({ top: window.scrollY + top - stickyTop - barH - 24, behavior: "auto" });
    }
  }, [stickyTop]);

  useEffect(() => {
    if (firstQuery.current) {
      firstQuery.current = false;
      return;
    }
    setVisible(PAGE_SIZE);
    ensureGridVisible();
  }, [deferredQuery, ensureGridVisible]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 1400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      e.preventDefault();
      setSearchOpen(true);
      requestAnimationFrame(() => searchRef.current?.focus());
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ---- actions ---- */
  const openAt = useCallback((index: number) => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    searchRef.current?.blur();
    setDirection(1);
    setActive(index);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    setZoomed(false);
    requestAnimationFrame(() => lastFocus.current?.focus?.());
  }, []);

  const go = useCallback(
    (step: number) => {
      setDirection(step);
      setActive((prev) => (prev === null ? prev : (prev + step + filtered.length) % filtered.length));
    },
    [filtered.length]
  );

  const changeCategory = (c: "All" | Category) => {
    if (c === selected) return;
    ensureGridVisible();
    tabRefs.current[c]?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    setActive(null);
    startTransition(() => {
      setSelected(c);
      setVisible(PAGE_SIZE);
    });
  };

  const openSearch = () => {
    setSearchOpen(true);
    requestAnimationFrame(() => searchRef.current?.focus());
  };

  const clearAll = () => {
    setQuery("");
    setSearchOpen(false);
    if (selected !== "All") changeCategory("All");
  };

  const share = async (item: GalleryItem) => {
    const { origin: o, pathname, search } = window.location;
    const url = `${o}${pathname}${search}#look=${encodeLook(item.file)}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: `${item.title} · Dev Fashion`, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const pointToOrigin = (clientX: number, clientY: number) => {
    const r = stageRef.current?.getBoundingClientRect();
    if (!r) return;
    setOrigin({
      x: Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)),
      y: Math.min(100, Math.max(0, ((clientY - r.top) / r.height) * 100)),
    });
  };

  /* ---- infinite scroll ---- */
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible((v) => (v < filtered.length ? v + PAGE_SIZE : v));
      },
      { rootMargin: "900px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [filtered.length, visible]);

  /* ---- keyboard + scroll lock ---- */
  useEffect(() => {
    if (active === null && !sheetOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (sheetOpen) setSheetOpen(false);
        else if (active !== null) {
          if (zoomed) setZoomed(false);
          else close();
        }
      }
      if (!sheetOpen && active !== null && e.key === "ArrowRight") go(1);
      if (!sheetOpen && active !== null && e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active, sheetOpen, zoomed, go, close]);

  const nextItem = current ? filtered[(active! + 1) % filtered.length] : null;
  const prevItem = current ? filtered[(active! - 1 + filtered.length) % filtered.length] : null;

  /* ---- WhatsApp messages ---- */
  // Link that opens this design in the gallery, with the file name encoded.
  const lookUrl = (i: GalleryItem) =>
    typeof window === "undefined"
      ? ""
      : `${window.location.origin}${window.location.pathname}#look=${encodeLook(i.file)}`;

  const orderMessage = () => {
    const list = savedItems
      .map((i, n) => `${n + 1}. ${i.title} (${i.category})\n${lookUrl(i)}`)
      .join("\n\n");
    const noteLine = note.trim() ? `\n\nNote: ${note.trim()}` : "";
    const nameLine = custName.trim() ? `\n\nName: ${custName.trim()}` : "";
    return `Hi Dev Fashion, I'd like to order these designs:\n\n${list}${noteLine}${nameLine}`;
  };

  const label = "text-[10px] font-medium uppercase tracking-[0.24em]";
  const searchVisible = searchOpen || query.length > 0;

  /* ------------------------------------------------------------------------ */
  return (
    <section className={`relative w-full overflow-x-clip ${IVORY} pb-32 text-stone-900`}>
      {/* ------------------------------ Hero slideshow (b1 to b35) ----------- */}
      {showHero && (
        <>
          <div className="boutique-container pt-6 sm:pt-12">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* LEFT: the photo, shown in full (nothing is cropped) */}
              <motion.div
                onPanEnd={(_, info) => {
                  if (info.offset.x < -50) stepSlide(1);
                  else if (info.offset.x > 50) stepSlide(-1);
                }}
                style={{ touchAction: "pan-y" }}
                onPointerEnter={(e) => e.pointerType === "mouse" && setSlidePaused(true)}
                onPointerLeave={(e) => e.pointerType === "mouse" && setSlidePaused(false)}
                className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden border border-stone-200 bg-stone-100 shadow-[0_30px_60px_-35px_rgba(40,25,10,0.4)] lg:mx-0"
              >
                {slides.map((src, i) => {
                  if (!nearSlide(i)) return null;
                  const isActive = i === slide;
                  return (
                    <motion.div
                      key={src}
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                      className="absolute inset-0"
                      aria-hidden={!isActive}
                    >
                      <HeroPhoto src={src} priority={i === 0} />
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* RIGHT: text */}
              <div className="mx-auto flex w-full max-w-none flex-col lg:mx-0 ">
                <div className="flex items-center gap-4">
                  <span className={`h-px w-10 ${GOLD_BG}`} />
                  <p className={`${label} ${GOLD_TEXT}`}>Dev Fashion Bridel Blouse Designer</p>
                </div>

                <h2 className={`mt-6 ${serif} text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl`}>
                  {/* Blouses stitched to your story */}
                  Brides, Make Sure You Get Your Dream Outfit To Celebrate The Special Day!
                </h2>

                <p className="mt-6 text-[15px] leading-[1.5] text-stone-600 text-justify">
                  {/* Hand-embroidered bridal and designer blouses, drafted around your measurements and
                  finished by our master karigars. Every piece is made to order. */}
                  Your big special day is here and a special day calls for a special outfit.
                  Your wedding blouses should be the most special one as it creates lifetime memories. 
                  The wedding outfit should make you the most beautiful bride. 
                  It should not only complement your personality but should be comfortable as well.
                    <br /> <br />
                  The bridal Blouses should be made with utmost vigilance so that it doesn’t bother you on your big day.
                  Even the minutest details like the sleeves of the readymade bridal blouse or any latkan on the bridal saree blouse cannot be ignored. 
                  In recent times, every bridal Blouse is customizable. 
                  You can customize your blouse as per your personal liking, 
                  to give a unique touch to your dream dress. The outfit should reflect and enhance your personality
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <button
                    onClick={() => gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                    className="group inline-flex h-12 items-center gap-3 bg-stone-900 px-8 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#9a7b36]"
                  >
                    View collection
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.25} />
                  </button>
                  <a
                    href={waLink("Hi Dev Fashion, I would like to talk to a stylist.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-stone-500 transition-colors hover:text-stone-900"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
                    Speak to a stylist
                  </a>
                </div>

                {/* previous / next + counter */}
                <div className={`mt-12 flex items-center gap-5 border-t ${HAIR} pt-6`}>
                  <button
                    onClick={() => stepSlide(-1)}
                    aria-label="Previous photo"
                    className="flex h-11 w-11 items-center justify-center border border-stone-300 transition-colors hover:border-stone-900"
                  >
                    <ArrowLeft className="h-4 w-4" strokeWidth={1.25} />
                  </button>
                  <button
                    onClick={() => stepSlide(1)}
                    aria-label="Next photo"
                    className="flex h-11 w-11 items-center justify-center border border-stone-300 transition-colors hover:border-stone-900"
                  >
                    <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
                  </button>
                  <span className="text-[11px] tracking-[0.3em] text-stone-500" aria-live="polite">
                    <span className="text-stone-900">{pad(slide + 1)}</span> / {pad(slides.length)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Marquee />
        </>
      )}

      {/* ------------------------------ Section title ------------------------ */}
      <div className={`boutique-container relative text-center ${showHero ? "pt-20 sm:pt-28" : "pt-24 sm:pt-32"} pb-10 sm:pb-12`}>
        <h1 className={`${serif} text-4xl font-light tracking-tight sm:text-6xl`}>
          {isSearching ? "Results" : "The Collections"}
        </h1>
        <div className="mx-auto mt-6 flex items-center justify-center gap-4">
          <span className={`h-px w-12 ${GOLD_BG}/60`} />
          <span className={`${GOLD_TEXT} text-xs`}>✦</span>
          <span className={`h-px w-12 ${GOLD_BG}/60`} />
        </div>
        <p className="mt-5 text-5x3 text-stone-500 text-center" aria-live="polite">
          Shop our curated collection of blouse designs. From finely selected hand-embroidered bridal blouses <br />
          to more ready-to-wear blouses, here at Dev Fashion we have a range of designs that are <br />
          perfect for every occasion.

        </p>
        <p className={`mt-5 ${label} text-stone-500`} aria-live="polite">
          <motion.span
            key={filtered.length}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-block tabular-nums text-stone-900"
          >
            {pad(filtered.length)}
          </motion.span>{" "}
          {filtered.length === 1 ? "piece" : "pieces"}
        </p>

        {/* phones: small grid or large grid */}
        <div className="absolute bottom-3 right-3 flex items-center sm:hidden" role="group" aria-label="Grid size">
          <button
            onClick={() => setCols(2)}
            aria-label="Two per row"
            aria-pressed={cols === 2}
            className={`flex h-11 w-9 items-center justify-center ${cols === 2 ? "text-stone-900" : "text-stone-300"}`}
          >
            <LayoutGrid className="h-[18px] w-[18px]" strokeWidth={1.25} />
          </button>
          <button
            onClick={() => setCols(1)}
            aria-label="One per row"
            aria-pressed={cols === 1}
            className={`flex h-11 w-9 items-center justify-center ${cols === 1 ? "text-stone-900" : "text-stone-300"}`}
          >
            <Square className="h-[18px] w-[18px]" strokeWidth={1.25} />
          </button>
        </div>
      </div>

      {/* ----------------------- Sticky search + filter bar ------------------ */}
      <div
        ref={barRef}
        className={`sticky z-30 w-full border-y ${HAIR} bg-[#faf7f2]/90 backdrop-blur-md`}
        style={{ top: stickyTop }}
      >
        <motion.span
          aria-hidden
          style={{ scaleX: progress }}
          className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left ${GOLD_BG}`}
        />

        <div className="boutique-container flex items-center gap-3 sm:gap-6">
          {!searchVisible && (
            <button
              onClick={openSearch}
              aria-label="Search designs"
              className="-ml-2 flex h-14 w-11 shrink-0 items-center justify-center lg:hidden"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.25} />
            </button>
          )}

          <ul
            role="tablist"
            aria-label="Gallery categories"
            className={`min-w-0 flex-1 snap-x gap-8 overflow-x-auto sm:gap-10 lg:justify-start [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              searchVisible ? "hidden lg:flex" : "flex"
            }`}
          >
            {categories.map((c) => {
              const isActive = selected === c;
              const count = counts[c] ?? 0;
              return (
                <li key={c} role="presentation" className="shrink-0 snap-center">
                  <button
                    role="tab"
                    aria-selected={isActive}
                    ref={(el) => {
                      tabRefs.current[c] = el;
                    }}
                    onClick={() => changeCategory(c)}
                    className={`relative flex h-14 items-center gap-1.5 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-200 ${
                      isActive
                        ? "text-stone-900"
                        : count === 0 && isSearching
                        ? "text-stone-300"
                        : "text-stone-400 hover:text-stone-700"
                    }`}
                  >
                    {c}
                    <sup className="text-[8px] tracking-normal">{count}</sup>
                    {isActive && (
                      <motion.span
                        layoutId="tab-underline"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                        className={`absolute inset-x-0 bottom-0 h-[2px] ${GOLD_BG}`}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              searchRef.current?.blur();
            }}
            className={`items-center ${searchVisible ? "flex flex-1" : "hidden"} lg:flex lg:w-64 lg:flex-none xl:w-72`}
          >
            <label htmlFor="gallery-search" className="sr-only">
              Search designs by name
            </label>
            <Search className="pointer-events-none h-4 w-4 shrink-0 text-stone-400" strokeWidth={1.25} />
            <input
              id="gallery-search"
              ref={searchRef}
              type="search"
              inputMode="search"
              enterKeyHint="search"
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name…  ( / )"
              className="h-14 min-w-0 flex-1 appearance-none bg-transparent px-3 text-base outline-none placeholder:text-stone-400 sm:text-sm [&::-webkit-search-cancel-button]:hidden"
            />
            {(query || searchOpen) && (
              <button
                type="button"
                onClick={() => {
                  if (query) {
                    setQuery("");
                    searchRef.current?.focus();
                  } else {
                    setSearchOpen(false);
                  }
                }}
                aria-label={query ? "Clear search" : "Close search"}
                className="-mr-3 flex h-14 w-11 shrink-0 items-center justify-center text-stone-500 hover:text-stone-900"
              >
                <X className="h-[18px] w-[18px]" strokeWidth={1.25} />
              </button>
            )}
          </form>
        </div>

        {searchVisible && !query && (
          <ul className="boutique-container flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
            {searchSuggestions.map((s) => (
              <li key={s} className="shrink-0">
                <button
                  onClick={() => setQuery(s)}
                  className="h-9 border border-stone-300 px-4 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-600 active:bg-stone-900 active:text-white"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* active filters summary */}
      {hasFilter && (
        <div className="boutique-container mt-6 flex items-center justify-between gap-4 text-xs text-stone-500">
          <p className="min-w-0 truncate">
            <span className="text-stone-900">{filtered.length}</span> {filtered.length === 1 ? "design" : "designs"}
            {isSearching && (
              <>
                {" "}for <span className="text-stone-900">“{deferredQuery.trim()}”</span>
              </>
            )}
            {selected !== "All" && (
              <>
                {" "}in <span className="text-stone-900">{selected}</span>
              </>
            )}
          </p>
          <button
            onClick={clearAll}
            className={`h-11 shrink-0 border-b border-stone-900 text-[10px] font-medium uppercase tracking-[0.22em] text-stone-900`}
          >
            Clear all
          </button>
        </div>
      )}

      {/* --------------------------------- Grid ------------------------------ */}
      <div
        ref={gridRef}
        className={`boutique-container mt-10 grid gap-x-4 gap-y-12 sm:mt-14 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-20 ${
          cols === 1 ? "grid-cols-1" : "grid-cols-2"
        }`}
      >
        {shown.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            index={index}
            priority={index < 2}
            inCart={savedSet.has(item.src)}
            onOpen={openAt}
            onToggle={toggleSaved}
          />
        ))}
      </div>

      {/* nothing found */}
      {filtered.length === 0 && (
        <div className="boutique-container flex flex-col items-center py-16 text-center sm:py-24">
          <Search className="h-8 w-8 text-stone-300" strokeWidth={1} />
          <p className={`mt-6 ${serif} text-2xl`}>No designs found</p>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-stone-500">
            {isSearching
              ? `Nothing matches “${deferredQuery.trim()}”${selected !== "All" ? ` in ${selected}` : ""}. Try another word, or tell our stylist what you are looking for.`
              : "There are no designs in this category yet."}
          </p>
          <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
            <button
              onClick={clearAll}
              className="flex h-12 items-center justify-center border border-stone-900 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors hover:bg-stone-900 hover:text-white"
            >
              Clear search &amp; filters
            </button>
            <a
              href={waLink(
                isSearching
                  ? `Hi Dev Fashion, I'm looking for a design like: ${deferredQuery.trim()}`
                  : "Hi Dev Fashion, I'd like to discuss a custom design."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 bg-stone-900 text-[11px] font-medium uppercase tracking-[0.22em] text-white"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
              Ask our stylist
            </a>
          </div>
        </div>
      )}

      {/* sentinel + end note */}
      <div ref={sentinelRef} className="h-px" />
      {filtered.length > 0 && (
        <div className="mt-24 flex flex-col items-center gap-8 px-5 text-center">
          {visible < filtered.length ? (
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="h-12 border border-stone-900 px-10 text-[11px] font-medium uppercase tracking-[0.25em] transition-colors hover:bg-stone-900 hover:text-white"
            >
              Load more
            </button>
          ) : (
            <p className={`${serif} text-lg italic text-stone-400`}>
              That is the whole collection · {pad(filtered.length)} pieces
            </p>
          )}
          <div className={`flex w-full max-w-md flex-col items-center border-t ${HAIR} pt-8`}>
            <p className={`${serif} text-2xl font-light`}>Do not see what you love?</p>
            <a
              href={waLink("Hi Dev Fashion, I'd like to discuss a custom design.")}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-5 inline-flex h-12 items-center gap-2 ${GOLD_BG} px-8 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-stone-900`}
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
              Design something just for you
            </a>
          </div>
        </div>
      )}

      {/* back to top */}
      <AnimatePresence>
        {showTop && active === null && !sheetOpen && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            style={{ bottom: "calc(env(safe-area-inset-bottom) + 1.25rem)" }}
            className="fixed right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-white/95 shadow-lg backdrop-blur sm:right-8"
          >
            <ArrowUp className="h-5 w-5" strokeWidth={1.25} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* cart button */}
      <AnimatePresence>
        {saved.length > 0 && active === null && !sheetOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={() => setSheetOpen(true)}
            style={{ bottom: "calc(env(safe-area-inset-bottom) + 1.25rem)" }}
            className="fixed left-1/2 z-40 flex h-12 -translate-x-1/2 items-center gap-3 rounded-full bg-stone-900 px-7 text-[11px] font-medium uppercase tracking-[0.25em] text-white shadow-2xl"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.25} />
            My cart
            <span className="text-white/60">({saved.length})</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* cart sheet */}
      <AnimatePresence>
        {sheetOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSheetOpen(false)}
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 sm:items-stretch sm:justify-end"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="My cart"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className={`flex max-h-[92dvh] w-full max-w-md flex-col ${IVORY} px-6 pt-3 sm:max-h-none`}
              style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
            >
              <div className="mx-auto mb-4 h-px w-12 bg-stone-300 sm:hidden" />
              <div className={`flex items-center justify-between border-b ${HAIR} pb-4 sm:pt-4`}>
                <h3 className={`${serif} text-2xl font-light`}>
                  My cart <span className="text-stone-400">({savedItems.length})</span>
                </h3>
                <div className="-mr-3 flex items-center">
                  <button
                    onClick={() => {
                      setSaved([]);
                      setSheetOpen(false);
                    }}
                    className="h-11 px-3 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-stone-900"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => setSheetOpen(false)}
                    aria-label="Close"
                    className="flex h-11 w-11 items-center justify-center"
                  >
                    <X className="h-5 w-5" strokeWidth={1.25} />
                  </button>
                </div>
              </div>

              <ul className={`min-h-[96px] flex-1 divide-y ${HAIR.replace("border", "divide")} overflow-y-auto overscroll-contain`}>
                {savedItems.map((i) => (
                  <li key={i.id} className="flex items-center gap-4 py-4">
                    <div className="relative h-24 w-[72px] shrink-0 bg-stone-200">
                      <Image src={i.src} alt="" fill quality={50} sizes="72px" className="object-cover object-top" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-[10px] font-medium uppercase tracking-[0.2em] ${GOLD_TEXT}`}>{i.category}</p>
                      <p className={`mt-1 truncate ${serif} text-base`}>{i.title}</p>
                    </div>
                    <button
                      onClick={() => toggleSaved(i.src)}
                      aria-label={`Remove ${i.title}`}
                      className="flex h-11 w-11 items-center justify-center text-stone-400 hover:text-stone-900"
                    >
                      <X className="h-4 w-4" strokeWidth={1.25} />
                    </button>
                  </li>
                ))}
              </ul>

              <div className={`mt-4 space-y-2.5 border-t ${HAIR} pt-4`}>
                <input
                  value={custName}
                  onChange={(e) => setCustName(e.target.value)}
                  autoComplete="name"
                  placeholder="Your name (optional)"
                  className="h-11 w-full border border-stone-300 bg-white px-3 text-base outline-none placeholder:text-stone-400 focus:border-stone-900 sm:text-sm"
                />
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={2}
                  placeholder="Note for your stylist: neck style, sleeves, colour, delivery date…"
                  className="w-full resize-none border border-stone-300 bg-white px-3 py-2.5 text-base outline-none placeholder:text-stone-400 focus:border-stone-900 sm:text-sm"
                />
              </div>

              <a
                href={waLink(orderMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex h-14 items-center justify-center gap-3 bg-stone-900 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-[#9a7b36]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
                Order via WhatsApp
              </a>
              <p className="mt-3 text-center text-[11px] text-stone-500">
                Your stylist receives the full list with design links.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* -------------------------------- Viewer ----------------------------- */}
      <AnimatePresence>
        {current && active !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-50 flex h-[100dvh] flex-col ${IVORY} text-stone-900`}
          >
            <div className={`flex items-center justify-between border-b ${HAIR} px-5 pt-[max(0.25rem,env(safe-area-inset-top))] sm:px-10`}>
              <span className="text-[11px] tracking-[0.2em] text-stone-500" aria-live="polite">
                <span className="text-stone-900">{pad(active + 1)}</span> / {pad(filtered.length)}
              </span>
              <span className={`${serif} hidden text-lg tracking-wide sm:block`}>Dev Fashion</span>
              <div className="-mr-3 flex items-center">
                {saved.length > 0 && (
                  <button
                    onClick={() => setSheetOpen(true)}
                    aria-label={`Open cart, ${saved.length} items`}
                    className="relative flex h-12 w-12 items-center justify-center"
                  >
                    <ShoppingBag className="h-5 w-5" strokeWidth={1.25} />
                    <span className="absolute right-1.5 top-2.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-stone-900 px-1 text-[9px] font-medium text-white">
                      {saved.length}
                    </span>
                  </button>
                )}
                <button
                  onClick={() => share(current)}
                  aria-label="Share this design"
                  className="relative flex h-12 w-12 items-center justify-center"
                >
                  {copied ? <Check className="h-5 w-5" strokeWidth={1.25} /> : <Share2 className="h-5 w-5" strokeWidth={1.25} />}
                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute right-1 top-full z-10 mt-1 whitespace-nowrap bg-stone-900 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white"
                      >
                        Link copied
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <button onClick={close} aria-label="Close" autoFocus className="flex h-12 w-12 items-center justify-center">
                  <X className="h-6 w-6" strokeWidth={1} />
                </button>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
              {/* stage: swipe to browse, drag down to close, tap to zoom */}
              <div ref={stageRef} className="relative min-h-0 flex-1 overflow-hidden bg-stone-100">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={current.id}
                    custom={direction}
                    variants={{
                      enter: (d: number) => ({ opacity: 0, x: d * 60 }),
                      center: { opacity: 1, x: 0, y: 0 },
                      exit: (d: number) => ({ opacity: 0, x: d * -60 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: EASE }}
                    drag={!zoomed}
                    dragDirectionLock
                    dragSnapToOrigin
                    dragElastic={0.25}
                    onDragEnd={(_, info) => {
                      const { x, y } = info.offset;
                      if (Math.abs(y) > 110 && Math.abs(y) > Math.abs(x)) close();
                      else if (x < -70) go(1);
                      else if (x > 70) go(-1);
                    }}
                    onTap={(_, info) => {
                      if (zoomed) {
                        setZoomed(false);
                      } else {
                        pointToOrigin(info.point.x - window.scrollX, info.point.y - window.scrollY);
                        setZoomed(true);
                      }
                    }}
                    onPointerMove={(e) => zoomed && pointToOrigin(e.clientX, e.clientY)}
                    style={{ touchAction: zoomed ? "none" : undefined }}
                    className={`absolute inset-0 ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
                  >
                    <motion.div
                      animate={{ scale: zoomed ? ZOOM : 1 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      style={{ transformOrigin: `${origin.x}% ${origin.y}%` }}
                      className="relative h-full w-full p-3 sm:p-8"
                    >
                      <div className="relative h-full w-full">
                        <Image
                          src={current.src}
                          alt={current.alt}
                          fill
                          quality={90}
                          sizes="(max-width: 1024px) 100vw, 65vw"
                          priority
                          draggable={false}
                          className="pointer-events-none select-none object-contain"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                  {!zoomed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/85 px-4 py-1.5 text-[9px] font-medium uppercase tracking-[0.22em] text-stone-600 backdrop-blur-sm"
                    >
                      <ZoomIn className="h-3 w-3" strokeWidth={1.5} />
                      Tap to zoom
                    </motion.span>
                  )}
                </AnimatePresence>

                {nextItem && (
                  <Image src={nextItem.src} alt="" fill quality={90} sizes="(max-width: 1024px) 100vw, 65vw" loading="eager" className="hidden" />
                )}
                {prevItem && (
                  <Image src={prevItem.src} alt="" fill quality={90} sizes="(max-width: 1024px) 100vw, 65vw" loading="eager" className="hidden" />
                )}

                <button
                  onClick={() => go(-1)}
                  aria-label="Previous"
                  className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-stone-900 transition-colors hover:bg-white sm:flex"
                >
                  <ArrowLeft className="h-5 w-5" strokeWidth={1.25} />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next"
                  className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-stone-900 transition-colors hover:bg-white sm:flex"
                >
                  <ArrowRight className="h-5 w-5" strokeWidth={1.25} />
                </button>
              </div>

              {/* details + actions */}
              <aside
                className={`border-t ${HAIR} px-5 pt-5 sm:px-10 lg:flex lg:w-[420px] lg:flex-col lg:justify-between lg:border-l lg:border-t-0 lg:p-12 xl:w-[460px]`}
                style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className={`h-px w-8 ${GOLD_BG}`} />
                      <p className={`${label} ${GOLD_TEXT}`}>{current.category}</p>
                    </div>
                    <h2 className={`mt-4 ${serif} text-2xl font-light leading-tight tracking-tight sm:text-3xl lg:mt-6 lg:text-4xl`}>
                      {current.title}
                    </h2>
                    <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-stone-600 lg:mt-6 lg:line-clamp-none lg:text-[15px] lg:leading-[1.85]">
                      {current.description}
                    </p>
                    <p className={`mt-8 hidden border-t ${HAIR} pt-6 text-xs leading-relaxed text-stone-500 lg:block`}>
                      Measurements can be taken virtually or in person. Standard stitching takes 7–10 business days;
                      expedited delivery is available.
                    </p>
                  </div>
                  {savedSet.has(current.src) && (
                    <button
                      onClick={() => toggleSaved(current.src)}
                      className="-mr-2 flex h-11 shrink-0 items-center px-2 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500 underline underline-offset-4 hover:text-stone-900"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="mt-5 flex flex-col gap-2.5 lg:mt-0 lg:gap-3">
                  {savedSet.has(current.src) ? (
                    <button
                      onClick={() => setSheetOpen(true)}
                      className="flex h-12 items-center justify-center gap-2 bg-stone-900 px-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#9a7b36] lg:h-14"
                    >
                      <Check className="h-4 w-4" strokeWidth={1.5} />
                      In cart · View cart ({saved.length})
                    </button>
                  ) : (
                    <button
                      onClick={() => toggleSaved(current.src)}
                      className="flex h-12 items-center justify-center gap-2 bg-stone-900 px-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#9a7b36] lg:h-14"
                    >
                      <Plus className="h-4 w-4" strokeWidth={1.5} />
                      Add to cart
                    </button>
                  )}

                  <div className="flex gap-2.5 lg:flex-col lg:gap-3">
                    <a
                      href={waLink(
                        `Hi Dev Fashion, I'd like to order this design:\n\n${current.title} (${current.category})\n${lookUrl(current)}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 flex-1 items-center justify-center gap-2 border border-stone-900 px-3 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:bg-stone-900 hover:text-white lg:h-14 lg:flex-none"
                    >
                      <MessageCircle className="h-4 w-4" strokeWidth={1.25} />
                      <span className="sm:hidden">Order now</span>
                      <span className="hidden sm:inline">Order this on WhatsApp</span>
                    </a>
                    <Link
                      href={`/contact?service=${encodeURIComponent(current.category)}&design=${encodeURIComponent(current.title)}#booking`}
                      onClick={close}
                      className="flex h-11 flex-1 items-center justify-center gap-2 border border-stone-300 px-3 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900 lg:h-14 lg:flex-none"
                    >
                      <span className="sm:hidden">Customize</span>
                      <span className="hidden sm:inline">Request customization</span>
                      <ArrowUpRight className="hidden h-3.5 w-3.5 sm:block" strokeWidth={1.25} />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}