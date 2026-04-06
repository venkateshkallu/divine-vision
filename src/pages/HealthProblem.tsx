import ServicePageLayout from "@/components/ServicePageLayout";

const HealthProblem = () => (
  <ServicePageLayout
    title="Health Astrology Solutions"
    subtitle="Your birth chart is a mirror of your body and mind. Vedic astrology can reveal the root causes of chronic health issues and provide powerful remedies for healing and wellness."
    problems={[
      { title: "Chronic Illness", description: "Suffering from persistent health issues that doctors can't fully resolve? Planetary influences may be at play." },
      { title: "Mental Health Struggles", description: "Anxiety, depression, or constant stress? Moon and Mercury positions can deeply affect mental wellness." },
      { title: "Unexplained Health Issues", description: "Medical tests show nothing but you still feel unwell? Astrological analysis can uncover hidden causes." },
      { title: "Recovery Delays", description: "Slow recovery after surgery or illness? Specific planetary periods can affect healing speed." },
      { title: "Family Health Patterns", description: "Hereditary health concerns? Your family's astrological patterns reveal preventive measures." },
      { title: "Sleep & Energy Issues", description: "Insomnia or chronic fatigue? The stars can guide you to natural, lasting solutions." },
    ]}
    solutions={[
      { title: "Medical Astrology Reading", description: "Analysis of the 6th, 8th, and 12th houses to understand health vulnerabilities and strengths." },
      { title: "Healing Mantras", description: "Specific Vedic mantras for health restoration and strengthening weak planetary influences." },
      { title: "Gemstone Therapy", description: "Wearing prescribed gemstones to balance health-related planets and boost vitality." },
      { title: "Wellness Rituals", description: "Sacred rituals and lifestyle adjustments aligned with your planetary chart for optimal health." },
    ]}
    benefits={[
      "Understand root causes of health issues",
      "Accelerate recovery and healing",
      "Improve mental health and clarity",
      "Prevent future health challenges",
      "Boost energy and vitality naturally",
      "Find peace and emotional balance",
    ]}
    testimonials={[
      { name: "Kavita R.", text: "Suffered from chronic migraines for years. Guruji's remedies gave me relief within weeks.", location: "Lucknow, India" },
      { name: "Suresh M.", text: "My anxiety was crippling. The mantras and guidance brought a calm I never thought possible.", location: "Bhopal, India" },
      { name: "Deepa N.", text: "Doctors couldn't explain my fatigue. Guruji identified the planetary cause and the remedy worked!", location: "Nagpur, India" },
    ]}
  />
);

export default HealthProblem;
