import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { type Locale } from "../i18n/utils";
import DeviceFrame from "../components/DeviceFrame";
import { asset } from "../lib/asset";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props { locale: Locale; }

interface Slide {
  src: string;
  number: string;
  title: string;
  desc: string;
}

const COPY: Record<Locale, { eyebrow: string; title: string; sub: string; slides: Slide[] }> = {
  fr: {
    eyebrow: "L'APP",
    title: "Quatre écrans. Une obsession.",
    sub: "Chaque vue est conçue pour ne jamais te ralentir.",
    slides: [
      { src: asset("/screens/us/map-us.png"), number: "01", title: "Carte vivante.", desc: "Mise à jour en continu. Auto-capture. Aucun tap pendant le ride." },
      { src: asset("/screens/us/map-user-details-us.png"), number: "02", title: "Tape un rider.", desc: "Vois la rivalité, l'historique, la couleur du crew. Tout est à un tap." },
      { src: asset("/screens/us/user-profil-us.png"), number: "03", title: "Persona auto-révélée.", desc: "Six personas détectées sur tes 30 derniers rides. Ta signature émerge." },
      { src: asset("/screens/us/old-rides-us.png"), number: "04", title: "Historique propre.", desc: "Tes runs, tes records, tes zones gagnées et perdues. Sobre, lisible." },
    ],
  },
  en: {
    eyebrow: "THE APP",
    title: "Four screens. One obsession.",
    sub: "Every view is built to never slow you down.",
    slides: [
      { src: asset("/screens/us/map-us.png"), number: "01", title: "Living map.", desc: "Continuously updated. Auto-capture. Zero taps during the ride." },
      { src: asset("/screens/us/map-user-details-us.png"), number: "02", title: "Tap a rider.", desc: "See the rivalry, history, crew color. Everything's one tap away." },
      { src: asset("/screens/us/user-profil-us.png"), number: "03", title: "Auto-revealed persona.", desc: "Six personas detected from your last 30 rides. Your signature emerges." },
      { src: asset("/screens/us/old-rides-us.png"), number: "04", title: "Clean history.", desc: "Your runs, records, zones won and lost. Quiet and readable." },
    ],
  },
  es: {
    eyebrow: "LA APP",
    title: "Cuatro pantallas. Una obsesión.",
    sub: "Cada vista está hecha para nunca frenarte.",
    slides: [
      { src: asset("/screens/us/map-us.png"), number: "01", title: "Mapa vivo.", desc: "Actualizado en tiempo real. Auto-captura. Cero toques durante la ruta." },
      { src: asset("/screens/us/map-user-details-us.png"), number: "02", title: "Toca un rider.", desc: "Ves la rivalidad, el historial, el color del crew. Todo a un toque." },
      { src: asset("/screens/us/user-profil-us.png"), number: "03", title: "Persona auto-revelada.", desc: "Seis personas detectadas en tus 30 últimas rutas. Tu firma emerge." },
      { src: asset("/screens/us/old-rides-us.png"), number: "04", title: "Historial limpio.", desc: "Tus rutas, récords, zonas ganadas y perdidas. Sobrio, legible." },
    ],
  },
  de: {
    eyebrow: "DIE APP",
    title: "Vier Screens. Eine Obsession.",
    sub: "Jede Ansicht ist gebaut, um dich nie auszubremsen.",
    slides: [
      { src: asset("/screens/us/map-us.png"), number: "01", title: "Lebendige Karte.", desc: "Live aktualisiert. Auto-Capture. Null Taps während der Fahrt." },
      { src: asset("/screens/us/map-user-details-us.png"), number: "02", title: "Tippe einen Rider.", desc: "Rivalität, Historie, Crew-Farbe. Alles nur einen Tap entfernt." },
      { src: asset("/screens/us/user-profil-us.png"), number: "03", title: "Auto-Persona.", desc: "Sechs Personas aus deinen letzten 30 Rides. Deine Signatur entsteht." },
      { src: asset("/screens/us/old-rides-us.png"), number: "04", title: "Saubere Historie.", desc: "Deine Rides, Rekorde, gewonnene und verlorene Zonen. Ruhig, lesbar." },
    ],
  },
  it: {
    eyebrow: "L'APP",
    title: "Quattro schermate. Un'ossessione.",
    sub: "Ogni vista è pensata per non rallentarti mai.",
    slides: [
      { src: asset("/screens/us/map-us.png"), number: "01", title: "Mappa viva.", desc: "Aggiornata in tempo reale. Cattura automatica. Zero tap durante il ride." },
      { src: asset("/screens/us/map-user-details-us.png"), number: "02", title: "Tocca un rider.", desc: "Rivalità, cronologia, colore del crew. Tutto a un tap." },
      { src: asset("/screens/us/user-profil-us.png"), number: "03", title: "Persona auto-rivelata.", desc: "Sei personas dai tuoi ultimi 30 ride. La tua firma emerge." },
      { src: asset("/screens/us/old-rides-us.png"), number: "04", title: "Cronologia pulita.", desc: "I tuoi ride, record, zone vinte e perse. Sobria, leggibile." },
    ],
  },
  pt: {
    eyebrow: "O APP",
    title: "Quatro telas. Uma obsessão.",
    sub: "Cada vista foi feita para nunca te atrasar.",
    slides: [
      { src: asset("/screens/us/map-us.png"), number: "01", title: "Mapa vivo.", desc: "Atualizado em tempo real. Auto-captura. Zero toques durante o ride." },
      { src: asset("/screens/us/map-user-details-us.png"), number: "02", title: "Toque um rider.", desc: "Rivalidade, histórico, cor do crew. Tudo a um toque." },
      { src: asset("/screens/us/user-profil-us.png"), number: "03", title: "Persona auto-revelada.", desc: "Seis personas dos seus últimos 30 rides. Sua assinatura emerge." },
      { src: asset("/screens/us/old-rides-us.png"), number: "04", title: "Histórico limpo.", desc: "Seus rides, recordes, zonas ganhas e perdidas. Sóbrio, legível." },
    ],
  },
};

