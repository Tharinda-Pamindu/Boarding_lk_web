import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Privacy Policy & Student Safety Guidelines | boarding.lk" },
      {
        name: "description",
        content:
          "Learn how Boarding.lk protects your personal data, phone numbers, contact inquiries, and student verification records under Sri Lankan privacy and consumer safety standards.",
      },
      { property: "og:title", content: "Privacy Policy & Student Safety Guidelines | boarding.lk" },
      {
        property: "og:description",
        content:
          "Learn how Boarding.lk protects your personal data, phone numbers, contact inquiries, and student verification records under Sri Lankan privacy and consumer safety standards.",
      },
    ],
  }),
});

function Page() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Subtle Ambient Glow Element */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-lg w-full">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs text-on-surface-variant mb-space-md">
                <Link to="/" className="font-label-md text-label-md hover:text-primary transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  Home
                </Link>
                <span className="material-symbols-outlined text-[14px] text-secondary">chevron_right</span>
                <Link to="/guides" className="font-label-md text-label-md hover:text-primary transition-colors">Legal &amp; Policies</Link>
                <span className="material-symbols-outlined text-[14px] text-secondary">chevron_right</span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">Privacy Policy</span>
              </nav>
              {/* Page Header Section */}
              <header className="bg-surface-container-lowest rounded-xl p-space-md lg:p-space-xl shadow-sm mb-space-xl relative">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-space-lg">
                  <div className="max-w-3xl flex flex-col gap-space-sm">
                    {/* Category Badge */}
                    <div className="flex flex-wrap items-center gap-space-xs">
                      <span className="inline-flex items-center gap-1.5 px-space-sm py-1 bg-amber-subtle text-primary rounded-full font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                        Legal &amp; Trust Center / නීතිමය සහ ආරක්ෂක ප්‍රතිපත්ති
                      </span>
                      <span className="inline-flex items-center gap-1 px-space-sm py-1 bg-emerald-subtle text-emerald-dark rounded-full font-label-sm text-label-sm font-bold">
                        <span className="material-symbols-outlined text-[14px]">shield</span>
                        Sri Lanka Personal Data Protection Act Aligned
                      </span>
                    </div>
                    {/* Page Title */}
                    <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface tracking-tight">
                      Privacy Policy &amp; Student Safety Guidelines
                    </h1>
                    {/* Subtitle */}
                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                      Learn how Boarding.lk protects your personal data, phone numbers, contact inquiries, and student verification records under Sri Lankan privacy and consumer safety standards.
                    </p>
                    {/* Metadata Timestamp */}
                    <div className="flex flex-wrap items-center gap-space-md pt-space-xs text-on-surface-variant">
                      <div className="flex items-center gap-1.5 font-label-md text-label-md">
                        <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
                        <span>Last Updated: <strong className="text-on-surface">February 15, 2026</strong></span>
                      </div>
                      <span className="hidden sm:inline text-outline-variant">•</span>
                      <div className="flex items-center gap-1.5 font-label-md text-label-md">
                        <span className="material-symbols-outlined text-[18px] text-tertiary">history_toggle_off</span>
                        <span>Effective Date: <strong>January 1, 2024</strong></span>
                      </div>
                      <span className="hidden sm:inline text-outline-variant">•</span>
                      <div className="flex items-center gap-1.5 font-label-md text-label-md">
                        <span className="material-symbols-outlined text-[18px] text-secondary">gavel</span>
                        <span>Jurisdiction: Sri Lanka (SL Cert/CERT Aligned)</span>
                      </div>
                    </div>
                  </div>
                  {/* Actions Column: PDF Download & Quick Stat */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-space-sm shrink-0 lg:w-72">
                    <button className="w-full inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-label-lg text-label-lg px-space-md py-space-sm rounded-lg hover:bg-amber-hover transition-colors shadow-sm cursor-pointer" type="button">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                      <span>Download Official PDF Copy</span>
                    </button>
                    <div className="bg-surface-container-low rounded-lg p-space-sm flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Broker-Free Guarantee</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">Direct Contact Only</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Quick Jump Pills Bar */}
                <div className="mt-space-lg pt-space-md bg-surface-container-low/60 -mx-space-md -mb-space-md lg:-mx-space-xl lg:-mb-space-xl px-space-md lg:px-space-xl rounded-b-xl">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase block mb-2">Quick Navigation / පටුන</span>
                  <div className="flex items-center gap-2 overflow-x-auto pb-space-sm scrollbar-none">
                    <a className="whitespace-nowrap px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-full shadow-sm transition-colors" href="#section-1">1. Scope &amp; Mission</a>
                    <a className="whitespace-nowrap px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-full shadow-sm transition-colors" href="#section-2">2. Information Collected</a>
                    <a className="whitespace-nowrap px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-full shadow-sm transition-colors" href="#section-3">3. How Data is Used</a>
                    <a className="whitespace-nowrap px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-full shadow-sm transition-colors" href="#section-4">4. WhatsApp &amp; Number Privacy</a>
                    <a className="whitespace-nowrap px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-full shadow-sm transition-colors" href="#section-5">5. Student Verification IDs</a>
                    <a className="whitespace-nowrap px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-full shadow-sm transition-colors" href="#section-6">6. Storage &amp; Encryption</a>
                    <a className="whitespace-nowrap px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-danger-red font-label-md text-label-md rounded-full shadow-sm transition-colors" href="#section-7">7. Anti-Scam Advisory</a>
                    <a className="whitespace-nowrap px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-full shadow-sm transition-colors" href="#section-8">8. Account Deletion</a>
                    <a className="whitespace-nowrap px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-full shadow-sm transition-colors" href="#section-9">9. Contact DPO</a>
                  </div>
                </div>
              </header>
              {/* Layout: 3-Col Sticky ToC + 9-Col Reader Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                {/* Sticky Sidebar (Table of Contents) */}
                <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-space-md">
                  <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                    <div className="flex items-center gap-2 mb-space-sm pb-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">list_alt</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface">Document Index</h2>
                    </div>
                    <nav className="flex flex-col space-y-1" id="toc-nav">
                      <a className="toc-item flex items-center justify-between px-3 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all" href="#section-1">
                        <span>1. Overview &amp; Marketplace Scope</span>
                      </a>
                      <a className="toc-item flex items-center justify-between px-3 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all" href="#section-2">
                        <span>2. Information We Collect</span>
                      </a>
                      <a className="toc-item flex items-center justify-between px-3 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all" href="#section-3">
                        <span>3. How Your Information is Used</span>
                      </a>
                      <a className="toc-item flex items-center justify-between px-3 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all" href="#section-4">
                        <span>4. Number Masking &amp; WhatsApp</span>
                      </a>
                      <a className="toc-item flex items-center justify-between px-3 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all" href="#section-5">
                        <span>5. University Credentials &amp; Verification</span>
                      </a>
                      <a className="toc-item flex items-center justify-between px-3 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all" href="#section-6">
                        <span>6. Data Retention &amp; Security</span>
                      </a>
                      <a className="toc-item flex items-center justify-between px-3 py-2 rounded-lg font-label-md text-label-md text-danger-red bg-error-container/20 hover:bg-error-container/40 transition-all font-semibold" href="#section-7">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px]">warning</span>
                          7. Safety &amp; Scam Advisory
                        </span>
                      </a>
                      <a className="toc-item flex items-center justify-between px-3 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all" href="#section-8">
                        <span>8. User Rights &amp; Deletion</span>
                      </a>
                      <a className="toc-item flex items-center justify-between px-3 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all" href="#section-9">
                        <span>9. Data Protection Officer (DPO)</span>
                      </a>
                    </nav>
                  </div>
                  {/* Trust Callout Card in Sidebar */}
                  <div className="bg-primary/5 rounded-xl p-space-md space-y-space-xs">
                    <div className="flex items-center gap-2 text-primary font-label-md text-label-md">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      <span>Student First Policy</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      We never monetize your student identity or sell contact records to third-party telemarketers or coaching institutes.
                    </p>
                    <div className="pt-1 flex items-center gap-2 text-primary font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[14px]">call</span>
                      <span>Direct Support: +94 78 673 3237</span>
                    </div>
                  </div>
                </aside>
                {/* Right 9-Column Reader Content */}
                <div className="lg:col-span-9 space-y-space-xl">
                  {/* Section 1 */}
                  <section className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-md lg:p-space-xl shadow-sm" id="section-1">
                    <div className="flex items-center gap-space-xs text-primary mb-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">Section 01</span>
                      <span className="text-outline-variant">•</span>
                      <span className="font-label-sm text-label-sm">Platform Role &amp; Integrity</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">1. Overview &amp; Marketplace Scope</h2>
                    <div className="space-y-space-sm text-on-surface font-body-md text-body-md leading-relaxed">
                      <p>
                        Boarding.lk operates as Sri Lanka's dedicated digital directory and peer-to-peer housing network designed specifically for university undergraduates, vocational apprentices, interns, and young professionals. Our fundamental purpose is to connect tenants directly with verified homeowners and landlords across the island without brokers, commission intermediaries, or unregulated markups.
                      </p>
                      <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col md:flex-row gap-space-md items-start">
                        <div className="p-2 bg-amber-subtle text-primary rounded-lg shrink-0">
                          <span className="material-symbols-outlined text-[24px]">handshake</span>
                        </div>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Direct Landlord-Tenant Relationship</h3>
                          <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                            Unlike traditional real estate brokers who hold deposits or broker fees, Boarding.lk does not broker rental agreements or withhold security deposits. All agreements, rent amounts, and boarding house covenants ("bodim rules") are drafted solely between the property host and the occupant. This privacy policy outlines how our platform secures each party's identity throughout this discovery process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Section 2 */}
                  <section className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-md lg:p-space-xl shadow-sm" id="section-2">
                    <div className="flex items-center gap-space-xs text-primary mb-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">Section 02</span>
                      <span className="text-outline-variant">•</span>
                      <span className="font-label-sm text-label-sm">Data Categorization</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">2. Information We Collect</h2>
                    <p className="text-on-surface-variant font-body-md text-body-md mb-space-md">
                      We gather only information essential for listing authenticity, identity verification, and anti-fraud measures on Sri Lankan telecommunication networks.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      {/* Student Card */}
                      <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-space-sm">
                            <span className="w-8 h-8 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
                              <span className="material-symbols-outlined text-[18px]">school</span>
                            </span>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface">For Students &amp; Renters</h3>
                          </div>
                          <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                            <li className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-tertiary text-[16px] mt-0.5">check_circle</span>
                              <span><strong>Identity &amp; Contact:</strong> Full name, verified Sri Lankan mobile number (+94), and active email address.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-tertiary text-[16px] mt-0.5">check_circle</span>
                              <span><strong>Academic Affiliation:</strong> University/Campus details (SLIIT, University of Sri Jayewardenepura, Kelaniya, Moratuwa, NSBM, etc.) to issue verified badge status.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-tertiary text-[16px] mt-0.5">check_circle</span>
                              <span><strong>Search Preferences:</strong> Preferred district, max monthly budget in LKR, and gender requirements (Girls Only / Boys Only).</span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-space-md pt-space-xs">
                          <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-highest px-2 py-1 rounded">Kept Private From Search Engines</span>
                        </div>
                      </div>
                      {/* Landlord Card */}
                      <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-space-sm">
                            <span className="w-8 h-8 rounded-full bg-amber-subtle text-primary flex items-center justify-center">
                              <span className="material-symbols-outlined text-[18px]">home_work</span>
                            </span>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface">For Landlords &amp; Hosts</h3>
                          </div>
                          <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                            <li className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
                              <span><strong>Owner Profile:</strong> Host full name, residential address, and preferred phone/WhatsApp contact line.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
                              <span><strong>Property Details:</strong> Room photos, precise geographic location, monthly rent, key deposit (months advance), and utility bill rules.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
                              <span><strong>Verification Proof:</strong> National Identity Card (NIC) copy and proof of residence (e.g., utility bill) for voluntary 'Verified Landlord' accreditation.</span>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-space-md pt-space-xs">
                          <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-highest px-2 py-1 rounded">NIC Stored in Encrypted Cold Storage</span>
                        </div>
                      </div>
                    </div>
                    {/* Automated System Logs */}
                    <div className="mt-space-md bg-surface-container p-space-sm rounded-lg flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">devices</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        <strong>Log &amp; Device Metadata:</strong> We automatically record IP addresses, browser agents, and timestamps strictly for identifying suspicious multi-listing spam and cyber-stalking attempts.
                      </p>
                    </div>
                  </section>
                  {/* Section 3 */}
                  <section className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-md lg:p-space-xl shadow-sm" id="section-3">
                    <div className="flex items-center gap-space-xs text-primary mb-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">Section 03</span>
                      <span className="text-outline-variant">•</span>
                      <span className="font-label-sm text-label-sm">Operational Usage</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">3. How Your Information is Used</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-md">
                      Your data is processed strictly to maintain safety, facilitate direct tenant-landlord handshakes, and prevent financial scams common in offline boarding hunts.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                      <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-2">
                        <span className="material-symbols-outlined text-tertiary text-[24px]">chat</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">Direct Inquiry Channel</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Enabling registered undergraduates to initiate secure WhatsApp chats with property owners without exposing numbers to web scrapers.
                        </p>
                      </div>
                      <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-2">
                        <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">Listing Authenticity</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Evaluating duplicate images, suspicious rental rates, and mismatched addresses to eliminate ghost listings and fake bodim ads.
                        </p>
                      </div>
                      <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-2">
                        <span className="material-symbols-outlined text-secondary text-[24px]">sms</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">Critical SMS &amp; OTP Alerts</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Dispatching instant security PINs and landlord appointment confirmations via Sri Lankan SMS gateways (Dialog, Mobitel, Airtel, SLT).
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* Section 4 */}
                  <section className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-md lg:p-space-xl shadow-sm" id="section-4">
                    <div className="flex items-center gap-space-xs text-primary mb-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">Section 04</span>
                      <span className="text-outline-variant">•</span>
                      <span className="font-label-sm text-label-sm">Communication Controls</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">4. Contact Number Masking &amp; WhatsApp Privacy</h2>
                    <div className="space-y-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
                      <p>
                        Public phone numbers published openly on classified sites frequently lead to nuisance calls, late-night disturbances, and commercial marketing harassment. Boarding.lk enforces rigorous contact masking controls:
                      </p>
                      <div className="bg-surface-container-low rounded-xl p-space-md space-y-space-sm">
                        <div className="flex items-start gap-space-sm">
                          <div className="w-7 h-7 rounded-full bg-emerald-subtle text-emerald-dark flex items-center justify-center shrink-0 mt-0.5">
                            <span className="material-symbols-outlined text-[16px]">lock</span>
                          </div>
                          <div>
                            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">Click-to-Reveal Authentication</h4>
                            <p className="font-body-sm text-body-sm">
                              Phone numbers (+94 XX XXX XXXX) are masked behind a click-to-reveal button. Contact details are only displayed to authenticated, signed-in users who have verified their own account via SMS. Automated bots and unverified visitors cannot view contact details.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-space-sm">
                          <div className="w-7 h-7 rounded-full bg-emerald-subtle text-emerald-dark flex items-center justify-center shrink-0 mt-0.5">
                            <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                          </div>
                          <div>
                            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">WhatsApp-Only Mode for Elderly Landlords &amp; Female Occupants</h4>
                            <p className="font-body-sm text-body-sm">
                              Property owners have the account preference to disable voice call displays, allowing inquiries solely through designated WhatsApp chat triggers. This ensures you maintain full control over communication timings and block intrusive callers instantly.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Section 5 */}
                  <section className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-md lg:p-space-xl shadow-sm" id="section-5">
                    <div className="flex items-center gap-space-xs text-primary mb-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">Section 05</span>
                      <span className="text-outline-variant">•</span>
                      <span className="font-label-sm text-label-sm">Academic Trust Guarantee</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">5. University Student Verification &amp; Institutional Credentials</h2>
                    <div className="space-y-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      <p>
                        To provide landlords confidence in opening their annexes or rooms to young students, Boarding.lk offers optional university verification. We uphold an uncompromised standard regarding student institutional identities:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md my-space-sm">
                        <div className="bg-surface-container-low p-space-md rounded-lg space-y-2">
                          <div className="flex items-center gap-2 text-tertiary">
                            <span className="material-symbols-outlined text-[20px]">domain_verification</span>
                            <h4 className="font-headline-sm text-headline-sm text-on-surface">Strict Verification Use Only</h4>
                          </div>
                          <p className="font-body-sm text-body-sm">
                            Institutional domains such as <code className="text-primary font-mono text-xs bg-surface px-1.5 py-0.5 rounded">@sliit.lk</code>, <code className="text-primary font-mono text-xs bg-surface px-1.5 py-0.5 rounded">@sjp.ac.lk</code>, <code className="text-primary font-mono text-xs bg-surface px-1.5 py-0.5 rounded">@kln.ac.lk</code>, and scanned student identification cards are scrutinized solely by our compliance team for the "Verified Student Badge".
                          </p>
                        </div>
                        <div className="bg-surface-container-low p-space-md rounded-lg space-y-2">
                          <div className="flex items-center gap-2 text-error">
                            <span className="material-symbols-outlined text-[20px]">money_off</span>
                            <h4 className="font-headline-sm text-headline-sm text-on-surface">No Commercial Exploitation</h4>
                          </div>
                          <p className="font-body-sm text-body-sm">
                            We will <strong>never</strong> sell, barter, or distribute student records or university registries to loan agents, credit card solicitors, third-party private tutoring institutes, or ad brokers.
                          </p>
                        </div>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                        Once verification is finalized, raw photo uploads of student IDs are quarantined in segregated, restricted-access folders and purged within 90 days of graduation or profile termination.
                      </p>
                    </div>
                  </section>
                  {/* Section 6 */}
                  <section className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-md lg:p-space-xl shadow-sm" id="section-6">
                    <div className="flex items-center gap-space-xs text-primary mb-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">Section 06</span>
                      <span className="text-outline-variant">•</span>
                      <span className="font-label-sm text-label-sm">Infrastructure Security</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">6. Data Retention &amp; Security Standards</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                      We employ bank-grade technical and procedural safeguards to preserve data integrity and guard against unauthorized interception across mobile and broadband providers.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                      <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col items-center text-center">
                        <span className="material-symbols-outlined text-primary text-[32px] mb-2">https</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">256-Bit SSL/TLS</span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          All traffic between your smartphone or computer and our servers is encrypted using modern TLS 1.3 cryptographic suites.
                        </p>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col items-center text-center">
                        <span className="material-symbols-outlined text-tertiary text-[32px] mb-2">cloud_lock</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">Hardened Hosting</span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Databases are managed within ISO/IEC 27001 certified cloud environments with automated security patches and hourly backups.
                        </p>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col items-center text-center">
                        <span className="material-symbols-outlined text-secondary text-[32px] mb-2">badge</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface">Role-Based Access</span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Only authorized compliance personnel with multi-factor biometric tokens can review landlord documentation or NIC records.
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* Section 7: Anti-Scam Callout (Bilingual Sinhala / English) */}
                  <section className="scroll-mt-28 bg-error-container/15 rounded-xl p-space-md lg:p-space-xl shadow-md" id="section-7">
                    <div className="flex items-center gap-2 text-danger-red mb-space-sm">
                      <span className="material-symbols-outlined text-[28px]">warning</span>
                      <span className="font-headline-md text-headline-md font-bold uppercase tracking-tight">Critical Student Safety &amp; Scam Advisory</span>
                    </div>
                    {/* English Box */}
                    <div className="bg-surface-container-lowest rounded-lg p-space-md mb-space-md shadow-sm">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-danger-red text-white flex items-center justify-center text-xs font-bold">EN</span>
                        Never Pay Reservation Fees Before Physical Inspection!
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-3">
                        <strong>Never deposit key money, reservation advances, or inspection charges</strong> to unknown bank accounts, eZ Cash, or mCash numbers without personally visiting the boarding house and verifying the property owner's physical presence on site. Boarding.lk will <em>never</em> ask you to transfer funds to our staff to hold a room.
                      </p>
                      <div className="flex flex-wrap items-center gap-space-md text-danger-red font-label-md text-label-md bg-error-container/30 px-space-sm py-2 rounded">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[18px]">report</span>
                          Report Fraud: <a className="underline font-bold" href="mailto:athulasiriproduction@gmail.com">athulasiriproduction@gmail.com</a>
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[18px]">call</span>
                          Direct Fraud Hotline: <strong>+94 78 673 3237</strong>
                        </span>
                      </div>
                    </div>
                    {/* Sinhala Box */}
                    <div className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">සිං</span>
                        ශිෂ්‍ය ආරක්ෂාව සහ වංචාවන්ගෙන් වැළකීමේ උපදෙස්
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-3">
                        <strong>ප්‍රකාශනය:</strong> කිසිවිටෙකත් දේපළ පරීක්ෂා කිරීමට හෝ හිමිකරු පෞද්ගලිකව හමුවීමට පෙර කිසිදු බැංකු ගිණුමකට, eZ Cash හෝ mCash මගින් "Key Money" හෝ අත්තිකාරම් මුදල් තැන්පත් නොකරන්න. කිසියම් සැකකටයුතු දැන්වීමක් පිළිබඳව හෝ වංචනික ක්‍රියාවක් ගැන අපට වහාම දැනුම් දෙන්න.
                      </p>
                      <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-label-md text-label-md bg-surface-container-low px-space-sm py-2 rounded">
                        <span>හදිසි ඇමතුම්: <strong>+94 78 673 3237</strong></span>
                        <span>•</span>
                        <span>විද්‍යුත් තැපෑල: <strong>athulasiriproduction@gmail.com</strong></span>
                      </div>
                    </div>
                  </section>
                  {/* Section 8 */}
                  <section className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-md lg:p-space-xl shadow-sm" id="section-8">
                    <div className="flex items-center gap-space-xs text-primary mb-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">Section 08</span>
                      <span className="text-outline-variant">•</span>
                      <span className="font-label-sm text-label-sm">User Autonomy</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">8. Your Rights &amp; Account Deletion</h2>
                    <div className="space-y-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      <p>
                        In compliance with the Sri Lanka Personal Data Protection Act (PDPA), No. 9 of 2022, every tenant and landlord holds complete autonomy over their stored digital records:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                        <div className="p-space-sm bg-surface-container-low rounded-lg space-y-1">
                          <div className="flex items-center gap-2 text-on-surface font-semibold font-headline-sm text-headline-sm">
                            <span className="material-symbols-outlined text-primary text-[18px]">visibility_off</span>
                            <span>Hide or Pause Listings</span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Landlords can pause listings instantly once a room is rented out to stop incoming phone calls and WhatsApp messages.
                          </p>
                        </div>
                        <div className="p-space-sm bg-surface-container-low rounded-lg space-y-1">
                          <div className="flex items-center gap-2 text-on-surface font-semibold font-headline-sm text-headline-sm">
                            <span className="material-symbols-outlined text-danger-red text-[18px]">delete_forever</span>
                            <span>Right to Erasure (Delete Account)</span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            You may submit an account erasure request at any moment. Your phone number, verification uploads, and listings will be permanently deleted from live servers within 48 hours.
                          </p>
                        </div>
                        <div className="p-space-sm bg-surface-container-low rounded-lg space-y-1">
                          <div className="flex items-center gap-2 text-on-surface font-semibold font-headline-sm text-headline-sm">
                            <span className="material-symbols-outlined text-tertiary text-[18px]">edit_note</span>
                            <span>Contact Info Updates</span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Update your mobile contact number, university designation, or boarding photos anytime via the Landlord Portal or Account Settings.
                          </p>
                        </div>
                        <div className="p-space-sm bg-surface-container-low rounded-lg space-y-1">
                          <div className="flex items-center gap-2 text-on-surface font-semibold font-headline-sm text-headline-sm">
                            <span className="material-symbols-outlined text-secondary text-[18px]">download_for_offline</span>
                            <span>Data Portability</span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            Request an export of all listing reviews, rental bookmarks, and account metadata via email to our Data Protection Officer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Section 9: DPO Contact Section */}
                  <section className="scroll-mt-28 bg-surface-container-lowest rounded-xl p-space-md lg:p-space-xl shadow-sm" id="section-9">
                    <div className="flex items-center gap-space-xs text-primary mb-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider">Section 09</span>
                      <span className="text-outline-variant">•</span>
                      <span className="font-label-sm text-label-sm">Official Inquiry</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">9. Contact the Data Protection Officer (DPO)</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                      For legal inquiries, verification data removal requests, or reporting security vulnerabilities, please reach our dedicated trust &amp; privacy team:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col items-center text-center space-y-2">
                        <div className="w-12 h-12 rounded-full bg-amber-subtle text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[24px]">mail</span>
                        </div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">Email Channel</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Response within 24 business hours</p>
                        <a className="font-label-md text-label-md text-primary hover:text-amber-hover underline font-bold break-all" href="mailto:athulasiriproduction@gmail.com">
                          athulasiriproduction@gmail.com
                        </a>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col items-center text-center space-y-2">
                        <div className="w-12 h-12 rounded-full bg-emerald-subtle text-emerald-dark flex items-center justify-center">
                          <span className="material-symbols-outlined text-[24px]">support_agent</span>
                        </div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">Helplines</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Mon - Sat: 8.30 AM to 6.30 PM</p>
                        <div className="font-label-md text-label-md text-on-surface flex flex-col items-center font-bold">
                          <span>+94 78 673 3237</span>
                          <span className="text-on-surface-variant text-xs font-normal">(011) 234-5678</span>
                        </div>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col items-center text-center space-y-2">
                        <div className="w-12 h-12 rounded-full bg-secondary-container text-secondary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[24px]">pin_drop</span>
                        </div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">Operations Hub</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Physical verification desk</p>
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Colombo / Malabe Campus Hub,<br />Western Province, Sri Lanka
                        </span>
                      </div>
                    </div>
                    {/* Download and Compliance Notice Footer */}
                    <div className="mt-space-lg pt-space-md bg-surface-container-low/50 rounded-lg p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-[20px]">verified</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Certified compliant with standard guidelines of the Information and Communication Technology Agency (ICTA) of Sri Lanka.
                        </span>
                      </div>
                      <button className="shrink-0 inline-flex items-center gap-1.5 px-space-md py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-colors cursor-pointer" type="button">
                        <span className="material-symbols-outlined text-[18px]">print</span>
                        <span>Print Policy</span>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
