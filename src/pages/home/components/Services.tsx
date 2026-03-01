"use client";

import { motion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { services } from "../../../data/mockData";
import BackgroundGear from "./BackgroundGear";
import { Link } from "react-router-dom";
const ease: Easing = [0.42, 0, 0.58, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
  hover: { y: -10, scale: 1.05, transition: { duration: 0.5, ease } },
};

const imageVariants: Variants = {
  hover: { scale: 1.1, transition: { duration: 0.5, ease } },
};

const iconVariants: Variants = {
  hover: { rotate: 360, scale: 1.1, transition: { duration: 0.6, ease } },
};

const Services: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    services.forEach((service) => {
      const img = new Image();
      img.src = service.image;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === services.length) setLoaded(true);
      };
    });
  }, []);

  return (
    <section
      id="services"
      className="relative py-24 bg-grid-lines bg-gray-50 overflow-hidden"
    >
      {/* Background Gear - Top Right */}
      <div className="absolute -top-72 -right-72 w-95 h-95 text-[#2F5E4B] opacity-10 pointer-events-none z-0" />
      <BackgroundGear />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#1a3328] mb-8 font-serif tracking-tight">
            Our Services
          </h2>
          <p className="text-lg mt-10 text-gray-600 max-w-2xl mx-auto font-space-mono">
            Comprehensive IT solutions tailored to elevate your business and
            drive digital excellence
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const IconComponent: LucideIcon = service.icon;

            return (
              <Link key={service.id} to={service.link!} className="block">
                <motion.div
                  className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden cursor-pointer mt-10"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      variants={imageVariants}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-[rgba(47,94,75,0.8)] to-transparent" />

                    {/* Icon */}
                    <motion.div
                      variants={iconVariants}
                      className="absolute bottom-4 left-4 bg-white rounded-full p-3 shadow-lg"
                    >
                      <IconComponent className="text-[#2F5E4B]" size={28} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 ">
                    <h3 className="text-2xl font-bold text-[#3e6e5c] mb-3 group-hover:text-[#274b32] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-space-mono">
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
