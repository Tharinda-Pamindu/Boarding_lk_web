import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/terms")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Terms & Conditions | boarding.lk" },
      {
        name: "description",
        content:
          "Read boarding.lk's terms and conditions covering student responsibilities, landlord obligations, 0% broker fee policy, key money refunds, and dispute resolution in Sri Lanka.",
      },
      { property: "og:title", content: "Terms & Conditions | boarding.lk" },
      {
        property: "og:description",
        content:
          "The regulatory framework governing direct student-to-owner rentals, zero-brokerage listings, campus proximity warranties, and tenancy security across Sri Lanka.",
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
          <section className="relative w-full overflow-hidden bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                <div className="max-w-3xl space-y-space-sm">
                  <div className="inline-flex items-center gap-2 px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary">gavel</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">Legal Governance &amp; Transparency Protocol</span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
                    Terms &amp; Conditions
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    The regulatory framework governing direct student-to-owner rentals, zero-brokerage listings, campus proximity warranties, and tenancy security across Sri Lanka.
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs font-label-md text-label-md text-on-surface-variant">
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">calendar_month</span>
                      Effective: February 2026
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">verified_user</span>
                      Sri Lankan Legal Jurisdiction (Civil Law of Sri Lanka)
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">translate</span>
                      සිංහල &amp; English Official Reference
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm shrink-0">
                  <button className="inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-lg shadow-sm hover:bg-surface-container transition-all cursor-pointer font-label-lg text-label-lg" type="button">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span>Download Official PDF</span>
                  </button>
                  <a className="inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary px-space-md py-space-sm rounded-lg shadow-sm hover:bg-amber-hover transition-all font-label-lg text-label-lg" href="#disclaimer-statute">
                    <span className="material-symbols-outlined text-[18px]">security</span>
                    <span>Read Platform Disclaimer</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
              <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
                <div className="sticky top-28 bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-lg text-label-lg text-on-surface font-bold">Document Index</span>
                    <span className="font-label-sm text-label-sm text-primary bg-amber-subtle px-space-xs py-0.5 rounded-full">10 Sections</span>
                  </div>
                  <nav className="space-y-1" id="toc-nav">
                    <a className="toc-link flex items-center justify-between px-space-sm py-space-xs rounded-lg text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm font-semibold" href="#section-1">
                      <span>1. Acceptance &amp; Scope</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">01</span>
                    </a>
                    <a className="toc-link flex items-center justify-between px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm" href="#section-2">
                      <span>2. Student Responsibilities</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">02</span>
                    </a>
                    <a className="toc-link flex items-center justify-between px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm" href="#section-3">
                      <span>3. Landlord Obligations</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">03</span>
                    </a>
                    <a className="toc-link flex items-center justify-between px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm" href="#section-4">
                      <span>4. 0% Broker Fee Policy</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">04</span>
                    </a>
                    <a className="toc-link flex items-center justify-between px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm" href="#section-5">
                      <span>5. Key Money &amp; Refunds</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">05</span>
                    </a>
                    <a className="toc-link flex items-center justify-between px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm" href="#section-6">
                      <span>6. Direct WhatsApp Etiquette</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">06</span>
                    </a>
                    <a className="toc-link flex items-center justify-between px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm" href="#section-7">
                      <span>7. Verification &amp; Accuracy</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">07</span>
                    </a>
                    <a className="toc-link flex items-center justify-between px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm" href="#section-8">
                      <span>8. Prohibited Conduct</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">08</span>
                    </a>
                    <a className="toc-link flex items-center justify-between px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm" href="#section-9">
                      <span>9. Limitation of Liability</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">09</span>
                    </a>
                    <a className="toc-link flex items-center justify-between px-space-sm py-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors font-body-sm text-body-sm" href="#section-10">
                      <span>10. Disputes &amp; Contacts</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">10</span>
                    </a>
                  </nav>
                  <div className="bg-surface-container-low p-space-sm rounded-lg space-y-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">support_agent</span>
                      Direct Support Line
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">Need tenancy dispute guidance or urgent scam reporting?</p>
                    <a className="inline-flex items-center gap-1 text-primary font-label-md text-label-md hover:underline pt-1" href="tel:+94786733237">
                      <span className="material-symbols-outlined text-[16px]">call</span>
                      +94 78 673 3237
                    </a>
                  </div>
                </div>
              </aside>
              <div className="lg:col-span-8 xl:col-span-9 space-y-space-xl">
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                  <div className="flex items-start gap-space-md">
                    <div className="w-12 h-12 rounded-xl bg-amber-subtle text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[24px]">balance</span>
                    </div>
                    <div className="space-y-space-xs">
                      <h2 className="font-headline-md text-headline-md text-on-surface">Legal Jurisdiction &amp; Governing Law</h2>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        These terms constitute a legally binding agreement under the laws of the Democratic Socialist Republic of Sri Lanka. All registered boarders, annex occupants, independent landlords, and visitors accessing <span className="text-on-surface font-semibold">boarding.lk</span> acknowledge that tenancy contracts formed through the directory fall within Sri Lankan Contract &amp; Tenancy Law and relevant municipal council housing by-laws.
                      </p>
                      <div className="pt-space-xs flex flex-wrap gap-space-sm">
                        <span className="px-space-sm py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">Registration Act Compliance</span>
                        <span className="px-space-sm py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">Colombo Commercial Courts</span>
                        <span className="px-space-sm py-1 rounded-full bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm font-bold">100% Broker-Free Guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>

                <section className="scroll-mt-28 space-y-space-md" id="section-1">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md">01</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Acceptance of Terms &amp; Marketplace Scope</h2>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
                    <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                      Boarding.lk functions strictly as an <span className="font-semibold text-primary">open information exchange and direct matching platform</span> connecting university undergraduates, interns, and young professionals with verified property owners across the 25 administrative districts of Sri Lanka.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                        <div className="flex items-center gap-2 text-tertiary font-label-lg text-label-lg">
                          <span className="material-symbols-outlined text-[20px]">check_circle</span>
                          What Boarding.lk Is
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          A high-visibility discovery engine with verified geo-tagged locations, direct phone and WhatsApp contact channels, and honest room feature specifications.
                        </p>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                        <div className="flex items-center gap-2 text-danger-red font-label-lg text-label-lg">
                          <span className="material-symbols-outlined text-[20px]">cancel</span>
                          What Boarding.lk Is NOT
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          We are not real estate agents, middlemen, brokers (තැරැව්කරුවන්), lease guarantors, or escrow payment handlers. No commission is collected from any rental transaction.
                        </p>
                      </div>
                    </div>
                    <div className="p-space-md bg-amber-subtle rounded-xl text-primary space-y-1">
                      <span className="font-label-md text-label-md font-bold uppercase tracking-wide">Bilingual Highlight | සිංහල සාරාංශය</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        boarding.lk යනු නිවාස හිමියන් සහ නේවාසිකාගාර සොයන සිසුන් සෘජුවම සම්බන්ධ කරන තාක්ෂණික වේදිකාවකි. අපි කිසිදු තැරැව්කාර ගාස්තුවක් හෝ කොමිස් මුදලක් අය නොකරන අතර, කිසිදු මුදල් ගනුදෙනුවකට අතරමැදියෙකු ලෙස මැදිහත් නොවන්නෙමු.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="scroll-mt-28 space-y-space-md" id="section-2">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md">02</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Student &amp; Renter Responsibilities</h2>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      When searching for accommodation, conducting premises visits, or establishing residency in a boarding place (බෝඩිම) or annex, renters must adhere to these foundational commitments:
                    </p>
                    <div className="space-y-space-sm">
                      <div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg">
                        <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">badge</span>
                        <div>
                          <h3 className="font-label-lg text-label-lg text-on-surface">Student Verification &amp; True Identity</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Renters must present a legitimate University Student ID, National Identity Card (NIC), or official workplace letter upon the landlord's request during the first site inspection.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg">
                        <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">apartment</span>
                        <div>
                          <h3 className="font-label-lg text-label-lg text-on-surface">Property Integrity &amp; Quiet Hours</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Occupants must uphold communal peace, avoid excessive noise after 10:00 PM, maintain sanitation standards in shared washrooms, and preserve inventory (beds, study desks, ceiling fans).</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg">
                        <span className="material-symbols-outlined text-primary shrink-0 mt-0.5">schedule</span>
                        <div>
                          <h3 className="font-label-lg text-label-lg text-on-surface">Notice Prior to Vacating (1 Month Standard)</h3>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Undergraduates must tender at least 30 calendar days written or WhatsApp notice prior to vacating to qualify for the full release of key deposits.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="scroll-mt-28 space-y-space-md" id="section-3">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md">03</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Landlord &amp; Property Owner Obligations</h2>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Hosts publishing listings on Boarding.lk are held to strict standards of transparency. Misleading academic distances or undisclosed utility charges will result in permanent listing deactivation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                        <span className="material-symbols-outlined text-tertiary text-[28px]">directions_walk</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">Accurate Distance</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Distance to universities (e.g., SLIIT, USJ, Kelaniya, UCSC) must reflect actual walking or bus route kilometers, not theoretical radius measures.
                        </p>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                        <span className="material-symbols-outlined text-primary text-[28px]">electric_meter</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">Utility Disclosures</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Must clearly classify whether water and CEB electricity tariffs are fully bundled in rent, calculated via independent sub-meters, or shared per capita.
                        </p>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                        <span className="material-symbols-outlined text-tertiary text-[28px]">lock_reset</span>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface">Privacy &amp; Safety</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Female student annexes must have lockable doors, window grilles, and separate entrances where indicated. Landlords may not enter private rooms unannounced.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="scroll-mt-28 space-y-space-md" id="section-4">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md">04</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">0% Broker Fee &amp; Free Listing Policy</h2>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-space-md p-space-md bg-emerald-subtle rounded-xl text-emerald-dark">
                      <div className="flex items-center gap-space-md">
                        <span className="material-symbols-outlined text-[36px]">percent</span>
                        <div>
                          <h3 className="font-headline-sm text-headline-sm font-bold">Zero Commission Guarantee</h3>
                          <p className="font-body-sm text-body-sm text-emerald-dark/90">Students never pay viewing fees, registration cuts, or finding commissions to Boarding.lk or owners.</p>
                        </div>
                      </div>
                      <div className="px-space-md py-space-xs bg-emerald-dark text-on-primary rounded-lg font-label-md text-label-md shrink-0">
                        100% Direct Contact
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Standard ad postings for individual landlords are free of charge. Any third-party broker or broker syndicate attempting to list aggregator properties on Boarding.lk and surcharge students will be banned and reported to the Colombo Fraud Bureau.
                    </p>
                  </div>
                </section>

                <section className="scroll-mt-28 space-y-space-md" id="section-5">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md">05</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Key Money, Advance Deposits &amp; Refunds</h2>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
                    <div className="border-l-4 border-primary pl-space-md space-y-space-xs">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">Student Deposit Advisory Guidelines</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        To protect young undergraduates on constrained allowances, Boarding.lk endorses and enforces ethical deposit thresholds across Sri Lanka.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="p-space-md rounded-xl bg-surface-container-low space-y-1">
                        <span className="font-label-sm text-label-sm text-primary font-bold uppercase">Recommended Limit</span>
                        <div className="font-headline-md text-headline-md text-on-surface">1 - 2 Months Rent</div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Standard key money advance for shared student rooms and studio annexes.</p>
                      </div>
                      <div className="p-space-md rounded-xl bg-surface-container-low space-y-1">
                        <span className="font-label-sm text-label-sm text-tertiary font-bold uppercase">Refund Timeframe</span>
                        <div className="font-headline-md text-headline-md text-on-surface">Within 7 Days</div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Security deposits must be refunded upon room surrender minus genuine unpaid utility balances.</p>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-danger-red/10 text-on-surface space-y-space-xs">
                      <div className="flex items-center gap-2 text-danger-red font-label-lg text-label-lg">
                        <span className="material-symbols-outlined text-[20px]">warning</span>
                        <span>Critical Scam Warning (අවවාදයයි: මුදල් වංචා වලින් ආරක්ෂා වන්න)</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                        <strong>NEVER transfer funds</strong> via <span className="text-danger-red font-semibold">eZ Cash, mCash, FriMi</span>, or advance bank transfers to any owner before physically visiting the room, inspecting keys, and verifying the landlord's residency. Boarding.lk staff will never ask you to transfer security deposits to any intermediary account.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="scroll-mt-28 space-y-space-md" id="section-6">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md">06</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Direct Communication &amp; WhatsApp Etiquette</h2>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      We provide direct call and one-tap WhatsApp buttons connecting searchers to property hosts. All users agree to communicate respectfully, between 7:30 AM and 9:00 PM Sri Lanka Standard Time, stating:
                    </p>
                    <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">check</span>
                        <span>Your university faculty, internship program, or occupation.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">check</span>
                        <span>Anticipated move-in date and desired tenancy duration.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">check</span>
                        <span>Number of occupants requesting accommodation.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="scroll-mt-28 space-y-space-md" id="section-7">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md">07</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Verification, Inspection Badges &amp; Accuracy</h2>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      The <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm font-bold"><span className="material-symbols-outlined text-[14px]">verified</span>Verified Boarding</span> badge indicates that the landlord's phone number or NIC has been confirmed and past student tenant feedback has been checked. It does not replace the renter's personal responsibility to physically visit and verify premises safety.
                    </p>
                  </div>
                </section>

                <section className="scroll-mt-28 space-y-space-md" id="section-8">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md">08</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Prohibited Conduct &amp; Fraud Prevention</h2>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="p-space-md bg-surface-container-low rounded-xl space-y-1">
                        <div className="font-label-lg text-label-lg text-danger-red flex items-center gap-1">
                          <span className="material-symbols-outlined text-[18px]">block</span>
                          Phantom Listings
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Publishing uninspected properties using stock architectural photos from Pinterest or other commercial websites is forbidden and causes immediate IP blacklisting.
                        </p>
                      </div>
                      <div className="p-space-md bg-surface-container-low rounded-xl space-y-1">
                        <div className="font-label-lg text-label-lg text-danger-red flex items-center gap-1">
                          <span className="material-symbols-outlined text-[18px]">block</span>
                          Identity Impersonation
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Posing as university accommodation office wardens or campus marshals to demand reservation booking deposits is an offense under the Computer Crime Act No. 24 of 2007.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="scroll-mt-28 space-y-space-md" id="section-9">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md">09</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Limitation of Platform Liability &amp; Disclaimer</h2>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-lg" id="disclaimer-statute">
                    <div className="bg-surface-container-low p-space-lg rounded-xl space-y-space-sm">
                      <div className="flex items-center gap-2 text-on-surface">
                        <span className="material-symbols-outlined text-primary text-[20px]">policy</span>
                        <h3 className="font-label-lg text-label-lg font-bold uppercase tracking-wider">Official English Disclaimer</h3>
                      </div>
                      <blockquote className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed pl-space-sm border-l-2 border-primary">
                        "The content displayed on this website is provided by individual users. We do not assume any responsibility for the accuracy, completeness, or authenticity of the posted information. Users are strongly advised to independently verify all details before making any commitments or payments. We are not liable for any fraudulent activities, misrepresentations, disputes, or losses resulting from interactions between users. By using this website, you agree to these terms. For concerns, contact athulasiriproduction@gmail.com."
                      </blockquote>
                    </div>
                    <div className="bg-surface-container-low p-space-lg rounded-xl space-y-space-sm">
                      <div className="flex items-center gap-2 text-on-surface">
                        <span className="material-symbols-outlined text-primary text-[20px]">translate</span>
                        <h3 className="font-label-lg text-label-lg font-bold uppercase tracking-wider">වගකීම් ප්‍රතික්ෂේප කිරීම (Sinhala Statutory Disclaimer)</h3>
                      </div>
                      <blockquote className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed pl-space-sm border-l-2 border-primary">
                        "මෙම වෙබ් අඩවියේ පළවන තොරතුරු තනි පුද්ගලයන් විසින් සපයනු ලබන අතර, ඒවායේ නිවැරදිභාවය හෝ සත්‍යතාව පිළිබඳව අප වගකීමක් නොදරයි. ගෙවීම් හෝ තීරණ ගැනීමට පෙර තොරතුරු තහවුරු කරගන්න. පරිශීලකයන් අතර සිදුවන කිසිදු ගැටලුවකට අප වගකිව යුතු නොවේ. විමසීම් සඳහා: athulasiriproduction@gmail.com"
                      </blockquote>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      In no event shall Boarding.lk, its founders, or operators be liable for indirect, incidental, or consequential damages resulting from tenancy agreements, lockouts, utility cutoffs, or property loss.
                    </p>
                  </div>
                </section>

                <section className="scroll-mt-28 space-y-space-md" id="section-10">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md">10</span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">Dispute Resolution &amp; Contact Information</h2>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      If an amicable agreement cannot be reached between a student tenant and landlord, complaints may be escalated to the Grama Niladhari division of the local area or forwarded to our Trust &amp; Safety Desk for listing evaluation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                        <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg">
                          <span className="material-symbols-outlined text-[20px]">mail</span>
                          Legal &amp; Trust Email
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">For DMCA notices, trademark claims, or suspected scam listing removals:</p>
                        <a className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors block break-all font-semibold" href="mailto:athulasiriproduction@gmail.com">
                          athulasiriproduction@gmail.com
                        </a>
                      </div>
                      <div className="bg-surface-container-low p-space-md rounded-xl space-y-space-xs">
                        <div className="flex items-center gap-2 text-tertiary font-label-lg text-label-lg">
                          <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                          Safety &amp; Support Hotline
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Mon - Sat (8:00 AM - 6:00 PM Sri Lanka Time):</p>
                        <a className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors block font-semibold" href="tel:+94786733237">
                          +94 78 673 3237
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm p-space-md bg-surface-container rounded-xl">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Looking for our data protection statement and cookie usage?
                      </span>
                      <Link className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:underline shrink-0" to="/privacy">
                        <span>View Privacy Policy</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
