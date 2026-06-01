import { t, type Locale } from "../i18n/utils";
import StoreBadges from "../components/StoreBadges";

interface Props { locale: Locale; }

export default function FinalCTA({ locale }: Props) {
  const dict = t(locale);

  return (
    <section id="cta" className="relative py-44 md:py-60 hairline-top text-center">
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
          <StoreBadges locale={locale} />
        </div>
      </div>
    </section>
  );
}
