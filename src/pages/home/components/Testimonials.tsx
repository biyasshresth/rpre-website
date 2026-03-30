import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "../../../data/mockData";
import type { Testimonial } from "../../../data/mockData";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Testimonials: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const total = testimonials.length;
  const index = ((page % total) + total) % total;

  const x = useMotionValue(0);
  // const backgroundX = useTransform(x, [-300, 300], [-40, 40]);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prev]) => [prev + newDirection, newDirection]);
  }, []);

  // Auto slide
  useEffect(() => {
    const timer = setTimeout(() => {
      paginate(1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [page, paginate]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.96,
      filter: "blur(4px)",
    }),
  };

  const active: Testimonial = testimonials[index];

  return (
    <section
      id="testimonial"
      className="py-10 relative bg-grid-lines overflow-hidden min-h-screen flex flex-col items-center justify-center gap-12"
    >
      {/* <motion.div
        style={{ x: backgroundX }}
        className="absolute inset-0 bg-linear-to-br from-[#2F5E4B]/5 to-[#7FAE8D]/5"
      /> */}

      <div className="relative max-w-3xl mx-auto px-6 flex flex-col items-center ">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif md:text-4xl font-bold text-[#2F5E4B] mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base font-space-mono">
            Real experiences from real partners.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                style={{ x }}
                onDragEnd={(_, info) => {
                  const swipe = swipePower(info.offset.x, info.velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                transition={{
                  x: { type: "spring", stiffness: 600, damping: 25 },
                  opacity: { duration: 0.1 },
                  scale: { duration: 0.2 },
                }}
                className="w-full p-6 md:p-10 cursor-grab active:cursor-grabbing relative"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-5 relative z-10">
                  <motion.div
                    initial={{ rotate: -20, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#2F5E4B]/10 rounded-full p-3"
                  >
                    <Quote size={28} className="text-[#2F5E4B]" />
                  </motion.div>
                </div>

                {/* Content */}
                <p className="text-base md:text-lg text-gray-700 text-center mb-5 leading-relaxed relative z-10">
                  "{active.content}"
                </p>

                {/* Stars */}
                <div className="flex justify-center gap-1.5 mb-5 relative z-10">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <Star size={18} className="text-[#f8d825] fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center gap-4 relative z-10">
                  <motion.img
                    whileHover={{ y: -4 }}
                    src={active.avatar}
                    alt={active.name}
                    className="w-12 h-12 rounded-full object-cover border-4 border-[#7FAE8D]"
                  />
                  <div>
                    <h4 className="font-bold text-[#2F5E4B] text-base">
                      {active.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{active.position}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Buttons */}
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#254F3E] rounded-full p-2.5 shadow-lg hover:bg-[#436859] hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#254F3E] rounded-full p-2.5 shadow-lg hover:bg-[#436859] hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                key={i}
                onClick={() => setPage([i, i > index ? 1 : -1])}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-[#2F5E4B]"
                    : "w-2 bg-gray-300 hover:bg-[#7FAE8D]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
