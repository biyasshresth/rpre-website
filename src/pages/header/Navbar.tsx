"use client";

import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // hide on scroll down, show on scroll up
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
            <span className="relative z-10 leading-relaxed  transition-colors duration-300 group-hover:text-[#d8f3e2]">
              R P R E
            </span>

            {/* shine sweep */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700"></span>
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="group cursor-pointer rounded-lg bg-[#F5F5F5] px-5 py-2 font-semibold text-black shadow-md transition-all duration-300 hover:bg-[#6b9c7c] overflow-hidden"
          >
            <div className="relative h-5 overflow-hidden">
              <p className="transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-6">
                Get Started
              </p>

              <p className="absolute top-6 flex justify-center text-white transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
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
