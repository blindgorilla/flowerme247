"use client";

import { useLocale } from "@/lib/locale-context";
import type { Locale } from "@/lib/types";

const options: { locale: Locale; label: string; flag: string; name: string }[] = [
  { locale: "en", label: "EN", flag: "🇬🇧", name: "English" },
  { locale: "el", label: "ΕΛ", flag: "🇨🇾", name: "Ελληνικά" },
];

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center gap-1 rounded-full border border-charcoal/10 bg-cream-dark/60 p-1"
    >
      {options.map((option) => {
        const active = option.locale === locale;
        return (
          <button
            key={option.locale}
            type="button"
            onClick={() => setLocale(option.locale)}
            aria-pressed={active}
            aria-label={option.name}
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sm font-medium transition-colors ${
              active
                ? "bg-cream text-charcoal shadow-sm"
                : "text-charcoal/50 hover:text-charcoal/80"
            }`}
          >
            <span aria-hidden="true">{option.flag}</span>
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
