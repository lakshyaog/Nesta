import Image from "next/image";
import { BentoCard } from "@/components/ui/bento";
import { PageHero } from "@/components/page-hero";
import Link from "next/link";
import { HoverVideoImage } from "@/components/hover-video-image";
import { whatsappLink } from "@/lib/contact";
import { RESIDENCES } from "@/data/residences";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHero
        crumb="Home · Our Residences"
        title="Our homes"
        text={`${RESIDENCES.length} residences designed to feel like home.`}
      />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-14">
        <p className="font-mono text-sm text-white/50">
          Showing 1–{RESIDENCES.length} of {RESIDENCES.length} homes
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6">
          {RESIDENCES.map((r) => (
            <BentoCard
              key={r.name}
              className="lg:col-span-2"
              eyebrow={r.tags.join(" · ")}
              title={r.name}
              description={
                <span className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 shrink-0 text-neon"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                  {r.location}
                </span>
              }
              graphic={
                r.image && r.video ? (
                  <HoverVideoImage
                    image={r.image}
                    video={r.video}
                    alt={r.name}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    imageClassName="object-cover object-[50%_62%]"
                    priority
                  />
                ) : r.image ? (

                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    priority
                    className="object-cover object-[50%_62%]"
                  />
                ) : undefined
              }
              actions={
                <div className="flex flex-wrap gap-3 text-sm font-semibold">
                  <Link
                    href={`/residence/${r.slug}`}
                    className="rounded-full bg-brand-blue px-5 py-2.5 text-ink transition-colors hover:bg-white"
                  >
                    View details
                  </Link>
                  <a
                    href={whatsappLink(
                      `Hi, I'd like a callback about ${r.name}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-neon px-5 py-2.5 text-neon transition-colors hover:bg-neon hover:text-ink"
                  >
                    Request a callback
                  </a>
                </div>
              }
            />
          ))}
        </div>
      </main>
    </div>
  );
}
