import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/search")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Search Boarding Rooms & Annexes | boarding.lk" },
      {
        name: "description",
        content:
          "Search verified student bodim, shared annexes, and studio rooms near major campuses & Colombo transit nodes.",
      },
      { property: "og:title", content: "Search Boarding Rooms & Annexes | boarding.lk" },
      {
        property: "og:description",
        content:
          "Search verified student bodim, shared annexes, and studio rooms near major campuses & Colombo transit nodes.",
      },
    ],
  }),
});

interface ListingCardData {
  imgSrc: string;
  imgAlt: string;
  verifiedLabel: string;
  genderBadge: string;
  photos: string;
  price: string;
  proximityIcon: string;
  proximity: string;
  title: string;
  description: string;
  amenities: { icon: string; label: string }[];
  bonusTag?: string;
  avatarInitials: string;
  ownerName: string;
  ownerRole: string;
}

const listingCards: ListingCardData[] = [
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-qLL7qgj7y8dpKjmYYJ9nhK0wzLU1fCGX4Y7lGiAvUdyMUS0IRDISdxP0K0WzDdJzbm1SswNNJ3ON6lFEitMPVrha5XKU7vcqc_4oUp6FfBy66mbKmutNULYO96JzEXNcPOhwkyguQ7En4MTu1UWe8djSjh26YtKpt9ssAm3U_w2sR6_moIuvC3uFsheEFFSGmX8nKvHXJQPun6eecD0WuTmkiMs0u5ZNX2sZmcaVL2QCC0x30GZhtA",
    imgAlt:
      "A sunlit, minimalist student boarding bedroom in Sri Lanka with a large white framed window overlooking lush tropical greenery. Features a tidy single wooden bed, study table with an open laptop, desk lamp, bookshelf, and clean tiled floor in warm natural morning light.",
    verifiedLabel: "Verified Landlord",
    genderBadge: "Girls Only",
    photos: "6 Photos",
    price: "LKR 18,500",
    proximityIcon: "directions_walk",
    proximity: "450m to SLIIT Malabe Main Campus (6 mins walk)",
    title: "Peaceful Single Study Room with Garden View",
    description:
      "Quiet, safe residential lane off Kaduwela Road. Fully furnished with study desk, high ceiling fan, spring mattress, and attached bathroom.",
    amenities: [
      { icon: "shower", label: "Attached Bath" },
      { icon: "wifi", label: "Fiber 100Mbps" },
      { icon: "desk", label: "Study Setup" },
    ],
    bonusTag: "Zero Key Money",
    avatarInitials: "MS",
    ownerName: "Mr. Sunil Gamage",
    ownerRole: "Direct Owner • ID Verified",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3BDIZ3OLAlGidw4ybyk-DmSZx6So7Z2Mnq706E8fINUHjrG_Wx-X0-6pCoIZqOfOJPma-1sD1x7WKD32D9zh6myOmoOI3_GbQ6zUvxrHSuvkZzoSEb29O2frRgg0qdsLUlI82CJex8oPwgWM0BKsZ_wuTjhdGSWKqpEcTsG1ZhRyyK7RENPEQ0ooPAtr2a1xWMA5AVbjIvVHucz07OBM-FQT9S-awTcKL-Z8kJwOBcLFQ97eA596pUA",
    imgAlt:
      "A modern, high-end studio annex apartment in Colombo, Sri Lanka with custom wooden kitchenette, granite counter, microwave, wall-mounted air conditioner, comfortable double bed with clean linen runner, desk, and view of tropical garden courtyard.",
    verifiedLabel: "Superhost Landlord",
    genderBadge: "Any / Working Pro",
    photos: "10 Photos",
    price: "LKR 28,000",
    proximityIcon: "directions_walk",
    proximity: "300m to High-Level Road • USJ Gangodawila Gate",
    title: "AC Studio Annex with Fitted Pantry & Balcony",
    description:
      "Self-contained luxury studio with refrigerator, gas hob, air conditioning, private balcony, and secure CCTV camera gated access.",
    amenities: [
      { icon: "kitchen", label: "Fitted Pantry" },
      { icon: "ac_unit", label: "Inverter AC" },
      { icon: "two_wheeler", label: "Bike Parking" },
    ],
    bonusTag: "Water Bill Free",
    avatarInitials: "KJ",
    ownerName: "Mrs. Jayasinghe",
    ownerRole: "Direct Owner • Nugegoda",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAK0rTJL62CUz39UwOFYzRJKaWSdzD55y-q4nY36W2_nzfVqj_OW8fIalrsguE3W6YT-Hc4JZyFXV8ghl5Arq2tlem53tvRhohWx9EiFAAM6UuQckcPn65zjNWojYFkoB7deLTuInKmO2TdrDbZmMySXRG7zpNu0f4TbIqP6JnSGJ6qoJUK_ptkJHH3Sl1u03z2v-Lad2z07gUHUdRDCHa7zNQKLCdKs2SDula-c8IrF5ikWnMb6KPYzQ",
    imgAlt:
      "A clean, cozy student boarding room near University of Kelaniya, Sri Lanka with light ivory walls, single iron bed frame with clean bedsheet, study chair, window with sheer curtains showing green garden trees, and overhead ceiling fan.",
    verifiedLabel: "Verified",
    genderBadge: "Boys Only",
    photos: "5 Photos",
    price: "LKR 12,000",
    proximityIcon: "directions_walk",
    proximity: "500m to University of Kelaniya Commerce Faculty",
    title: "Affordable Single Bodim Room for Undergraduates",
    description:
      "Including utility electricity and water bills. Separate entrance with access to a shared tiled washroom and drinking water filter.",
    amenities: [
      { icon: "door_front", label: "Private Entrance" },
      { icon: "electric_bolt", label: "Bills Included" },
      { icon: "lock", label: "Safe Area" },
    ],
    avatarInitials: "RP",
    ownerName: "Mr. Ranatunga",
    ownerRole: "Direct Landlord • Kelaniya",
  },
  {
    imgSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEE-loEXavRBubfM9ZUsTwKyqram45YMKmGW4y8A1wYjn2K3NN4XSwPfX8qcXlWWeT9sRgyO3iffpsOzI463NCnaxSw6b0P37281vpyeYsdOMdPZhmBYnkXOZKeZ1cWMsnGez-5TQaYgkrUX81ePuFOSON5HhrFlDUOA8oiPfnqMPLmsTBK0y6r1a41tEH4YI62LdV_rXQ76LN6EgXZBnqvsuhjNedp2pGW6EUn7p36rv3Gmg6FTN6IA",
    imgAlt:
      "A newly built modern annex room for NSBM students in Homagama, Sri Lanka with clean ivory walls, double bunk bed option, personal wooden desks, overhead fans, and bright airy French windows.",
    verifiedLabel: "Verified",
    genderBadge: "Girls Only",
    photos: "8 Photos",
    price: "LKR 16,000",
    proximityIcon: "directions_bus",
    proximity: "NSBM Green Uni Shuttle stop at gate (800m to gate)",
    title: "Spacious Double Room Annex near Pitipana Hub",
    description:
      "Highly secure gated neighborhood. Large study desks, hot water solar heater, separate pantry with microwave, and secure bike parking.",
    amenities: [
      { icon: "wifi", label: "Fiber Wi-Fi" },
      { icon: "water_heater", label: "Hot Water" },
      { icon: "shield", label: "CCTV" },
    ],
    avatarInitials: "AD",
    ownerName: "Dr. Anoma Dissanayake",
    ownerRole: "Direct Owner • Homagama",
  },
];