export default function ScreensFancy({ locale }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const copy = COPY[locale];
  const slides = copy.slides;

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Header reveal
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

      // Pin + sticky scroll only on desktop. On mobile the section becomes
      // a single column and slides advance via an auto-rotating timer (no
      // 300vh of empty scroll on a phone).
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * 3,
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

      // Mobile: auto-rotate every 4 seconds, no pin
      matchMedia.add("(max-width: 1023px)", () => {
        let i = 0;
        const id = window.setInterval(() => {
          i = (i + 1) % slides.length;
          setActive(i);
        }, 4000);
        return () => window.clearInterval(id);
      });
    },
    { scope: root, dependencies: [slides.length] }
  );

  // Continuous gentle float on the phone
  const phoneRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !phoneRef.current) return;
    const tween = gsap.to(phoneRef.current, {
      y: -8,
      duration: 4.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section ref={root} className="relative hairline-top">
      <div className="sc-pin w-full lg:h-screen overflow-hidden py-20 lg:py-0 flex items-center">
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
            <div className="flex items-center gap-3 mt-10">
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

          {/* CENTER — iPhone with crossfading slides (CSS grid stack) */}
          <div className="order-1 lg:order-2 justify-self-center">
            <div
              ref={phoneRef}
              className="relative will-change-transform"
              style={{
                width: "clamp(280px, 32vw, 420px)",
                maxWidth: "min(78vw, 420px)",
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
                      posterSrc={s.src}
                      alt={s.title}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — captions stacked with CSS Grid (all slides share one cell) */}
          <div className="order-3 w-full max-w-[36ch] lg:justify-self-start">
            <div
              className="sc-caption-stack"
              style={{ display: "grid", gridTemplateAreas: '"stack"', minHeight: 180 }}
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
