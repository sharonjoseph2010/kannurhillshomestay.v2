import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Info, Calendar, Users, LogIn, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const PearlNestPricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pricingPlan = {
    name: "Standard Stay",
    price: "₹2,500",
    period: "per night",
    description: "Perfect for a comfortable hill town getaway",
    features: [
      "Stay for 2 people",
      "Independent 1 BHK AC Cottage",
      "Private parking",
      "Maximum occupancy: 3 people",
      "Home-Cooked Meals (additional cost)"
    ],
    icon: Calendar
  };

  const bookingTerms = [
    "Booking confirmed on advance payment",
    "Cancellation > 7 days: 80% refund",
    "Cancellation > 3 days: 50% refund",
    "Cancellation < 3 days: No refund"
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Affordable rates for a comfortable stay in the hills of Sreekandapuram
          </p>
        </motion.div>

        {/* Pricing Card */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
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
                  <pricingPlan.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-serif text-2xl text-foreground">
                  {pricingPlan.name}
                </CardTitle>
                <p className="text-muted-foreground text-sm mt-2">
                  {pricingPlan.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col pt-4">
                <div className="text-center mb-6">
                  <span className="font-serif text-4xl sm:text-5xl text-foreground">
                    {pricingPlan.price}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">
                    {pricingPlan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pricingPlan.features.map((feature, i) => (
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
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
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
              <p className="text-foreground font-semibold">12:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <LogOut className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Check-out</p>
              <p className="text-foreground font-semibold">11:00 AM</p>
            </div>
          </div>
        </motion.div>

        {/* Extra Person Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-flex items-center gap-2 text-muted-foreground cursor-help">
                  <Info className="w-4 h-4" />
                  <span className="text-sm">Extra person: ₹500 per night</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Extra person uses a rollaway bed. Maximum 1 extra person per booking.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className="text-sm text-muted-foreground mt-2 italic">
            *Home-cooked meals available at additional cost as per menu
          </p>
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
                Booking Terms
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
