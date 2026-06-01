import { t, type Locale } from "../i18n/utils";
import { appStoreUrl } from "../lib/appStore";

interface Props {
  locale: Locale;
  align?: "center" | "start";
}

export default function StoreBadges({ locale, align = "center" }: Props) {
  const dict = t(locale);
  const alignment = align === "start" ? "lg:justify-start" : "";

  return (
    <div className={`flex flex-wrap items-center justify-center ${alignment} gap-3`}>
      <a
        href={appStoreUrl(locale)}
        target="_blank"
        rel="noopener"
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

      <span
        role="status"
        aria-label={dict.badge.androidAria}
        title={dict.badge.androidSoon}
        className="inline-flex h-[54px] min-w-[164px] items-center justify-center rounded-[10px] border border-[var(--color-line)] bg-[color-mix(in_oklab,var(--color-surface)_88%,transparent)] px-4 text-left"
      >
        <span className="leading-none">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
            {dict.badge.androidKicker}
          </span>
          <span className="mt-1 block text-[17px] font-black tracking-normal text-[var(--color-text)]">
            {dict.badge.googlePlay}
          </span>
        </span>
      </span>
    </div>
  );
}
