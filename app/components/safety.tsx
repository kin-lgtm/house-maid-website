import { VerifiedIcon, SafetyIcon, PaymentIcon, ScheduleIcon } from "./illustrations";

const FEATURES = [
  {
    icon: VerifiedIcon,
    title: "Document verification",
    description:
      "Every helper's ID and work documents are reviewed by our team before they're marked verified and shown to households.",
  },
  {
    icon: SafetyIcon,
    title: "Safety alerts",
    description: "Built-in SOS alerts so help is one tap away during an active placement.",
  },
  {
    icon: PaymentIcon,
    title: "Secure payments",
    description: "Subscriptions and payments happen inside the app — no cash, no middlemen.",
  },
  {
    icon: ScheduleIcon,
    title: "Flexible scheduling",
    description: "Book one-off visits or recurring schedules that fit your household.",
  },
];

export function Safety() {
  return (
    <section id="safety" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">Safety & trust</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Built so both sides feel safe
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-border bg-surface p-6">
              <Icon className="h-12 w-12" />
              <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
