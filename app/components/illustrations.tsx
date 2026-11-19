// Original flat-vector illustrations for the marketing site — no photos,
// just shapes drawn in the brand palette so the whole site stays one
// consistent, generated visual system instead of mixing in app screenshots.
import type { ReactNode } from "react";

const GREEN = "#2e7d32";
const GREEN_DARK = "#1f5a23";
const GREEN_LIGHT = "#a5d6a7";
const ORANGE = "#ff9800";
const CREAM = "#faf9f6";

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 480" className="h-full w-full" aria-hidden>
      <circle cx="260" cy="240" r="220" fill={CREAM} stroke={GREEN_LIGHT} strokeWidth="2" />

      {/* house */}
      <g transform="translate(130,120)">
        <path d="M0 110 L130 10 L260 110 V260 H0 Z" fill="#ffffff" stroke={GREEN} strokeWidth="6" strokeLinejoin="round" />
        <path d="M-18 120 L130 4 L278 120" fill="none" stroke={GREEN} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="56" y="150" width="46" height="46" fill={GREEN_LIGHT} />
        <rect x="150" y="150" width="46" height="46" fill={ORANGE} opacity="0.85" />
        <rect x="100" y="205" width="60" height="55" fill={GREEN} />
      </g>

      {/* heart badge, echoes the logo mark */}
      <g transform="translate(228,210)">
        <circle cx="32" cy="32" r="34" fill={GREEN_DARK} />
        <path
          d="M32 48c-12-8-20-15-20-25a12 12 0 0 1 20-8 12 12 0 0 1 20 8c0 10-8 17-20 25Z"
          fill={ORANGE}
        />
      </g>

      {/* sparkle accents */}
      <Sparkle x={90} y={90} s={14} color={ORANGE} />
      <Sparkle x={420} y={150} s={10} color={GREEN} />
      <Sparkle x={400} y={330} s={16} color={ORANGE} />
      <Sparkle x={110} y={360} s={10} color={GREEN} />
    </svg>
  );
}

function Sparkle({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  return (
    <path
      d={`M${x} ${y - s} L${x + s * 0.28} ${y - s * 0.28} L${x + s} ${y} L${x + s * 0.28} ${y + s * 0.28} L${x} ${y + s} L${x - s * 0.28} ${y + s * 0.28} L${x - s} ${y} L${x - s * 0.28} ${y - s * 0.28} Z`}
      fill={color}
      opacity="0.9"
    />
  );
}

export function CleaningIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="32" fill={GREEN} />
      <rect x="18" y="38" width="28" height="16" rx="2" fill="#fff" />
      <path d="M22 38 L30 16 L34 16 L40 38 Z" fill="#fff" opacity="0.9" />
      <path d="M30 16 L34 16 L32 10 Z" fill={ORANGE} />
      <circle cx="46" cy="22" r="3" fill={ORANGE} />
      <circle cx="40" cy="16" r="2" fill="#fff" />
    </svg>
  );
}

export function CaregivingIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="32" fill={GREEN} />
      <path
        d="M32 46c-10-6-18-13-18-22a11 11 0 0 1 18-8 11 11 0 0 1 18 8c0 9-8 16-18 22Z"
        fill="#fff"
      />
      <path d="M18 30h8l3-6 4 10 3-6h9" fill="none" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NannyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="32" fill={GREEN} />
      <circle cx="32" cy="24" r="9" fill="#fff" />
      <path d="M16 50c2-10 8-15 16-15s14 5 16 15Z" fill="#fff" />
      <Sparkle x={47} y={16} s={6} color={ORANGE} />
      <Sparkle x={18} y={20} s={4} color={ORANGE} />
    </svg>
  );
}

export function VerifiedIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        d="M24 3 29 8 36 7 38 14 45 17 42 24 45 31 38 34 36 41 29 40 24 45 19 40 12 41 10 34 3 31 6 24 3 17 10 14 12 7 19 8Z"
        fill={GREEN}
      />
      <path d="M16 24l6 6 11-13" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <rect x="4" y="8" width="40" height="26" rx="8" fill={GREEN} />
      <path d="M14 34v8l10-8Z" fill={GREEN} />
      <circle cx="16" cy="21" r="2.6" fill="#fff" />
      <circle cx="24" cy="21" r="2.6" fill="#fff" />
      <circle cx="32" cy="21" r="2.6" fill="#fff" />
    </svg>
  );
}

export function PaymentIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <rect x="4" y="11" width="40" height="27" rx="5" fill={GREEN} />
      <rect x="4" y="18" width="40" height="6" fill={ORANGE} />
      <rect x="10" y="30" width="12" height="4" rx="2" fill="#fff" />
    </svg>
  );
}

export function SafetyIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path d="M24 4 42 11 V22 C42 34 34 41 24 45 14 41 6 34 6 22 V11 Z" fill={GREEN} />
      <path d="M24 14v12" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="24" cy="32" r="2.4" fill="#fff" />
    </svg>
  );
}

export function ScheduleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <rect x="6" y="8" width="36" height="34" rx="5" fill={GREEN} />
      <rect x="6" y="8" width="36" height="10" rx="5" fill={ORANGE} />
      <rect x="13" y="24" width="7" height="7" fill="#fff" />
      <rect x="24" y="24" width="7" height="7" fill="#fff" opacity="0.7" />
      <rect x="13" y="33" width="7" height="7" fill="#fff" opacity="0.7" />
    </svg>
  );
}

// Thin flowing line-art used as a subtle background motif — same device as
// the admin panel's login art, redone in the real brand green instead of an
// invented teal.
export function LineArtBackdrop({ className = "" }: { className?: string }) {
  const count = 10;
  const paths = Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1);
    const offset = t * 70;
    const y = (v: number) => v + offset;
    return {
      d: `M -60,${y(260)} C 140,${y(120)} 320,${y(320)} 620,${y(40)}`,
      opacity: 0.04 + 0.1 * Math.sin(t * Math.PI),
      key: i,
    };
  });
  return (
    <svg viewBox="0 0 520 420" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      {paths.map((p) => (
        <path key={p.key} d={p.d} fill="none" stroke={GREEN} strokeWidth="1.4" opacity={p.opacity} />
      ))}
    </svg>
  );
}

export function PhoneMock({ children }: { children?: ReactNode }) {
  return (
    <div className="relative mx-auto h-[420px] w-[210px] rounded-[2.2rem] border-[8px] border-foreground bg-white shadow-xl">
      <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-foreground" />
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.6rem] p-4">
        {children}
      </div>
    </div>
  );
}
