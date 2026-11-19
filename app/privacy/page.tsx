import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "../components/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy — myhousemaid.lk",
  description: "How myhousemaid.lk collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: November 2026" />

      <section className="bg-background">
        <div className="mx-auto max-w-3xl space-y-10 px-5 py-16 sm:px-8">
          <Section title="1. Information we collect">
            <p>We collect the information needed to connect households with helpers safely:</p>
            <ul>
              <li>Account details — name, email, phone number, and your role (household or helper).</li>
              <li>
                Verification documents — helpers upload a valid ID and relevant work documents,
                which are reviewed before a profile is marked verified.
              </li>
              <li>Location — used to show nearby helpers or job requests.</li>
              <li>Booking and payment information — processed to handle in-app bookings and subscriptions.</li>
              <li>In-app messages between households and helpers, used to facilitate bookings and for safety purposes.</li>
              <li>Device and usage data, such as app version and crash logs, to keep the app working reliably.</li>
            </ul>
          </Section>

          <Section title="2. How we use your information">
            <ul>
              <li>To verify helper identity and documents before a profile goes live.</li>
              <li>To match households with relevant helpers and vice versa.</li>
              <li>To process bookings, payments and subscriptions.</li>
              <li>To send booking updates, verification status and other service notifications.</li>
              <li>To respond to safety alerts raised through the app.</li>
              <li>To provide customer support and improve the app.</li>
            </ul>
          </Section>

          <Section title="3. Document verification">
            <p>
              Helper ID and work documents are reviewed by our team and are only used to confirm a
              helper&apos;s identity and eligibility. A helper is shown as verified to households only
              once this review is complete.
            </p>
          </Section>

          <Section title="4. Sharing your information">
            <p>
              We don&apos;t sell your personal information. We share information only as needed to run
              the service — for example, with payment processors to complete a transaction, or
              with authorities where we&apos;re legally required to.
            </p>
          </Section>

          <Section title="5. Data retention & security">
            <p>
              We keep your information for as long as your account is active, or as needed to
              provide the service and meet legal obligations. We use reasonable technical and
              organizational measures, such as encrypted connections and access controls, to
              protect your data.
            </p>
          </Section>

          <Section title="6. Your rights">
            <p>
              You can request access to, correction of, or deletion of your personal information
              by contacting us at{" "}
              <a href="mailto:support@myhousemaid.lk" className="text-primary hover:underline">
                support@myhousemaid.lk
              </a>
              .
            </p>
          </Section>

          <Section title="7. Children">
            <p>
              myhousemaid.lk accounts are intended for users 18 and older. The app may be used to
              book childcare services, but it is not intended to be used directly by children.
            </p>
          </Section>

          <Section title="8. Changes to this policy">
            <p>
              We may update this policy from time to time. Material changes will be reflected by
              updating the date at the top of this page.
            </p>
          </Section>

          <Section title="9. Contact us">
            <p>
              Questions about this policy can be sent to{" "}
              <a href="mailto:support@myhousemaid.lk" className="text-primary hover:underline">
                support@myhousemaid.lk
              </a>
              .
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  );
}
