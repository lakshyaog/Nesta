import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { GmailLogo, WhatsAppLogo } from "@/components/brand-icons";
import { BookVisitButton } from "@/components/message-modal";
import { HoverExpand, type ExpandImage } from "@/components/ui/expand-on-hover";
import { EMAIL, whatsappLink } from "@/lib/contact";

export const metadata = { title: "About - Nestaliving" };

const label =
  "font-mono text-xs font-medium uppercase tracking-[0.2em] text-neon";
const h2 = "mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl";
const photoBase =
  "overflow-hidden rounded-3xl ring-1 ring-white/15 shadow-2xl";
const photo = `relative ${photoBase}`;

const TOUR: ExpandImage[] = [
  {
    src: "/nestaliving-newton-court-1.jpeg",
    alt: "Furnished room at Newton Court",
    label: "Newton Court",
    sub: "Jagat Farm",
  },
  {
    src: "/nestaliving-tesla-house-alpha-2-1.jpeg",
    alt: "Room at Tesla House",
    label: "Tesla House",
    sub: "Alpha 2",
  },
  {
    src: "/nestaliving-sarojini-house-1.jpeg",
    alt: "Room at Sarojini House",
    label: "Sarojini House",
    sub: "Alpha 1",
    position: "50% 60%",
  },
  {
    src: "/nestaliving-newton-court-3.jpeg",
    alt: "Shared room at Newton Court",
    label: "Newton Court",
    sub: "Jagat Farm",
  },
  {
    src: "/nestaliving-tesla-house-alpha-2-5.jpeg",
    alt: "Kitchen at Tesla House",
    label: "Tesla House kitchen",
    sub: "Alpha 2",
  },
  {
    src: "/nestaliving-sarojini-house-3.jpeg",
    alt: "Room at Sarojini House",
    label: "Sarojini House",
    sub: "Alpha 1",
    position: "50% 60%",
  },
  {
    src: "/nestaliving-newton-court-2.jpeg",
    alt: "Room at Newton Court",
    label: "Newton Court",
    sub: "Jagat Farm",
  },
  {
    src: "/nestaliving-tesla-house-alpha-2-2.jpeg",
    alt: "Room at Tesla House",
    label: "Tesla House",
    sub: "Alpha 2",
  },
];

const STATS = [
  { value: "3", text: "Residences" },
  { value: "3", text: "Neighbourhoods" },
  { value: "50 m", text: "From Alpha 2 Market" },
  { value: "Fully", text: "Furnished rooms" },
];

const PILLARS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: HeartHandshake,
    title: "Comfortable living",
    text: "Fully furnished rooms and a well-maintained environment that feels like home.",
  },
  {
    icon: Sparkles,
    title: "Clean and hygienic",
    text: "Fresh meals, regular housekeeping and clean washrooms, every day.",
  },
  {
    icon: ShieldCheck,
    title: "Safe and secure",
    text: "CCTV surveillance and a calm, independent setting for peace of mind.",
  },
  {
    icon: MapPin,
    title: "Prime locations",
    text: "Close to the markets and everything you need, at Jagat Farm and Alpha.",
  },
];

const JAGAT_FARM = [
  "Fully furnished rooms",
  "Hygienic and fresh meals",
  "Comfortable living",
  "Prime location, Jagat Farm",
  "Independent PG",
];

