import ServicePageLayout from "@/components/ServicePageLayout";

const LoveProblemSolution = () => (
  <ServicePageLayout
    title="Love Problem Solution by Astrology"
    subtitle="Is your heart heavy with the pain of love? Whether it's misunderstandings, a painful breakup, or unrequited feelings — Vedic astrology holds powerful remedies to heal and reunite."
    problems={[
      { title: "Constant Misunderstandings", description: "Small arguments turning into big fights? Planetary positions may be creating friction in your relationship." },
      { title: "Painful Breakup", description: "Lost the one you love? Astrological remedies can help bring them back and heal the bond." },
      { title: "Family Opposition", description: "Your family doesn't approve? Planetary remedies can soften hearts and create acceptance." },
      { title: "Trust Issues", description: "Suspicion and jealousy destroying your love? The stars reveal the root cause and the cure." },
      { title: "Long Distance Strain", description: "Distance creating disconnect? Astrological guidance can strengthen your bond across any miles." },
      { title: "Delay in Marriage", description: "Love is strong but marriage keeps getting delayed? Your kundli holds the answer." },
    ]}
    solutions={[
      { title: "Birth Chart Analysis", description: "Deep analysis of both partners' charts to identify planetary influences affecting your love life." },
      { title: "Personalized Mantras", description: "Sacred mantras specifically chosen for your situation to invoke divine blessings for love." },
      { title: "Gemstone Remedies", description: "Wearing the right gemstone can strengthen Venus and bring harmony to relationships." },
      { title: "Spiritual Puja & Rituals", description: "Customized pujas performed to remove obstacles and attract love energy into your life." },
    ]}
    benefits={[
      "Reunite with your lost love",
      "Resolve misunderstandings permanently",
      "Gain family approval for your relationship",
      "Strengthen trust and emotional bond",
      "Remove negative energy from your love life",
      "Find your perfect soulmate",
    ]}
    testimonials={[
      { name: "Priya S.", text: "After 2 years of separation, Guruji's remedies brought my partner back. We are now happily married!", location: "Mumbai, India" },
      { name: "Rahul M.", text: "My family was against our relationship. Within 3 months of following the remedies, they accepted us.", location: "Delhi, India" },
      { name: "Anita K.", text: "I was heartbroken and lost hope. Guruji gave me clarity and peace. Forever grateful.", location: "Bangalore, India" },
    ]}
  />
);

export default LoveProblemSolution;
