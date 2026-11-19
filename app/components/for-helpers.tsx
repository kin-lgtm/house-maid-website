import Image from "next/image";
import { AppStoreBadges } from "./app-store-badges";

const BENEFITS = [
  "Build a verified profile that households can trust",
  "Get job requests from households near you",
  "Set your own availability and services offered",
  "Track your schedule, earnings and ratings in one place",
];

export function ForHelpers() {
  return (
    <section id="for-helpers" className="bg-primary">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-2">
        <div className="order-2 flex justify-center md:order-1">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border-4 border-white/20 shadow-lg">
            <Image
              src="/images/for-helpers.jpg"
              alt="A housemaid smiling while checking job requests on her phone"
              fill
              sizes="(min-width: 768px) 384px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 text-white md:order-2">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-wide">
            FOR HELPERS
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
            Looking for work? Get hired by verified households.
          </h2>
          <ul className="mt-6 space-y-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-white/90">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-secondary" />
                {benefit}
              </li>
            ))}
          </ul>
          <AppStoreBadges variant="light" className="mt-8" />
        </div>
      </div>
    </section>
  );
}
