"use client";

import { useLocale } from "@/lib/locale-context";
import { OliveBranch } from "./OliveBranch";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="mt-auto px-6 py-10 text-center sm:px-8">
      <OliveBranch className="mx-auto h-4 w-24 text-olive/70" />
      <p className="mt-4 text-xs text-charcoal/50">{t.footer.note}</p>
    </footer>
  );
}
