import Image from "next/image";

/**
 * About the artist: short story, studio etiquette, and a portrait placeholder.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-white/10 bg-background py-16 sm:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <article>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            About the artist
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-serif text-3xl text-foreground sm:text-4xl"
          >
            
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/75">
            <p>
              Hi, I&apos;m Destiny, a tattoo artist based in Yakima with over 6
              years of experience specializing in black and grey tattoo work. My
              style is heavily inspired by where I come from, Tonalá, a place
              rich in culture, art, and creativity that shaped my passion for
              tattooing from an early age.
            </p>
            <p>
              I focus on creating clean, detailed, and meaningful pieces that
              are customized to every client. Whether it&apos;s fine detail, bold
              shading, lettering, or custom designs, I take pride in making sure
              every tattoo is done with precision, professionalism, and care.
            </p>
            <p>
              For me, tattooing is more than just artwork! It&apos;s a way to tell
              stories, represent culture, and create something permanent that
              people can truly connect with. My goal is always to give clients a
              comfortable experience and a tattoo they&apos;ll be proud to wear for
              life.
            </p>
          </div>
        </article>

        <div className="mx-auto hidden w-full max-w-sm flex-col gap-3 lg:flex lg:max-w-sm">
          <div className="relative aspect-[3/2] w-3/4 overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-md shadow-black/30">
            <Image
              src="/image8.jpeg"
              alt="Black and grey tattoo portfolio piece by Destiny"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 75%" }}
              sizes="(max-width: 1024px) 80vw, 32vw"
              priority
            />
          </div>
          <div className="relative ml-auto aspect-[3/2] w-3/4 overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-md shadow-black/30">
            <Image
              src="/image4.jpeg"
              alt="Detailed tattoo portfolio piece by Destiny"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 80%" }}
              sizes="(max-width: 1024px) 80vw, 32vw"
            />
          </div>
          <div className="relative aspect-[3/2] w-3/4 overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-md shadow-black/30">
            <Image
              src="/image7.jpeg"
              alt="Shaded tattoo portfolio piece by Destiny"
              fill
              className="object-cover"
              style={{ objectPosition: "52% 90%" }}
              sizes="(max-width: 1024px) 80vw, 32vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
