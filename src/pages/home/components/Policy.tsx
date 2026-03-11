import { useState, useEffect, useRef } from "react";
import "./Policy.css";
import type { ReactNode } from "react";

/* ─── Types ─────────────────────────────────────────────────────────────────── */
interface NavLink {
  label: string;
  id: string;
}
interface FadeProps {
  children: ReactNode;
  delayClass?: string;
  className?: string;
}
interface GlassCardProps {
  children: ReactNode;
  className?: string;
}
interface SectionTitleProps {
  icon: ReactNode;
  title: string;
  id: string;
}
interface InnerCardProps {
  children: ReactNode;
  className?: string;
}
interface CollectCard {
  icon: ReactNode;
  label: string;
  items: string[];
  tint: "gold" | "olive" | "dark";
}
interface UseCard {
  icon: ReactNode;
  title: string;
  desc: string;
}
interface ProtectCard {
  icon: ReactNode;
  title: string;
  desc: string;
}
interface CookieRow {
  name: string;
  desc: string;
  badge: "Required" | "Optional";
}
interface ThirdParty {
  name: string;
  category: string;
  desc: string;
}
interface ContactItem {
  icon: ReactNode;
  label: string;
  value: string;
}

/* ─── Constants ─────────────────────────────────────────────────────────────── */
const NAV_LINKS: NavLink[] = [
  { label: "Introduction", id: "introduction" },
  { label: "Data We Collect", id: "data-collect" },
  { label: "How We Use It", id: "how-we-use" },
  { label: "Data Protection", id: "data-protection" },
  { label: "Cookies", id: "cookies" },
  { label: "Third-Party", id: "third-party" },
  { label: "Your Rights", id: "your-rights" },
  { label: "Retention", id: "retention" },
  { label: "Policy Updates", id: "policy-updates" },
  { label: "Contact", id: "contact" },
];

/* ─── SVG Icons ──────────────────────────────────────────────────────────────── */
const ICON = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C12 3 4 6.5 4 12.5v4l8 4 8-4v-4C20 6.5 12 3 12 3z" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path strokeLinecap="round" d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <circle cx="12" cy="8" r="4" />
      <path strokeLinecap="round" d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path strokeLinecap="round" d="M8 21h8M12 17v4" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l4-6 4 3 4-7 4 5" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path strokeLinecap="round" d="M2 7l10 7 10-7" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <path strokeLinecap="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <path strokeLinecap="round" d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <rect x="2" y="3" width="20" height="6" rx="1" />
      <rect x="2" y="12" width="20" height="6" rx="1" />
      <circle cx="6" cy="6" r="1" fill="currentColor" />
      <circle cx="6" cy="15" r="1" fill="currentColor" />
    </svg>
  ),
  key: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <circle cx="7" cy="12" r="4" />
      <path strokeLinecap="round" d="M11 12h10M18 9v6" />
    </svg>
  ),
  cookie: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="9" r="1" fill="currentColor" />
      <circle cx="15" cy="13" r="1" fill="currentColor" />
      <circle cx="10" cy="15" r="1" fill="currentColor" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <path strokeLinecap="round" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path strokeLinecap="round" d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 6v6l4 2" />
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path strokeLinecap="round" d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={24} height={24}>
      <path strokeLinecap="round" d="M12 21s-7-6.75-7-11a7 7 0 1 1 14 0c0 4.25-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
};

/* ─── Hooks ──────────────────────────────────────────────────────────────────── */
function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

