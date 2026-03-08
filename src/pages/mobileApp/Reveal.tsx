import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Use Tailwind arbitrary value for delay: `delay-[<ms>ms]`
  const delayClass = `delay-[${delay}ms]`;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(.25,.8,.25,1)] 
      ${delayClass}
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} 
      ${className}`}
    >
      {children}
    </div>
  );
}