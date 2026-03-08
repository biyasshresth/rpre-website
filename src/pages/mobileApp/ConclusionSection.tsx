import Reveal from "./Reveal";

export default function ConclusionSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-br from-slate-600 via-[#A3B18A] to-[#8A9A73] relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl mb-8 flex flex-col gap-3 items-center justify-center">
            <span>We Don't Just Build Apps </span>
            <span className="italic text-[#F5F1E7]">
              We Build Digital{" "}
              <span className="text-[#F5F1E7]">Experiences.</span>
            </span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-gray-800 mb-12 leading-relaxed">
            Innovation is our commitment. Partnership is our promise. We walk
            alongside you from concept to scale.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <button className="fancy-button">Start Your Project →</button>
        </Reveal>
      </div>
    </section>
  );
}
