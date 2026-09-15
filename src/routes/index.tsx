import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "boarding.lk - Sri Lanka's Verified Student & Youth Housing Hub" },
      {
        name: "description",
        content:
          "Find certified student rooms, annexes, and houses within walking distance to SLIIT, Japura, Kelaniya, NSBM, and Colombo faculties. Direct landlord contacts, zero middlemen commission.",
      },
      { property: "og:title", content: "boarding.lk - Sri Lanka's Verified Student & Youth Housing Hub" },
      {
        property: "og:description",
        content:
          "Find certified student rooms, annexes, and houses within walking distance to major Sri Lankan universities. Direct landlord contacts, zero commission.",
      },
    ],
  }),
});

function CategoryTile({
  bgClass,
  textClass,
  icon,
  title,
  subtitle,
  count,
  countTextClass,
}: {
  bgClass: string;
  textClass: string;
  icon: string;
  title: string;
  subtitle: string;
  count: string;
  countTextClass: string;
}) {
  return (
    <a
      className="group bg-surface-container-lowest p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-2 hover:-translate-y-1"
      href="#"
    >
      <div
        className={`w-12 h-12 rounded-xl ${bgClass} ${textClass} flex items-center justify-center group-hover:scale-110 transition-transform`}
      >
        <span className="material-symbols-outlined text-[26px]">{icon}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary font-bold">{title}</span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">{subtitle}</span>
      </div>
      <span className={`mt-1 px-2 py-0.5 rounded-full bg-surface-container ${countTextClass} font-mono text-[11px] font-bold`}>
        {count}
      </span>
    </a>
  );
}

