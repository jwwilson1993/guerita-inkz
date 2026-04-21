import Image from "next/image";
import { galleryItems } from "@/data/galleryItems";

/**
 * Responsive image grid fed by `galleryItems` so you can grow the gallery in one place.
 */
export function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="border-b border-white/10 bg-panel py-16 sm:py-20"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Selected tattoos
            </p>
            <h2
              id="gallery-heading"
              className="mt-2 font-serif text-3xl text-foreground sm:text-4xl"
            >
              Previous work
            </h2>
            <p className="mt-3 max-w-xl text-base text-foreground/75">
              A few healed and fresh pieces to show line weight, contrast, and
              how designs sit on real bodies. Swap these placeholders for photos
              of your own work when you are ready.
            </p>
          </div>
          <p className="text-sm text-foreground/60">
            {galleryItems.length} images · easy to extend in{" "}
            <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-xs text-foreground">
              src/data/galleryItems.ts
            </code>
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-elevated shadow-md shadow-black/40"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-medium text-foreground">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
