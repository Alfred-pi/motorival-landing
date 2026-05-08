import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { type Locale } from "../i18n/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props { locale: Locale; }

type IconKey = "capture" | "crew" | "nemesis" | "streak" | "pin" | "shield";

interface Feature {
  icon: IconKey;
  title: string;
  desc: string;
}

const COPY: Record<Locale, { eyebrow: string; title: string; sub: string; features: [Feature, Feature, Feature, Feature, Feature, Feature] }> = {
  fr: {
    eyebrow: "FEATURES",
    title: "Tout ce qu'il faut. Rien de plus.",
    sub: "Six mécaniques. Une boucle propre, sans bruit, sans dette.",
    features: [
      { icon: "capture", title: "Capture", desc: "GPS map-matché. Auto-capture. Zéro tap pendant le ride." },
      { icon: "crew", title: "Crew", desc: "Jusqu'à 8 riders, code à 6 caractères. Couleur partagée." },
      { icon: "nemesis", title: "Nemesis", desc: "L'app détecte ton rival le plus fréquent. Historique automatique." },
      { icon: "streak", title: "Streak", desc: "Roule chaque jour. Cérémonie aux paliers. Pas de prix vitesse." },
      { icon: "pin", title: "Pin-to-Ride", desc: "Long-press la map, pose une cible, lance le défi." },
      { icon: "shield", title: "Riding Mode", desc: "Deux boutons. Notifications coupées. Conçu pour la moto." },
    ],
  },
  en: {
    eyebrow: "FEATURES",
    title: "Everything you need. Nothing more.",
    sub: "Six mechanics. One clean loop. No noise, no debt.",
    features: [
      { icon: "capture", title: "Capture", desc: "Map-matched GPS. Auto-capture. Zero taps during the ride." },
      { icon: "crew", title: "Crew", desc: "Up to 8 riders, 6-char invite code. Shared color." },
      { icon: "nemesis", title: "Nemesis", desc: "The app auto-detects your most recurring rival." },
      { icon: "streak", title: "Streak", desc: "Ride daily. Ceremony at milestones. No speed scoring." },
      { icon: "pin", title: "Pin-to-Ride", desc: "Long-press the map, drop a target, start the challenge." },
      { icon: "shield", title: "Riding Mode", desc: "Two buttons. Notifications muted. Built for the ride." },
    ],
  },
  es: {
    eyebrow: "FEATURES",
    title: "Todo lo que necesitas. Nada más.",
    sub: "Seis mecánicas. Un solo loop limpio, sin ruido.",
    features: [
      { icon: "capture", title: "Captura", desc: "GPS map-matched. Auto-captura. Cero toques durante la ruta." },
      { icon: "crew", title: "Crew", desc: "Hasta 8 riders, código de 6 caracteres. Color compartido." },
      { icon: "nemesis", title: "Némesis", desc: "Detecta a tu rival más frecuente. Historial automático." },
      { icon: "streak", title: "Racha", desc: "Rueda cada día. Ceremonia en hitos. Sin score de velocidad." },
      { icon: "pin", title: "Pin-to-Ride", desc: "Mantén pulsado el mapa, pon un destino, lanza el reto." },
      { icon: "shield", title: "Riding Mode", desc: "Dos botones. Notificaciones silenciadas. Hecho para la moto." },
    ],
  },
  de: {
    eyebrow: "FEATURES",
    title: "Alles was du brauchst. Nicht mehr.",
    sub: "Sechs Mechaniken. Ein sauberer Loop, ohne Lärm.",
    features: [
      { icon: "capture", title: "Capture", desc: "Map-matched GPS. Auto-Capture. Null Taps während der Fahrt." },
      { icon: "crew", title: "Crew", desc: "Bis zu 8 Rider, 6-Zeichen-Code. Gemeinsame Farbe." },
      { icon: "nemesis", title: "Nemesis", desc: "Erkennt deinen häufigsten Rivalen. Automatisches Logbuch." },
      { icon: "streak", title: "Streak", desc: "Fahre täglich. Zeremonie bei Meilensteinen." },
      { icon: "pin", title: "Pin-to-Ride", desc: "Long-press die Karte, Ziel setzen, Challenge starten." },
      { icon: "shield", title: "Riding Mode", desc: "Zwei Buttons. Notifications stumm. Für die Fahrt gebaut." },
    ],
  },
  it: {
    eyebrow: "FEATURES",
    title: "Tutto ciò che serve. Niente di più.",
    sub: "Sei meccaniche. Un loop pulito, senza rumore.",
    features: [
      { icon: "capture", title: "Cattura", desc: "GPS map-matched. Cattura automatica. Zero tap durante il ride." },
      { icon: "crew", title: "Crew", desc: "Fino a 8 rider, codice di 6 caratteri. Colore condiviso." },
      { icon: "nemesis", title: "Nemesis", desc: "Riconosce il tuo rivale più frequente. Registro automatico." },
      { icon: "streak", title: "Streak", desc: "Guida ogni giorno. Cerimonia ai traguardi." },
      { icon: "pin", title: "Pin-to-Ride", desc: "Long-press sulla mappa, metti un target, lancia la sfida." },
      { icon: "shield", title: "Riding Mode", desc: "Due bottoni. Notifiche mute. Pensato per la moto." },
    ],
  },
  pt: {
    eyebrow: "FEATURES",
    title: "Tudo que você precisa. Nada além.",
    sub: "Seis mecânicas. Um loop limpo, sem ruído.",
    features: [
      { icon: "capture", title: "Captura", desc: "GPS map-matched. Auto-captura. Zero toques durante a volta." },
      { icon: "crew", title: "Crew", desc: "Até 8 riders, código de 6 caracteres. Cor compartilhada." },
      { icon: "nemesis", title: "Nemesis", desc: "Detecta seu rival mais frequente. Histórico automático." },
      { icon: "streak", title: "Streak", desc: "Pilote todo dia. Cerimônia nos marcos." },
      { icon: "pin", title: "Pin-to-Ride", desc: "Pressione o mapa, marque um alvo, inicie o desafio." },
      { icon: "shield", title: "Riding Mode", desc: "Dois botões. Notificações mudas. Feito para pilotar." },
    ],
  },
};

