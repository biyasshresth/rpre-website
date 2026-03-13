import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// ─── Injected Stylesheet ───────────────────────────────────────────────────────
//
// All dynamic gradient values live here as real CSS classes, keeping the JSX
// completely free of inline `style` props while still allowing per-card colours.
//
const CARD_STYLES = `
  /* ── Font families ── */
  .font-mono-tag  { font-family: 'JetBrains Mono', monospace; }
  .font-display   { font-family: 'Syne', 'DM Sans', sans-serif; }
  .font-body      { font-family: 'DM Sans', sans-serif; }

  /* ── Section background ── */
  .challenges-section {
    background: linear-gradient(135deg, #F5F1E7 0%, rgba(163,177,138,0.20) 50%, #F5F1E7 100%);
  }

  /* ── Dot-grid texture ── */
  .challenges-dotgrid {
    background-image: radial-gradient(circle, rgba(163,177,138,0.6) 1px, transparent 1px);
    background-size: 28px 28px;
  }

  /* ── Heading gradient text ── */
  .heading-gradient {
    background-image: linear-gradient(135deg, #059669 0%, #4F46E5 50%, #DB2777 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* ── Heading separator ── */
  .heading-separator {
    background: linear-gradient(90deg, transparent, rgba(163,177,138,0.7), transparent);
  }

  /* ── Card 1 — Sage Green gradient (filled) ── */
  .card-bg-1     { background: linear-gradient(135deg, #A3B18A 0%, #8A9A73 100%); }
  .card-mesh-1   { background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%, rgba(255,255,255,0.04) 100%); }
  .card-glow-1   { background: radial-gradient(ellipse at center, rgba(138,154,115,0.55) 0%, transparent 70%); }
  .card-accent-1 { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), rgba(255,255,255,0.3), transparent); }

  /* ── Card 2 — Clean White ── */
  .card-bg-2     { background: #ffffff; }
  .card-mesh-2   { background: linear-gradient(135deg, rgba(163,177,138,0.04) 0%, transparent 60%, rgba(163,177,138,0.04) 100%); }
  .card-glow-2   { background: radial-gradient(ellipse at center, rgba(163,177,138,0.2) 0%, transparent 70%); }
  .card-accent-2 { background: linear-gradient(90deg, transparent, rgba(163,177,138,0.6), rgba(163,177,138,0.4), transparent); }

  /* ── Card 3 — Clean White ── */
  .card-bg-3     { background: #ffffff; }
  .card-mesh-3   { background: linear-gradient(135deg, rgba(163,177,138,0.04) 0%, transparent 60%, rgba(163,177,138,0.04) 100%); }
  .card-glow-3   { background: radial-gradient(ellipse at center, rgba(163,177,138,0.2) 0%, transparent 70%); }
  .card-accent-3 { background: linear-gradient(90deg, transparent, rgba(163,177,138,0.6), rgba(163,177,138,0.4), transparent); }

  /* ── Card 4 — Gold gradient (filled) ── */
  .card-bg-4     { background: linear-gradient(135deg, #D4AF37 0%, #C4A137 100%); }
  .card-mesh-4   { background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%, rgba(255,255,255,0.04) 100%); }
  .card-glow-4   { background: radial-gradient(ellipse at center, rgba(196,161,55,0.55) 0%, transparent 70%); }
  .card-accent-4 { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), rgba(255,255,255,0.3), transparent); }
`;

// Inject styles once into <head> — avoids any inline `style` prop
function useInjectedStyles(css: string): void {
  useEffect(() => {
    const id = "wc-challenge-styles";
    if (document.getElementById(id)) return;
    const tag = document.createElement("style");
    tag.id = id;
    tag.textContent = css;
    document.head.appendChild(tag);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, [css]);
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const MobileIcon: React.FC = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
    <line
      x1="12"
      y1="18"
      x2="12.01"
      y2="18"
      strokeLinecap="round"
      strokeWidth={2.5}
    />
  </svg>
);

const WebIcon: React.FC = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
  </svg>
);

const DesignIcon: React.FC = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const IntegrationIcon: React.FC = () => (
  <svg
    className="w-7 h-7"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <polyline points="16 3 21 3 21 8" />
    <line x1="4" y1="20" x2="21" y2="3" />
    <polyline points="21 16 21 21 16 21" />
    <line x1="15" y1="15" x2="21" y2="21" />
    <line x1="4" y1="4" x2="9" y2="9" />
  </svg>
);

