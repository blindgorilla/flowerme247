"use client";

import { useLocale } from "@/lib/locale-context";
import { LanguageToggle } from "./LanguageToggle";

export function Header() {
  const { t } = useLocale();

  return (
    <header className="sticky top-0 z-10 border-b border-charcoal/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <div className="flex flex-col leading-none">
          <span className="font-display text-2xl tracking-tight">
            <span className="text-charcoal">Flower</span>
            <span className="text-burnt">Me</span>
          </span>
          <span className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-olive-dark">
            {t.header.tagline}
          </span>
        </div>
        <LanguageToggle />
      </div>
    </header>
  );
}
