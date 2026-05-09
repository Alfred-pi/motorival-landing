import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { t, type Locale } from "../i18n/utils";
import HeroVideoPlayer from "../components/HeroVideoPlayer";

interface Props {
  locale: Locale;
}

/** Build a flat-top hex grid as SVG paths. */
function buildHexes(cols: number, rows: number, size: number) {
  const w = size * 2;
  const h = Math.sqrt(3) * size;
  const cells: { x: number; y: number; d: string; key: string }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * (1.5 * size);
      const y = r * h + (c % 2 === 0 ? 0 : h / 2);
      const d = [
        `M${x + size},${y}`,
        `L${x + size / 2},${y + h / 2}`,
        `L${x - size / 2},${y + h / 2}`,
        `L${x - size},${y}`,
        `L${x - size / 2},${y - h / 2}`,
        `L${x + size / 2},${y - h / 2}`,
        "Z",
      ].join(" ");
      cells.push({ x, y, d, key: `${c}-${r}` });
    }
    void w; // unused
  }
  return cells;
}

export default function HeroFancy({ locale }: Props) {
  const dict = t(locale);
  const root = useRef<HTMLElement>(null);
  const cells = buildHexes(10, 8, 36);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      // Continuous random hex pulse — signature ambient.
      // 4 colour variants (red kept as the primary, joined by cyan, magenta
      // and gold-yellow — the same hues that appear on rider trails in the
      // app). 14 concurrent pulses for a denser, more alive grid.
      const allCells = gsap.utils.toArray<SVGPathElement>(".hex-cell");
      const VARIANTS = ["c1", "c2", "c3", "c4"] as const;
      const pulse = () => {
        const target = gsap.utils.random(allCells);
        if (!target) return;
        const variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
        target.classList.add("is-on", `is-on--${variant}`);
        gsap.delayedCall(gsap.utils.random(0.5, 1.6), () => {
          target.classList.remove("is-on", `is-on--${variant}`);
          pulse();
        });
      };
      for (let i = 0; i < 14; i++) {
        gsap.delayedCall(i * 0.18, pulse);
      }

      // Phone is intentionally still — no float / hover. Only the screen
      // content swaps inside a fixed device frame.
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="hero relative w-full overflow-hidden"
      style={{ minHeight: "calc(100svh - 28px - clamp(34px, 4.2vw, 44px))" }}
    >
      {/* Hex grid signature background — visible on every viewport.
          Desktop: right half. Mobile/tablet: full width, lower opacity, behind the centered stack. */}
      <div aria-hidden className="hex-bg block">
        <svg
          className="absolute right-0 top-0 h-full w-full lg:w-[70%]"
          viewBox="-50 -50 700 600"
          preserveAspectRatio="xMaxYMid slice"
        >
          {cells.map((c) => (
            <path key={c.key} d={c.d} className="hex-cell" />
          ))}
        </svg>
      </div>

      <div
        className="relative mx-auto max-w-[1320px] w-full px-5 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center text-center lg:text-left"
        style={{ minHeight: "calc(100svh - 28px - clamp(34px, 4.2vw, 44px))" }}
      >
        {/* COPY — centered on mobile/tablet, left-aligned on desktop */}
        <div className="hero-stage py-8 md:py-12 flex flex-col items-center lg:items-start">
          <span className="eyebrow text-[var(--color-muted)] block mb-6 md:mb-8">
            {dict.hero.eyebrow}
          </span>

          <h1
            className="hero-h1 font-display text-[var(--color-text)]"
            style={{
              fontSize: "clamp(40px, 9.5vw, 152px)",
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
              fontWeight: 900,
            }}
          >
            <span className="block">{dict.hero.headline[0].replace(/\.$/, "")}</span>
            <span className="block">{dict.hero.headline[1].replace(/\.$/, "")}</span>
            <span className="block italic" style={{ color: "var(--color-accent)" }}>
              {dict.hero.headline[2].replace(/\.$/, "")}<span aria-hidden>.</span>
            </span>
          </h1>

          <p
            className="text-base md:text-lg lg:text-xl text-[var(--color-muted)] leading-relaxed max-w-[44ch] mt-7 md:mt-9 mx-auto lg:mx-0"
          >
            {dict.hero.sub}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-8 md:mt-10">
            <a
              href="#"
              data-appstore-trigger
              className="inline-flex transition-transform duration-300 hover:-translate-y-0.5"
              aria-label={dict.badge.aria}
              style={{ height: 54 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}badges/app-store-en.svg`}
                alt={dict.badge.aria}
                style={{ height: 54, width: "auto", borderRadius: 10 }}
              />
            </a>
          </div>
        </div>

        {/* iPhone with looping video — visible on every viewport, centered */}
        <div className="flex items-center justify-center pb-12 lg:pb-0 lg:order-none">
          <div
            className="hero-phone relative"
            style={{
              width: "clamp(280px, 36vw, 420px)",
              maxWidth: "min(82vw, 420px)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 -m-8 rounded-[40%]"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--color-accent) 35%, transparent) 0%, transparent 70%)",
                filter: "blur(48px)",
                opacity: 0.5,
              }}
            />
            <HeroVideoPlayer />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-60 hidden lg:block">
        <div className="eyebrow text-[var(--color-muted)] flex items-center gap-2">
          <span>SCROLL</span>
          <span aria-hidden className="block h-[1px] w-7 bg-current" />
        </div>
      </div>
    </section>
  );
}
