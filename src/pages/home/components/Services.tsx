"use client";

import { motion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { services } from "../../../data/mockData";
import { Link } from "react-router-dom";

const ease: Easing = [0.66, 0, 0.34, 1];
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 15,
      mass: 0.7,
    },
  },
  hover: {
    y: -12,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      mass: 0.7,
    },
  },
};

const imageVariants: Variants = {
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const iconVariants: Variants = {
  initial: { rotate: 0, scale: 1 },
  hover: {
    rotate: [0, 360, 350, 365, 358, 360],
    scale: 1.12,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const Services: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;

    services.forEach((service) => {
      const img = new Image();
      img.src = service.image;
      const done = () => {
        loadedCount++;
        if (loadedCount === services.length) setLoaded(true);
      };
      img.onload = done;
      img.onerror = done;
    });
  }, []);

  return (
    <section
      id="services-overlay"
      className="relative z-30 -mt-[100vh] rounded-t-[2.5rem] bg-grid-lines py-14 shadow-[0_-20px_80px_rgba(0,0,0,0.14)] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-lines opacity-60" />
      <div className="pointer-events-none absolute -top-72 -right-72 z-0 h-95 w-95 text-[#2F5E4B] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 font-serif text-3xl font-bold tracking-tight text-[#244738] md:text-5xl">
            Our Services
          </h2>

          <p className="mx-auto max-w-2xl text-base text-gray-600">
            Comprehensive IT solutions <br /> tailored to rise or lift your
            business and drive digital excellence.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3 -mt-6"
          variants={containerVariants}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const IconComponent: LucideIcon = service.icon;

            return (
              <Link key={service.id} to={service.link!} className="block">
                <motion.div
                  className="group h-100 cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md flex flex-col"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  {/* Image Section - Fixed Height */}
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                      variants={imageVariants}
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[rgba(47,94,75,0.8)] to-transparent" />

                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      className="absolute bottom-4 left-4 rounded-full bg-white p-3 shadow-lg"
                    >
                      <IconComponent className="text-[#2F5E4B]" size={28} />
                    </motion.div>
                  </div>

                  {/* Content Section - Fixed Space */}
                  <div className="p-6 flex flex-col flex-1 overflow-hidden">
                    <h3 className="mb-3 text-2xl font-bold text-[#3e6e5c] transition-colors duration-300 group-hover:text-[#274b32] shrink-0">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-5 overflow-hidden">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
