import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, Mountain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nearbyAttractions = [
    { name: "Paithalmala", distance: "15 km" },
    { name: "Palakkayam Thattu", distance: "22 km" },
    { name: "Kuttippullu", distance: "18 km" },
    { name: "Kannur Town", distance: "35 km" }
  ];

  return (
    <section id="location" ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 texture-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Location
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Find Us In The Hills
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Thushara Homestay is strategically located in Velladu, providing easy access to Alakode, Karuvanchal, Naduvil, and Vayattuparamb. Whether you&apos;re looking for hotels in Alakode, rooms in Karuvanchal, or accommodation near Velladu, our homestay offers the perfect base for both local stays and exploring nearby tourist attractions like Paithalmala Hill Station, Palakkayam Thattu and Kuttipullu.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-medium border-border/50">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.2584894087743!2d75.9524!3d12.4634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI3JzQ4LjIiTiA3NcKwNTcnMDguNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Thushara Homestay Location"
                />
              </div>
            </Card>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Address Card */}
            <Card className="bg-card border-border/50 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-2">Our Address</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Thushara Homestay<br />
                      Karuvanchal - Velladu Road,<br />
                      Kerala, India 670571
                    </p>
                    <Button
                      variant="link"
                      className="px-0 mt-2 text-primary"
                      onClick={() => window.open("https://maps.google.com/?q=12.4634,75.9524", "_blank")}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attractions */}
            <Card className="bg-card border-border/50 shadow-soft flex-1">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg text-foreground mb-4 flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-primary" />
                  Nearby Attractions
                </h3>
                <ul className="space-y-3">
                  {nearbyAttractions.map((attraction, index) => (
                    <li key={index} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                      <span className="text-foreground font-medium text-sm">{attraction.name}</span>
                      <span className="text-primary text-sm font-medium">{attraction.distance}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
