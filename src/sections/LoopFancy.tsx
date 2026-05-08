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
  asset("/screens/us/map-us.png"),
  asset("/screens/us/map-user-details-us.png"),
  asset("/screens/us/user-profil-us.png"),
];

export default function LoopFancy({ locale }: Props) {
  const dict = t(locale);
  const root = useRef<HTMLDivElement>(null);
  const steps = dict.loop.steps;

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Pinned chapter — content stays in viewport while user scrolls.
      // Each step is a sub-scene revealed in sequence.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * 2.4,
          scrub: 0.8,
          pin: ".loop-pin",
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const stepEls = gsap.utils.toArray<HTMLElement>(".loop-step");
      const screenEls = gsap.utils.toArray<HTMLElement>(".loop-screen");
      const dotEls = gsap.utils.toArray<HTMLElement>(".loop-dot");

      // Initial state: only step 0 + screen 0 visible
      gsap.set(stepEls.slice(1), { opacity: 0, yPercent: 8 });
      gsap.set(screenEls.slice(1), { opacity: 0, scale: 0.94 });
      gsap.set(dotEls.slice(1), { opacity: 0.35 });

      // Hero pin opening — all sub-elements rest 1 unit
      tl.to({}, { duration: 0.8 }); // breathing room at start

      // Step 0 → step 1
      tl.to(
        stepEls[0],
        reduced ? { opacity: 0 } : { opacity: 0, yPercent: -8, duration: 1.2, ease: "power2.in" },
        "+=0.4"
      )
        .to(screenEls[0], { opacity: 0, scale: 0.94, duration: 1.2, ease: "power2.in" }, "<")
        .to(dotEls[0], { opacity: 0.35, duration: 0.6 }, "<")
        .to(stepEls[1], { opacity: 1, yPercent: 0, duration: 1.2, ease: "power2.out" }, "<+=0.2")
        .to(screenEls[1], { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }, "<")
        .to(dotEls[1], { opacity: 1, duration: 0.6 }, "<");

      // Step 1 → step 2
      tl.to({}, { duration: 0.8 }); // hold step 1
      tl.to(
        stepEls[1],
        reduced ? { opacity: 0 } : { opacity: 0, yPercent: -8, duration: 1.2, ease: "power2.in" },
        "+=0.4"
      )
        .to(screenEls[1], { opacity: 0, scale: 0.94, duration: 1.2, ease: "power2.in" }, "<")
        .to(dotEls[1], { opacity: 0.35, duration: 0.6 }, "<")
        .to(stepEls[2], { opacity: 1, yPercent: 0, duration: 1.2, ease: "power2.out" }, "<+=0.2")
        .to(screenEls[2], { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }, "<")
        .to(dotEls[2], { opacity: 1, duration: 0.6 }, "<");

      tl.to({}, { duration: 0.8 }); // hold step 2 at end

      // Subtle continuous floating on the active screen
      if (!reduced) {
        gsap.to(".loop-screens-stage", {
          y: -10,
          duration: 4.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="loop"
      className="relative border-t border-[var(--color-line)]"
    >
      <div className="loop-pin h-screen w-full overflow-hidden flex items-center">
        <div aria-hidden className="absolute inset-0 -z-10 spotlight-2 pointer-events-none" />

        <div className="mx-auto max-w-[1320px] w-full px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-center">
          {/* LEFT — pinned title + step copies */}
          <div>
            <header className="mb-12">
              <span className="eyebrow text-[var(--color-accent)] block mb-4">
                {dict.loop.eyebrow}
              </span>
              <h2
                className="font-display italic leading-[1.02] max-w-[20ch]"
                style={{ fontSize: "clamp(36px, 5.5vw, 80px)", letterSpacing: "-0.035em" }}
              >
                {dict.loop.title}
              </h2>
            </header>

            <div className="relative" style={{ minHeight: 280 }}>
              {steps.map((step) => (
                <div key={step.num} className="loop-step absolute inset-0">
                  <span className="font-display text-sm text-[var(--color-accent)] tracking-[0.18em] block mb-4">
                    {step.num} · {step.eyebrow}
                  </span>
                  <h3
                    className="font-display italic leading-[1.05] mb-5 whitespace-pre-line"
                    style={{ fontSize: "clamp(28px, 3.6vw, 48px)", letterSpacing: "-0.02em" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-[48ch]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Step indicator dots */}
            <div className="flex gap-3 mt-12">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className="loop-dot block w-2 h-2 rounded-full"
                  style={{ background: "var(--color-accent)" }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — iPhone stack with absolute crossfade */}
          <div className="loop-screens-stage relative flex items-center justify-center">
            <div
              className="relative"
              style={{
                width: "min(420px, 80vw)",
                aspectRatio: "1179 / 2556",
              }}
            >
              {/* Glow shared */}
              <div
                aria-hidden
                className="device-glow"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(255,23,68,0.55) 0%, transparent 70%)",
                }}
              />
              {SCREENS.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="loop-screen screen-shot absolute inset-0 w-full h-full object-cover will-change-transform"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
