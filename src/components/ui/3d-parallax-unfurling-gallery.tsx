"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import dims from "@/data/image-dims.json";
import { m, useScroll, useSpring, useTransform } from "framer-motion";

function ImageCard({ src, alt }: { src: string; alt: string }) {
  // Real width/height reserve the tile's space before the photo loads, so the
  // columns don't jump around. The photo still shows at its natural shape.
  const [width, height] =
    (dims as Record<string, number[]>)[src] ?? [1350, 1800];
  return (
    <div className="w-full flex-shrink-0 cursor-pointer overflow-hidden bg-panel transition-transform duration-300 will-change-transform backface-hidden hover:scale-[1.02]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 768px) 25vw, 200px"
        className="h-auto w-full opacity-100 transition-opacity duration-300 md:opacity-85 md:hover:opacity-100"
      />
    </div>
  );
}

export default function Component({
  images,
  altPrefix = "Gallery photo",
}: {
  images: string[];
  altPrefix?: string;
}) {
  const containerRef = useRef<HTMLElement>(null);

  // Split the images into 4 columns, each repeated twice so the columns
  // stay full while they drift.
  const columns = useMemo(() => {
    return [0, 1, 2, 3].map((c) => {
      const base = images.filter((_, i) => i % 4 === c);
      return [...base, ...base];
    });
  }, [images]);

  // Linked to the page scroll while this section is pinned.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  // Banner animations
  const bannerWidth = useTransform(smoothProgress, [0, 0.15], ["90vw", "100vw"]);
  const bannerHeight = useTransform(smoothProgress, [0, 0.15], ["80vh", "100vh"]);
  const bannerRadius = useTransform(smoothProgress, [0, 0.15], ["48px", "0px"]);
  const bannerBorderWidth = useTransform(smoothProgress, [0, 0.15], ["4px", "0px"]);

  // 3D matrix animations
  const rotateY = useTransform(smoothProgress, [0.15, 1], [-45, -8]);
  const rotateX = useTransform(smoothProgress, [0.15, 1], [25, 4]);
  const rotateZ = useTransform(smoothProgress, [0.15, 1], [15, 2]);
  const translateZ = useTransform(smoothProgress, [0.15, 1], [-800, 0]);

  // Column parallax
  const yCol1 = useTransform(smoothProgress, [0.15, 1], ["0%", "-40%"]);
  const yCol2 = useTransform(smoothProgress, [0.15, 1], ["-40%", "10%"]);
  const yCol3 = useTransform(smoothProgress, [0.15, 1], ["0%", "-40%"]);
  const yCol4 = useTransform(smoothProgress, [0.15, 1], ["-30%", "20%"]);
  const yCols = [yCol1, yCol2, yCol3, yCol4];

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-full overflow-x-clip bg-background text-white"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <m.div
          style={{
            width: bannerWidth,
            height: bannerHeight,
            borderRadius: bannerRadius,
            borderWidth: bannerBorderWidth,
            borderColor: "#3a2a23",
          }}
          className="relative mx-auto flex max-w-[1920px] items-center justify-center overflow-hidden bg-black will-change-transform backface-hidden"
        >
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            {/* Edge shading */}
            <div className="absolute inset-0 z-20 shadow-[inset_0_30px_50px_-30px_rgba(0,0,0,0.6),inset_0_-30px_50px_-30px_rgba(0,0,0,0.6)] md:shadow-[inset_0_100px_150px_-50px_rgba(0,0,0,1),inset_0_-100px_150px_-50px_rgba(0,0,0,1)]" />
            <div className="absolute inset-0 z-20 shadow-[inset_30px_0_50px_-30px_rgba(0,0,0,0.6),inset_-30px_0_50px_-30px_rgba(0,0,0,0.6)] md:shadow-[inset_150px_0_150px_-50px_rgba(0,0,0,1),inset_-150px_0_150px_-50px_rgba(0,0,0,1)]" />

            <m.div
              style={{
                rotateX,
                rotateY,
                rotateZ,
                z: translateZ,
                transformStyle: "preserve-3d",
              }}
              className="flex h-[150vh] w-[120vw] origin-center items-center justify-center gap-4 will-change-transform backface-hidden md:gap-6"
            >
              {columns.map((col, c) => (
                <m.div
                  key={c}
                  style={{ y: yCols[c] }}
                  className="pointer-events-auto flex w-[22vw] min-w-[200px] flex-col gap-4 md:gap-6"
                >
                  {col.map((src, i) => (
                    <ImageCard
                      key={`${c}-${i}`}
                      src={src}
                      alt={`${altPrefix} ${c + 1}.${i + 1}`}
                    />
                  ))}
                </m.div>
              ))}
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
