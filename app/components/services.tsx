import Image from "next/image";
import { CleaningIcon, CaregivingIcon, NannyIcon } from "./illustrations";

const SERVICES = [
  {
    icon: CleaningIcon,
    image: "/images/service-housemaid.jpg",
    title: "Housemaid",
    description: "Regular or one-off home cleaning, laundry and general housekeeping.",
  },
  {
    icon: CaregivingIcon,
    image: "/images/service-caretaker.jpg",
    title: "Caretaker",
    description: "Compassionate, trained care for elderly family members at home.",
  },
  {
    icon: NannyIcon,
    image: "/images/service-nanny.jpg",
    title: "Nanny Care",
    description: "Reliable, child-friendly help for day-to-day childcare.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">Services</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            One app, every kind of home help
          </h2>
          <p className="mt-3 text-muted">
            Pick a category, see verified helpers nearby, and book the one that fits your home.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {SERVICES.map(({ icon: Icon, image, title, description }) => (
            <div
              key={title}
              className="overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image}
                  alt={`${title} — ${description}`}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
                <Icon className="absolute -bottom-5 left-5 h-11 w-11 rounded-full ring-4 ring-surface" />
              </div>
              <div className="p-6 pt-8">
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
