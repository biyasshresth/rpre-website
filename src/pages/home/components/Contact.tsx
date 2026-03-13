import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#254F3E] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-8">
          <p className="uppercase tracking-widest text-xs text-white/80 font-serif">
            Ready to start?
          </p>

          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Let's build <br /> <p className="text-[#8a6c4b]">together.</p>
          </h2>

          <p className="text-white/80 max-w-md font-space-mono">
            Get in touch and discover how RPRE can transform your technology
            landscape.
          </p>

          <div className="space-y-4 text-sm mt-8">
            <div className="flex items-start gap-3 text-white/60 relative group">
              {/* Icon */}
              <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white/10 transition-shadow duration-300 hover:shadow-[0_0_10px_#00FF9F]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.583 19.583 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Google Maps Preview Dialog - appears on hover */}
              <div className="absolute bottom-full left-6 mb-3 z-50 px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto">
                <div
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/T.+Mart/@27.7512223,85.3611481,195m/data=!3m1!1e3!4m10!1m2!2m1!1st-mart+chabahil!3m6!1s0x39eb1bba03125ffb:0xa95c87cddfab7291!8m2!3d27.7510504!4d85.3621478!15sCg90LW1hcnQgY2hhYmFoaWxaESIPdCBtYXJ0IGNoYWJhaGlskgENZ3JvY2VyeV9zdG9yZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOU2QzUnhNRkozRVFF4AEA-gEECAAQEw!16s%2Fg%2F11p0688q5_?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="cursor-pointer relative"
                >
                  {/* Maps Preview */}
                  <div className="w-60 h-48 rounded-lg shadow-2xl overflow-hidden border border-white/20 bg-white/5 hover:shadow-[0_20px_40px_rgba(0,255,159,0.15)] hover:border-white/40 transition-all">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1356!2d85.3611481!3d27.7512223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bba03125ffb:0xa95c87cddfab7291!2sT.%20Mart!5e0!3m2!1sen!2snp!4v1710325800000"
                      width="100%"
                      height="100%"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map Preview"
                      className="pointer-events-auto"
                    />
                    {/* Invisible clickable overlay */}
                    <div className="absolute inset-0 cursor-pointer" />
                  </div>

                  {/* Location Label Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#254F3E] to-transparent px-4 py-3 rounded-b-lg">
                    <p className="text-xs font-space-mono text-white font-semibold cursor-pointer">
                      Kathmandu, Chabahil
                    </p>
                    <p className="text-xs text-white/70 font-space-mono cursor-pointer">
                      Click to view full map
                    </p>
                  </div>
                </div>
              </div>

              {/* Text */}
              <span className="flex justify-center mt-2 cursor-pointer hover:text-white transition-colors">
                Kathmandu, Chabahil, Nepal
              </span>
            </div>

            <div className="flex items-center gap-3 text-white/60">
              <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white/10 transition-shadow duration-300 hover:shadow-[0_0_10px_#00FF9F]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <a className="font-space-mono hover:text-white transition-colors cursor-pointer">
                hello@rpre.dev
              </a>
            </div>

            <div className="flex items-center gap-3 text-white/60">
              <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white/10 transition-shadow duration-300 hover:shadow-[0_0_10px_#00FF9F]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-space-mono cursor-pointer hover:text-white transition-colors">
                +1 (555) 000-0000
              </span>
            </div>
          </div>
        </div>

        <form className="space-y-8">
          <div className="relative">
            <label className="block text-xs font-space-mono uppercase tracking-widest text-white/60 mb-3">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-md placeholder-white/30 focus:outline-none focus:border-white"
            />
          </div>

          <div className="relative">
            <label className="block text-xs uppercase tracking-widest font-space-mono text-white/60 mb-3">
              Email
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-md placeholder-white/30 focus:outline-none focus:border-white"
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-space-mono uppercase tracking-widest text-white/60 mb-3">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-md placeholder-white/30 font-space-mono resize-none focus:outline-none focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#254F3E] py-4 font-space-mono cursor-pointer relative rounded-md font-bold flex items-center justify-center gap-2 transition hover:bg-white/90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
