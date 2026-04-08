"use client";

import { useState, useRef, useEffect, useCallback, useMemo, memo } from "react";
import { motion, type TargetAndTransition } from "framer-motion";
import { portfolio, type PortfolioItem } from "../../../data/portfolioData";

const AUTO_SCROLL_INTERVAL = 3000;

const EASE_LUXURY = [0.25, 0.46, 0.45, 0.94] as const;

const SPRING_CARD = {
  type: "spring",
  stiffness: 260,
  damping: 28,
  mass: 0.8,
} as const;

const CARD_TRANSITION = {
  x: SPRING_CARD,
  y: SPRING_CARD,
  rotateY: SPRING_CARD,
  rotateZ: SPRING_CARD,
  scale: SPRING_CARD,
  opacity: { duration: 0.2, ease: "easeOut" },
} as const;

const HOVER_SPRING = {
  type: "spring",
  stiffness: 300,
  damping: 22,
  mass: 0.7,
} as const;

const DOT_TRANSITION = { duration: 0.35, ease: EASE_LUXURY } as const;
const BADGE_TRANSITION = {
  delay: 0.1,
  duration: 0.4,
  ease: EASE_LUXURY,
} as const;
// const CTA_TRANSITION = {
//   delay: 0.15,
//   duration: 0.45,
//   ease: EASE_LUXURY,
// } as const;
const HEADER_TRANSITION = { duration: 0.9, ease: EASE_LUXURY } as const;

// const ARROW_TRANSITION = {
//   duration: 2.2,
//   repeat: Infinity,
//   ease: [0.45, 0, 0.55, 1] as const,
//   repeatType: "mirror" as const,
// } as const;

// -- Slot configs --//
interface SlotConfig {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  rotateY: number;
  rotateZ: number;
  zIndex: number;
}

function computeSlot(pos: number): SlotConfig {
  const abs = Math.abs(pos);
  return {
    x: pos * 220,
    y: abs * abs * 6,
    scale: pos === 0 ? 1 : 1 - abs * 0.11 - abs * abs * 0.025,
    opacity: pos === 0 ? 1 : 1 - abs * 0.2,
    rotateY: pos === 0 ? 0 : pos * 6,
    rotateZ: pos === 0 ? 0 : pos * 4,
    zIndex: 10 - abs,
  };
}

//  slot positions
const SLOT_CONFIGS: Record<number, SlotConfig> = {};
for (let p = -2; p <= 2; p++) SLOT_CONFIGS[p] = computeSlot(p);

const HIDDEN: SlotConfig = {
  x: 0,
  y: 0,
  scale: 0.85,
  opacity: 0,
  rotateY: 0,
  rotateZ: 0,
  zIndex: 0,
};

// Types
type FilterType = "All" | "Web Development" | "Mobile Development";

const CATEGORIES: FilterType[] = [
  "All",
  "Web Development",
  "Mobile Development",
];

// CarouselCard
interface CarouselCardProps {
  item: PortfolioItem;
  slot: SlotConfig;
  isCenter: boolean;
  isVisible: boolean;
  onClickSide: () => void;
}

const CarouselCard = memo(
  function CarouselCard({
    item,
    slot,
    isCenter,
    isVisible,
    onClickSide,
  }: CarouselCardProps) {
    const animTarget: TargetAndTransition = {
      x: slot.x,
      y: slot.y,
      scale: slot.scale,
      opacity: slot.opacity,
      rotateY: slot.rotateY,
      rotateZ: slot.rotateZ,
    };

    const hoverTarget: TargetAndTransition = isCenter
      ? {
          y: slot.y - 16,
          scale: slot.scale * 1.028,
          rotateY: 0,
          rotateZ: 0,
          transition: HOVER_SPRING,
        }
      : { scale: slot.scale * 1.015, transition: HOVER_SPRING };

    return (
      <motion.div
        animate={animTarget}
        whileHover={isVisible ? hoverTarget : undefined}
        transition={CARD_TRANSITION}
        onClick={isCenter || !isVisible ? undefined : onClickSide}
        className="absolute cursor-pointer w-75 origin-bottom will-change-[transform,opacity] transform-3d backface-hidden"
        style={{ zIndex: slot.zIndex }}
      >
        <div
          className={`contain-[layout_paint] rounded-2xl overflow-hidden bg-white transition-shadow duration-700 ${
            isCenter ? "shadow-[0_32px_80px_rgba(47,94,75,0.22)]" : "shadow-xl"
          }`}
        >
          <div className="relative overflow-hidden h-50 group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <motion.span
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 10 }}
              transition={BADGE_TRANSITION}
              className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-white/90 text-[#2F5E4B] shadow-lg"
            >
              {item.category}
            </motion.span>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-bold text-[#1a3328] mb-1">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
              {item.description}
            </p>

            {/* {isCenter && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={CTA_TRANSITION}
                className="mt-4 flex items-center gap-2"
              >
                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: EASE_LUXURY }}
                  className="text-sm font-semibold text-[#2F5E4B] flex items-center gap-1 cursor-pointer"
                >
                  Project's Details
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    animate={{ x: [0, 4, 0] }}
                    transition={ARROW_TRANSITION}
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
            )} */}
          </div>
        </div>
      </motion.div>
    );
  },
  (prev, next) =>
    prev.item === next.item &&
    prev.isCenter === next.isCenter &&
    prev.isVisible === next.isVisible &&
    prev.onClickSide === next.onClickSide &&
    prev.slot.x === next.slot.x &&
    prev.slot.y === next.slot.y &&
    prev.slot.scale === next.slot.scale &&
    prev.slot.opacity === next.slot.opacity &&
    prev.slot.rotateY === next.slot.rotateY &&
    prev.slot.rotateZ === next.slot.rotateZ &&
    prev.slot.zIndex === next.slot.zIndex,
);

