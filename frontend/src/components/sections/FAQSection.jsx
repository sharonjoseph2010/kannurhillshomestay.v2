import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const faqs = [
    {
      question: "How far is Thushara Homestay from Paithalmala?",
      answer: "Our homestay in Velladu is located just 15km from Paithalmala Hill Station, making it the perfect base for your visit. We can help arrange transportation to make your journey comfortable."
    },
    {
      question: "What's the distance to Palakkayam Thattu and Kuttippullu?",
      answer: "Both Palakkayam Thattu and Kuttippullu are just 8km away from our homestay, offering easy access for day trips to these beautiful attractions."
    },
    {
      question: "Do you serve Alakode and Karuvanchal areas?",
      answer: "Yes! Our Velladu location provides convenient access to both Alakode and Karuvanchal areas, making us an ideal choice for exploring the entire region."
    },
    {
      question: "What facilities are included in the stay?",
      answer: "You get an independent 1BHK cottage with AC, living room, kitchenette, private bathroom, comfortable beds for up to 3 people, free parking, and access to traditional Kerala meals from our attached Vanitha Hotel."
    },
    {
      question: "How do I make a booking?",
      answer: "Simply contact us via WhatsApp at +91 83300 94302. We require advance payment to confirm bookings and will help you plan your entire hill station experience."
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 texture-overlay pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-[0.2em] mb-4">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Everything you need to know about staying at Thushara Homestay
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-soft data-[state=open]:shadow-medium transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5 text-base sm:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
