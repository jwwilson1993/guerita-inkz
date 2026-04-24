"use client";

import { FormEvent, useState } from "react";

/**
 * General contact form (questions, collabs, press, inquiries).
 * Still front-end only for now.
 */
export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-panel to-background py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-2 font-serif text-3xl text-foreground sm:text-4xl"
          >
            Get in touch
          </h2>
          <p className="mt-3 text-base text-foreground/75">
            Use this form for general messages — studio questions, merch,
            collaboration ideas, or anything else you would like the artist to
            see.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/10 bg-elevated p-6 shadow-lg shadow-black/30 sm:p-8">
          {submitted ? (
            <p className="text-center text-sm leading-relaxed text-foreground/80">
              Message recorded on the front end only. Plug in email delivery or a
              server action when you are ready.
            </p>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="text-sm font-medium text-foreground">
                Name
                <input
                  required
                  name="contactName"
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-white/12 bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2"
                />
              </label>
              <label className="text-sm font-medium text-foreground">
                Email
                <input
                  required
                  type="email"
                  name="contactEmail"
                  autoComplete="email"
                  className="mt-1 w-full rounded-xl border border-white/12 bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2"
                />
              </label>
              <label className="text-sm font-medium text-foreground">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-white/12 bg-background px-3 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full border border-white/15 bg-foreground/10 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                Send message
              </button>
              <p className="text-center text-xs text-foreground/55">
                Messages are recorded on the front end only until you connect
                email or a server action.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
