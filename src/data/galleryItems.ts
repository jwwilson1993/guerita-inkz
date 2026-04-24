/**
 * Central list of gallery images for the homepage preview.
 * Add new objects here later to grow the gallery without touching layout code.
 *
 * Next.js `<Image sizes="…">` for these paths is set under
 * `components/GalleryPreview/` from the real layout (padding, grid, lightbox).
 */
export type GalleryItem = {
  id: string;
  /** Shown in lightboxes or captions later */
  title: string;
  /** Accessible description of the piece */
  alt: string;
  /** Paths are served from /public */
  src: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "image-0",
    title: "Piece 1",
    alt: "Tattoo portfolio photograph, image 1 of 12",
    src: "/image0.jpeg",
  },
  {
    id: "image-1",
    title: "Piece 2",
    alt: "Tattoo portfolio photograph, image 2 of 12",
    src: "/image1.jpeg",
  },
  {
    id: "image-2",
    title: "Piece 3",
    alt: "Tattoo portfolio photograph, image 3 of 12",
    src: "/image2.jpeg",
  },
  {
    id: "image-3",
    title: "Piece 4",
    alt: "Tattoo portfolio photograph, image 4 of 12",
    src: "/image3.jpeg",
  },
  {
    id: "image-4",
    title: "Piece 5",
    alt: "Tattoo portfolio photograph, image 5 of 12",
    src: "/image4.jpeg",
  },
  {
    id: "image-5",
    title: "Piece 6",
    alt: "Tattoo portfolio photograph, image 6 of 12",
    src: "/image5.jpeg",
  },
  {
    id: "image-6",
    title: "Piece 7",
    alt: "Tattoo portfolio photograph, image 7 of 12",
    src: "/image6.jpeg",
  },
  {
    id: "image-7",
    title: "Piece 8",
    alt: "Tattoo portfolio photograph, image 8 of 12",
    src: "/image7.jpeg",
  },
  {
    id: "image-8",
    title: "Piece 9",
    alt: "Tattoo portfolio photograph, image 9 of 12",
    src: "/image8.jpeg",
  },
  {
    id: "image-9",
    title: "Piece 10",
    alt: "Tattoo portfolio photograph, image 10 of 12",
    src: "/image9.jpeg",
  },
  {
    id: "image-10",
    title: "Piece 11",
    alt: "Tattoo portfolio photograph, image 11 of 12",
    src: "/image10.jpeg",
  },
  {
    id: "image-11",
    title: "Piece 12",
    alt: "Tattoo portfolio photograph, image 12 of 12",
    src: "/image11.jpeg",
  },
];
