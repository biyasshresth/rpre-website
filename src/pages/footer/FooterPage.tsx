import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <footer
      className="relative px-6 md:px-16 lg:px-20 py-5 
      bg-linear-to-br from-[#254F3E] via-[#1F3F32] to-[#183129] 
      border-t border-white/10 text-sm overflow-hidden"
    >
      {/* top glow line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-emerald-400/40 to-transparent" />

      <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
        {/* Left Section */}
        <div className="max-w-xs flex flex-col items-center md:items-start gap-3">
          {/* Social Icons moved here */}
          <div className="flex gap-4">
            <a
              aria-label="LinkedIn"
              href="/#"
              className="w-9 h-9 flex items-center justify-center 
              rounded-full bg-white/10 backdrop-blur-md 
              hover:bg-emerald-400 hover:text-black 
              transition-all duration-300 text-white"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              aria-label="Facebook"
              href="/#"
              className="w-9 h-9 flex items-center justify-center 
              rounded-full bg-white/10 backdrop-blur-md 
              hover:bg-emerald-400 hover:text-black 
              transition-all duration-300 text-white"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              aria-label="Instagram"
              href="/#"
              className="w-9 h-9 flex items-center justify-center 
              rounded-full bg-white/10 backdrop-blur-md 
              hover:bg-emerald-400 hover:text-black 
              transition-all duration-300 text-white"
            >
              <FaInstagram size={14} />
            </a>
          </div>

          <h3 className="text-white font-semibold text-base tracking-wide">
            RPRE IT Company
          </h3>

          <p className="text-gray-300">
            Building innovative digital <br className="hidden md:block" />
            experiences for the future.
          </p>
        </div>

        {/* Middle Section (Links) */}
        <div className="flex flex-col ml-10 md:flex-row gap-4 md:gap-8 mt-8 items-center md:items-start">
          {/* Privacy first now */}
          <Link
            to="/policy"
            className="relative text-gray-200 hover:text-white transition duration-300
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-px after:bg-emerald-400 
             hover:after:w-full after:transition-all after:duration-300"
          >
            Privacy & Policy
          </Link>

          <Link
            to="/termsCondition"
            className="relative text-gray-200 hover:text-white transition duration-300
            after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-px after:bg-emerald-400 
            hover:after:w-full after:transition-all after:duration-300"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* Right Section (Copyright) */}
        <div className="flex items-center md:items-end justify-center md:justify-end">
          <div className="text-gray-200 text-xs md:text-sm mb-18">
            © {new Date().getFullYear()} RPRE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
