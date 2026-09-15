import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/refund-policy")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Refund Policy & Key Money Protection | boarding.lk" },
      {
        name: "description",
        content:
          "Standardized deposit recovery rules, 48-hour cool-off guarantees, and damage claim resolution for Sri Lankan student boarding houses.",
      },
      { property: "og:title", content: "Refund Policy & Key Money Protection | boarding.lk" },
      {
        property: "og:description",
        content:
          "Standardized deposit recovery rules, 48-hour cool-off guarantees, and damage claim resolution for Sri Lankan student boarding houses.",
      },
    ],
  }),
});

function TocLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="px-space-sm py-2 rounded hover:bg-surface-container hover:text-primary transition-all flex items-center justify-between group"
      href={href}
    >
      <span>{children}</span>
      <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
        arrow_forward
      </span>
    </a>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Top Utility Sub-bar & Breadcrumb */}
          <section className="w-full bg-surface-container-low/70 py-space-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
              <nav aria-label="Breadcrumbs" className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  Home
                </Link>
                <span className="text-outline-variant">/</span>
                <span className="hover:text-primary transition-colors">Legal &amp; Policies</span>
                <span className="text-outline-variant">/</span>
                <span className="text-primary font-bold">Refund Policy</span>
              </nav>
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[15px] text-tertiary">history</span>
                <span>
                  Last Updated: <strong className="text-on-surface font-semibold">January 2026</strong> (Applies to 2026 Academic Term)
                </span>
              </div>
            </div>
          </section>

          {/* Hero Header Banner */}
          <section className="w-full bg-gradient-to-b from-surface-container-low via-surface-container-lowest to-surface py-space-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
                <div className="flex flex-col gap-space-sm max-w-3xl">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm font-bold tracking-wide shadow-sm">
                      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        verified_user
                      </span>
                      CERTIFIED STUDENT DEPOSIT FRAMEWORK
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-subtle text-amber-hover font-label-sm text-label-sm font-bold">
                      <span className="material-symbols-outlined text-[16px]">gavel</span>
                      Sri Lanka Tenancy Standard
                    </span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-on-surface font-extrabold tracking-tight">
                    Refund Policy &amp; <span className="text-primary">Key Money</span> Protection
                  </h1>
                  <p className="font-headline-sm text-headline-sm text-on-surface-variant font-medium leading-snug">
                    අත්තිකාරම් මුදල් ආපසු ගෙවීමේ ප්‍රතිපත්තිය සහ ශිෂ්‍ය තැන්පතු ආරක්ෂණ නීතිරීති
                  </p>
                  <p className="font-body-lg text-body-lg text-secondary max-w-2xl leading-relaxed">
                    Standardized deposit recovery rules, 48-hour cool-off guarantees, and damage claim resolution established across Sri Lankan university zones (SLIIT, Kelaniya, Japura, Moratuwa, NSBM, and Colombo Campus hubs).
                  </p>
                </div>
                {/* Quick Summary Highlight Card */}
                <div className="w-full lg:w-96 bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col gap-space-md shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Resolution Guarantee</span>
                    <span className="inline-flex items-center gap-1 text-tertiary font-label-md text-label-md font-bold">
                      <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                      Escrow Active
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-headline-lg text-headline-lg text-primary font-extrabold">100% Return</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Eligible within 48-hour cooling period or severe listing mismatch</span>
                  </div>
                  <div className="p-space-xs bg-surface-container-low rounded-lg flex items-center justify-between font-label-md text-label-md text-on-surface">
                    <span>Average Resolution Time</span>
                    <strong className="text-primary font-bold">24 – 48 Hours</strong>
                  </div>
                  <a
                    className="w-full py-space-sm bg-primary text-on-primary font-label-lg text-label-lg rounded-lg text-center hover:bg-amber-hover transition-all flex items-center justify-center gap-2 shadow-sm"
                    href="#dispute-card"
                  >
                    <span className="material-symbols-outlined text-[18px]">report_problem</span>
                    File Deposit Dispute
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Layout with Sticky Quick-Nav */}
          <section className="w-full py-space-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
                {/* Sticky Sidebar Navigation */}
                <aside className="hidden lg:block lg:col-span-4">
                  <div className="sticky top-28 bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col gap-space-md">
                    <div className="flex items-center gap-space-xs text-on-surface">
                      <span className="material-symbols-outlined text-primary text-[20px]">list_alt</span>
                      <h2 className="font-headline-sm text-headline-sm font-bold">Table of Contents</h2>
                    </div>
                    <nav className="flex flex-col space-y-1 font-label-md text-label-md text-on-surface-variant">
                      <TocLink href="#scope-role">1. Scope &amp; Marketplace Role</TocLink>
                      <TocLink href="#key-money-regulations">2. Key Money (අත්තිකාරම්) Regulations</TocLink>
                      <TocLink href="#refund-matrix">3. Refund Eligibility Matrix</TocLink>
                      <TocLink href="#notice-period">4. Notice Period &amp; 30-Day Rule</TocLink>
                      <TocLink href="#damage-deductions">5. Damage Claims &amp; Handover</TocLink>
                      <TocLink href="#landlord-breach">6. Landlord Cancellation &amp; Default</TocLink>
                      <TocLink href="#dispute-cdr">7. Resolution Process (CDR)</TocLink>
                      <TocLink href="#fraud-prevention">8. Scam Warning &amp; Hotline</TocLink>
                    </nav>
                    <div className="mt-space-sm pt-space-md bg-surface-container-low p-space-md rounded-lg flex flex-col gap-2">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface uppercase tracking-wider">Urgent Support</span>
                      <div className="flex items-center gap-2 text-primary font-headline-sm text-headline-sm font-bold">
                        <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                        <a className="hover:underline" href="tel:+94786733237">+94 78 673 3237</a>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Daily Sinhala &amp; English Tenant Legal Advisors (8:30 AM - 7:00 PM).</p>
                    </div>
                  </div>
                </aside>

                {/* Main Body Content Articles */}
                <div className="col-span-1 lg:col-span-8 flex flex-col gap-space-xl">
                  {/* Section 1 */}
                  <article className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col gap-space-md scroll-mt-28" id="scope-role">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-label-lg">1</span>
                      <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Scope &amp; Marketplace Role</h2>
                    </div>
                    <p className="font-body-lg text-body-lg text-slate-body leading-relaxed">
                      <strong>Boarding.lk</strong> operates as Sri Lanka's specialized discovery network and peer-to-peer facilitation platform for private student accommodation, boarding houses (බෝඩිම් කාමර), annexes, and self-contained units.
                    </p>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col sm:flex-row gap-space-md items-start">
                      <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-1">account_balance_wallet</span>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Direct Contracting and Verified Directory Model</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          While Boarding.lk provides landlord identity verification (NIC verification) and binding tenancy agreement models, the monetary payment of deposits remains a direct legal arrangement between landlord and tenant. This policy forms the enforceable <em>Standard Code of Conduct</em> applicable to all verified properties advertised on this portal.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                      <div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex flex-col gap-1">
                        <span className="font-label-lg text-label-lg text-emerald-dark flex items-center gap-1 font-bold">
                          <span className="material-symbols-outlined text-[18px]">check_circle</span>
                          What We Enforce
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Standard deposit deduction rules, listing suspension of defaulting landlords, formal arbitration facilitation, and verification blacklisting.
                        </p>
                      </div>
                      <div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm flex flex-col gap-1">
                        <span className="font-label-lg text-label-lg text-primary flex items-center gap-1 font-bold">
                          <span className="material-symbols-outlined text-[18px]">info</span>
                          What Students Must Do
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Inspect the physical premises before cash transfer, insist on signed cash vouchers or bank slip remarks, and never wire advance fees blindly.
                        </p>
                      </div>
                    </div>
                  </article>

                  {/* Section 2 */}
                  <article className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col gap-space-md scroll-mt-28" id="key-money-regulations">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-label-lg">2</span>
                      <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Key Money (අත්තිකාරම් මුදල්) Regulations</h2>
                    </div>
                    <p className="font-body-lg text-body-lg text-slate-body leading-relaxed">
                      In the Sri Lankan rental market, "Key Money" or "Advance" is frequently conflated with non-refundable goodwill fees. Under the Boarding.lk Fair Rent Standard, Key Money is classified exclusively as a <strong>Refundable Security Deposit (ආරක්ෂිත තැන්පතුව)</strong> held against property damage and unpaid utility bills.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md my-space-xs">
                      <div className="p-space-md bg-amber-subtle/50 rounded-xl flex flex-col gap-space-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm font-bold text-amber-hover uppercase">Single Student Rooms</span>
                          <span className="material-symbols-outlined text-amber-hover text-[20px]">single_bed</span>
                        </div>
                        <span className="font-headline-md text-headline-md text-on-surface font-extrabold">Max 1 Month Deposit</span>
                        <p className="font-body-sm text-body-sm text-slate-body">
                          For individual boarding rooms with shared facilities, landlords are prohibited from demanding more than one (1) month equivalent rent as refundable key money.
                        </p>
                      </div>
                      <div className="p-space-md bg-secondary-container/30 rounded-xl flex flex-col gap-space-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm font-bold text-secondary uppercase">Independent Annexes</span>
                          <span className="material-symbols-outlined text-secondary text-[20px]">apartment</span>
                        </div>
                        <span className="font-headline-md text-headline-md text-on-surface font-extrabold">Max 2 – 3 Months Cap</span>
                        <p className="font-body-sm text-body-sm text-slate-body">
                          For private annexes with dedicated CEB/NWSDB utility sub-meters, landlords may request up to 3 months' deposit, fully refundable within 7 business days of vacating.
                        </p>
                      </div>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-2">
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-[20px]">verified</span>
                        100% Refund Obligation Rule
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Landlords are strictly obligated to disburse the net remaining deposit at the exact moment of physical key handover, provided the tenant has fulfilled the formal notice window and settled prevailing electricity, water, and waste bills.
                      </p>
                    </div>
                  </article>

                  {/* Section 3: Refund Matrix Table */}
                  <article className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col gap-space-md scroll-mt-28" id="refund-matrix">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-label-lg">3</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Refund Eligibility Matrix</h2>
                      </div>
                      <span className="px-space-sm py-1 bg-surface-container text-on-surface-variant rounded font-label-sm text-label-sm">Standard 2026</span>
                    </div>
                    <p className="font-body-md text-body-md text-slate-body">
                      The eligibility of deposit and booking fee refunds is dictated by clear event triggers and verifiable cancellation notification timelines:
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-surface-container text-on-surface font-label-md text-label-md">
                            <th className="p-space-md rounded-l-lg">Cancellation Scenario</th>
                            <th className="p-space-md">Timeline Window</th>
                            <th className="p-space-md">Refund Entitlement</th>
                            <th className="p-space-md rounded-r-lg">Disbursement Timeline</th>
                          </tr>
                        </thead>
                        <tbody className="font-body-sm text-body-sm divide-y-0">
                          <tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                            <td className="p-space-md font-semibold text-on-surface">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-emerald-dark text-[18px]">check_circle</span>
                                <span>Cooling-off Period</span>
                              </div>
                              <span className="text-on-surface-variant font-normal block text-xs mt-0.5">Written withdrawal after payment</span>
                            </td>
                            <td className="p-space-md text-on-surface">Within 48 hours of initial advance payment</td>
                            <td className="p-space-md">
                              <span className="inline-flex items-center px-2.5 py-1 rounded bg-emerald-subtle text-emerald-dark font-label-md text-label-md font-bold">
                                100% Full Refund
                              </span>
                            </td>
                            <td className="p-space-md text-on-surface-variant">Within 48 Hours</td>
                          </tr>
                          <tr className="bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
                            <td className="p-space-md font-semibold text-on-surface">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-emerald-dark text-[18px]">emergency</span>
                                <span>Misrepresentation</span>
                              </div>
                              <span className="text-on-surface-variant font-normal block text-xs mt-0.5">Photo mismatch, unlivable conditions</span>
                            </td>
                            <td className="p-space-md text-on-surface">At initial check-in inspection</td>
                            <td className="p-space-md">
                              <span className="inline-flex items-center px-2.5 py-1 rounded bg-emerald-subtle text-emerald-dark font-label-md text-label-md font-bold">
                                100% Refund + Incident Escalation
                              </span>
                            </td>
                            <td className="p-space-md text-on-surface-variant">Immediate (Same Day)</td>
                          </tr>
                          <tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                            <td className="p-space-md font-semibold text-on-surface">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                                <span>Early Pre-Move Cancellation</span>
                              </div>
                              <span className="text-on-surface-variant font-normal block text-xs mt-0.5">Change in academic term/university admission</span>
                            </td>
                            <td className="p-space-md text-on-surface">7+ days prior to scheduled check-in</td>
                            <td className="p-space-md">
                              <span className="inline-flex items-center px-2.5 py-1 rounded bg-amber-subtle text-amber-hover font-label-md text-label-md font-bold">
                                75% Partial Refund
                              </span>
                              <span className="text-xs text-on-surface-variant block mt-1">(25% retained for vacancy holding)</span>
                            </td>
                            <td className="p-space-md text-on-surface-variant">Within 5 Working Days</td>
                          </tr>
                          <tr className="bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
                            <td className="p-space-md font-semibold text-on-surface">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                                <span>Late Pre-Move Cancellation</span>
                              </div>
                              <span className="text-on-surface-variant font-normal block text-xs mt-0.5">Short notice tenant withdrawal</span>
                            </td>
                            <td className="p-space-md text-on-surface">Less than 7 days prior to check-in</td>
                            <td className="p-space-md">
                              <span className="inline-flex items-center px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-md text-label-md font-bold">
                                50% Refund Cap
                              </span>
                            </td>
                            <td className="p-space-md text-on-surface-variant">Within 7 Working Days</td>
                          </tr>
                          <tr className="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                            <td className="p-space-md font-semibold text-danger-red">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-danger-red text-[18px]">cancel</span>
                                <span>Tenant Unannounced No-Show</span>
                              </div>
                              <span className="text-on-surface-variant font-normal block text-xs mt-0.5">Failure to report or reach out</span>
                            </td>
                            <td className="p-space-md text-on-surface">On or after scheduled check-in date</td>
                            <td className="p-space-md">
                              <span className="inline-flex items-center px-2.5 py-1 rounded bg-error-container text-on-error-container font-label-md text-label-md font-bold">
                                0% (Deposit Forfeited)
                              </span>
                            </td>
                            <td className="p-space-md text-on-surface-variant">No disbursement</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </article>

                  {/* Section 4 */}
                  <article className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col gap-space-md scroll-mt-28" id="notice-period">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-label-lg">4</span>
                      <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Move-Out Notice &amp; 30-Day Rule</h2>
                    </div>
                    <p className="font-body-lg text-body-lg text-slate-body leading-relaxed">
                      To guarantee that landlords can release 100% of the key money without unexpected friction, students and young professionals must observe the standardized <strong>30-Day Notice Rule</strong>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                      <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-2">
                        <span className="material-symbols-outlined text-primary text-[24px]">chat</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">WhatsApp Validity</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Formal notices transmitted via WhatsApp or SMS to the landlord's registered phone number constitute valid legal documentation under this policy.
                        </p>
                      </div>
                      <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-2">
                        <span className="material-symbols-outlined text-primary text-[24px]">event_available</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">1-Month Cycle</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Notice must be served prior to the start of the final rent cycle. For example, to vacate on March 31, notice must be served by February 28.
                        </p>
                      </div>
                      <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-2">
                        <span className="material-symbols-outlined text-primary text-[24px]">receipt_long</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Rent Offsetting</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Key money may be converted into the final month's rent payment upon explicit written mutual consent of both parties.
                        </p>
                      </div>
                    </div>
                    <div className="p-space-md bg-surface-container rounded-xl flex flex-col gap-space-xs mt-space-xs">
                      <span className="font-label-md text-label-md text-on-surface font-bold">Mandatory Handover Checklist (අත්සන් කර බාරදීම):</span>
                      <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-emerald-dark text-[18px]">check</span>
                          Recorded reading of sub-meter for electricity and municipal water meter on vacating day.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-emerald-dark text-[18px]">check</span>
                          Inspection of room fixtures: ceiling fans, wall switches, door locks, and glass window louvers.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-emerald-dark text-[18px]">check</span>
                          Signing of the digital or paper Deposit Release Voucher confirming no further claims exist.
                        </li>
                      </ul>
                    </div>
                  </article>

                  {/* Section 5 */}
                  <article className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col gap-space-md scroll-mt-28" id="damage-deductions">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-label-lg">5</span>
                      <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Property Damage Deductions &amp; Inspection Protocol</h2>
                    </div>
                    <p className="font-body-md text-body-md text-slate-body leading-relaxed">
                      Deductions from the tenant's key money are lawful <strong>ONLY</strong> when addressing direct tenant negligence, missing assets, or unpaid utility balances. Normal wear-and-tear cannot be penalized.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="p-space-md bg-emerald-subtle/30 rounded-xl flex flex-col gap-2">
                        <span className="font-label-md text-label-md text-emerald-dark font-bold flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px]">check_circle</span>
                          Allowable Deductions
                        </span>
                        <ul className="space-y-1.5 font-body-sm text-body-sm text-slate-body">
                          <li>• Unpaid CEB / LECO electricity bills (pro-rated to exit date)</li>
                          <li>• Broken window panes, shattered mirrors, or doors</li>
                          <li>• Damaged plumbing, broken faucets, or clogged cisterns</li>
                          <li>• Severe permanent wall defacement beyond common nail marks</li>
                        </ul>
                      </div>
                      <div className="p-space-md bg-error-container/30 rounded-xl flex flex-col gap-2">
                        <span className="font-label-md text-label-md text-error font-bold flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px]">block</span>
                          Unlawful / Prohibited Deductions
                        </span>
                        <ul className="space-y-1.5 font-body-sm text-body-sm text-slate-body">
                          <li>• Gradual paint sun-fading or standard atmospheric weathering</li>
                          <li>• Replacement of aging pre-existing electrical ballasts</li>
                          <li>• Routine property cleaning fees not agreed in writing</li>
                          <li>• Generic re-letting or listing commission costs</li>
                        </ul>
                      </div>
                    </div>
                  </article>

                  {/* Section 6 */}
                  <article className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col gap-space-md scroll-mt-28" id="landlord-breach">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-label-lg">6</span>
                      <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Landlord Cancellation &amp; Default</h2>
                    </div>
                    <p className="font-body-md text-body-md text-slate-body leading-relaxed">
                      Should an owner or landlord renege on an accepted booking advance, re-rent the room to another candidate for a higher rate, or fail to make the premise habitable on the contract date:
                    </p>
                    <div className="p-space-md bg-amber-subtle/40 rounded-xl flex flex-col sm:flex-row gap-space-md items-start">
                      <span className="material-symbols-outlined text-primary text-[32px] shrink-0 mt-1">assignment_return</span>
                      <div className="flex flex-col gap-1.5">
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Double Advance Restitution Guarantee</h4>
                        <p className="font-body-sm text-body-sm text-slate-body leading-relaxed">
                          Under the Boarding.lk Landlord Code, arbitrary unilateral cancellation by the host requires an immediate <strong>100% full return of deposit within 24 hours</strong>. Repeat offenders receive an immediate strike, revoking their "Verified Host" badge and preventing future ad submissions.
                        </p>
                      </div>
                    </div>
                  </article>

                  {/* Section 7 (fraud) */}
                  <article className="bg-gradient-to-br from-amber-subtle via-surface-container-lowest to-surface-container-low p-space-lg lg:p-space-xl rounded-2xl shadow-md flex flex-col gap-space-md" id="fraud-prevention">
                    <div className="flex items-center gap-space-sm text-amber-hover">
                      <span className="material-symbols-outlined text-[32px]">warning</span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-extrabold">CRITICAL FRAUD WARNING</span>
                        <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold">Never Transfer Funds Before Physical Inspection</h3>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="p-space-md bg-surface-container-lowest rounded-xl flex flex-col gap-2 shadow-sm">
                        <div className="flex items-center gap-2 text-primary font-bold font-label-md text-label-md">
                          <span className="material-symbols-outlined text-[16px]">language</span>
                          සිංහල උපදෙස් (Sinhala Guide)
                        </div>
                        <p className="font-body-sm text-body-sm text-slate-body leading-relaxed">
                          කිසිඳු හේතුවක් මත, ඔබ අදාළ බෝඩිම හෝ ඇනෙක්සිය පෞද්ගලිකව ගොස් පරීක්ෂා කිරීමට පෙර <strong>EzCash, mCash</strong> හෝ නාඳුනන පුද්ගලික ගිණුම්වලට අත්තිකාරම් මුදල් (Advance) බැර කිරීමෙන් වළකින්න. වංචාකරුවන්ගෙන් ප්‍රවේශම් වන්න.
                        </p>
                      </div>
                      <div className="p-space-md bg-surface-container-lowest rounded-xl flex flex-col gap-2 shadow-sm">
                        <div className="flex items-center gap-2 text-primary font-bold font-label-md text-label-md">
                          <span className="material-symbols-outlined text-[16px]">translate</span>
                          English Instructions
                        </div>
                        <p className="font-body-sm text-body-sm text-slate-body leading-relaxed">
                          Never transfer booking tokens via wallet apps without visiting the premise in person and verifying the landlord's national identity card (NIC). Report suspicious hosts claiming to be overseas or demanding instant wire transfers.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Emergency Platform Hotline</span>
                        <a className="font-headline-sm text-headline-sm text-primary font-bold hover:underline flex items-center gap-1" href="tel:+94786733237">
                          <span className="material-symbols-outlined text-[20px]">call</span>
                          +94 78 673 3237
                        </a>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Fraud Incident Escalations</span>
                        <a className="font-label-lg text-label-lg text-on-surface font-semibold hover:text-primary transition-colors flex items-center gap-1" href="mailto:athulasiriproduction@gmail.com">
                          <span className="material-symbols-outlined text-[18px]">mail</span>
                          athulasiriproduction@gmail.com
                        </a>
                      </div>
                    </div>
                  </article>

                  {/* Section 8: Dispute Resolution Form */}
                  <article className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col gap-space-lg scroll-mt-28" id="dispute-cdr">
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-label-lg">7</span>
                        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Platform Dispute Resolution Process (CDR)</h2>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        If your landlord has withheld your refundable key money unfairly or cancelled a verified reservation, file an expedited claim through our Case Dispute Resolution (CDR) team.
                      </p>
                    </div>
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[28px]">description</span>
                        </div>
                        <div className="flex flex-col">
                          <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Official Tenancy &amp; Refund Agreement (2026 Model)</h4>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Sinhala / English Bilingual PDF Template for student rentals</span>
                        </div>
                      </div>
                      <button
                        className="px-space-md py-space-sm bg-surface-container-lowest text-on-surface hover:bg-surface hover:text-primary transition-all rounded-lg font-label-md text-label-md font-semibold flex items-center gap-2 shadow-sm shrink-0"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        Download PDF Template
                      </button>
                    </div>
                    {/* Inline Claim Dispute Form Card */}
                    <div className="bg-surface-container-low/60 p-space-md lg:p-space-lg rounded-xl flex flex-col gap-space-md" id="dispute-card">
                      <div className="flex items-center justify-between">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">gavel</span>
                          Submit Deposit Arbitration Request
                        </h3>
                        <span className="font-label-sm text-label-sm text-emerald-dark bg-emerald-subtle px-2 py-0.5 rounded font-semibold">Free Student Service</span>
                      </div>
                      <form className="flex flex-col gap-space-md" id="dispute-form">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                          <div className="flex flex-col gap-1">
                            <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="tenant-name">Full Name (Student / Renter)</label>
                            <input className="w-full px-space-md py-space-sm bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" id="tenant-name" placeholder="e.g. Kasun Bandara" required type="text" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="tenant-phone">WhatsApp Contact Number</label>
                            <input className="w-full px-space-md py-space-sm bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" id="tenant-phone" placeholder="+94 7X XXX XXXX" required type="tel" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                          <div className="flex flex-col gap-1">
                            <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="ad-url">Listing URL or Host Contact Phone</label>
                            <input className="w-full px-space-md py-space-sm bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" id="ad-url" placeholder="e.g. boarding.lk/ad/71829 or Landlord Phone" required type="text" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="claim-type">Dispute Category</label>
                            <select className="w-full px-space-md py-space-sm bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" id="claim-type" defaultValue="cool-off">
                              <option value="cool-off">48-Hour Cool-Off Advance Refusal</option>
                              <option value="unlawful-deduction">Unjustified Damage Deductions</option>
                              <option value="misrepresentation">Premises Severe Misrepresentation</option>
                              <option value="landlord-default">Landlord Cancelled / Re-rented</option>
                              <option value="other">Other Deposit Non-Payment Issue</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="deposit-amount">Key Money / Deposit Amount in LKR</label>
                          <input className="w-full px-space-md py-space-sm bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" id="deposit-amount" placeholder="e.g. 25,000" required type="number" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="case-notes">Case Summary &amp; Evidence Note</label>
                          <textarea className="w-full px-space-md py-space-sm bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" id="case-notes" placeholder="Briefly describe what happened, move-out dates, and any WhatsApp communication history..." rows={3}></textarea>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                          <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
                            Your documents are treated confidentially under Boarding.lk Privacy Shield.
                          </span>
                          <button className="w-full sm:w-auto px-space-xl py-space-sm bg-primary text-on-primary font-label-lg text-label-lg rounded-lg hover:bg-amber-hover transition-colors font-bold shadow-sm" type="submit">
                            Submit Case for Review
                          </button>
                        </div>
                      </form>
                      {/* Success Alert Box (hidden by default) */}
                      <div className="hidden p-space-lg bg-emerald-subtle rounded-xl flex-col items-center text-center gap-space-xs" id="dispute-success">
                        <span className="material-symbols-outlined text-emerald-dark text-[40px]">check_circle</span>
                        <h4 className="font-headline-sm text-headline-sm text-emerald-dark font-bold">Case Claim Submitted Successfully</h4>
                        <p className="font-body-md text-body-md text-emerald-dark max-w-md">
                          Case ID <strong>#BLK-2026-9182</strong> has been logged. Our student housing dispute officer will reach out to both you and the landlord via WhatsApp within 24 hours.
                        </p>
                        <button className="mt-2 text-primary font-label-md text-label-md font-bold underline" type="button">
                          Submit another claim
                        </button>
                      </div>
                    </div>
                  </article>

                  {/* FAQ */}
                  <article className="bg-surface-container-lowest p-space-lg lg:p-space-xl rounded-xl shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col gap-space-md">
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Frequently Answered Questions</h3>
                    <div className="flex flex-col space-y-3">
                      <details className="group bg-surface-container-low p-space-md rounded-xl cursor-pointer">
                        <summary className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center justify-between list-none">
                          <span>What if my landlord refuses to return my deposit claiming paint damages?</span>
                          <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                        </summary>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                          Under Section 5 of this code, standard nail holes and ordinary weather aging do not warrant complete deposit retention. Landlords must furnish itemized official painter receipts and allow the tenant to inspect or hire independent repair before deducting more than 2,000 LKR.
                        </p>
                      </details>
                      <details className="group bg-surface-container-low p-space-md rounded-xl cursor-pointer">
                        <summary className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center justify-between list-none">
                          <span>How does Boarding.lk penalize dishonest or fraudulent landlords?</span>
                          <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                        </summary>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                          Hosts verified to have confiscated key money without valid basis will have all current active listings delisted from university zones immediately. Their verified status is revoked and their contact details flagged across partner student unions.
                        </p>
                      </details>
                      <details className="group bg-surface-container-low p-space-md rounded-xl cursor-pointer">
                        <summary className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center justify-between list-none">
                          <span>Does this policy apply to hostels near SLIIT, NSBM, and Kelaniya?</span>
                          <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                        </summary>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                          Yes, this standard framework operates across all university vicinity boardings registered in the Colombo, Malabe, Homagama, Kelaniya, Nugegoda, and Kandy municipal regions.
                        </p>
                      </details>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom CTA Assistance Bar */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-space-lg">
              <div className="flex flex-col gap-1 max-w-xl">
                <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">Need Advice Before Paying a Deposit?</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Speak with our tenant welfare representatives before signing a rental deal or handing over cash. We will review your agreement clauses free of charge.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-space-md">
                <a
                  className="px-space-lg py-space-sm bg-tertiary-container text-on-tertiary-container font-label-lg text-label-lg rounded-lg hover:bg-tertiary hover:text-on-tertiary transition-all flex items-center gap-2 font-bold shadow-sm"
                  href="https://wa.me/94786733237"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  WhatsApp Us (+94 78 673 3237)
                </a>
                <a
                  className="px-space-md py-space-sm bg-surface-container-lowest text-on-surface font-label-lg text-label-lg rounded-lg hover:bg-surface transition-colors font-semibold shadow-sm"
                  href="mailto:athulasiriproduction@gmail.com"
                >
                  Email Legal Desk
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
