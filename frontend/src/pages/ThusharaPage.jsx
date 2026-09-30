import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropertyNavbar from "@/components/layout/PropertyNavbar";
import ThusharaHero from "@/components/thushara/ThusharaHero";
import AboutSection from "@/components/sections/AboutSection";
import GallerySection from "@/components/sections/GallerySection";
import PricingSection from "@/components/sections/PricingSection";
import LocationSection from "@/components/sections/LocationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import PropertyFooter from "@/components/layout/PropertyFooter";
import LightboxGallery from "@/components/LightboxGallery";

export default function ThusharaPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const gallery = [
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-banner.jpg',
      alt: 'Thushara Homestay entrance and roadside view in Velladu, Alakode',
      position: 'center 70%'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-living-room-03.jpg',
      alt: 'Thushara Homestay living room with sofa set'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-living-room-04.jpg',
      alt: 'Thushara Homestay living and dining area'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-bedroom-01.jpg',
      alt: 'Thushara Homestay bedroom with double bed'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-bedroom-02.jpg',
      alt: 'Thushara Homestay bedroom with wooden cot'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-bedroom-03.jpg',
      alt: 'Thushara Homestay bedroom and view to dining area'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-living-room-01.jpg',
      alt: 'Thushara Homestay open living space'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-living-room-02.jpg',
      alt: 'Thushara Homestay sofa seating'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-living-room-05.jpg',
      alt: 'Thushara Homestay living room and balcony door'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-living-room-06.jpg',
      alt: 'Thushara Homestay hall with ceiling fan'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-living-room-07.jpg',
      alt: 'Thushara Homestay living room with day bed'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-extra-bed-01.jpg',
      alt: 'Thushara Homestay extra bed with dining table'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-extra-bed-02.jpg',
      alt: 'Thushara Homestay extra bed area'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-study-table-01.jpg',
      alt: 'Thushara Homestay study table'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-restroom-01.jpg',
      alt: 'Thushara Homestay bathroom with water heater'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-restroom-02.jpg',
      alt: 'Thushara Homestay bathroom with shower'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-restroom-03.jpg',
      alt: 'Thushara Homestay bathroom washbasin'
    }
  ];

  const heroImages = [
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-banner.jpg',
      alt: 'Thushara Homestay entrance and roadside view in Velladu, Alakode',
      position: 'center 70%'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-living-room-03.jpg',
      alt: 'Thushara Homestay living room with sofa set'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-bedroom-01.jpg',
      alt: 'Thushara Homestay bedroom with double bed'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-living-room-04.jpg',
      alt: 'Thushara Homestay living and dining area'
    },
    {
      src: '/images/thushara/thushara-homestay-vellad-alakode-living-room-01.jpg',
      alt: 'Thushara Homestay open living space'
    }
  ];

  // Portrait photos: tall tiles, with three wide featured tiles so rows fill evenly
  const galleryLayout = gallery.map((_, i) =>
    [0, 3, 6].includes(i) ? "col-span-2 row-span-2" : "col-span-1 row-span-2"
  );

  const propertyConfig = {
    name: "Thushara Homestay",
    shortName: "Thushara",
    logo: "https://i.ibb.co/qY1T79h5/Thushara-Logo.png",
    phone: "+918330094302",
    email: "info@kannurhillshomestay.com",
    whatsapp: "918330094302",
    address: {
      street: "Karuvanchal - Velladu Road",
      area: "Velladu, Alakode",
      state: "Kerala, India 670571"
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
        <ThusharaHero images={heroImages} openLightbox={openLightbox} />
        <AboutSection />
        <GallerySection images={gallery} openLightbox={openLightbox} gridPositions={galleryLayout} />
        <PricingSection />
        <TestimonialsSection />
        <LocationSection />
        <FAQSection />
        <section className="py-12 bg-background">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="text-2xl font-semibold mb-3">Explore Nearby Attractions</h2>
            <p className="mb-5">
              Thushara Homestay is the perfect base for North Kerala's best viewpoints.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/palakkayam-thattu" className="underline hover:no-underline font-medium">
                Palakkayam Thattu Guide (8 km)
              </a>
              <a href="/paithalmala" className="underline hover:no-underline font-medium">
                Paithalmala Trekking Guide (15 km)
              </a>
            </div>
          </div>
        </section>
        <ContactSection config={propertyConfig} />
      </main>
      <PropertyFooter config={propertyConfig} />
      
      <AnimatePresence>
        {lightboxOpen && (
          <LightboxGallery
            images={gallery}
            currentIndex={currentImageIndex}
            setCurrentIndex={setCurrentImageIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
