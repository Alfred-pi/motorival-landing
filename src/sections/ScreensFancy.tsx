import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { type Locale } from "../i18n/utils";
import DeviceFrame from "../components/DeviceFrame";
import { asset } from "../lib/asset";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props { locale: Locale; }

interface SlideCopy { number: string; title: string; desc: string; }

// Six native screens, six narrative beats. Order is intentional:
// terrain → mid-ride interaction → loot history → identity → collective → global ranking.
const SLIDE_KEYS = ["map", "capture", "ride", "profil", "crew", "leaderbord"] as const;

const COPY: Record<Locale, { eyebrow: string; title: string; sub: string; slides: SlideCopy[] }> = {
  fr: {
    eyebrow: "L'APP",
    title: "Six écrans. Zéro friction.",
    sub: "Pendant le ride : aucun tap. Après : tout devient lisible.",
    slides: [
      { number: "01", title: "Le terrain te précède.", desc: "Hexagones rouges, verts, bleus déjà peints. C'est le score des autres. À toi de le reprendre." },
      { number: "02", title: "Tape l'ennemi.", desc: "Sur ses zones, en plein ride. Bécane, km², série. Tu sais à qui tu prends quoi." },
      { number: "03", title: "Pas une trace. Un butin.", desc: "Chaque run empile des zones gagnées — ou perdues. Hier 18:23, +1. Ce matin, +12." },
      { number: "04", title: "Ta vraie carte de visite.", desc: "Série, rang, km² tenus, zones volées. La signature de ton mois en un écran." },
      { number: "05", title: "Quand un solo ne suffit plus.", desc: "Ton crew empile les km². Six motards, un même rouge, un seul terrain." },
      { number: "06", title: "Le ranking n'est pas un trophée.", desc: "C'est l'état du terrain. Monde, Suisse, Rivals, Crews — un seul score : km² capturés." },
    ],
  },
  en: {
    eyebrow: "THE APP",
    title: "Six screens. Zero friction.",
    sub: "Mid-ride: zero taps. After: every line readable.",
    slides: [
      { number: "01", title: "The map is already painted.", desc: "Red, green, blue hexes — already taken. That's their score. Your turn to take it back." },
      { number: "02", title: "Tap the rival.", desc: "Mid-ride. On their zones. Bike, km², streak. You know exactly what you're stealing." },
      { number: "03", title: "Not a trace. A haul.", desc: "Every run stacks zones won — or lost. Yesterday 18:23, +1. This morning, +12." },
      { number: "04", title: "Your real ride card.", desc: "Streak, rank, km² held, zones stolen. Your month's signature in one screen." },
      { number: "05", title: "When solo isn't enough.", desc: "Your crew stacks km². Six riders, one red, one terrain." },
      { number: "06", title: "Ranking isn't a trophy.", desc: "It's the state of the terrain. Global, region, rivals, crews — one score: km² captured." },
    ],
  },
  es: {
    eyebrow: "LA APP",
    title: "Seis pantallas. Cero fricción.",
    sub: "En pleno ride: cero toques. Después: todo se vuelve legible.",
    slides: [
      { number: "01", title: "El terreno te precede.", desc: "Hexágonos rojos, verdes, azules ya pintados. Ese es su puntaje. Te toca recuperarlo." },
      { number: "02", title: "Toca al rival.", desc: "En sus zonas. En pleno ride. Moto, km², racha. Sabes exactamente qué le robas." },
      { number: "03", title: "No una traza. Un botín.", desc: "Cada run apila zonas ganadas — o perdidas. Ayer 18:23, +1. Esta mañana, +12." },
      { number: "04", title: "Tu carta real.", desc: "Racha, rango, km² tenidos, zonas robadas. La firma de tu mes en una pantalla." },
      { number: "05", title: "Cuando solo ya no basta.", desc: "Tu crew apila km². Seis riders, un mismo rojo, un solo terreno." },
      { number: "06", title: "El ranking no es un trofeo.", desc: "Es el estado del terreno. Mundo, región, rivals, crews — un solo marcador: km² capturados." },
    ],
  },
  de: {
    eyebrow: "DIE APP",
    title: "Sechs Screens. Null Friction.",
    sub: "Während der Fahrt: null Taps. Danach: alles lesbar.",
    slides: [
      { number: "01", title: "Das Terrain ist schon da.", desc: "Rote, grüne, blaue Hexagons — schon bemalt. Das ist ihr Score. Hol ihn dir." },
      { number: "02", title: "Tippe den Rival.", desc: "Auf seine Zonen. Mitten im Ride. Maschine, km², Streak. Du weißt, was du klaust." },
      { number: "03", title: "Keine Spur. Eine Beute.", desc: "Jeder Ride stapelt gewonnene — oder verlorene Zonen. Gestern 18:23, +1. Heute Morgen, +12." },
      { number: "04", title: "Deine echte Visitenkarte.", desc: "Streak, Rang, gehaltene km², gestohlene Zonen. Die Signatur deines Monats in einem Screen." },
      { number: "05", title: "Wenn solo nicht reicht.", desc: "Dein Crew stapelt km². Sechs Riders, ein Rot, ein Terrain." },
      { number: "06", title: "Ranking ist keine Trophäe.", desc: "Es ist der Stand des Terrains. Welt, Region, Rivals, Crews — ein Score: erfasste km²." },
    ],
  },
  it: {
    eyebrow: "L'APP",
    title: "Sei schermate. Zero attriti.",
    sub: "In pieno ride: zero tap. Dopo: tutto diventa leggibile.",
    slides: [
      { number: "01", title: "Il terreno ti precede.", desc: "Esagoni rossi, verdi, blu — già dipinti. Quello è il loro punteggio. Riprendilo." },
      { number: "02", title: "Tocca il rivale.", desc: "Sulle sue zone. In pieno ride. Moto, km², serie. Sai cosa gli stai rubando." },
      { number: "03", title: "Non una traccia. Un bottino.", desc: "Ogni ride accumula zone vinte — o perse. Ieri 18:23, +1. Stamattina, +12." },
      { number: "04", title: "La tua carta vera.", desc: "Serie, grado, km² tenuti, zone rubate. La firma del tuo mese in una schermata." },
      { number: "05", title: "Quando da solo non basta.", desc: "Il tuo crew accumula km². Sei rider, un solo rosso, un solo terreno." },
      { number: "06", title: "La classifica non è un trofeo.", desc: "È lo stato del terreno. Mondo, regione, rivals, crews — un solo punteggio: km² catturati." },
    ],
  },
  pt: {
    eyebrow: "O APP",
    title: "Seis telas. Zero atrito.",
    sub: "Em pleno ride: zero toques. Depois: tudo se torna legível.",
    slides: [
      { number: "01", title: "O território te precede.", desc: "Hexágonos vermelhos, verdes, azuis — já pintados. Esse é o placar deles. Bora retomar." },
      { number: "02", title: "Toque no rival.", desc: "Nas zonas dele. Em pleno ride. Moto, km², série. Você sabe o que está roubando." },
      { number: "03", title: "Não um trace. Um butim.", desc: "Cada ride empilha zonas ganhas — ou perdidas. Ontem 18:23, +1. Esta manhã, +12." },
      { number: "04", title: "Seu cartão real.", desc: "Série, rank, km² mantidos, zonas roubadas. A assinatura do seu mês em uma tela." },
      { number: "05", title: "Quando solo não basta.", desc: "Seu crew empilha km². Seis riders, um vermelho, um território." },
      { number: "06", title: "Ranking não é troféu.", desc: "É o estado do território. Mundo, região, rivais, crews — um placar: km² capturados." },
    ],
  },
};

