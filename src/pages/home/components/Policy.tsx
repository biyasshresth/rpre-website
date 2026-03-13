import { useEffect } from "react";
import "./Policy.css";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pp-root mt-5">
      <div className="pp-blobs" aria-hidden="true">
        <div className="pp-blob1" />
        <div className="pp-blob2" />
        <div className="pp-blob3" />
        <div className="pp-blob-radial" />
      </div>

      <div className="pp-page-layout px-6">
        <div className="pp-right-col">
          <main className="pp-main">
            <div className="pp-legal-doc">
              <div className="pp-doc-hero">
                <div className="pp-doc-hero-bar" aria-hidden="true" />

                <div className="pp-doc-hero-body">
                  <div className="pp-doc-hero-badge">
                    <span className="px-1">RPRE Technologies</span>
                  </div>

                  <h1 className="pp-doc-hero-title">
                    <span className="pp-doc-hero-title-gold">Privacy</span>{" "}
                    <span className="pp-doc-hero-title-ink">Policy</span>
                  </h1>

                  <p className="pp-doc-hero-sub">
                    At <strong>RPRE</strong>, protecting your personal data
                    isn&apos;t just a legal obligation — it&apos;s a core part
                    of how we build trust. This policy explains what we collect,
                    how we use it, and how we keep it safe.
                  </p>

                  <div className="pp-doc-hero-meta">
                    <div className="pp-doc-hero-meta-item">
                      <span className="pp-doc-hero-meta-label">
                        Last Updated
                      </span>
                      <span className="pp-doc-hero-meta-value">
                        <span className="pp-pulse pp-pulse--meta" />
                        January 2025
                      </span>
                    </div>
                    <div
                      className="pp-doc-hero-meta-divider"
                      aria-hidden="true"
                    />
                    <div className="pp-doc-hero-meta-item">
                      <span className="pp-doc-hero-meta-label">
                        Effective From
                      </span>
                      <span className="pp-doc-hero-meta-value">
                        January 1, 2025
                      </span>
                    </div>
                    <div
                      className="pp-doc-hero-meta-divider"
                      aria-hidden="true"
                    />
                    <div className="pp-doc-hero-meta-item">
                      <span className="pp-doc-hero-meta-label">
                        Jurisdiction
                      </span>
                      <span className="pp-doc-hero-meta-value">Global</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="pp-doc-divider" />
              <section id="introduction" className="pp-doc-section">
                <h2 className="pp-doc-h2">Introduction</h2>
                <p className="pp-doc-p">
                  This Privacy Policy describes how{" "}
                  <strong>RPRE Technologies</strong> ("we," "us," or "our")
                  collects, uses, and shares information about you when you use
                  our website, products, or services. We are committed to
                  handling your personal data with transparency, integrity, and
                  the utmost care.
                </p>
                <p className="pp-doc-p">
                  By accessing or using our services, you acknowledge that you
                  have read and understood this Privacy Policy. If you do not
                  agree with any part of this policy, please discontinue use of
                  our services immediately. We encourage you to review this
                  document periodically as it may be updated over time.
                </p>
              </section>

              <hr className="pp-doc-divider" />
              <section id="data-collect" className="pp-doc-section">
                <h2 className="pp-doc-h2">Information We Collect</h2>
                <p className="pp-doc-p">
                  We collect various types of information in connection with the
                  services we provide — including information you provide
                  directly, information collected automatically, and information
                  obtained from third parties.
                </p>

                <h3 className="pp-doc-h3">Personal Information</h3>
                <p className="pp-doc-p">
                  When you register an account or interact with our services, we
                  may collect:
                </p>
                <ul className="pp-doc-list">
                  <li>Full name and display name</li>
                  <li>Email address and phone number</li>
                  <li>Billing address and payment details</li>
                  <li>Account credentials and authentication data</li>
                </ul>

                <h3 className="pp-doc-h3">Technical Data</h3>
                <p className="pp-doc-p">
                  When you visit our website or use our applications, we
                  automatically collect:
                </p>
                <ul className="pp-doc-list">
                  <li>IP address and approximate geographic location</li>
                  <li>Browser type, version, and language preferences</li>
                  <li>
                    Device type, operating system, and hardware identifiers
                  </li>
                  <li>Time zone settings and locale preferences</li>
                  <li>Referring URLs and navigation paths</li>
                </ul>

                <h3 className="pp-doc-h3">Usage Data</h3>
                <p className="pp-doc-p">
                  We collect information about how you interact with our
                  services, including:
                </p>
                <ul className="pp-doc-list">
                  <li>Pages visited and time spent on each page</li>
                  <li>Click, scroll, and interaction events</li>
                  <li>Session duration and frequency of visits</li>
                  <li>Feature usage patterns and in-app behavior</li>
                  <li>Error logs and diagnostic information</li>
                </ul>
              </section>

              <hr className="pp-doc-divider" />
              <section id="how-we-use" className="pp-doc-section">
                <h2 className="pp-doc-h2">How We Use Your Information</h2>
                <p className="pp-doc-p">
                  The data we collect is used responsibly and only for purposes
                  that serve you or maintain the integrity of our platform. We
                  process personal data on the following lawful bases:
                  performance of a contract, legitimate interests, legal
                  obligation, and — where required — your explicit consent.
                </p>

                <h3 className="pp-doc-h3">
                  Service Delivery &amp; Improvement
                </h3>
                <p className="pp-doc-p">
                  We use your data to operate and deliver our services, analyze
                  usage patterns and feedback to continually enhance our
                  features, and optimize the overall user experience.
                </p>

                <h3 className="pp-doc-h3">Customer Communication</h3>
                <p className="pp-doc-p">
                  We use contact information to respond to support requests,
                  send important service updates, deliver transactional
                  notifications, and provide onboarding guidance and
                  documentation.
                </p>

                <h3 className="pp-doc-h3">Security &amp; Fraud Prevention</h3>
                <p className="pp-doc-p">
                  We process technical and usage data to detect, prevent, and
                  investigate fraudulent activities, unauthorized access
                  attempts, abuse of our systems, and other security incidents.
                </p>

                <h3 className="pp-doc-h3">Analytics &amp; Performance</h3>
                <p className="pp-doc-p">
                  Aggregated and anonymized usage data helps us understand which
                  features are most valued and where improvements are needed
                  across our platform.
                </p>

                <h3 className="pp-doc-h3">Marketing &amp; Communications</h3>
                <p className="pp-doc-p">
                  Where you have consented or where we have a legitimate
                  interest, we may share relevant product announcements and
                  promotional offers. Every marketing communication includes a
                  clear opt-out mechanism.
                </p>

                <h3 className="pp-doc-h3">Legal Compliance</h3>
                <p className="pp-doc-p">
                  We may process your data to fulfill legal obligations, respond
                  to lawful requests from authorities, enforce our Terms of
                  Service, and protect the rights, property, or safety of RPRE
                  and our users.
                </p>
              </section>

              <hr className="pp-doc-divider" />
              <section id="data-protection" className="pp-doc-section">
                <h2 className="pp-doc-h2">Data Protection</h2>
                <p className="pp-doc-p">
                  We implement a multi-layered security approach to safeguard
                  your information from unauthorized access, disclosure,
                  alteration, or destruction. Our security measures encompass
                  both technical controls and organizational practices.
                </p>

                <h3 className="pp-doc-h3">Encryption</h3>
                <p className="pp-doc-p">
                  All data in transit is protected using TLS 1.3. Data at rest
                  is encrypted using AES-256 industry standards. Sensitive
                  fields such as passwords are hashed using bcrypt with
                  appropriate cost factors.
                </p>

                <h3 className="pp-doc-h3">Secure Infrastructure</h3>
                <p className="pp-doc-p">
                  Our systems run on certified, enterprise-grade cloud
                  infrastructure with 24/7 monitoring, automated threat
                  detection, regular penetration testing, and independent
                  security audits.
                </p>

                <h3 className="pp-doc-h3">Access Control</h3>
                <p className="pp-doc-p">
                  Strict role-based access controls ensure only authorized
                  personnel can interact with sensitive user data. All access is
                  logged and subject to the principle of least privilege.
                  Multi-factor authentication is required for all administrative
                  access.
                </p>

                <h3 className="pp-doc-h3">Compliance Frameworks</h3>
                <p className="pp-doc-p">
                  We align our security practices with SOC 2 Type II, GDPR, and
                  ISO/IEC 27001 frameworks to maintain a rigorous and
                  continuously improving data security posture.
                </p>
              </section>

              <hr className="pp-doc-divider" />
              <section id="cookies" className="pp-doc-section">
                <h2 className="pp-doc-h2">
                  Cookies &amp; Tracking Technologies
                </h2>
                <p className="pp-doc-p">
                  We use cookies and similar tracking technologies to enhance
                  your experience, analyze usage, and support our marketing
                  efforts. You may control or disable cookies through your
                  browser settings at any time, though this may affect the
                  functionality of our services.
                </p>

                <h3 className="pp-doc-h3">
                  Analytics Cookies&nbsp;
                  <span className="pp-doc-badge-required">Required</span>
                </h3>
                <p className="pp-doc-p">
                  These cookies help us understand how visitors navigate our
                  site, which pages perform best, and where usability
                  improvements are needed. They collect aggregate, anonymized
                  data.
                </p>

                <h3 className="pp-doc-h3">
                  Performance Cookies&nbsp;
                  <span className="pp-doc-badge-optional">Optional</span>
                </h3>
                <p className="pp-doc-p">
                  Performance cookies enable faster load times and smoother
                  interactions by caching key resources and optimizing content
                  delivery. You may disable these without affecting core
                  functionality.
                </p>

                <h3 className="pp-doc-h3">
                  Functional Cookies&nbsp;
                  <span className="pp-doc-badge-optional">Optional</span>
                </h3>
                <p className="pp-doc-p">
                  Functional cookies remember your preferences, language
                  settings, and login state to deliver a personalized and
                  seamless experience across sessions.
                </p>
              </section>

              <hr className="pp-doc-divider" />

              <section id="third-party" className="pp-doc-section">
                <h2 className="pp-doc-h2">Third-Party Services</h2>
                <p className="pp-doc-p">
                  We partner with trusted third-party providers to deliver our
                  services effectively. These providers are bound by strict data
                  processing agreements requiring them to handle your
                  information in accordance with applicable law and our privacy
                  standards.
                </p>

                <h3 className="pp-doc-h3">Analytics Providers</h3>
                <p className="pp-doc-p">
                  We use Google Analytics for website traffic analysis and
                  behavioral insights. IP addresses are anonymized where
                  possible. You may opt out via the Google Analytics Opt-out
                  Browser Add-on.
                </p>

                <h3 className="pp-doc-h3">Infrastructure &amp; Hosting</h3>
                <p className="pp-doc-p">
                  Our services are hosted on enterprise-grade cloud platforms
                  providing 99.9% uptime guarantees, geographic data redundancy,
                  automated backups, and physical security controls meeting
                  industry standards.
                </p>

                <h3 className="pp-doc-h3">Payment Processing</h3>
                <p className="pp-doc-p">
                  All financial transactions are handled by PCI-DSS Level 1
                  compliant payment processors. RPRE does not store full credit
                  card numbers or CVV data on its own systems.
                </p>

                <p className="pp-doc-p">
                  We do not sell your personal data to third parties for their
                  own marketing purposes. Any third-party sharing is limited to
                  what is necessary to provide the services you have requested.
                </p>
              </section>

              <hr className="pp-doc-divider" />

              <section id="your-rights" className="pp-doc-section">
                <h2 className="pp-doc-h2">Your Rights</h2>
                <p className="pp-doc-p">
                  Depending on your jurisdiction — including the European
                  Economic Area, United Kingdom, and California — you have
                  specific rights regarding your personal data. RPRE is
                  committed to honoring these rights promptly and without
                  unnecessary barriers.
                </p>

                <ul className="pp-doc-list">
                  <li>
                    <strong>Right of Access:</strong> Request a copy of all
                    personal data we hold about you.
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Request corrections
                    to inaccurate or incomplete information.
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> Request deletion of your
                    data, subject to legal requirements.
                  </li>
                  <li>
                    <strong>Right to Opt Out:</strong> Opt out of marketing
                    communications at any time.
                  </li>
                  <li>
                    <strong>Right to Restriction:</strong> Request that we
                    restrict how we process your data.
                  </li>
                  <li>
                    <strong>Right to Portability:</strong> Receive your data in
                    a machine-readable format.
                  </li>
                  <li>
                    <strong>Right to Withdraw Consent:</strong> Withdraw consent
                    for processing at any time.
                  </li>
                  <li>
                    <strong>Right to Lodge a Complaint:</strong> Contact your
                    local data protection supervisory authority.
                  </li>
                </ul>

                <p className="pp-doc-p">
                  To exercise any of these rights, please contact us at{" "}
                  <strong>support@rpre.com</strong> with the subject line
                  "Privacy Request." We will respond within 30 days, or sooner
                  where required by applicable law.
                </p>
              </section>

              <hr className="pp-doc-divider" />
              <section id="retention" className="pp-doc-section">
                <h2 className="pp-doc-h2">Data Retention</h2>
                <p className="pp-doc-p">
                  We retain personal data only for as long as necessary to
                  fulfill the purposes described in this policy, or as required
                  by applicable law. Retention periods are determined by the
                  nature of the data and the legal or operational requirements
                  that apply to it.
                </p>
                <p className="pp-doc-p">
                  Account information is retained for the duration of your
                  relationship with RPRE, plus up to <strong>36 months</strong>{" "}
                  after account closure to meet legal, audit, and dispute
                  resolution requirements.
                </p>
                <p className="pp-doc-p">
                  Technical and usage data is generally stored for{" "}
                  <strong>12–24 months</strong> before being anonymized or
                  deleted. Anonymized data may be retained indefinitely for
                  statistical and research purposes.
                </p>
                <p className="pp-doc-p">
                  You may request early deletion of your data at any time (see{" "}
                  <button
                    className="pp-doc-link"
                    onClick={() => scrollTo("your-rights")}
                  >
                    Your Rights
                  </button>
                  ), subject to any overriding legal obligations.
                </p>
              </section>

              <hr className="pp-doc-divider" />

              <section id="policy-updates" className="pp-doc-section">
                <h2 className="pp-doc-h2">Policy Updates</h2>
                <p className="pp-doc-p">
                  RPRE may update this Privacy Policy periodically to reflect
                  changes in our practices, legal requirements, or new product
                  features. We review this policy at least annually and whenever
                  significant changes to our data practices occur.
                </p>
                <p className="pp-doc-p">
                  When material changes are made, we will notify you via email
                  or by displaying a prominent notice on our website at least{" "}
                  <strong>14 days</strong> before the changes take effect.
                </p>
                <p className="pp-doc-p">
                  Your continued use of our services after any update
                  constitutes your acceptance of the revised policy.
                </p>
              </section>

              <hr className="pp-doc-divider" />

              <section id="contact" className="pp-doc-section">
                <h2 className="pp-doc-h2">Contact Us</h2>
                <p className="pp-doc-p">
                  Have questions about this Privacy Policy or how we handle your
                  data? Our privacy team is ready to assist. We will respond
                  within <strong>2 business days</strong>. Please include{" "}
                  <strong>"Privacy Request"</strong> in your subject line for
                  expedited handling of privacy-specific requests.
                </p>

                <div className="pp-doc-contact-grid">
                  <div className="pp-doc-contact-item">
                    <span className="pp-doc-contact-label">Company</span>
                    <span className="pp-doc-contact-value">
                      RPRE Technologies
                    </span>
                  </div>
                  <div className="pp-doc-contact-item">
                    <span className="pp-doc-contact-label">Email</span>
                    <span className="pp-doc-contact-value">
                      support@rpre.com
                    </span>
                  </div>
                  <div className="pp-doc-contact-item">
                    <span className="pp-doc-contact-label">Location</span>
                    <span className="pp-doc-contact-value">
                      Global Headquarters
                    </span>
                  </div>
                </div>
              </section>
            </div>
            {/* /pp-legal-doc */}
          </main>
        </div>
        {/* /pp-right-col */}
      </div>
      {/* /pp-page-layout */}
    </div> /* /pp-root */
  );
}