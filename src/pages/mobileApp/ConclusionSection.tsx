import FooterPage from "../footer/FooterPage";
import Reveal from "./Reveal";
import { useNavigate } from "react-router-dom";

export default function ConclusionSection() {
  const navigate = useNavigate();
  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-16 bg-linear-to-br from-slate-600 via-[#A3B18A] to-[#8A9A73] relative overflow-hidden">
        <div className="max-w-4xl w-full text-center">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 flex flex-col gap-3 items-center justify-center">
              <span>We Don't Just Build Apps</span>
              <span className="italic text-[#F5F1E7]">
                We Build Digital <span className="text-[#F5F1E7]">Experiences.</span>
              </span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-white mb-12 leading-relaxed px-2 sm:px-4 md:px-0">
              Innovation is our commitment. Partnership is our promise. We walk
              alongside you from concept to scale.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <button
              type="button"
              className="fancy-button"
              onClick={() => navigate("/contact")}
            >
              Start Your Project →
            </button>
          </Reveal>
        </div>
      </section>
      <FooterPage />
    </>
  );
}