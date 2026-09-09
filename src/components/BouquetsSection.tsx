"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

const images = [
  "/images/bouquets/happy-day.jpg",
  "/images/bouquets/mediterranean.jpg",
  "/images/bouquets/signature.jpg",
];

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
            className="flex flex-col overflow-hidden rounded-2xl border border-charcoal/5 bg-cream-dark/50 shadow-sm"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={images[i]}
                alt={item.name}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="px-6 py-6 text-center">
              <h3 className="font-display text-xl text-charcoal">{item.name}</h3>
              <p className="mt-2 text-sm text-charcoal/70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
