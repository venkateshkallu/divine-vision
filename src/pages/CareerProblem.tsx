import ServicePageLayout from "@/components/ServicePageLayout";

const CareerProblem = () => (
  <ServicePageLayout
    title="Career & Business Astrology"
    subtitle="Feeling stuck in your career? Not getting the success you deserve? Your birth chart holds the key to unlocking your professional destiny and achieving extraordinary growth."
    problems={[
      { title: "Job Instability", description: "Frequent job changes or fear of losing your position? Saturn and Rahu may be creating obstacles." },
      { title: "No Growth or Promotion", description: "Working hard but not getting recognized? Planetary doshas can block your professional growth." },
      { title: "Business Losses", description: "Your business isn't thriving despite best efforts? The stars may reveal hidden challenges." },
      { title: "Career Confusion", description: "Unsure which career path to choose? Your birth chart reveals your true calling." },
      { title: "Workplace Conflicts", description: "Toxic environment or difficult colleagues? Astrological remedies can create harmony." },
      { title: "Financial Struggles", description: "Money problems despite hard work? Planetary positions affecting your wealth house need attention." },
    ]}
    solutions={[
      { title: "Career Path Analysis", description: "Detailed analysis of your 10th house and planetary positions to identify the ideal career path." },
      { title: "Business Timing", description: "Find the most auspicious periods to start a business, make investments, or change jobs." },
      { title: "Wealth Remedies", description: "Specific mantras and gemstones to strengthen your wealth-related planets and attract prosperity." },
      { title: "Success Rituals", description: "Customized pujas and rituals to remove career obstacles and invite professional success." },
    ]}
    benefits={[
      "Clarity on your ideal career path",
      "Attract promotions and recognition",
      "Boost business profits",
      "Find the right timing for career moves",
      "Overcome workplace challenges",
      "Achieve financial stability",
    ]}
    testimonials={[
      { name: "Rajesh K.", text: "Was stuck at the same position for 5 years. After Guruji's guidance, got promoted twice in one year!", location: "Hyderabad, India" },
      { name: "Meera S.", text: "My business was failing. The remedies turned things around — revenue doubled in 8 months.", location: "Ahmedabad, India" },
      { name: "Amit T.", text: "Was confused between two career paths. Guruji's analysis was spot-on. Best decision ever.", location: "Kolkata, India" },
    ]}
  />
);

export default CareerProblem;
