"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function VideoPreview({
  src,
  poster,
  name,
}: {
  src: string;
  poster?: string;
  name: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-20">
      <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-brand-blue/25 bg-gradient-to-br from-blue-deep via-panel to-ink p-8 shadow-2xl md:p-14">
        {poster && (
          <Image
            src={poster}
            alt=""
            aria-hidden="true"
            fill
            quality={50}
            sizes="1100px"
            className="-z-20 scale-110 object-cover opacity-25 blur-2xl"
          />
        )}
        <div className="pointer-events-none absolute -left-20 -top-20 -z-10 h-80 w-80 rounded-full bg-neon/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-10 -z-10 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />

        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-neon/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.2em] text-neon ring-1 ring-neon/40">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
              Video preview
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Walk through{" "}
              <span className="bg-gradient-to-r from-neon to-white bg-clip-text text-transparent">
                before you walk in.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-white/70">
              Press play for a quick walkthrough of {name}.
            </p>
            <button
              type="button"
              onClick={() => videoRef.current?.play()}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-neon px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_30px_rgba(230,224,250,0.4)] transition-all hover:scale-105 hover:bg-white"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch the tour
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-[17rem] rotate-3 transition-transform duration-500 hover:rotate-0">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-neon/40 to-brand-blue/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-ink bg-black shadow-2xl ring-1 ring-white/20">
              {/* Optimised still shown until the video plays (a raw poster= would download the full-size photo) */}
              {poster && (
                <Image
                  src={poster}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="272px"
                  className="object-cover"
                />
              )}
              <video
                ref={videoRef}
                className="relative aspect-[9/16] w-full object-cover"
                src={src}
                controls={playing}
                playsInline
                preload="none"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
              />
              {!playing && (
                <button
                  type="button"
                  aria-label="Play video"
                  onClick={() => videoRef.current?.play()}
                  className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/10"
                >
                  <span className="relative flex h-20 w-20 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-neon/50" />
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-neon text-ink shadow-xl">
                      <Play className="ml-1 h-8 w-8 fill-current" />
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
