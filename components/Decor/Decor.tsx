import styles from "./Decor.module.css";

/**
 * Konark chakra — the spoked wheel of the Sun Temple, drawn as pure SVG so it
 * scales crisply and inherits the gold palette via currentColor.
 */
export function Chakra({
  size = 320,
  className = "",
  spinning = false,
}: {
  size?: number;
  className?: string;
  spinning?: boolean;
}) {
  const spokes = Array.from({ length: 16 }, (_, i) => (i * 360) / 16);
  const beads = Array.from({ length: 32 }, (_, i) => (i * 360) / 32);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={`${spinning ? styles.spin : ""} ${className}`}
    >
      {/* Outer rim */}
      <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      {/* Rim beads */}
      {beads.map((a) => (
        <circle
          key={`b-${a}`}
          cx={100 + 92 * Math.cos((a * Math.PI) / 180)}
          cy={100 + 92 * Math.sin((a * Math.PI) / 180)}
          r="1.8"
          fill="currentColor"
          opacity="0.85"
        />
      ))}
      {/* Spokes */}
      {spokes.map((a) => {
        const rad = (a * Math.PI) / 180;
        return (
          <g key={`s-${a}`}>
            <line
              x1={100 + 24 * Math.cos(rad)}
              y1={100 + 24 * Math.sin(rad)}
              x2={100 + 86 * Math.cos(rad)}
              y2={100 + 86 * Math.sin(rad)}
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <circle
              cx={100 + 58 * Math.cos(rad)}
              cy={100 + 58 * Math.sin(rad)}
              r="2.4"
              fill="currentColor"
              opacity="0.8"
            />
          </g>
        );
      })}
      {/* Hub */}
      <circle cx="100" cy="100" r="24" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="16" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="100" cy="100" r="6" fill="currentColor" />
    </svg>
  );
}

/** Ornamental section divider: ── ◆ ── with curled ends */
export function OrnateDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      width="260"
      height="18"
      viewBox="0 0 260 18"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M10 9 H108" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M152 9 H250" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="10" cy="9" r="1.8" fill="currentColor" opacity="0.7" />
      <circle cx="250" cy="9" r="1.8" fill="currentColor" opacity="0.7" />
      <rect x="123" y="2" width="14" height="14" transform="rotate(45 130 9)" stroke="currentColor" strokeWidth="1.2" />
      <rect x="127" y="6" width="6" height="6" transform="rotate(45 130 9)" fill="currentColor" />
      <circle cx="114" cy="9" r="1.6" fill="currentColor" />
      <circle cx="146" cy="9" r="1.6" fill="currentColor" />
    </svg>
  );
}

/** Thin gold filigree corners for framed content */
export function CornerFrame({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.cornerFrame} ${className}`} aria-hidden="true">
      <span className={styles.cornerTL} />
      <span className={styles.cornerTR} />
      <span className={styles.cornerBL} />
      <span className={styles.cornerBR} />
    </div>
  );
}
