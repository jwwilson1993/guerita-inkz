import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/10 bg-background py-16 sm:py-20"
      aria-labelledby="about-heading"
    >
      <div
        className="absolute inset-y-0 left-0 w-full md:left-1/2 md:max-w-5xl md:-translate-x-1/2"
        aria-hidden="true"
      >
        <div className="relative h-full w-full md:w-[58%]">
          <Image
            src="/AboutSection-bgimg.jpg"
            alt=""
            fill
            aria-hidden="true"
            className="pointer-events-none object-cover object-[50%_78%] opacity-55 blur-sm md:object-[42%_72%]"
            sizes="(max-width: 768px) 100vw, 594px"
          />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-background/50"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-5xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <article>
          <p
            id="about-heading"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
          >
            About the artist
          </p>
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
