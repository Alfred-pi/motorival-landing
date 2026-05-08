import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { t, type Locale } from "../i18n/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props {
  locale: Locale;
}

export default function NemesisFancy({ locale }: Props) {
  const dict = t(locale);
  const root = useRef<HTMLElement>(null);
  const [you, setYou] = useState(0);
  const [them, setThem] = useState(0);
  const youTarget = parseInt(dict.nemesis.youZones, 10) || 0;
  const themTarget = parseInt(dict.nemesis.themZones, 10) || 0;

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          once: true,
        },
      });

      // Header word reveal
      tl.from(".nem-header > *", {
        y: 24,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
      });

      // Avatars slide in from sides — physics-y spring
      tl.from(
        ".nem-you",
        reduced
          ? { opacity: 0, duration: 0.6 }
          : { x: -120, scale: 0.85, opacity: 0, duration: 1.1, ease: "expo.out" },
        "-=0.4"
      )
        .from(
          ".nem-them",
          reduced
            ? { opacity: 0, duration: 0.6 }
            : { x: 120, scale: 0.85, opacity: 0, duration: 1.1, ease: "expo.out" },
          "<"
        )
        .from(
          ".nem-vs",
          reduced
            ? { opacity: 0 }
            : { scale: 0.3, rotate: -25, opacity: 0, duration: 0.9, ease: "back.out(1.6)" },
          "-=0.5"
        );

      // Counters tick up — start once header animated
      const counterY = { v: 0 };
      const counterT = { v: 0 };
      tl.to(
        counterY,
        {
          v: youTarget,
          duration: 1.6,
          ease: "expo.out",
          onUpdate: () => setYou(Math.round(counterY.v)),
        },
        "-=0.6"
      ).to(
        counterT,
        {
          v: themTarget,
          duration: 1.6,
          ease: "expo.out",
          onUpdate: () => setThem(Math.round(counterT.v)),
        },
        "<"
      );

      // Continuous gentle float
      if (!reduced) {
        gsap.to(".nem-you", { y: -8, duration: 4, ease: "sine.inOut", repeat: -1, yoyo: true });
        gsap.to(".nem-them", {
          y: -8,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 2,
        });
        gsap.to(".nem-vs", { scale: 1.05, duration: 3.2, ease: "sine.inOut", repeat: -1, yoyo: true });
      }
    },
    { scope: root, dependencies: [youTarget, themTarget] }
  );

  const youInitials = dict.nemesis.youName.slice(0, 2).toUpperCase();
  const themInitials = dict.nemesis.themName.slice(0, 2).toUpperCase();

  return (
    <section
      ref={root}
      className="relative py-32 md:py-44 overflow-hidden border-t border-[var(--color-line)]"
    >
      <div aria-hidden className="absolute inset-0 -z-10 hex-grid opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 25% 50%, color-mix(in oklab, #4D7FFF 12%, transparent) 0%, transparent 38%), radial-gradient(circle at 75% 50%, color-mix(in oklab, var(--color-accent) 18%, transparent) 0%, transparent 40%)",
        }}
      />

      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <header className="nem-header text-center mb-20 md:mb-24 max-w-[28ch] mx-auto">
          <span className="eyebrow text-[var(--color-accent)] block mb-5">
            {dict.nemesis.eyebrow}
          </span>
          <h2
            className="font-display italic leading-[0.96] tracking-tight"
            style={{ fontSize: "clamp(40px, 7vw, 104px)", letterSpacing: "-0.035em" }}
          >
            {dict.nemesis.title}
          </h2>
          <p className="text-[var(--color-muted)] text-base md:text-lg mt-6 max-w-[48ch] mx-auto leading-relaxed">
            {dict.nemesis.sub}
          </p>
        </header>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-10 md:gap-20">
          <figure className="nem-you flex flex-col items-center text-center">
            <div className="rider-avatar rider-avatar--you relative">
              <span className="font-display italic">{youInitials}</span>
              <span className="rider-pulse" aria-hidden />
            </div>
            <figcaption className="mt-6">
              <div className="eyebrow text-[var(--color-muted)] mb-1.5">
                {dict.nemesis.youLabel}
              </div>
              <div className="font-display text-lg md:text-xl">{dict.nemesis.youName}</div>
              <div
                className="font-display italic text-2xl md:text-3xl mt-1 tabular-nums"
                style={{ letterSpacing: "-0.02em" }}
              >
                {you} km²
              </div>
            </figcaption>
          </figure>

          <div className="nem-vs flex flex-col items-center gap-3" aria-hidden>
            <div className="vs-divider" />
            <span className="vs-label font-display italic">VS</span>
            <div className="vs-divider" />
          </div>

          <figure className="nem-them flex flex-col items-center text-center">
            <div className="rider-avatar rider-avatar--them relative">
              <span className="font-display italic">{themInitials}</span>
            </div>
            <figcaption className="mt-6">
              <div className="eyebrow text-[var(--color-accent)] mb-1.5">
                {dict.nemesis.themLabel}
              </div>
              <div className="font-display text-lg md:text-xl">{dict.nemesis.themName}</div>
              <div
                className="font-display italic text-2xl md:text-3xl mt-1 tabular-nums"
                style={{ letterSpacing: "-0.02em" }}
              >
                {them} km²
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
