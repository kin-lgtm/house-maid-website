import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "../components/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service — myhousemaid.lk",
  description: "The terms that govern use of the myhousemaid.lk app and website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" subtitle="Last updated: November 2026" />

      <section className="bg-background">
        <div className="mx-auto max-w-3xl space-y-10 px-5 py-16 sm:px-8">
          <Section title="1. Acceptance of terms">
            <p>
              By creating an account or using the myhousemaid.lk app or website, you agree to
              these terms. If you don&apos;t agree, please don&apos;t use the service.
            </p>
          </Section>

          <Section title="2. What we are">
            <p>
              myhousemaid.lk is a platform that connects households with independent housemaids,
              caretakers and nannies. We are not an employer or staffing agency for helpers, and
              we don&apos;t guarantee the conduct, availability or quality of any user on the platform.
            </p>
          </Section>

          <Section title="3. Eligibility & accounts">
            <ul>
              <li>You must be at least 18 years old to create an account.</li>
              <li>You&apos;re responsible for the accuracy of the information you provide.</li>
              <li>You&apos;re responsible for keeping your account credentials secure.</li>
            </ul>
          </Section>

          <Section title="4. Verification">
            <p>
              Helpers are required to submit ID and work documents for review. Verification
              reduces risk but doesn&apos;t guarantee the suitability or conduct of any helper, and
              households should still use their own judgment when booking.
            </p>
          </Section>

          <Section title="5. Bookings & payments">
            <ul>
              <li>Bookings are agreed directly between a household and a helper through the app.</li>
              <li>Payments and subscriptions are processed in-app; please don&apos;t make or request payments outside the app.</li>
              <li>Cancellation and rescheduling should be agreed between both parties for each booking.</li>
            </ul>
          </Section>

          <Section title="6. User conduct">
            <p>You agree not to:</p>
            <ul>
              <li>Provide false information, including false identity or verification documents.</li>
              <li>Use the platform for any unlawful, abusive or discriminatory purpose.</li>
              <li>Attempt to circumvent verification, payment or safety features of the app.</li>
            </ul>
          </Section>

          <Section title="7. Safety features">
            <p>
              The in-app safety alert is a tool to help you reach assistance quickly during a
              placement — it does not replace local emergency services. In an emergency, always
              contact your local emergency services first.
            </p>
          </Section>

          <Section title="8. Limitation of liability">
            <p>
              To the extent permitted by law, myhousemaid.lk is not liable for the actions,
              conduct or omissions of any household or helper using the platform. The service is
              provided &quot;as is&quot; without warranties of any kind.
            </p>
          </Section>

          <Section title="9. Termination">
            <p>
              We may suspend or terminate an account that violates these terms, including
              submitting false documents or engaging in unsafe conduct.
            </p>
          </Section>

          <Section title="10. Changes to these terms">
            <p>
              We may update these terms from time to time. Continued use of the app after an
              update means you accept the revised terms.
            </p>
          </Section>

          <Section title="11. Governing law">
            <p>These terms are governed by the laws of Sri Lanka.</p>
          </Section>

          <Section title="12. Contact us">
            <p>
              Questions about these terms can be sent to{" "}
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
