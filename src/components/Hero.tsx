import Image from "next/image";
import { SiteSocialNav } from "@/components/SiteSocialNav";

/**
 * Top landing area: studio name, short pitch, and calls-to-action.
 */
export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-black md:bg-gradient-to-b md:from-black md:via-[#050507] md:to-background"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 hidden h-72 w-72 rounded-full bg-rose/10 blur-3xl md:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 hidden h-64 w-64 rounded-full bg-accent/10 blur-3xl md:block"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <Image
          src="/guerita-inkz-logo-alt.png"
          alt="Guerita Inkz"
          width={1672}
          height={941}
          priority
          className="h-24 w-auto sm:h-28 md:h-32"
          sizes="(max-width: 768px) 280px, 360px"
        />

        <SiteSocialNav
          className="mt-6 flex items-center justify-center gap-5 sm:mt-7 sm:gap-6"
          ringOffsetClass="focus-visible:ring-offset-black"
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Dallas · private studio vibes
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Tattoos with softness, structure, and a little edge.
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-foreground/75 sm:text-lg">
            Guerita Inkz is the appointment-only practice of a tattoo artist who
            loves fine lines, ornamental details, and pieces that feel personal.
            Calm chair energy, crisp line work, and a collaborative design process
            from sketch to healed skin.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-blush shadow-sm transition hover:bg-accent"
            >
              Get in touch
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-foreground/10 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              Browse selected work
            </a>
          </div>
          <p className="mt-6 text-xs text-foreground/55">
            Flash days and studio updates are announced on Instagram.
          </p>
        </div>
      </div>
    </section>
  );
}