// Portfolio root
const Portfolio = () => {
  const [filter, setFilter] = useState<FilterType>("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const isHoveringRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const filteredPortfolio = useMemo(
    () =>
      filter === "All"
        ? portfolio
        : portfolio.filter((item: PortfolioItem) => item.category === filter),
    [filter],
  );

  const total = filteredPortfolio.length;
  const safeActive = Math.min(activeIndex, Math.max(0, total - 1));

  const advance = useCallback(
    () => setActiveIndex((p) => (p + 1) % total),
    [total],
  );
  const retreat = useCallback(
    () => setActiveIndex((p) => (p - 1 + total) % total),
    [total],
  );
  const goTo = useCallback((i: number) => setActiveIndex(i), []);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHoveringRef.current) setActiveIndex((p) => (p + 1) % total);
    }, AUTO_SCROLL_INTERVAL);
  }, [total]);

  useEffect(() => {
    const saved = sessionStorage.getItem("portfolioActiveIndex");
    if (saved) setActiveIndex(Number(saved));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("portfolioActiveIndex", String(safeActive));
  }, [safeActive]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  useEffect(() => {
    filteredPortfolio.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, [filteredPortfolio]);

  const cardList = useMemo(
    () =>
      filteredPortfolio.map((item, idx) => {
        const pos = idx - safeActive;
        const inWindow = Math.abs(pos) <= 2;
        return {
          item,
          idx,
          pos,
          inWindow,
          slot: inWindow ? SLOT_CONFIGS[pos] : HIDDEN,
        };
      }),
    [filteredPortfolio, safeActive],
  );

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
    <section className="py-10 relative min-h-screen overflow-hidden bg-grid-lines flex flex-col items-center justify-center">
      {/* <div className="absolute top-16 left-1/3 w-125 h-125 bg-[#7FAE8D]/10 rounded-full blur-3xl pointer-events-none" /> */}
      {/* <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2F5E4B]/08 rounded-full blur-3xl pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 relative flex flex-col items-center lg:gap-2 gap-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={HEADER_TRANSITION}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center lg:gap-6 gap-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a3328]  font-serif tracking-tight">
            Our Projects
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setFilter(category);
                  setActiveIndex(0);
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2, ease: EASE_LUXURY }}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 border ${
                  filter === category
                    ? "bg-[#2F5E4B] shadow-lg shadow-[#2F5E4B]/20 text-white"
                    : "bg-white/70 text-[#4a7060] hover:bg-[#2F5E4B] hover:text-white hover:border-[#2e5f4c] backdrop-blur-sm"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative flex items-end justify-center select-none h-100 perspective-1000"
          onMouseEnter={() => {
            isHoveringRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveringRef.current = false;
          }}
        >
          {cardList.map(({ item, idx, pos, inWindow, slot }) => (
            <CarouselCard
              key={idx}
              item={item}
              slot={slot}
              isCenter={pos === 0}
              isVisible={inWindow}
              onClickSide={() => {
                goTo(idx);
                startInterval();
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5 mt-4">
          <motion.button
            type="button"
            aria-label="Previous"
            onClick={() => {
              retreat();
              startInterval();
            }}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.3, ease: EASE_LUXURY }}
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
                  width: index === safeActive ? 28 : 8,
                  backgroundColor:
                    index === safeActive ? "#2F5E4B" : "rgba(47,94,75,0.25)",
                }}
                transition={DOT_TRANSITION}
                className="h-2 rounded-full cursor-pointer"
                style={{ minWidth: 8 }}
              />
            ))}
          </div>

          <motion.button
            type="button"
            aria-label="Next"
            onClick={() => {
              advance();
              startInterval();
            }}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.3, ease: EASE_LUXURY }}
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
