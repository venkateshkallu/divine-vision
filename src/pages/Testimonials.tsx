import { Star, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "+919121878363";
const WA_LINK = "https://wa.me/919121878363?text=Hi%20I%20need%20astrology%20consultation";

const testimonials = [
  { name: "Priya Sharma", location: "Delhi", rating: 5, text: "Guruji's guidance saved my marriage. His predictions were incredibly accurate and the remedies worked within weeks. I am forever grateful." },
  { name: "Rajesh Kumar", location: "Mumbai", rating: 5, text: "I was stuck in my career for 3 years. After Guruji's consultation, I got promoted within 2 months. His Kundli analysis is unmatched." },
  { name: "Anita Patel", location: "Ahmedabad", rating: 5, text: "The Vastu corrections Guruji suggested for our new home brought so much positive energy. Our business is thriving now." },
  { name: "Suresh Reddy", location: "Hyderabad", rating: 5, text: "I was suffering from chronic health issues. Guruji identified the planetary causes and gave effective remedies. Feeling much better now." },
  { name: "Meena Joshi", location: "Pune", rating: 5, text: "Guruji helped us find the perfect match for our daughter. The Kundli matching was thorough and the marriage is blissful." },
  { name: "Vikram Singh", location: "Jaipur", rating: 5, text: "I was facing huge financial losses. Guruji's numerology correction and gemstone recommendation turned everything around." },
  { name: "Kavita Nair", location: "Bangalore", rating: 5, text: "My love life was in shambles. Guruji's spiritual remedies and guidance brought my partner back. We are happily married now." },
  { name: "Amit Verma", location: "Lucknow", rating: 5, text: "The accuracy of Guruji's predictions is astonishing. Every major event he predicted came true. Truly a gifted astrologer." },
  { name: "Deepa Iyer", location: "Chennai", rating: 5, text: "After years of trying, Guruji's remedies blessed us with a child. His knowledge of Vedic astrology is extraordinary." },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-cosmic">
        <div className="container max-w-4xl text-center">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">✦ Client Stories ✦</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-gold leading-tight glow-text-gold mb-4 sm:mb-6">
            20,000+ Lives Transformed
          </h1>
          <p className="text-lg text-foreground/70 font-body leading-relaxed max-w-2xl mx-auto">
            Real stories from real people whose lives were changed through Vedic astrological guidance.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border-glow-gold hover:scale-[1.02] transition-transform duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm italic leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="text-primary font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-cosmic">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display text-gradient-gold mb-4">
            Join Thousands of Satisfied Clients
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Your transformation story could be next. Get your free consultation today.
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

export default Testimonials;
