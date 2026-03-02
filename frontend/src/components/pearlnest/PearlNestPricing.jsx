import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Info, Calendar, Users, Clock, LogIn, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const PearlNestPricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingPlans = [
    {
      name: "Standard Stay",
      price: "Contact Us",
      period: "for rates",
      description: "Perfect for a comfortable getaway",
      features: [
        "Comfortable Rooms",
        "Modern Amenities",
        "Home-Cooked Meals Available",
        "Peaceful Location",
        "Nature Views"
      ],
      popular: true,
      icon: Calendar
    }
  ];

  const bookingTerms = [
    "Booking confirmed on advance payment",
    "Cancellation policy applies",
    "Check-in/out times flexible",
    "Meals available on request"
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
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
            Tariff
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Affordable Comfort
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Contact us for the best rates for your stay at Pearl Nest
          </p>
        </motion.div>

        {/* Pricing Card */}
        <div className="flex justify-center mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full max-w-md"
            >
              <Card className="relative h-full flex flex-col border-primary shadow-elevated transition-all duration-300">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1">
                    Pearl Nest
                  </Badge>
                </div>
                <CardHeader className="text-center pb-2 pt-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl text-foreground">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col pt-4">
                  <div className="text-center mb-6">
                    <span className="font-serif text-3xl sm:text-4xl text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="nature"
                    className="w-full mt-auto"
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Contact for Booking
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Check-in/Check-out Times */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <LogIn className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Check-in</p>
              <p className="text-foreground font-semibold">Flexible</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <LogOut className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Check-out</p>
              <p className="text-foreground font-semibold">Flexible</p>
            </div>
          </div>
        </motion.div>

        {/* Booking Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-secondary/50 border-border/50">
            <CardContent className="p-6">
              <h4 className="font-serif text-lg text-foreground mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Booking Information
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {bookingTerms.map((term, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {term}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PearlNestPricing;
