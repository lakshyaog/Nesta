"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Shows a normal image. While the nearest `.group` ancestor (e.g. a card) is
 * hovered, a video fades in over it and plays; on leave it stops and resets.
 * The video is shown uncropped over a blurred copy of itself.
 */
export function HoverVideoImage({
  image,
  video,
  alt,
  sizes,
  imageClassName = "object-cover",
  priority = false,
}: {
  image: string;
  video: string;
  alt: string;
  sizes?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const target = overlay?.closest<HTMLElement>(".group");
    if (!overlay || !target) return;
    const videos = Array.from(overlay.querySelectorAll("video"));

    const start = () => videos.forEach((v) => void v.play().catch(() => {}));
    const stop = () =>
      videos.forEach((v) => {
        v.pause();
        v.currentTime = 0;
      });

    target.addEventListener("mouseenter", start);
    target.addEventListener("mouseleave", stop);
    return () => {
      target.removeEventListener("mouseenter", start);
      target.removeEventListener("mouseleave", stop);
    };
  }, []);

  return (
    <>
      <Image
        src={image}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={imageClassName}
      />
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <video
          src={video}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full scale-125 object-cover opacity-60 blur-2xl"
        />
        <video
          src={video}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
    </>
  );
}
