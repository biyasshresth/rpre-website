"use client";

import { useState, useRef, useEffect } from "react";
import { motion, cubicBezier, type Variants } from "framer-motion";
import { ArrowRight, Menu, Sparkles } from "lucide-react";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import robot from "@assets/robot.json";
// import BackgroundGear from "./BackgroundGear";

/* =========================
   Animated SVG Icons
========================= */

const iconVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const Icons = {
  Home: () => (
    <motion.svg
      variants={iconVariants}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.15, rotate: 6 }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      className="fill-[#2F5E4B] cursor-pointer"
    >
      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </motion.svg>
  ),

  User: () => (
    <motion.svg
      variants={iconVariants}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.15, rotate: -6 }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      className="fill-[#997f61] cursor-pointer"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M12 14c-4 0-6 2-6 4h12c0-2-2-4-6-4z" />
    </motion.svg>
  ),

  Settings: () => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40"
      height="40"
      className="cursor-pointer"
      initial="rest"
      whileHover="hover"
    >
      {/* GEAR ICON */}
      <motion.path
        d="M198.67,306.65c6.33-.36,12.67-.48,19-.31H275c-.76-3.06,1.74-6.06,4.71-7.12s6.23-.69,9.38-.58a24.84,24.84,0,0,0,11.18-1.77c3.46-1.59,6.42-4.63,7.11-8.37,1.12-6-3.57-11.41-7.75-15.89s-8.5-10.39-6.54-16.2c1-2.9,3.36-5.06,5.65-7.09a40.76,40.76,0,0,1,8.76-6.47,4.3,4.3,0,0,1,2.62-.59,4.78,4.78,0,0,1,1.88,1l12.29,9.06c3,2.21,6.14,4.49,9.81,5.2s8-.63,9.58-4a13.47,13.47,0,0,0,.88-4.7,107.63,107.63,0,0,1,3.77-21.34,4.15,4.15,0,0,1,1.22-2.27,4.23,4.23,0,0,1,2.48-.61l11.68-.42a15.41,15.41,0,0,1,6.13.61c5.61,2.17,6.66,9.57,6.5,15.58s-.06,13.22,5,16.48c3.68,2.37,8.66,1.5,12.46-.68s6.8-5.47,10.22-8.21,7.6-5,12-4.53c3.77.41,7,2.82,9.82,5.37,3.35,3,6.62,7,6.23,11.46-.35,4-3.47,7.1-6.15,10.09-3.72,4.18-7,9-8,14.53a8,8,0,0,0,.59,5.53c1.34,2.24,4.14,3.05,6.68,3.67l15.29,3.73c2.52.61,5.11,1.26,7.19,2.81s3.54,4.22,2.87,6.73c-.55,2.07.58,4.19.47,6.33l-54.48-.12c.8-9.28-3.76-18.72-10.74-24.88s-16.45-9.17-25.76-9.07c-9,.1-18.57,3.46-23.68,10.92-3.63,5.29-4.62,11.95-4.9,18.36a34,34,0,0,0,1,11.42,33.33,33.33,0,0,0,6.16,10.69c3.44,4.35,7.37,8.44,12.2,11.16a28.22,28.22,0,0,0,42.09-24.52c-1.3,0-2.59-.08-3.89-.08H273.95c-1,2,.43,4.85,2.19,6.21s4,1.83,6.2,2.25l16.12,3.17c2.4.47,4.9,1,6.79,2.53,4.63,3.76,3.18,11.33-.17,16.27s-8.21,9.08-9.82,14.82a15.07,15.07,0,0,0,7.61,17c9.23,4.54,20.16-1.61,27.45-8.86,1.55-1.54,3.16-3.22,5.28-3.76,5.31-1.35,9.41,5.08,9.75,10.55s-1,11.4,1.72,16.15c4.16,7.26,14.54,7,22.81,5.78a7.25,7.25,0,0,0,3.78-1.3,6.06,6.06,0,0,0,1.63-2.81c1.6-4.94,1.07-10.29,1.66-15.44s2.87-10.76,7.71-12.64,10.2.63,14.3,3.76,7.85,7,12.78,8.54c7.52,2.29,16.44-2.61,18.54-10.19,1.65-5.94-.56-12.3-3.64-17.64s-7.08-10.18-9.49-15.86c1.14-5,6.62-7.83,11.71-8.66s10.44-.41,15.28-2.19c5.78-2.13,10.1-7.21,12.56-12.85s3.28-11.85,3.82-18c.47-5.26-.6-12.33-5.84-13-4.19-.56-7.75,3.83-12,3.56-4.78-.3-7-6-8.09-10.64a17.91,17.91,0,0,0,10-14c-8.73-.46-15.09-11.23-11.27-19.1l18.44-2.21c1.69-.2,3.8-.8,4-2.49a4.11,4.11,0,0,0-1-2.58c-2.3-3.52-4-7.8-3-11.9s5.31-7.54,9.31-6.26c3.32,1.06,5,4.6,7.16,7.35s6.32,4.95,8.91,2.62a10.75,10.75,0,0,1,18.91-9.25c1.08,3.19,0,6.65-.49,10s0,7.38,3,9c4.65,2.52,9.37-3.08,14.33-4.92,1,2.1,3,3.43,4.6,5.12s2.65,4.38,1.28,6.24a8.42,8.42,0,0,1-2.94,2,12.68,12.68,0,0,0-6.34,12.63h-21c-1.85-4.8-7.4-7.36-12.53-7.67a10.51,10.51,0,0,0-6.33,1.27c-2.92,1.87-4,5.71-3.78,9.17a10.28,10.28,0,0,0,2,5.91c2.76,3.42,7.82,3.57,12.21,3.44a6.9,6.9,0,0,0,4.12-1c2-1.54,1.74-4.7,3.36-6.6H448c.93,1.91,1.78,4.3.86,6.21-1.58,3.28-7.13,2.73-8.81,6-1.5,2.89,1.28,6.08,3.8,8.16,4.7-2.55,10.22-5.15,15.15-3.12,3.7,1.53,6,5.41,6.73,9.36s.11,8-.5,12c1.54,2.38,5.38,1.82,7.42-.14s3-4.78,4.52-7.15,4.33-4.45,7-3.58c1.91.62,3.07,2.5,4.25,4.13,1.78,2.46,4.09,4.7,7,5.55s6.49-.07,8-2.7c1.81-3.14.16-7.07-1.59-10.24-.84-1.52-1.73-3.16-1.51-4.88.37-2.89,3.65-4.48,6.56-4.65s5.88.53,8.71-.15a9.35,9.35,0,0,0,6.93-8.93,5.51,5.51,0,0,0-.66-2.74c-1.94-3.29-7.77-2.59-9.39-6H594v.5"
        fill="#000000"
        variants={{
          rest: { rotate: 0 },
          hover: {
            rotate: 180,
            transition: { duration: 0.6, ease: "easeInOut" },
          },
        }}
        style={{ originX: "50%", originY: "50%" }}
      />
    </motion.svg>
  ),
};

