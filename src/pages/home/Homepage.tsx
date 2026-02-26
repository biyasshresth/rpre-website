import FooterPage from "../footer/FooterPage";
import Navbar from "../header/Navbar";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import HeroSection from "./components/Herosection";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#050816] overflow-hidden text-white font-sans">
      {" "}
      {/* GRID BACKGROUND */}{" "}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a33_1px,transparent_1px),linear-gradient(to_bottom,#0f172a33_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />{" "}
      {/* DARK VIGNETTE CORNERS */}{" "}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,#020617_150%)]" />{" "}
      {/* ANIMATED GLOW BLOBS */}{" "}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-cyan-500/20 blur-[140px] rounded-full animate-pulse" />{" "}
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-emerald-500/20 blur-[160px] rounded-full animate-pulse" />{" "}
      <Navbar /> <HeroSection /> <Services /> <Portfolio /> <Stats />{" "}
      <Testimonials /> <Blog /> <Contact /> <FooterPage />{" "}
    </div>
  );
};
export default HomePage;
