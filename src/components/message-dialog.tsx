"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m } from "framer-motion";
import { X } from "lucide-react";
import { ContactForm } from "./contact-form";

export type DialogText = {
  title?: string;
  subtitle?: string;
  intro?: string;
  submitLabel?: string;
};

/** The pop-up itself. Loaded on demand the first time a button is clicked. */
export function MessageDialog({
  open,
  onClose,
  title,
  subtitle,
  intro,
  submitLabel,
}: DialogText & { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <m.div
          className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-black/60 p-0 backdrop-blur-md sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <m.div
            role="dialog"
            aria-modal="true"
            aria-label={title ?? "Send us a message"}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 80, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="relative w-full max-w-xl overflow-hidden rounded-t-[2rem] border border-white/20 bg-gradient-to-br from-blue-deep via-panel to-ink shadow-[0_0_80px_rgba(230,224,250,0.25)] sm:my-auto sm:rounded-[2rem]"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-neon/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand-blue/30 blur-3xl" />
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative">
              <ContactForm
                onDone={onClose}
                title={title}
                subtitle={subtitle}
                intro={intro}
                submitLabel={submitLabel}
              />
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
