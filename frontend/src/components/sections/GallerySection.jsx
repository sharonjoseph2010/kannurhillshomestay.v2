import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Images, Expand } from "lucide-react";

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Bento grid layout positions for 8 images
  const gridPositions = [
    "col-span-2 row-span-2", // Large - Bedroom (featured)
    "col-span-1 row-span-1", // Small
    "col-span-1 row-span-1", // Small
    "col-span-1 row-span-2", // Tall
    "col-span-1 row-span-1", // Small
    "col-span-1 row-span-1", // Small - was wide, now small
    "col-span-1 row-span-1", // Small
    "col-span-1 row-span-1", // Small
  ];

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Bento Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[160px] gap-3 md:gap-4"
        >
          {images.map((image, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 ${
                gridPositions[index] || "col-span-1 row-span-1"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Content */}
              <div className="absolute inset-0 flex items-end justify-between p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary-foreground text-xs md:text-sm font-medium truncate max-w-[70%]">
                  {image.alt.replace("Thushara Homestay ", "")}
                </span>
                <div className="w-8 h-8 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                  <Expand className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => openLightbox(0)}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <Images className="w-5 h-5" />
            <span>View all {images.length} photos</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
