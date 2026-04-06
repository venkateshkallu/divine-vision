import { Phone, MessageCircle } from "lucide-react";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-background" />
      </a>
      <a
        href="tel:+919999999999"
        className="w-14 h-14 rounded-full bg-gradient-divine flex items-center justify-center shadow-lg glow-gold hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default StickyCTA;
