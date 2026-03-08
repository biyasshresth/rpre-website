import { useEffect, useRef, useState } from "react";
import styles from "./FadeIn.module.css";
import type { ReactNode } from "react";
/* ── hook ─────────────────────────────────────────────── */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

/* ── component ────────────────────────────────────────── */
type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  delay?: number; /* seconds */
  direction?: Direction;
  className?: string;
}

const dirClass: Record<Direction, string> = {
  up: styles.fromUp,
  down: styles.fromDown,
  left: styles.fromLeft,
  right: styles.fromRight,
  none: styles.fromNone,
};

export function FadeIn({
  children,
  direction = "up",
  className = "",
}: FadeInProps) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={[
        styles.base,
        dirClass[direction],
        inView ? styles.visible : "",
        className,
      ].join(" ")}
      // style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
