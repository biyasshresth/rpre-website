import Reveal from "./Reveal";

export default function ChallengesSection() {
  const challenges = [
    "Performance Optimization",
    "Security & Data Protection",
    "Cross-Platform Compatibility",
    "Scalability Issues",
    "User Retention",
    "App Store Compliance"
  ];

  return (
    <section className="min-h-screen flex items-center px-6 bg-[#F5F1E7]">
      <div className="max-w-6xl mx-auto w-full text-center">

        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl mb-16">
            The Challenges <br /> <span className="italic text-[#5A6B57]">We Solve</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-sm hover:-translate-y-1 transition">
                <h3 className="font-serif text-lg mb-3">{item}</h3>
                <p className="text-sm text-[#8A9E87]">
                  Thoughtfully engineered solutions for modern mobile ecosystems.
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}