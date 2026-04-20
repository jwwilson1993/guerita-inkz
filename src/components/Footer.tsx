import Link from "next/link";

/**
 * Simple footer with studio notes, quick links, and placeholder socials.
 */
export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-blush">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div>
          <p className="font-serif text-2xl">Guerita Inkz</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-blush/80">
            Appointment-only tattoo studio. Inclusive chair, clear consent
            practices, and jewelry-grade attention to hygiene.
          </p>
        </div>

        <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:max-w-lg">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush/70">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-rose">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-rose">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-rose">
                  Booking
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-rose">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush/70">
              Placeholder socials
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-rose">
                  Instagram @guerita.inkz
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-rose">
                  TikTok studio clips
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-blush/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-blush/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Guerita Inkz. Built with Next.js — swap
          placeholder text and imagery when your copy and photos are ready.
        </p>
      </div>
    </footer>
  );
}
