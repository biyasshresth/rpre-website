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
                        April 08, 2026
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
                        April 08, 2026
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
                  This Privacy Notice for <strong> RPRE TECH STUDIO</strong>{" "}
                  ("we," "us," or "our") describes how and why we might access,
                  collect, store, use, and/or share ("process") your personal
                  information when you use our services ("Services"), including
                  when you:
                  <strong> *</strong> Visit our website at rpretechstudio.com or
                  any website of ours that links to this Privacy Notice
                </p>
                <p className="pp-doc-p">
                  <strong> *</strong> Engage with us in other related ways,
                  including any marketing or events Questions or
                  concerns? Reading this Privacy Notice will help you understand
                  your privacy rights and choices. We are responsible for making
                  decisions about how your personal information is processed. If
                  you do not agree with our policies and practices, please do
                  not use our Services. If you still have any questions or
                  concerns, please contact us at rpretechstudio.com.
                </p>
              </section>

              <hr className="pp-doc-divider" />
              <section id="data-collect" className="pp-doc-section">
                <h2 className="pp-doc-h2">SUMMARY OF KEY POINTS</h2>
                <p className="pp-doc-p">
                  This summary provides key points from our Privacy Notice, but
                  you can find out more details about any of these topics by
                  clicking the link following each key point or by using
                  our table of contents below to find the section you are
                  looking for.
                </p>
                <p className="pp-doc-p">
                  What personal information do we process? When you visit, use,
                  or navigate our Services, we may process personal information
                  depending on how you interact with us and the Services, the
                  choices you make, and the products and features you use. Learn
                  more about personal information you disclose to us.
                </p>
                <p className="pp-doc-p">
                  Do we process any sensitive personal information? Some of the
                  information may be considered "special" or "sensitive" in
                  certain jurisdictions, for example your racial or ethnic
                  origins, sexual orientation, and religious beliefs. We do not
                  process sensitive personal information.
                </p>

                <p className="pp-doc-p">
                  Do we collect any information from third parties? We do not
                  collect any information from third parties.
                </p>
                <p className="pp-doc-p">
                  How do we process your information? We process your
                  information to provide, improve, and administer our Services,
                  communicate with you, for security and fraud prevention, and
                  to comply with law. We may also process your information for
                  other purposes with your consent. We process your information
                  only when we have a valid legal reason to do so. Learn more
                  about how we process your information.
                </p>
                <p className="pp-doc-p">
                  In what situations and with which parties do we share personal
                  information? We may share information in specific situations
                  and with specific third parties. Learn more about when and
                  with whom we share your personal information.
                </p>
                <p className="pp-doc-p">
                  Do we collect any information from third parties? We do not
                  collect any information from third parties.
                </p>

                <p className="pp-doc-p">
                  How do we keep your information safe? We have
                  adequate organizational and technical processes and procedures
                  in place to protect your personal information. However, no
                  electronic transmission over the internet or information
                  storage technology can be guaranteed to be 100% secure, so we
                  cannot promise or guarantee that hackers, cybercriminals, or
                  other unauthorized third parties will not be able to defeat
                  our security and improperly collect, access, steal, or modify
                  your information. Learn more about how we keep your
                  information safe.
                </p>
                <p className="pp-doc-p">
                  What are your rights? Depending on where you are located
                  geographically, the applicable privacy law may mean you have
                  certain rights regarding your personal information. Learn more
                  about your privacy rights.
                </p>
                <p className="pp-doc-p">
                  How do you exercise your rights? The easiest way to exercise
                  your rights is by submitting a data subject access request, or
                  by contacting us. We will consider and act upon any request in
                  accordance with applicable data protection laws.
                </p>
                <p className="pp-doc-p">
                  Want to learn more about what we do with any information we
                  collect? Review the Privacy Notice in full.
                </p>
                <br />
                <hr className="pp-doc-divider" />
                <h2 className="pp-doc-h2">TABLE OF CONTENTS</h2>
                <p className="pp-doc-p">
                  We collect information about how you interact with our
                  services, including:
                </p>
                <ul className="pp-doc-list">
                  <li>What Information Do We Collect?</li>
                  <li>How Do We Process Your Information?</li>
                  <li>
                    {" "}
                    When And With Whom Do We Share Your Personal Information?
                  </li>
                  <li>WHat Is Our Stance Of Third-Party Websites?</li>
                  <li>Do We Use Cookies And Other Tracking Technologies?</li>
                  <li>How Long Do We Keep Your Information?</li>

                  <li> How Do We Keep Your Information Safe?</li>
                  <li> What Are Your Privacy Rights?</li>
                  <li>Controls For Do-Not-Track Features?</li>
                  <li>DO We Make Updates To This Notice?</li>
                </ul>
              </section>

              <hr className="pp-doc-divider" />
              <section id="how-we-use" className="pp-doc-section">
                <h2 className="pp-doc-h2">
                  {" "}
                  1 . WHAT INFORMATION DO WE COLLECT?
                </h2>
                <p className="pp-doc-p">
                  The data we collect is used responsibly and only for purposes
                  that serve you or maintain the integrity of our platform.
                  Personal information you disclose to us, <br /> In Short: We
                  collect personal information that you provide to us.
                </p>

                <p className="pp-doc-p">
                  We collect personal information that you voluntarily provide
                  to us when you express an interest in obtaining information
                  about us or our products and Services, when you participate in
                  activities on the Services, or otherwise when you contact us.
                </p>

                <p className="pp-doc-p">
                  Sensitive Information. We do not process sensitive
                  information.
                </p>
                <p className="pp-doc-p">
                  All personal information that you provide to us must be true,
                  complete, and accurate, and you must notify us of any changes
                  to such personal information.
                </p>

                <hr className="pp-doc-divider" />
                <h2 className="pp-doc-h2">
                  2. HOW DO WE PROCESS YOUR INFORMATION?
                </h2>
                <p className="pp-doc-p">
                  In Short: We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your consent.
                </p>

                <p className="pp-doc-p">
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services, including:
                </p>

                <h3 className="pp-doc-h3">
                  * To request feedback and process your information when
                  necessary to request feedback and to contact you about your
                  our Services.
                </h3>

                <h3 className="pp-doc-h3">
                  * To post testimonials. We post testimonials on our Services
                  that may contain personal information.
                </h3>
                <br />
                <hr className="pp-doc-divider" />
                <h2 className="pp-doc-h2">
                  3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </h2>
                <p className="pp-doc-p">
                  In Short: We may share information in specific situations
                  described in this section and/or with the following third
                  parties.
                </p>

                <h3 className="pp-doc-h3">
                  We may need to share your personal information in the
                  following situations:
                </h3>
                <p className="pp-doc-p">
                  <strong> * </strong>Business Transfers. We may share or
                  transfer your information in connection with, or during
                  negotiations of, any merger, sale of company assets,
                  financing, or acquisition of all or a portion of our business
                  to another company.
                </p>
                <p className="pp-doc-p">
                  <strong> * </strong> When we use Google Maps Platform APIs. We
                  may share your information with certain Google Maps Platform
                  APIs (e.g., Google Maps API, Places API). We use certain
                  Google Maps Platform APIs to retrieve certain information when
                  you make location-specific requests. This includes: and other
                  similar information. A full list of what we use information
                  for can be found in this section and in the previous section
                  titled "HOW DO WE PROCESS YOUR INFORMATION?" Google Maps uses
                  GPS, Wi-Fi, and cell towers to estimate your location. GPS is
                  accurate to about 20 meters, while Wi-Fi and cell towers help
                  improve accuracy when GPS signals are weak, like indoors. This
                  data helps Google Maps provide directions, but it is not
                  always perfectly precise. You may revoke your consent anytime
                  by contacting us at the contact details provided at the end of
                  this document. The Google Maps Platform APIs that we use store
                  and access cookies and other information on your devices. If
                  you are a user currently in the European Economic Area (EU
                  countries, Iceland, Liechtenstein, and Norway) or the United
                  Kingdom, please take a look at our Cookie Notice.
                </p>
                <p className="pp-doc-p">
                  <strong> * </strong> Affiliates. We may share your information
                  with our affiliates, in which case we will require those
                  affiliates to honor this Privacy Notice. Affiliates include
                  our parent company and any subsidiaries, joint venture
                  partners, or other companies that we control or that are under
                  common control with us.
                </p>
                <p className="pp-doc-p">
                  <strong> * </strong>Business Partners. We may share your
                  information with our business partners to offer you certain
                  products, services, or promotions.
                </p>
              </section>
              <br />

              <hr className="pp-doc-divider" />
              <section id="data-protection" className="pp-doc-section">
                <h2 className="pp-doc-h2">
                  4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                </h2>
                <p className="pp-doc-p">
                  In Short: We are not responsible for the safety of any
                  information that you share with third parties that we may link
                  to or who advertise on our Services, but are not affiliated
                  with, our Services.
                </p>
                <p className="pp-doc-p">
                  The Services may link to third-party websites, online
                  services, or mobile applications and/or contain advertisements
                  from third parties that are not affiliated with us and which
                  may link to other websites, services, or applications.
                  Accordingly, we do not make any guarantee regarding any such
                  third parties, and we will not be liable for any loss or
                  damage caused by the use of such third-party websites,
                  services, or applications. The inclusion of a link towards a
                  third-party website, service, or application does not imply an
                  endorsement by us. We cannot guarantee the safety and privacy
                  of data you provide to any third-party websites. Any data
                  collected by third parties is not covered by this Privacy
                  Notice. We are not responsible for the content or privacy and
                  security practices and policies of any third parties,
                  including other websites, services, or applications that may
                  be linked to or from the Services. You should review the
                  policies of such third parties and contact them directly to
                  respond to your questions.
                </p>
              </section>
              <br />
              <hr className="pp-doc-divider" />
              <section id="cookies" className="pp-doc-section">
                <h2 className="pp-doc-h2">
                  5. DO WE USE COOKIES &amp; OTHER TRACKING TECHNOLOGIES?
                </h2>
                <p className="pp-doc-p">
                  We use cookies and similar tracking technologies to enhance
                  your experience, analyze usage, and support our marketing
                  efforts. You may control or disable cookies through your
                  browser settings at any time, though this may affect the
                  functionality of our services. In Short: We may use cookies
                  and other tracking technologies to collect and store your
                  information.
                </p>

                <h3 className="pp-doc-h3">
                  Analytics Cookies&nbsp;
                  <span className="pp-doc-badge-required">Required</span>
                </h3>
                <p className="pp-doc-p">
                  Specific information about how we use such technologies and
                  how you can refuse certain cookies is set out in our Cookie
                  Notice. Google Analytics We may share your information with
                  Google Analytics to track and analyze the use of the
                  Services. To opt out of being tracked by Google Analytics
                  across the Services,
                  visit https://tools.google.com/dlpage/gaoptout. For more
                  information on the privacy practices of Google, please visit
                  the Google Privacy & Terms page.
                </p>

                <h3 className="pp-doc-h3">
                  Performance Cookies&nbsp;
                  <span className="pp-doc-badge-optional">Optional</span>
                </h3>
                <p className="pp-doc-p">
                  We also permit third parties and service providers to use
                  online tracking technologies on our Services for analytics and
                  advertising, including to help manage and display
                  advertisements, to tailor advertisements to your interests, or
                  to send abandoned shopping cart reminders (depending on your
                  communication preferences). The third parties and service
                  providers use their technology to provide advertising about
                  products and services tailored to your interests which may
                  appear either on our Services or on other websites.
                </p>

                <h3 className="pp-doc-h3">
                  Functional Cookies&nbsp;
                  <span className="pp-doc-badge-optional">Optional</span>
                </h3>
                <p className="pp-doc-p">
                  We may use cookies and similar tracking technologies (like web
                  beacons and pixels) to gather information when you interact
                  with our Services. Some online tracking technologies help us
                  maintain the security of our Services, prevent crashes, fix
                  bugs, save your preferences, and assist with basic site
                  functions.
                </p>
              </section>
              <br />
              <hr className="pp-doc-divider" />

              <section id="third-party" className="pp-doc-section">
                <h2 className="pp-doc-h2">
                  6. HOW LONG DO WE KEEP YOUR INFORMATION?
                </h2>
                <p className="pp-doc-p">
                  In Short: We keep your information for as long as necessary
                  to fulfill the purposes outlined in this Privacy Notice unless
                  otherwise required by law.
                  <br />
                  We will only keep your personal information for as long as it
                  is necessary for the purposes set out in this Privacy Notice,
                  unless a longer retention period is required or permitted by
                  law (such as tax, accounting, or other legal requirements).
                </p>

                <p className="pp-doc-p">
                  When we have no ongoing legitimate business need to process
                  your personal information, we will either delete
                  or anonymize such information, or, if this is not possible
                  (for example, because your personal information has been
                  stored in backup archives), then we will securely store your
                  personal information and isolate it from any further
                  processing until deletion is possible.
                  <br />
                </p>

                <h3 className="pp-doc-h3">
                  Delation &amp; Removing Informations
                </h3>
                <p className="pp-doc-p">
                  When we have no ongoing legitimate business need to process
                  your personal information, we will either delete
                  or anonymize such information, or, if this is not possible
                  (for example, because your personal information has been
                  stored in backup archives), then we will securely store your
                  personal information and isolate it from any further
                  processing until deletion is possible.
                </p>
              </section>
              <br />
              <hr className="pp-doc-divider" />
              <section id="third-party" className="pp-doc-section">
                <h2 className="pp-doc-h2">
                  7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                </h2>
                <p className="pp-doc-p">
                  In Short: We aim to protect your personal information through
                  a system of organizational and technical security measures.
                </p>

                <p className="pp-doc-p">
                  We have implemented appropriate and reasonable technical
                  and organizational security measures designed to protect the
                  security of any personal information we process. However,
                  despite our safeguards and efforts to secure your information,
                  no electronic transmission over the Internet or information
                  storage technology can be guaranteed to be 100% secure, so we
                  cannot promise or guarantee that hackers, cybercriminals, or
                  other unauthorized third parties will not be able to defeat
                  our security and improperly collect, access, steal, or modify
                  your information. Although we will do our best to protect your
                  personal information, transmission of personal information to
                  and from our Services is at your own risk. You should only
                  access the Services within a secure environment.
                </p>
                <br />
              </section>

              <hr className="pp-doc-divider" />

              <section id="your-rights" className="pp-doc-section">
                <h2 className="pp-doc-h2">8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
                <p className="pp-doc-p">
                  In Short:  You may review, change, or terminate your account
                  at any time, depending on your country, province, or state of
                  residence.
                </p>
                <p className="pp-doc-p">
                  Withdrawing your consent: If we are relying on your consent to
                  process your personal information, which may be express and/or
                  implied consent depending on the applicable law, you have the
                  right to withdraw your consent at any time. You can withdraw
                  your consent at any time by contacting us by using the contact
                  details provided in  below section .
                </p>
                <p className="pp-doc-p">
                  However, please note that this will not affect the lawfulness
                  of the processing before its withdrawal nor, when applicable
                  law allows, will it affect the processing of your personal
                  information conducted in reliance on lawful processing grounds
                  other than consent.
                </p>
                <p className="pp-doc-p">
                  Opting out of marketing and promotional communications: You
                  can unsubscribe from our marketing and promotional
                  communications at any time by or by contacting us using the
                  details provided in the  below section. You will then be
                  removed from the marketing lists. However, we may still
                  communicate with you — for example, to send you
                  service-related messages that are necessary for the
                  administration and use of your account, to respond to service
                  requests, or for other non-marketing purposes.
                </p>
                <p className="pp-doc-p">
                  Cookies and similar technologies: Most Web browsers are set to
                  accept cookies by default. If you prefer, you can usually
                  choose to set your browser to remove cookies and to reject
                  cookies. If you choose to remove cookies or reject cookies,
                  this could affect certain features or services of our
                  Services. You may also opt out of interest-based advertising
                  by advertisers on our Services.
                </p>

                <p className="pp-doc-p">
                  To exercise any of these rights, please contact us at{" "}
                  <strong>tech.rpre@gmail.com</strong> with the subject line
                  "Privacy Request." We will respond within 30 days, or sooner
                  where required by applicable law. If you have questions or
                  comments about your privacy rights, you may email us.
                </p>
              </section>

              <hr className="pp-doc-divider" />
              <section id="retention" className="pp-doc-section">
                <h2 className="pp-doc-h2">
                  9. CONTROLS FOR DO-NOT-TRACK FEATURES
                </h2>
                <p className="pp-doc-p">
                  Most web browsers and some mobile operating systems and mobile
                  applications include a Do-Not-Track ("DNT") feature or setting
                  you can activate to signal your privacy preference not to have
                  data about your online browsing activities monitored and
                  collected. At this stage, no uniform technology standard
                  for recognizing and implementing DNT signals has
                  been finalized.
                </p>
                <p className="pp-doc-p">
                  As such, we do not currently respond to DNT browser signals or
                  any other mechanism that automatically communicates your
                  choice not to be tracked online. If a standard for online
                  tracking is adopted that we must follow in the future, we will
                  inform you about that practice in a revised version of this
                  Privacy Notice.
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
              <br />

              <hr className="pp-doc-divider" />
              <section id="data-protection" className="pp-doc-section">
                <h2 className="pp-doc-h2">
                  10. DO WE MAKE UPDATES TO THIS NOTICE?
                </h2>
                <p className="pp-doc-p">
                  In Short: Yes, we will update this notice as necessary to stay
                  compliant with relevant laws.
                </p>
                <p className="pp-doc-p">
                  We may update this Privacy Notice from time to time. The
                  updated version will be indicated by an updated "Revised" date
                  at the top of this Privacy Notice. If we make material changes
                  to this Privacy Notice, we may notify you either by
                  prominently posting a notice of such changes or by directly
                  sending you a notification. We encourage you to review this
                  Privacy Notice frequently to be informed of how we are
                  protecting your information.
                </p>
              </section>
              <br />
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
                      RPRE Tech Studio
                    </span>
                  </div>
                  <div className="pp-doc-contact-item">
                    <span className="pp-doc-contact-label">Email</span>
                    <span className="pp-doc-contact-value">
                      tech.rpre@gmail.com
                    </span>
                  </div>
                  <div className="pp-doc-contact-item">
                    <span className="pp-doc-contact-label">Location</span>
                    <span className="pp-doc-contact-value">
                      Budhanilkantha Kathmandu, <br />  Bagmati 446000 Nepal
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