function Icon({ name }: { name: IconKey }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "capture":
      // Hex with center pulse — GPS hex capture
      return (
        <svg {...common}>
          <path d="M12 2.5 21 7.5 21 16.5 12 21.5 3 16.5 3 7.5 Z" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="12" r="5.5" strokeDasharray="2 2" />
        </svg>
      );
    case "crew":
      // 3 figures grouped
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.4" />
          <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
          <path d="M14 19c0-2.4 1.7-4 3-4s3 1.4 3 3.6" />
        </svg>
      );
    case "nemesis":
      // Crossed swords
      return (
        <svg {...common}>
          <path d="M14 5 19 5 19 10" />
          <path d="M19 5 9 15" />
          <path d="M9 15 5.8 18.2 7.5 19.9 10.7 16.7" />
          <path d="M10 5 5 5 5 10" />
          <path d="M5 5 15 15" />
          <path d="M15 15 18.2 18.2 16.5 19.9 13.3 16.7" />
        </svg>
      );
    case "streak":
      // Flame
      return (
        <svg {...common}>
          <path d="M12 3c0 4 3 5 3 9a3 3 0 0 1-6 0c0-1.5.5-2 1-2.5C8 11 7 13 7 15a5 5 0 0 0 10 0c0-5-5-7-5-12Z" />
        </svg>
      );
    case "pin":
      // Map pin with crosshair ring
      return (
        <svg {...common}>
          <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.5" />
          <path d="M12 4.5 12 6" />
          <path d="M12 12 12 13.5" />
        </svg>
      );
    case "shield":
      // Shield + minimal motion lines (riding-safe)
      return (
        <svg {...common}>
          <path d="M12 2.5 4 5 4 11.5c0 5.4 3.5 8.6 8 9.8 4.5-1.2 8-4.4 8-9.8L20 5 12 2.5Z" />
          <path d="M9 11.5 12 14.5 15.5 9.5" />
        </svg>
      );
  }
}

export default function Features({ locale }: Props) {
  const root = useRef<HTMLElement>(null);
  const copy = COPY[locale];

  useGSAP(
    () => {
      gsap.from(".ft-head > *", {
        scrollTrigger: { trigger: ".ft-head", start: "top 80%" },
        opacity: 0,
        y: 24,
        filter: "blur(10px)",
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
      });

      gsap.from(".ft-card", {
        scrollTrigger: { trigger: ".ft-grid", start: "top 85%", once: true },
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.07,
        immediateRender: false,
      });

      // Subtle icon pulse on viewport entry
      gsap.from(".ft-icon", {
        scrollTrigger: { trigger: ".ft-grid", start: "top 85%", once: true },
        scale: 0.5,
        opacity: 0,
        duration: 0.9,
        ease: "back.out(1.6)",
        stagger: 0.06,
        delay: 0.15,
        immediateRender: false,
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative py-32 md:py-44 hairline-top">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12">
        <header className="ft-head max-w-[32ch] mb-20 md:mb-24">
          <span className="eyebrow text-[var(--color-muted)] block mb-5">
            {copy.eyebrow}
          </span>
          <h2
            className="font-display text-[var(--color-text)] mb-5"
            style={{ fontSize: "clamp(40px, 5.5vw, 88px)", letterSpacing: "-0.04em", fontWeight: 800 }}
          >
            {copy.title}
          </h2>
          <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-[42ch]">
            {copy.sub}
          </p>
        </header>

        <div className="ft-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-line)] hairline-top hairline-bot">
          {copy.features.map((f, i) => (
            <article
              key={f.title}
              className="ft-card group relative bg-[var(--color-bg)] p-7 md:p-10 transition-colors duration-300 hover:bg-[var(--color-bg-2)]"
            >
              <div
                className="ft-icon inline-flex items-center justify-center w-12 h-12 mb-7 rounded-[14px] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
                style={{
                  background: "color-mix(in oklab, var(--color-accent) 8%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--color-accent) 22%, transparent)",
                  color: "var(--color-accent)",
                }}
              >
                <Icon name={f.icon} />
              </div>

              <div
                aria-hidden
                className="font-heading text-[var(--color-muted)] mb-3"
                style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3
                className="font-display text-[var(--color-text)] mb-3"
                style={{ fontSize: "clamp(22px, 2vw, 30px)", letterSpacing: "-0.025em", fontWeight: 700 }}
              >
                {f.title}
              </h3>
              <p className="text-[var(--color-muted)] text-base leading-relaxed max-w-[36ch]">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
