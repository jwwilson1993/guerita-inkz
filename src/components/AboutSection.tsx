import Image from "next/image";

/**
 * About the artist: short story, studio etiquette, and a portrait placeholder.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-ink/10 bg-white py-16 sm:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border border-ink/10 bg-blush shadow-md lg:max-w-none">
          <Image
            src="https://picsum.photos/seed/guerita-artist/720/960"
            alt="Placeholder portrait of the tattoo artist at work"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            About the artist
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-serif text-3xl text-ink sm:text-4xl"
          >
            Line-first, client-centered, detail-obsessed.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75">
            <p>
              Hi, I&apos;m behind Guerita Inkz — a private studio focused on
              tattoos that feel intentional: florals with architecture, lettering
              with breathing room, and blackwork that still feels light on skin.
            </p>
            <p>
              Before your appointment we&apos;ll talk placement, flow, and how
              the piece will age. I work slowly when the skin needs it, and I
              keep the space low-stress so you can actually enjoy getting tattooed.
            </p>
            <p>
              I&apos;m especially excited about cover-up collaborations, first
              tattoos with nervous-but-ready energy, and returning clients adding
              to long-term projects.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-ink/80 sm:grid-cols-2">
            <li className="rounded-2xl border border-ink/10 bg-blush/60 px-4 py-3">
              Fine line &amp; ornamental
            </li>
            <li className="rounded-2xl border border-ink/10 bg-blush/60 px-4 py-3">
              Black &amp; gray botanicals
            </li>
            <li className="rounded-2xl border border-ink/10 bg-blush/60 px-4 py-3">
              Delicate lettering
            </li>
            <li className="rounded-2xl border border-ink/10 bg-blush/60 px-4 py-3">
              Custom flash reinterpreted
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
