"use client";

import { galleryItems } from "@/data/galleryItems";
import { CAROUSEL_SCROLLER_CLASS, SIZES_MOBILE_CAROUSEL } from "./constants";
import { GalleryFigure } from "./GalleryFigure";
import { GalleryThumbnails } from "./GalleryThumbnails";
import { useSnapCarousel } from "./useSnapCarousel";

type MobileGalleryProps = {
  onOpenLightbox: (index: number) => void;
};

export function MobileGallery({ onOpenLightbox }: MobileGalleryProps) {
  const {
    scrollerRef,
    activeIndex,
    scrollToSlide,
    onCarouselKeyDown,
  } = useSnapCarousel(galleryItems.length);

  return (
    <div className="mt-10 md:hidden">
      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Gallery images. Swipe left or right to browse."
        tabIndex={0}
        onKeyDown={onCarouselKeyDown}
        className={`${CAROUSEL_SCROLLER_CLASS} focus-visible:ring-offset-panel`}
      >
        {galleryItems.map((item, i) => (
          <div
            key={item.id}
            id={`gallery-slide-${item.id}`}
            className="min-w-full shrink-0 snap-center snap-always px-0"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${galleryItems.length}: ${item.title}`}
          >
            <button
              type="button"
              onClick={() => onOpenLightbox(i)}
              className="block w-full cursor-zoom-in rounded-2xl border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
              aria-label={`Open image ${i + 1} of ${galleryItems.length} full screen`}
            >
              <GalleryFigure
                item={item}
                priority={i === 0}
                sizes={SIZES_MOBILE_CAROUSEL}
              />
            </button>
          </div>
        ))}
      </div>

      <GalleryThumbnails
        items={galleryItems}
        activeIndex={activeIndex}
        onSelect={(i) => scrollToSlide(i, "auto")}
        slideIdPrefix="gallery-slide"
        variant="mobile"
      />
      <p className="mt-2 text-center text-xs text-foreground/50">
        Swipe the image or tap a thumbnail to move between pieces. Tap the
        large image to view it full screen.
      </p>
    </div>
  );
}
