import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/guides")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Renting Guides & Campus Living Hub | boarding.lk" },
      {
        name: "description",
        content:
          "Sri Lanka student renting & knowledge hub: key money, CEB tariffs, annex contracts, scam prevention and campus-specific guides for SLIIT, Japura, Kelaniya and NSBM.",
      },
      { property: "og:title", content: "Renting Guides & Campus Living Hub | boarding.lk" },
      {
        property: "og:description",
        content:
          "Verified insights into key money deposits, CEB tariffs, annex contracts, and scam-free student rentals near Sri Lankan universities.",
      },
    ],
  }),
});

const filterChips = [
  { label: "All Guides (සියලු ලිපි)", category: "all" },
  { label: "Campus Living & University Zones", category: "campus-living" },
  { label: "Key Money & Budgeting (අත්තිකාරම් සහ වියදම්)", category: "key-money" },
  { label: "Boarding vs Annex Comparison", category: "boarding-vs-annex" },
  { label: "Landlord Negotiation & Legal Tips", category: "legal" },
  { label: "Safety & Scam Prevention", category: "safety" },
];

interface GuideCard {
  cat: string;
  badge: React.ReactNode;
  badgeClass: string;
  readTime: string;
  title: string;
  body: string;
  extra: React.ReactNode;
  footerLeft: React.ReactNode;
}

