import Image from "next/image";

/** Replace `#` with full profile URLs when you have them. */
const HERO_SOCIAL_URLS = {
  snapchat: "#",
  instagram: "#",
  facebook: "#",
} as const;

function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.354 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z"
      />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

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

        <nav
          className="mt-6 flex items-center justify-center gap-5 sm:mt-7 sm:gap-6"
          aria-label="Social media"
        >
          <a
            href={HERO_SOCIAL_URLS.snapchat}
            className="rounded-full p-2 text-foreground/70 transition hover:bg-white/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Snapchat"
          >
            <SnapchatIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
          <a
            href={HERO_SOCIAL_URLS.instagram}
            className="rounded-full p-2 text-foreground/70 transition hover:bg-white/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
          <a
            href={HERO_SOCIAL_URLS.facebook}
            className="rounded-full p-2 text-foreground/70 transition hover:bg-white/10 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Facebook"
          >
            <FacebookIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
        </nav>
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
