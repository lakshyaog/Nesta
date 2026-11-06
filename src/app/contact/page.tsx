import { PageHero } from "@/components/page-hero";
import { EMAIL, PHONE_DISPLAY, whatsappLink } from "@/lib/contact";

export const metadata = { title: "Contact - Nestaliving" };

export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Home · Contact"
        title="Contact us"
        text="Get in touch to arrange a visit or a callback."
      />
      <section className="mx-auto w-full max-w-6xl flex-1 px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Book a visit
        </h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Interested in one of our residences? Get in touch and we will arrange
          a visit or call you back.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-2xl border border-brand-blue/25 bg-gradient-to-br from-blue-deep to-panel p-6 transition-colors hover:border-neon/60"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon">
              Queries
            </p>
            <p className="mt-2 break-all text-lg font-semibold text-white">
              {EMAIL}
            </p>
          </a>
          <a
            href={whatsappLink("Hi, I have a query about Nestaliving.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-brand-blue/25 bg-gradient-to-br from-blue-deep to-panel p-6 transition-colors hover:border-neon/60"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon">
              WhatsApp
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              {PHONE_DISPLAY}
            </p>
          </a>
        </div>
      </section>
    </>
  );
}
