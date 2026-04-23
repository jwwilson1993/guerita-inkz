import Image from "next/image";

/**
 * About the artist: short story, studio etiquette, and a portrait placeholder.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-white/10 bg-background py-16 sm:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <article>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            About the artist
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-serif text-3xl text-foreground sm:text-4xl"
          >
            
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/75">
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
        </article>

        <div className="mx-auto hidden w-full max-w-sm flex-col gap-3 lg:flex lg:max-w-sm">
          <div className="relative aspect-[3/2] w-3/4 overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-md shadow-black/30">
            <Image
              src="https://picsum.photos/seed/guerita-artist-1/640/480"
              alt="Tattoo design sketch on a studio desk"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 32vw"
              priority
            />
          </div>
          <div className="relative ml-auto aspect-[3/2] w-3/4 overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-md shadow-black/30">
            <Image
              src="https://picsum.photos/seed/guerita-artist-2/640/480"
              alt="Close-up of fresh fine-line tattoo work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 32vw"
            />
          </div>
          <div className="relative aspect-[3/2] w-3/4 overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-md shadow-black/30">
            <Image
              src="https://picsum.photos/seed/guerita-artist-3/640/480"
              alt="Artist station prepared for an appointment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 32vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
