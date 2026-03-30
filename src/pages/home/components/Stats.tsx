import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Clock, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { stats } from "../../../data/mockData";
interface StatItem {
  id: string | number;
  value: number;
  suffix?: string;
  label: string;
}
const iconMap: LucideIcon[] = [Award, Users, Clock, TrendingUp];
const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });
  const animationFrameRefs = useRef<number[]>([]);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };
  const animateCount = (
    target: number,
    index: number,
    duration: number = 2000,
  ): void => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      const easedProgress = easeOutCubic(progressRatio);
      const value = Math.floor(easedProgress * target);
      setCounts((prev) => {
        const updated = [...prev];
        updated[index] = value;
        return updated;
      });
      if (progress < duration) {
        animationFrameRefs.current[index] = requestAnimationFrame(step);
      } else {
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = target;
          return updated;
        });
      }
    };
    animationFrameRefs.current[index] = requestAnimationFrame(step);
  };
  useEffect(() => {
    if (isInView) {
      (stats as StatItem[]).forEach((stat, index) => {
        animateCount(stat.value, index);
      });
    }
    return () => {
      animationFrameRefs.current.forEach((frame) =>
        cancelAnimationFrame(frame),
      );
    };
  }, [isInView]);
  return (
    <section
      id="about"
      ref={sectionRef}
      className="lg:py-auto min-h-screen max-w-full bg-[#dee9e2] text-center flex flex-col items-center justify-center gap-12 py-16 relative overflow-hidden"
    >
      {" "}
      {/* bg-linear-to-br from-[#335c4b] to-[#5e8a6b] */}
      <div className="w-full h-full  px-6 lg:px-8 flex flex-col items-center lg:gap-20 gap-10">
        {" "}
        {/* Header */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center "
        >
          {" "}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a3328] mb-6 tracking-tight">
            {" "}
            Why Choose RPRE?{" "}
          </h2>{" "}
          <p className="lg:text-lg text-base text-black/90 max-w-2xl mx-auto font-space-mono leading-relaxed">
            {" "}
            Trusted by businesses worldwide for delivering exceptional results
            and innovation.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* Stats Grid */}{" "}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:gap-8 gap-4 mx-auto max-w-7xl">
          {" "}
          {(stats as StatItem[]).map((stat, index) => {
            const IconComponent = iconMap[index];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="text-center group flex flex-col items-center gap-2 lg:gap-4"
              >
                {" "}
                {/* Icon */}{" "}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center lg:w-16 w-10 h-10 lg:h-16 bg-[#cfece1] backdrop-blur-md rounded-full shadow-lg transition-all duration-500 group-hover:bg-[#255d47] "
                >
                  {" "}
                  <IconComponent className="text-[#255d47] group-hover:text-[#cfece1] transition-transform duration-500 group-hover:rotate-6 lg:w-8 lg:h-8 w-5 h-5" />{" "}
                </motion.div>{" "}
                {/* Counter */}{" "}
                <div className="text-2xl lg:text-4xl font-bold font-serif text-black uppercase tracking-tight">
                  {" "}
                  {counts[index]} {stat.suffix}{" "}
                </div>{" "}
                {/* Label */}{" "}
                <div className="text-black/90 font-medium font-space-mono text-base">
                  {" "}
                  {stat.label}{" "}
                </div>{" "}
              </motion.div>
            );
          })}{" "}
        </div>{" "}
        {/* Bottom Content */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className=" text-center"
        >
          {" "}
          <p className="text-black/90 lg:text-base text-sm text-justify lg:text-center  max-w-2xl mx-auto font-space-mono leading-relaxed">
            {" "}
            With nearly a decade of experience, RPRE has established itself as a
            leading IT services provider. Our team of expert professionals is
            dedicated to transforming your digital vision into reality,
            delivering cutting-edge solutions that drive business growth and
            innovation.{" "}
          </p>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
};
export default Stats;