function ListingCard({ card }: { card: ListingCardData }) {
  return (
    <article className="bg-card-bg rounded-2xl overflow-hidden shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_10px_25px_-4px_rgba(15,23,42,0.08)] transition-all duration-300 flex flex-col group">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={card.imgAlt}
          src={card.imgSrc}
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-emerald-dark font-label-sm text-label-sm font-bold shadow-sm">
            <span className="material-symbols-outlined text-[14px] text-tertiary">verified</span> {card.verifiedLabel}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-amber-subtle/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-bold shadow-sm">
            {card.genderBadge}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <button aria-label="Save to Wishlist" className="w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface flex items-center justify-center hover:text-danger-red transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[18px]">favorite</span>
          </button>
        </div>
        <div className="absolute bottom-3 left-3 bg-on-surface/80 backdrop-blur-md text-surface font-label-sm text-label-sm px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">photo_camera</span> {card.photos}
        </div>
        <div className="absolute bottom-3 right-3 bg-surface-container-lowest/95 backdrop-blur-md text-on-surface font-label-lg text-label-lg px-3 py-1 rounded-xl shadow-md font-extrabold text-primary">
          {card.price} <span className="font-normal text-body-sm text-secondary">/mo</span>
        </div>
      </div>
      <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-tertiary font-label-sm text-label-sm font-semibold">
            <span className="material-symbols-outlined text-[16px]">{card.proximityIcon}</span>
            <span>{card.proximity}</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold line-clamp-1 group-hover:text-primary transition-colors">
            {card.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            {card.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1.5">
            {card.amenities.map((a) => (
              <span key={a.label} className="px-2 py-0.5 rounded bg-surface-container-low text-secondary font-label-sm text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">{a.icon}</span> {a.label}
              </span>
            ))}
            {card.bonusTag && (
              <span className="px-2 py-0.5 rounded bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm font-bold">
                {card.bonusTag}
              </span>
            )}
          </div>
        </div>
        <div className="pt-space-xs flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary text-xs shrink-0">
              {card.avatarInitials}
            </div>
            <div className="truncate">
              <p className="font-label-sm text-label-sm text-on-surface font-semibold truncate">{card.ownerName}</p>
              <p className="font-body-sm text-body-sm text-tertiary truncate">{card.ownerRole}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <a className="p-2 rounded-lg bg-emerald-subtle text-emerald-dark hover:bg-tertiary hover:text-on-tertiary transition-colors flex items-center justify-center" href="https://wa.me/94786733237" title="Chat via WhatsApp">
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </a>
            <Link to="/listing" className="px-3 py-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary font-label-sm text-label-sm font-bold text-on-surface transition-colors">
              View
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Dynamic Top Breadcrumbs & Result Metric Bar */}
          <section className="w-full bg-surface-container-low/70 py-space-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xs">
              <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant flex-wrap">
                <Link className="hover:text-primary transition-colors" to="/">Home</Link>
                <span>/</span>
                <a className="hover:text-primary transition-colors" href="#">Western Province</a>
                <span>/</span>
                <a className="hover:text-primary transition-colors" href="#">Colombo District</a>
                <span>/</span>
                <span className="text-on-surface font-semibold">Boarding Rooms &amp; Annexes (බෝඩිං කාමර)</span>
              </div>
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
                <span className="inline-block w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
                <span>Updated 4 mins ago • Direct Landlords Only</span>
              </div>
            </div>
          </section>

          {/* High-Contrast Search & Active Filter Chips Bar */}
          <section className="w-full bg-surface-container-lowest shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] py-space-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-md">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Search Boarding Rooms &amp; Annexes</h1>
                    <span className="bg-primary/10 text-primary font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-bold">717 Verified</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Verified student bodim, shared annexes, and studio rooms near major campuses &amp; Colombo transit nodes.
                  </p>
                </div>
                {/* Quick Search Pill Action */}
                <div className="w-full lg:w-auto flex items-center gap-2 bg-surface-container-low p-1.5 rounded-xl shadow-inner">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-lowest rounded-lg shadow-sm text-on-surface flex-1 lg:w-64">
                    <span className="material-symbols-outlined text-[18px] text-primary">pin_drop</span>
                    <input className="bg-transparent font-label-md text-label-md text-on-surface focus:outline-none w-full" placeholder="Campus, Road, or Town" type="text" defaultValue="Malabe (SLIIT / CINEC)" />
                  </div>
                  <button className="bg-primary hover:bg-amber-hover text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">search</span>
                    <span>Update</span>
                  </button>
                </div>
              </div>
              {/* Active Filter Pill Chips Ribbon */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 text-nowrap">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">tune</span> Applied:
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface">
                  Malabe • SLIIT Area
                  <button className="hover:text-error flex items-center"><span className="material-symbols-outlined text-[14px]">close</span></button>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface">
                  Under LKR 25,000 / mo
                  <button className="hover:text-error flex items-center"><span className="material-symbols-outlined text-[14px]">close</span></button>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface">
                  Single Room (තනි කාමර)
                  <button className="hover:text-error flex items-center"><span className="material-symbols-outlined text-[14px]">close</span></button>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded-full font-label-md text-label-md text-on-surface">
                  Girls Only (ගැහැනු ළමුන් පමණි)
                  <button className="hover:text-error flex items-center"><span className="material-symbols-outlined text-[14px]">close</span></button>
                </span>
                <button className="text-primary hover:text-amber-hover font-label-md text-label-md underline underline-offset-2 ml-1">
                  Reset All Filters
                </button>
              </div>
            </div>
          </section>

          {/* Main Search & Results Multi-Column Body */}
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* LEFT SIDEBAR: Comprehensive Filters Panel */}
              <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-space-lg sticky top-24">
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[20px]">filter_list</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Filters &amp; Campus Hubs</h2>
                    </div>
                    <button className="font-label-sm text-label-sm text-primary hover:text-amber-hover font-semibold">Clear</button>
                  </div>
                  {/* Campus Shortcut Hubs */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">school</span>
                      Campus Proximity
                    </label>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm text-left hover:bg-surface-container-highest transition-colors font-medium">
                        🎓 SLIIT Malabe (61)
                      </button>
                      <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm text-left hover:bg-surface-container transition-colors">
                        🎓 USJ Japura (55)
                      </button>
                      <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm text-left hover:bg-surface-container transition-colors">
                        🎓 Kelaniya Uni (15)
                      </button>
                      <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm text-left hover:bg-surface-container transition-colors">
                        🎓 NSBM Green (62)
                      </button>
                      <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm text-left hover:bg-surface-container transition-colors">
                        🎓 UCSC / Colombo (33)
                      </button>
                      <button className="px-2.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm text-left hover:bg-surface-container transition-colors">
                        🎓 Moratuwa Uni (14)
                      </button>
                    </div>
                  </div>
                  {/* Walking Distance Segment */}
                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Max Walking Distance</span>
                    <div className="grid grid-cols-3 gap-1 bg-surface-container-low p-1 rounded-lg text-center">
                      <button className="py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-bold shadow-sm">&lt; 500m</button>
                      <button className="py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm">&lt; 1.0 km</button>
                      <button className="py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm">1 - 3 km</button>
                    </div>
                  </div>
                  {/* Price Range Slider */}
                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">Monthly Budget (LKR)</span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">Up to Rs. 35,000</span>
                    </div>
                    <input className="w-full accent-primary cursor-pointer h-1.5 bg-surface-container-high rounded-lg appearance-none" max={65000} min={8000} step={1000} type="range" defaultValue={35000} />
                    <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-1">
                      <span>Rs. 8,000</span>
                      <span>Rs. 65,000+</span>
                    </div>
                    {/* Bills Included Quick Toggle */}
                    <label className="flex items-center gap-2 mt-1.5 p-2 rounded-lg bg-emerald-subtle/40 cursor-pointer">
                      <input defaultChecked className="rounded w-4 h-4 text-tertiary focus:ring-tertiary" type="checkbox" />
                      <span className="font-label-sm text-label-sm text-emerald-dark font-bold">Include Free Water &amp; Electricity Bills</span>
                    </label>
                  </div>
                  {/* Accommodation Type */}
                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Accommodation Type (කාණ්ඩය)</span>
                    <div className="flex flex-col gap-2 font-body-md text-body-md text-on-surface-variant">
                      <label className="flex items-center justify-between cursor-pointer group">
                        <span className="flex items-center gap-2 group-hover:text-on-surface">
                          <input defaultChecked className="w-4 h-4 rounded text-primary" type="checkbox" />
                          <span>Single Room (තනි කාමර)</span>
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">651</span>
                      </label>
                      <label className="flex items-center justify-between cursor-pointer group">
                        <span className="flex items-center gap-2 group-hover:text-on-surface">
                          <input defaultChecked className="w-4 h-4 rounded text-primary" type="checkbox" />
                          <span>Annex with Kitchen (ඇනෙක්ස්)</span>
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">86</span>
                      </label>
                      <label className="flex items-center justify-between cursor-pointer group">
                        <span className="flex items-center gap-2 group-hover:text-on-surface">
                          <input className="w-4 h-4 rounded text-primary" type="checkbox" />
                          <span>Studio Apartment (ස්ටුඩියෝ)</span>
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">34</span>
                      </label>
                      <label className="flex items-center justify-between cursor-pointer group">
                        <span className="flex items-center gap-2 group-hover:text-on-surface">
                          <input className="w-4 h-4 rounded text-primary" type="checkbox" />
                          <span>Full Independent House (නිවාස)</span>
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">109</span>
                      </label>
                      <label className="flex items-center justify-between cursor-pointer group">
                        <span className="flex items-center gap-2 group-hover:text-on-surface">
                          <input className="w-4 h-4 rounded text-primary" type="checkbox" />
                          <span>Shared Student Hostel (නේවාසිකාගාර)</span>
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">42</span>
                      </label>
                    </div>
                  </div>
                  {/* Tenant Gender Suitability */}
                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Tenant Suitability</span>
                    <div className="flex flex-wrap gap-1.5">
                      <button className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
                        Girls Only
                      </button>
                      <button className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm">
                        Boys Only
                      </button>
                      <button className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm">
                        Working Professionals
                      </button>
                      <button className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container font-label-sm text-label-sm">
                        Couples Allowed
                      </button>
                    </div>
                  </div>
                  {/* Key Amenities Filter */}
                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">Essential Amenities</span>
                    <div className="grid grid-cols-1 gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input defaultChecked className="w-4 h-4 rounded text-primary" type="checkbox" />
                        <span>Attached Bathroom (නාන කාමරය සහිත)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input defaultChecked className="w-4 h-4 rounded text-primary" type="checkbox" />
                        <span>Fiber Wi-Fi Internet</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input defaultChecked className="w-4 h-4 rounded text-primary" type="checkbox" />
                        <span>Dedicated Study Desk &amp; Chair</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input className="w-4 h-4 rounded text-primary" type="checkbox" />
                        <span>Separate Private Entrance</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input className="w-4 h-4 rounded text-primary" type="checkbox" />
                        <span>Kitchen Access / Pantry</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input className="w-4 h-4 rounded text-primary" type="checkbox" />
                        <span>Air Conditioning (A/C)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input className="w-4 h-4 rounded text-primary" type="checkbox" />
                        <span>CCTV &amp; Gated Security</span>
                      </label>
                    </div>
                  </div>
                  {/* Verified Inspected Guarantee Filter Card */}
                  <div className="p-space-sm bg-gradient-to-br from-emerald-subtle/60 to-surface-container-low rounded-xl flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary text-[24px]">verified_user</span>
                      <div>
                        <p className="font-label-sm text-label-sm text-emerald-dark font-bold">100% Inspected Stays</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">Verified by Boarding.lk team</p>
                      </div>
                    </div>
                    <input defaultChecked className="w-5 h-5 accent-tertiary rounded" type="checkbox" />
                  </div>
                </div>
                {/* Direct Landlord Banner / Help Notice */}
                <div className="bg-primary/5 rounded-2xl p-space-md flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">support_agent</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Campus Stay Help</h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Struggling to find a room within 1km of your faculty? Call our local student housing hotline.
                  </p>
                  <a className="font-label-md text-label-md text-primary font-bold hover:text-amber-hover inline-flex items-center gap-1 mt-1" href="tel:+94786733237">
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    +94 78 673 3237
                  </a>
                </div>
              </aside>

              {/* RIGHT MAIN CONTENT: Sorting Toolbar + Listing Cards Grid */}
              <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-space-lg">
                {/* Toolbar: Sort + View Switchers */}
                <div className="bg-surface-container-lowest rounded-xl p-space-sm px-space-md shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col sm:flex-row items-center justify-between gap-space-md">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="font-label-md text-label-md text-on-surface-variant">Sort By:</span>
                    <select className="bg-surface-container-low text-on-surface font-label-md text-label-md px-3 py-1.5 rounded-lg focus:outline-none cursor-pointer">
                      <option>Recommended for Students</option>
                      <option>Walking Distance: Closest First</option>
                      <option>Monthly Rent: Low to High</option>
                      <option>Monthly Rent: High to Low</option>
                      <option>Newest Listings</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-space-md w-full sm:w-auto">
                    <span className="font-body-sm text-body-sm text-secondary">Showing <strong>1 - 12</strong> of <strong>717</strong></span>
                    <div className="flex items-center bg-surface-container-low p-1 rounded-lg">
                      <button className="p-1 rounded bg-surface-container-lowest text-primary shadow-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">grid_view</span>
                      </button>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">map</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Campus Educational Sticky Alert Bar */}
                <div className="bg-gradient-to-r from-amber-subtle via-surface-container-low to-surface-container-lowest p-space-md rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">explore</span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-on-surface font-bold">New Semester at SLIIT, CINEC or Horizon?</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Check our 2026 Student Campus Guide with bus routes, key money advice &amp; tiffin services.</p>
                    </div>
                  </div>
                  <a className="px-4 py-1.5 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-amber-hover transition-colors text-nowrap shrink-0 shadow-sm" href="#">
                    Read Campus Guide
                  </a>
                </div>

                {/* Accommodation Listing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                  {listingCards.map((card) => (
                    <ListingCard key={card.title} card={card} />
                  ))}
                </div>

                {/* Campus Geographic Map Preview Banner */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] flex flex-col md:flex-row items-center gap-space-md">
                  <div
                    className="w-full md:w-1/3 h-40 bg-cover bg-center rounded-xl relative overflow-hidden flex items-end p-3 shadow-inner"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASkvWLvrjcqNcf4NR3cYzjEJeltekEbA2WiSvXnYUP6SakysXMORlO8DHhXYdmKaKZT1JhrFNgsmwBSFojLDCcs4KukNfTWPYSUI9rNoy2WfANCJ9D8QUKKekFOwzvIYeFaDsEpNrZTbcoDoeuM9fXB-Yf3MtyLjGmGqjvGfDVdixL__HIhFlvrNDXwEzbdA02Op_0cxM9Qcr_qqA_ctO6eNRvkvUwppdp3yCO0iMyJ05KL3M5-SYD5Q')",
                    }}
                  >
                    <span className="bg-on-surface/85 backdrop-blur-sm text-surface font-label-sm text-label-sm px-2.5 py-1 rounded-md flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-tertiary">location_on</span> Malabe Hub Map
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <div className="flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[16px]">pin_drop</span> Interactive Campus Map
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Pinpoint Boarding Places Right on your Faculty Route
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Toggle our live interactive map view to see proximity to the 177 Kaduwela-Kollupitiya bus route, food outlets, and 24/7 laundry points.
                    </p>
                    <div className="pt-1">
                      <button className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-bold hover:bg-surface-container-high transition-colors inline-flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">map</span> Open Fullscreen Map View
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pagination Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md py-space-sm">
                  <span className="font-body-md text-body-md text-secondary">
                    Page <strong className="text-on-surface">1</strong> of <strong className="text-on-surface">32</strong> (717 total stays)
                  </span>
                  <div className="flex items-center gap-1">
                    <button className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1 disabled:opacity-40" disabled>
                      <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                      <span>Prev</span>
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold shadow-sm">1</button>
                    <button className="w-10 h-10 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors">2</button>
                    <button className="w-10 h-10 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors">3</button>
                    <span className="px-2 text-secondary">•••</span>
                    <button className="w-10 h-10 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors">32</button>
                    <button className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-1 transition-colors">
                      <span>Next</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* Safety Advice Disclaimer / Legal Callout */}
                <div className="p-space-md bg-surface-container-low rounded-2xl flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[16px]">shield</span>
                    Tenant Safety Reminder • ආරක්ෂක උපදෙස්
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Never transfer "advance key money" or deposits to any party prior to physically visiting the boarding place and verifying the owner's National Identity Card (NIC). Boarding.lk does not charge tenant booking fees.
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary italic">
                    කිසිදු අවස්ථාවක දේපළ පරීක්ෂා කර බැලීමට පෙර අත්තිකාරම් මුදල් ලබා නොදෙන්න. සැකකටයුතු දැන්වීමක් දුටුවහොත් කරුණාකර අපව දැනුවත් කරන්න.
                  </p>
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
