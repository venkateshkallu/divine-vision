import ServicePageLayout from "@/components/ServicePageLayout";

const KundliAnalysis = () => (
  <ServicePageLayout
    title="Kundli Analysis & Birth Chart Reading"
    subtitle="Your Kundli is the cosmic blueprint of your entire life. A detailed birth chart analysis reveals your strengths, challenges, opportunities, and the perfect timing for every major life decision."
    problems={[
      { title: "Life Direction Confusion", description: "Feeling lost about where your life is heading? Your Kundli reveals your true purpose and path." },
      { title: "Repeated Obstacles", description: "Same problems recurring despite efforts? Planetary doshas in your chart may be the cause." },
      { title: "Dasha Period Anxiety", description: "Worried about an upcoming Mahadasha? Understanding it helps you prepare and thrive." },
      { title: "Mangal/Shani Dosha Fears", description: "Diagnosed with Manglik or Shani dosha? Proper analysis shows the real impact and remedies." },
      { title: "Timing Major Decisions", description: "When to marry, start a business, or move abroad? Your Kundli reveals the perfect timing." },
      { title: "Children & Family Planning", description: "Questions about progeny? The 5th house analysis provides clarity and guidance." },
    ]}
    solutions={[
      { title: "Complete Kundli Reading", description: "House-by-house analysis of all 12 houses covering every aspect — career, love, health, wealth, and spirituality." },
      { title: "Dasha Analysis", description: "Detailed prediction of current and upcoming planetary periods and their effects on your life." },
      { title: "Dosha Identification & Remedies", description: "Thorough check for all doshas — Mangal, Kaal Sarp, Pitra, Shani — with effective remedies." },
      { title: "Annual Predictions", description: "Year-ahead forecast based on transits and dashas to help you plan every month strategically." },
    ]}
    benefits={[
      "Complete life blueprint and guidance",
      "Know the best timing for decisions",
      "Understand and overcome doshas",
      "Predict and prepare for challenges",
      "Maximize favorable planetary periods",
      "Gain deep self-awareness and clarity",
    ]}
    testimonials={[
      { name: "Arjun V.", text: "Guruji's Kundli reading was incredibly accurate. Every prediction came true. Mind-blowing!", location: "Coimbatore, India" },
      { name: "Lakshmi P.", text: "Was terrified of my Shani Mahadasha. Guruji's guidance made it the most transformative period of my life.", location: "Mysore, India" },
      { name: "Nikhil R.", text: "The annual prediction helped me plan my business moves perfectly. Best investment ever.", location: "Goa, India" },
    ]}
  />
);

export default KundliAnalysis;
