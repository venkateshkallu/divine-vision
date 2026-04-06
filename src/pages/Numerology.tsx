import ServicePageLayout from "@/components/ServicePageLayout";

const Numerology = () => (
  <ServicePageLayout
    title="Numerology — The Power of Numbers"
    subtitle="Every number carries a vibration. Your name, birth date, and life path number hold the blueprint of your destiny. Discover the hidden power of numbers and align your life for success."
    problems={[
      { title: "Name Vibration Mismatch", description: "Your name's numerological value may be working against you, creating obstacles in life." },
      { title: "Repeated Failures", description: "Everything seems to go wrong despite effort? Your numbers may be out of alignment." },
      { title: "Relationship Numbers Clash", description: "Incompatible numbers between partners can create friction and misunderstanding." },
      { title: "Business Name Issues", description: "Your business name's vibration affects its success. The wrong number can block prosperity." },
      { title: "Lucky Number Confusion", description: "Using wrong lucky numbers for important decisions can lead to unfavorable outcomes." },
      { title: "Life Path Uncertainty", description: "Not sure about your life's purpose? Your life path number reveals your true calling." },
    ]}
    solutions={[
      { title: "Life Path Number Analysis", description: "Deep calculation and interpretation of your core numbers — life path, destiny, soul urge, and personality." },
      { title: "Name Correction", description: "Scientific numerological adjustment of your name spelling to create positive vibrations." },
      { title: "Business Name Selection", description: "Choosing the perfect business name with numerological alignment for maximum success." },
      { title: "Compatibility Analysis", description: "Number-based compatibility analysis for relationships, partnerships, and collaborations." },
    ]}
    benefits={[
      "Discover your life purpose",
      "Attract success with name correction",
      "Choose powerful business names",
      "Understand relationship compatibility",
      "Make better decisions with lucky numbers",
      "Align your vibration with prosperity",
    ]}
    testimonials={[
      { name: "Pooja L.", text: "A simple name spelling change transformed my career. I got my dream job within 2 months!", location: "Surat, India" },
      { name: "Manish G.", text: "Changed my business name on Guruji's advice. Revenue increased by 60% in one quarter.", location: "Indore, India" },
      { name: "Ritu A.", text: "Understanding my life path number gave me the clarity I was searching for. Life-changing.", location: "Chandigarh, India" },
    ]}
  />
);

export default Numerology;
