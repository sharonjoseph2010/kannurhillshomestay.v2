import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Heart, ChevronLeft } from "lucide-react";

export const PropertyFooter = ({ config }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {config.logo ? (
                  <img
                    src={config.logo}
                    alt={config.name}
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center font-serif text-xl font-semibold">
                    {config.shortName.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-serif text-xl font-semibold">{config.shortName}</h3>
                  <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/70">Homestay</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
                Experience authentic Kerala hill life. A peaceful retreat surrounded by 
                the misty mountains of the Western Ghats.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-4 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                View All Properties
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-serif text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(config.address.street + ', ' + config.address.area)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">
                      {config.address.street}<br />
                      {config.address.area}<br />
                      {config.address.state}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${config.phone}`}
                    className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">{config.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${config.email}`}
                    className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">{config.email}</span>
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-serif text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Location", href: "#location" },
                  { label: "Contact", href: "#contact" }
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} {config.name}. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/70 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in Kerala
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PropertyFooter;
