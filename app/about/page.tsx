import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../components/page-hero";
import { DownloadCta } from "../components/download-cta";
import { VerifiedIcon, SafetyIcon, ChatIcon, ScheduleIcon } from "../components/illustrations";

export const metadata: Metadata = {
  title: "About — myhousemaid.lk",
  description: "Why we built myhousemaid.lk, Sri Lanka's trusted home helper platform.",
};

const VALUES = [
  {
    icon: VerifiedIcon,
    title: "Trust & safety",
    description: "Every helper on the platform goes through document verification before they can be booked.",
  },
  {
    icon: ChatIcon,
    title: "Transparency",
    description: "Chat directly with a helper before booking, and know exactly who is coming to your home.",
  },
  {
    icon: ScheduleIcon,
    title: "Fair for helpers",
    description: "Helpers set their own availability and services, and get paid for the work they do.",
  },
  {
    icon: SafetyIcon,
    title: "Local focus",
    description: "Built for how households in Sri Lanka actually hire home help, not copied from elsewhere.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Hiring home help shouldn't feel like a gamble"
        subtitle="myhousemaid.lk connects households with verified housemaids, caretakers and nannies — and gives helpers a straightforward way to find work."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 pt-16 sm:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/about-photo.jpg"
              alt="A household welcoming a housemaid at their front door"
              fill
              sizes="(min-width: 1024px) 896px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-bold text-foreground">Our story</h2>
          <p className="mt-4 text-muted">
            Finding reliable home help in Sri Lanka has traditionally meant relying on word of
            mouth or informal agents, with little way to verify who you&apos;re actually letting into
            your home. On the other side, many skilled housemaids, caretakers and nannies have no
            easy way to reach households looking for exactly the kind of help they offer.
          </p>
          <p className="mt-4 text-muted">
            We built myhousemaid.lk to close that gap — a single app where households can browse
            verified helper profiles, chat before booking, and pay securely, while helpers build a
            trusted profile, manage their own schedule and get hired without going through an
            agent.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-bold text-foreground">What we care about</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-border bg-background p-6">
                <Icon className="h-12 w-12" />
                <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DownloadCta />
    </>
  );
}
