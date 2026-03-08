import Reveal from "./Reveal";

export default function JourneySection() {
  const steps = [
    {
      title: "Discovery & Strategy",
      desc: "Understanding goals, users, and market to form a clear roadmap."
    },
    {
      title: "UI/UX Design",
      desc: "Wireframes become living prototypes crafted for beauty and clarity."
    },
    {
      title: "Development & Testing",
      desc: "Clean code meets rigorous QA and iteration."
    },
    {
      title: "Launch & Optimization",
      desc: "Continuous monitoring and improvement post-launch."
    }
  ];

  return (
    <section className="min-h-screen flex items-center px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto w-full text-center">

        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl mb-12">
            Our Development <span className="italic text-[#5A6B57]">Journey</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-sm">
                <span className="text-sm tracking-widest text-[#8A9E87] block mb-3">
                  {`0${i + 1}`}
                </span>
                <h3 className="font-serif text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-[#8A9E87]">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}