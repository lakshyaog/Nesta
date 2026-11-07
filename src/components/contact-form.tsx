"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { Check, Send } from "lucide-react";
import { RESIDENCES } from "@/data/residences";
import { whatsappLink } from "@/lib/contact";

const field =
  "w-full rounded-xl border border-white/15 bg-ink/50 px-4 py-3 text-sm text-white placeholder:text-white/40 transition-colors focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/60";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function ContactForm({
  onDone,
  title = "Send us a message",
  subtitle = "Tell us what you are looking for and we will get back to you.",
  intro = "New enquiry from the Nestaliving website",
  submitLabel = "Send enquiry",
}: {
  onDone?: () => void;
  title?: string;
  subtitle?: string;
  intro?: string;
  submitLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[26rem] flex-col items-center justify-center p-10 text-center"
      >
        <m.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-neon text-ink shadow-[0_0_40px_rgba(230,224,250,0.6)]"
        >
          <Check className="h-8 w-8" strokeWidth={3} />
        </m.span>
        <h3 className="mt-6 text-2xl font-bold text-white">Request received!</h3>
        <p className="mt-2 max-w-xs text-white/65">
          Thanks for reaching out. We will get back to you soon.
        </p>
        <button
          onClick={() => (onDone ? onDone() : setSent(false))}
          className="mt-8 rounded-full bg-neon px-6 py-2.5 text-sm font-semibold text-ink hover:bg-white"
        >
          {onDone ? "Done →" : "Send another →"}
        </button>
      </m.div>
    );
  }

  return (
    <m.form
      variants={list}
      initial="hidden"
      animate="show"
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const lines = [
          intro,
          `Name: ${f.get("name")}`,
          `Phone: ${f.get("phone")}`,
          f.get("residence") ? `Residence: ${f.get("residence")}` : "",
          f.get("lookingFor") ? `Looking for: ${f.get("lookingFor")}` : "",
          f.get("message") ? `Message: ${f.get("message")}` : "",
        ].filter(Boolean);
        window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
        setSent(true);
      }}
      className="flex flex-col gap-4 p-6 sm:p-10"
    >
      <m.div variants={item}>
        <h3 className="text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h3>
        <p className="mt-1 text-sm text-white/60">{subtitle}</p>
      </m.div>
      <m.div variants={item} className="grid gap-4 sm:grid-cols-2">
        <input className={field} name="name" placeholder="Your name" required />
        <input
          className={field}
          name="phone"
          type="tel"
          placeholder="Phone number"
          required
        />
      </m.div>
      <m.div variants={item}>
        <select className={field} name="residence" defaultValue="">
          <option value="" disabled>
            Which residence?
          </option>
          {RESIDENCES.map((r) => (
            <option key={r.slug}>{r.name}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </m.div>
      <m.div variants={item}>
        <select className={field} name="lookingFor" defaultValue="">
          <option value="" disabled>
            Looking for
          </option>
          <option>Single room</option>
          <option>Double sharing</option>
          <option>Triple sharing</option>
          <option>Not sure yet</option>
        </select>
      </m.div>
      <m.div variants={item}>
        <textarea
          className={field}
          name="message"
          rows={4}
          placeholder="Your message (optional)"
        />
      </m.div>
      <m.button
        variants={item}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-neon px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_rgba(230,224,250,0.35)] transition-colors hover:bg-white"
      >
        {submitLabel} <Send className="h-4 w-4" />
      </m.button>
    </m.form>
  );
}
