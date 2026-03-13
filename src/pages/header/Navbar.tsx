"use client";

import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 80) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      setScrollY(currentScroll);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const smoothScrollTo = (targetY: number, duration = 1200) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const targetY = window.scrollY + element.getBoundingClientRect().top - 16;
    smoothScrollTo(targetY);
  };

  const scrollToHero = () => {
    smoothScrollTo(0);
  };
  const ArrowIcon: React.FC = () => (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      viewBox="0 0 16 16"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const showSolidBg = scrollY > 40;

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-100 transition-all duration-500 ease-in-out",
        hideNavbar
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100",
        showSolidBg ? "bg-[#254F3E] shadow-lg" : "bg-[#254F3E] shadow-md",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={scrollToHero}
            className="relative text-xl font-serif font-bold text-white overflow-hidden group"
          >
            {/* top glow line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-emerald-400/40 to-transparent" />
            <span className="relative z-10 leading-relaxed text-2xl transition-colors duration-300 group-hover:text-[#d8f3e2]">
              R P R E
            </span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full rounded-3xl transition-all duration-700"></span>
          </button>

          {/* CTA — glowing border wrapper + flip text */}
          <div className="relative group">
            {/* Outer shell: clips the glow + shine */}
            <div className="relative w-36 h-10 opacity-90 overflow-hidden rounded-xl z-10">
              {/* 1. Shine sweep (from original uiverse animation) */}
              <div className="absolute z-10 -translate-x-44 group-hover:translate-x-120 ease-in transition-all duration-700 h-full w-44 bg-linear-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12 pointer-events-none" />

              {/* 2. Spinning glow bar (border effect) */}
              <div className="absolute duration-1000 group-hover:animate-spin w-full h-25 bg-linear-to-r from-[#65ad7e] to-yellow-400 blur-[30px] -bottom-6 left-0 pointer-events-none" />

              {/* 3. Inner button face — sits above glow, contains flip text */}
              <div className="absolute inset-0.5 rounded-[10px] bg-[#F5F5F5] group-hover:bg-[#65ad7e] transition-colors duration-300 z-1 flex items-center justify-center overflow-hidden">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="cursor-pointer w-full h-full font-semibold text-sm px-4"
                >
                  {/* Flip text animation */}
                  <div className="relative  overflow-hidden">
                    <p
                      className="text-black group-hover:text-white 
  group-hover:-translate-y-6 
  group-hover:animation-none 
  flex items-center justify-center transition-all duration-500"
                    >
                      Get Started
                    </p>

                    <p
                      className="absolute top-full left-0 w-full h-full text-white 
  transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] 
  group-hover:top-0 flex items-center justify-center gap-1"
                    >
                      Let's Talk
                      <span
                        className="transition-transform duration-700 
    group-hover:translate-x-3"
                      >
                        <ArrowIcon />
                      </span>
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
