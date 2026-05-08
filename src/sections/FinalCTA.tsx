import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { t, type Locale } from "../i18n/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props { locale: Locale; }

export default function FinalCTA({ locale }: Props) {
  const dict = t(locale);
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-fade", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        opacity: 0,
        y: 28,
        filter: "blur(12px)",
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.09,
      });
    },
    { scope: root }
  );

  return (
    <section id="cta" ref={root} className="relative py-44 md:py-60 hairline-top text-center">
      <div className="mx-auto max-w-[1320px] px-6 md:px-12">
        <span className="cta-fade eyebrow text-[var(--color-muted)] block mb-8">
          {dict.finalCta.eyebrow}
        </span>

        <h2 className="cta-fade font-display text-[var(--color-text)] mx-auto max-w-[16ch]"
            style={{ fontSize: "clamp(56px, 9vw, 168px)", lineHeight: 0.9, letterSpacing: "-0.045em", fontWeight: 900 }}>
          <span className="block">{dict.finalCta.title[0]}</span>
          <span className="block">{dict.finalCta.title[1].replace(/\.$/, "")}<span className="text-[var(--color-accent)]">.</span></span>
        </h2>

        <p className="cta-fade text-base md:text-lg max-w-[44ch] mx-auto mt-10 mb-14 text-[var(--color-muted)]">
          {dict.finalCta.sub}
        </p>

        <div className="cta-fade inline-flex flex-col items-center gap-4">
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
          <p className="eyebrow text-[var(--color-muted)] mt-1">
            {dict.finalCta.soon}
          </p>
        </div>
      </div>
    </section>
  );
}
