"use client";

import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center outline-none ring-offset-2 ring-offset-white focus-visible:ring-2 focus-visible:ring-accent"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/guerita-inkz-logo.png"
            alt="Guerita Inkz"
            width={675}
            height={392}
            priority
            className="h-10 w-auto sm:h-11 md:h-12"
            sizes="(max-width: 768px) 200px, 260px"
          />
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
          className="inline-flex items-center justify-center rounded-md border border-ink/15 bg-ink/[0.04] p-2 text-ink md:hidden"
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
          className="border-t border-ink/10 bg-white px-4 py-4 md:hidden"
          aria-label="Mobile primary"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-base font-medium text-ink/85 hover:bg-ink/[0.06]"
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
