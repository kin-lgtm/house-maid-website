export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border bg-primary-light">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
        {eyebrow && (
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-3 max-w-xl text-muted">{subtitle}</p>}
      </div>
    </section>
  );
}
