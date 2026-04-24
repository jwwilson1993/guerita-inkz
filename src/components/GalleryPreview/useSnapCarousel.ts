"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

export function useSnapCarousel(length: number, initialIndex = 0) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const syncActiveFromScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    if (w <= 0) return;
    const next = Math.min(
      length - 1,
      Math.max(0, Math.round(el.scrollLeft / w)),
    );
    setActiveIndex((prev) => (prev !== next ? next : prev));
  }, [length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    return () => el.removeEventListener("scroll", syncActiveFromScroll);
  }, [syncActiveFromScroll]);

  const scrollToSlide = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const el = scrollerRef.current;
      if (!el) return;
      const w = el.clientWidth;
      if (w <= 0) return;
      const left = index * w;
      if (behavior === "auto") {
        // Direct assignment avoids CSS `scroll-behavior: smooth` on ancestors
        // and skips animating through every snap slide.
        el.scrollLeft = left;
      } else {
        el.scrollTo({ left, behavior });
      }
      setActiveIndex(index);
    },
    [],
  );

  const onCarouselKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToSlide(Math.min(activeIndex + 1, length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToSlide(Math.max(activeIndex - 1, 0));
      }
    },
    [activeIndex, length, scrollToSlide],
  );

  return {
    scrollerRef,
    activeIndex,
    scrollToSlide,
    syncActiveFromScroll,
    onCarouselKeyDown,
  };
}
