import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const PearlNestFAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const faqs = [
    {
      question: "Where is Pearl Nest located?",
      answer: "Pearl Nest is located in the peaceful hill town of Sreekandapuram in Kerala, offering a serene retreat away from the city bustle."
    },
    {
      question: "What amenities are available?",
      answer: "We offer comfortable rooms with modern amenities, home-cooked meals on request, and a peaceful environment surrounded by nature."
    },
    {
      question: "How can I make a booking?",
      answer: "You can contact us via WhatsApp at +91 98457 68698 or email us at info@kannurhillshomestay.com. We'll be happy to assist you with your booking."
    },
    {
      question: "Is Pearl Nest suitable for families?",
      answer: "Yes! Pearl Nest is perfect for families, couples, and solo travelers looking for a peaceful retreat in the hills of Kerala."
    },
    {
      question: "What is the best time to visit?",
      answer: "Sreekandapuram enjoys pleasant weather throughout the year. However, the post-monsoon months (October to February) offer the best experience with cool, refreshing climate."
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
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
            Everything you need to know about staying at Pearl Nest
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

export default PearlNestFAQ;
