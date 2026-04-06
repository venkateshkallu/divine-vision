import ServicePageLayout from "@/components/ServicePageLayout";

const MarriageAstrology = () => (
  <ServicePageLayout
    title="Marriage Astrology & Matchmaking"
    subtitle="Finding the right life partner is the most important decision. Let Vedic astrology guide you to a blissful, lasting marriage with kundli matching and powerful remedies."
    problems={[
      { title: "Delay in Marriage", description: "Despite efforts, marriage keeps getting postponed? Mangal dosha or Saturn's influence could be the cause." },
      { title: "Incompatible Match", description: "Worried about compatibility? Kundli matching reveals the true harmony between two souls." },
      { title: "Married Life Conflicts", description: "Constant arguments after marriage? Planetary imbalances can create tension between spouses." },
      { title: "In-Law Problems", description: "Struggling with family dynamics? Astrological remedies can bring peace and understanding." },
      { title: "Second Marriage Questions", description: "Uncertain about remarriage? Your birth chart reveals the right timing and compatibility." },
      { title: "NRI Marriage Issues", description: "Special challenges of cross-cultural or long-distance marriages addressed through Vedic wisdom." },
    ]}
    solutions={[
      { title: "Kundli Milan (Matchmaking)", description: "Comprehensive 36-point Guna Milan analysis to ensure compatibility on all levels — mental, physical, and spiritual." },
      { title: "Mangal Dosha Analysis", description: "Thorough check for Manglik dosha and effective remedies to neutralize its effects on marriage." },
      { title: "Muhurta Selection", description: "Choosing the most auspicious date and time for your wedding based on planetary positions." },
      { title: "Post-Marriage Remedies", description: "Ongoing astrological guidance to maintain harmony and strengthen the marital bond." },
    ]}
    benefits={[
      "Find your perfect life partner",
      "Remove marriage delays permanently",
      "Ensure deep compatibility",
      "Choose the most auspicious wedding date",
      "Resolve Mangal Dosha concerns",
      "Strengthen marital harmony",
    ]}
    testimonials={[
      { name: "Vikram & Neha", text: "Guruji's kundli matching gave us confidence. 5 years married and couldn't be happier!", location: "Pune, India" },
      { name: "Sunita D.", text: "Marriage was delayed for 4 years. After Guruji's remedies, I got married within 6 months.", location: "Jaipur, India" },
      { name: "Arun P.", text: "Our married life was falling apart. The remedies brought peace and love back.", location: "Chennai, India" },
    ]}
  />
);

export default MarriageAstrology;
