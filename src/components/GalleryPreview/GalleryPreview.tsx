"use client";

import { useState } from "react";
import { DesktopGalleryGrid } from "./DesktopGalleryGrid";
import { GalleryLightbox } from "./GalleryLightbox";
import { MobileGallery } from "./MobileGallery";

/**
 * Responsive gallery: on small screens, swipeable carousel with thumbnail strip;
 * from `md` up, grid. Tapping a grid image opens a full-screen lightbox; on
 * small screens the page keeps one carousel (thumbnails only affect the inline
 * gallery), and the lightbox uses swipe without a second thumbnail strip.
 */
export function GalleryPreview() {
  const [lightbox, setLightbox] = useState<{
    index: number;
    key: number;
  } | null>(null);

  const openLightbox = (index: number) => {
    setLightbox({ index, key: Date.now() });
  };

  return (
    <section
      id="gallery"
      className="border-b border-white/10 bg-panel py-16 sm:py-20"
      aria-labelledby="gallery-heading"
    >
      {lightbox ? (
        <GalleryLightbox
          key={lightbox.key}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      ) : null}

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
              how designs sit on real bodies.
            </p>
          </div>
        </div>

        <MobileGallery onOpenLightbox={openLightbox} />
        <DesktopGalleryGrid onOpenLightbox={openLightbox} />
      </div>
    </section>
  );
}
