import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { type Locale } from "../i18n/utils";
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
    title: "Tu rides. L'app empile.",
    sub: "Pendant le ride : aucun tap. Après : chaque chiffre se lit en deux secondes.",
    slides: [
      { number: "01", title: "Démarre à 0. Eux, non.", desc: "Rouge, vert, bleu : ces hexagones sont déjà signés. Ton premier kilomètre va effacer un nom." },
      { number: "02", title: "Sa bécane est une CBR.", desc: "Tape un hex en plein ride. Vois la moto qui l'a peint. Décide en deux secondes si tu lui reprends." },
      { number: "03", title: "Pas un parcours. Un compteur.", desc: "Chaque ride se compte en zones, pas en kilomètres. Hier 18:23 → +1. Mer. 6, 17:03 → +12." },
      { number: "04", title: "Tenues : 47. Volées : 15.", desc: "Bécane en titre. Série en jours. 47 zones tenues, 15 reprises sur toi. La vérité de ton mois." },
      { number: "05", title: "Six rouges deviennent un rouge.", desc: "RuffRiders : 6 motards, 663 km² ce mois. Vos rouges fusionnent. La carte devient territoire." },
      { number: "06", title: "Le P1 a un nom : ROCKETViper.", desc: "Quatre échelles, une seule monnaie : km² capturés. ROCKETViper est à 22.0. Tu sais ce qu'il te reste à faire." },
    ],
  },
  en: {
    eyebrow: "THE APP",
    title: "You ride. The app stacks.",
    sub: "Mid-ride: zero taps. Off the bike: every number readable in two seconds.",
    slides: [
      { number: "01", title: "Start at 0. They didn't.", desc: "Red, green, blue — those hexes are already signed. Your first kilometer erases a name." },
      { number: "02", title: "His bike is a CBR.", desc: "Tap any hex mid-ride. See the bike that painted it. Decide in two seconds if you take it back." },
      { number: "03", title: "Not a route. A tally.", desc: "Every ride counts in zones, not kilometers. Yesterday 18:23 → +1. Wed 6, 17:03 → +12." },
      { number: "04", title: "Held: 47. Stolen back: 15.", desc: "Your bike on top. Streak in days. 47 zones held, 15 taken from you. The truth of your month." },
      { number: "05", title: "Six reds become one red.", desc: "RuffRiders: 6 riders, 663 km² this month. Your reds merge. The map turns into territory." },
      { number: "06", title: "P1 has a name: ROCKETViper.", desc: "Four scales, one currency: km² captured. ROCKETViper sits at 22.0. You know what you have left to do." },
    ],
  },
  es: {
    eyebrow: "LA APP",
    title: "Tú ruedas. La app suma.",
    sub: "En pleno ride: cero toques. Fuera de la moto: cada cifra legible en dos segundos.",
    slides: [
      { number: "01", title: "Arranca en 0. Ellos no.", desc: "Rojo, verde, azul: esos hexágonos ya están firmados. Tu primer kilómetro borra un nombre." },
      { number: "02", title: "Su moto es una CBR.", desc: "Toca un hex en pleno ride. Mira la moto que lo pintó. Decide en dos segundos si se lo arrebatas." },
      { number: "03", title: "No una ruta. Una cuenta.", desc: "Cada ride se mide en zonas, no en kilómetros. Ayer 18:23 → +1. Mié 6, 17:03 → +12." },
      { number: "04", title: "Tenidas: 47. Perdidas: 15.", desc: "Moto arriba. Racha en días. 47 zonas tenidas, 15 robadas. La verdad de tu mes." },
      { number: "05", title: "Seis rojos, un solo rojo.", desc: "RuffRiders: 6 riders, 663 km² este mes. Vuestros rojos se funden. El mapa se vuelve territorio." },
      { number: "06", title: "El P1 se llama ROCKETViper.", desc: "Cuatro escalas, una sola moneda: km² capturados. ROCKETViper está en 22.0. Sabes lo que te queda." },
    ],
  },
  de: {
    eyebrow: "DIE APP",
    title: "Du fährst. Die App stapelt.",
    sub: "Während der Fahrt: null Taps. Danach: jede Zahl in zwei Sekunden lesbar.",
    slides: [
      { number: "01", title: "Du startest bei 0. Sie nicht.", desc: "Rot, grün, blau — diese Hexagons sind schon signiert. Dein erster Kilometer löscht einen Namen." },
      { number: "02", title: "Seine Maschine ist eine CBR.", desc: "Tippe einen Hex mitten im Ride. Sieh die Maschine, die ihn bemalt hat. Entscheide in zwei Sekunden, ob du sie zurückholst." },
      { number: "03", title: "Keine Strecke. Ein Zählerstand.", desc: "Jeder Ride zählt in Zonen, nicht in Kilometern. Gestern 18:23 → +1. Mi 6, 17:03 → +12." },
      { number: "04", title: "Gehalten: 47. Geklaut: 15.", desc: "Maschine oben. Streak in Tagen. 47 Zonen gehalten, 15 von dir genommen. Die Wahrheit deines Monats." },
      { number: "05", title: "Sechs Rot werden ein Rot.", desc: "RuffRiders: 6 Riders, 663 km² diesen Monat. Eure Rot verschmilzt. Die Karte wird zum Gebiet." },
      { number: "06", title: "P1 heißt ROCKETViper.", desc: "Vier Skalen, eine Währung: erfasste km². ROCKETViper liegt bei 22.0. Du weißt, was dir bleibt." },
    ],
  },
  it: {
    eyebrow: "L'APP",
    title: "Tu vai. L'app accumula.",
    sub: "In pieno ride: zero tap. Dopo: ogni cifra leggibile in due secondi.",
    slides: [
      { number: "01", title: "Parti da 0. Loro no.", desc: "Rosso, verde, blu: quegli esagoni sono già firmati. Il tuo primo chilometro cancella un nome." },
      { number: "02", title: "La sua moto è una CBR.", desc: "Tocca un esagono in pieno ride. Vedi la moto che l'ha dipinto. Decidi in due secondi se gliela togli." },
      { number: "03", title: "Non un percorso. Un conto.", desc: "Ogni ride si misura in zone, non in chilometri. Ieri 18:23 → +1. Mer 6, 17:03 → +12." },
      { number: "04", title: "Tenute: 47. Rubate: 15.", desc: "Moto in cima. Serie in giorni. 47 zone tenute, 15 prese su di te. La verità del tuo mese." },
      { number: "05", title: "Sei rossi, un solo rosso.", desc: "RuffRiders: 6 rider, 663 km² questo mese. I vostri rossi si fondono. La mappa diventa territorio." },
      { number: "06", title: "Il P1 si chiama ROCKETViper.", desc: "Quattro scale, una sola moneta: km² catturati. ROCKETViper è a 22.0. Sai cosa ti resta da fare." },
    ],
  },
  pt: {
    eyebrow: "O APP",
    title: "Você anda. O app empilha.",
    sub: "Em pleno ride: zero toques. Depois: cada número legível em dois segundos.",
    slides: [
      { number: "01", title: "Começa em 0. Eles não.", desc: "Vermelho, verde, azul — esses hexágonos já estão assinados. Seu primeiro quilômetro apaga um nome." },
      { number: "02", title: "A moto dele é uma CBR.", desc: "Toque num hex em pleno ride. Veja a moto que pintou. Decide em dois segundos se você toma de volta." },
      { number: "03", title: "Não uma rota. Uma conta.", desc: "Cada ride conta em zonas, não em quilômetros. Ontem 18:23 → +1. Qua 6, 17:03 → +12." },
      { number: "04", title: "Mantidas: 47. Roubadas: 15.", desc: "Moto no topo. Série em dias. 47 zonas mantidas, 15 tiradas de você. A verdade do seu mês." },
      { number: "05", title: "Seis vermelhos, um só vermelho.", desc: "RuffRiders: 6 riders, 663 km² este mês. Os vermelhos de vocês se fundem. O mapa vira território." },
      { number: "06", title: "O P1 se chama ROCKETViper.", desc: "Quatro escalas, uma só moeda: km² capturados. ROCKETViper está em 22.0. Você sabe o que te resta." },
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
                    {/* Screenshots already include the iPhone chassis — render
                        them bare, no DeviceFrame wrapper. */}
                    <img
                      src={s.src}
                      alt={s.title}
                      className="block w-full h-auto select-none"
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
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
