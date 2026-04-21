/**
 * Top landing area: studio name, short pitch, and calls-to-action.
 */
export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-panel via-background to-panel"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
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
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-blush shadow-sm transition hover:bg-accent"
            >
              Start a booking request
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-foreground/10 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              Browse selected work
            </a>
          </div>
          <p className="mt-6 text-xs text-foreground/55">
            Currently booking 6–8 weeks out for custom pieces. Flash days are
            announced on Instagram.
          </p>
        </div>
      </div>
    </section>
  );
}
