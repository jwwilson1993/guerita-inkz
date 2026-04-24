"use client";

import Image from "next/image";
import {
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { galleryItems } from "@/data/galleryItems";
import {
  CAROUSEL_SCROLLER_CLASS,
  SIZES_LIGHTBOX,
} from "./constants";
import { GalleryThumbnails } from "./GalleryThumbnails";
import { useSnapCarousel } from "./useSnapCarousel";

type GalleryLightboxProps = {
  initialIndex: number;
  onClose: () => void;
};

export function GalleryLightbox({ initialIndex, onClose }: GalleryLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const {
    scrollerRef,
    activeIndex,
    scrollToSlide,
    onCarouselKeyDown,
  } = useSnapCarousel(galleryItems.length, initialIndex);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;
    const el = scrollerRef.current;
    if (!el) return;
    const apply = () => {
      const w = el.clientWidth;
      if (w <= 0) return;
      el.scrollLeft = initialIndex * w;
    };
    apply();
    const id = requestAnimationFrame(apply);
    return () => cancelAnimationFrame(id);
  }, [initialIndex, mounted, scrollerRef]);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  useLayoutEffect(() => {
    if (!mounted) return;
    scrollerRef.current?.focus({ preventScroll: true });
  }, [mounted, scrollerRef]);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex flex-col bg-black/90 p-0"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Enlarged gallery. Swipe or use arrow keys to browse; thumbnails on larger screens."
        className="flex min-h-0 flex-1 flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black/80"
        >
          Close
        </button>

        <div className="flex min-h-0 flex-1 flex-col pt-14 pb-3">
          <div
            ref={scrollerRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Full-size gallery images"
            tabIndex={0}
            onKeyDown={onCarouselKeyDown}
            className={`${CAROUSEL_SCROLLER_CLASS} min-h-0 flex-1 focus-visible:ring-offset-black/80`}
          >
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                id={`lightbox-slide-${item.id}`}
                className="flex min-h-0 min-w-full shrink-0 snap-center snap-always flex-col px-2 sm:px-4"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${galleryItems.length}: ${item.title}`}
              >
                <div className="relative min-h-[50vh] w-full flex-1 sm:min-h-[60vh]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={i === initialIndex}
                    className="object-contain object-center"
                    sizes={SIZES_LIGHTBOX}
                  />
                </div>
              </div>
            ))}
          </div>

          <GalleryThumbnails
            items={galleryItems}
            activeIndex={activeIndex}
            onSelect={(i) => scrollToSlide(i, "auto")}
            slideIdPrefix="lightbox-slide"
            variant="lightbox"
          />
          <p className="mt-1 text-center text-xs text-foreground/50 md:hidden">
            Swipe to browse. Tap Close or the dimmed area to exit.
          </p>
          <p className="mt-1 hidden text-center text-xs text-foreground/50 md:block">
            Swipe the image, tap a thumbnail, or use arrow keys. Escape to
            close.
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
