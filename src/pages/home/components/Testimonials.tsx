import React, { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
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
  const backgroundX = useTransform(x, [-300, 300], [-40, 40]);

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
      x: dir > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      filter: "blur(8px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      filter: "blur(8px)",
    }),
  };

  const active: Testimonial = testimonials[index];

  return (
<section
  id="testimonial"
  className=" py-24 relative bg-grid-lines overflow-hidden"
>

      <motion.div
        style={{ x: backgroundX }}
        className="absolute inset-0 bg-linear-to-br from-[#2F5E4B]/5 to-[#7FAE8D]/5"
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5E4B] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg font-space-mono">
            Real experiences from real partners.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-105 flex items-center">
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
                  x: { type: "spring", stiffness: 800, damping: 25 },
                  opacity: { duration: 0.1 },
                  scale: { duration: 0.2 },
                }}
                className="w-full p-10 md:p-16 cursor-grab active:cursor-grabbing relative"
              >
                {/* Continuous fast rotation on card */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 1,
                  }}
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                />

                {/* Quote Icon */}
                <div className="flex justify-center mb-10 relative z-10">
                  <motion.div
                    initial={{ rotate: -20, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#2F5E4B]/10 rounded-full p-5"
                  >
                    <Quote size={42} className="text-[#2F5E4B]" />
                  </motion.div>
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-gray-700 text-center mb-10 leading-relaxed relative z-10">
                  "{active.content}"
                </p>

                {/* Stars */}
                <div className="flex justify-center gap-2 mb-10 relative z-10">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star size={22} className="text-[#7A5234] fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center gap-5 relative z-10">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={active.avatar}
                    alt={active.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-[#7FAE8D]"
                  />
                  <div>
                    <h4 className="font-bold text-[#2F5E4B] text-lg">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-[#2F5E4B] hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-[#2F5E4B] hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
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
