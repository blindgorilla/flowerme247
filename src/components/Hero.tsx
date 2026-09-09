"use client";

import { useLocale } from "@/lib/locale-context";
import { OliveBranch } from "./OliveBranch";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-3xl px-6 pb-16 pt-16 text-center sm:px-8 sm:pt-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-burnt">
        {t.hero.eyebrow}
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
        {t.hero.headline}
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-charcoal/70">
        {t.hero.subheadline}
      </p>
      <OliveBranch className="mx-auto mt-8 h-5 w-28 text-olive" />
      <a
        href="#waitlist"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-burnt px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-burnt-dark"
      >
        {t.hero.cta}
      </a>
    </section>
  );
}
