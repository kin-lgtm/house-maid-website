import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { Accordion } from "../components/accordion";
import { DownloadCta } from "../components/download-cta";

export const metadata: Metadata = {
  title: "FAQ — myhousemaid.lk",
  description: "Answers to common questions about booking home help or registering as a helper.",
};

const HOUSEHOLD_FAQS = [
  {
    question: "How are helpers verified?",
    answer:
      "Every helper submits their ID and work documents when they register. Our team reviews and approves these before a helper is marked verified and shown to households.",
  },
  {
    question: "How do I book a helper?",
    answer:
      "Browse helpers by service and location, open a profile, and message them directly in the app to agree on a schedule before confirming the booking.",
  },
  {
    question: "How do I pay?",
    answer: "Payments and subscriptions happen inside the app — there's no need to handle cash.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "You can message your helper in the app to reschedule. Check the booking details for the specific cancellation terms.",
  },
  {
    question: "What happens if something goes wrong during a placement?",
    answer:
      "The app includes a built-in safety alert so you can reach help quickly if something feels wrong during an active placement.",
  },
];

const HELPER_FAQS = [
  {
    question: "How do I register as a helper?",
    answer: "Download the app, create a helper account, and fill in your profile and the services you offer.",
  },
  {
    question: "What documents do I need to upload?",
    answer: "You'll need to upload a valid ID and any relevant work documents to be verified.",
  },
  {
    question: "How long does verification take?",
    answer: "Our team reviews submitted documents as quickly as possible. Until approved, your profile won't be shown as verified to households.",
  },
  {
    question: "How do I get job requests?",
    answer: "Once verified, households nearby can find your profile and message you directly to book.",
  },
  {
    question: "How do I get paid?",
    answer: "Payments from households are handled in the app, and you can track your schedule and earnings from your dashboard.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Can't find what you're looking for? Reach out on our contact page."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-3xl space-y-14 px-5 py-16 sm:px-8">
          <div>
            <h2 className="text-xl font-bold text-foreground">For households</h2>
            <div className="mt-5">
              <Accordion items={HOUSEHOLD_FAQS} />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">For helpers</h2>
            <div className="mt-5">
              <Accordion items={HELPER_FAQS} />
            </div>
          </div>
        </div>
      </section>

      <DownloadCta />
    </>
  );
}
