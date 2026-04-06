import { Link } from "react-router-dom";
import { Phone, MessageCircle, Star, Users, Clock, Shield, Heart, Briefcase, Home, BookOpen, Hash, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-cosmic-bg.jpg";

const services = [
  { icon: Heart, title: "Love Problem Solution", desc: "Resolve relationship conflicts and bring harmony back to your love life.", to: "/love-problem-solution" },
  { icon: Users, title: "Marriage Astrology", desc: "Find the perfect match, resolve delays, and ensure a blissful married life.", to: "/marriage-astrology" },
  { icon: Briefcase, title: "Career Guidance", desc: "Unlock your professional potential with planetary insights and remedies.", to: "/career-problem" },
  { icon: Activity, title: "Health Solutions", desc: "Understand health challenges through your birth chart and find remedies.", to: "/health-problem" },
  { icon: Hash, title: "Numerology", desc: "Discover the hidden power of numbers and align your life path.", to: "/numerology" },
  { icon: Home, title: "Vastu Shastra", desc: "Harmonize your living and working spaces for prosperity and peace.", to: "/vastu" },
  { icon: BookOpen, title: "Kundli Analysis", desc: "Deep analysis of your birth chart for life-changing insights.", to: "/kundli-analysis" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroBg}
          alt="Cosmic spiritual background with Trimurti divine energy"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-pulse-glow">
              ✦ Vedic Astrology • Numerology • Vastu ✦
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-gradient-gold leading-tight glow-text-gold mb-6">
              Divine Guidance for Your Life's Journey
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 font-body leading-relaxed mb-10 max-w-lg">
              40+ years of Vedic wisdom. 20,000+ lives transformed. 
              Let the stars reveal your true path to happiness, love, and prosperity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+919121878363">
                <Button size="lg" className="bg-gradient-divine font-body font-semibold gap-2 text-lg px-8 glow-gold">
                  <Phone className="w-5 h-5" /> Free Consultation
                </Button>
              </a>
              <a href="https://wa.me/919121878363?text=Hi%20I%20need%20astrology%20consultation" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="font-body font-semibold gap-2 text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Clock, label: "Years Experience", value: "40+" },
            { icon: Users, label: "Happy Clients", value: "20,000+" },
            { icon: Star, label: "Success Rate", value: "95%" },
            { icon: Shield, label: "Confidential", value: "100%" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <item.icon className="w-7 h-7 text-primary mb-1" />
              <span className="text-2xl md:text-3xl font-display text-gradient-gold font-bold">{item.value}</span>
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gradient-cosmic">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display text-gradient-gold text-center mb-4">
            Our Divine Services
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Comprehensive astrological solutions for every aspect of your life
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group bg-card/50 backdrop-blur-sm rounded-lg p-6 border-glow-gold hover:bg-card/80 transition-all duration-300 hover:scale-[1.02]"
              >
                <s.icon className="w-10 h-10 text-primary mb-4 group-hover:animate-float" />
                <h3 className="text-foreground font-display text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-display text-gradient-gold mb-6">
            Why Choose Jyotish Guru?
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-8">
            With four decades of dedicated practice in Vedic astrology, our Guruji has helped over 20,000 individuals 
            find clarity, peace, and solutions to their most pressing life challenges. From love and marriage to career 
            and health — the ancient wisdom of the stars holds the answers you seek.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Vedic Expertise", desc: "Deep knowledge of Jyotish Shastra, Numerology, Vastu, and spiritual remedies." },
              { title: "Personalized Readings", desc: "Every consultation is unique — tailored to your birth chart and life situation." },
              { title: "Proven Results", desc: "95% success rate with thousands of satisfied clients across the globe." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border-glow-gold">
                <h3 className="text-primary font-display text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-cosmic relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display text-gradient-gold mb-4">
            Start Your Spiritual Journey Today
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Your first consultation is free. Discover what the cosmos has planned for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919121878363">
              <Button size="lg" className="bg-gradient-divine font-body font-semibold gap-2 text-lg px-10 glow-gold">
                <Phone className="w-5 h-5" /> Call Now
              </Button>
            </a>
            <a href="https://wa.me/919121878363?text=Hi%20I%20need%20astrology%20consultation" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="font-body font-semibold gap-2 text-lg px-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
