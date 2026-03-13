import Reveal from "./Reveal";

export default function JourneySection() {
  const steps = [
    {
      title: "Discovery & Strategy",
      desc: "Understanding goals, users, and market to form a clear roadmap.",
    },
    {
      title: "UI/UX Design",
      desc: "Wireframes become living prototypes crafted for clarity.",
    },
    {
      title: "Development & Testing",
      desc: "Clean code meets rigorous QA and iteration.",
    },
    {
      title: "Launch & Optimization",
      desc: "Continuous monitoring and improvement post-launch.",
    },
  ];

  return (
    <section className="min-h-screen flex items-center px-6 py-10  bg-white">
      <div className="max-w-6xl mx-auto w-full text-center mb-10">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl mb-5 md:mb-10">
            Our Development{" "}
            <span className="italic text-[#5A6B57]">Journey</span>
          </h2>
          <p>
            A journey driven by curiosity, creativity, <br /> and the courage to build
            something meaningful.
          </p>
        </Reveal>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
  {steps.map((step, i) => (
    <Reveal key={i} delay={i * 120}>
      <div
        className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-sm 
        transition-all duration-300 
        hover:shadow-[0_12px_35px_rgba(163,177,138,0.45)] 
        hover:-translate-y-1 relative overflow-hidden group"
      >
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
