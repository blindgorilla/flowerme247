export function OliveBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 12c20-10 40-10 60 0s40 10 56 0"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      {[14, 30, 46, 62, 78, 94, 108].map((x, i) => (
        <ellipse
          key={x}
          cx={x}
          cy={i % 2 === 0 ? 8 : 16}
          rx="5"
          ry="2.5"
          transform={`rotate(${i % 2 === 0 ? -20 : 20} ${x} ${i % 2 === 0 ? 8 : 16})`}
          fill="currentColor"
          opacity="0.85"
        />
      ))}
    </svg>
  );
}