const CheckIcon: React.FC = () => (
  <svg
    className="w-3 h-3 shrink-0"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <polyline
      points="3 8 6.5 11.5 13 4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon: React.FC = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    viewBox="0 0 16 16"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────

interface Challenge {
  id: number;
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
  points: string[];
  // CSS class names (all Tailwind or injected -- no inline styles)
  cardBgClass: string;
  meshClass: string;
  glowClass: string;
  accentClass: string;
  borderClass: string;
  hoverBorderClass: string;
  iconWrapClass: string;
  tagClass: string;
  checkClass: string;
  ctaColorClass: string;
  shadowClass: string;
  hoverShadowClass: string;
  dividerClass: string;
  titleColorClass: string;
  descColorClass: string;
  ptColorClass: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const challenges: Challenge[] = [
  {
    id: 1,
    icon: <MobileIcon />,
    label: "Mobile",
    title: "Mobile App\nDevelopment",
    description:
      "We engineer cross-platform experiences that feel native everywhere — from silicon to screen, without compromise.",
    points: [
      "Cross-platform compatibility",
      "Performance optimization",
      "App store compliance",
      "Device fragmentation",
    ],
    cardBgClass: "card-bg-1",
    meshClass: "card-mesh-1",
    glowClass: "card-glow-1",
    accentClass: "card-accent-1",
    borderClass: "border-[#8A9A73]/40",
    hoverBorderClass: "hover:border-white/60",
    iconWrapClass: "bg-white/20 text-white border-white/25",
    tagClass: "bg-white/20 text-white border-white/25",
    checkClass: "bg-white/20 text-white",
    ctaColorClass: "text-white",
    shadowClass:
      "shadow-[0_4px_28px_rgba(138,154,115,0.35),0_1px_4px_rgba(0,0,0,0.08)]",
    hoverShadowClass:
      "hover:shadow-[0_14px_44px_rgba(138,154,115,0.5),0_2px_8px_rgba(0,0,0,0.1)]",
    dividerClass: "bg-white/20",
    titleColorClass: "text-white",
    descColorClass: "text-white/80",
    ptColorClass: "text-white/90",
  },
  {
    id: 2,
    icon: <WebIcon />,
    label: "Web",
    title: "Web\nDevelopment",
    description:
      "We build scalable, blazing-fast web architectures that handle millions of users and evolve with your product.",
    points: [
      "Responsive design across devices",
      "Performance optimization",
      "Browser compatibility",
      "Scalable architecture",
    ],
    cardBgClass: "card-bg-2",
    meshClass: "card-mesh-2",
    glowClass: "card-glow-2",
    accentClass: "card-accent-2",
    borderClass: "border-[#A3B18A]/25",
    hoverBorderClass: "hover:border-[#A3B18A]/55",
    iconWrapClass: "bg-[#A3B18A]/12 text-[#5a6e45] border-[#A3B18A]/20",
    tagClass: "bg-[#A3B18A]/10 text-[#4a5e38] border-[#A3B18A]/20",
    checkClass: "bg-[#A3B18A]/12 text-[#5a6e45]",
    ctaColorClass: "text-[#5a6e45]",
    shadowClass:
      "shadow-[0_4px_24px_rgba(163,177,138,0.18),0_1px_4px_rgba(0,0,0,0.04)]",
    hoverShadowClass:
      "hover:shadow-[0_12px_40px_rgba(163,177,138,0.28),0_2px_8px_rgba(0,0,0,0.06)]",
    dividerClass: "bg-[#A3B18A]/15",
    titleColorClass: "text-gray-900",
    descColorClass: "text-gray-500",
    ptColorClass: "text-gray-700",
  },
  {
    id: 3,
    icon: <DesignIcon />,
    label: "UI/UX",
    title: "UI/UX\nDesign",
    description:
      "We craft interfaces where beauty and function converge — intuitive flows that users love from first touch.",
    points: [
      "Creating intuitive user flows",
      "Balancing aesthetics with usability",
      "Accessibility and inclusivity",
      "Design consistency",
    ],
    cardBgClass: "card-bg-3",
    meshClass: "card-mesh-3",
    glowClass: "card-glow-3",
    accentClass: "card-accent-3",
    borderClass: "border-[#A3B18A]/25",
    hoverBorderClass: "hover:border-[#A3B18A]/55",
    iconWrapClass: "bg-[#A3B18A]/12 text-[#5a6e45] border-[#A3B18A]/20",
    tagClass: "bg-[#A3B18A]/10 text-[#4a5e38] border-[#A3B18A]/20",
    checkClass: "bg-[#A3B18A]/12 text-[#5a6e45]",
    ctaColorClass: "text-[#5a6e45]",
    shadowClass:
      "shadow-[0_4px_24px_rgba(163,177,138,0.18),0_1px_4px_rgba(0,0,0,0.04)]",
    hoverShadowClass:
      "hover:shadow-[0_12px_40px_rgba(163,177,138,0.28),0_2px_8px_rgba(0,0,0,0.06)]",
    dividerClass: "bg-[#A3B18A]/15",
    titleColorClass: "text-gray-900",
    descColorClass: "text-gray-500",
    ptColorClass: "text-gray-700",
  },
  {
    id: 4,
    icon: <IntegrationIcon />,
    label: "Scale",
    title: "Integration &\nScalability",
    description:
      "We architect systems that grow with you — secure integrations, bulletproof data flow, infinite scalability.",
    points: [
      "API integrations",
      "Handling large user traffic",
      "Secure data flow",
      "Future-proof architecture",
    ],
    cardBgClass: "card-bg-4",
    meshClass: "card-mesh-4",
    glowClass: "card-glow-4",
    accentClass: "card-accent-4",
    borderClass: "border-[#C4A137]/40",
    hoverBorderClass: "hover:border-white/60",
    iconWrapClass: "bg-white/20 text-white border-white/25",
    tagClass: "bg-white/20 text-white border-white/25",
    checkClass: "bg-white/20 text-white",
    ctaColorClass: "text-white",
    shadowClass:
      "shadow-[0_4px_28px_rgba(196,161,55,0.35),0_1px_4px_rgba(0,0,0,0.08)]",
    hoverShadowClass:
      "hover:shadow-[0_14px_44px_rgba(196,161,55,0.5),0_2px_8px_rgba(0,0,0,0.1)]",
    dividerClass: "bg-white/20",
    titleColorClass: "text-white",
    descColorClass: "text-white/80",
    ptColorClass: "text-white/90",
  },
];

// ─── ChallengeCard ─────────────────────────────────────────────────────────────

interface ChallengeCardProps {
  challenge: Challenge;
  index: number;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.13,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, scale: 1.015 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative perspective:[1000px]"
    >
      {/* ── Glow — CSS class carries the gradient, no inline style ── */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={`absolute -inset-0.5 rounded-[22px] blur-2xl z-0 ${challenge.glowClass}`}
      />

      {/* ── Card shell ── */}
      <div
        className={[
          "relative z-10 rounded-[20px] border overflow-hidden h-full",
          challenge.cardBgClass,
          "transition-all duration-300",
          challenge.borderClass,
          challenge.hoverBorderClass,
          challenge.shadowClass,
          challenge.hoverShadowClass,
        ].join(" ")}
      >
        {/* Mesh gradient bg — class carries gradient */}
        <div
          className={[
            "absolute inset-0 transition-opacity duration-500",
            challenge.meshClass,
            hovered ? "opacity-100" : "opacity-50",
          ].join(" ")}
        />

        {/* Top accent bar — class carries gradient */}
        <div
          className={[
            "absolute top-0 left-0 right-0 h-0.5 rounded-t-[20px] transition-opacity duration-300",
            challenge.accentClass,
            hovered ? "opacity-100" : "opacity-55",
          ].join(" ")}
        />

        {/* ── Content ── */}
        <div className="relative p-8">
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.4 }}
              className={`p-3 rounded-xl border ${challenge.iconWrapClass}`}
            >
              {challenge.icon}
            </motion.div>

            <span
              className={`font-mono-tag text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full border ${challenge.tagClass}`}
            >
              {challenge.label}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-display text-[23px] font-extrabold mb-2.5 leading-tight whitespace-pre-line tracking-tight ${challenge.titleColorClass}`}
          >
            {challenge.title}
          </h3>

          {/* Description */}
          <p
            className={`font-body text-[14.5px] leading-relaxed mb-6 ${challenge.descColorClass}`}
          >
            {challenge.description}
          </p>

          {/* Divider */}
          <div className={`h-px mb-5 ${challenge.dividerClass}`} />

          {/* Points list — native <ul>/<li> satisfies both axe/structure and axe/aria.
              Animation is applied to an inner <div> so <li> stays a direct child of <ul>. */}
          <ul className="space-y-2.5 list-none p-0 m-0">
            {challenge.points.map((pt: string, i: number) => (
              <li key={i}>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.13 + 0.3 + i * 0.07,
                  }}
                  className="flex items-center gap-2.5"
                >
                  <span
                    className={`shrink-0 p-1 rounded-full flex items-center justify-center ${challenge.checkClass}`}
                  >
                    <CheckIcon />
                  </span>
                  <span
                    className={`font-body text-[13.5px] ${challenge.ptColorClass}`}
                  >
                    {pt}
                  </span>
                </motion.div>
              </li>
            ))}
          </ul>

          {/* Hover CTA */}
          <motion.div
            onClick={() => navigate("/contact")}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
            transition={{ duration: 0.3 }}
            className={`mt-6 flex items-center gap-1.5 cursor-pointer ${challenge.ctaColorClass}`}
          >
            <span className="font-mono-tag text-xs font-bold tracking-wide">
              Let's talk how to solve this
            </span>
            <ArrowIcon />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────

const ChallengesSection: React.FC = () => {
  useInjectedStyles(CARD_STYLES);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const navigate = useNavigate();

  return (
    <section className="challenges-section relative overflow-hidden pt-16 pb-24 md:pt-20 md:pb-28">
      {/* Sage dot-grid texture */}
      <div className="challenges-dotgrid absolute inset-0 pointer-events-none opacity-30" />

      {/* Ambient orbs — static colours expressed as Tailwind arbitrary bg values */}
      <div className="absolute -top-44 -left-44 w-130 h-130 rounded-full blur-[72px] pointer-events-none bg-[rgba(163,177,138,0.25)]" />
      <div className="absolute -bottom-36 -right-32 w-115 h-115 rounded-full blur-[72px] pointer-events-none bg-[rgba(245,225,195,0.55)]" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-75h-75 rounded-full blur-[60px] pointer-events-none bg-[rgba(217,180,120,0.12)]" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-270 mx-auto px-6">
        {/* Heading block */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-18">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 mb-6 px-5 py-2 rounded-full border border-[rgba(163,177,138,0.5)] bg-white/60 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shadow-[0_0_6px_rgba(5,150,105,0.6)]" />
            <span className="font-mono-tag text-[10px] font-bold tracking-[0.14em] uppercase text-gray-500">
              What We Solve
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#244738] mb-6"
          >
            Challenges <span className="text-[#244738]">We Solve</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-base text-slate-700 max-w-3xl mx-auto"
          >
            Building exceptional digital products is rarely straightforward.
            Every project carries its own technical weight and design
            complexity. Our team thrives on turning those obstacles into
            competitive advantages — shipping solutions that are fast,
            beautiful, and built to last.
          </motion.p>

          {/* Separator */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={headingInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="heading-separator h-px w-40 mx-auto mt-8"
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {challenges.map((c: Challenge, i: number) => (
            <ChallengeCard key={c.id} challenge={c} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-gray-600 text-[13.5px] mb-4">
            Every challenge is a chance to build something extraordinary.
          </p>

          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group font-body inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-[13.5px] text-gray-700 border border-[rgba(163,177,138,0.45)] bg-white/55 backdrop-blur-sm cursor-pointer transition-all duration-300 shadow-[0_2px_8px_rgba(163,177,138,0.18)] hover:bg-white/90 hover:border-[rgba(163,177,138,0.8)] hover:text-gray-900 hover:shadow-[0_6px_24px_rgba(163,177,138,0.35)] overflow-hidden"
          >
            <div className="relative overflow-hidden">
              {/* Default text */}
              <p className="text-gray-700 group-hover:-translate-y-6 flex items-center justify-center gap-2 transition-all duration-500">
                See our process <ArrowIcon />
              </p>

              {/* Hover text */}
              <p className="absolute top-full left-0 w-full h-full text-gray-900 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0 flex items-center justify-center gap-1">
                Let's Talk
                <span className="transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-10 group-hover:opacity-0 delay-500 group-hover:delay-500ms">
                  <ArrowIcon />
                </span>
              </p>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengesSection;