import React, { useRef } from "react";
import { motion } from "framer-motion";
import WebJourney from "./componnts/WebJourney";
import WebChallange from "./componnts/WebChallange";
import WebConclusion from "./componnts/WebConlusion";
import starsUrl from "@/assets/icons/Stars.svg";
import FlashUrl from "@/assets/icons/Flash.svg";
import EndlessUrl from "@/assets/icons/Endless.svg";
const WebLanding: React.FC = () => {
  const sectionsRef = useRef<HTMLElement | null>(null);

  return (
    <div className="App">
      <section
        id="introduction"
        ref={sectionsRef}
        data-testid="introduction-section"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#F5F1E7] via-[#A3B18A]/20 to-[#F5F1E7] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#A3B18A]/30 shadow-sm">
            <span className="text-[#A3B18A] font-semibold text-sm tracking-wide">
              WELCOME TO
            </span>
          </div>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-[#244738] mb-8 font-serif tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
          >
            Webpage Designing
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            The art and science of creating digital experiences that captivate,
            engage, and inspire. Webpage designing is where creativity meets
            functionality, transforming ideas into interactive visual stories.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              className="group px-8 py-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#A3B18A]/20 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
               <div className="mb-2 w-8 h-8 ">
                <img src={EndlessUrl} alt="Endless Icon" />
              </div>
              <div className="text-sm text-slate-700">Endless Creativity</div>
            </motion.div>
            <motion.div
              className="group px-8 py-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#A3B18A]/20 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <div className="mb-2 w-8 h-8 ">
                <img src={starsUrl} alt="Stars Icon" />
              </div>
              <div className="text-sm text-slate-700">Beautiful Results</div>
            </motion.div>
            <motion.div
              className="group px-8 py-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#A3B18A]/20 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              <div className="mb-2 w-8 h-8 ">
                <img src={FlashUrl} alt="Flash Icon" />
              </div>
              <div className="text-sm text-slate-700"> Dynamic Solutions</div>
            </motion.div>
          </div>
        </div>
      </section>
      <WebJourney />
      <WebChallange />
      <WebConclusion />
    </div>
  );
};

export default WebLanding;
