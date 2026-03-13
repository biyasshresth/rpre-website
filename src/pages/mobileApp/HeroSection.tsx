import { useEffect } from "react";
import ChallengesSection from "./ChallengesSection";
import ConclusionSection from "./ConclusionSection";
import JourneySection from "./JourneySection";
import Reveal from "./Reveal";

export default function HeroSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-6 py-5 bg-[#F5F1E7] text-[#2D3A2E]">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal delay={100}>
            <h1 className="font-serif text-5xl  md:text-7xl leading-tight mb-6">
              Mobile App <br />
              <span className="italic text-[#5A6B57]">Development</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="max-w-xl mx-auto text-[#5A6B57] leading-relaxed">
              We craft scalable, high-performance mobile applications that
              seamlessly blend innovation, usability, and cutting-edge
              technology.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Scalable Architecture",
                desc: "Built to grow with modular, cloud-ready foundations.",
              },
              {
                title: "Seamless UX/UI",
                desc: "Interfaces that make users feel natural, elegant, and intuitive.",
              },
              {
                title: "Cross-Platform Excellence",
                desc: "iOS and Android performance with similar codebase.",
              },
            ].map((card, i) => (
              <Reveal key={i} delay={300 + i * 100}>
                <div
                  className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-sm 
transition-all duration-300 
hover:shadow-[0_12px_35px_rgba(163,177,138,0.45)] 
hover:-translate-y-1 relative overflow-hidden group"
                >
                  <h3 className="font-serif text-xl mb-3">{card.title}</h3>
                  <p className="text-sm text-[#8A9E87] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <JourneySection />
      <ChallengesSection />
      <ConclusionSection />
    </div>
  );
}
