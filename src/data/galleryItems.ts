/**
 * Central list of gallery images for the homepage preview.
 * Add new objects here later to grow the gallery without touching layout code.
 *
 * Next.js `<Image sizes="...">` for these paths is set under
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
    alt: "Tattoo portfolio photograph, image 1 of 18",
    src: "/image0.jpeg",
  },
  {
    id: "image-1",
    title: "Piece 2",
    alt: "Tattoo portfolio photograph, image 2 of 18",
    src: "/image1.jpeg",
  },
  {
    id: "image-2",
    title: "Piece 3",
    alt: "Tattoo portfolio photograph, image 3 of 18",
    src: "/image2.jpeg",
  },
  {
    id: "image-3",
    title: "Piece 4",
    alt: "Tattoo portfolio photograph, image 4 of 18",
    src: "/image3.jpeg",
  },
  {
    id: "image-5",
    title: "Piece 5",
    alt: "Tattoo portfolio photograph, image 5 of 18",
    src: "/image5.jpeg",
  },
  {
    id: "image-6",
    title: "Piece 6",
    alt: "Tattoo portfolio photograph, image 6 of 18",
    src: "/image6.jpeg",
  },
  {
    id: "image-9",
    title: "Piece 7",
    alt: "Tattoo portfolio photograph, image 7 of 18",
    src: "/image9.jpeg",
  },
  {
    id: "image-10",
    title: "Piece 8",
    alt: "Tattoo portfolio photograph, image 8 of 18",
    src: "/image10.jpeg",
  },
  {
    id: "image-11",
    title: "Piece 9",
    alt: "Tattoo portfolio photograph, image 9 of 18",
    src: "/image11.jpeg",
  },
  {
    id: "image-12",
    title: "Piece 10",
    alt: "Tattoo portfolio photograph, image 10 of 18",
    src: "/image12.jpeg",
  },
  {
    id: "image-13",
    title: "Piece 11",
    alt: "Tattoo portfolio photograph, image 11 of 18",
    src: "/image13.jpeg",
  },
  {
    id: "image-14",
    title: "Piece 12",
    alt: "Tattoo portfolio photograph, image 12 of 18",
    src: "/image14.jpeg",
  },
  {
    id: "image-15",
    title: "Piece 13",
    alt: "Tattoo portfolio photograph, image 13 of 18",
    src: "/image15.jpeg",
  },
  {
    id: "image-16",
    title: "Piece 14",
    alt: "Tattoo portfolio photograph, image 14 of 18",
    src: "/image16.jpeg",
  },
  {
    id: "image-17",
    title: "Piece 15",
    alt: "Tattoo portfolio photograph, image 15 of 18",
    src: "/image17.jpeg",
  },
  {
    id: "image-18",
    title: "Piece 16",
    alt: "Tattoo portfolio photograph, image 16 of 18",
    src: "/image18.jpeg",
  },
  {
    id: "image-19",
    title: "Piece 17",
    alt: "Tattoo portfolio photograph, image 17 of 18",
    src: "/image19.jpeg",
  },
  {
    id: "image-20",
    title: "Piece 18",
    alt: "Tattoo portfolio photograph, image 18 of 18",
    src: "/image20.jpeg",
  },
];
