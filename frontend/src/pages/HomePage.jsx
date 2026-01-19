import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import GallerySection from "@/components/sections/GallerySection";
import PricingSection from "@/components/sections/PricingSection";
import LocationSection from "@/components/sections/LocationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import LightboxGallery from "@/components/LightboxGallery";

export default function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: 'https://i.ibb.co/Sw54HWxg/Thushara-Homestay-Bedroom.jpg',
      alt: 'Thushara Homestay Bedroom'
    },
    {
      src: 'https://i.ibb.co/RTfFBBxr/Thushara-Homestay-Bedroom-1.jpg',
      alt: 'Thushara Homestay Bedroom View'
    },
    {
      src: 'https://i.ibb.co/mrCb1n6w/Thushara-Homestay-Dining.jpg',
      alt: 'Thushara Homestay Dining Area'
    },
    {
      src: 'https://i.ibb.co/G39FSvMs/Thushara-Homestay-Kitchenette.jpg',
      alt: 'Thushara Homestay Kitchenette'
    },
    {
      src: 'https://i.ibb.co/7J10bzfC/Thushara-Homestay-Living-Room.jpg',
      alt: 'Thushara Homestay Living Room'
    },
    {
      src: 'https://i.ibb.co/VW9M7DMH/Thushara-Homestay-Living-Room-1.jpg',
      alt: 'Thushara Homestay Living Area'
    },
    {
      src: 'https://i.ibb.co/zW0kgJxC/Thushara-Homestay-Sofa.jpg',
      alt: 'Thushara Homestay Sofa Area'
    },
    {
      src: 'https://i.ibb.co/yB0fb1ZF/Thushara-Homestay-Washroom.jpg',
      alt: 'Thushara Homestay Washroom'
    }
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Handle escape key
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
      <Navbar />
      <main>
        <HeroSection images={images} openLightbox={openLightbox} />
        <AboutSection />
        <GallerySection images={images} openLightbox={openLightbox} />
        <PricingSection />
        <TestimonialsSection />
        <LocationSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      
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
