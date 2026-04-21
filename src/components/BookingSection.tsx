"use client";

import { FormEvent, useState } from "react";

/**
 * Front-end only appointment request form (no API calls yet).
 * Collects enough detail for you to follow up manually later.
 */
export function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Later: connect this handler to email, a CRM, or a server route.
    setSubmitted(true);
  }

  return (
    <section
      id="booking"
      className="border-b border-white/10 bg-background py-16 sm:py-20"
      aria-labelledby="booking-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Appointments
            </p>
            <h2
              id="booking-heading"
              className="mt-2 font-serif text-3xl text-foreground sm:text-4xl"
            >
              Request a tattoo appointment
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/75">
              Tell me what you&apos;re dreaming up. I&apos;ll reply with
              availability, pricing ballparks, and next steps. A deposit holds the
              date once we both agree on timing and design direction.
            </p>
            <div className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-foreground/5 p-5 text-sm text-foreground/80">
              <p className="font-semibold text-foreground">Before you submit</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>18+ only. Government ID required at the session.</li>
                <li>No same-day walk-ins — everything is by appointment.</li>
                <li>
                  If you need a cover-up, mention the existing tattoo size and
                  whether it was professionally done.
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-elevated p-6 shadow-lg shadow-black/30 sm:p-8">
            {submitted ? (
              <p className="text-sm leading-relaxed text-foreground/80">
                Thanks — this is a front-end demo, so nothing was sent yet. When
                you wire up a backend, this message can confirm the request was
                delivered.
              </p>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-foreground">
                    Full name
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="mt-1 w-full rounded-xl border border-white/12 bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2"
                    />
                  </label>
                  <label className="text-sm font-medium text-foreground">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="mt-1 w-full rounded-xl border border-white/12 bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2"
                    />
                  </label>
                </div>
                <label className="text-sm font-medium text-foreground">
                  Phone (optional)
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="mt-1 w-full rounded-xl border border-white/12 bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2"
                  />
                </label>
                <label className="text-sm font-medium text-foreground">
                  Placement on body
                  <input
                    required
                    name="placement"
                    placeholder="e.g. outer forearm, left ribs"
                    className="mt-1 w-full rounded-xl border border-white/12 bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2 placeholder:text-foreground/40"
                  />
                </label>
                <label className="text-sm font-medium text-foreground">
                  Preferred days / times
                  <input
                    required
                    name="availability"
                    placeholder="Weekday evenings, Friday mornings…"
                    className="mt-1 w-full rounded-xl border border-white/12 bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2 placeholder:text-foreground/40"
                  />
                </label>
                <label className="text-sm font-medium text-foreground">
                  Style &amp; subject
                  <textarea
                    required
                    name="description"
                    rows={4}
                    placeholder="Tell me about symbols, references, size in inches, and whether you want color or black and gray."
                    className="mt-1 w-full rounded-xl border border-white/12 bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2 placeholder:text-foreground/40"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-ink py-3 text-sm font-semibold text-blush transition hover:bg-accent"
                >
                  Send booking request
                </button>
                <p className="text-xs text-foreground/55">
                  Demo form: submissions are not stored. Hook this up when you add
                  a backend or form service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
