import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropertyNavbar from "@/components/layout/PropertyNavbar";
import PearlNestHero from "@/components/pearlnest/PearlNestHero";
import PearlNestAbout from "@/components/pearlnest/PearlNestAbout";
import GallerySection from "@/components/sections/GallerySection";
import PearlNestPricing from "@/components/pearlnest/PearlNestPricing";
import PearlNestReviews from "@/components/pearlnest/PearlNestReviews";
import PearlNestLocation from "@/components/pearlnest/PearlNestLocation";
import PearlNestFAQ from "@/components/pearlnest/PearlNestFAQ";
import PearlNestContact from "@/components/pearlnest/PearlNestContact";
import PropertyFooter from "@/components/layout/PropertyFooter";
import LightboxGallery from "@/components/LightboxGallery";

export default function PearlNestPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: '/images/pearlnest/pearl-nest-homestay-sreekandapuram-kerala-bedroom.jpg',
      alt: 'Bedroom at Pearl Nest Homestay in Sreekandapuram, Kannur'
    },
    {
      src: '/images/pearlnest/pearl-nest-homestay-sreekandapuram-hillstay-view.jpg',
      alt: 'Peaceful hill stay at Pearl Nest Homestay Sreekandapuram Kerala'
    },
    {
      src: '/images/pearlnest/pearl-nest-homestay-sreekandapuram-guestroom.jpg',
      alt: 'Accommodation at Pearl Nest Homestay in the Kannur Hills'
    },
    {
      src: '/images/pearlnest/pearl-nest-homestay-sreekandapuram-interior.jpg',
      alt: 'Interior view of Pearl Nest Homestay Sreekandapuram'
    },
    {
      src: '/images/pearlnest/pearl-nest-homestay-sreekandapuram-accommodation.jpg',
      alt: 'Dining area at Pearl Nest Homestay Sreekandapuram Kerala'
    },
    {
      src: '/images/pearlnest/pearl-nest-homestay-sreekandapuram-kerala-stay.jpg',
      alt: 'Comfortable room at Pearl Nest Homestay Sreekandapuram, Kannur'
    }
  ];

  const propertyConfig = {
    name: "Pearl Nest",
    shortName: "Pearl Nest",
    logo: null,
    phone: "+919845768698",
    email: "info@kannurhillshomestay.com",
    whatsapp: "919845768698",
    address: {
      street: "Kottoor, Sreekandapuram",
      area: "Kannur",
      state: "Kerala, India 670631"
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
        <PearlNestReviews />
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
