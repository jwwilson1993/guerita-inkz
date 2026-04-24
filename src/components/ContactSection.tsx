import { SiteSocialNav } from "@/components/SiteSocialNav";

/**
 * Short contact block with social links (URLs live in `SiteSocialNav.tsx`).
 */
export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-panel to-background py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-2 font-serif text-3xl text-foreground sm:text-4xl"
          >
            Connect
          </h2>
          <p className="mt-3 text-base text-foreground/75">
            Say hi on social — DMs and story replies are the fastest way to reach
            the studio.
          </p>
          <SiteSocialNav
            className="mt-8 flex items-center justify-center gap-5 sm:gap-6"
            ringOffsetClass="focus-visible:ring-offset-background"
          />
        </div>
      </div>
    </section>
  );
}
