import { PageHero } from "@/components/page-hero";

export const metadata = { title: "About - Nestaliving" };

export default function About() {
  return (
    <>
      <PageHero
        crumb="Home · About"
        title="About us"
        text="Residences designed to feel like home."
      />
      <section className="mx-auto w-full max-w-6xl flex-1 px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Experience Home
        </h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Nestaliving offers residences designed to feel like home, with
          comfortable rooms and a place to belong.
        </p>
      </section>
    </>
  );
}
