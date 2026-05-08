# Landing Research — MotoRival v2 Framer-style

> Recherche realtime, avril 2026. Ciblé sur app moto PvP territorial, audience 25-45 ans EN+FR.
> Source primaire : Framer Marketplace, motion.dev docs, landingrabbit, designrush, lineardesign, klientboost.

---

## 1. Top templates Framer mobile-app (best-in-class 2025-2026)

| # | Template | URL | Sections clés | Animations signature | Force pour MotoRival | Faiblesse |
|---|----------|-----|---------------|----------------------|----------------------|-----------|
| 1 | **Capable** (free) | framer.com/marketplace/templates/capable/ | Hero, features, screenshots, testimonials, CTA, FAQ | Smooth fade-in, scroll-triggered reveal, light/dark | Gratuit, structure 4 pages, mobile-first | Trop "soft" pour la verticale moto edgy |
| 2 | **Lanzo** (free) | framer.com/marketplace/templates/lanzo/ | Hero, value-props, comparison, pricing, FAQ, footer | Sticky scroll, gradient blur, marquee logos | Pricing tiers prêts, comparaison visuelle | Manque de showcase device |
| 3 | **Vivid** | framer.com/marketplace/templates/vivid-mobile-app-showcase-template/ | Hero, demos, testimonials, pricing, multi-CTA | Demo videos auto-play, parallax screenshots | 4 pages, demos vidéo intégrées | Esthétique trop colorée vs Swiss |
| 4 | **Appit** | framer.com/marketplace/templates/appit/ | Hero, features, screenshots, testimonials | Dark, scroll reveal, screenshot stack | Dark mode natif aligné MotoGP edge | Que 4 pages |
| 5 | **FinTap** | framer.com/marketplace/templates/fintap/ | Hero, 3-step how it works, features, CTA | Scroll-driven, micro-interactions, gradient | "How it works" stepper réutilisable | Couleurs fintech à override |
| 6 | **Rythmiq** | framer.com/marketplace/templates/rythmiq/ | Hero, waitlist, features, story, footer | Scroll animations, looping animations | Looping animations = territoire-warfare feel | 4 pages seulement |
| 7 | **Mars** | framer.com/marketplace/templates/mars/ | Hero, features, pricing, testimonials, FAQ, blog | Multi-page, scroll reveal classique | 8 pages, structure SaaS complète | Pas spécifique mobile app |
| 8 | **Sticky** | framer.com/marketplace/templates/sticky/ | Hero, feature showcase, customer reviews | Sticky-scroll feature reveal | Pattern "sticky" = killer pour features moto | — |
| 9 | **Financier** | framer.com/marketplace/templates/financier-futuristic-design-with-ai-launchpad-pro/ | Hero, AI features, 7 pages | Fun micro-interactions, futuristic blur | Edgy futuristic = brand match | Cher, override lourd |
| 10 | **Tokko** ($49) | framer.com/marketplace/templates/tokko/ | Hero, features, slideshows, forms | 3D transforms, advanced animations | 3D transforms pour hex-zones GPS | Dense, à simplifier |
| 11 | **Grovia** ($99) | framer.com/marketplace/templates/grovia/ | Hero, case studies, process, integrations, testimonials, FAQ, pricing | Sticky scrolling, slideshows, advanced | Structure SaaS B2B-grade complète | Surdimensionné pour v1 |
| 12 | **Showu** | framer.com/marketplace/templates/showu/ | Hero device-mockup, features, pricing, FAQ | Device parallax, scroll-stack | Device-mockup hero = match exact | Standard, pas signature |

**Recommandation Jonny** : copier la structure de **Sticky** (sticky feature scroll) + hero device-mockup de **Showu** + how-it-works stepper de **FinTap**. Pas besoin d'acheter — c'est le pattern qui compte, on rebuild en React 19 + framer-motion.

