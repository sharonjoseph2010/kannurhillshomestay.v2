import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PropertySelectorPage() {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  const properties = [
    {
      id: "thushara",
      name: "Thushara Homestay",
      location: "Velladu, Alakode",
      image: "https://i.ibb.co/mrCb1n6w/Thushara-Homestay-Dining.jpg",
      highlights: [
        "Independent cottage",
        "Near Paithalmala",
        "From ₹2000/night"
      ],
      link: "/thushara"
    },
    {
      id: "pearlnest",
      name: "Pearl Nest",
      location: "Sreekandapuram",
      image: "/images/pearlnest/pearl-nest-homestay-sreekandapuram-kerala-stay.jpg",
      highlights: [
        "Hill town stay",
        "Peaceful location",
        "From ₹2500/night"
      ],
      link: "/pearlnest"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">

        {/* Ken Burns background — slow continuous zoom */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/kannur-hills-hero.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{ scale: [1, 1.07] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Green overlay — fades in */}
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: '#3f6b2a' }}
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 0.78 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        {/* Subtle vignette at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-20">

          {/* Logo — floats gently after entrance */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <motion.img
              src="https://i.ibb.co/LdPzZ9b5/Kannur-Hills-Logo.png"
              alt="Kannur Hills Homestay"
              className="h-14 sm:h-16 w-auto object-contain"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
            />
            <span className="font-serif text-2xl text-primary-foreground font-semibold">
              Kannur Hills Homestay
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6"
          >
            Stay in the Hills of Kannur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
            className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto"
          >
            Choose your perfect hill stay in the Western Ghats
          </motion.p>

          {/* Animated scroll-hint chevron */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
              className="w-6 h-6 border-r-2 border-b-2 border-primary-foreground/50 rotate-45"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Property Cards ── */}
      <section ref={cardsRef} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3">
              Our Properties
            </span>
            <div className="w-12 h-0.5 bg-accent mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.18, duration: 0.65, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                className="h-full"
              >
                <Card className="group overflow-hidden border-border/50 shadow-medium hover:shadow-elevated transition-shadow duration-300 h-full flex flex-col">

                  {/* Image with zoom + shimmer */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Base gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent" />

                    {/* Shimmer sweep on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                      whileHover={{ x: ["−100%", "200%"] }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    />

                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="font-serif text-2xl sm:text-3xl text-white mb-1">
                        {property.name}
                      </h2>
                      <div className="flex items-center gap-1.5 text-white/90">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {property.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={cardsInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.18 + 0.3 + i * 0.08, duration: 0.4 }}
                          className="flex items-center gap-3 text-foreground"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Link to={property.link} className="block mt-auto">
                      <Button variant="nature" size="lg" className="w-full group/btn">
                        View {property.name.split(' ')[0]}
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} Kannur Hills Homestay. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            Serving Alakode, Karuvanchal, Velladu, Sreekandapuram & surrounding areas
          </p>
        </div>
      </footer>
    </div>
  );
}
