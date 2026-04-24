"use client";

import Image from "next/image";
import type { GalleryItem } from "@/data/galleryItems";
import { THUMB_STRIP_CLASS } from "./constants";

type ThumbnailVariant = "mobile" | "lightbox";

type GalleryThumbnailsProps = {
  items: GalleryItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
  slideIdPrefix: "gallery-slide" | "lightbox-slide";
  variant: ThumbnailVariant;
};

const WRAPPER_EXTRA: Record<ThumbnailVariant, string> = {
  mobile: "mt-4",
  lightbox: "mt-3 hidden shrink-0 justify-center px-3 md:flex",
};

const BUTTON_RING_OFFSET: Record<ThumbnailVariant, string> = {
  mobile: "focus-visible:ring-offset-panel",
  lightbox: "focus-visible:ring-offset-black/80",
};

export function GalleryThumbnails({
  items,
  activeIndex,
  onSelect,
  slideIdPrefix,
  variant,
}: GalleryThumbnailsProps) {
  const ringOffset = BUTTON_RING_OFFSET[variant];
  const wrapperExtra = WRAPPER_EXTRA[variant];

  return (
    <div
      className={`${THUMB_STRIP_CLASS} ${wrapperExtra}`}
      role="group"
      aria-label="Gallery thumbnails"
    >
      {items.map((item, i) => (
        <button
          key={item.id}
          type="button"
          aria-current={activeIndex === i ? "true" : undefined}
          aria-controls={`${slideIdPrefix}-${item.id}`}
          onClick={() => onSelect(i)}
          className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${ringOffset} ${
            activeIndex === i
              ? "border-accent ring-2 ring-accent/40"
              : "border-white/15 opacity-80 hover:opacity-100"
          }`}
        >
          <span className="sr-only">
            Go to image {i + 1} of {items.length}: {item.title}
          </span>
          <span className="absolute inset-0 bg-black/25" aria-hidden>
            <Image
              src={item.src}
              alt=""
              fill
              className="object-contain"
              sizes="64px"
            />
          </span>
        </button>
      ))}
    </div>
  );
}
