import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PHONE = "+919121878363";
const WA_LINK = "https://wa.me/919121878363?text=Hi%20I%20need%20astrology%20consultation";

const serviceLinks = [
  { label: "Love Problem Solution", to: "/love-problem-solution" },
  { label: "Marriage Astrology", to: "/marriage-astrology" },
  { label: "Career Guidance", to: "/career-problem" },
  { label: "Health Problem Solution", to: "/health-problem" },
  { label: "Numerology", to: "/numerology" },
  { label: "Vastu Shastra", to: "/vastu" },
  { label: "Kundli / Birth Chart", to: "/kundli-analysis" },
];

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl text-gradient-gold font-bold tracking-wider">
          ॐ Jyotish Guru
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {mainLinks.slice(0, 2).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-body text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 outline-none">
              Services <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border min-w-[220px]">
              {serviceLinks.map((link) => (
                <DropdownMenuItem key={link.to} asChild>
                  <Link
                    to={link.to}
                    className="text-sm font-body text-muted-foreground hover:text-primary cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {mainLinks.slice(2).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 ml-2">
            <a href={`tel:${PHONE}`}>
              <Button size="sm" className="bg-gradient-divine font-body font-semibold gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="font-body font-semibold gap-2 border-[hsl(142,70%,45%)] text-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,45%)] hover:text-background">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border pb-4 max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>

          {/* Mobile Services Accordion */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full flex items-center justify-between px-6 py-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
          >
            Services
            <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesOpen && (
            <div className="bg-card/50">
              {serviceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => { setOpen(false); setServicesOpen(false); }}
                  className="block px-10 py-2.5 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/testimonials" onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-body text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>

          <div className="px-6 pt-3 flex flex-col gap-2">
            <a href={`tel:${PHONE}`}>
              <Button className="w-full bg-gradient-divine font-body font-semibold gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full font-body font-semibold gap-2 border-[hsl(142,70%,45%)] text-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,45%)] hover:text-background">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
