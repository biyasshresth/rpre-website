"use client";

import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(1000);

  useEffect(() => {
    const updateViewport = () => setViewportHeight(window.innerHeight);
    const handleScroll = () => setScrollY(window.scrollY);

    updateViewport();
    handleScroll();

    window.addEventListener("resize", updateViewport);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const smoothScrollTo = (targetY: number, duration = 1400) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const targetY = window.scrollY + element.getBoundingClientRect().top - 16;

    smoothScrollTo(targetY, 1400);
  };

  const handleGetStarted = () => {
    scrollToSection("contact");
  };

  const handleGoTop = () => {
    smoothScrollTo(0, 1400);
  };

  const showSolidBg = scrollY > 40;
  const hideNavbar = scrollY > viewportHeight * 1.02;

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-100 transition-all duration-700 ease-in-out",
        hideNavbar
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100",
        showSolidBg ? "bg-[#254F3E] shadow-lg" : "bg-[#254F3E] shadow-md",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            type="button"
            onClick={handleGoTop}
            className="text-xl font-bezmiar font-bold text-white transition-colors duration-300 hover:text-[#7FAE8D]"
          >
            RPRE
          </button>

          <button
            type="button"
            onClick={handleGetStarted}
            className="group cursor-pointer rounded-lg bg-[#F5F5F5] px-5 py-2 font-semibold text-black shadow-md transition-all duration-300 hover:bg-[#6b9c7c] overflow-hidden"
          >
            <div className="relative h-5 overflow-hidden">
              <p className="transition-transform duration-900 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-6">
                Get Started
              </p>

              <p className="absolute   top-6 flex justify-center text-white transition-all duration-900 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                Let's Go
              </p>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
