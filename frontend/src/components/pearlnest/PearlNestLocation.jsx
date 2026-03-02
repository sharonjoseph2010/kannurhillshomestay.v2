import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, Mountain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PearlNestLocation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nearbyAttractions = [
    { name: "Sreekandapuram Town", distance: "Nearby" },
    { name: "Western Ghats", distance: "Accessible" },
    { name: "Local Markets", distance: "Close by" },
    { name: "Kannur City", distance: "Reachable" }
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
            Find Us In Sreekandapuram
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Pearl Nest is located in the peaceful hill town of Sreekandapuram, 
            offering easy access to local attractions and the natural beauty of the Western Ghats.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-xl overflow-hidden shadow-elevated bg-secondary flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Map will be added soon</p>
                <p className="text-sm text-muted-foreground mt-2">Sreekandapuram, Kerala</p>
              </div>
            </div>
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
                      Pearl Nest<br />
                      Sreekandapuram<br />
                      Kerala, India
                    </p>
                    <Button
                      variant="link"
                      className="px-0 mt-2 text-primary"
                      onClick={() => window.open("https://maps.google.com/?q=Sreekandapuram,Kerala", "_blank")}
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Places */}
            <Card className="bg-card border-border/50 shadow-soft flex-1">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg text-foreground mb-4 flex items-center gap-2">
                  <Mountain className="w-5 h-5 text-primary" />
                  Nearby Places
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

export default PearlNestLocation;
