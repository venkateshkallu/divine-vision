import { Phone, MessageCircle, Star, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceBg from "@/assets/service-bg.jpg";

interface ServicePageProps {
  title: string;
  subtitle: string;
  problems: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  benefits: string[];
  testimonials: { name: string; text: string; location: string }[];
}

const ServicePageLayout = ({
  title,
  subtitle,
  problems,
  solutions,
  benefits,
  testimonials,
}: ServicePageProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src={serviceBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="container relative z-10 py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-gold leading-tight glow-text-gold mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 font-body leading-relaxed mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+919999999999">
                <Button size="lg" className="bg-gradient-divine font-body font-semibold gap-2 text-lg px-8">
                  <Phone className="w-5 h-5" /> Call Now
                </Button>
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="font-body font-semibold gap-2 text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-cosmic">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display text-gradient-gold text-center mb-4">
            Are You Facing These Problems?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            You are not alone. Thousands face similar challenges every day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border-glow-gold">
                <h3 className="text-primary font-display text-lg mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display text-gradient-gold text-center mb-4">
            How Astrology Can Help You
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ancient Vedic wisdom combined with deep expertise to guide your path.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-display text-lg mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Clock, label: "40+ Years Experience", value: "40+" },
            { icon: Users, label: "Happy Clients", value: "20,000+" },
            { icon: Star, label: "Success Rate", value: "95%" },
            { icon: Shield, label: "100% Confidential", value: "Private" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <item.icon className="w-8 h-8 text-primary mb-2" />
              <span className="text-2xl md:text-3xl font-display text-gradient-gold font-bold">{item.value}</span>
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-cosmic">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display text-gradient-gold text-center mb-12">
            Benefits You'll Receive
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 bg-card/30 rounded-lg p-4">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground/90 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display text-gradient-gold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border-glow-gold">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm italic mb-4">"{t.text}"</p>
                <div>
                  <p className="text-primary font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-cosmic relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={serviceBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display text-gradient-gold mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Don't wait. Get personalized astrological guidance today and find your path to happiness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919999999999">
              <Button size="lg" className="bg-gradient-divine font-body font-semibold gap-2 text-lg px-10 glow-gold">
                <Phone className="w-5 h-5" /> Call Now — Free Consultation
              </Button>
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="font-body font-semibold gap-2 text-lg px-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
