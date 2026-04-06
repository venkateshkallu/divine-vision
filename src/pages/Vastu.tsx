import ServicePageLayout from "@/components/ServicePageLayout";

const Vastu = () => (
  <ServicePageLayout
    title="Vastu Shastra Consultation"
    subtitle="Your home and workspace are living energy fields. Vastu Shastra — the ancient science of architecture — aligns these spaces with cosmic energy for health, wealth, and harmony."
    problems={[
      { title: "Financial Blocks at Home", description: "Money seems to slip away despite earning well? Your home's Vastu may be blocking wealth energy." },
      { title: "Constant Family Disputes", description: "Frequent arguments and tension at home? Vastu defects can create negative energy flows." },
      { title: "Health Issues in Family", description: "Family members falling sick often? Certain Vastu flaws directly impact health and wellbeing." },
      { title: "Business Not Growing", description: "Office or shop not performing well? Vastu alignment of your workspace is crucial for success." },
      { title: "Sleep & Peace Problems", description: "Restless nights and constant anxiety at home? Bedroom Vastu plays a vital role in peace." },
      { title: "Relationship Strain", description: "Couples facing issues? The direction and placement of your bedroom affects marital harmony." },
    ]}
    solutions={[
      { title: "Complete Vastu Audit", description: "Thorough analysis of your home or office layout, directions, and energy flow patterns." },
      { title: "Non-Demolition Remedies", description: "Effective Vastu corrections without any structural changes — using colors, elements, and placements." },
      { title: "New Construction Guidance", description: "Vastu-compliant planning for new homes, offices, or commercial spaces from the ground up." },
      { title: "Industrial Vastu", description: "Specialized Vastu solutions for factories, warehouses, and large commercial establishments." },
    ]}
    benefits={[
      "Attract wealth and prosperity",
      "Create harmony in family life",
      "Improve health and energy levels",
      "Boost business performance",
      "Enhance peace and sleep quality",
      "Strengthen relationships at home",
    ]}
    testimonials={[
      { name: "Vinod S.", text: "Simple Vastu changes in my office doubled my business within 6 months. Incredible!", location: "Rajkot, India" },
      { name: "Sneha M.", text: "Our family was always fighting. After Vastu corrections, peace returned to our home.", location: "Nashik, India" },
      { name: "Prakash D.", text: "Was suffering from insomnia for years. Changing my bedroom as per Vastu fixed it completely.", location: "Varanasi, India" },
    ]}
  />
);

export default Vastu;