/* ─── Reusable sub-components ───────────────────────────────────────────────── */
function FadeIn({ children, delayClass = "", className = "" }: FadeProps) {
  const [ref, visible] = useIntersection();
  return (
    <div ref={ref} className={`pp-fade ${visible ? "visible" : ""} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}

function GlassCard({ children, className = "" }: GlassCardProps) {
  return <div className={`pp-glass ${className}`}>{children}</div>;
}

function InnerCard({ children, className = "" }: InnerCardProps) {
  return <div className={`pp-inner-card ${className}`}>{children}</div>;
}

function SectionTitle({ icon, title, id }: SectionTitleProps) {
  return (
    <div className="pp-section-title" id={id}>
      <div className="pp-icon-box pp-icon">{icon}</div>
      <h2>{title}</h2>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────────── */
export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((l) =>
        document.getElementById(l.id),
      ).filter((el): el is HTMLElement => el !== null);
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].getBoundingClientRect().top <= 120) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ── Data ── */
  const collectCards: CollectCard[] = [
    {
      icon: ICON.user,
      label: "Personal Information",
      tint: "gold",
      items: ["Full name", "Email address", "Phone number", "Billing address", "Account credentials"],
    },
    {
      icon: ICON.monitor,
      label: "Technical Data",
      tint: "olive",
      items: ["IP address", "Browser type & version", "Device & OS info", "Time zone & locale", "Referring URLs"],
    },
    {
      icon: ICON.chart,
      label: "Usage Data",
      tint: "dark",
      items: ["Pages visited", "Click & scroll events", "Session duration", "Feature interactions", "Error logs"],
    },
  ];

  const useCards: UseCard[] = [
    { icon: ICON.chart, title: "Service Improvement", desc: "Analyze usage patterns and feedback to continually enhance our features and user experience." },
    { icon: ICON.mail, title: "Customer Communication", desc: "Respond to support requests, send important service updates, and deliver onboarding information." },
    { icon: ICON.shield, title: "Security Monitoring", desc: "Detect, prevent, and investigate fraudulent activities, unauthorized access, and security incidents." },
    { icon: ICON.eye, title: "Website Analytics", desc: "Understand how visitors interact with our site so we can optimize content and performance." },
    { icon: ICON.bell, title: "Marketing Updates", desc: "Share relevant product announcements and offers — always with clear opt-out options available." },
    { icon: ICON.lock, title: "Legal Compliance", desc: "Fulfill our legal obligations and enforce our terms of service where applicable." },
  ];

  const protectCards: ProtectCard[] = [
    { icon: ICON.key, title: "End-to-End Encryption", desc: "All data in transit is protected using TLS 1.3. Data at rest is encrypted using AES-256 industry standards." },
    { icon: ICON.server, title: "Secure Infrastructure", desc: "Our systems are hosted on certified, enterprise-grade cloud infrastructure with 24/7 monitoring." },
    { icon: ICON.shield, title: "Access Control", desc: "Strict role-based access ensures only authorized personnel can interact with sensitive user data." },
    { icon: ICON.lock, title: "Industry Standards", desc: "We align with SOC 2, GDPR, and ISO/IEC 27001 frameworks to maintain rigorous data security posture." },
  ];

  const cookieRows: CookieRow[] = [
    { name: "Analytics Cookies", desc: "Help us understand how visitors navigate our site, which pages perform best, and where improvements are needed.", badge: "Required" },
    { name: "Performance Cookies", desc: "Enable faster load times and smoother interactions by caching key resources and optimizing delivery.", badge: "Optional" },
    { name: "Functional Cookies", desc: "Remember your preferences, language settings, and login state to deliver a personalized experience.", badge: "Optional" },
  ];

  const thirdParties: ThirdParty[] = [
    { name: "Google Analytics", category: "Analytics", desc: "Used for website traffic analysis and behavioral insights. Data is anonymized where possible." },
    { name: "Hosting Providers", category: "Infrastructure", desc: "Enterprise-grade cloud providers ensure 99.9% uptime and geographic data redundancy." },
    { name: "Payment Processors", category: "Transactions", desc: "PCI-DSS compliant payment gateways handle all financial transactions securely." },
  ];

  const userRights: string[] = [
    "Access a copy of all personal data we hold about you at any time.",
    "Request corrections to inaccurate or incomplete personal information.",
    "Request complete deletion of your data subject to applicable legal requirements.",
    "Opt out of marketing communications at any time via unsubscribe links.",
    "Restrict or object to how we process your data in certain circumstances.",
    "Request a portable copy of your data in a machine-readable format.",
    "Withdraw consent for processing activities based on your consent at any time.",
    "Lodge a complaint with your local data protection supervisory authority.",
  ];

  const contactItems: ContactItem[] = [
    { icon: ICON.shield, label: "Company", value: "RPRE Technologies" },
    { icon: ICON.mail, label: "Email", value: "support@rpre.com" },
    { icon: ICON.location, label: "Location", value: "Global Headquarters" },
  ];

  const delayClasses = ["", "delay-60", "delay-80", "delay-120", "delay-160", "delay-200", "delay-240", "delay-280", "delay-320"];

  return (
    <div className="pp-root">
      {/* ── Ambient blobs ── */}
      <div className="pp-blobs" aria-hidden="true">
        <div className="pp-blob1" />
        <div className="pp-blob2" />
        <div className="pp-blob3" />
        <div className="pp-blob-radial" />
      </div>

      {/* ── Full-page two-column layout (sidebar + content) ── */}
      <div className="pp-page-layout">

        {/* ── Sticky Sidebar (spans full page height) ── */}
        <aside className="pp-sidebar">
          {/* Sidebar Hero branding */}
          <div className="pp-sidebar-brand">
            <div className="pp-sidebar-brand-icon">{ICON.shield}</div>
            <div>
              <p className="pp-sidebar-brand-name">RPRE</p>
              <p className="pp-sidebar-brand-sub">Privacy Policy</p>
            </div>
          </div>

          <div className="pp-sidebar-header">
            <p className="pp-sidebar-label">Sections</p>
          </div>
          <nav className="pp-sidebar-nav">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`pp-nav-btn ${activeSection === l.id ? "active" : ""}`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="pp-sidebar-footer">
            <div className="pp-pulse-row">
              <span className="pp-pulse" />
              <span className="pp-sidebar-footer-text">Last updated Jan 2025</span>
            </div>
          </div>
        </aside>

        {/* ── Right column: Hero + Main content ── */}
        <div className="pp-right-col">

          {/* ── Hero ── */}
          <section className="pp-hero">
            <div className="pp-breadcrumb">
              <span>Home</span>
              <span className="pp-breadcrumb-sep">/</span>
              <span className="pp-breadcrumb-active">Privacy Policy</span>
            </div>

            <h1 className="pp-hero-title">
              <span className="pp-hero-title-gold">Privacy</span>{" "}
              <span className="pp-hero-title-ink">Policy</span>
            </h1>

            <p className="pp-hero-sub">
              At <strong>RPRE</strong>, protecting your personal data isn&apos;t
              just a legal obligation — it&apos;s a core part of how we build
              trust. This policy explains what we collect, how we use it, and how
              we keep it safe.
            </p>

            <div className="pp-hero-date">
              <span className="pp-pulse" />
              Last updated: January 2025
            </div>
          </section>

          {/* ── Main content ── */}
          <main className="pp-main">

            {/* 1 — Introduction */}
            <FadeIn>
              <GlassCard>
                <SectionTitle icon={ICON.shield} title="Introduction" id="introduction" />
                <p className="pp-text-body">
                  This Privacy Policy describes how <strong>RPRE</strong> ("we," "us," or "our") collects, uses, and shares information about you
                  when you use our website, products, or services. We are committed to handling your personal data with transparency,
                  integrity, and the utmost care.
                </p>
                <br />
                <p className="pp-text-body">
                  By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy. If you do not
                  agree with any part of this policy, please discontinue use of our services immediately. We encourage you to review this
                  document periodically as it may be updated over time.
                </p>
              </GlassCard>
            </FadeIn>

            {/* 2 — Information We Collect */}
            <FadeIn delayClass="delay-60">
              <GlassCard>
                <SectionTitle icon={ICON.user} title="Information We Collect" id="data-collect" />
                <p className="pp-text-body">We collect various types of information to provide and improve our services.</p>
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {collectCards.map((c, i) => (
                    <FadeIn key={i} delayClass={delayClasses[i + 1]}>
                      <div className={`pp-inner-card pp-collect-${c.tint} rounded-xl p-5 h-full`}>
                        <div className="pp-icon pp-text-gold mb-3">{c.icon}</div>
                        <h3 className="pp-display text-sm font-bold pp-text-ink mb-3">{c.label}</h3>
                        <ul className="space-y-1.5">
                          {c.items.map((it) => (
                            <li key={it} className="pp-dot-item">
                              <span className="pp-dot" />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>

            {/* 3 — How We Use */}
            <FadeIn delayClass="delay-80">
              <GlassCard>
                <SectionTitle icon={ICON.eye} title="How We Use Your Information" id="how-we-use" />
                <p className="pp-text-body mb-6">The data we collect is used responsibly and only for purposes that serve you or maintain the integrity of our platform.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {useCards.map((item, i) => (
                    <FadeIn key={i} delayClass={delayClasses[i + 1]}>
                      <InnerCard className="p-5">
                        <div className="pp-icon-btn pp-icon mb-3">{item.icon}</div>
                        <h3 className="pp-display text-sm font-bold pp-text-ink mb-1.5">{item.title}</h3>
                        <p className="pp-text-xs">{item.desc}</p>
                      </InnerCard>
                    </FadeIn>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>

            {/* 4 — Data Protection */}
            <FadeIn delayClass="delay-60">
              <GlassCard>
                <SectionTitle icon={ICON.lock} title="Data Protection" id="data-protection" />
                <p className="pp-text-body mb-6">We implement a multi-layered security approach to safeguard your information from unauthorized access, disclosure, alteration, or destruction.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {protectCards.map((item, i) => (
                    <FadeIn key={i} delayClass={delayClasses[i + 1]}>
                      <InnerCard className="flex gap-4 p-5">
                        <div className="pp-icon-box-olive pp-icon">{item.icon}</div>
                        <div>
                          <h3 className="pp-display text-sm font-bold pp-text-ink mb-1">{item.title}</h3>
                          <p className="pp-text-xs">{item.desc}</p>
                        </div>
                      </InnerCard>
                    </FadeIn>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>

            {/* 5 — Cookies */}
            <FadeIn delayClass="delay-60">
              <GlassCard>
                <SectionTitle icon={ICON.cookie} title="Cookies &amp; Tracking" id="cookies" />
                <p className="pp-text-body mb-6">We use cookies and similar tracking technologies to enhance your experience. You may control or disable cookies through your browser settings at any time.</p>
                <div className="space-y-3">
                  {cookieRows.map((row, i) => (
                    <FadeIn key={i} delayClass={delayClasses[i + 1]}>
                      <InnerCard className="flex items-start gap-4 p-4">
                        <div className="pp-text-gold mt-0.5">{ICON.cookie}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="pp-display text-sm font-bold pp-text-ink">{row.name}</h3>
                            <span className={row.badge === "Required" ? "pp-badge-required" : "pp-badge-optional"}>{row.badge}</span>
                          </div>
                          <p className="pp-text-xs">{row.desc}</p>
                        </div>
                      </InnerCard>
                    </FadeIn>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>

            {/* 6 — Third-Party */}
            <FadeIn delayClass="delay-60">
              <GlassCard>
                <SectionTitle icon={ICON.link} title="Third-Party Services" id="third-party" />
                <p className="pp-text-body mb-6">We partner with trusted third-party providers to deliver our services effectively. These providers may collect or process data on our behalf under strict data processing agreements.</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {thirdParties.map((p, i) => (
                    <FadeIn key={i} delayClass={delayClasses[i + 1]}>
                      <InnerCard className="p-5">
                        <span className="pp-badge-category">{p.category}</span>
                        <h3 className="pp-display text-sm font-bold pp-text-ink mb-2">{p.name}</h3>
                        <p className="pp-text-xs">{p.desc}</p>
                      </InnerCard>
                    </FadeIn>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>

            {/* 7 — User Rights */}
            <FadeIn delayClass="delay-60">
              <GlassCard>
                <SectionTitle icon={ICON.user} title="Your Rights" id="your-rights" />
                <p className="pp-text-body mb-6">Depending on your jurisdiction, you have specific rights regarding your personal data. RPRE is committed to honoring these rights promptly and without unnecessary barriers.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {userRights.map((right, i) => (
                    <FadeIn key={i} delayClass={delayClasses[Math.min(i + 1, 8)]}>
                      <div className="pp-check-item">
                        <span className="pp-check-icon">{ICON.check}</span>
                        <p className="pp-text-xs">{right}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>

            {/* 8 — Data Retention */}
            <FadeIn delayClass="delay-60">
              <GlassCard>
                <SectionTitle icon={ICON.clock} title="Data Retention" id="retention" />
                <div className="flex gap-5 items-start">
                  <div className="pp-icon-box-lg">{ICON.clock}</div>
                  <div className="space-y-3">
                    <p className="pp-text-body">
                      We retain personal data only for as long as necessary to fulfill the purposes described in this policy, or as
                      required by applicable law. Account information is retained for the duration of your relationship with RPRE, plus a
                      period of up to <strong>36 months</strong> after account closure to meet legal and audit requirements.
                    </p>
                    <p className="pp-text-body">
                      Technical and usage data is generally stored for <strong>12–24 months</strong> before being anonymized or
                      deleted. When data is no longer required, we ensure it is securely purged from our systems and any affiliated processors.
                    </p>
                    <p className="pp-text-body">
                      You may request early deletion of your data at any time (see{" "}
                      <button className="pp-link" onClick={() => scrollTo("your-rights")}>Your Rights</button>
                      ), subject to any overriding legal obligations.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            {/* 9 — Policy Updates */}
            <FadeIn delayClass="delay-60">
              <GlassCard>
                <SectionTitle icon={ICON.refresh} title="Policy Updates" id="policy-updates" />
                <div className="flex gap-5 items-start">
                  <div className="pp-icon-box-lg-olive">{ICON.refresh}</div>
                  <div className="space-y-3">
                    <p className="pp-text-body">
                      RPRE may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or new product
                      features. When material changes are made, we will notify you via email or by displaying a prominent notice on our website
                      at least <strong>14 days</strong> before the changes take effect.
                    </p>
                    <p className="pp-text-body">
                      The date at the top of this document reflects when it was last revised. We encourage you to review this policy
                      regularly. Your continued use of our services after any update constitutes acceptance of the revised policy.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            {/* 10 — Contact */}
            <FadeIn delayClass="delay-60">
              <div className="pp-contact-wrap" id="contact">
                <div className="pp-contact-glow" aria-hidden="true" />
                <div className="pp-contact-body">
                  <div className="pp-section-title">
                    <div className="pp-icon-box">{ICON.mail}</div>
                    <h2 className="pp-display font-bold pp-gradient-text">Contact Us</h2>
                  </div>

                  <p className="pp-text-body mb-8">
                    Have questions about this Privacy Policy or how we handle your data? Our team is ready to help. Reach out to us and
                    we&apos;ll respond within <strong>2 business days</strong>.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {contactItems.map((item, i) => (
                      <div key={i} className="pp-contact-info-card">
                        <span className="pp-text-gold mt-0.5">{item.icon}</span>
                        <div>
                          <p className="pp-text-olive-sm mb-0.5">{item.label}</p>
                          <p className="text-sm font-medium pp-text-ink">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pp-contact-divider">
                    <p className="pp-text-xs pp-text-olive">
                      For privacy-specific requests, please include{" "}
                      <span className="pp-text-gold">&ldquo;Privacy Request&rdquo;</span>{" "}
                      in your subject line for faster processing.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

          </main>
        </div>
      </div>
    </div>
  );
}