"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { galleryItems, type GalleryItem } from "@/data/galleryItems";

function GalleryFigure({
  item,
  priority,
  sizes,
  imageClassName,
}: {
  item: GalleryItem;
  priority?: boolean;
  sizes: string;
  imageClassName?: string;
}) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-elevated shadow-md shadow-black/40">
      <div className="relative aspect-square">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          priority={priority}
          className={
            imageClassName ??
            "object-cover transition duration-300 group-hover:scale-[1.02]"
          }
          sizes={sizes}
        />
      </div>
      <figcaption className="px-4 py-3 text-sm font-medium text-foreground">
        {item.title}
      </figcaption>
    </figure>
  );
}

/**
 * Responsive gallery: on small screens, swipeable carousel with thumbnail strip;
 * from `md` up, the original multi-column grid.
 */
export function GalleryPreview() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const syncActiveFromScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    if (w <= 0) return;
    const next = Math.min(
      galleryItems.length - 1,
      Math.max(0, Math.round(el.scrollLeft / w)),
    );
    setActiveIndex((prev) => (prev !== next ? next : prev));
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    return () => el.removeEventListener("scroll", syncActiveFromScroll);
  }, [syncActiveFromScroll]);

  const scrollToSlide = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollTo({ left: index * w, behavior: "smooth" });
    setActiveIndex(index);
  };

  const onCarouselKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToSlide(Math.min(activeIndex + 1, galleryItems.length - 1));
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToSlide(Math.max(activeIndex - 1, 0));
    }
  };

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

        {/* Mobile: carousel + thumbnails */}
        <div className="mt-10 md:hidden">
          <div
            ref={scrollerRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Gallery images. Swipe left or right to browse."
            tabIndex={0}
            onKeyDown={onCarouselKeyDown}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-panel [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                id={`gallery-slide-${item.id}`}
                className="min-w-full shrink-0 snap-center snap-always px-0"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${galleryItems.length}: ${item.title}`}
              >
                <GalleryFigure
                  item={item}
                  priority={i === 0}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>

          <div
            className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Gallery thumbnails"
          >
            {galleryItems.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-current={activeIndex === i ? "true" : undefined}
                aria-controls={`gallery-slide-${item.id}`}
                onClick={() => scrollToSlide(i)}
                className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-panel ${
                  activeIndex === i
                    ? "border-accent ring-2 ring-accent/40"
                    : "border-white/15 opacity-80 hover:opacity-100"
                }`}
              >
                <span className="sr-only">
                  Go to image {i + 1} of {galleryItems.length}: {item.title}
                </span>
                <span className="absolute inset-0" aria-hidden>
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </span>
              </button>
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-foreground/50">
            Swipe the image above or tap a thumbnail to jump.
          </p>
        </div>

        {/* md+: grid */}
        <div className="mt-10 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <GalleryFigure
              key={item.id}
              item={item}
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
