"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  cubicBezier,
  type Variants,
  useScroll,
  useTransform,
} from "framer-motion";
import { Sparkles } from "lucide-react";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import robot from "@assets/robot.json";

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [viewportHeight, setViewportHeight] = useState(1000);

  const { scrollY } = useScroll();

  useEffect(() => {
    const setHeight = () => setViewportHeight(window.innerHeight);
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  const heroScale = useTransform(scrollY, [0, viewportHeight], [1, 0.965]);
  const heroOpacity = useTransform(scrollY, [0, viewportHeight], [1, 0.84]);
  const heroY = useTransform(scrollY, [0, viewportHeight], [0, -20]);

  const defaultTransition = {
    duration: 0.6,
    ease: cubicBezier(0.25, 0.1, 0.25, 1),
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: defaultTransition },
  };

  const revealServices = () => {
    const startY = window.scrollY;
    const targetY = Math.max(viewportHeight * 0.92, viewportHeight - 80);
    const distance = targetY - startY;
    const duration = 1600;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    if (!lottieRef.current) return;
    if (isHovered) {
      lottieRef.current.playSegments([50, 100], true);
    } else {
      lottieRef.current.playSegments([0, 49], true);
    }
  }, [isHovered]);

  return (
    <section className="relative h-[200vh] bg-grid-lines pt-24 md:pt-0">
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="sticky top-0 h-screen overflow-hidden"
      >
        <section id="hero" className="relative h-screen overflow-hidden">
          <div className="relative z-20 flex h-screen items-center px-6 lg:px-20">
            <div className="flex w-full flex-col items-center justify-between lg:flex-row">
              <div className="max-w-2xl text-center lg:text-left">
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.2 } } }}
                >
                  <motion.div
                    variants={fadeUp}
                    className="mb-6 flex justify-center lg:justify-start"
                  >
                    <button className="group relative flex items-center gap-2 rounded-full px-3 py-1 border border-[#2F5E4B]/20 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#2F5E4B]">
                      {/* Glow background */}
                      <span className="absolute inset-0 rounded-full bg-linear-to-r from-[#66be9b] via-[#64d1ab] to-[#68d6aa] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40"></span>

                      {/* Content */}
                      <span className="relative flex items-center gap-1.5">
                        <Sparkles
                          size={14}
                          className="text-[#2F5E4B] group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="font-medium font-serif text-[10px] uppercase tracking-wide text-[#2F5E4B]">
                          Innovative IT Solutions
                        </span>
                      </span>
                    </button>
                  </motion.div>

                  <motion.h1
                    variants={fadeUp}
                    className="mb-8 font-serif text-4xl font-bold tracking-tight text-[#244738] md:text-6xl"
                  >
                    Transform Your
                    <span className="mb-8 block font-serif text-4xl font-bold tracking-tight text-[#775a3a] md:text-6xl">
                      Digital Future
                    </span>
                  </motion.h1>

                  {/* Description Text */}
                  <motion.div
                    variants={fadeUp}
                    className="mb-8 text-base font-medium text-gray-700 font-poppins"
                  >
                    <p>Empowering businesses with cutting-edge web,</p>
                    <p>mobile & cybersecurity solutions.</p>

                    {/* ✅ Explore Services Button */}
                    <div className="mt-6 flex justify-center lg:justify-start">
                      <button
                      type="button"
                        className="explore-button"
                        onClick={revealServices}
                      >
                        <span>Explore Services</span>
                        <span className="explore-button-icon" />
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Lottie Robot */}
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mt-12 w-72 cursor-pointer lg:mt-0 lg:w-96"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Lottie
                  lottieRef={lottieRef}
                  animationData={robot}
                  autoplay
                  loop
                />
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </section>
  );
};

export default HeroSection;
