export function BouquetIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M32 30 L24 56 L40 56 Z"
        fill="currentColor"
        opacity="0.15"
      />
      <circle cx="32" cy="20" r="8" fill="currentColor" opacity="0.9" />
      <circle cx="20" cy="26" r="7" fill="currentColor" opacity="0.7" />
      <circle cx="44" cy="26" r="7" fill="currentColor" opacity="0.7" />
      <circle cx="24" cy="14" r="6" fill="currentColor" opacity="0.55" />
      <circle cx="40" cy="14" r="6" fill="currentColor" opacity="0.55" />
      <circle cx="32" cy="20" r="3" fill="var(--color-cream)" />
    </svg>
  );
}
