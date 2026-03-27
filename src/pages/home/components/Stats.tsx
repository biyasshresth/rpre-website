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
    <section id="about" ref={sectionRef} className="py-24 bg-[#dee9e2]">
      {" "}
      {/* bg-linear-to-br from-[#335c4b] to-[#5e8a6b] */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {" "}
        {/* Header */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {" "}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a3328] mb-6 tracking-tight">
            {" "}
            Why Choose RPRE?{" "}
          </h2>{" "}
          <p className="text-lg text-black/90 max-w-2xl mx-auto font-space-mono leading-relaxed">
            {" "}
            Trusted by businesses worldwide for delivering exceptional results
            and innovation.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* Stats Grid */}{" "}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
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
                className="text-center group"
              >
                {" "}
                {/* Icon */}{" "}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-[#cfece1] backdrop-blur-md rounded-full mb-6 shadow-lg transition-all duration-500 group-hover:bg-[#255d47] "
                >
                  {" "}
                  <IconComponent
                    className="text-[#255d47] group-hover:text-[#cfece1] transition-transform duration-500 group-hover:rotate-6"
                    size={34}
                  />{" "}
                </motion.div>{" "}
                {/* Counter */}{" "}
                <div className="text-3xl md:text-5xl font-bold font-serif text-black uppercase mb-3 tracking-tight">
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
          className="mt-20 text-center"
        >
          {" "}
          <p className="text-black/90 text-lg max-w-2xl mx-auto font-space-mono leading-relaxed">
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
