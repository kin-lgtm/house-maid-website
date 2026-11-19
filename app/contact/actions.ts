"use server";

import { redirect } from "next/navigation";

const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:4000";

export async function submitInquiry(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const res = await fetch(`${BACKEND_URL}/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone: phone || undefined, message }),
    cache: "no-store",
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    const msg = data?.error?.message ?? "Something went wrong. Please try again.";
    redirect(`/contact?error=${encodeURIComponent(msg)}`);
  }

  redirect("/contact?sent=1");
}
