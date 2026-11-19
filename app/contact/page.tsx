import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { submitInquiry } from "./actions";

export const metadata: Metadata = {
  title: "Contact — myhousemaid.lk",
  description: "Get in touch with the myhousemaid.lk team or send us an inquiry.",
};

// This page reads searchParams to show a submit success/error banner after
// the form posts, so it can't be an instant (fully static) navigation.
export const instant = false;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const { sent, error } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're happy to help"
        subtitle="Questions about booking, registering as a helper, or anything else — reach out and we'll get back to you."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-4xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-2xl border border-border bg-surface p-7">
            <h2 className="font-semibold text-foreground">Send an inquiry</h2>
            <p className="mt-2 text-sm text-muted">
              Fill in the form below and our team will get back to you by email.
            </p>

            {sent && (
              <p className="mt-4 border border-primary/30 bg-primary-light px-3 py-2 text-sm text-primary-dark">
                Thanks — your message has been sent. We&apos;ll get back to you soon.
              </p>
            )}
            {error && (
              <p className="mt-4 border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
            )}

            <form action={submitInquiry} className="mt-5 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone <span className="text-muted">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-7">
              <h2 className="font-semibold text-foreground">Email us directly</h2>
              <a
                href="mailto:support@myhousemaid.lk"
                className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
              >
                support@myhousemaid.lk
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-7">
              <h2 className="font-semibold text-foreground">Office</h2>
              <p className="mt-2 text-sm text-muted">Colombo, Sri Lanka</p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-7">
              <h2 className="font-semibold text-foreground">Looking for quick answers?</h2>
              <Link href="/faq" className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
                Check our FAQ →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
