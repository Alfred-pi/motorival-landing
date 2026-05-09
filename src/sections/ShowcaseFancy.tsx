import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { t, type Locale } from "../i18n/utils";
import { asset } from "../lib/asset";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
  locale: Locale;
}

const SCREENS = [
  { src: asset("/screens/us/map-us.png"), caption: "Living territory" },
  { src: asset("/screens/us/capture-us.png"), caption: "Tap a rider" },
  { src: asset("/screens/us/crew-us.png"), caption: "Crew turf" },
  { src: asset("/screens/us/profil-us.png"), caption: "Your persona" },
  { src: asset("/screens/us/ride-us.png"), caption: "Ride history" },
  { src: asset("/screens/us/leaderbord-us.png"), caption: "Leaderboard" },
  { src: asset("/screens/us/paywall-us.png"), caption: "Rival Pass" },
];

export default function ShowcaseFancy({ locale }: Props) {
  const dict = t(locale);
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Header reveal
      gsap.from(".sc-header > *", {
        scrollTrigger: { trigger: ".sc-header", start: "top 80%" },
        y: 24,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.06,
      });

      if (reduced) return;

      const track = root.current?.querySelector<HTMLElement>(".sc-track");
      if (!track) return;

      // Compute the total horizontal scroll distance
      const distance = () => track.scrollWidth - window.innerWidth + 64;

      // Pin the section and translate the track horizontally as user scrolls
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + distance(),
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Per-card subtle scale + tilt as it crosses the viewport center
      gsap.utils.toArray<HTMLElement>(".sc-card").forEach((card) => {
        gsap.to(card, {
          scale: 1.04,
          rotate: -1,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: card,
            containerAnimation: tween,
            start: "left center",
            end: "right center",
            scrub: 0.4,
          },
        });
      });

      return () => tween.kill();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="sc-section relative py-24 md:py-32 border-t border-[var(--color-line)] overflow-hidden"
      style={{ height: "100svh" }}
    >
      <div aria-hidden className="absolute inset-0 -z-10 spotlight-2 pointer-events-none" />

      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <header className="sc-header mb-14 md:mb-16">
          <span className="eyebrow text-[var(--color-accent)] block mb-4">
            {dict.showcase.eyebrow}
          </span>
          <h2
            className="font-display italic leading-[1.02] mb-5 max-w-[24ch]"
            style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.035em" }}
          >
            {dict.showcase.title}
          </h2>
          <p className="text-[var(--color-muted)] text-base md:text-lg max-w-[55ch]">
            {dict.showcase.sub}
          </p>
        </header>
      </div>

      {/* Horizontal track — pinned + scrubbed */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/4 pointer-events-none">
        <div className="sc-track flex gap-10 px-[max(2rem,8vw)] will-change-transform">
          {SCREENS.map((s, i) => (
            <figure
              key={s.src + i}
              className="sc-card shrink-0 flex flex-col items-center gap-4 will-change-transform"
              style={{ width: "clamp(220px, 24vw, 340px)" }}
            >
              <div className="relative w-full">
                <div
                  aria-hidden
                  className="device-glow"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(255,23,68,0.45) 0%, transparent 70%)",
                  }}
                />
                <img
                  src={s.src}
                  alt={s.caption}
                  className="screen-shot w-full h-auto block"
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
              </div>
              <figcaption className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] text-center">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
