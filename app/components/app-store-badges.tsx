import Link from "next/link";

type Props = {
  variant?: "dark" | "light";
  className?: string;
};

// Generic "download the app" buttons — plain icon + text, not the official
// trademarked store badge artwork, since we don't have real store listings
// to link to yet. Swap the href values once the app is actually published.
// They link to the homepage's #download section so they work from any page.
export function AppStoreBadges({ variant = "dark", className = "" }: Props) {
  const isDark = variant === "dark";
  const base = isDark
    ? "bg-foreground text-white hover:bg-black"
    : "bg-white text-foreground border border-border hover:bg-background";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link
        href="/#download"
        className={`flex items-center gap-3 rounded-xl px-5 py-3 transition-colors ${base}`}
      >
        <AppleIcon />
        <span className="text-left leading-tight">
          <span className="block text-[11px] opacity-80">Download on the</span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </Link>
      <Link
        href="/#download"
        className={`flex items-center gap-3 rounded-xl px-5 py-3 transition-colors ${base}`}
      >
        <PlayIcon />
        <span className="text-left leading-tight">
          <span className="block text-[11px] opacity-80">Get it on</span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </Link>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.365 1.43c0 1.14-.42 2.1-1.26 2.91-.9.9-2.01 1.38-3.21 1.29-.12-1.11.42-2.25 1.23-3.03.84-.81 2.07-1.38 3.09-1.44.03.09.09.18.15.27Zm3.63 16.77c-.48 1.14-.72 1.65-1.35 2.64-.87 1.35-2.1 3.03-3.63 3.06-1.35.03-1.71-.9-3.54-.9-1.83 0-2.25.87-3.6.93-1.47.06-2.58-1.47-3.45-2.79-1.89-2.85-3.33-8.07-1.38-11.58.96-1.74 2.7-2.85 4.56-2.88 1.41-.03 2.76.96 3.63.96.84 0 2.49-1.17 4.2-1 .72.03 2.73.3 4.02 2.19-.105.06-2.4 1.41-2.37 4.17.03 3.3 2.88 4.4 2.91 4.2Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1L13 12v-.2L3.7 2.2l-.1.1Z" />
      <path d="M16.1 15.1 13 12v-.2l3.1-3.1 6.9 3.9c1 .6 1 1.5 0 2.1l-6.9 3.9-.1-.6Z" />
      <path d="M16.1 8.9 13 12 3.7 2.7c.3-.3.8-.3 1.3-.1l11.1 6.3Z" />
      <path d="M16.1 15.1 5 21.4c-.5.3-1 .2-1.3-.1L13 12l3.1 3.1Z" />
    </svg>
  );
}