function ListingCard({
  imgSrc,
  imgAlt,
  verifiedLabel,
  tagLabel,
  price,
  priceUnit,
  distanceLabel,
  title,
  description,
  amenities,
}: {
  imgSrc: string;
  imgAlt: string;
  verifiedLabel: string;
  tagLabel: string;
  price: string;
  priceUnit: string;
  distanceLabel: string;
  title: string;
  description: string;
  amenities: { icon: string; label: string }[];
}) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col group">
      <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          alt={imgAlt}
          src={imgSrc}
        />
        <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container-lowest/90 backdrop-blur-md text-emerald-dark font-label-sm text-label-sm font-bold shadow-sm">
          <span className="material-symbols-outlined text-[15px] text-tertiary">verified</span>
          <span>{verifiedLabel}</span>
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-on-surface/80 backdrop-blur-md text-white font-label-sm text-label-sm">
          {tagLabel}
        </div>
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm font-bold shadow-md">
          {price} <span className="font-body-sm text-body-sm font-normal text-on-primary/90">{priceUnit}</span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-grow">
        <div className="flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-bold">
          <span className="material-symbols-outlined text-[16px]">school</span>
          <span>{distanceLabel}</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 pt-1 border-t border-surface-container text-on-surface-variant font-label-sm text-label-sm">
          {amenities.map((a) => (
            <span key={a.label} className="inline-flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded">
              <span className="material-symbols-outlined text-[14px]">{a.icon}</span> {a.label}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2 mt-auto">
          <button
            className="w-full py-2.5 px-3 rounded-lg bg-emerald-dark text-on-tertiary font-label-sm text-label-sm font-bold flex items-center justify-center gap-1.5 hover:bg-tertiary transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>WhatsApp Owner</span>
          </button>
          <button
            className="w-full py-2.5 px-3 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center gap-1 hover:bg-surface-container-high transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span>Call Landlord</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function UniversityHubCard({
  index,
  badgeBg,
  badgeText,
  places,
  title,
  location,
  description,
  ctaLabel,
}: {
  index: string;
  badgeBg: string;
  badgeText: string;
  places: string;
  title: string;
  location: string;
  description: string;
  ctaLabel: string;
}) {
  return (
    <a className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3 group" href="#">
      <div className="flex items-center justify-between">
        <span className={`w-10 h-10 rounded-xl ${badgeBg} ${badgeText} flex items-center justify-center font-bold font-headline-sm`}>
          {index}
        </span>
        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-mono text-[11px] font-bold">
          {places}
        </span>
      </div>
      <div className="flex flex-col">
        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-bold">
          {title}
        </h3>
        <span className="font-label-md text-label-md text-on-surface-variant">{location}</span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{description}</p>
      <span className="text-primary font-label-sm text-label-sm font-bold inline-flex items-center gap-1 pt-1 group-hover:translate-x-1 transition-transform">
        {ctaLabel} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
      </span>
    </a>
  );
}

const districts = [
  { name: "Colombo", count: "717 listings" },
  { name: "Gampaha", count: "78 listings" },
  { name: "Kandy", count: "47 listings" },
  { name: "Anuradhapura", count: "22 listings" },
  { name: "Kalutara", count: "17 listings" },
  { name: "Galle", count: "16 listings" },
  { name: "Kurunegala", count: "8 listings" },
];

const towns = [
  { name: "Homagama", count: "62" },
  { name: "Malabe", count: "61" },
  { name: "Nugegoda", count: "55" },
  { name: "Maharagama", count: "47" },
  { name: "Dehiwala", count: "41" },
  { name: "Borella", count: "33" },
  { name: "Wellawatte", count: "25" },
  { name: "Boralesgamuwa", count: "25" },
  { name: "Kaduwela", count: "23" },
  { name: "Rajagiriya", count: "19" },
  { name: "Kandy City", count: "19" },
  { name: "Battaramulla", count: "18" },
  { name: "Kadawatha", count: "18" },
  { name: "Ratmalana", count: "17" },
  { name: "Kirulapana", count: "16" },
  { name: "Piliyandala", count: "16" },
  { name: "Kelaniya", count: "15" },
  { name: "Mattegoda", count: "14" },
  { name: "Moratuwa", count: "14" },
  { name: "Mount-Lavinia", count: "14" },
  { name: "Pannipitiya", count: "12" },
  { name: "Narahenpita", count: "11" },
  { name: "Maradana", count: "10" },
  { name: "Panadura", count: "10" },
];

function Page() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Blueprint Technical Header Badge Bar */}
          <section className="w-full bg-surface-container border-b border-surface-container-high py-2 px-6">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-secondary">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-bold tracking-wider text-on-surface uppercase">System Architecture // UX Wireframe Blueprint</span>
                <span className="text-outline-variant">|</span>
                <span className="text-on-surface-variant font-medium">Doc: BLK-HOMEPAGE-REV3.2</span>
              </div>
              <div className="flex items-center gap-4 text-[11px]">
                <span className="bg-surface-container-highest px-2 py-0.5 rounded text-on-surface">Grid: 12-Col Desktop / 4-Col Mobile</span>
                <span className="bg-surface-container-highest px-2 py-0.5 rounded text-on-surface">Locale: Bilingual LK (EN / සිංහල)</span>
                <span className="text-primary font-semibold">Status: Active Concept</span>
              </div>
            </div>
          </section>

          {/* Hero & High-Precision Search Architecture */}
          <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-surface-container-low py-12 lg:py-16 px-6 lg:px-12">
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundSize: "32px 32px",
                backgroundImage:
                  "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
              }}
            ></div>
            <div className="relative max-w-7xl mx-auto flex flex-col gap-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 self-start bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-label-sm uppercase tracking-wider font-bold">
                    <span className="material-symbols-outlined text-[15px]">verified_user</span>
                    <span>Sri Lanka's Verified Student &amp; Youth Housing Hub</span>
                  </div>
                  <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-tight">
                    අනම් මනම් නෑ... <br />
                    <span className="text-primary underline decoration-primary-fixed-dim decoration-4 underline-offset-8">බෝඩිමක් නම්</span> Boarding.lk
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                    Find certified student rooms, annexes, and houses within walking distance to SLIIT, Japura, Kelaniya, NSBM, and Colombo faculties. Direct landlord contacts, zero middlemen commission.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <div className="flex items-center gap-2 text-label-md text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg">
                      <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                      <span>717+ Colombo Boardings</span>
                    </div>
                    <div className="flex items-center gap-2 text-label-md text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg">
                      <span className="material-symbols-outlined text-tertiary text-[18px]">school</span>
                      <span>15+ Campus Clusters</span>
                    </div>
                    <div className="flex items-center gap-2 text-label-md text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg">
                      <span className="material-symbols-outlined text-primary text-[18px]">payments</span>
                      <span>100% Free for Students</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5 relative">
                  <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-amber-subtle/50 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="w-32 h-32 shrink-0 flex items-center justify-center bg-primary-fixed/40 rounded-2xl relative">
                      <svg className="w-28 h-28 text-on-surface" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 160 160">
                        <circle cx="85" cy="45" r="22" strokeWidth="4"></circle>
                        <circle cx="78" cy="42" fill="currentColor" r="2.5"></circle>
                        <circle cx="93" cy="42" fill="currentColor" r="2.5"></circle>
                        <path d="M76 52 Q85 64 96 52" strokeWidth="3.5"></path>
                        <line strokeWidth="4" x1="85" x2="80" y1="67" y2="108"></line>
                        <path d="M80 108 L62 138 L48 132" strokeWidth="4"></path>
                        <path d="M80 108 L104 126 L124 122" strokeWidth="4"></path>
                        <path d="M84 78 L60 68 L56 82" strokeWidth="3.5"></path>
                        <path d="M84 78 L114 84 L128 72" strokeWidth="3.5"></path>
                        <rect fill="#ffdcc3" height="22" rx="3" stroke="currentColor" strokeWidth="3" transform="rotate(15 120 70)" width="30" x="116" y="62"></rect>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1.5 z-10 text-center sm:text-left">
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Easy Bodim Hunt</span>
                      <p className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">
                        ඔබේ සිතැඟි අනුව ගැළපෙනම ලැගුම්හල!
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Direct phone verification with landlords. No hidden agent fees.
                      </p>
                      <div className="pt-1 flex items-center justify-center sm:justify-start gap-2">
                        <span className="inline-flex items-center gap-1 text-[12px] font-bold text-tertiary">
                          <span className="material-symbols-outlined text-[16px]">call</span> +94 78 673 3237
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Multifunctional Filter / Search Engine Card */}
              <div className="bg-surface-container-lowest p-4 sm:p-6 rounded-2xl shadow-xl">
                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
                  <div className="lg:col-span-4 flex flex-col gap-1 bg-surface-container-low px-4 py-2.5 rounded-xl focus-within:ring-2 focus-within:ring-primary transition-all">
                    <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-primary">location_on</span>
                      City, Campus, or Bus Route
                    </label>
                    <input
                      className="w-full bg-transparent font-label-lg text-label-lg text-on-surface outline-none placeholder:text-on-surface-variant/50"
                      placeholder="e.g. SLIIT Malabe, Wijerama, Borella..."
                      type="text"
                      defaultValue="Malabe (SLIIT / CINEC Zone)"
                    />
                  </div>
                  <div className="lg:col-span-3 flex flex-col gap-1 bg-surface-container-low px-4 py-2.5 rounded-xl focus-within:ring-2 focus-within:ring-primary transition-all">
                    <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-primary">apartment</span>
                      Category / වර්ගය
                    </label>
                    <select className="w-full bg-transparent font-label-lg text-label-lg text-on-surface outline-none cursor-pointer">
                      <option>Boarding Rooms (කාමර)</option>
                      <option>Annexes (ඇනෙක්ස්)</option>
                      <option>Whole Houses (නිවාස)</option>
                      <option>Apartments (සඳළුතල)</option>
                      <option>Student Hostels</option>
                    </select>
                  </div>
                  <div className="lg:col-span-3 flex flex-col gap-1 bg-surface-container-low px-4 py-2.5 rounded-xl focus-within:ring-2 focus-within:ring-primary transition-all">
                    <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-primary">payments</span>
                      Monthly Budget Ceiling
                    </label>
                    <select className="w-full bg-transparent font-label-lg text-label-lg text-on-surface outline-none cursor-pointer" defaultValue="Up to LKR 25,000 / mo">
                      <option>Up to LKR 15,000 / mo</option>
                      <option>Up to LKR 25,000 / mo</option>
                      <option>Up to LKR 40,000 / mo</option>
                      <option>Any Budget (සියල්ල)</option>
                    </select>
                  </div>
                  <div className="lg:col-span-2 flex items-end">
                    <button
                      className="w-full h-12 bg-primary hover:bg-amber-hover text-on-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[20px]">search</span>
                      <span>Search Now</span>
                    </button>
                  </div>
                </form>
                <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-surface-container">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Campus Quick-Filter:</span>
                  <button className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold flex items-center gap-1 hover:brightness-95 transition-all" type="button">
                    <span className="material-symbols-outlined text-[14px]">school</span> SLIIT &amp; CINEC (Malabe)
                  </button>
                  <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                    USJ Japura (Wijerama)
                  </button>
                  <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                    Kelaniya University
                  </button>
                  <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                    NSBM Pitipana (Homagama)
                  </button>
                  <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                    Colombo Uni &amp; UCSC
                  </button>
                  <button className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                    Girls Only (ගැහැණු ළමුන්)
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Category Grid Architecture */}
          <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-10">
            <div className="flex flex-col md:flex-row items-baseline justify-between gap-2 mb-6">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Explore Property Categories</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Real-time availability of verified boarding spaces across Sri Lanka</p>
              </div>
              <Link className="inline-flex items-center gap-1 text-primary font-label-lg text-label-lg hover:underline font-bold" to="/search">
                <span>View All Listings (937+)</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <CategoryTile bgClass="bg-amber-subtle" textClass="text-primary" icon="single_bed" title="Boarding Places" subtitle="බෝඩිම් කාමර" count="651 Live" countTextClass="text-primary" />
              <CategoryTile bgClass="bg-secondary-container" textClass="text-secondary" icon="door_front" title="Annexes" subtitle="ඇනෙක්ස්" count="86 Live" countTextClass="text-secondary" />
              <CategoryTile bgClass="bg-emerald-subtle" textClass="text-emerald-dark" icon="cottage" title="Full Houses" subtitle="නිවාස" count="109 Live" countTextClass="text-emerald-dark" />
              <CategoryTile bgClass="bg-surface-container-high" textClass="text-on-surface" icon="domain" title="Apartments" subtitle="සඳළුතල" count="34 Live" countTextClass="text-on-surface-variant" />
              <CategoryTile bgClass="bg-surface-container-high" textClass="text-on-surface" icon="storefront" title="Commercial" subtitle="කඩ කාමර" count="21 Live" countTextClass="text-on-surface-variant" />
              <CategoryTile bgClass="bg-surface-container-high" textClass="text-on-surface" icon="hotel" title="Guest Houses" subtitle="නවාතැන්පල" count="18 Live" countTextClass="text-on-surface-variant" />
            </div>
          </section>

          {/* Featured Listings Discovery Architecture */}
          <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-8 bg-primary rounded-full"></span>
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Verified Listings Near Faculties</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Inspected student rooms with direct landlord phone lines</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-low p-1 rounded-xl overflow-x-auto max-w-full">
                <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-label-sm text-label-sm text-on-surface shadow-sm font-bold" type="button">All Popular</button>
                <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-medium transition-colors" type="button">SLIIT Malabe</button>
                <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-medium transition-colors" type="button">USJ Nugegoda</button>
                <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-medium transition-colors" type="button">Kelaniya</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ListingCard
                imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDJt8_weAFPo_cBz1Hz0AZOdYkk8n9afYXS5_xxnkeXu238V8O5NSwLXtWaC512WASO_VAPWzTwNNO-Es4PQqMCBZAlG4jIxsddJL0PGHwv6zbBn6bvF5sqnzVBX2A5Q2QaPU-qm815MZ36Jk8ym8dLKOX-P_VhSmm16P5oPqJqQuU1pCVeL-iAx98GldkxAqOEI4NiyCt_No0DHRJwZhZW__YDMbK6UOsulnx-O4BFq8Xz8mHwwr8GQQ"
                imgAlt="Sunlit clean student boarding room interior in Sri Lanka with single bed, study table, ceiling fan, wooden wardrobe, white tiled floor, tropical courtyard window view"
                verifiedLabel="Landlord Verified"
                tagLabel="Girls Only (ගැහැණු)"
                price="LKR 16,500"
                priceUnit="/mo"
                distanceLabel="650m to SLIIT Campus, Malabe"
                title="Modern Twin-Sharing Room with Attached Washroom"
                description="Peaceful residential neighborhood on Kaduwela Road. Water & electricity included. Study desk, high-speed Wi-Fi, separate private entrance."
                amenities={[
                  { icon: "shower", label: "Attached Bath" },
                  { icon: "wifi", label: "Free Wi-Fi" },
                  { icon: "bolt", label: "Bills Inc." },
                ]}
              />
              <ListingCard
                imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDX1wteHUHSXF2K49WpfXY2Zh7maDlLZJ5IeJZEKyyzyWzK6yd4FepnJWZnR5dXRSmaTAJ-DC33Xj5zBWXkaqsbjP9KiQvaewd3O2ZWzPgGz3R6Hk5Y1KVbl-gv2vnLzPU7tO-l00hXAgK5jSQ_1MyZyoNXRcl2ACQdsrVU4eSMBqhS4HfmgH0bU_Wygys7PUN6UeiIUGihge8hC1ALkCkubwgSFpq3-Y9g8MfNsWFxLqzbHjGbOvUCkw"
                imgAlt="Cozy ground floor residential annex in Nugegoda Sri Lanka with secure steel gate, pantry counter, ceiling fan, polished terrazzo flooring and small veranda area"
                verifiedLabel="Landlord Verified"
                tagLabel="Boys or Working (පිරිමි)"
                price="LKR 28,000"
                priceUnit="/mo"
                distanceLabel="400m to Japura University (Wijerama)"
                title="Independent 1-Bedroom Annex with Pantry"
                description="Just 3 minutes to Wijerama junction. Ideal for 2 medical or tech undergraduates. Separate electricity meter, bike parking available."
                amenities={[
                  { icon: "countertops", label: "Kitchenette" },
                  { icon: "two_wheeler", label: "Bike Park" },
                  { icon: "key", label: "Private Gate" },
                ]}
              />
              <ListingCard
                imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCjmwMX3FR_IcYs9iZMuJwqhOZpsT341K0n3qatCRwsctHhQ2wdwdcGpTDTb66QRW4Nh4wTiE9myECVguHs8_P8rKgS7ZenxjO8MBSAxNlGS52TKaPo6dVIvsbaf0Zz6XfxO0I81xW6HyRvNEgT9S9eq5g-OKFeQeNJQDp9DNg3EjgUJ_916ZtRTzBX3Xc0UFupBtFddVpzFx0fKnMJlGNWJ9sNHhZM76L_tLRSKdmmZKs5Cq-GoVxJPQ"
                imgAlt="Modern Colombo student hostel bedroom with bunk beds, individual reading lights, locker cabinets, and air conditioning unit on white wall"
                verifiedLabel="Premium Partner"
                tagLabel="Shared / All Welcome"
                price="LKR 14,000"
                priceUnit="/bed"
                distanceLabel="Near Colombo Medical Faculty & Borella"
                title="Hostel Space for Undergraduates & Interns"
                description="Walking distance to Baseline road and Borella junction. CCTV security, laundry area, filtered water dispenser, study quiet zone."
                amenities={[
                  { icon: "videocam", label: "CCTV 24/7" },
                  { icon: "local_laundry_service", label: "Laundry" },
                  { icon: "lock", label: "Lockers" },
                ]}
              />
            </div>
          </section>

          {/* High-Conversion Landlord Callout Block */}
          <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-10">
            <div className="bg-gradient-to-br from-primary-fixed/60 via-surface-container-lowest to-surface-container-low rounded-3xl p-8 lg:p-12 shadow-md relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 self-start bg-primary text-on-primary px-3 py-1 rounded-full text-label-sm font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[15px]">campaign</span>
                    <span>Landlord Direct Portal | ඉඩම් හිමියන්ට නොමිලේ</span>
                  </div>
                  <h2 className="font-display-lg-mobile lg:font-headline-lg text-display-lg-mobile lg:text-headline-lg text-on-surface font-extrabold leading-tight">
                    Are you a Landlord? List Your Property for Free
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    ඔබ සතු අමතර කාමර, බෝඩිං කාමර, ඇනෙක්ස්, කඩ කාමර, හිස් ඉඩම් ආදිය කුලියට බද්දට ලබා දී මුදලක් අතට ලබා ගැනීමට අදහස් කරන්නේද? ඒ සඳහා <span className="font-bold text-primary">boarding.lk</span> ඔබගේ හොඳම තේරීමයි.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="flex flex-col gap-1 bg-surface-container-lowest/80 p-3.5 rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[24px]">currency_exchange</span>
                      <span className="font-label-lg text-label-lg text-on-surface font-bold">100% Free Advertising</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Create and manage listings without hidden agency fees or commissions.</span>
                    </div>
                    <div className="flex flex-col gap-1 bg-surface-container-lowest/80 p-3.5 rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[24px]">target</span>
                      <span className="font-label-lg text-label-lg text-on-surface font-bold">Targeted Local Exposure</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Reach 45,000+ university students looking right in your town and street.</span>
                    </div>
                    <div className="flex flex-col gap-1 bg-surface-container-lowest/80 p-3.5 rounded-xl">
                      <span className="material-symbols-outlined text-primary text-[24px]">call_quality</span>
                      <span className="font-label-lg text-label-lg text-on-surface font-bold">Simple Management</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Direct WhatsApp notifications. Intuitive control panel for local owners.</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col items-stretch lg:items-center justify-center gap-4 bg-surface-container-lowest p-6 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-primary-fixed text-primary flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-[32px]">add_home</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">Post Your First Ad Today</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Takes less than 2 minutes via mobile</span>
                  </div>
                  <Link
                    className="w-full py-3 px-6 bg-primary hover:bg-amber-hover text-on-primary rounded-xl font-label-lg text-label-lg font-bold shadow-md transition-all inline-flex items-center justify-center"
                    to="/post-ad"
                  >
                    Post An Ad (Free) | දැන්වීමක් පළ කරන්න
                  </Link>
                  <div className="flex items-center justify-center gap-2 text-label-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
                    <span>Over 1,200 active landlords across Sri Lanka</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Popular University Zones & Campuses Section */}
          <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">school</span>
                  <span>Campus Transit Zones</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Top University Boarding Hubs</h2>
              </div>
              <Link className="hidden sm:inline-flex items-center gap-1 text-primary font-label-lg text-label-lg font-bold hover:underline" to="/university-hubs">
                <span>View Campus Guide</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <UniversityHubCard
                index="01"
                badgeBg="bg-amber-subtle"
                badgeText="text-primary"
                places="61 Places"
                title="SLIIT & CINEC Hub"
                location="Malabe, Pittugala, Kaduwela Rd"
                description="Walkable student rooms, annexes with AC options, and girls-only secure complexes."
                ctaLabel="Explore Malabe Listings"
              />
              <UniversityHubCard
                index="02"
                badgeBg="bg-secondary-container"
                badgeText="text-secondary"
                places="55 Places"
                title="Japura University Zone"
                location="Wijerama, Gangodawila, Nugegoda"
                description="Budget annexes near USJ gates, High-Level road access, and shared boarding rooms."
                ctaLabel="Explore Japura Listings"
              />
              <UniversityHubCard
                index="03"
                badgeBg="bg-emerald-subtle"
                badgeText="text-emerald-dark"
                places="62 Places"
                title="NSBM Green University"
                location="Pitipana, Homagama, Meegoda"
                description="Modern gated annexes, student villages, and transport shuttle friendly boarding places."
                ctaLabel="Explore NSBM Listings"
              />
              <UniversityHubCard
                index="04"
                badgeBg="bg-surface-container-high"
                badgeText="text-on-surface"
                places="33 Places"
                title="UCSC & Colombo Medical"
                location="Borella, Maradana, Colombo 03-08"
                description="Central city student hostels and annexes convenient for medical interns and varsity scholars."
                ctaLabel="Explore Colombo Hub"
              />
            </div>
          </section>

          {/* Complete Sri Lanka Districts & Cities Directory */}
          <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-10">
            <div className="bg-surface-container-low rounded-3xl p-6 lg:p-10 flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-surface-container-high pb-6">
                <div>
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Islandwide Coverage Directory</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Popular Districts &amp; Rental Towns</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Browse verified student and professional accommodations by administrative division</p>
                </div>
                <div className="text-label-sm text-on-surface-variant font-mono bg-surface-container px-3 py-1.5 rounded-lg self-start">
                  Index: 7 Key Districts • 35 Primary Towns
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">map</span>
                  District Level Hubs
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {districts.map((d) => (
                    <Link
                      key={d.name}
                      className="bg-surface-container-lowest hover:bg-primary-fixed/40 transition-colors p-3 rounded-xl flex flex-col gap-0.5 shadow-sm text-center"
                      to="/districts"
                    >
                      <span className="font-label-md text-label-md text-on-surface font-bold">{d.name}</span>
                      <span className="font-body-sm text-body-sm text-primary font-semibold">{d.count}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-4 border-t border-surface-container-high">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">holiday_village</span>
                  Popular Cities &amp; Suburbs Matrix
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 text-body-sm text-body-sm">
                  {towns.map((t) => (
                    <a
                      key={t.name}
                      className="hover:text-primary transition-colors flex items-center justify-between py-1 border-b border-surface-container"
                      href="#"
                    >
                      <span>{t.name}</span> <span className="font-mono text-[11px] text-on-surface-variant font-bold">{t.count}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tenant Safety & Platform Disclaimer Notice */}
          <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-6 mb-12">
            <div className="bg-amber-subtle/60 rounded-2xl p-6 border-l-4 border-primary flex flex-col md:flex-row items-start gap-4">
              <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-0.5">shield</span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Safety &amp; Verification Advisory | පාරිභෝගික ආරක්ෂාව</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  The content displayed on this platform is published directly by individual property owners. Users are strictly advised to personally visit and inspect the boarding place or annex before executing any advance key-money transactions. In the event of any discrepancies or fraudulent behavior, please report immediately to our verification team at <span className="font-mono font-bold text-on-surface">athulasiriproduction@gmail.com</span> or via the dedicated hotline.
                </p>
                <div className="flex flex-wrap gap-4 pt-1 font-label-sm text-label-sm text-primary font-bold">
                  <Link className="hover:underline flex items-center gap-1" to="/guides">
                    <span className="material-symbols-outlined text-[15px]">description</span> Bodim Inspection Checklist
                  </Link>
                  <Link className="hover:underline flex items-center gap-1" to="/refund-policy">
                    <span className="material-symbols-outlined text-[15px]">receipt_long</span> Key Deposit Guidelines
                  </Link>
                  <Link className="hover:underline flex items-center gap-1" to="/guides">
                    <span className="material-symbols-outlined text-[15px]">security</span> Scam Prevention Guide
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
