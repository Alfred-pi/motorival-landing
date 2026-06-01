import { t, type Locale } from "../i18n/utils";

interface Props { locale: Locale; }

export default function FAQFancy({ locale }: Props) {
  const dict = t(locale);

  return (
    <section id="faq" className="relative py-32 md:py-44 hairline-top">
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
          {dict.faq.items.map((item, i) => (
            <details key={item.q} className="faq-row group border-b border-[var(--color-line)]" open={i === 0}>
              <summary className="list-none cursor-pointer flex items-start justify-between gap-6 py-6 md:py-7 text-left [&::-webkit-details-marker]:hidden">
                <span className="font-heading text-[var(--color-text)] text-lg md:text-xl"
                      style={{ fontWeight: 600 }}>
                  {item.q}
                </span>
                <span aria-hidden
                      className="text-[var(--color-text)] shrink-0 mt-1 transition-transform duration-300 group-open:rotate-45">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <p className="pb-6 md:pb-7 text-[var(--color-muted)] leading-relaxed max-w-[68ch]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
