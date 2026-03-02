import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Home, Mountain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PropertySelectorPage() {
  const properties = [
    {
      id: "thushara",
      name: "Thushara Homestay",
      location: "Velladu, Alakode",
      image: "https://i.ibb.co/zW0kgJxC/Thushara-Homestay-Sofa.jpg",
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
      image: "/images/pearlnest/pearl-nest-homestay-sreekandapuram-kerala-bedroom.jpg",
      highlights: [
        "Hill town stay",
        "Peaceful location",
        "Western Ghats access"
      ],
      link: "/pearlnest"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Mountain className="w-10 h-10 text-primary-foreground" />
            <span className="font-serif text-2xl text-primary-foreground font-semibold">Kannur Hills Homestay</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6"
          >
            Stay in the Hills of Kannur
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto"
          >
            Choose your perfect hill stay in the Western Ghats
          </motion.p>
        </div>
      </section>

      {/* Property Cards */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <Card className="group overflow-hidden border-border/50 shadow-medium hover:shadow-elevated transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
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
                        <li key={i} className="flex items-center gap-3 text-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
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
