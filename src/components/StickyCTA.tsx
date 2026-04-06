import { Phone, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/919121878363?text=Hi%20I%20need%20astrology%20consultation";
const PHONE = "+919121878363";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-background" />
      </a>
      <a
        href={`tel:${PHONE}`}
        className="w-14 h-14 rounded-full bg-gradient-divine flex items-center justify-center shadow-lg glow-gold hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default StickyCTA;
