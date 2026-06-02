import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-blush">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div>
          <p className="font-serif text-2xl">Guerita Inkz</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-blush/80">
            Appointment-only tattooing in Yakima, WA. A private, comfortable
            setup with clear consent practices and careful attention to hygiene.
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
                <a href="#contact" className="hover:text-rose">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blush/70">
              Social
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
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-blush/60 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} Guerita Inkz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