const ALPHA_2 = [
  "Just 50 meters from Alpha 2 Market",
  "Fully air-conditioned rooms",
  "Regular housekeeping service",
  "CCTV surveillance for security",
  "High-speed Wi-Fi",
  "Kitchen with gas stove for cooking",
  "Clean and hygienic washrooms",
  "RO water purifier",
  "Well-maintained, comfortable living environment",
];

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-white/80">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon/15 text-neon ring-1 ring-neon/40">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className="leading-6">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-deep via-ink to-background text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-blue/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-neon/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="font-mono text-sm text-white/60">Home · About</p>
            <p className={`mt-6 ${label}`}>Experience Home</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">
              A home away{" "}
              <span className="bg-gradient-to-r from-neon to-white bg-clip-text text-transparent">
                from home.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/70">
              Nestaliving brings you comfortable, premium stays with all the
              essential facilities, in prime locations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
              <Link
                href="/"
                className="rounded-full bg-neon px-6 py-3 text-ink transition-colors hover:bg-white"
              >
                See our residences →
              </Link>
              <BookVisitButton className="rounded-full border border-neon px-6 py-3 text-neon transition-colors hover:bg-neon hover:text-ink">
                Book a visit
              </BookVisitButton>
            </div>
          </div>

          {/* Photo collage */}
          <div className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[32rem]">
            <div
              className={`${photoBase} absolute left-0 top-6 aspect-[3/4] w-[58%] -rotate-3`}
            >
              <Image
                src="/nestaliving-newton-court-1.jpeg"
                alt="Furnished room at Nestaliving - Newton Court"
                fill
                priority
                sizes="(min-width: 1024px) 260px, 50vw"
                className="object-cover"
              />
            </div>
            <div
              className={`${photoBase} absolute right-0 top-0 aspect-square w-[46%] rotate-6`}
            >
              <Image
                src="/nestaliving-tesla-house-alpha-2-1.jpeg"
                alt="Room at Nestaliving - Tesla House"
                fill
                priority
                sizes="(min-width: 1024px) 210px, 40vw"
                className="object-cover"
              />
            </div>
            <div
              className={`${photoBase} absolute bottom-0 right-4 aspect-[3/4] w-[44%] rotate-2`}
            >
              <Image
                src="/nestaliving-sarojini-house-1.jpeg"
                alt="Room at Nestaliving - Sarojini House"
                fill
                priority
                sizes="(min-width: 1024px) 200px, 40vw"
                className="object-cover object-[50%_60%]"
              />
            </div>
            <div className="absolute bottom-10 left-2 rounded-2xl border border-white/30 bg-white/15 px-4 py-3 text-white shadow-xl backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                Nestaliving
              </p>
              <p className="text-lg font-semibold">Experience Home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-16">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.text}
              className="rounded-2xl border border-brand-blue/25 bg-gradient-to-br from-blue-deep to-panel p-6"
            >
              <dt className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-white/55 sm:text-xs sm:tracking-[0.15em]">
                {s.text}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Statement */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <p className={label}>Who we are</p>
        <p className="mt-5 max-w-4xl text-2xl font-medium leading-snug tracking-tight text-white sm:text-4xl">
          We offer a comfortable stay with all the essential facilities, in a
          prime location, so that{" "}
          <span className="text-white/50">
            wherever you study or work, you come back to a place that feels like
            home.
          </span>
        </p>
      </section>

      {/* Photo carousel */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <p className={label}>A look around</p>
        <h2 className={h2}>Step inside our homes.</h2>
        <HoverExpand images={TOUR} className="mt-10" />
      </section>

      {/* Newton Court */}
      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className={`${photo} aspect-[3/4]`}>
              <Image
                src="/nestaliving-newton-court-1.jpeg"
                alt="Room at Nestaliving - Newton Court"
                fill
                sizes="(min-width: 1024px) 270px, 45vw"
                className="object-cover"
              />
            </div>
            <div className={`${photo} mt-10 aspect-[3/4]`}>
              <Image
                src="/nestaliving-newton-court-3.jpeg"
                alt="Shared room at Nestaliving - Newton Court"
                fill
                sizes="(min-width: 1024px) 270px, 45vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className={label}>Jagat Farm</p>
            <h2 className={h2}>Newton Court</h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              An independent PG at Jagat Farm for anyone looking for a
              comfortable, premium stay.
            </p>
            <Checklist items={JAGAT_FARM} />
            <Link
              href="/residence/newton-court"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neon hover:underline"
            >
              View Newton Court <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tesla House */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-2 grid grid-cols-2 gap-4">
            <div className={`${photo} aspect-square`}>
              <Image
                src="/nestaliving-tesla-house-alpha-2-1.jpeg"
                alt="Room at Nestaliving - Tesla House"
                fill
                sizes="(min-width: 1024px) 270px, 45vw"
                className="object-cover"
              />
            </div>
            <div className={`${photo} mt-10 aspect-[3/4]`}>
              <Image
                src="/nestaliving-tesla-house-alpha-2-5.jpeg"
                alt="Kitchen at Nestaliving - Tesla House"
                fill
                sizes="(min-width: 1024px) 270px, 45vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:order-1">
            <p className={label}>Alpha 2</p>
            <h2 className={h2}>Tesla House</h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              A well-equipped PG right by the Alpha 2 Market, with the comforts
              you would want in a home.
            </p>
            <Checklist items={ALPHA_2} />
            <Link
              href="/residence/tesla-house"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neon hover:underline"
            >
              View Tesla House <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sarojini */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-24">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-brand-blue/25">
          <Image
            src="/nestaliving-sarojini-house-1.jpeg"
            alt=""
            aria-hidden="true"
            fill
            sizes="1100px"
            className="-z-20 object-cover object-[50%_55%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/20" />
          <div className="max-w-xl p-8 sm:p-14">
            <p className={label}>Alpha 1 · For girls</p>
            <h2 className={h2}>Sarojini House</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              A comfortable, furnished stay for girls at Alpha 1, with the same
              Nestaliving care and a room that feels like your own.
            </p>
            <Link
              href="/residence/sarojini-house-alpha-1"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              View Sarojini House <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-24">
        <p className={label}>What we stand for</p>
        <h2 className={h2}>Built around how you live.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-brand-blue/25 bg-gradient-to-br from-blue-deep/80 to-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neon/10 text-neon ring-1 ring-neon/30 transition-colors group-hover:bg-neon group-hover:text-ink">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-deep via-panel to-ink p-8 text-center shadow-2xl sm:p-16">
          <div className="pointer-events-none absolute -left-16 -top-16 -z-10 h-72 w-72 rounded-full bg-neon/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 -z-10 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl" />
          <p className={label}>Ready to move in?</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Contact us today for enquiries and bookings.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <BookVisitButton className="rounded-full bg-neon px-6 py-3 text-ink transition-colors hover:bg-white">
              Book a visit →
            </BookVisitButton>
            <a
              href={whatsappLink("Hi, I'd like to know more about Nestaliving.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neon px-6 py-3 text-neon transition-colors hover:bg-neon hover:text-ink"
            >
              <WhatsAppLogo className="h-5 w-5" />
              WhatsApp us
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-white transition-colors hover:bg-white hover:text-ink"
            >
              <GmailLogo className="h-5 w-5" />
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
