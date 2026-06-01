import { type Locale } from "../i18n/utils";
import { asset } from "../lib/asset";

interface Props { locale: Locale; }

interface SlideCopy { number: string; title: string; desc: string; }

// Six native screens, six narrative beats. Order is intentional:
// terrain → mid-ride interaction → loot history → identity → collective → global ranking.
const SLIDE_KEYS = ["map", "capture", "ride", "profil", "crew", "leaderbord"] as const;

const COPY: Record<Locale, { eyebrow: string; title: string; sub: string; view: string; open: string; slides: SlideCopy[] }> = {
  fr: {
    eyebrow: "L'APP",
    title: "Tu rides. L'app empile.",
    sub: "Pendant le ride : aucun tap. Après : chaque chiffre se lit en deux secondes.",
    view: "Agrandir",
    open: "ouvrir le screenshot en grand",
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
    view: "Expand",
    open: "open the screenshot full size",
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
    view: "Ampliar",
    open: "abrir la captura en grande",
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
    view: "Vergrößern",
    open: "Screenshot groß öffnen",
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
    view: "Ingrandisci",
    open: "aprire lo screenshot grande",
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
    view: "Ampliar",
    open: "abrir o screenshot em tamanho grande",
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
  const copy = COPY[locale];

  // FR ships native French shots; every other locale uses the US set.
  const region: "fr" | "us" = locale === "fr" ? "fr" : "us";
  const slides = SLIDE_KEYS.map((key, i) => ({
    src: asset(`/screens/optimized/${region}/${key}-${region}.webp`),
    ...copy.slides[i],
  }));

  return (
    <section className="relative hairline-top overflow-hidden py-24 md:py-32" data-screen-gallery>
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

      <div className="mx-auto max-w-[1320px] w-full px-6 md:px-12">
        <header className="max-w-[58ch] mb-14 md:mb-20">
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
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[var(--color-line)] hairline-top hairline-bot">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              className="screen-card group bg-[var(--color-bg)] p-5 md:p-7 grid grid-cols-[104px_1fr] sm:grid-cols-[148px_1fr] gap-5 items-start text-left transition-[background-color,transform,box-shadow] duration-300 hover:bg-[var(--color-bg-2)] hover:-translate-y-1 focus-visible:z-10"
              data-screen-open
              data-screen-src={s.src}
              data-screen-title={s.title}
              data-screen-desc={s.desc}
              data-screen-index={`${s.number} / ${String(slides.length).padStart(2, "0")}`}
              aria-label={`${s.title} — ${copy.open}`}
            >
              <span className="relative block overflow-hidden rounded-[22px] bg-black shadow-[0_18px_42px_-28px_rgba(0,0,0,0.65)] transition-transform duration-300 group-hover:scale-[1.045]">
                <img
                  src={s.src}
                  alt=""
                  className="block w-full h-auto select-none transition-transform duration-500 group-hover:scale-[1.04]"
                  width={760}
                  height={1498}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(180deg,transparent_40%,rgba(0,0,0,0.50)_100%)]" />
                <span className="absolute bottom-2 left-2 right-2 rounded-lg bg-white/90 px-2 py-1 text-center text-[10px] font-black uppercase tracking-[0.12em] text-black opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {copy.view}
                </span>
              </span>
              <span className="block">
                <span
                  className="font-heading text-[var(--color-accent)] block mb-3"
                  style={{ fontSize: "13px", letterSpacing: "0.18em", fontWeight: 600 }}
                >
                  {s.number} / {String(slides.length).padStart(2, "0")}
                </span>
                <h3
                  className="font-display text-[var(--color-text)] mb-3"
                  style={{ fontSize: "clamp(22px, 2vw, 30px)", letterSpacing: "-0.025em", fontWeight: 700 }}
                >
                  {s.title}
                </h3>
                <p className="text-[var(--color-muted)] text-base leading-relaxed">
                  {s.desc}
                </p>
              </span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        className="screen-dialog m-0 max-w-none bg-transparent p-0 text-[var(--color-text)] backdrop:bg-black/80 backdrop:backdrop-blur-sm"
        aria-label="Screenshot MotoRival"
        data-screen-dialog
      >
        <div className="fixed inset-0 grid place-items-center p-4 md:p-8" data-screen-backdrop>
          <figure className="relative grid w-full max-w-[1100px] grid-cols-1 items-center gap-5 rounded-[8px] border border-white/10 bg-[color-mix(in_oklab,var(--color-bg)_92%,transparent)] p-4 shadow-[0_28px_120px_-36px_rgba(0,0,0,0.75)] md:grid-cols-[minmax(260px,380px)_1fr] md:p-6">
            <button
              type="button"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-bg-3)] text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
              aria-label="Fermer"
              data-screen-close
            >
              <span aria-hidden style={{ fontSize: "24px", lineHeight: 1 }}>×</span>
            </button>
            <div className="mx-auto w-[min(72vw,360px)] md:w-full">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
                alt=""
                className="block h-auto w-full rounded-[30px] shadow-[0_30px_90px_-42px_rgba(0,0,0,0.9)]"
                width={760}
                height={1498}
                loading="lazy"
                decoding="async"
                data-screen-dialog-img
              />
            </div>
            <figcaption className="pr-10 md:pr-14">
              <span
                className="font-heading text-[var(--color-accent)] block mb-4"
                style={{ fontSize: "13px", letterSpacing: "0.18em", fontWeight: 600 }}
                data-screen-dialog-index
              >
                {slides[0].number} / {String(slides.length).padStart(2, "0")}
              </span>
              <h3
                className="font-display text-[var(--color-text)] mb-5"
                style={{ fontSize: "clamp(30px, 4vw, 64px)", letterSpacing: "-0.04em", fontWeight: 800 }}
                data-screen-dialog-title
              >
                {slides[0].title}
              </h3>
              <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-[46ch]" data-screen-dialog-desc>
                {slides[0].desc}
              </p>
            </figcaption>
          </figure>
        </div>
      </dialog>

      <script dangerouslySetInnerHTML={{ __html: `
        (() => {
          const gallery = document.currentScript?.closest("[data-screen-gallery]");
          if (!gallery) return;
          const dialog = gallery.querySelector("[data-screen-dialog]");
          const image = gallery.querySelector("[data-screen-dialog-img]");
          const title = gallery.querySelector("[data-screen-dialog-title]");
          const desc = gallery.querySelector("[data-screen-dialog-desc]");
          const index = gallery.querySelector("[data-screen-dialog-index]");
          const close = gallery.querySelector("[data-screen-close]");
          if (!dialog || !image || !title || !desc || !index || !close) return;

          gallery.querySelectorAll("[data-screen-open]").forEach((card) => {
            card.addEventListener("click", () => {
              image.src = card.dataset.screenSrc || "";
              title.textContent = card.dataset.screenTitle || "";
              desc.textContent = card.dataset.screenDesc || "";
              index.textContent = card.dataset.screenIndex || "";
              if (typeof dialog.showModal === "function") dialog.showModal();
            });
          });

          close.addEventListener("click", () => dialog.close());
          dialog.addEventListener("click", (event) => {
            if (event.target?.hasAttribute?.("data-screen-backdrop")) dialog.close();
          });
        })();
      ` }} />
    </section>
  );
}