export default function ScreensFancy({ locale }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const copy = COPY[locale];

  // FR ships native French shots; every other locale uses the US set.
  const region: "fr" | "us" = locale === "fr" ? "fr" : "us";
  const slides = SLIDE_KEYS.map((key, i) => ({
    src: asset(`/screens/${region}/${key}-${region}.png`),
    ...copy.slides[i],
  }));

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.from(".sc-head > *", {
        scrollTrigger: { trigger: ".sc-head", start: "top 80%" },
        opacity: 0,
        y: 24,
        filter: "blur(10px)",
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
      });

      if (reduced) return;

      const matchMedia = gsap.matchMedia();

      // Desktop pin + sticky scroll. Depth scales with slide count so each
      // slide gets the same scroll budget regardless of how many we ship.
      matchMedia.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * (slides.length - 1),
          pin: ".sc-pin",
          scrub: false,
          snap: {
            snapTo: (value) => {
              const denom = slides.length - 1;
              return Math.round(value * denom) / denom;
            },
            duration: { min: 0.2, max: 0.5 },
            ease: "expo.out",
          },
          onUpdate: (self) => {
            const idx = Math.min(slides.length - 1, Math.floor(self.progress * slides.length));
            setActive(idx);
          },
          invalidateOnRefresh: true,
        });
      });

      // Mobile: auto-rotate every 3.5s. 6 slides × 3.5 = ~21s loop.
      matchMedia.add("(max-width: 1023px)", () => {
        let i = 0;
        const id = window.setInterval(() => {
          i = (i + 1) % slides.length;
          setActive(i);
        }, 3500);
        return () => window.clearInterval(id);
      });
    },
    { scope: root, dependencies: [slides.length] }
  );

  const phoneRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={root} className="relative hairline-top">
      <div className="sc-pin w-full lg:min-h-screen overflow-hidden py-20 lg:py-24 flex items-center">
        <div aria-hidden className="absolute inset-0 -z-10 hex-bg pointer-events-none">
          <svg className="absolute right-0 top-0 h-full w-[55%]" viewBox="-50 -50 700 600" preserveAspectRatio="xMaxYMid slice">
            {Array.from({ length: 60 }).map((_, i) => {
              const c = i % 10;
              const r = Math.floor(i / 10);
              const size = 36;
              const h = Math.sqrt(3) * size;
              const x = c * (1.5 * size);
              const y = r * h + (c % 2 === 0 ? 0 : h / 2);
              const d = `M${x + size},${y} L${x + size / 2},${y + h / 2} L${x - size / 2},${y + h / 2} L${x - size},${y} L${x - size / 2},${y - h / 2} L${x + size / 2},${y - h / 2} Z`;
              return <path key={i} d={d} className="hex-cell" />;
            })}
          </svg>
        </div>

        <div className="mx-auto max-w-[1320px] w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT — header */}
          <div className="sc-head order-2 lg:order-1 max-w-[36ch]">
            <span className="eyebrow text-[var(--color-muted)] block mb-5">
              {copy.eyebrow}
            </span>
            <h2
              className="font-display text-[var(--color-text)] mb-6"
              style={{ fontSize: "clamp(36px, 4.6vw, 72px)", letterSpacing: "-0.04em", fontWeight: 800 }}
            >
              {copy.title}
            </h2>
            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed">
              {copy.sub}
            </p>

            {/* Step indicator */}
            <div className="flex items-center gap-2.5 mt-10">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className="h-[3px] rounded-full transition-all duration-500"
                  style={{
                    width: i === active ? 32 : 10,
                    background:
                      i === active
                        ? "var(--color-accent)"
                        : "color-mix(in oklab, var(--color-text) 18%, transparent)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* CENTER — iPhone with crossfading slides */}
          <div className="order-1 lg:order-2 justify-self-center">
            <div
              ref={phoneRef}
              className="relative will-change-transform"
              style={{
                width: "clamp(220px, 26vw, 340px)",
                maxWidth: "min(60vw, 340px)",
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0 -m-8 rounded-[40%]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--color-accent) 32%, transparent) 0%, transparent 70%)",
                  filter: "blur(48px)",
                  opacity: 0.5,
                }}
              />
              <div
                className="relative"
                style={{ display: "grid", gridTemplateAreas: '"stack"' }}
              >
                {slides.map((s, i) => (
                  <div
                    key={s.src}
                    className="transition-opacity duration-700 ease-out"
                    style={{ gridArea: "stack", opacity: i === active ? 1 : 0 }}
                  >
                    <DeviceFrame
                      variant="no-notch"
                      posterSrc={s.src}
                      alt={s.title}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — captions */}
          <div className="order-3 w-full max-w-[36ch] lg:justify-self-start">
            <div
              className="sc-caption-stack"
              style={{ display: "grid", gridTemplateAreas: '"stack"', minHeight: 200 }}
            >
              {slides.map((s, i) => (
                <div
                  key={s.src}
                  className="transition-all duration-500 ease-out"
                  style={{
                    gridArea: "stack",
                    opacity: i === active ? 1 : 0,
                    transform: `translateY(${i === active ? 0 : 14}px)`,
                    pointerEvents: i === active ? "auto" : "none",
                  }}
                  aria-hidden={i !== active}
                >
                  <span
                    className="font-heading text-[var(--color-accent)] block mb-3"
                    style={{ fontSize: "13px", letterSpacing: "0.18em", fontWeight: 600 }}
                  >
                    {s.number} / {String(slides.length).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-display text-[var(--color-text)] mb-4"
                    style={{ fontSize: "clamp(22px, 2.2vw, 32px)", letterSpacing: "-0.025em", fontWeight: 700 }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
