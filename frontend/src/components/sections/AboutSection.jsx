import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, UtensilsCrossed, Car, Mountain, Wifi, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Home,
      title: "Independent Cottage",
      description: "Spacious 1BHK with AC, living room, kitchenette and private bathroom"
    },
    {
      icon: UtensilsCrossed,
      title: "Traditional Meals",
      description: "Authentic Kerala cuisine from Vanitha Hotel (attached women's group restaurant)"
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Secure parking space in our safe residential area"
    },
    {
      icon: Mountain,
      title: "Hill Attractions",
      description: "Easy access to Paithalmala, Palakkayam Thattu & Kuttippullu"
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "Stay connected with complimentary WiFi throughout your stay"
    },
    {
      icon: Wind,
      title: "Fresh Mountain Air",
      description: "Wake up to misty mornings and cool, refreshing breezes"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 texture-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Welcome to
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Your Home in the Hills
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Get a taste of authentic Kerala hill life at Thushara Homestay. 
            Live in an independent cottage, enjoy traditional meals, and explore 
            the scenic beauty of the Western Ghats.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full bg-card hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our location provides easy access to multiple attractions in the Western Ghats region, 
            making it an ideal base for exploring the natural beauty and cultural richness of 
            Kerala's hill country. We can help arrange transportation for visits to 
            <span className="text-primary font-medium"> Paithalmala Hill Station</span> or 
            <span className="text-primary font-medium"> Palakkayam Thattu</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
