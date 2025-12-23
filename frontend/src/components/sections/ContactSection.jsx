import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone, Mail, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappMessage = encodeURIComponent(
    "Hi! I'm interested in booking a stay at Thushara Homestay. Could you please share availability and details?"
  );

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Contact Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Contact us directly via WhatsApp for instant booking and personalized assistance. 
            We&apos;ll help plan your perfect hill station getaway!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-card border-border/50 shadow-elevated overflow-hidden">
            <CardContent className="p-0">
              {/* Main CTA */}
              <div className="p-8 text-center bg-gradient-to-br from-primary/5 to-transparent">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  Book via WhatsApp
                </h3>
                <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                  Get instant responses and real-time availability. Our team is ready to help you plan your perfect stay.
                </p>
                <Button
                  variant="whatsapp"
                  size="xl"
                  onClick={() => window.open(`https://wa.me/918330094302?text=${whatsappMessage}`, "_blank")}
                  className="group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Divider */}
              <div className="px-8">
                <div className="section-divider" />
              </div>

              {/* Alternative Contact */}
              <div className="p-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <a
                    href="tel:+918330094302"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Call Us</p>
                      <p className="text-foreground font-medium">+91 83300 94302</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@kannurhillshomestay.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                      <p className="text-foreground font-medium text-sm">info@kannurhillshomestay.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Important Note */}
              <div className="px-8 pb-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/80">
                    <span className="font-medium">Important:</span> Please do not visit Thushara Homestay without a prior booking. You will have to return disappointed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
