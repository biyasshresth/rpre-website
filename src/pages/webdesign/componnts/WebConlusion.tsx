import { motion } from "framer-motion";

const WebConlusion = () => {
  return (
    <>
    <section
      id="conclusion"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-br from-slate-800 via-[#A3B18A] to-[#8A9A73] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="animate-slide-up"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-8">
            The Future is Bright
          </h2>
          <p className="text-base sm:text-xl text-[#F5F1E7] mb-8 leading-relaxed">
            Webpage designing continues to evolve with emerging technologies,
            new design patterns, and changing user expectations. The key to
            success lies in staying curious, embracing innovation, and always
            putting users first.
          </p>
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-2xl sm:text-2xl font-serif font-semibold text-white mb-4">
              "Great design is not just what looks good."
            </p>
            <p className="text-2xl sm:text-2xl font-serif font-semibold text-[#7e6e3a]">
              It's what works best."
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-4 justify-center text-[#F5F1E7] text-lg">
            <motion.div
              className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 hover:bg-[#254F3E] transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <span>✓</span>
              <span>User-Centered</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 hover:bg-[#254F3E] transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <span>✓</span>
              <span>Accessible</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 hover:bg-[#254F3E] transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <span>✓</span>
              <span>Performant</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 hover:bg-[#2b614b] transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <span>✓</span>
              <span>Beautiful</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default WebConlusion;
