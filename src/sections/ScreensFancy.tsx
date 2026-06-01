import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { type Locale } from "../i18n/utils";
import { asset } from "../lib/asset";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props { locale: Locale; }

interface SlideCopy { number: string; title: string; desc: string; }

const SLIDE_KEYS = ["map", "capture", "ride", "profil", "crew", "leaderbord"] as const;

const COPY: Record<Locale, { eyebrow: string; title: string; sub: string; slides: SlideCopy[] }> = {
  fr: {
    eyebrow: "L'APP",
    title: "Tu rides. L'app empile.",
    sub: "Pendant le ride : aucun tap. Après : chaque chiffre se lit en deux secondes.",
    slides: [
      { number: "01", title: "Carte des territoires", desc: "Vois les zones autour de toi, leur couleur, et les routes encore à capturer." },
      { number: "02", title: "Détail d'une zone", desc: "Ouvre une zone pour voir son propriétaire, sa moto, et décider si tu veux la reprendre." },
      { number: "03", title: "Historique des rides", desc: "Chaque sortie garde une trace claire : date, zones capturées, et progression." },
      { number: "04", title: "Profil rider", desc: "Retrouve ta moto, ta série, tes zones tenues et les zones qu'on t'a reprises." },
      { number: "05", title: "Crew", desc: "Crée ou rejoins un groupe de riders et additionnez vos territoires sous la même couleur." },
      { number: "06", title: "Classements", desc: "Compare tes zones capturées par ville, région, pays ou au niveau global." },
    ],
  },
  en: {
    eyebrow: "THE APP",
    title: "You ride. The app stacks.",
    sub: "Mid-ride: zero taps. Off the bike: every number readable in two seconds.",
    slides: [
      { number: "01", title: "Territory map", desc: "See nearby zones, their colors, and the roads still open to capture." },
      { number: "02", title: "Zone details", desc: "Open a zone to see its owner, their bike, and decide if you want to take it back." },
      { number: "03", title: "Ride history", desc: "Every ride keeps a clear record: date, captured zones, and progress." },
      { number: "04", title: "Rider profile", desc: "Track your bike, streak, held zones, and the zones taken back from you." },
      { number: "05", title: "Crew", desc: "Create or join a rider group and stack your territories under one shared color." },
      { number: "06", title: "Leaderboards", desc: "Compare captured zones by city, region, country, or globally." },
    ],
  },
  es: {
    eyebrow: "LA APP",
    title: "Tú ruedas. La app suma.",
    sub: "En pleno ride: cero toques. Fuera de la moto: cada cifra legible en dos segundos.",
    slides: [
      { number: "01", title: "Mapa de territorios", desc: "Mira las zonas cercanas, sus colores y las rutas que aún puedes capturar." },
      { number: "02", title: "Detalle de zona", desc: "Abre una zona para ver su dueño, su moto y decidir si quieres recuperarla." },
      { number: "03", title: "Historial de rides", desc: "Cada salida guarda un registro claro: fecha, zonas capturadas y progreso." },
      { number: "04", title: "Perfil rider", desc: "Sigue tu moto, tu racha, tus zonas mantenidas y las que te han quitado." },
      { number: "05", title: "Crew", desc: "Crea o únete a un grupo de riders y sumad territorios con un color compartido." },
      { number: "06", title: "Clasificaciones", desc: "Compara tus zonas capturadas por ciudad, región, país o a nivel global." },
    ],
  },
  de: {
    eyebrow: "DIE APP",
    title: "Du fährst. Die App stapelt.",
    sub: "Während der Fahrt: null Taps. Danach: jede Zahl in zwei Sekunden lesbar.",
    slides: [
      { number: "01", title: "Territorienkarte", desc: "Sieh nahe Zonen, ihre Farben und die Straßen, die du noch erfassen kannst." },
      { number: "02", title: "Zonendetails", desc: "Öffne eine Zone, sieh den Besitzer, sein Motorrad und entscheide, ob du sie zurückholst." },
      { number: "03", title: "Ride-Verlauf", desc: "Jede Fahrt bleibt klar sichtbar: Datum, erfasste Zonen und Fortschritt." },
      { number: "04", title: "Rider-Profil", desc: "Verfolge Motorrad, Streak, gehaltene Zonen und Zonen, die dir genommen wurden." },
      { number: "05", title: "Crew", desc: "Erstelle oder tritt einer Rider-Gruppe bei und sammelt Gebiete in einer gemeinsamen Farbe." },
      { number: "06", title: "Ranglisten", desc: "Vergleiche erfasste Zonen nach Stadt, Region, Land oder weltweit." },
    ],
  },
  it: {
    eyebrow: "L'APP",
    title: "Tu vai. L'app accumula.",
    sub: "In pieno ride: zero tap. Dopo: ogni cifra leggibile in due secondi.",
    slides: [
      { number: "01", title: "Mappa territori", desc: "Vedi le zone vicine, i loro colori e le strade ancora da catturare." },
      { number: "02", title: "Dettaglio zona", desc: "Apri una zona per vedere il proprietario, la moto e decidere se riprenderla." },
      { number: "03", title: "Storico ride", desc: "Ogni uscita resta chiara: data, zone catturate e progressi." },
      { number: "04", title: "Profilo rider", desc: "Tieni d'occhio moto, streak, zone tenute e zone riprese da altri." },
      { number: "05", title: "Crew", desc: "Crea o unisciti a un gruppo di rider e sommate territori con lo stesso colore." },
      { number: "06", title: "Classifiche", desc: "Confronta le zone catturate per città, regione, paese o a livello globale." },
    ],
  },
  pt: {
    eyebrow: "O APP",
    title: "Você anda. O app empilha.",
    sub: "Em pleno ride: zero toques. Depois: cada número legível em dois segundos.",
    slides: [
      { number: "01", title: "Mapa de territórios", desc: "Veja as zonas próximas, suas cores e as estradas que ainda dá para capturar." },
      { number: "02", title: "Detalhe da zona", desc: "Abra uma zona para ver o dono, a moto e decidir se quer tomar de volta." },
      { number: "03", title: "Histórico de rides", desc: "Cada volta fica registrada com data, zonas capturadas e progresso." },
      { number: "04", title: "Perfil rider", desc: "Acompanhe moto, sequência, zonas mantidas e zonas tomadas de você." },
      { number: "05", title: "Crew", desc: "Crie ou entre em um grupo de riders e somem territórios com a mesma cor." },
      { number: "06", title: "Rankings", desc: "Compare zonas capturadas por cidade, região, país ou no ranking global." },
    ],
  },
};

export default function ScreensFancy({ locale }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const copy = COPY[locale];

  const region: "fr" | "us" = locale === "fr" ? "fr" : "us";
  const slides = SLIDE_KEYS.map((key, i) => ({
    src: asset(`/screens/optimized/${region}/${key}-${region}.webp`),
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

            <div className="flex items-center gap-2.5 mt-10" aria-hidden>
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

          <div className="order-1 lg:order-2 justify-self-center">
            <div
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
                    <img
                      src={s.src}
                      alt={s.title}
                      className="block w-full h-auto select-none"
                      width={760}
                      height={1498}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

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
