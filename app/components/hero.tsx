import Image from "next/image";
import { AppStoreBadges } from "./app-store-badges";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-light">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            SRI LANKA&apos;S TRUSTED HOME HELPER PLATFORM
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl">
            Trusted home help,
            <br />
            booked in minutes.
          </h1>
          <p className="mt-5 max-w-md text-base text-muted">
            Browse verified housemaids, caretakers and nannies, chat and book directly in the
            app, and pay securely — no agents, no guesswork. Looking for work instead? Register
            as a helper and get hired by households near you.
          </p>
          <AppStoreBadges className="mt-8" />
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-border shadow-sm">
          <Image
            src="/images/hero-photo.jpg"
            alt="A housemaid and household member chatting warmly in a living room"
            fill
            sizes="(min-width: 768px) 448px, 90vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
