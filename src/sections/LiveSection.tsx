import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { type Locale } from "../i18n/utils";
import { asset } from "../lib/asset";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props { locale: Locale; }

interface Clip {
  posterSrc: string;
  videoSrc: string;
  caption: string;
}

const COPY: Record<Locale, { eyebrow: string; title: string; sub: string; clips: [string, string, string] }> = {
  fr: {
    eyebrow: "EN MOUVEMENT",
    title: "L'app en action.",
    sub: "Trois extraits live de l'app, captés depuis un vrai ride.",
    clips: ["Découverte de la map.", "Capture de zones.", "Promotion de rang."],
  },
  en: {
    eyebrow: "IN MOTION",
    title: "The app in action.",
    sub: "Three live captures from a real ride.",
    clips: ["Map discovery.", "Zone capture.", "Rank promotion."],
  },
  es: {
    eyebrow: "EN MOVIMIENTO",
    title: "La app en acción.",
    sub: "Tres clips en vivo de un ride real.",
    clips: ["Descubrir el mapa.", "Capturar zonas.", "Subir de rango."],
  },
  de: {
    eyebrow: "IN BEWEGUNG",
    title: "Die App in Aktion.",
    sub: "Drei Live-Clips von einer echten Fahrt.",
    clips: ["Karten-Discovery.", "Zonen erobern.", "Rang aufsteigen."],
  },
  it: {
    eyebrow: "IN MOVIMENTO",
    title: "L'app in azione.",
    sub: "Tre estratti live da un vero ride.",
    clips: ["Scoperta della mappa.", "Cattura di zone.", "Promozione di rank."],
  },
  pt: {
    eyebrow: "EM MOVIMENTO",
    title: "O app em ação.",
    sub: "Três clipes ao vivo de um ride real.",
    clips: ["Descoberta do mapa.", "Captura de zonas.", "Promoção de rank."],
  },
};

export default function LiveSection({ locale }: Props) {
  const root = useRef<HTMLElement>(null);
  const copy = COPY[locale];

  const clips: Clip[] = [
    { posterSrc: asset("/screens/us/map-us.png"), videoSrc: asset("/media/map-discovery-540.mp4"), caption: copy.clips[0] },
    { posterSrc: asset("/screens/us/capture-us.png"), videoSrc: asset("/media/rival-zone-540.mp4"), caption: copy.clips[1] },
    { posterSrc: asset("/screens/us/profil-us.png"), videoSrc: asset("/media/level-up-540.mp4"), caption: copy.clips[2] },
  ];

  useGSAP(
    () => {
      gsap.from(".live-head > *", {
        scrollTrigger: { trigger: ".live-head", start: "top 80%" },
        opacity: 0,
        y: 24,
        filter: "blur(10px)",
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
      });

      gsap.from(".live-card", {
        scrollTrigger: { trigger: ".live-grid", start: "top 78%" },
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 1.0,
        ease: "expo.out",
        stagger: 0.12,
      });

      // Continuous gentle float on cards (staggered)
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduced) {
        gsap.utils.toArray<HTMLElement>(".live-card").forEach((el, i) => {
          gsap.to(el, {
            y: -10,
            duration: 4 + i * 0.4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.6,
          });
        });
      }
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-32 md:py-44 hairline-top">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12">
        <header className="live-head max-w-[28ch] mb-16 md:mb-24">
          <span className="eyebrow text-[var(--color-muted)] block mb-5">
            {copy.eyebrow}
          </span>
          <h2 className="font-display text-[var(--color-text)] mb-6"
              style={{ fontSize: "clamp(40px, 5.5vw, 88px)", letterSpacing: "-0.04em", fontWeight: 800 }}>
            {copy.title}
          </h2>
          <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-[44ch]">
            {copy.sub}
          </p>
        </header>

        <div className="live-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 items-end justify-items-center">
          {clips.map((c, i) => (
            <figure
              key={c.videoSrc}
              className="live-card flex flex-col items-center gap-5 will-change-transform"
              style={{ width: "clamp(200px, 22vw, 280px)" }}
            >
              <div className="relative w-full">
                <div
                  aria-hidden
                  className="absolute inset-0 -m-6 rounded-[40%]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--color-accent) 28%, transparent) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    opacity: 0.45,
                  }}
                />
                {/* Native screen capture — no frame overlay (the recording
                    already includes the device's dynamic island). */}
                <div
                  className="live-video-shell relative overflow-hidden bg-black"
                  style={{ aspectRatio: "1179 / 2556" }}
                >
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={c.posterSrc}
                    aria-label={c.caption}
                  >
                    <source src={c.videoSrc} type="video/mp4" />
                  </video>
                </div>
              </div>
              <figcaption className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)] text-center">
                {c.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
