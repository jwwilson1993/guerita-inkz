import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

/**
 * Homepage: stitches together each major section as its own component
 * so the file stays readable while you iterate on content.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <GalleryPreview />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