const guides: GuideCard[] = [
  {
    cat: "boarding-vs-annex",
    badge: (
      <>
        <span className="material-symbols-outlined text-[14px]">balance</span> Lifestyle Choice
      </>
    ),
    badgeClass: "bg-amber-subtle text-primary",
    readTime: "6 min read",
    title: "Boarding Room vs Private Annex: Which One Suits Your University Life & Budget?",
    body: "Detailed breakdown of private autonomy versus hostel communal living. Compare monthly costs (LKR 12,000 shared room vs LKR 35,000 annex), grocery & kitchen cooking permissions, curfew rules, and privacy.",
    extra: (
      <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between text-xs font-label-sm text-slate-body">
        <span>
          Average Bodim: <strong>LKR 9,000 - 16,000</strong>
        </span>
        <span>
          Annex: <strong>LKR 28,000+</strong>
        </span>
      </div>
    ),
    footerLeft: <span className="font-label-sm text-label-sm text-primary font-bold">Comparison Matrix Included</span>,
  },
  {
    cat: "key-money",
    badge: (
      <>
        <span className="material-symbols-outlined text-[14px]">account_balance_wallet</span> Money Protection
      </>
    ),
    badgeClass: "bg-emerald-subtle text-emerald-dark",
    readTime: "9 min read",
    title: "Student Key Money (අත්තිකාරම් මුදල්) Blueprint: Protecting Deposits & Avoiding Deductions",
    body: 'Why do landlords demand 3 to 6 months upfront? Learn how to legally phrase key money receipts, protect yourself against unreturned deposit disputes, and set fair 1-month notice exit clauses.',
    extra: (
      <div className="flex flex-wrap gap-1 text-[11px] font-label-sm text-on-surface-variant">
        <span className="bg-surface-container px-2 py-0.5 rounded">Advance Limits</span>
        <span className="bg-surface-container px-2 py-0.5 rounded">Written Receipts</span>
        <span className="bg-surface-container px-2 py-0.5 rounded">Notice Periods</span>
      </div>
    ),
    footerLeft: (
      <span className="font-label-sm text-label-sm text-emerald-dark font-bold flex items-center gap-1">
        <span className="material-symbols-outlined text-[14px]">download</span> Free PDF Receipt Included
      </span>
    ),
  },
  {
    cat: "campus-living",
    badge: (
      <>
        <span className="material-symbols-outlined text-[14px]">directions_bus</span> Transit Guide
      </>
    ),
    badgeClass: "bg-secondary-container text-on-secondary-container",
    readTime: "8 min read",
    title: "Campus Commuter Index: Best Affordable Suburbs for SLIIT, USJ Gangodawila & Kelaniya",
    body: "Can't find boarding right opposite campus? Discover the most budget-friendly adjacent suburbs with direct bus access (e.g. Athurugiriya & Kaduwela for SLIIT, Maharagama & Delkanda for Japura, Kiribathgoda for Kelaniya).",
    extra: (
      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1 text-xs">
        <div className="flex justify-between font-label-sm">
          <span className="text-on-surface-variant">SLIIT Malabe:</span>
          <span className="text-primary font-bold">177 / 143 Route Corridor</span>
        </div>
        <div className="flex justify-between font-label-sm">
          <span className="text-on-surface-variant">USJ Japura:</span>
          <span className="text-primary font-bold">High Level / Wijerama Hub</span>
        </div>
      </div>
    ),
    footerLeft: <span className="font-label-sm text-label-sm text-primary font-bold">Bus Route Map</span>,
  },
  {
    cat: "legal",
    badge: (
      <>
        <span className="material-symbols-outlined text-[14px]">real_estate_agent</span> Landlord Toolkit
      </>
    ),
    badgeClass: "bg-surface-container-high text-on-surface",
    readTime: "10 min read",
    title: "First-Time Landlord Guide: How to List, Screen Verified Undergraduates & Draft Agreements",
    body: "Turn your unused rooms into reliable monthly income. Step-by-step guidance on setting competitive LKR rates, checking campus enrollment letters, house rules for study hours, and maintaining positive host relations.",
    extra: (
      <div className="bg-emerald-subtle/50 p-space-sm rounded-lg text-xs font-body-sm text-emerald-dark flex items-center gap-2">
        <span className="material-symbols-outlined text-[16px]">verified</span>
        <span>100% Free property listing on Boarding.lk</span>
      </div>
    ),
    footerLeft: <span className="font-label-sm text-label-sm text-on-surface-variant">For Property Owners</span>,
  },
  {
    cat: "safety",
    badge: (
      <>
        <span className="material-symbols-outlined text-[14px]">gpp_maybe</span> Scam Alert
      </>
    ),
    badgeClass: "bg-error-container text-on-error-container",
    readTime: "5 min read",
    title: "Spotting Bodim Scams: 5 Critical Red Flags When Renting Near Sri Lankan Universities",
    body: 'Never transfer "booking advances" via eZ Cash or bank transfer before physically inspecting the room and verifying the host\'s NIC. Learn the exact script scammers use on Facebook groups and unmoderated classifieds.',
    extra: (
      <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-1 text-xs text-danger-red font-medium">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">close</span> No physical viewings allowed
        </span>
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">close</span> Demands advance before key handover
        </span>
      </div>
    ),
    footerLeft: <span className="font-label-sm text-label-sm text-error font-bold">Safety Mandatory</span>,
  },
  {
    cat: "key-money",
    badge: (
      <>
        <span className="material-symbols-outlined text-[14px]">electric_bolt</span> Utility Breakdown
      </>
    ),
    badgeClass: "bg-amber-subtle text-primary",
    readTime: "7 min read",
    title: "Utility Bills Breakdown: Water Sub-Meters and CEB Electricity Tariffs in Boarding Places",
    body: "Avoid getting overcharged by understanding domestic tariff slabs. How to verify dedicated electricity sub-meters, what rate per kWh is fair in boarding houses, and shared water bill calculations.",
    extra: (
      <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between text-xs font-label-sm text-slate-body">
        <span>CEB Base Tariff Slab</span>
        <span className="text-primary font-bold">Unit Calculation Chart</span>
      </div>
    ),
    footerLeft: <span className="font-label-sm text-label-sm text-primary font-bold">Calculator Ready</span>,
  },
];

const campusHubs = [
  {
    initials: "SL",
    initialsClass: "bg-amber-subtle text-primary",
    listings: "61+ Listings",
    title: "SLIIT & CINEC Hub",
    desc: "Malabe, Pittugala, Chandrika Kumaratunga Mawatha, Hokandara.",
  },
  {
    initials: "USJ",
    initialsClass: "bg-emerald-subtle text-emerald-dark",
    listings: "75+ Listings",
    title: "University of Sri Jayewardenepura",
    desc: "Gangodawila, Wijerama, Delkanda, Nugegoda High-Level.",
  },
  {
    initials: "UoK",
    initialsClass: "bg-secondary-container text-on-secondary-container",
    listings: "34+ Listings",
    title: "University of Kelaniya",
    desc: "Dalugama, Peliyagoda, Kiribathgoda, Wedamulla zones.",
  },
  {
    initials: "NS",
    initialsClass: "bg-primary-fixed text-on-primary-fixed",
    listings: "62+ Listings",
    title: "NSBM Green University",
    desc: "Pitipana, Homagama, Meegoda, Kottawa highway links.",
  },
];

