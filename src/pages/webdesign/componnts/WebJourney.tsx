import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const WebJourney: React.FC = () => {
  const sectionsRef = useRef<HTMLElement | null>(null);

  // ✅ Scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // change to "smooth" if you prefer
    });
  }, []);

  return (
    <section
      id="journey"
      ref={sectionsRef}
      data-testid="journey-section"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-white relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
          >
            The Design Journey
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Every great website begins with a vision and evolves through careful
            planning, creative exploration, and iterative refinement.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Journey Step 1 */}
          <motion.div
            className="group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="bg-linear-to-br from-[#A3B18A] to-[#8A9A73] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border border-[#A3B18A]/30">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Discovery & Planning
              </h3>
              <p className="text-[#F5F1E7] leading-relaxed">
                Understanding user needs, defining goals, and mapping out the
                site structure. This phase sets the foundation for a purposeful
                design that resonates with the target audience and achieves
                business objectives.
              </p>
            </div>
          </motion.div>

          {/* Journey Step 2 */}
          <motion.div
            className="group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border border-gray-200">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Creative Design
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Bringing ideas to life through wireframes, mockups, and
                prototypes. Designers explore color schemes, typography,
                layouts, and visual elements that create a unique and memorable
                brand identity.
              </p>
            </div>
          </motion.div>

          {/* Journey Step 3 */}
          <motion.div
            className="group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border border-gray-200">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Development & Build
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Transforming designs into functional, responsive websites using
                modern technologies. Code comes alive with animations,
                interactions, and seamless experiences across all devices and
                platforms.
              </p>
            </div>
          </motion.div>

          {/* Journey Step 4 */}
          <motion.div
            className="group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="bg-linear-to-br from-[#D4AF37] to-[#C4A137] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border border-[#D4AF37]/30">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Launch & Optimize
              </h3>
              <p className="text-[#F5F1E7] leading-relaxed">
                Testing, refining, and deploying the final product. Post-launch,
                continuous monitoring and improvements ensure the website stays
                relevant, performs optimally, and delivers exceptional user
                experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebJourney;
