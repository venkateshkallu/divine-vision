import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const PHONE = "+919121878363";
const WA_LINK = "https://wa.me/919121878363?text=Hi%20I%20need%20astrology%20consultation";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-10 sm:py-16">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12">
        <div>
          <h3 className="text-xl sm:text-2xl text-gradient-gold font-bold mb-3 sm:mb-4">ॐ Jyotish Guru</h3>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
            Guiding souls through the cosmic wisdom of Vedic astrology for over 40 years.
            Trusted by 20,000+ clients worldwide.
          </p>
        </div>
        <div>
          <h4 className="text-primary font-display text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Testimonials", to: "/testimonials" },
              { label: "Contact", to: "/contact" },
            ].map((s) => (
              <Link key={s.to} to={s.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-primary font-display text-lg mb-4">Our Services</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Love Problem Solution", to: "/love-problem-solution" },
              { label: "Marriage Astrology", to: "/marriage-astrology" },
              { label: "Career Guidance", to: "/career-problem" },
              { label: "Numerology", to: "/numerology" },
              { label: "Vastu Shastra", to: "/vastu" },
              { label: "Kundli Analysis", to: "/kundli-analysis" },
            ].map((s) => (
              <Link key={s.to} to={s.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-primary font-display text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-primary transition-colors text-primary font-medium">
              <Phone className="w-4 h-4" /> +91 91218 78363
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4 text-[hsl(142,70%,45%)]" /> WhatsApp Us
            </a>
            <a href="mailto:info@jyotishguru.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" /> info@jyotishguru.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Hyderabad, India
            </span>
          </div>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Jyotish Guru. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
