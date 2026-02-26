const FooterPage = () => {
  return (
    <footer className="relative z-20 px-8 lg:px-20 py-10 border-t border-white/10 text-gray-400 text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="text-white font-semibold mb-2">RPRE IT Company</h3>
          <p className="font-space-mono">Building innovative digital <br /> Experiences for the future.</p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition font-space-mono">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition font-space-mono">
            Terms
          </a>
          <a href="#" className="hover:text-white transition font-space-mono">
            Contact
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 font-space-mono">
        © {new Date().getFullYear()} RPRE. All rights reserved.
      </div>
    </footer>
  );
};
export default FooterPage;
