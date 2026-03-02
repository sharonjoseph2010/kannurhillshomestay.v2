import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, UtensilsCrossed, Car, Mountain, TreePine, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const PearlNestAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Home,
      title: "Comfortable Stay",
      description: "Well-furnished rooms with modern amenities for a relaxing experience"
    },
    {
      icon: UtensilsCrossed,
      title: "Home-Cooked Meals",
      description: "Delicious traditional Kerala cuisine prepared with love"
    },
    {
      icon: Car,
      title: "Easy Access",
      description: "Conveniently located with good road connectivity"
    },
    {
      icon: Mountain,
      title: "Hill Town Setting",
      description: "Nestled in the scenic beauty of Sreekandapuram"
    },
    {
      icon: TreePine,
      title: "Nature Retreat",
      description: "Surrounded by lush greenery and peaceful atmosphere"
    },
    {
      icon: Wind,
      title: "Cool Climate",
      description: "Enjoy the refreshing hill station weather year-round"
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
            Pearl Nest Homestay
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Experience the tranquility of Sreekandapuram at Pearl Nest. 
            A perfect retreat for those seeking peace, nature, and authentic Kerala hospitality.
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
            Pearl Nest offers a unique hill town experience in 
            <span className="text-primary font-medium"> Sreekandapuram</span>, 
            perfect for families, couples, and solo travelers looking to escape the city bustle 
            and immerse themselves in the natural beauty of Kerala&apos;s Western Ghats.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PearlNestAbout;
