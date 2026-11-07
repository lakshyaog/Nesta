"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV } from "./site-nav";
import { BookVisitButton } from "./message-modal";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Always mounted (just hidden) so the Book a visit modal survives closing the menu */}
        <div
          className={`absolute inset-x-0 top-full border-t border-black/10 bg-white shadow-lg ${open ? "" : "hidden"}`}
        >
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-4 text-lg font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <BookVisitButton
              onOpen={() => setOpen(false)}
              className="mt-4 rounded-full bg-blue-deep px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book a visit →
            </BookVisitButton>
          </nav>
        </div>
    </div>
  );
}
