"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/contact";

const field =
  "w-full rounded-xl border border-brand-blue/30 bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-neon focus:outline-none";

export function CallbackForm({ residence }: { residence: string }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-neon/40 bg-panel p-8">
        <h3 className="text-xl font-semibold text-white">Request received!</h3>
        <p className="mt-2 text-sm text-white/70">
          Thanks for your interest in {residence}.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-ink hover:bg-white"
        >
          Done →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const lines = [
          `Callback request for ${residence}`,
          `Name: ${f.get("name")}`,
          `Phone: ${f.get("phone")}`,
          f.get("lookingFor") ? `Looking for: ${f.get("lookingFor")}` : "",
          f.get("message") ? `Message: ${f.get("message")}` : "",
        ].filter(Boolean);
        window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
        setSent(true);
      }}
      className="flex flex-col gap-4 rounded-2xl border border-brand-blue/30 bg-panel p-8"
    >
      <h3 className="text-xl font-semibold text-white">Request a callback</h3>
      <input className={field} name="name" placeholder="Your name" required />
      <input
        className={field}
        name="phone"
        type="tel"
        placeholder="Phone number"
        required
      />
      <select className={field} name="lookingFor" defaultValue="">
        <option value="" disabled>
          Looking for
        </option>
        <option>Single room</option>
        <option>Double sharing</option>
        <option>Triple sharing</option>
        <option>Not sure yet</option>
      </select>
      <textarea
        className={field}
        name="message"
        rows={3}
        placeholder="Message (optional)"
      />
      <button
        type="submit"
        className="rounded-full bg-neon px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
      >
        Request callback →
      </button>
    </form>
  );
}
