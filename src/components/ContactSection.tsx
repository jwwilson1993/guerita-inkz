"use client";

import { FormEvent, useState } from "react";

/**
 * General contact form separate from booking (questions, collabs, press).
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
      className="bg-gradient-to-b from-white to-blush py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-2 font-serif text-3xl text-ink sm:text-4xl"
          >
            Questions, not ready to book yet?
          </h2>
          <p className="mt-3 text-base text-ink/75">
            Use this form for general messages — studio location details after
            booking, merch questions, or collaboration ideas. For new tattoos,
            the booking section keeps everything organized.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
          {submitted ? (
            <p className="text-center text-sm leading-relaxed text-ink/80">
              Message recorded on the front end only. Plug in email delivery or a
              server action when you are ready.
            </p>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="text-sm font-medium text-ink">
                Name
                <input
                  required
                  name="contactName"
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-ink/15 bg-blush/40 px-3 py-2 text-sm text-ink outline-none ring-accent/40 focus:ring-2"
                />
              </label>
              <label className="text-sm font-medium text-ink">
                Email
                <input
                  required
                  type="email"
                  name="contactEmail"
                  autoComplete="email"
                  className="mt-1 w-full rounded-xl border border-ink/15 bg-blush/40 px-3 py-2 text-sm text-ink outline-none ring-accent/40 focus:ring-2"
                />
              </label>
              <label className="text-sm font-medium text-ink">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-ink/15 bg-blush/40 px-3 py-2 text-sm text-ink outline-none ring-accent/40 focus:ring-2"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full border border-ink/20 bg-white py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
              >
                Send message
              </button>
              <p className="text-center text-xs text-ink/55">
                This contact form is separate from the booking request form on
                purpose.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