Sources : [framerbite.com top 18 templates](https://framerbite.com/blog/best-mobile-app-framer-templates), [Bryn Taylor 11 best 2026](https://www.bryntaylor.co.uk/writing/best-landing-page-templates-for-framer), [Framer marketplace](https://www.framer.com/marketplace/).

---

## 2. Sections recommandées (ordre + spec)

| # | Section | Pourquoi | Pattern UI | Animation framer-motion | Skip si... |
|---|---------|----------|------------|-------------------------|------------|
| 1 | **Hero** (above fold) | 3-5 sec pour communiquer la valeur | H1 + sub + 2 CTA + device mockup à droite (desktop) / sous (mobile) | Stagger entrance, parallax device, gradient mesh subtil | Jamais |
| 2 | **Logo / press strip** | Crédibilité instantanée | Marquee horizontal logos (presse, app store badges, "as featured on") | `motion.div animate={{x: [0, -100%]}}` infinite | Pas de presse → remplacer par "Built in Switzerland" + langues |
| 3 | **Problem-agitate** | Activer la pain | 1 phrase bold + 3 frustrations concrètes | Fade + slide-up whileInView | Si audience hyper-aware |
| 4 | **How it works (3-step)** | Rassurer "c'est simple" | Stepper horizontal desktop / vertical mobile, screenshots | Scroll-linked progress bar, step-by-step reveal | Skip si produit auto-explicatif |
| 5 | **Features grid (Sticky scroll)** | Démontrer profondeur | Sticky left col copy + right col screenshot qui change au scroll | `useScroll` + `useTransform` opacity/y | Si <3 features, faire side-by-side |
| 6 | **Live demo / video preview** | Prouver que ça existe | Auto-play video muted ou GIF in-loop, max 15s | `whileInView` trigger play | Pas de vidéo prête |
| 7 | **Screenshots carousel** | Détails interface | Horizontal scroll snap, 5-7 screens iPhone | `dragConstraints`, snap, parallax tilt | Si déjà très visual ailleurs |
| 8 | **Comparison table** | Tuer concurrents | "Us vs RISER vs Strava vs calimoto" — 5 lignes max | Highlight row on hover, fade-in cells | Skip si pas de différentiation forte |
| 9 | **Social proof / testimonials** | Trust | 3 quotes courtes + photo + crew/handle | Stagger, hover-lift | Pre-launch → remplacer par "Founding Riders count: 247 / 1000" |
| 10 | **Pricing** | Conversion | 2 tiers (Weekly $2.99, Annual $49.99) + Founding Rider $29.99 anchor | Card hover-lift, "Most popular" badge pulse | Jamais |
| 11 | **FAQ (objection-busting)** | Catch les bouncers | Accordion, 6-8 questions ciblées objections | Layout animation expand | Jamais |
| 12 | **CTA stack final** | Dernière chance | Re-state H1 + App Store badges + "14-day free trial" | Sticky CTA mobile bottom | Jamais |
| 13 | **Language strip** | Marché multi-pays | 6 drapeaux/codes en footer ("EN · FR · DE · IT · ES · PT") | — | Skip si single-language |
| 14 | **Footer** | Legal + sitemap | 4 cols : Product / Company / Legal / Social | — | Jamais |

Pourquoi cet ordre : single conversion goal, CTA répétée 3x (hero / mid / final), social proof avant pricing pour faire baisser la résistance prix, FAQ après pricing pour neutraliser les "yeah but...".

Sources : [Linear ideal layout](https://lineardesign.com/blog/landing-page-layout/), [Magic UI 7 best practices](https://magicui.design/blog/saas-landing-page-best-practices), [DesignRush 15 best app landings 2026](https://www.designrush.com/best-designs/apps/trends/app-landing-pages), [Mobbin steppers UI](https://mobbin.com/glossary/stepper).

---

## 3. Copywriting frameworks

### 3.1 Hero — règle d'or

3-5 secondes pour communiquer la valeur. **Benefit-led, jamais feature-led.** Linear : "The issue tracker you'll enjoy using" — court, spécifique, gap de curiosité (klientboost / lineardesign).

**11 formules éprouvées** (source : landingrabbit) :

| Formule | Pattern | Exemple |
|---------|---------|---------|
| Comparison | "It's a new [X] for your [job]" | Air : "It's like Googling your creative work" |
| Delegation | "Make [pain] our job, not yours" | DayDream |
| Comparison-with-jobs | "[X] should be [adj] than [Y]" | Dosu : "Maintaining code should be easier than writing it" |
| Alternative | "A [leader] alternative with [benefit]" | Fathom : "A Google Analytics alternative that's simple & privacy-first" |
| Category disruption | "We finally fixed [category]" | Hey |
| Replacement | "Do [X], not [Y]" | Loom : "Share a video, not a calendar invite" |
| Direct benefit | "[Capability] and [outcome]" | Mercu : "Automate scheduling and reduce no-shows by 33%" |
| Simplified | "Your [X], [benefit]" | Slite : "Your company knowledge base, on autopilot" |
| Customer-focused | "Give your users [outcome]" | Supahub |
| Problem-to-benefit | "[Job] that won't become a [problem]" | Twist : "Work communication that won't distract you all day" |

### 3.2 Subhead — résolution objection

Pattern : `[expansion concrète du H1] + [objection-killer]`.
Exemple Linear : "Streamline issues, sprints, and product roadmaps."
Pour MotoRival : objection = "encore une app moto" → casser ça subhead.

### 3.3 Features — Feature → Benefit → Outcome

Standard 2026 (genesysgrowth). Au lieu de :

> ❌ "Hex-grid GPS tracking"

écrire :

> ✅ "Claim hex zones around you in real-time → see your territory grow on the map → ride more, dominate your city."

Triplet : capacité technique → ce que ça change pour l'user → résultat émotionnel/social.

### 3.4 Social proof — pre-launch

Pas encore de ratings → utiliser :
- "Founding Riders : 247 / 1000 spots claimed" (urgence + scarcity)
- "Built by riders, for riders. Genève, Switzerland." (trust géographique)
- Beta tester quotes (Discord, Telegram) avec handle + crew
- App Store Editor's Choice / featured (si possible) ou screenshots-mockup
- "As seen on" : moto blogs, Reddit r/motorcycles, etc.

### 3.5 Pricing — anchor + scarcity

Pattern recommandé :
- **Anchor haut** : Annual $49.99 (cross-out optionnel "$59.99 normal")
- **Most popular** : Annual avec 14-day trial
- **Scarcity** : Founding Rider $29.99/an, capped 1000, lifetime price-lock
- **Decoy** : Weekly $2.99 montre le coût "cher" si non-engagement
- Tableau comparatif clair (userpilot, group.app)

### 3.6 FAQ — objection-busting

48% des visiteurs bouncent sans interaction (cortes.design). FAQ catche ces bouncers. Questions à inclure pour MotoRival :

1. "Does it drain my battery?" (objection #1 GPS apps)
2. "Is my location private? Can people stalk me?"
3. "What if there's no one playing in my city?"
4. "Can I cancel anytime?"
5. "Does it work offline / spotty signal?"
6. "Why $49.99/year when Strava is $79?"
7. "iOS only? When Android?"
8. "What's the difference vs RISER / Strava?"

### 3.7 CTA — verbe d'action vs ROI promise

Tests montrent ROI promise > generic action :
- ❌ "Download now", "Get started"
- ✅ "Claim your first hex zone", "Start your 14-day free trial", "Become a Founding Rider"

Sources : [11 hero formulas landingrabbit](https://landingrabbit.com/blog/saas-website-hero-text), [9 hero layouts Medium](https://medium.com/dreamyhook-ai-redefining-the-future-of-intelligenc/hero-sections-that-print-money-9-layouts-with-copy-formulas-and-when-to-use-each-a7854d9808e1), [Genesys 2026 trends](https://genesysgrowth.com/blog/landing-page-conversion-stats-for-marketing-leaders), [Cortes design objections](https://www.cortes.design/post/design-landing-pages-around-objections).

---

## 4. Hooks hero candidates EN + FR (8)

Critères : <8 mots H1, benefit-led, casse l'objection "encore une app moto", évoque le territorial sans expliquer.

| # | Formule | EN | FR | Rationale |
|---|---------|------|------|-----------|
| 1 | Comparison | **Risk. On real motorcycles.** | **Risk. Sur de vraies motos.** | Référence cultu instantanée. 4 mots. Gap de curiosité immédiat. **Top pick.** |
| 2 | Replacement | **Ride a route. Claim a city.** | **Roule un trajet. Conquiers une ville.** | Action → outcome. Subhead : "Every kilometer paints a hex on your map." |
| 3 | Category disruption | **Your city is the leaderboard.** | **Ta ville, c'est le classement.** | Implique territoire + compétition. Très Apple/Linear style. |
| 4 | Direct benefit | **Turn every ride into territory.** | **Chaque trajet devient un territoire.** | Capability → outcome. "Turn X into Y" = formule 2025 dominante. |
| 5 | Loom-style | **Don't just ride. Conquer.** | **Roule pas. Conquiers.** | Replacement formula. Ultra-court, edgy MotoGP. |
| 6 | Simplified | **GPS warfare for motorcycles.** | **GPS warfare. À moto.** | Catégorie nouvelle déclarée. Subhead : "Hex zones, crews, leaderboards." |
| 7 | Problem-to-benefit | **Strava without the boring parts.** | **Strava, sans la partie ennuyeuse.** | Alternative formula direct. Risque legal mais effective. |
| 8 | Mercu-style | **Claim 100 hex zones in your first ride.** | **Claim 100 zones hex dès ton premier trajet.** | Spécifique + quantifié. Subhead : "No setup. GPS on, you're playing." |

**Recommandation Jonny** : tester #1 et #4 en A/B. #1 pour pure brand stickiness ("Risk on real motorcycles" est shareable, viral-able). #4 pour SEO + clarté.

---

## 5. Animations framer-motion à implémenter

Stack confirmée : React 19 + framer-motion (motion.dev). Code TypeScript, tree-shakeable.

### 5.1 Hero — stagger entrance

```tsx
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen">
      {["eyebrow", "h1", "sub", "cta"].map((key, i) => (
        <motion.div
          key={key}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          {/* content */}
        </motion.div>
      ))}
    </section>
  );
}
```

### 5.2 Hero device parallax (scroll-linked)

```tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroDevice() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.4]);

  return (
    <motion.div ref={ref} style={{ y, scale, opacity }}>
      <img src="/hero-device.webp" alt="MotoRival on iPhone" />
    </motion.div>
  );
}
```

### 5.3 Sticky-scroll feature reveal (Sticky template pattern)

```tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  { title: "Hex zones", img: "/feat-hex.webp" },
  { title: "Crews", img: "/feat-crew.webp" },
  { title: "Leaderboards", img: "/feat-board.webp" },
];

export function StickyFeatures() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center">
        {features.map((f, i) => {
          const start = i / features.length;
          const end = (i + 1) / features.length;
          const opacity = useTransform(
            scrollYProgress,
            [start - 0.1, start, end - 0.1, end],
            [0, 1, 1, 0]
          );
          return (
            <motion.div key={f.title} style={{ opacity }} className="absolute inset-0">
              <img src={f.img} alt={f.title} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
```

### 5.4 Scroll progress bar (top of page)

```tsx
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX, originX: 0 }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#FF1744] z-50"
    />
  );
}
```

### 5.5 Stagger reveal (sections)

```tsx
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {features.map((f) => (
        <motion.li key={f.id} variants={item}>{/* card */}</motion.li>
      ))}
    </motion.ul>
  );
}
```

### 5.6 Marquee logos (press strip)

```tsx
export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...items, ...items].map((src, i) => (
          <img key={i} src={src} alt="" className="h-8 opacity-60" />
        ))}
      </motion.div>
    </div>
  );
}
```

### 5.7 Hex-zone reveal (signature anim MotoRival)

Idée : map hexagones SVG qui s'allument au scroll, métaphore "claim territory".

```tsx
import { motion, useScroll, useTransform } from "framer-motion";

export function HexClaim() {
  const ref = useRef<SVGSVGElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <svg ref={ref} viewBox="0 0 800 600">
      {hexCoords.map((hex, i) => {
        const fillOpacity = useTransform(
          scrollYProgress,
          [i / hexCoords.length, (i + 1) / hexCoords.length],
          [0, 1]
        );
        return (
          <motion.polygon
            key={hex.id}
            points={hex.points}
            fill="#FF1744"
            style={{ fillOpacity }}
          />
        );
      })}
    </svg>
  );
}
```

### Performance

motion.dev tourne les anims scroll-linked sur le `ScrollTimeline` natif quand dispo → hardware-accelerated. Les `whileInView` utilisent un `IntersectionObserver` poolé. Aucune raison de réinventer.

Sources : [motion.dev react scroll](https://motion.dev/docs/react-scroll-animations), [useTransform](https://motion.dev/docs/react-use-transform), [LogRocket guide](https://blog.logrocket.com/react-scroll-animations-framer-motion/), [Olivier Larose parallax](https://blog.olivierlarose.com/tutorials/background-image-parallax).

---

## 6. Recommandation finale — wireframe v2 MotoRival

### Structure proposée (15 sections, mobile-first)

```
[ScrollProgress bar #FF1744 fixed top]

01. NAV — logo + "Founding Rider" CTA + lang switcher (EN/FR/DE/IT/ES/PT)

02. HERO
    H1 : "Risk. On real motorcycles." (test A/B contre #4)
    Sub : "Claim hex zones with every ride. Crews compete. Cities fall."
    CTA : "Become a Founding Rider — $29.99/yr (247/1000)"
    CTA secondary : "How it works ↓"
    Visual : iPhone mockup parallax + hex map qui pulse

03. PRESS / TRUST STRIP — "Built in Switzerland · 6 languages · Coming Q3 2026"
    Marquee infini, opacity 60%

04. PROBLEM
    "You ride 5,000 km a year. Strava counts the meters. Nobody counts the territory."
    3 frustrations bullet : Strava = chiffres morts / RISER = social mais pas de stake / Group rides = oubliés à 19h

05. HOW IT WORKS — 3 steps
    1. Open the app, GPS on
    2. Ride. Each km paints hex zones in your color.
    3. Defend, attack, expand. Your city is the leaderboard.
    Stepper horizontal desktop, vertical mobile, scroll-linked progress

06. FEATURES (sticky scroll, 4 features)
    - Hex Territory : "See your city colored by who rode it"
    - Crews : "Up to 8 riders. Shared territory. Real beef."
    - Leaderboards : "Daily / Weekly / All-time. Per crew, per city."
    - Privacy First : "Live location never shared. Trails replay 6h late."
    Sticky left col copy + right col screenshot

07. VIDEO PREVIEW
    15-sec autoplay muted loop, 4K. Show app + real bike POV intercut.

08. SCREENSHOTS CAROUSEL
    7 iPhone shots horizontal scroll-snap, drag + parallax tilt

09. COMPARISON TABLE
    Lignes : Territory / Crews / GPS / Offline / Privacy / Price
    Cols : MotoRival ✅ / RISER ◐ / Strava ◐ / calimoto ✗

10. SOCIAL PROOF
    Pre-launch : 3 quotes Discord beta + "Founding Riders : 247/1000 — locked $29.99 forever"
    Photo + handle + crew

11. PRICING — 3 cards
    - Weekly $2.99 (decoy)
    - Annual $49.99 + 14-day trial (most popular badge)
    - Founding Rider $29.99/yr — lifetime price-lock — 1000 spots — counter live
    CTA "Claim my Founding spot"

12. FAQ — 8 accordions ciblant les vraies objections (cf §3.6)

13. CTA STACK FINAL
    Re-state : "Risk. On real motorcycles."
    App Store badge + "14-day free trial — cancel anytime"
    Sticky CTA bottom mobile (always visible)

14. LANGUAGE STRIP
    EN · FR · DE · IT · ES · PT — text-based, no flags

15. FOOTER
    Product / Company / Legal / Social
    "Made in Genève · #FF1744 · MotoRival 2026"
```

### Animations signature à shipper en v2

1. **Scroll progress bar rouge `#FF1744`** — toujours visible
2. **Hero stagger entrance** — eyebrow → H1 → sub → CTA (delay 0.12s each)
3. **Hero device parallax** — scale 1→0.92, y 0→-120, opacity fade
4. **Sticky-scroll features** — col droite change au scroll, col gauche fixe
5. **Hex-claim SVG signature** — hexagones qui s'allument en cascade au scroll (background pour "How it works")
6. **Marquee logos / langues**
7. **Stagger reveal** — toutes les sections grid
8. **Pricing card hover-lift** + Founding counter pulse

### Performance targets

- **LCP < 2.4s** (BrowserStack 2025 standard)
- **Page weight < 1.5MB** above fold
- **CLS = 0** (réserver dimensions device mockup)
- **Score Lighthouse > 90** mobile
- 0.1s gain = +8-10% conversion (cf seosherpa)

### Quick wins copywriting

- H1 4 mots max, benefit-led, jamais "the best app for..."
- CTA verb = ROI promise ("Claim your Founding spot", pas "Download")
- Compare table = kill objections concurrents avant qu'elles arrivent
- FAQ = battery / privacy / refund / iOS-only / vs Strava

### Stack technique confirmée

```
React 19 + Vite + TypeScript
Tailwind 4 (theme = #FF1744 + Satoshi/Inter, 8pt grid)
framer-motion (motion.dev)
react-i18next pour 6 langues
posthog-js analytics (track scroll-depth, CTA clicks)
Hosted Firebase (déjà configuré projet)
```

Pas de Framer wysiwyg. On code en React pour garder contrôle total + framer-motion natif. Les templates servent d'inspiration structurelle, pas de base.

---

## Sources

### Templates Framer
- [framerbite — 18 best mobile app templates 2026](https://framerbite.com/blog/best-mobile-app-framer-templates)
- [bryntaylor — 11 best landing 2026](https://www.bryntaylor.co.uk/writing/best-landing-page-templates-for-framer)
- [Framer marketplace](https://www.framer.com/marketplace/)
- [SaaS Landing Page directory](https://saaslandingpage.com/templates/framer/)
- [victorflow best app templates](https://www.victorflow.com/blog/best-app-framer-templates)

### Sections / structure
- [Linear — ideal landing layout](https://lineardesign.com/blog/landing-page-layout/)
- [DesignRush — 15 best app landings 2026](https://www.designrush.com/best-designs/apps/trends/app-landing-pages)
- [MagicUI — 7 SaaS best practices 2025](https://magicui.design/blog/saas-landing-page-best-practices)
- [Mobbin — stepper UI examples](https://mobbin.com/glossary/stepper)
- [Webstacks — 10 best mobile landings](https://www.webstacks.com/blog/mobile-landing-page)
- [Optinmonster — mobile landing best practices](https://optinmonster.com/mobile-landing-page-best-practices/)

### Copywriting
- [LandingRabbit — 11 hero formulas](https://landingrabbit.com/blog/saas-website-hero-text)
- [Medium — 9 hero layouts that print money](https://medium.com/dreamyhook-ai-redefining-the-future-of-intelligenc/hero-sections-that-print-money-9-layouts-with-copy-formulas-and-when-to-use-each-a7854d9808e1)
- [Genesys — 2026 conversion stats](https://genesysgrowth.com/blog/landing-page-conversion-stats-for-marketing-leaders)
- [Cortes design — design around objections](https://www.cortes.design/post/design-landing-pages-around-objections)
- [KlientBoost — 51 SaaS landing pages](https://www.klientboost.com/landing-pages/saas-landing-page/)
- [SaaSframe — 8 FAQ examples 2025](https://www.saasframe.io/categories/faq)

### Pricing / founding tier
- [Group.app — membership tiers anchor](https://www.group.app/blog/membership-tiers/)
- [Userpilot — pricing best practices](https://userpilot.com/blog/pricing-page-best-practices/)
- [Service Anchor — founding member](https://getserviceanchor.com/pricing)

### Animations framer-motion
- [motion.dev — React scroll animations](https://motion.dev/docs/react-scroll-animations)
- [motion.dev — useTransform](https://motion.dev/docs/react-use-transform)
- [LogRocket — framer-motion scroll guide](https://blog.logrocket.com/react-scroll-animations-framer-motion/)
- [Olivier Larose — background parallax](https://blog.olivierlarose.com/tutorials/background-image-parallax)
- [Samuel Kraft — spring parallax](https://samuelkraft.com/blog/spring-parallax-framer-motion-guide)

### Benchmarks
- [SEOSherpa — landing page stats 2026](https://seosherpa.com/landing-page-statistics/)
- [Adapty — App Store conversion 2026](https://adapty.io/blog/app-store-conversion-rate/)
- [BrowserStack — load speed 2025](https://www.browserstack.com/guide/how-fast-should-a-website-load)
- [Kirro — mobile app conversion benchmarks](https://kirro.io/mobile-app-conversion-rate)

### Concurrents moto
- [autoevolution — 7 best motorcycle apps](https://www.autoevolution.com/news/7-best-apps-every-motorcycle-rider-should-know-253712.html)
- [strivecloud — Strava gamification](https://www.strivecloud.io/blog/app-engagement-strava)
