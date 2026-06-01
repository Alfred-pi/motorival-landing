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
    view: "Expand",
    open: "open the screenshot full size",
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
    view: "Ampliar",
    open: "abrir la captura en grande",
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
    view: "Vergrößern",
    open: "Screenshot groß öffnen",
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
    view: "Ingrandisci",
    open: "aprire lo screenshot grande",
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
    view: "Ampliar",
    open: "abrir o screenshot em tamanho grande",
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
