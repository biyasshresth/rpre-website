import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const WebJourney: React.FC = () => {
  // Use useRef to create a reference to the section element
  const sectionsRef = useRef<HTMLElement | null>(null);

  return (
    <section
      id="journey"
      ref={sectionsRef} // Directly use useRef here
      data-testid="journey-section"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-[#F5F1E7] relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16 animate-slide-up">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
          >
            Overcoming Challenges
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            Every design journey comes with obstacles. Here's how we navigate the most common challenges in webpage design.
          </motion.p>
        </div>

        <div className="space-y-6">
          {/* Challenge 1 */}
          <motion.div
            className="group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-[#A3B18A] hover:border-l-8">
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-16 h-16 bg-[#A3B18A]/20 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  📱
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Responsive Design</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Creating layouts that adapt seamlessly across countless devices and screen sizes requires careful planning
                    and testing. Mobile-first approaches and flexible grid systems help ensure consistent experiences everywhere.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Challenge 2 */}
          <motion.div
            className="group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-[#D4AF37] hover:border-l-8">
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-16 h-16 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Performance Optimization</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Balancing rich visual experiences with fast load times is crucial. Optimizing images, minimizing code,
                    lazy loading, and leveraging modern techniques ensure websites are both beautiful and blazingly fast.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Challenge 3 */}
          <motion.div
            className="group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-[#A3B18A] hover:border-l-8">
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-16 h-16 bg-[#A3B18A]/20 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  ♿
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Accessibility & Inclusion</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Designing for everyone means considering diverse abilities and needs. Proper contrast, keyboard navigation,
                    screen reader support, and semantic HTML create inclusive experiences that reach the widest audience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Challenge 4 */}
          <motion.div
            className="group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-[#8A9A73] hover:border-l-8">
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-16 h-16 bg-[#8A9A73]/20 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  🎭
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">Brand Consistency</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Maintaining a cohesive visual identity across all pages and touchpoints strengthens brand recognition.
                    Design systems, style guides, and component libraries help teams deliver consistent, on-brand experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebJourney;
