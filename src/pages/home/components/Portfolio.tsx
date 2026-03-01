import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio, type PortfolioItem } from "../../../data/portfolioData";

const AUTO_SCROLL_INTERVAL = 2500;

// ─── Luxury easing curves ────────────────────────────────────────────────────
// Primary: slow-in / expo-out — the card "breathes" as it settles
const LUXURY_EASE = [0.25, 0.46, 0.45, 0.94] as const;
// For transform properties that need more overshoot feel
const ORGANIC_EASE = [0.32, 0.72, 0.0, 1.0] as const;
// Opacity fades slightly faster than movement — creates depth
const FADE_EASE = [0.22, 1, 0.36, 1] as const;

// Duration constants — longer = more premium
const TRANSITION_DURATION = 0.85; // main position/scale
const OPACITY_DURATION = 0.65; // opacity follows slightly ahead
const ROTATE_DURATION = 1.0; // rotation lags slightly behind — organic

const Portfolio = () => {
  const [filter, setFilter] = useState<
    "All" | "Web Development" | "Mobile Development" | "Cyber Security"
  >("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const tickRef = useRef<number>(0);
  const activeIndexRef = useRef<number>(0);

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "Cyber Security",
  ] as const;

  const filteredPortfolio = useMemo(() => {
    return filter === "All"
      ? portfolio
      : portfolio.filter((item: PortfolioItem) => item.category === filter);
  }, [filter]);

  const total = filteredPortfolio.length;

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const next = useCallback(() => {
    tickRef.current += 1;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    tickRef.current -= 1;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback(
    (index: number) => {
      const current = activeIndexRef.current;
      const forward = (index - current + total) % total;
      const backward = (current - index + total) % total;
      tickRef.current += forward <= backward ? forward : -backward;
      setActiveIndex(index);
    },
    [total],
  );

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      tickRef.current += 1;
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_SCROLL_INTERVAL);
  }, [total]);

  useEffect(() => {
    if (isHovering || total === 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, startInterval, total]);

  useEffect(() => {
    tickRef.current = 0;
    setActiveIndex(0);
  }, [filter]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const visibleItems = useMemo(() => {
    if (total === 0) return [];
    return [-2, -1, 0, 1, 2].map((offset) => {
      const idx = (((activeIndex + offset) % total) + total) % total;
      return {
        item: filteredPortfolio[idx],
        originalIndex: idx,
        posIndex: offset,
      };
    });
  }, [activeIndex, filteredPortfolio, total]);

  if (total === 0) {
    return (
      <section className="py-24 relative overflow-hidden bg-linear-to-r from-[#f7f3ee] to-[#ede8e0]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg text-[#4a7060]">No portfolio items found</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 relative overflow-hidden bg-linear-to-r from-[#f7f3ee] to-[#ede8e0]">
      {/* Ambient depth blobs */}
      <div className="absolute top-16 left-1/3 w-125 h-125 bg-[#7FAE8D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2F5E4B]/08 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: LUXURY_EASE }}
          viewport={{ once: true }}
          className="text-center "
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#7FAE8D] mb-3">
            Our Work
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a3328] mb-8 font-serif tracking-tight">
            Portfolio
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-1">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2, ease: LUXURY_EASE }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 border ${
                  filter === category
                    ? "bg-[#2F5E4B] border-[#2F5E4B] shadow-lg shadow-[#2F5E4B]/20 text-white"
                    : "bg-white/70 text-[#4a7060] hover:bg-[#2F5E4B] hover:text-white hover:border-[#2F5E4B] backdrop-blur-sm"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Luxury Arc Carousel ── */}
        <div
          className="relative flex items-end justify-center select-none h-130"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map(({ item, originalIndex, posIndex }) => {
              const isCenter = posIndex === 0;
              const absPos = Math.abs(posIndex);

              const translateX = posIndex * 220;
              const translateY = absPos * absPos * 8;
              const rotate = posIndex * 6;
              const scale = isCenter ? 1 : 1 - absPos * 0.08;
              const opacity = 1 - absPos * 0.2;
              const zIndex = 10 - absPos;

              return (
                <motion.div
                  key={`slot-${posIndex}`}
                  // ── Entry / Exit ───────────────────────────────────────────
                  initial={{ opacity: 0, scale: 0.88, filter: "blur(4px)" }}
                  exit={{
                    opacity: 0,
                    scale: 0.88,
                    filter: "blur(4px)",
                    transition: { duration: 0.45, ease: FADE_EASE },
                  }}
                  // ── Core animate target ────────────────────────────────────
                  animate={{
                    x: translateX,
                    y: translateY,
                    rotate,
                    scale,
                    opacity,
                    zIndex,
                    filter: "blur(0px)",
                  }}
                  // ── Per-property transitions — the key to organic feel ─────
                  transition={{
                    // X/Y position: expo-out, feels like sliding on silk
                    x: {
                      duration: TRANSITION_DURATION,
                      ease: ORGANIC_EASE,
                    },
                    y: {
                      duration: TRANSITION_DURATION * 1.1, // slightly delayed — arc settles last
                      ease: LUXURY_EASE,
                    },
                    // Rotation lags behind position intentionally — creates
                    // the sense that the card "follows through" like a pendulum
                    rotate: {
                      duration: ROTATE_DURATION,
                      ease: [0.34, 1.04, 0.64, 1], // subtle overshoot
                    },
                    // Scale breathes in gently
                    scale: {
                      duration: TRANSITION_DURATION * 0.95,
                      ease: LUXURY_EASE,
                    },
                    // Opacity races slightly ahead — depth reads immediately
                    opacity: {
                      duration: OPACITY_DURATION,
                      ease: FADE_EASE,
                    },
                    // Blur clears early so content is never murky
                    filter: {
                      duration: OPACITY_DURATION * 0.8,
                      ease: FADE_EASE,
                    },
                  }}
                  // ── Hover — center lifts, side cards nudge ─────────────────
                  whileHover={
                    isCenter
                      ? {
                          y: translateY - 18,
                          scale: scale * 1.025,
                          transition: {
                            duration: 0.55,
                            ease: LUXURY_EASE,
                          },
                        }
                      : {
                          scale: scale * 1.018,
                          transition: {
                            duration: 0.4,
                            ease: LUXURY_EASE,
                          },
                        }
                  }
                  onClick={() => {
                    if (!isCenter) {
                      goTo(originalIndex);
                      startInterval();
                    }
                  }}
                  className="absolute cursor-pointer w-75 origin-bottom"
                  style={{ willChange: "transform, opacity, filter" }}
                >
                  {/* Glow halo behind center card */}
                  {isCenter && (
                    <motion.div
                      className="absolute -inset-2 rounded-3xl bg-linear-to-br from-[#2F5E4B]/20 to-[#7FAE8D]/10 blur-xl -z-10"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "mirror",
                      }}
                    />
                  )}

                  <div
                    className={`rounded-2xl overflow-hidden bg-white transition-shadow duration-700 ${
                      isCenter
                        ? "shadow-[0_32px_80px_rgba(47,94,75,0.22)]"
                        : "shadow-xl"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-60">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.7, ease: LUXURY_EASE }}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                      <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.15,
                          duration: 0.5,
                          ease: LUXURY_EASE,
                        }}
                        className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-white/90 text-[#2F5E4B] backdrop-blur-sm shadow-lg"
                      >
                        {item.category}
                      </motion.span>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-[#1a3328] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {isCenter && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.18,
                            duration: 0.55,
                            ease: LUXURY_EASE,
                          }}
                          className="mt-4 flex items-center gap-2"
                        >
                          <motion.span
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.35, ease: LUXURY_EASE }}
                            className="text-sm font-semibold text-[#2F5E4B] flex items-center gap-1 cursor-pointer"
                          >
                            View Project
                            <motion.svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              animate={{ x: [0, 4, 0] }}
                              transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                ease: [0.45, 0, 0.55, 1], // smooth sine-like
                                repeatType: "mirror",
                              }}
                            >
                              <path
                                d="M3 8h10M9 4l4 4-4 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </motion.svg>
                          </motion.span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation row */}
        <div className="flex items-center justify-center gap-5 mt-8">
          {/* Prev */}
          <motion.button
            type="button"
            aria-label="Previous"
            onClick={() => {
              prev();
              startInterval();
            }}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.3, ease: LUXURY_EASE }}
            className="w-9 h-9 rounded-full border border-[#2F5E4B]/30 bg-white/80 text-[#2F5E4B] flex items-center justify-center shadow-sm hover:bg-[#2F5E4B] hover:text-white hover:border-[#2F5E4B] transition-colors duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 3L5 8l5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {filteredPortfolio.map((_, index) => (
              <motion.button
                type="button"
                aria-label={`Go to portfolio item ${index + 1}`}
                key={index}
                onClick={() => {
                  goTo(index);
                  startInterval();
                }}
                animate={{
                  width: index === activeIndex ? 28 : 8,
                  backgroundColor:
                    index === activeIndex ? "#2F5E4B" : "rgba(47,94,75,0.25)",
                }}
                transition={{ duration: 0.45, ease: LUXURY_EASE }}
                className="h-2 rounded-full cursor-pointer"
                style={{ minWidth: 8 }}
              />
            ))}
          </div>

          {/* Next */}
          <motion.button
            type="button"
            aria-label="Next"
            onClick={() => {
              next();
              startInterval();
            }}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.3, ease: LUXURY_EASE }}
            className="w-9 h-9 rounded-full border border-[#2F5E4B]/30 bg-white/80 text-[#2F5E4B] flex items-center justify-center shadow-sm hover:bg-[#2F5E4B] hover:text-white hover:border-[#2F5E4B] transition-colors duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
