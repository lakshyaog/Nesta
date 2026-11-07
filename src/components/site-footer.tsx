import Image from "next/image";
import Link from "next/link";
import { BookVisitButton } from "./message-modal";
import { GmailLogo, InstagramLogo, WhatsAppLogo } from "./brand-icons";
import { NAV } from "./site-nav";
import { RESIDENCES } from "@/data/residences";
import {
  EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  whatsappLink,
} from "@/lib/contact";

const heading =
  "font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink/50";
const link = "transition-colors hover:text-blue-deep";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        <div>
          <Image
            src="/assets/logo-strip.png"
            alt="Nestaliving - Experience Home"
            width={1200}
            height={291}
            className="h-11 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-6 text-ink/70">
            Residences designed to feel like home, with comfortable rooms and a
            place to belong.
          </p>
        </div>

        <nav>
          <h3 className={heading}>Quick links</h3>
          <ul className="mt-4 space-y-3 text-sm font-medium text-ink/80">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h3 className={heading}>Our residences</h3>
          <ul className="mt-4 space-y-3 text-sm font-medium text-ink/80">
            {RESIDENCES.map((r) => (
              <li key={r.slug}>
                <Link href={`/residence/${r.slug}`} className={link}>
                  {r.name.replace("Nestaliving - ", "")}
                </Link>
                <span className="block font-mono text-[11px] uppercase tracking-[0.1em] text-ink/45">
                  {r.tags.join(" · ")} · {r.location}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className={heading}>Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink/80">
            <li>
              <span className="block text-xs text-ink/50">Queries</span>
              <a
                href={`mailto:${EMAIL}`}
                className={`inline-flex items-center gap-2 font-medium ${link}`}
              >
                <GmailLogo className="h-5 w-5" />
                {EMAIL}
              </a>
            </li>
            <li>
              <span className="block text-xs text-ink/50">WhatsApp</span>
              <a
                href={whatsappLink("Hi, I have a query about Nestaliving.")}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-medium ${link}`}
              >
                <WhatsAppLogo className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <span className="block text-xs text-ink/50">Instagram</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-medium ${link}`}
              >
                <InstagramLogo className="h-5 w-5" />
                {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
          <BookVisitButton className="mt-5 inline-block rounded-full bg-blue-deep px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink">
            Book a visit →
          </BookVisitButton>
        </div>
      </div>

      <div className="border-t border-black/10 py-4 text-center text-xs text-ink/60">
        © 2026 Nestaliving. All rights reserved.
      </div>
    </footer>
  );
}
