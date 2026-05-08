import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { t, type Locale } from "../i18n/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Props { locale: Locale; }

export default function FAQFancy({ locale }: Props) {
  const dict = t(locale);
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useGSAP(
    () => {
      gsap.from(".faq-head > *", {
        scrollTrigger: { trigger: ".faq-head", start: "top 80%" },
        opacity: 0,
        y: 24,
        filter: "blur(10px)",
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
      });
      gsap.from(".faq-row", {
        scrollTrigger: { trigger: ".faq-list", start: "top 80%" },
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "expo.out",
        stagger: 0.05,
      });
    },
    { scope: root }
  );

  return (
    <section id="faq" ref={root} className="relative py-32 md:py-44 hairline-top">
      <div className="mx-auto max-w-[920px] px-6 md:px-12">
        <header className="faq-head mb-16 md:mb-20">
          <span className="eyebrow text-[var(--color-muted)] block mb-5">
            {dict.faq.eyebrow}
          </span>
          <h2 className="font-display text-[var(--color-text)]"
              style={{ fontSize: "clamp(40px, 5vw, 80px)", letterSpacing: "-0.04em", fontWeight: 800 }}>
            {dict.faq.title}
          </h2>
        </header>

        <div className="faq-list border-t border-[var(--color-line)]">
          {dict.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="faq-row border-b border-[var(--color-line)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-[var(--color-text)] text-lg md:text-xl"
                        style={{ fontWeight: 600 }}>
                    {item.q}
                  </span>
                  <span aria-hidden
                        className="text-[var(--color-text)] shrink-0 mt-1 transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 400ms cubic-bezier(0.32, 0.72, 0, 1), opacity 300ms",
                  }}
                >
                  <p className="pb-6 md:pb-7 text-[var(--color-muted)] leading-relaxed max-w-[68ch]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
