"use client";

import Image from "next/image";
import type { GalleryItem } from "@/data/galleryItems";
import { SIZES_GRID } from "./constants";

export function GalleryFigure({
  item,
  priority,
  sizes = SIZES_GRID,
}: {
  item: GalleryItem;
  priority?: boolean;
  /** Match rendered width; default suits the md+ grid — override for carousel. */
  sizes?: string;
}) {
  return (
    <figure className="pointer-events-none w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-black/25 shadow-md shadow-black/40">
      <div className="relative aspect-square w-full">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          priority={priority}
          className="object-contain object-center"
          sizes={sizes}
        />
      </div>
    </figure>
  );
}
