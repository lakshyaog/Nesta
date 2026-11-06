import {
  Shirt,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";

// TODO: confirm which of these each residence really offers.
const AMENITIES: { label: string; hint: string; icon: LucideIcon }[] = [
  { label: "High Speed WiFi", hint: "Always connected", icon: Wifi },
  { label: "House Keeping", hint: "Kept spotless", icon: Sparkles },
  { label: "Hygienic Meal", hint: "Fresh and clean", icon: UtensilsCrossed },
  { label: "Laundry Services", hint: "Fresh clothes", icon: Shirt },
  { label: "Power Backup", hint: "No interruptions", icon: Zap },
  { label: "24x7 Security", hint: "Safe, round the clock", icon: ShieldCheck },
];

export function Amenities() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-20">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-neon">
        What&apos;s inside
      </p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
        Everything you need,{" "}
        <span className="bg-gradient-to-r from-neon to-brand-blue bg-clip-text text-transparent">
          already included.
        </span>
      </h2>

      <ol className="mt-10 border-t border-brand-blue/25">
        {AMENITIES.map(({ label, hint, icon: Icon }, i) => (
          <li
            key={label}
            className="group relative flex items-center gap-5 border-b border-brand-blue/25 px-2 py-5 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-deep/80 hover:to-transparent hover:pl-6 sm:gap-8"
          >
            <span className="w-8 font-mono text-sm text-white/35 transition-colors group-hover:text-neon">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-xl font-semibold tracking-tight text-white sm:text-3xl">
              {label}
            </span>
            <span className="hidden text-sm text-white/45 sm:block">{hint}</span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neon/10 text-neon ring-1 ring-neon/30 transition-all duration-300 group-hover:bg-neon group-hover:text-ink">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
