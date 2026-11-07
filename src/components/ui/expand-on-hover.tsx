"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { clsx } from "clsx";

export type ExpandImage = {
  src: string;
  alt: string;
  label: string;
  sub?: string;
  position?: string;
};

/**
 * Row of image panels; the active one expands while the others shrink to
 * slivers. Uses flex-grow so it fits any width (desktop and mobile).
 * Hover / tap selects a panel, and it auto-advances when left alone.
 */
export function HoverExpand({
  images,
  className,
  autoPlayMs = 3500,
}: {
  images: ExpandImage[];
  className?: string;
  autoPlayMs?: number;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || !autoPlayMs) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % images.length),
      autoPlayMs,
    );
    return () => clearInterval(t);
  }, [paused, autoPlayMs, images.length]);

  return (
    <div
      className={clsx(
        "flex h-[26rem] w-full gap-1.5 sm:h-[30rem] sm:gap-2",
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((image, index) => {
        const isActive = active === index;
        return (
          <m.div
            key={image.src}
            role="button"
            tabIndex={0}
            aria-label={image.alt}
            aria-pressed={isActive}
            className="relative min-w-0 cursor-pointer overflow-hidden rounded-2xl bg-panel ring-1 ring-white/15 sm:rounded-3xl"
            initial={false}
            animate={{ flexGrow: isActive ? 7 : 1 }}
            style={{ flexBasis: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActive(index)}
            onHoverStart={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 700px, 90vw"
              className={clsx(
                "object-cover transition-all duration-500",
                isActive ? "scale-100 brightness-100" : "scale-110 brightness-50",
              )}
              style={{ objectPosition: image.position ?? "50% 50%" }}
            />
            <AnimatePresence>
              {isActive && (
                <>
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                  />
                  <m.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.15 }}
                    className="absolute inset-x-0 bottom-0 p-5 sm:p-7"
                  >
                    {image.sub && (
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon sm:text-xs">
                        {image.sub}
                      </p>
                    )}
                    <p className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                      {image.label}
                    </p>
                  </m.div>
                </>
              )}
            </AnimatePresence>
          </m.div>
        );
      })}
    </div>
  );
}
