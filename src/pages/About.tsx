import { Star, Users, Clock, Shield, Award, BookOpen } from "lucide-react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "+919121878363";
const WA_LINK = "https://wa.me/919121878363?text=Hi%20I%20need%20astrology%20consultation";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-cosmic">
        <div className="container max-w-4xl text-center">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">✦ About Our Guruji ✦</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-gold leading-tight glow-text-gold mb-6">
            40+ Years of Vedic Wisdom
          </h1>
          <p className="text-lg text-foreground/70 font-body leading-relaxed max-w-2xl mx-auto">
            A lifetime dedicated to the sacred science of Jyotish Shastra, guiding thousands 
            towards clarity, peace, and divine purpose.
          </p>
        </div>
      </section>

      {/* Profile */}
      <section className="py-12 sm:py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="bg-card rounded-2xl p-8 border-glow-gold text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-divine mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display text-gradient-gold mb-2">Pandit Guruji</h3>
              <p className="text-primary text-sm">Vedic Astrologer & Spiritual Guide</p>
            </div>
            <div>
              <h2 className="text-3xl font-display text-gradient-gold mb-6">Our Story</h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Born into a family of renowned Vedic scholars, our Guruji began his journey in astrology at the tender 
                age of 12. Under the guidance of revered masters, he mastered the intricate sciences of Jyotish Shastra, 
                Numerology, Vastu, and spiritual remedies.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Over four decades, he has provided life-changing guidance to more than 20,000 individuals across India 
                and worldwide. His approach combines ancient Vedic wisdom with compassionate understanding, ensuring 
                every consultation brings clarity and actionable solutions.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Whether you're facing challenges in love, career, health, or seeking deeper spiritual alignment — 
                our Guruji's proven expertise lights the path forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Clock, label: "Years Experience", value: "40+" },
            { icon: Users, label: "Happy Clients", value: "20,000+" },
            { icon: Star, label: "Success Rate", value: "95%" },
            { icon: Shield, label: "Confidential", value: "100%" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <item.icon className="w-8 h-8 text-primary mb-1" />
              <span className="text-2xl md:text-3xl font-display text-gradient-gold font-bold">{item.value}</span>
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Expertise */}
      <section className="py-20 bg-gradient-cosmic">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-display text-gradient-gold text-center mb-12">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Vedic Jyotish", desc: "Complete birth chart analysis using traditional Parashari and Jaimini methods." },
              { icon: Star, title: "Remedial Astrology", desc: "Powerful gemstone, mantra, and ritual remedies tailored to your charts." },
              { icon: BookOpen, title: "Numerology", desc: "Name correction and number alignment for success and prosperity." },
              { icon: Shield, title: "Vastu Shastra", desc: "Home and office energy alignment for health, wealth, and harmony." },
              { icon: Users, title: "Marriage Matching", desc: "Comprehensive Kundli Milan with Gun Milan and Mangal Dosha analysis." },
              { icon: Clock, title: "Muhurta", desc: "Auspicious timing selection for marriages, business, and important events." },
            ].map((item, i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border-glow-gold">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-foreground font-display text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display text-gradient-gold mb-4">
            Ready for Your Consultation?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Your first consultation is free. Experience the power of Vedic astrology firsthand.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a href={`tel:${PHONE}`} className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-divine font-body font-semibold gap-2 text-base sm:text-lg px-6 sm:px-10 glow-gold">
                <Phone className="w-5 h-5" /> Call Now
              </Button>
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-body font-semibold gap-2 text-base sm:text-lg px-6 sm:px-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
