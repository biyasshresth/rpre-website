// import Blog from "./components/Blog";
import Contact from "./components/Contact";
import HeroSection from "./components/Herosection";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a33_1px,transparent_1px),linear-gradient(to_bottom,#0f172a33_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,#020617_150%)]" />
      <div className="absolute -top-40 -left-40 h-125 w-125 animate-pulse rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-150 w-150 animate-pulse rounded-full bg-emerald-500/20 blur-[160px]" />

      <div className="relative z-10">
        <HeroSection />
        <Services />
        <Portfolio />
        <Stats />
        <Testimonials />
        {/* <Blog /> */}
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
