import { VerifiedIcon, SafetyIcon, PaymentIcon, ChatIcon } from "./illustrations";

const POINTS = [
  { icon: VerifiedIcon, label: "ID & document verified helpers" },
  { icon: ChatIcon, label: "In-app chat before you book" },
  { icon: PaymentIcon, label: "Secure in-app payments" },
  { icon: SafetyIcon, label: "Built-in safety alerts" },
];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:px-8 md:grid-cols-4">
        {POINTS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="h-9 w-9 flex-none" />
            <span className="text-sm font-medium text-foreground/80">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