/* =========================
   Hero Section
========================= */

const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const defaultTransition = {
    duration: 0.6,
    ease: cubicBezier(0.25, 0.1, 0.25, 1),
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: defaultTransition },
  };

  useEffect(() => {
    if (!lottieRef.current) return;
    isHovered
      ? lottieRef.current.playSegments([50, 100], true)
      : lottieRef.current.playSegments([0, 49], true);
  }, [isHovered]);

  return (
    <section
      id="hero"
      className="relative min-h-screen mt-10 bg-grid-lines overflow-hidden"
    >
      {/* <BackgroundGear /> */}

      <div className="relative z-20 h-screen flex items-center px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center w-full justify-between">
          {/* LEFT */}
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.div
                variants={fadeUp}
                className="flex gap-3 mb-6 justify-center lg:justify-start"
              >
                <Sparkles className="text-[#b9a57b]" />
                <span className="text-[#997f61] font-medium font-space-mono uppercase tracking-wide">
                  Innovative IT Solutions
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl font-bold text-[#244738] mb-8 font-serif tracking-tight"
              >
                Transform Your
                <span className="block text-[#997f61] text-5xl md:text-6xl font-bold mb-8 font-serif tracking-tight">Digital Future</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg mb-8  text-gray-700 font-medium font-poppins"
              >
               <p>Empowering businesses with cutting-edge web,</p>  mobile &
                cybersecurity solutions.
              </motion.p>

             <motion.div
  variants={fadeUp}
  className="flex gap-4 justify-center lg:justify-start items-center"
>
  {/* Explore Services Button */}
  <button
    onClick={() => scrollToSection("services")}
    className="bg-[#254F3E] px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition font-space-mono uppercase tracking-wide flex items-center"
  >
    Explore Services
    <ArrowRight className="ml-2" size={18} />
  </button>

  {/* Menu Button */}
  <button
  aria-label="Menu"
    className="bg-[#997f61] p-4 rounded-lg shadow-lg hover:scale-105 transition flex items-center justify-center"
  >
    <Menu size={22} />
  </button>
</motion.div>

              {/* ICONS */}
              <motion.div
                variants={fadeUp}
                className="flex gap-6 mt-10 justify-center lg:justify-start"
              >
                <Icons.Settings />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-72 lg:w-96 mt-12 lg:mt-0 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Lottie lottieRef={lottieRef} animationData={robot} autoplay loop />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
