import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropertyNavbar from "@/components/layout/PropertyNavbar";
import PearlNestHero from "@/components/pearlnest/PearlNestHero";
import PearlNestAbout from "@/components/pearlnest/PearlNestAbout";
import GallerySection from "@/components/sections/GallerySection";
import PearlNestPricing from "@/components/pearlnest/PearlNestPricing";
import PearlNestLocation from "@/components/pearlnest/PearlNestLocation";
import PearlNestFAQ from "@/components/pearlnest/PearlNestFAQ";
import PearlNestContact from "@/components/pearlnest/PearlNestContact";
import PropertyFooter from "@/components/layout/PropertyFooter";
import LightboxGallery from "@/components/LightboxGallery";

export default function PearlNestPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Placeholder images - to be replaced later
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60',
      alt: 'Pearl Nest Exterior'
    },
    {
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60',
      alt: 'Pearl Nest Bedroom'
    },
    {
      src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=60',
      alt: 'Pearl Nest Living Area'
    },
    {
      src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=60',
      alt: 'Pearl Nest Bathroom'
    },
    {
      src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&auto=format&fit=crop&q=60',
      alt: 'Pearl Nest Kitchen'
    },
    {
      src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60',
      alt: 'Pearl Nest Interior'
    }
  ];

  const propertyConfig = {
    name: "Pearl Nest",
    shortName: "Pearl Nest",
    logo: null, // Will be added later
    phone: "+918330094302",
    email: "info@kannurhillshomestay.com",
    whatsapp: "918330094302",
    address: {
      street: "Sreekandapuram",
      area: "Sreekandapuram",
      state: "Kerala, India"
    }
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <PropertyNavbar config={propertyConfig} />
      <main>
        <PearlNestHero images={images} openLightbox={openLightbox} />
        <PearlNestAbout />
        <GallerySection images={images} openLightbox={openLightbox} />
        <PearlNestPricing />
        <PearlNestLocation />
        <PearlNestFAQ />
        <PearlNestContact config={propertyConfig} />
      </main>
      <PropertyFooter config={propertyConfig} />
      
      <AnimatePresence>
        {lightboxOpen && (
          <LightboxGallery
            images={images}
            currentIndex={currentImageIndex}
            setCurrentIndex={setCurrentImageIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
