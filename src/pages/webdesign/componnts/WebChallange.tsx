import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import creativeUrl from "@/assets/icons/Creative.svg";
import rocketUrl from "@/assets/icons/Rocket.svg";
import settingUrl from "@/assets/icons/Setting.svg";

const steps = [
  {
    id: 1,
    emoji: "🎯",
    title: "Discovery & Planning",
    description:
      "Understanding user needs, defining goals, and mapping out the site structure. This phase sets the foundation for a purposeful design that resonates with the target audience and achieves business objectives.",
    variant: "green",
  },
  {
    id: 2,
    icon: creativeUrl,
    iconAlt: "Creative Icon",
    title: "Creative Design",
    description:
      "Bringing ideas to life through wireframes, mockups, and prototypes. Designers explore color schemes, typography, layouts, and visual elements that create a unique and memorable brand identity.",
    variant: "white",
  },
  {
    id: 3,
    icon: settingUrl,
    iconAlt: "Setting Icon",
    title: "Development & Build",
    description:
      "Transforming designs into functional, responsive websites using modern technologies. Code comes alive with animations, interactions, and seamless experiences across all devices and platforms.",
    variant: "white",
  },
  {
    id: 4,
    icon: rocketUrl,
    iconAlt: "Rocket Icon",
    title: "Launch & Optimize",
    description:
      "Testing, refining, and deploying the final product. Post-launch, continuous monitoring and improvements ensure the website stays relevant, performs optimally, and delivers exceptional user experiences.",
    variant: "gold",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
    },
  }),
};

const WebJourney: React.FC = () => {
  const sectionsRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Use IntersectionObserver to reveal cards one-by-one as the grid scrolls into view
  useEffect(() => {
    if (!gridRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger revealing each card
            steps.forEach((_, i) => {
              setTimeout(() => {
                setVisibleCount((prev) => Math.max(prev, i + 1));
              }, i * 200);
            });
            observer.disconnect(); // Only trigger once
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of the grid is visible
      }
    );

    observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionsRef}
      data-testid="journey-section"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-white relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
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

        {/* Cards Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => {
            const isVisible = i < visibleCount;

            const cardClass =
              step.variant === "green"
                ? "bg-gradient-to-br from-[#A3B18A] to-[#8A9A73] border-[#A3B18A]/30"
                : step.variant === "gold"
                ? "bg-gradient-to-br from-[#D4AF37] to-[#C4A137] border-[#D4AF37]/30"
                : "bg-white border-gray-200";

            const titleClass =
              step.variant === "white" ? "text-slate-800" : "text-white";

            const descClass =
              step.variant === "white" ? "text-slate-700" : "text-[#F5F1E7]";

            return (
              <AnimatePresence key={step.id}>
                {isVisible && (
                  <motion.div
                    className="group"
                    custom={0}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div
                      className={`rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border ${cardClass}`}
                    >
                      {/* Icon or Emoji */}
                      {step.emoji ? (
                        <div className="text-5xl mb-4">{step.emoji}</div>
                      ) : (
                        <div className="mb-4 w-12 h-12">
                          <img src={step.icon} alt={step.iconAlt} />
                        </div>
                      )}

                      <h3 className={`text-2xl font-bold mb-4 ${titleClass}`}>
                        {step.title}
                      </h3>
                      <p className={`leading-relaxed ${descClass}`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WebJourney;