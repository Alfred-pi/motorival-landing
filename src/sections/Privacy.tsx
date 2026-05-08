import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { type Locale } from "../i18n/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
  locale: Locale;
}

const COPY: Record<Locale, { eyebrow: string; lines: string[]; tail: string }> = {
  fr: {
    eyebrow: "PRIVACY",
    lines: [
      "Pas de scoring vitesse.",
      "Pas de live tracking.",
      "Pas de revente de données.",
    ],
    tail: "Conçu pour la moto. Conçu pour toi.",
  },
  en: {
    eyebrow: "PRIVACY",
    lines: [
      "No speed scoring.",
      "No live tracking.",
      "No data resale.",
    ],
    tail: "Built for the ride. Built for you.",
  },
  es: {
    eyebrow: "PRIVACIDAD",
    lines: [
      "Sin puntuación de velocidad.",
      "Sin seguimiento en vivo.",
      "Sin reventa de datos.",
    ],
    tail: "Pensado para la moto. Pensado para ti.",
  },
  de: {
    eyebrow: "PRIVACY",
    lines: [
      "Keine Speed-Wertung.",
      "Kein Live-Tracking.",
      "Kein Datenverkauf.",
    ],
    tail: "Gebaut für die Fahrt. Gebaut für dich.",
  },
  it: {
    eyebrow: "PRIVACY",
    lines: [
      "Nessun punteggio velocità.",
      "Nessun tracciamento live.",
      "Nessuna rivendita dei dati.",
    ],
    tail: "Pensato per la moto. Pensato per te.",
  },
  pt: {
    eyebrow: "PRIVACIDADE",
    lines: [
      "Sem score de velocidade.",
      "Sem rastreamento ao vivo.",
      "Sem revenda de dados.",
    ],
    tail: "Feito para pilotar. Feito para você.",
  },
};

export default function Privacy({ locale }: Props) {
  const root = useRef<HTMLElement>(null);
  const copy = COPY[locale];

  useGSAP(
    () => {
      gsap.from(".pv-line", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 32,
        filter: "blur(10px)",
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.18,
      });
      gsap.from(".pv-tail", {
        scrollTrigger: { trigger: ".pv-tail", start: "top 80%" },
        opacity: 0,
        y: 14,
        duration: 1.0,
        ease: "expo.out",
        delay: 0.4,
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative py-40 md:py-56 overflow-hidden border-t border-[var(--color-line)]"
    >
      <div aria-hidden className="absolute inset-0 -z-10 spotlight-2 pointer-events-none" />

      <div className="mx-auto max-w-[1320px] px-6 md:px-10 text-center">
        <span className="eyebrow text-[var(--color-accent)] block mb-10">
          {copy.eyebrow}
        </span>

        <div className="space-y-3 md:space-y-4">
          {copy.lines.map((line, i) => (
            <p
              key={i}
              className="pv-line font-display italic leading-[0.98] mx-auto max-w-[20ch]"
              style={{
                fontSize: "clamp(36px, 6vw, 88px)",
                letterSpacing: "-0.035em",
                color: i === copy.lines.length - 1 ? "var(--color-accent)" : "var(--color-text)",
              }}
            >
              {line}
            </p>
          ))}
        </div>

        <p className="pv-tail mt-12 md:mt-16 text-[var(--color-muted)] text-base md:text-lg max-w-[42ch] mx-auto">
          {copy.tail}
        </p>
      </div>
    </section>
  );
}
