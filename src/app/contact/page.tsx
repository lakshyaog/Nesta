import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  MapPin,
  MessageSquareText,
  Phone,
  Home,
  Send,
  type LucideIcon,
} from "lucide-react";
import {
  GmailLogo,
  InstagramLogo,
  WhatsAppLogo,
} from "@/components/brand-icons";
import { SendMessageButton } from "@/components/message-modal";
import { RESIDENCES } from "@/data/residences";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  whatsappLink,
} from "@/lib/contact";

export const metadata = { title: "Contact - Nestaliving" };

const label =
  "font-mono text-xs font-medium uppercase tracking-[0.2em] text-neon";

const STEPS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: MessageSquareText,
    title: "Send an enquiry",
    text: "Message us on WhatsApp, email us, or fill in the form.",
  },
  {
    icon: CalendarCheck,
    title: "Arrange a visit",
    text: "We will set up a time for you to see the residence in person.",
  },
  {
    icon: Home,
    title: "Move in",
    text: "Pick your room and settle into your new home.",
  },
];

function mapsLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-deep via-ink to-background text-white">
        <Image
          src="/nestaliving-newton-court-3.jpeg"
          alt=""
          aria-hidden="true"
          fill
          priority
          quality={50}
          sizes="100vw"
          className="object-cover object-[50%_40%] opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/30" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-neon/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-sm text-white/60">Home · Contact</p>
          <p className={`mt-6 ${label}`}>Get in touch</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
            Let&apos;s find{" "}
            <span className="bg-gradient-to-r from-neon to-white bg-clip-text text-transparent">
              your place.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            For enquiries and bookings, contact us today. We will help you find
            the right room and arrange a visit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            <SendMessageButton className="inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-ink shadow-[0_0_30px_rgba(230,224,250,0.35)] transition-colors hover:bg-white">
              <Send className="h-4 w-4" /> Send us a message
            </SendMessageButton>
            <a
              href={whatsappLink("Hi, I'd like to know more about Nestaliving.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neon px-6 py-3 text-neon transition-colors hover:bg-neon hover:text-ink"
            >
              <WhatsAppLogo className="h-5 w-5" /> WhatsApp us
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-neon px-6 py-3 text-neon transition-colors hover:bg-neon hover:text-ink"
            >
              <GmailLogo className="h-5 w-5" /> Email us
            </a>
          </div>
        </div>
      </section>

      {/* Info + form */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col gap-4">
            <p className={label}>Reach us</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Pick the way that suits you.
            </h2>

            {[
              {
                Logo: WhatsAppLogo,
                title: "WhatsApp",
                value: PHONE_DISPLAY,
                href: whatsappLink("Hi, I'd like to know more about Nestaliving."),
                external: true,
              },
              {
                Logo: GmailLogo,
                title: "Queries by email",
                value: EMAIL,
                href: `mailto:${EMAIL}`,
                external: false,
              },
              {
                Logo: InstagramLogo,
                title: "Follow us on Instagram",
                value: INSTAGRAM_HANDLE,
                href: INSTAGRAM_URL,
                external: true,
              },
            ].map(({ Logo, title, value, href, external }) => (
              <a
                key={title}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-5 rounded-2xl border border-brand-blue/25 bg-gradient-to-br from-blue-deep/80 to-panel p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/50"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110">
                  <Logo className="h-8 w-8" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-xs uppercase tracking-[0.15em] text-white/50">
                    {title}
                  </span>
                  <span className="mt-1 block break-all text-base font-semibold text-white sm:text-lg">
                    {value}
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-colors group-hover:text-neon" />
              </a>
            ))}

            <div className="flex items-center gap-5 rounded-2xl border border-brand-blue/25 bg-gradient-to-br from-blue-deep/80 to-panel p-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neon/10 text-neon ring-1 ring-neon/30">
                <Phone className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block font-mono text-xs uppercase tracking-[0.15em] text-white/50">
                  Callback
                </span>
                <span className="mt-1 block text-lg font-semibold text-white">
                  Leave your number and we will call you
                </span>
              </span>
            </div>
          </div>

          <div className="relative isolate flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-blue-deep to-panel p-10 text-center shadow-2xl">
            <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-neon/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 -z-10 h-64 w-64 rounded-full bg-brand-blue/30 blur-3xl" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-neon text-ink shadow-[0_0_50px_rgba(230,224,250,0.5)]">
              <span className="absolute inset-0 animate-ping rounded-full bg-neon/40" />
              <Send className="relative h-9 w-9" />
            </span>
            <h3 className="mt-8 text-3xl font-bold text-white">
              Send us a message
            </h3>
            <p className="mt-3 max-w-xs text-white/65">
              Tell us what you are looking for and we will get back to you.
            </p>
            <SendMessageButton className="mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_rgba(230,224,250,0.35)] transition-all hover:scale-105 hover:bg-white">
              Open the form <Send className="h-4 w-4" />
            </SendMessageButton>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto w-full max-w-6xl px-6">
        <p className={label}>How it works</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          From hello to home, in three steps.
        </h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative overflow-hidden rounded-2xl border border-brand-blue/25 bg-gradient-to-br from-blue-deep/80 to-panel p-7"
            >
              <span className="absolute -right-2 -top-4 text-8xl font-bold text-white/5">
                {i + 1}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-neon/10 text-neon ring-1 ring-neon/30">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="relative mt-5 text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-6 text-white/60">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Residences */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <p className={label}>Find us</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Our residences.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {RESIDENCES.map((r) => (
            <article
              key={r.slug}
              className="group relative overflow-hidden rounded-3xl border border-brand-blue/25 bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-neon/50"
            >
              {r.image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel to-transparent to-60%" />
                </div>
              )}
              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-neon">
                  {r.tags.join(" · ")}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {r.name.replace("Nestaliving - ", "")}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="h-4 w-4 text-neon" />
                  {r.location}
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
                  <a
                    href={mapsLink(r.mapQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-1 text-neon hover:underline"
                  >
                    Open in Maps <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    href={`/residence/${r.slug}`}
                    className="text-white/80 after:absolute after:inset-0 after:z-0 after:content-[''] hover:text-white hover:underline"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
