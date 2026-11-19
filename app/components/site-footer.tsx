import Image from "next/image";
import Link from "next/link";

const EXPLORE_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How it Works" },
  { href: "/#for-helpers", label: "For Helpers" },
  { href: "/#safety", label: "Safety" },
  { href: "/#download", label: "Download" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="myhousemaid.lk" width={32} height={32} />
              <span className="text-base font-bold text-foreground">
                myhouse<span className="text-primary">maid</span>
                <span className="text-secondary">.lk</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-muted">Sri Lanka&apos;s trusted home helper platform.</p>
            <ul className="mt-4 space-y-1 text-sm text-muted">
              <li>support@myhousemaid.lk</li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            <FooterColumn title="Explore" links={EXPLORE_LINKS} />
            <FooterColumn title="Company" links={COMPANY_LINKS} />
            <FooterColumn title="Legal" links={LEGAL_LINKS} />
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          © 2026 myhousemaid.lk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-muted hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
