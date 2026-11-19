import { AppStoreBadges } from "./app-store-badges";
import { LineArtBackdrop } from "./illustrations";

export function DownloadCta() {
  return (
    <section id="download" className="relative overflow-hidden bg-foreground">
      <LineArtBackdrop className="absolute inset-0 h-full w-full opacity-40" />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Get the myhousemaid.lk app</h2>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          Available for households and helpers. Download the app to get started.
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreBadges variant="light" />
        </div>
      </div>
    </section>
  );
}
