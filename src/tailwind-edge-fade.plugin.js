// tailwind-edge-fade.plugin.js
module.exports = function ({ addUtilities }) {
  addUtilities({
    // left fade overlay (use on the scroll container)
    ".edge-fade-left": {
      position: "relative",
      // Create a ::before pseudo element via background-image trick (applies to element itself),
      // but some setups prefer actual pseudo elements in extra CSS. This inline approach uses mask image.
      WebkitMaskImage:
        "linear-gradient(90deg, transparent 0%, black 22%, black 100%)",
      maskImage: "linear-gradient(90deg, transparent 0%, black 22%, black 100%)",
    },
    // right fade overlay
    ".edge-fade-right": {
      position: "relative",
      WebkitMaskImage:
        "linear-gradient(270deg, transparent 0%, black 22%, black 100%)",
      maskImage: "linear-gradient(270deg, transparent 0%, black 22%, black 100%)",
    },
    // both-sides fade (optional)
    ".edge-fade-both": {
      position: "relative",
      WebkitMaskImage:
        "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
      maskImage:
        "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
    },
  });
};
