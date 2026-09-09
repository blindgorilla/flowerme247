"use client";

import { useLocale } from "@/lib/locale-context";
import { BouquetIcon } from "./BouquetIcon";

const accents = ["text-burnt", "text-olive", "text-charcoal"];

export function BouquetsSection() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-olive-dark">
          {t.bouquets.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl text-charcoal">{t.bouquets.title}</h2>
        <p className="mt-3 text-charcoal/70">{t.bouquets.subtitle}</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {t.bouquets.items.map((item, i) => (
          <div
            key={item.name}
            className="flex flex-col items-center rounded-2xl border border-charcoal/5 bg-cream-dark/50 px-6 py-8 text-center shadow-sm"
          >
            <BouquetIcon className={`h-14 w-14 ${accents[i % accents.length]}`} />
            <h3 className="mt-4 font-display text-xl text-charcoal">{item.name}</h3>
            <p className="mt-2 text-sm text-charcoal/70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
