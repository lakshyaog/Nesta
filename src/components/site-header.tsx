import Image from "next/image";
import Link from "next/link";
import { NAV } from "./site-nav";
import { MobileNav } from "./mobile-nav";
import { BookVisitButton } from "./message-modal";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" aria-label="Nestaliving home">
          <Image
            src="/assets/logo-strip.png"
            alt="Nestaliving - Experience Home"
            width={1200}
            height={291}
            className="h-11 w-auto"
            priority
          />
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-ink/80 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-blue-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <BookVisitButton className="hidden rounded-full bg-blue-deep px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink sm:inline-block">
          Book a visit →
        </BookVisitButton>
        <MobileNav />
      </div>
    </header>
  );
}
