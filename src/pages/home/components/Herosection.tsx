"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  cubicBezier,
  type Variants,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
 
interface NetworkDot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const NetworkTopology: React.FC<{
  width: number;
  height: number;
  isVisible: boolean;
}> = ({ width, height, isVisible }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<NetworkDot[]>([]);
  const animationIdRef = useRef<number | null>(null);

  const connectionDistance = 120;
  const dotCount = 12;
  const maxVelocity = 0.4;

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize dots with random positions and velocities
    if (dotsRef.current.length === 0) {
      dotsRef.current = Array.from({ length: dotCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * maxVelocity,
        vy: (Math.random() - 0.5) * maxVelocity,
        radius: Math.random() * 1.5 + 1.5,
      }));
    }

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.clearRect(0, 0, width, height);

      const dots = dotsRef.current;

      // Update dot positions with boundary wrapping
      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Wrap around edges
        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;
      });

      // Draw connections between nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.4;
            ctx.strokeStyle = `rgba(102, 190, 155, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots with gradient glow effect
      dots.forEach((dot) => {
        // Outer glow
        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          dot.radius * 3
        );
        gradient.addColorStop(0, "rgba(100, 209, 171, 0.3)");
        gradient.addColorStop(1, "rgba(100, 209, 171, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Main dot
        ctx.fillStyle = "#66be9b";
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();

        // Inner highlight
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [width, height, isVisible]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="network-canvas pointer-events-none absolute inset-0"
    />
  );
};

// Scroll indicator component with blinking effect
const ScrollIndicator: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="scroll-indicator"
        >
          <div className="scroll-content">
            <span className="scroll-text">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="chevron-container"
            >
              <ChevronDown size={16} className="chevron-icon" />
            </motion.div>
          </div>

          {/* Blinking glow effect */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(102, 190, 155, 0)",
                "0 0 20px rgba(102, 190, 155, 0.6)",
                "0 0 0px rgba(102, 190, 155, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glow-ring"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const HeroSection: React.FC = () => {
  const [viewportHeight, setViewportHeight] = useState(1000);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const networkContainerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  useEffect(() => {
    const setHeight = () => setViewportHeight(window.innerHeight);
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  // Track scroll direction
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (value) => {
      if (value > lastScrollY) {
        setShowScrollIndicator(false);
      } else {
        // Show indicator when scrolled up past the hero section
        if (value < viewportHeight * 0.5) {
          setShowScrollIndicator(true);
        }
      }
      setLastScrollY(value);
    });

    return () => unsubscribe();
  }, [lastScrollY, scrollY, viewportHeight]);

  const [networkDimensions, setNetworkDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateNetworkDimensions = () => {
      if (networkContainerRef.current) {
        const rect = networkContainerRef.current.getBoundingClientRect();
        setNetworkDimensions({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updateNetworkDimensions();
    window.addEventListener("resize", updateNetworkDimensions);
    return () => window.removeEventListener("resize", updateNetworkDimensions);
  }, []);

  const heroScale = useTransform(scrollY, [0, viewportHeight], [1, 0.965]);
  const heroOpacity = useTransform(scrollY, [0, viewportHeight], [1, 0.84]);
  const heroY = useTransform(scrollY, [0, viewportHeight], [0, -20]);

  // Parallax effect for background
  const bgParallax = useTransform(scrollY, [0, viewportHeight], [0, 50]);

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

  return (
    <section className="relative h-[200vh] bg-grid-lines pt-10 md:pt-0">
      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="sticky top-0 h-screen overflow-hidden"
      >
        {/* Parallax background gradient */}
        <motion.div
          style={{ y: bgParallax }}
          className="absolute inset-0 bg-linear-to-b from-transparent via-[#f8f5f0]/20 to-[#e8dcc8]/30 pointer-events-none"
        />

        <section id="hero" className="relative h-screen overflow-hidden">
          <div className="relative z-20 flex h-screen items-center justify-center px-6 lg:px-20">
            <div className="flex w-full flex-col items-center justify-center">
              <div className="max-w-2xl text-center">
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.2 } } }}
                >
                  {/* Enhanced Badge with Shimmer Effect */}
                  <motion.div
                    variants={fadeUp}
                    className="mb-6 flex justify-center"
                  >
                    <button className="innovative-badge group">
                      <div className="innovative-badge-content">
                        <Sparkles
                          size={14}
                          className="innovative-badge-icon"
                        />
                        <span className="innovative-badge-text">
                          Innovative IT Solutions
                        </span>
                      </div>
                    </button>
                  </motion.div>

                  {/* Heading */}
                  <motion.h1
                    variants={fadeUp}
                    className="mb-8 font-serif text-4xl font-bold tracking-tight text-[#244738] md:text-6xl"
                  >
                    Transform Your
                    <span className="mb-8 block font-serif text-4xl font-bold tracking-tight text-[#775a3a] md:text-6xl">
                      Digital Future
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.div
                    variants={fadeUp}
                    className="mb-8 text-base font-medium text-gray-700 font-poppins"
                  >
                    <p>Empowering businesses with cutting-edge web,</p>
                    <p>mobile & cybersecurity solutions.</p>

                    {/* Explore Services Button */}
                    <div className="mt-6 flex justify-center">
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

              {/* Network Topology Animation Container */}
              <motion.div
                variants={fadeUp}
                ref={networkContainerRef}
                className="absolute bottom-0 left-0 right-0 h-38 w-full"
                style={{ perspective: "1000px" }}
              >
                {networkDimensions.width > 0 && networkDimensions.height > 0 && (
                  <NetworkTopology
                    width={networkDimensions.width}
                    height={networkDimensions.height}
                    isVisible={true}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>

       <ScrollIndicator isVisible={showScrollIndicator} />
    </section>
  );
};

export default HeroSection;