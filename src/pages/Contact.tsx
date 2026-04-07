import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const PHONE = "+919121878363";
const WA_LINK = "https://wa.me/919121878363?text=Hi%20I%20need%20astrology%20consultation";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMsg = `Hi, I need astrology consultation.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919121878363?text=${encodeURIComponent(waMsg)}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "Your message is being sent via WhatsApp." });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-cosmic">
        <div className="container max-w-4xl text-center">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">✦ Get In Touch ✦</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-gold leading-tight glow-text-gold mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-foreground/70 font-body leading-relaxed max-w-2xl mx-auto">
            Reach out for a free consultation. We're available via phone, WhatsApp, or the form below.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 sm:py-20">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-display text-gradient-gold mb-8">Reach Us Directly</h2>
              <div className="flex flex-col gap-4 sm:gap-6">
                <a href={`tel:${PHONE}`} className="flex items-center gap-4 bg-card rounded-lg p-4 sm:p-5 border-glow-gold hover:scale-[1.02] transition-transform">
                  <div className="w-12 h-12 rounded-full bg-gradient-divine flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Phone</p>
                    <p className="text-primary font-medium">+91 91218 78363</p>
                  </div>
                </a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card rounded-lg p-4 sm:p-5 border-glow-gold hover:scale-[1.02] transition-transform">
                  <div className="w-12 h-12 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">WhatsApp</p>
                    <p className="text-[hsl(142,70%,45%)] font-medium">+91 91218 78363</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 bg-card rounded-lg p-5 border-glow-gold">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Email</p>
                    <p className="text-muted-foreground text-sm">info@jyotishguru.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-card rounded-lg p-5 border-glow-gold">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Location</p>
                    <p className="text-muted-foreground text-sm">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8 rounded-lg overflow-hidden border-glow-gold">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3170721981!2d78.26795863312907!3d17.41221656498634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-display text-gradient-gold mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-5 sm:p-8 border-glow-gold flex flex-col gap-4 sm:gap-5">
                <div>
                  <label className="text-sm text-foreground/70 mb-1 block font-body">Full Name</label>
                  <Input
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground/70 mb-1 block font-body">Phone Number</label>
                  <Input
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground/70 mb-1 block font-body">Email (optional)</label>
                  <Input
                    placeholder="your@email.com"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="text-sm text-foreground/70 mb-1 block font-body">Your Message</label>
                  <Textarea
                    placeholder="Describe your concern or question..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="bg-muted border-border"
                  />
                </div>
                <Button type="submit" size="lg" className="bg-gradient-divine font-body font-semibold gap-2 glow-gold w-full">
                  <Send className="w-5 h-5" /> Send via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
