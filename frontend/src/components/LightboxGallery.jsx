import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LightboxGallery = ({ images, currentIndex, setCurrentIndex, onClose }) => {
  const navigateImage = useCallback((direction) => {
    setCurrentIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % images.length;
      } else {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
    });
  }, [images.length, setCurrentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateImage, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-foreground/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 text-primary-foreground"
      >
        <X className="w-6 h-6" />
      </Button>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          navigateImage("prev");
        }}
        className="absolute left-4 z-10 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 text-primary-foreground"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          navigateImage("next");
        }}
        className="absolute right-4 z-10 w-12 h-12 rounded-full bg-background/10 hover:bg-background/20 text-primary-foreground"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Image Container */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-[90vw] max-h-[85vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]?.src}
          alt={images[currentIndex]?.alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-elevated"
        />
      </motion.div>

      {/* Image Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full">
        <span className="text-primary-foreground text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto py-2 px-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden transition-all duration-200 ${
              index === currentIndex
                ? "ring-2 ring-primary-foreground opacity-100 scale-105"
                : "opacity-50 hover:opacity-75"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default LightboxGallery;
