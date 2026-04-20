/**
 * Top landing area: studio name, short pitch, and calls-to-action.
 */
export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-ink/10 bg-gradient-to-b from-blush via-white to-blush"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-xl flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Dallas · private studio vibes
          </p>
          <h1
            id="hero-heading"
            className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Tattoos with softness, structure, and a little edge.
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-ink/75 sm:text-lg">
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
              className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              Browse selected work
            </a>
          </div>
          <p className="mt-6 text-xs text-ink/55">
            Currently booking 6–8 weeks out for custom pieces. Flash days are
            announced on Instagram.
          </p>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-lg shadow-ink/10 lg:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose/30 via-transparent to-accent/25" />
            <div className="flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">
                  Featured mood
                </p>
                <p className="mt-2 font-serif text-2xl text-ink">Velvet blackwork</p>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-ink/70">
                Placeholder for your hero photo: a healed tattoo detail, your
                station setup, or a flat lay of inks and petals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
