import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Gireesh Achikkanam",
      location: "Google Review",
      rating: 5,
      text: "Best Room Best service and Best Ambiance. Everything was perfect during our stay!",
      initials: "GA"
    },
    {
      name: "Travel Diary",
      location: "Google Review",
      rating: 5,
      text: "I highly recommend! We stayed 5 people and it was very comfortable. Great experience overall.",
      initials: "TD"
    },
    {
      name: "Verified Guest",
      location: "Google Review",
      rating: 5,
      text: "The homestay location is perfect for exploring the region. Easy access to Paithalmala and Palakkayam Thattu. Highly recommend!",
      initials: "VG"
    },
    {
      name: "Verified Guest",
      location: "Google Review",
      rating: 5,
      text: "Peaceful, serene, and authentic. The service was excellent and the hosts were very helpful. Will definitely return!",
      initials: "VG"
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
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Real experiences from travelers who made Thushara Homestay their home away from home
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-foreground/80 leading-relaxed mb-6 flex-1 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <Avatar className="w-10 h-10 bg-primary/10">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