function Page() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [rent, setRent] = useState(15000);
  const [living, setLiving] = useState(20000);

  const estUtilities = 3500;
  const keyMoney = rent * 3;
  const totalMonth = rent + living + estUtilities;
  const formatLKR = (num: number) => "LKR " + num.toLocaleString("en-US");

  const visibleGuides = guides.filter((g) => {
    const matchesCategory = activeCategory === "all" || g.cat === activeCategory;
    const text = (g.title + " " + g.body).toLowerCase();
    const matchesQuery = query.trim() === "" || text.includes(query.trim().toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Hub Hero Header & Quick Search */}
          <section className="relative w-full bg-surface-container-lowest shadow-[0_2px_12px_rgba(15,23,42,0.03)] pb-space-xl pt-space-lg">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-lg">
              {/* Overline & Breadcrumb */}
              <div className="flex flex-wrap items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                <Link className="hover:text-primary transition-colors" to="/">
                  Home
                </Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary font-bold">Renting Guides &amp; Campus Living Hub</span>
                <span className="mx-2 text-outline-variant">•</span>
                <span className="bg-amber-subtle text-primary font-label-sm text-label-sm px-space-sm py-0.5 rounded-full font-bold">
                  2026 Academic Intake Edition
                </span>
              </div>
              {/* Main Headline & Bilingual Context */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-end">
                <div className="lg:col-span-8 flex flex-col gap-space-xs">
                  <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
                    Sri Lanka Student Renting <span className="text-primary">&amp; Knowledge Hub</span>
                  </h1>
                  <p className="font-headline-sm text-headline-sm text-on-surface-variant font-normal">
                    ශිෂ්‍ය බෝඩිං සහ නිවාස කුලියට ගැනීමේ පූර්ණ මඟපෙන්වීම
                  </p>
                  <p className="font-body-md text-body-md text-slate-body max-w-2xl pt-1">
                    Navigating campus living near SLIIT, Japura, Kelaniya, and NSBM. Verified insights into key money
                    deposits, CEB tariffs, annex contracts, and scam-free student rentals.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-2 bg-surface-container-low p-space-md rounded-xl">
                  <div className="flex items-center gap-2 text-primary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                    <span>Free Student Legal &amp; Lease Advice</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Official landlord verification hotline &amp; bilingual advisory backed by Boarding.lk student
                    support.
                  </p>
                  <a
                    className="font-label-sm text-label-sm font-bold text-on-surface flex items-center gap-1 hover:text-primary transition-colors"
                    href="tel:+94786733237"
                  >
                    Hotline: +94 78 673 3237
                  </a>
                </div>
              </div>
              {/* Search Box Module */}
              <div className="relative w-full max-w-3xl bg-surface rounded-xl p-2 shadow-md">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="flex items-center gap-space-xs flex-1 w-full px-space-sm py-space-xs">
                    <span className="material-symbols-outlined text-primary text-[24px]">search</span>
                    <input
                      className="w-full bg-transparent text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md focus:outline-none"
                      id="guideSearchInput"
                      placeholder="Search guides: e.g. How much key money is normal, SLIIT bus routes, CEB tariff..."
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                  <button
                    className="w-full sm:w-auto bg-primary text-on-primary font-label-lg text-label-lg px-space-lg py-space-sm rounded-lg hover:bg-amber-hover transition-colors flex items-center justify-center gap-1 shrink-0"
                    type="button"
                  >
                    <span>Search Hub</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
              {/* Quick Topic Filter Chips */}
              <div className="flex items-center gap-space-xs overflow-x-auto pb-1 scrollbar-none pt-2" id="filterChipsContainer">
                {filterChips.map((chip) => (
                  <button
                    key={chip.category}
                    className={`filter-chip shrink-0 px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all ${
                      activeCategory === chip.category
                        ? "active-chip bg-on-surface text-on-primary shadow-sm"
                        : "bg-surface-container text-slate-body hover:bg-surface-container-high"
                    }`}
                    data-category={chip.category}
                    type="button"
                    onClick={() => setActiveCategory(chip.category)}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl flex flex-col gap-space-xl w-full">
            {/* Featured Top Guide (Split Card Bento Element) */}
            <article className="w-full bg-surface-container-lowest rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Image Half */}
                <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[460px] overflow-hidden">
                  <img
                    alt="Spacious airy student study bedroom near Colombo University campus with sunny window and wooden desk"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1WR-8vZ9DjYyvshHzsFWZrIFFHBlnKxbOxHZwqgHVkj5HvuQ7CO6lLVmC0OGFMzBJxdsnfx8i7t3h61ZUN0mJhwF0Pdocx369fiml_sz6Fjuao-0fgdgVXvAQPyraIfQDXw01FVVRe3aKdSSCoUww8qSybk_G6rIEt-Ss6QpkkZiCMGk26Z9-WSavjP045sc9Wn9FICei7etoNNcB_PyXV_kECrM-aPQuC_D_4-dGEHLvxiP2mhwQuNcvJ1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent to-transparent lg:hidden"></div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-primary text-on-primary font-label-sm text-label-sm px- space-sm py-1 rounded-full uppercase tracking-wider font-bold shadow-sm">
                      Essential Read
                    </span>
                    <span className="bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm px-space-sm py-1 rounded-full font-bold shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">verified</span> Verified Guide
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 lg:hidden text-white font-label-sm text-label-sm">
                    Updated for 2026 Academic Intake
                  </div>
                </div>
                {/* Copy Half */}
                <div className="lg:col-span-6 p-space-lg lg:p-space-xl flex flex-col justify-between bg-surface-container-lowest">
                  <div className="flex flex-col gap-space-sm">
                    <div className="hidden lg:flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
                      <span className="inline-flex items-center gap-1 text-primary font-bold">
                        <span className="material-symbols-outlined text-[16px]">school</span> University Living
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">schedule</span> 12 min read
                      </span>
                      <span>•</span>
                      <span className="bg-surface-container px-2 py-0.5 rounded text-on-surface font-semibold">
                        Updated for 2026 Academic Intake
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight font-bold">
                      The 2026 Complete University Bodim Guide: Finding Safe, Budget-Friendly Stays Near SLIIT,
                      Japura, Kelaniya &amp; NSBM
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Moving away from home for higher education in Sri Lanka can be daunting. From negotiating 3 to
                      6 months key money with Colombo landlords to navigating sub-metered water bills and 177/143
                      bus schedules, this exhaustive guide equips undergraduates with everything needed for a
                      seamless transition.
                    </p>
                    {/* Summary Bullet Points */}
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs mt-2">
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                        What you will learn:
                      </span>
                      <ul className="space-y-1 font-body-sm text-body-sm text-slate-body">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                          Campus-by-campus average rent benchmarks (Malabe, Gangodawila, Dalugama, Homagama)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                          Security deposit ("Key Money") recovery clauses and bilingual receipt templates
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                          Curfew, cooking allowances, and overnight guest restrictions unpacked
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-space-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-sm">
                        LK
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface font-semibold">
                          Boarding.lk Campus Editorial
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Colombo Student Advisory Team
                        </span>
                      </div>
                    </div>
                    <button
                      className="bg-primary text-on-primary px-space-lg py-space-sm rounded-lg font-label-lg text-label-lg hover:bg-amber-hover transition-colors flex items-center gap-1 shadow-sm"
                      type="button"
                    >
                      <span>Read Full Guide</span>
                      <span className="material-symbols-outlined text-[18px]">east</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Section Header for Grid */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs pt-4">
              <div>
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                  Comprehensive Knowledge Base
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  Essential Renter Guides &amp; Articles
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Carefully researched advice by seasoned Sri Lankan university alumni and legal experts.
                </p>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant" id="guidesCountLabel">
                Showing {visibleGuides.length} practical guide{visibleGuides.length === 1 ? "" : "s"}
              </span>
            </div>

            {/* Structured Grid of Essential Resource Guides */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter" id="guidesGrid">
              {visibleGuides.map((guide, idx) => (
                <article
                  key={idx}
                  className="guide-card flex flex-col justify-between bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-lg transition-all duration-200"
                  data-cat={guide.cat}
                >
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span
                        className={`${guide.badgeClass} px-space-sm py-1 rounded-full font-label-sm text-label-sm font-bold flex items-center gap-1`}
                      >
                        {guide.badge}
                      </span>
                      <span className="text-on-surface-variant font-label-sm text-label-sm flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-[14px]">timer</span> {guide.readTime}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold hover:text-primary transition-colors cursor-pointer">
                      {guide.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed line-clamp-3">
                      {guide.body}
                    </p>
                    {guide.extra}
                  </div>
                  <div className="pt-space-md flex items-center justify-between border-t border-transparent">
                    {guide.footerLeft}
                    <button
                      className="text-primary font-label-md text-label-md font-bold hover:text-amber-hover flex items-center gap-0.5"
                      type="button"
                    >
                      <span>Read</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Interactive Downloadable Tools & Checklists Section */}
            <section className="w-full bg-surface-container-low rounded-xl p-space-lg lg:p-space-xl flex flex-col gap-space-lg">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">build_circle</span>
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                    Free Student Toolkits
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  Downloadable Resources &amp; Student Calculator
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Empowering Sri Lankan undergraduates with legally vetted documents and budgeting tools.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-stretch">
                {/* Tool 1: Pre-Move Inspection PDF */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-emerald-subtle text-emerald-dark flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px]">fact_check</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Pre-Move-In Room Inspection Checklist
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      කාමර පරීක්ෂණ පිරික්සුම් ලැයිස්තුව (Sinhala &amp; English)
                    </p>
                    <p className="font-body-md text-body-md text-slate-body">
                      A 28-point inspection document to document existing wall paint defects, water tap leaks,
                      electrical sockets, mattress quality, and window grilles before paying advance key money.
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-on-surface-variant pt-2">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary text-[14px]">check</span> Print-friendly A4 PDF format
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary text-[14px]">check</span> Joint tenant &amp; host signature sign-off
                      </span>
                    </div>
                  </div>
                  <div className="pt-space-md">
                    <button
                      className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg py-space-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      <span>Download Checklist (PDF)</span>
                    </button>
                  </div>
                </div>
                {/* Tool 2: Bilingual Agreement Template */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-amber-subtle text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px]">description</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Bilingual Standard Tenancy Agreement
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      සිංහල සහ ඉංග්‍රීසි සම්මත බදු ගිවිසුම් ආකෘතිය
                    </p>
                    <p className="font-body-md text-body-md text-slate-body">
                      Legally drafted agreement template compliant with Sri Lankan rent conventions. Covers key money
                      refund guarantees, 30-day exit notices, quiet study hours, and visitor protocols.
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-on-surface-variant pt-2">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary text-[14px]">check</span> Editable Word Doc &amp; Signed PDF
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary text-[14px]">check</span> Verified by Colombo legal practitioners
                      </span>
                    </div>
                  </div>
                  <div className="pt-space-md">
                    <button
                      className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg py-space-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">download</span>
                      <span>Download Agreement (.DOC)</span>
                    </button>
                  </div>
                </div>
                {/* Tool 3: Interactive Student Monthly Budget Calculator */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col gap-space-sm">
                    <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px]">calculate</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Student Monthly Budget Calculator
                    </h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      මාසික වියදම් ඇස්තමේන්තුව (LKR)
                    </p>
                    {/* Mini Form inside card */}
                    <div className="flex flex-col gap-2 pt-1 text-xs">
                      <div>
                        <label className="font-label-sm text-on-surface-variant block mb-1" htmlFor="calcRent">
                          Target Monthly Room Rent (LKR)
                        </label>
                        <input
                          className="w-full bg-surface-container-low px-2 py-1.5 rounded text-on-surface font-label-md focus:outline-none"
                          id="calcRent"
                          type="number"
                          value={rent}
                          onChange={(e) => setRent(Number(e.target.value) || 0)}
                        />
                      </div>
                      <div>
                        <label className="font-label-sm text-on-surface-variant block mb-1" htmlFor="calcLiving">
                          Campus Commute &amp; Meals (LKR)
                        </label>
                        <input
                          className="w-full bg-surface-container-low px-2 py-1.5 rounded text-on-surface font-label-md focus:outline-none"
                          id="calcLiving"
                          type="number"
                          value={living}
                          onChange={(e) => setLiving(Number(e.target.value) || 0)}
                        />
                      </div>
                      <div className="bg-surface-container-low p-2 rounded flex items-center justify-between mt-1">
                        <span className="font-body-sm text-on-surface-variant">Recommended Key Money (3 Mos):</span>
                        <span className="font-label-md text-primary font-bold" id="calcKeyMoney">
                          {formatLKR(keyMoney)}
                        </span>
                      </div>
                      <div className="bg-primary/10 p-2 rounded flex items-center justify-between">
                        <span className="font-label-sm text-on-surface font-bold">Total Est. Monthly Outflow:</span>
                        <span className="font-headline-sm text-primary font-bold" id="calcTotalMonth">
                          {formatLKR(totalMonth)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-sm">
                    <span className="font-body-sm text-[11px] text-on-surface-variant text-center block">
                      Includes ~LKR 3,500 est. electricity sub-meter &amp; shared water.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Visual Campus Zones Quick Links Bento */}
            <section className="w-full flex flex-col gap-space-md">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                  Campus Sub-Hubs
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                  Explore University Specific Rental Hubs
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {campusHubs.map((hub) => (
                  <Link
                    key={hub.title}
                    className="group bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-2"
                    to="/search"
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-10 h-10 rounded-full ${hub.initialsClass} flex items-center justify-center font-bold`}
                      >
                        {hub.initials}
                      </div>
                      <span className="bg-surface-container px-2 py-0.5 rounded text-[11px] font-label-sm text-on-surface-variant">
                        {hub.listings}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      {hub.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{hub.desc}</p>
                    <span className="font-label-sm text-label-sm text-primary font-bold flex items-center gap-1 mt-auto pt-2">
                      View Campus Guide <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Campus Advisory Helpline & Student Community Banner */}
            <section className="w-full bg-primary text-on-primary rounded-2xl p-space-lg lg:p-space-xl shadow-xl relative overflow-hidden">
              {/* Decorative background circles */}
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary-container/40 pointer-events-none blur-2xl"></div>
              <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-amber-hover/30 pointer-events-none blur-xl"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
                <div className="lg:col-span-8 flex flex-col gap-space-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-on-primary/20 text-on-primary font-label-sm text-label-sm font-bold w-fit">
                    <span className="material-symbols-outlined text-[15px]">support_agent</span>
                    Island-Wide Student Housing Helpline
                  </span>
                  <h2 className="font-headline-lg text-headline-lg font-bold tracking-tight text-on-primary">
                    Facing a Landlord Dispute or Unsure About Key Money?
                  </h2>
                  <p className="font-body-md text-body-md opacity-90 max-w-2xl leading-relaxed">
                    Our student housing desk provides free, confidential guidance to undergraduates across Sri
                    Lanka. Message our hotline with your agreement copy or ad link for immediate verification.
                  </p>
                  <div className="flex flex-wrap items-center gap-space-md pt-2 font-label-md text-label-md">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">call</span>
                      Hotline: +94 78 673 3237
                    </span>
                    <span className="opacity-40">•</span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                      Colombo 08 Headquarters
                    </span>
                    <span className="opacity-40">•</span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px]">access_time</span>
                      Open Mon-Sat 8:30 AM - 7:00 PM
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-start lg:items-end">
                  <a
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-subtle text-emerald-dark px-space-xl py-space-md rounded-xl font-label-lg text-label-lg font-bold hover:bg-white transition-all shadow-md"
                    href="https://wa.me/94786733237?text=Hello%20Boarding.lk%20Advisory%2C%20I%20am%20a%20student%20and%20need%20help%20with%20a%20rental%20guide."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>WhatsApp Advisory (+94 78 673 3237)</span>
                  </a>
                  <Link
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-on-primary/10 hover:bg-on-primary/20 text-on-primary px-space-lg py-space-sm rounded-xl font-label-md text-label-md font-semibold transition-colors"
                    to="/support"
                  >
                    <span>Submit a Dispute Ticket</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* Safety Disclaimer Bar compliant with platform standards */}
            <div className="w-full bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm text-xs font-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">shield</span>
                <span>
                  <strong>Safety Note:</strong> Always personally inspect the premises and confirm the landlord's
                  national identity card (NIC) prior to executing any financial transaction. Report unverified
                  accounts to athulasiriproduction@gmail.com.
                </span>
              </div>
              <Link className="text-primary font-bold hover:underline shrink-0" to="/terms">
                Terms &amp; Rental Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
