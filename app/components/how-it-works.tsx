import type { ReactNode } from "react";
import { PhoneMock, ScheduleIcon, VerifiedIcon } from "./illustrations";

const HOUSEHOLD_STEPS = [
  { title: "Register & verify", description: "Create a household account and verify your phone number." },
  { title: "Browse verified helpers", description: "Filter by service, availability and location near you." },
  { title: "Chat & book", description: "Message a helper, agree a schedule, and confirm the booking." },
  { title: "Pay securely in-app", description: "No cash handling — pay and manage subscriptions in the app." },
];

const HELPER_STEPS = [
  { title: "Register & upload documents", description: "Sign up and submit your ID and work documents." },
  { title: "Get verified", description: "Our team reviews your documents before you go live." },
  { title: "Receive job requests", description: "Households nearby can find and message you directly." },
  { title: "Get paid on time", description: "Track your schedule and earnings from your dashboard." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">How it works</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">Simple for both sides</h2>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-2">
          <StepColumn
            badge="For Households"
            steps={HOUSEHOLD_STEPS}
            phone={
              <PhoneMock>
                <VerifiedIcon className="h-16 w-16" />
                <p className="text-center text-sm font-semibold text-foreground">Helper verified</p>
                <p className="text-center text-xs text-muted">Booking confirmed for Monday, 9 AM</p>
              </PhoneMock>
            }
          />
          <StepColumn
            badge="For Helpers"
            steps={HELPER_STEPS}
            phone={
              <PhoneMock>
                <ScheduleIcon className="h-16 w-16" />
                <p className="text-center text-sm font-semibold text-foreground">3 new requests</p>
                <p className="text-center text-xs text-muted">Nearby households are hiring</p>
              </PhoneMock>
            }
          />
        </div>
      </div>
    </section>
  );
}

function StepColumn({
  badge,
  steps,
  phone,
}: {
  badge: string;
  steps: { title: string; description: string }[];
  phone: ReactNode;
}) {
  return (
    <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
      <div>
        <span className="inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
          {badge}
        </span>
        <ol className="mt-6 space-y-6">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-foreground">{step.title}</p>
                <p className="text-sm text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="hidden sm:block">{phone}</div>
    </div>
  );
}
