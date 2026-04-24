/** No `scroll-smooth` here — it forces smooth scrolling even for `scrollTo({ behavior: "auto" })`. */
export const CAROUSEL_SCROLLER_CLASS =
  "flex snap-x snap-mandatory overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

export const THUMB_STRIP_CLASS =
  "flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

/** Mobile carousel sits inside `max-w-6xl px-4 sm:px-6` — slide width is less than 100vw. */
export const SIZES_MOBILE_CAROUSEL =
  "(max-width: 639px) calc(100vw - 2rem), calc(100vw - 3rem)";

/**
 * md+ grid: 2 cols (768–1023), 3 cols lg+ inside max-w-6xl (72rem), `gap-4`,
 * horizontal padding md–lg `px-6`, lg+ `px-8`.
 */
export const SIZES_GRID =
  "(max-width: 1023px) calc((100vw - 4rem) / 2), calc((min(100vw, 72rem) - 6rem) / 3)";

/** Lightbox slide uses `px-2` then `sm:px-4` on the slide wrapper. */
export const SIZES_LIGHTBOX =
  "(max-width: 639px) calc(100vw - 1rem), calc(100vw - 2rem)";
