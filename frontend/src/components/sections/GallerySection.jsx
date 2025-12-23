import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Images } from "lucide-react";

export const GallerySection = ({ images, openLightbox }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Explore
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Our Space Gallery
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Take a virtual tour through our cozy homestay. Click on any image to view in full screen.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {images.map((image, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ aspectRatio: index === 0 ? "1" : "4/3" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Images className="w-4 h-4" />
                  <span className="text-sm font-medium">View</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
