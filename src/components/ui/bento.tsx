"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";

type BentoCardProps = {
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  actions?: React.ReactNode;
  fade?: ("top" | "bottom")[];
};

export function BentoCard({
  className,
  eyebrow,
  title,
  description,
  graphic,
  actions,
  fade = ["bottom"],
}: BentoCardProps) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      className={clsx(
        "group relative flex flex-col overflow-hidden rounded-3xl",
        "transform-gpu bg-panel shadow-sm ring-1 ring-brand-blue/25",
        "transition-shadow duration-300 hover:ring-neon/60 hover:shadow-[0_0_40px_-10px_rgba(230,224,250,0.35)]",
        className,
      )}
    >
      {graphic && (
      <div className="relative h-72 shrink-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          variants={{ idle: { scale: 1 }, active: { scale: 1.06 } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {graphic}
        </motion.div>
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-panel to-transparent to-50%" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-panel to-transparent to-60%" />
        )}
      </div>
      )}

      <div
        className={clsx(
          "relative isolate z-20 flex flex-1 flex-col p-8 backdrop-blur-xl",
          graphic && "-mt-24",
        )}
      >
        <div className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-neon">
          {eyebrow}
        </div>
        <h2 className="mt-2 text-2xl/8 font-semibold tracking-tight text-white">
          {title}
        </h2>
        <p className="mt-2 max-w-[600px] text-sm/6 text-white/65">
          {description}
        </p>
        {actions && <div className="mt-auto pt-6">{actions}</div>}
      </div>
    </motion.div>
  );
}
