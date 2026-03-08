import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="bg-[#254F3E] text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <p className="uppercase tracking-widest text-sm text-white/80 font-space-mono">
            Ready to start?
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Let’s build <br /> together.
          </h2>

          <p className="text-white/80 max-w-md font-space-mono">
            Get in touch and discover how RPRE can transform your technology
            landscape.
          </p>

          <div className="text-white/50 space-y-2 text-sm mt-8">
            <p>hello@rpre.dev</p>
            <p>+1 (555) 000-0000</p>
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
            className=" w-full  bg-white text-[#254F3E] py-4 font-space-mono cursor-pointer relative rounded-md font-bold flex items-center justify-center gap-2 transition hover:bg-white/90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
