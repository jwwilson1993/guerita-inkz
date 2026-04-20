"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Site-wide navigation with anchor links to each homepage section.
 * Includes a simple mobile menu for small screens.
 */
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Work" },
  { href: "#booking", label: "Book" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-blush/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-ink sm:text-2xl"
          onClick={() => setOpen(false)}
        >
          Guerita Inkz
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-blush shadow-sm transition hover:bg-accent"
          >
            Request appointment
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-ink/15 bg-white/70 p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile navigation panel */}
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-ink/10 bg-blush px-4 py-4 md:hidden"
          aria-label="Mobile primary"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-base font-medium text-ink/85 hover:bg-white/60"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="mt-1 rounded-full bg-ink px-4 py-3 text-center text-sm font-semibold text-blush"
              onClick={() => setOpen(false)}
            >
              Request appointment
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
