import "./Policy.css"; // reuses the same stylesheet as PrivacyPolicy
import { useEffect } from "react";

/* ─── Main Component ────────────────────────────────────────────────────────── */

/* ─── Section number badge ──────────────────────────────────────────────────── */
function SectionBadge({ n }: { n: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-widest uppercase bg-amber-50 text-amber-700 border border-amber-200 mr-3 shrink-0">
      § {n}
    </span>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────────── */
export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" ">
      {/* ── Ambient blobs — same as PrivacyPolicy ── */}
      <div className="pp-blobs" aria-hidden="true">
        <div className="pp-blob1" />
        <div className="pp-blob2" />
        <div className="pp-blob3" />
        <div className="pp-blob-radial" />
      </div>

      <main className="pp-main">
        <div className="pp-legal-doc">
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              HERO
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="pp-doc-hero mt-4">
            <div className="pp-doc-hero-bar" aria-hidden="true" />

            <div className="pp-doc-hero-body">
              {/* Badge */}
              <div className="pp-doc-hero-badge">
                <span className="px-1">Legal Agreement</span>
              </div>

              {/* Title */}
              <h1 className="pp-doc-hero-title">
                <span className="pp-doc-hero-title-gold">Terms &amp;</span>{" "}
                <span className="pp-doc-hero-title-ink">Conditions</span>
              </h1>

              {/* Subtitle */}
              <p className="pp-doc-hero-sub">
                This document constitutes a legally binding agreement between
                you and <strong>RPRE</strong> governing your access to and use
                of all services, platforms, and digital offerings provided by
                RPRE. Please read these terms carefully before engaging with any
                of our services.
              </p>

              {/* Meta row */}
              <div className="pp-doc-hero-meta">
                <div className="pp-doc-hero-meta-item">
                  <span className="pp-doc-hero-meta-label">Last Updated</span>
                  <span className="pp-doc-hero-meta-value">
                    <span className="pp-pulse pp-pulse--meta" />
                    March 2026
                  </span>
                </div>
                <div className="pp-doc-hero-meta-divider" aria-hidden="true" />
                <div className="pp-doc-hero-meta-item">
                  <span className="pp-doc-hero-meta-label">Effective Date</span>
                  <span className="pp-doc-hero-meta-value">
                    January 1, 2026
                  </span>
                </div>
                <div className="pp-doc-hero-meta-divider" aria-hidden="true" />
                <div className="pp-doc-hero-meta-item">
                  <span className="pp-doc-hero-meta-label">Jurisdiction</span>
                  <span className="pp-doc-hero-meta-value">Global / Nepal</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              1. INTRODUCTION
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-introduction" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="01" />
              Introduction
            </h2>
            <p className="pp-doc-p">
              RPRE ("the Company," "we," "our," or "us") is a technology
              services firm providing a broad range of information technology
              solutions to clients worldwide. These Terms and Conditions
              ("Terms") govern the contractual relationship between RPRE and any
              individual, business entity, or organisation ("Client," "you," or
              "your") that accesses, procures, or uses any service offered by
              RPRE.
            </p>
            <p className="pp-doc-p">
              By engaging RPRE for any service — whether through a signed
              contract, purchase order, verbal agreement, or by accessing RPRE
              platforms — you confirm that you have read, understood, and agreed
              to be bound by these Terms in their entirety. These Terms operate
              alongside any applicable service agreement, statement of work, or
              project contract entered into between RPRE and the Client.
            </p>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              2. ACCEPTANCE
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-acceptance" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="02" />
              Acceptance of Terms
            </h2>
            <p className="pp-doc-p">
              Your use of any RPRE service constitutes your full and
              unconditional acceptance of these Terms. If you are entering into
              this agreement on behalf of a company or other legal entity, you
              represent and warrant that you have the authority to bind that
              entity to these Terms.
            </p>
            <p className="pp-doc-p">
              If you do not agree with any provision of these Terms, you must
              immediately discontinue use of RPRE services and notify RPRE in
              writing. Continued use of our services after any modification to
              these Terms constitutes acceptance of the revised Terms.
            </p>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              3. SERVICES
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-services" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="03" />
              Services Provided by RPRE
            </h2>
            <p className="pp-doc-p">
              RPRE offers a comprehensive suite of technology and consulting
              services. The scope of services delivered to any individual Client
              is defined by the applicable service agreement, statement of work,
              or proposal document. Our service portfolio includes, but is not
              limited to:
            </p>
            <ul className="pp-doc-list">
              <li>
                <strong>Software Development</strong> — Custom enterprise and
                consumer software solutions, including full-cycle development
                from architecture to deployment.
              </li>
              <li>
                <strong>Web &amp; Mobile App Development</strong> — Design,
                development, and maintenance of responsive web applications and
                native or cross-platform mobile applications.
              </li>
              <li>
                <strong>IT Consulting</strong> — Strategic advisory, technology
                roadmaps, system audits, and digital transformation guidance.
              </li>
              <li>
                <strong>Cloud Solutions</strong> — Cloud architecture,
                migration, management, and optimisation across major cloud
                platforms.
              </li>
              <li>
                <strong>Digital Infrastructure Services</strong> — Network
                design, server management, DevOps implementation, and
                infrastructure support.
              </li>
              <li>
                <strong>AI &amp; Automation Solutions</strong> — Development and
                integration of artificial intelligence systems, machine learning
                models, and intelligent process automation.
              </li>
            </ul>
            <p className="pp-doc-p">
              RPRE reserves the right to modify, expand, suspend, or discontinue
              any service at any time with reasonable prior notice to the
              affected Client.
            </p>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              4. USER RESPONSIBILITIES
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-user-resp" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="04" />
              User Responsibilities
            </h2>
            <p className="pp-doc-p">
              Clients bear full responsibility for their conduct when engaging
              with RPRE services. As a condition of service, you agree to the
              following obligations:
            </p>
            <ul className="pp-doc-list">
              <li>
                Provide accurate, complete, and current information during
                onboarding and throughout the engagement.
              </li>
              <li>
                Cooperate in good faith with RPRE personnel, including timely
                provision of materials, approvals, and feedback required to
                deliver services.
              </li>
              <li>
                Refrain from using RPRE services for any unlawful, fraudulent,
                or harmful purpose, including violation of any third-party
                intellectual property rights.
              </li>
              <li>
                Maintain the confidentiality of any access credentials, API
                keys, or system logins provided by RPRE or established through
                our platforms.
              </li>
              <li>
                Promptly notify RPRE of any actual or suspected security breach,
                unauthorised access, or data compromise related to services
                under our management.
              </li>
              <li>
                Comply with all applicable local, national, and international
                laws and regulations in connection with your use of RPRE
                services.
              </li>
            </ul>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              5. INTELLECTUAL PROPERTY
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-ip" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="05" />
              Intellectual Property Rights
            </h2>
            <p className="pp-doc-p">
              Unless expressly agreed otherwise in a written service agreement,
              the following intellectual property provisions apply.
            </p>

            <h3 className="pp-doc-h3">RPRE Proprietary Assets</h3>
            <p className="pp-doc-p">
              All pre-existing tools, frameworks, methodologies, codebases,
              libraries, and documentation owned or licensed by RPRE remain the
              exclusive property of RPRE. Nothing in these Terms transfers
              ownership of RPRE's proprietary assets to the Client.
            </p>

            <h3 className="pp-doc-h3">Deliverables</h3>
            <p className="pp-doc-p">
              Upon receipt of full payment for a completed project, RPRE
              transfers to the Client ownership of all custom deliverables
              created exclusively for that project, as specified in the
              applicable statement of work. RPRE retains the right to
              incorporate general knowledge and non-client-specific code
              patterns into future work.
            </p>

            <h3 className="pp-doc-h3">Portfolio Rights</h3>
            <p className="pp-doc-p">
              Unless explicitly restricted in writing, RPRE reserves the right
              to reference the Client's project in our portfolio, case studies,
              or marketing materials without disclosing confidential project
              specifics.
            </p>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              6. PAYMENT TERMS
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-payment" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="06" />
              Payment Terms
            </h2>
            <p className="pp-doc-p">
              All fees, rates, and payment schedules are defined in the
              applicable project proposal, service agreement, or invoice issued
              by RPRE. The following general terms apply unless otherwise agreed
              in writing:
            </p>
            <ul className="pp-doc-list">
              <li>
                Invoices are due within <strong>30 days</strong> of the invoice
                date unless a separate schedule has been agreed.
              </li>
              <li>
                A non-refundable advance payment of up to <strong>50%</strong>{" "}
                of the total project value may be required before commencement
                of work.
              </li>
              <li>
                Late payments may incur interest at{" "}
                <strong>1.5% per month</strong> or the maximum rate permitted by
                applicable law, whichever is lower.
              </li>
              <li>
                RPRE reserves the right to suspend or terminate services in the
                event of non-payment beyond agreed terms, without prejudice to
                any other remedies.
              </li>
              <li>
                All fees are exclusive of applicable taxes, including VAT, GST,
                or similar taxes, which shall be borne by the Client.
              </li>
            </ul>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              7. CONFIDENTIALITY
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-confidentiality" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="07" />
              Confidentiality
            </h2>
            <p className="pp-doc-p">
              Both parties acknowledge that in the course of an engagement, each
              may gain access to confidential, proprietary, or sensitive
              information belonging to the other party ("Confidential
              Information"). Both RPRE and the Client agree to:
            </p>
            <ul className="pp-doc-list">
              <li>
                Hold all Confidential Information in strict confidence and not
                disclose it to any third party without prior written consent
                from the disclosing party.
              </li>
              <li>
                Use Confidential Information solely for the purposes of
                fulfilling obligations under the applicable service agreement.
              </li>
              <li>
                Apply no less than reasonable security measures to protect
                Confidential Information from unauthorised disclosure or access.
              </li>
            </ul>
            <p className="pp-doc-p">
              These obligations survive the termination of any service agreement
              for a period of <strong>three (3) years</strong>, unless a
              separate Non-Disclosure Agreement specifies a different period.
            </p>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              8. LIMITATION OF LIABILITY
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-liability" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="08" />
              Limitation of Liability
            </h2>
            <p className="pp-doc-p">
              To the fullest extent permitted by applicable law, RPRE's total
              aggregate liability to the Client arising out of or related to
              these Terms or any service agreement — whether in contract, tort,
              negligence, or otherwise — shall not exceed the total fees paid by
              the Client to RPRE in the{" "}
              <strong>three (3) months immediately preceding</strong> the event
              giving rise to the claim.
            </p>
            <p className="pp-doc-p">
              In no event shall RPRE be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to loss of revenue, loss of profits, loss of data, loss of
              business opportunities, or business interruption, even if RPRE has
              been advised of the possibility of such damages.
            </p>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              9. DISCLAIMER
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-disclaimer" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="09" />
              Disclaimer of Warranties
            </h2>
            <p className="pp-doc-p">
              RPRE provides all services on an{" "}
              <strong>"as is" and "as available"</strong> basis. While RPRE
              exercises professional diligence in the delivery of its services,
              we make no representations or warranties of any kind, express or
              implied, including but not limited to:
            </p>
            <ul className="pp-doc-list">
              <li>
                Warranties of merchantability, fitness for a particular purpose,
                or non-infringement.
              </li>
              <li>
                Guarantees that services will be uninterrupted, error-free, or
                free from security vulnerabilities.
              </li>
              <li>
                Assurances regarding the accuracy or completeness of any advice,
                recommendation, or deliverable.
              </li>
            </ul>
            <p className="pp-doc-p">
              The Client accepts sole responsibility for independently verifying
              the suitability of any deliverable before deployment in a
              production environment.
            </p>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              10. THIRD-PARTY
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-third-party" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="10" />
              Third-Party Services
            </h2>
            <p className="pp-doc-p">
              Certain RPRE solutions may incorporate or integrate with
              third-party software, cloud platforms, APIs, or licensed tools.
              RPRE does not warrant and is not responsible for the availability,
              performance, accuracy, or security of any third-party service. The
              Client acknowledges that:
            </p>
            <ul className="pp-doc-list">
              <li>
                Third-party services are subject to their respective providers'
                terms of service and privacy policies.
              </li>
              <li>
                RPRE shall not be liable for disruptions, data loss, or failures
                arising from third-party service outages or changes.
              </li>
              <li>
                Any additional costs incurred through third-party platforms
                (e.g., cloud hosting fees, API charges) are the Client's
                responsibility unless expressly included in the RPRE service
                agreement.
              </li>
            </ul>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              11. TERMINATION
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-termination" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="11" />
              Termination of Services
            </h2>
            <p className="pp-doc-p">
              Either party may terminate a service engagement in accordance with
              the notice provisions outlined in the applicable service
              agreement. In the absence of a specific agreement, the following
              terms apply:
            </p>
            <ul className="pp-doc-list">
              <li>
                Either party may terminate with{" "}
                <strong>30 days' written notice</strong> without cause.
              </li>
              <li>
                RPRE may terminate immediately if the Client materially breaches
                these Terms and fails to remedy the breach within 10 business
                days of written notice.
              </li>
              <li>
                Upon termination, the Client shall pay for all services rendered
                up to the effective termination date, including any
                non-cancellable third-party costs incurred by RPRE on the
                Client's behalf.
              </li>
              <li>
                RPRE will make commercially reasonable efforts to assist in the
                transition or handover of deliverables upon termination.
              </li>
            </ul>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              12. DATA & PRIVACY
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-data-privacy" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="12" />
              Data Protection &amp; Privacy
            </h2>
            <p className="pp-doc-p">
              RPRE is committed to responsible data handling and compliance with
              applicable data protection regulations, including Nepal's Privacy
              Act and, where applicable, the General Data Protection Regulation
              (GDPR) and other relevant international frameworks.
            </p>
            <ul className="pp-doc-list">
              <li>
                RPRE processes Client data solely for the purposes of delivering
                agreed services and for internal operational needs.
              </li>
              <li>
                RPRE implements appropriate technical and organisational
                safeguards to protect personal and business data from
                unauthorised access, disclosure, or loss.
              </li>
              <li>
                Where RPRE processes personal data on behalf of the Client, RPRE
                acts as a data processor and the Client acts as the data
                controller.
              </li>
              <li>
                RPRE does not sell, trade, or rent Client data to third parties.
              </li>
            </ul>
            <p className="pp-doc-p">
              For further information on how RPRE handles personal data, please
              refer to our <strong>Privacy Policy</strong>, which is
              incorporated into these Terms by reference.
            </p>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              13. GOVERNING LAW
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-governing-law" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="13" />
              Governing Law
            </h2>
            <p className="pp-doc-p">
              These Terms and any dispute or claim arising out of or in
              connection with them — including non-contractual disputes or
              claims — shall be governed by and construed in accordance with the
              laws of <strong>Nepal</strong>, without regard to its conflict of
              law provisions.
            </p>
            <p className="pp-doc-p">
              Any disputes that cannot be resolved amicably within 30 days of
              written notice shall be subject to the exclusive jurisdiction of
              the competent courts of Nepal. For international Clients, RPRE
              reserves the right to elect arbitration under internationally
              recognised arbitration rules as an alternative to court
              proceedings.
            </p>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              14. UPDATES
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-updates" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="14" />
              Updates to These Terms
            </h2>
            <p className="pp-doc-p">
              RPRE reserves the right to revise, update, or replace these Terms
              at any time. When material changes are made, RPRE will notify
              Clients by email or by posting a prominent notice on our website
              at least <strong>14 days</strong> prior to the changes taking
              effect, where practicable.
            </p>
            <p className="pp-doc-p">
              The "Last Updated" date at the top of this document reflects the
              most recent revision. It is the Client's responsibility to review
              these Terms periodically. Continued use of RPRE services after the
              effective date of any change constitutes acceptance of the revised
              Terms.
            </p>
          </section>

          <hr className="pp-doc-divider" />

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              15. CONTACT
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section id="tc-contact" className="pp-doc-section">
            <h2 className="pp-doc-h2">
              <SectionBadge n="15" />
              Contact Information
            </h2>
            <p className="pp-doc-p">
              For any queries, concerns, or formal notices relating to these
              Terms and Conditions, please contact RPRE through the following
              channels. All legal notices must be submitted in writing. We will
              respond within <strong>2 business days</strong>. Please include{" "}
              <strong>"Legal Notice"</strong> in your subject line for expedited
              handling.
            </p>

            <div className="pp-doc-contact-grid">
              <div className="pp-doc-contact-item">
                <span className="pp-doc-contact-label">Company</span>
                <span className="pp-doc-contact-value">RPRE</span>
              </div>
              <div className="pp-doc-contact-item">
                <span className="pp-doc-contact-label">Email</span>
                <span className="pp-doc-contact-value">legal@rpre.io</span>
              </div>
              <div className="pp-doc-contact-item">
                <span className="pp-doc-contact-label">Business Address</span>
                <span className="pp-doc-contact-value">Kathmandu, Nepal</span>
              </div>
              <div className="pp-doc-contact-item">
                <span className="pp-doc-contact-label">Website</span>
                <span className="pp-doc-contact-value">www.rpre.io</span>
              </div>
            </div>

            {/* Footer disclaimer note */}
            <div className="mt-8 rounded border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-stone-600 leading-relaxed">
              <strong>Note:</strong> These Terms &amp; Conditions do not
              constitute legal advice. RPRE recommends that Clients seek
              independent legal counsel before entering into any service
              agreement. By engaging RPRE's services, you acknowledge that you
              have read, understood, and agreed to these Terms in their
              entirety.
            </div>
          </section>
        </div>
        {/* /pp-legal-doc */}
      </main>
    </div>
  );
}