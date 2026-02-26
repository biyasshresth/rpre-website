import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = (): void => {
    scrollToSection("contact"); // change to your target section or route
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#254F3E] shadow-lg" : "bg-[#254F3E]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bezmiar  font-bold text-white hover:text-[#7FAE8D] transition-colors duration-300"
          >
            RPRE
          </button>

          {/* Get Started Button */}
          <button
            onClick={handleGetStarted}
            className="bg-[#F5F5F5] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#6b9c7c] transition-all duration-300 shadow-md "
          >
            Get Started
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;