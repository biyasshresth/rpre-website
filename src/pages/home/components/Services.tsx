"use client";

import { motion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { services } from "../../../data/mockData";
 import { Link } from "react-router-dom";

const ease: Easing = [0.42, 0, 0.58, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
  hover: { y: -10, scale: 1.03, transition: { duration: 0.45, ease } },
};

const imageVariants: Variants = {
  hover: { scale: 1.08, transition: { duration: 0.5, ease } },
};

const iconVariants: Variants = {
  hover: { rotate: 360, scale: 1.08, transition: { duration: 0.6, ease } },
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
      className="relative z-30 -mt-[100vh] rounded-t-[2.5rem] bg-grid-lines   py-20 shadow-[0_-20px_80px_rgba(0,0,0,0.14)] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-lines opacity-60" />
      <div className="pointer-events-none absolute -top-72 -right-72 z-0 h-95 w-95 text-[#2F5E4B] opacity-10" />
       

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 text-center"
        >
          <h2 className="mb-8 font-serif text-5xl font-bold tracking-tight text-[#1a3328] md:text-6xl">
            Our Services
          </h2>

          <p className="mx-auto mt-10 max-w-2xl font-space-mono text-lg text-gray-600">
            Comprehensive IT solutions tailored to elevate your business and
            drive digital excellence
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const IconComponent: LucideIcon = service.icon;

            return (
              <Link key={service.id} to={service.link!} className="block">
                <motion.div
                  className="group mt-6 cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                      variants={imageVariants}
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[rgba(47,94,75,0.8)] to-transparent" />

                    <motion.div
                      variants={iconVariants}
                      className="absolute bottom-4 left-4 rounded-full bg-white p-3 shadow-lg"
                    >
                      <IconComponent className="text-[#2F5E4B]" size={28} />
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-bold text-[#3e6e5c] transition-colors duration-300 group-hover:text-[#274b32]">
                      {service.title}
                    </h3>
                    <p className="font-space-mono leading-relaxed text-gray-600">
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
