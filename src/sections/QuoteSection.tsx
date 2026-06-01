import { type Locale } from "../i18n/utils";
import { asset } from "../lib/asset";

interface Props { locale: Locale; }

// Self-hosted hero shot — same image used as the paywall hero in-app, so
// the brand visual is consistent across the funnel.
const PHOTO = asset("/media/rider-hero-1440.webp");

const COPY: Record<Locale, { eyebrow: string; quote: string; cite: string }> = {
  fr: {
    eyebrow: "L'IDÉE",
    quote: "Chaque kilomètre parcouru devient un territoire revendiqué.",
    cite: "MotoRival — Genève",
  },
  en: {
    eyebrow: "THE IDEA",
    quote: "Every kilometer ridden becomes territory claimed.",
    cite: "MotoRival — Geneva",
  },
  es: {
    eyebrow: "LA IDEA",
    quote: "Cada kilómetro recorrido se convierte en territorio reclamado.",
    cite: "MotoRival — Ginebra",
  },
  de: {
    eyebrow: "DIE IDEE",
    quote: "Jeder gefahrene Kilometer wird zu erobertem Territorium.",
    cite: "MotoRival — Genf",
  },
  it: {
    eyebrow: "L'IDEA",
    quote: "Ogni chilometro percorso diventa territorio rivendicato.",
    cite: "MotoRival — Ginevra",
  },
  pt: {
    eyebrow: "A IDEIA",
    quote: "Cada quilômetro pilotado vira território conquistado.",
    cite: "MotoRival — Genebra",
  },
};

export default function QuoteSection({ locale }: Props) {
  const copy = COPY[locale];

  return (
    <section
      className="relative w-full hairline-top hairline-bot overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      <div aria-hidden className="absolute inset-0 z-0">
        <img
          src={PHOTO}
          alt=""
          className="quote-photo w-full h-full object-cover"
          width={1440}
          height={785}
          loading="lazy"
          decoding="async"
          style={{ filter: "grayscale(1) contrast(1.06) brightness(0.86)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] w-full px-6 md:px-12 flex flex-col justify-center"
           style={{ minHeight: "100svh" }}>
        <span className="quote-line eyebrow text-white/70 mb-10">{copy.eyebrow}</span>

        <blockquote
          className="quote-line font-display text-white max-w-[20ch]"
          style={{
            fontSize: "clamp(40px, 6vw, 96px)",
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
            fontWeight: 700,
          }}
        >
          {copy.quote}
        </blockquote>

        <cite className="quote-line not-italic eyebrow text-white/60 mt-12">
          — {copy.cite}
        </cite>
      </div>
    </section>
  );
}
