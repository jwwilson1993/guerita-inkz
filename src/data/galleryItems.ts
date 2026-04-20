/**
 * Central list of gallery images for the homepage preview.
 * Add new objects here later to grow the gallery without touching layout code.
 */
export type GalleryItem = {
  id: string;
  /** Shown in lightboxes or captions later */
  title: string;
  /** Accessible description of the piece */
  alt: string;
  /** Remote placeholder — swap for your own image paths in /public when ready */
  src: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Fine-line florals",
    alt: "Placeholder image representing a fine-line floral tattoo",
    src: "https://picsum.photos/seed/guerita-floral/800/800",
  },
  {
    id: "2",
    title: "Script lettering",
    alt: "Placeholder image representing script lettering tattoo work",
    src: "https://picsum.photos/seed/guerita-script/800/800",
  },
  {
    id: "3",
    title: "Ornamental wrist band",
    alt: "Placeholder image representing ornamental blackwork",
    src: "https://picsum.photos/seed/guerita-ornament/800/800",
  },
  {
    id: "4",
    title: "Soft shading portrait",
    alt: "Placeholder image representing portrait-style tattoo",
    src: "https://picsum.photos/seed/guerita-portrait/800/800",
  },
  {
    id: "5",
    title: "Tiny minimalist icons",
    alt: "Placeholder image representing small minimalist tattoos",
    src: "https://picsum.photos/seed/guerita-mini/800/800",
  },
  {
    id: "6",
    title: "Custom sleeve detail",
    alt: "Placeholder image representing larger composition work",
    src: "https://picsum.photos/seed/guerita-sleeve/800/800",
  },
];
