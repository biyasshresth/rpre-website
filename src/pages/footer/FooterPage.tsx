import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer
      className="relative px-6 md:px-16 lg:px-20 py-14 
      bg-linear-to-br from-[#254F3E] via-[#1F3F32] to-[#183129] 
      border-t border-white/10 text-sm overflow-hidden"
    >
      {/* top glow line */}
      <div className="absolute top-0 left-0 w-full h-1px bg-linear-to-r from-transparent via-emerald-400/40 to-transparent" />

      <div className="flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">

        {/* Left Section */}
        <div className="max-w-xs">
          <h3 className="text-white font-semibold text-xl tracking-wide mb-3">
            RPRE IT Company
          </h3>
          <p className="font-space-mono text-gray-300 leading-relaxed">
            Building innovative digital <br className="hidden md:block" />
            experiences for the future.
          </p>
        </div>

        {/* Middle Section (Links) */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 font-space-mono items-center md:items-start">
          <a
            href="#"
            className="relative text-gray-200 hover:text-white transition duration-300
            after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-1px after:bg-emerald-400 
            hover:after:w-full after:transition-all after:duration-300"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="relative text-gray-200 hover:text-white transition duration-300
            after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-1px after:bg-emerald-400 
            hover:after:w-full after:transition-all after:duration-300"
          >
            Terms
          </a>

          <a
            href="#"
            className="relative text-gray-200 hover:text-white transition duration-300
            after:content-[''] after:absolute after:left-0 after:-bottom-1 
            after:w-0 after:h-1px after:bg-emerald-400 
            hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </a>
        </div>

        {/* Right Section (Copyright + Social Icons) */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="text-gray-400 font-space-mono text-xs md:text-sm">
            © {new Date().getFullYear()} RPRE. All rights reserved.
          </div>

          <div className="flex gap-4">
            <a
              aria-label="LinkedIn"
              href="/facebook"
              className="w-9 h-9 flex items-center justify-center 
              rounded-full bg-white/10 backdrop-blur-md 
              hover:bg-emerald-400 hover:text-black 
              transition-all duration-300 text-white"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              aria-label="Twitter"
              href="/twitter"
              className="w-9 h-9 flex items-center justify-center 
              rounded-full bg-white/10 backdrop-blur-md 
              hover:bg-emerald-400 hover:text-black 
              transition-all duration-300 text-white"
            >
              <FaTwitter size={14} />
            </a>

            <a
              aria-label="Instagram"
              href="/instagram"
              className="w-9 h-9 flex items-center justify-center 
              rounded-full bg-white/10 backdrop-blur-md 
              hover:bg-emerald-400 hover:text-black 
              transition-all duration-300 text-white"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterPage;