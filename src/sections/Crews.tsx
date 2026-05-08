import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { t, type Locale } from "../i18n/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
  locale: Locale;
}

// 8 placeholder rider avatars — initials + brand-coherent colors.
const RIDERS: { initials: string; tone: string }[] = [
  { initials: "JN", tone: "#FF1744" },
  { initials: "MA", tone: "#4D7FFF" },
  { initials: "SO", tone: "#FFD700" },
  { initials: "KL", tone: "#16A34A" },
  { initials: "RZ", tone: "#A855F7" },
  { initials: "TY", tone: "#EC4899" },
  { initials: "VI", tone: "#0EA5E9" },
  { initials: "DX", tone: "#F97316" },
];

const COPY: Record<Locale, { eyebrow: string; title: string; sub: string }> = {
  fr: {
    eyebrow: "CREWS",
    title: "8 riders. Un territoire.",
    sub: "Forme un crew avec un code à 6 caractères. Même couleur, même map. Crew vs crew sur les leaderboards.",
  },
  en: {
    eyebrow: "CREWS",
    title: "8 riders. One territory.",
    sub: "Form a crew with a 6-char invite code. Same color, same map. Crew vs crew on leaderboards.",
  },
  es: {
    eyebrow: "CREWS",
    title: "8 riders. Un territorio.",
    sub: "Forma un crew con un código de 6 caracteres. Mismo color, mismo mapa. Crew contra crew en los rankings.",
  },
  de: {
    eyebrow: "CREWS",
    title: "8 Rider. Ein Territorium.",
    sub: "Bilde einen Crew mit 6-stelligem Code. Gleiche Farbe, gleiche Karte. Crew gegen Crew im Leaderboard.",
  },
  it: {
    eyebrow: "CREWS",
    title: "8 rider. Un solo territorio.",
    sub: "Forma un crew con un codice di 6 caratteri. Stesso colore, stessa mappa. Crew contro crew in classifica.",
  },
  pt: {
    eyebrow: "CREWS",
    title: "8 riders. Um território.",
    sub: "Monte um crew com código de 6 caracteres. Mesma cor, mesmo mapa. Crew contra crew no ranking.",
  },
};

export default function Crews({ locale }: Props) {
  const root = useRef<HTMLElement>(null);
  const copy = COPY[locale];

  useGSAP(
    () => {
      gsap.from(".crew-header > *", {
        scrollTrigger: { trigger: ".crew-header", start: "top 78%" },
        y: 24,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.07,
      });

      gsap.from(".crew-rider", {
        scrollTrigger: { trigger: ".crew-grid", start: "top 78%" },
        scale: 0.4,
        opacity: 0,
        rotate: () => gsap.utils.random(-30, 30),
        duration: 0.9,
        ease: "back.out(1.7)",
        stagger: { amount: 0.6, from: "center" },
      });

      // Continuous orbit float
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduced) {
        gsap.utils.toArray<HTMLElement>(".crew-rider").forEach((el, i) => {
          gsap.to(el, {
            y: "random(-12, 12)",
            duration: "random(3.5, 5.5)",
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: i * 0.15,
          });
        });
      }
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative py-32 md:py-44 overflow-hidden border-t border-[var(--color-line)]"
    >
      <div aria-hidden className="absolute inset-0 -z-10 hex-grid opacity-30" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 spotlight-2 pointer-events-none"
      />

      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <header className="crew-header text-center mb-16 md:mb-20 max-w-[28ch] mx-auto">
          <span className="eyebrow text-[var(--color-accent)] block mb-5">
            {copy.eyebrow}
          </span>
          <h2
            className="font-display italic leading-[0.98] tracking-tight"
            style={{ fontSize: "clamp(36px, 5.5vw, 80px)", letterSpacing: "-0.035em" }}
          >
            {copy.title}
          </h2>
          <p className="text-[var(--color-muted)] text-base md:text-lg mt-6 max-w-[48ch] mx-auto leading-relaxed">
            {copy.sub}
          </p>
        </header>

        <div className="crew-grid grid grid-cols-4 sm:grid-cols-8 gap-5 sm:gap-7 max-w-[820px] mx-auto">
          {RIDERS.map((r, i) => (
            <div
              key={i}
              className="crew-rider relative aspect-square rounded-full will-change-transform flex items-center justify-center font-display italic text-white"
              style={{
                fontSize: "clamp(16px, 2.4vw, 26px)",
                background: `radial-gradient(circle at 50% 35%, ${r.tone} 0%, color-mix(in oklab, ${r.tone} 40%, #07080C 80%) 70%, #07080C 100%)`,
                boxShadow: `0 0 0 1px color-mix(in oklab, ${r.tone} 40%, transparent), 0 18px 48px -12px color-mix(in oklab, ${r.tone} 50%, transparent)`,
              }}
            >
              <span style={{ letterSpacing: "-0.02em" }}>{r.initials}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
