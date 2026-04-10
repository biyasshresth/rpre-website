"use client";

import { useState, useRef, useEffect, useCallback, useMemo, memo } from "react";
import {
  motion,
  type TargetAndTransition,
  AnimatePresence,
} from "framer-motion";
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
const HEADER_TRANSITION = { duration: 0.9, ease: EASE_LUXURY } as const;

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

// ProjectModal Component
interface ProjectModalProps {
  project: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = memo(function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.4, ease: EASE_LUXURY }}
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 pointer-events-none overflow-y-auto"
          >
            <motion.div className="w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden pointer-events-auto my-4 sm:my-auto">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/90 text-[#1a3328] flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200 backdrop-blur-sm"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Category Badge */}

              {/* Image Section */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-linear-to-br from-[#f7f3ee] to-[#ede8e0]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>

              {/* Content Section - Scrollable on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="p-5 sm:p-6 md:p-7 max-h-[calc(100vh-220px)] sm:max-h-[calc(100vh-280px)] overflow-y-auto"
              >
                {/* Title */}{" "}
                <h2 className="w-full text-xl sm:text-2xl md:text-3xl font-bold text-[#1a3328] mb-2 font-serif tracking-tight line-clamp-2 flex flex-row items-center justify-between">
                  {project.title}{" "}
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="sm:left-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/95 text-xs font-semibold text-[#2F5E4B] shadow-lg backdrop-blur-sm"
                  >
                    {project.category}
                  </motion.h3>
                </h2>
                {/* Accent Line */}
                <div className="w-12 sm:w-16 h-1 bg-linear-to-r from-[#2F5E4B] to-[#4a7060] rounded-full mb-4 sm:mb-5" />
                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5 line-clamp-3 sm:line-clamp-none">
                  {project.description}
                </p>
                {/* Features Section */}
                {project.features && project.features.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="mb-4 sm:mb-5"
                  >
                    <h3 className="text-xs font-bold text-[#1a3328] uppercase tracking-wider mb-2 sm:mb-3">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.25 + idx * 0.08,
                            duration: 0.3,
                          }}
                          className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-[#f7f3ee]/60 hover:bg-[#ede8e0] transition-colors duration-200"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2F5E4B] shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700 line-clamp-2">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
                {/* Technologies Section */}
                {project.technologies && project.technologies.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="mb-4 sm:mb-5"
                  >
                    <h3 className="text-xs font-bold text-[#1a3328] uppercase tracking-wider mb-2 sm:mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.slice(0, 6).map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.35 + idx * 0.06,
                            duration: 0.3,
                          }}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#2F5E4B]/10 text-xs font-medium text-[#2F5E4B] border border-[#2F5E4B]/20 whitespace-nowrap"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
                {/* Call-to-Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="flex flex-col gap-2 sm:gap-3 pt-4 sm:pt-5 border-t border-gray-200"
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <motion.h3
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full lg:px-4 px-5 lg:py-2 py-2.5 rounded-lg text-[#2F5E4B]  view-button font-semibold text-sm sm:text-base transition-all duration-300  flex items-center justify-center gap-1.5 sm:gap-2"
                      >
                        <span>View Project</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </motion.h3>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      {/* <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border-2 border-[#2F5E4B] text-[#2F5E4B] font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-[#2F5E4B]/5 hover:shadow-lg flex items-center justify-center gap-1.5 sm:gap-2"
                      >
                        <span>View Code</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.006 3.006 0 0 0-.82-2.134c2.31-.265 4.734-1.133 4.734-4.926 0-1.09-.39-1.937-1.029-2.61.109-.577.438-1.773-.102-3.677 0 0-.84-.27-2.75 1.025A9.578 9.578 0 0 0 12 6.792a9.59 9.59 0 0 0-2.904.402c-1.91-1.295-2.75-1.025-2.75-1.025-.54 1.904-.211 3.1-.102 3.677-.639.673-1.029 1.52-1.029 2.61 0 3.793 2.424 4.661 4.734 4.926-.264.229-.479.571-.558.938" />
                        </svg>
                      </motion.button> */}
                    </a>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

// CarouselCard
interface CarouselCardProps {
  item: PortfolioItem;
  slot: SlotConfig;
  isCenter: boolean;
  isVisible: boolean;
  onClickSide: () => void;
  onClickCard: () => void;
}

const CarouselCard = memo(
  function CarouselCard({
    item,
    slot,
    isCenter,
    isVisible,
    onClickSide,
    onClickCard,
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
        onClick={isCenter ? onClickCard : !isVisible ? undefined : onClickSide}
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

            {isCenter && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="mt-4 flex items-center gap-2"
              >
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClickCard();
                  }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: EASE_LUXURY }}
                  className="text-sm font-semibold text-[#2F5E4B] flex items-center gap-1 cursor-pointer hover:text-[#1a3328] transition-colors duration-200"
                >
                  View Details
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            )}
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
    prev.onClickCard === next.onClickCard &&
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
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      if (!isHoveringRef.current && !isModalOpen) {
        setActiveIndex((p) => (p + 1) % total);
      }
    }, AUTO_SCROLL_INTERVAL);
  }, [total, isModalOpen]);

  const handleCardClick = useCallback((project: PortfolioItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
    startInterval();
  }, [startInterval]);

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
      <div className="max-w-7xl mx-auto px-6 relative flex flex-col items-center lg:gap-2 gap-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={HEADER_TRANSITION}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center lg:gap-6 gap-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a3328] font-serif tracking-tight">
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
              onClickCard={() => handleCardClick(item)}
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

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Portfolio;
