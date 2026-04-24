"use client";

import { galleryItems } from "@/data/galleryItems";
import { GalleryFigure } from "./GalleryFigure";

type DesktopGalleryGridProps = {
  onOpenLightbox: (index: number) => void;
};

export function DesktopGalleryGrid({ onOpenLightbox }: DesktopGalleryGridProps) {
  return (
    <div className="mt-10 hidden grid-cols-2 items-stretch gap-4 min-w-0 md:grid lg:grid-cols-3">
      {galleryItems.map((item, i) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onOpenLightbox(i)}
          className="block w-full min-w-0 cursor-zoom-in rounded-2xl border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
          aria-label={`Open image ${i + 1} of ${galleryItems.length} full screen`}
        >
          <GalleryFigure item={item} priority={i < 3} />
        </button>
      ))}
    </div>
  );
}
