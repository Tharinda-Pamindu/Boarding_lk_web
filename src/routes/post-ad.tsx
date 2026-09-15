import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/post-ad")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Post Your Boarding or Annex Ad | boarding.lk" },
      {
        name: "description",
        content:
          "Post your boarding, annex, or apartment ad for free on boarding.lk and connect with over 45,000 students and professionals searching for accommodation near Sri Lankan university hubs.",
      },
      { property: "og:title", content: "Post Your Boarding or Annex Ad | boarding.lk" },
      {
        property: "og:description",
        content:
          "100% free listing with no broker commission. Reach thousands of students seeking verified accommodation near SLIIT, Japura, Kelaniya, NSBM, and Colombo.",
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
          {/* Hero / Progress Header */}
          <section className="relative overflow-hidden bg-surface-container-low py-space-xl px-6 lg:px-12">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-tertiary-container/10 blur-3xl pointer-events-none"></div>
            <div className="relative max-w-7xl mx-auto flex flex-col gap-space-lg">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <div className="inline-flex items-center gap-space-xs w-fit px-space-sm py-space-xs rounded-full bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  <span>100% Free Listing • තැරැව්කාර ගාස්තු නැත (No Broker Commission)</span>
                </div>
                <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
                  Post Your Boarding or Annex Ad
                </h1>
                <p className="font-headline-sm text-headline-sm text-primary font-semibold">
                  ඔබේ බෝඩිම හෝ ඇනෙක්ස් දැන්වීම නොමිලේ පළකරන්න
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant pt-space-xs">
                  Connect directly with over <strong className="text-on-surface font-semibold">45,000+</strong> students and working professionals actively seeking verified accommodations near SLIIT, Japura, Kelaniya, NSBM, and Colombo educational hubs.
                </p>
              </div>
              {/* Multi-step Wizard Indicator */}
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                  <div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container">
                    <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm shrink-0">
                      1
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Active Step</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface truncate">Property Basics &amp; Location</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">කාමර විස්තර සහ ස්ථානය</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md p-space-sm rounded-lg opacity-60">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline-sm text-headline-sm shrink-0">
                      2
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Step 2</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface truncate">Photos &amp; Amenities</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">පින්තූර සහ පහසුකම්</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-md p-space-sm rounded-lg opacity-60">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-headline-sm text-headline-sm shrink-0">
                      3
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Step 3</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface truncate">Contact &amp; Publish</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">දුරකථන අංක සහ පළ කිරීම</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Layout (Form 8-col / Sidebar 4-col) */}
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* LEFT COLUMN: Ad Submission Form (8 cols) */}
              <form className="lg:col-span-8 flex flex-col gap-space-xl" onSubmit={(e) => e.preventDefault()}>
                {/* SECTION 1: Property Category Selection */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[24px]">apartment</span>
                      <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface">1. Select Property Type</h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">දේපල කාණ්ඩය තෝරන්න</p>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm px-space-sm py-space-xs bg-surface-container text-on-surface-variant rounded-full">Required</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm pt-space-xs">
                    <button className="group flex flex-col items-center justify-center p-space-md rounded-lg text-center bg-primary text-on-primary shadow-md transition-all" type="button">
                      <span className="material-symbols-outlined text-[32px] mb-1">single_bed</span>
                      <span className="font-label-lg text-label-lg leading-tight">Boarding Room</span>
                      <span className="font-body-sm text-body-sm text-on-primary/80">බෝඩිං කාමර</span>
                    </button>
                    <button className="group flex flex-col items-center justify-center p-space-md rounded-lg text-center bg-surface-container-low text-on-surface hover:bg-surface-container transition-all" type="button">
                      <span className="material-symbols-outlined text-[32px] mb-1 text-primary">cottage</span>
                      <span className="font-label-lg text-label-lg leading-tight">Annex</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">ඇනෙක්ස්</span>
                    </button>
                    <button className="group flex flex-col items-center justify-center p-space-md rounded-lg text-center bg-surface-container-low text-on-surface hover:bg-surface-container transition-all" type="button">
                      <span className="material-symbols-outlined text-[32px] mb-1 text-primary">home</span>
                      <span className="font-label-lg text-label-lg leading-tight">Full House</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">සම්පූර්ණ නිවස</span>
                    </button>
                    <button className="group flex flex-col items-center justify-center p-space-md rounded-lg text-center bg-surface-container-low text-on-surface hover:bg-surface-container transition-all" type="button">
                      <span className="material-symbols-outlined text-[32px] mb-1 text-primary">domain</span>
                      <span className="font-label-lg text-label-lg leading-tight">Apartment</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">මහල් නිවාස</span>
                    </button>
                    <button className="group flex flex-col items-center justify-center p-space-md rounded-lg text-center bg-surface-container-low text-on-surface hover:bg-surface-container transition-all" type="button">
                      <span className="material-symbols-outlined text-[32px] mb-1 text-primary">more_horiz</span>
                      <span className="font-label-lg text-label-lg leading-tight">Commercial</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">වෙනත්</span>
                    </button>
                  </div>
                </div>

                {/* SECTION 2: Title, Target Tenants & Description */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[24px]">edit_note</span>
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface">2. Property Title &amp; Description</h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">දැන්වීම් සිරස්තලය සහ විස්තරය</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <label className="font-label-lg text-label-lg text-on-surface">Target Tenant Type (නවාතැන් කරුවන්ගේ වර්ගය):</label>
                    <div className="flex flex-wrap gap-space-sm">
                      <button className="px-space-md py-space-xs rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1 shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[16px]">male</span> Boys Only (පිරිමි ළමුන්)
                      </button>
                      <button className="px-space-md py-space-xs rounded-full bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
                        <span className="material-symbols-outlined text-[16px]">female</span> Girls Only (ගැහැණු ළමුන්)
                      </button>
                      <button className="px-space-md py-space-xs rounded-full bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
                        <span className="material-symbols-outlined text-[16px]">group</span> Any / Shared (ඕනෑම අයෙකුට)
                      </button>
                      <button className="px-space-md py-space-xs rounded-full bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center gap-1" type="button">
                        <span className="material-symbols-outlined text-[16px]">badge</span> Working Professionals / Couples
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex justify-between items-center">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="adTitle">Listing Title (දැන්වීම් සිරස්තලය)</label>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">72 / 100 max</span>
                    </div>
                    <input
                      className="w-full bg-surface-container-low px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-colors shadow-inner"
                      id="adTitle"
                      placeholder="e.g. Luxury Single Room 200m to SLIIT Malabe"
                      type="text"
                      defaultValue="Spacious Upstairs Room with Attached Bath near SLIIT Campus, Malabe"
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Include key features: distance to campus, private bath, or AC.</span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-lg text-label-lg text-on-surface" htmlFor="adDesc">Detailed Description (සම්පූර්ණ විස්තරය)</label>
                    <textarea
                      className="w-full bg-surface-container-low p-space-md rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-colors shadow-inner resize-y leading-relaxed"
                      id="adDesc"
                      placeholder="Mention room dimensions, study desk availability, cooking facilities, quiet study environment, and gate closing times if any... (සිංහලෙන් හෝ English වලින් පැහැදිලිව සඳහන් කරන්න)"
                      rows={5}
                    ></textarea>
                    <div className="flex items-center gap-space-xs text-tertiary font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[16px]">lightbulb</span>
                      <span>Pro-tip: Clear English &amp; Sinhala listings receive 3x more instant student calls.</span>
                    </div>
                  </div>
                </div>

                {/* SECTION 3: Location & Campus Proximity */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[24px]">pin_drop</span>
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface">3. Location &amp; Campus Proximity</h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">පිහිටීම සහ ආසන්නතම විශ්වවිද්‍යාලය</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-lg text-label-lg text-on-surface">District (දිස්ත්‍රික්කය)</label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-low px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md appearance-none cursor-pointer focus:outline-none focus:bg-surface-container" defaultValue="Colombo (කොළඹ)">
                          <option>Colombo (කොළඹ)</option>
                          <option>Gampaha (ගම්පහ)</option>
                          <option>Kandy (මහනුවර)</option>
                          <option>Kalutara (කළුතර)</option>
                          <option>Galle (ගාල්ල)</option>
                          <option>Matara (මාතර)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant text-[20px]">expand_more</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-lg text-label-lg text-on-surface">City / Suburb (නගරය / ප්‍රදේශය)</label>
                      <input className="w-full bg-surface-container-low px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container" placeholder="e.g. Gangodawila, Kelaniya, Nugegoda" type="text" defaultValue="Malabe" />
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-lg text-label-lg text-on-surface">Nearest Higher Ed Campus (ආසන්නතම සරසවිය)</label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-low px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md appearance-none cursor-pointer focus:outline-none focus:bg-surface-container" defaultValue="SLIIT Malabe Campus (500m / 5 min walk)">
                          <option>SLIIT Malabe Campus (500m / 5 min walk)</option>
                          <option>University of Sri Jayewardenepura (USJ)</option>
                          <option>University of Kelaniya (Kelaniya)</option>
                          <option>NSBM Green University (Pitipana)</option>
                          <option>University of Colombo / UCSC (Reid Ave)</option>
                          <option>CINEC Maritime Campus (Malabe)</option>
                          <option>Horizon Campus (Malabe)</option>
                          <option>University of Moratuwa (Katubedda)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant text-[20px]">expand_more</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-lg text-label-lg text-on-surface">Walking Distance to Gate (දුර)</label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-low px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md appearance-none cursor-pointer focus:outline-none focus:bg-surface-container" defaultValue="Under 500 Meters (Walking distance)">
                          <option>Under 500 Meters (Walking distance)</option>
                          <option>500m - 1 Kilometer</option>
                          <option>1km - 2km (Short Tuk ride / Direct Bus)</option>
                          <option>Over 2km</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant text-[20px]">expand_more</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-lg text-label-lg text-on-surface">Street Address &amp; Main Bus Routes (ලිපිනය සහ බස් මාර්ග)</label>
                    <input className="w-full bg-surface-container-low px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container" placeholder="e.g. 177 Kaduwela-Kollupitiya bus route" type="text" defaultValue="No. 42, Chandrika Kumaratunga Mawatha, near 177 & 993 bus stops, Malabe" />
                  </div>
                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <span className="font-label-md text-label-md text-on-surface">Map Pinpoint (සිසුන්ට පහසුවෙන් බලාගැනීමට සිතියම)</span>
                    <div
                      className="w-full h-44 bg-surface-container rounded-lg relative overflow-hidden flex items-end p-space-sm"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaDAufYNWj2Rns_87076J167LyBBtBRB66lKKWDQiWRi0bkRnGTPItww0KfvWCfo82wq5fNZiNntkGIF-MabnZbjPguwatW0Avs-c6tt-NQTku-MH-gnAncGcht1DRpXw8NhbwarO6JeA1nQ-m9f0Kum4XtiMtow4i_4NsfTh7HudTmbA8BnYW1pkY4fPKTuzLJpVIbvYr9oBCpKi8Tqj6aXMY7TAAFjkgLGQpJ4ai851n_iD0y1wt1Q')",
                      }}
                    >
                      <div className="bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-space-xs rounded-lg shadow-sm flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                        <span className="font-label-md text-label-md text-on-surface">Pin placed: Malabe Campus Hub zone</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 4: Rent, Deposit & Included Utilities */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[24px]">payments</span>
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface">4. Rent &amp; Key Money Terms</h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">මාසික කුලිය සහ අත්තිකාරම් මුදල්</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-lg text-label-lg text-on-surface">Monthly Rent (මාසික කුලිය - LKR)</label>
                      <div className="flex items-center bg-surface-container-low rounded-lg px-space-md py-space-xs">
                        <span className="font-headline-sm text-headline-sm text-primary font-bold mr-2">රු.</span>
                        <input className="w-full bg-transparent py-space-xs text-on-surface font-headline-sm text-headline-sm focus:outline-none" placeholder="20000" type="number" defaultValue={22500} />
                        <span className="font-label-sm text-label-sm text-on-surface-variant shrink-0">/ person or room</span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Typical range in Malabe: LKR 18,000 - 32,000 / month</span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-lg text-label-lg text-on-surface">Key Money Advance (අත්තිකාරම් මුදල්)</label>
                      <div className="relative">
                        <select className="w-full bg-surface-container-low px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md appearance-none cursor-pointer focus:outline-none focus:bg-surface-container" defaultValue="1 Month Advance (මාස 1ක අත්තිකාරම්)">
                          <option>1 Month Advance (මාස 1ක අත්තිකාරම්)</option>
                          <option>2 Months Advance</option>
                          <option>3 Months Advance</option>
                          <option>Negotiable (සාකච්ඡා කළ හැක)</option>
                          <option>No Key Money Needed (අත්තිකාරම් අවශ්‍ය නොවේ)</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-on-surface-variant text-[20px]">expand_more</span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Boarding.lk encourages fair 1-month advances for students.</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <span className="font-label-lg text-label-lg text-on-surface">Bills Included in Rent (කුලියට ඇතුලත් ගාස්තු):</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                      <label className="flex items-center gap-space-xs bg-surface-container-low p-space-sm rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
                        <input defaultChecked className="w-5 h-5 accent-primary rounded" type="checkbox" />
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md text-on-surface">Water Bill (ජලය)</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Free tap water</span>
                        </div>
                      </label>
                      <label className="flex items-center gap-space-xs bg-surface-container-low p-space-sm rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
                        <input defaultChecked className="w-5 h-5 accent-primary rounded" type="checkbox" />
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md text-on-surface">Electricity Bill (විදුලිය)</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">Included in rent</span>
                        </div>
                      </label>
                      <label className="flex items-center gap-space-xs bg-surface-container-low p-space-sm rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
                        <input className="w-5 h-5 accent-primary rounded" type="checkbox" />
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md text-on-surface">Fiber Wi-Fi Internet</span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">High-speed web</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* SECTION 5: Amenities & Facilities */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[24px]">room_preferences</span>
                      <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface">5. Key Amenities &amp; Facilities</h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">කාමරයේ ඇති පහසුකම් තෝරන්න</p>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-semibold">6 selected</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-space-sm">
                    <button className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md text-left" type="button">
                      <span className="material-symbols-outlined text-primary text-[20px]">bathtub</span>
                      <span>Attached Bath</span>
                    </button>
                    <button className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md text-left" type="button">
                      <span className="material-symbols-outlined text-primary text-[20px]">door_front</span>
                      <span>Private Entrance</span>
                    </button>
                    <button className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md text-left" type="button">
                      <span className="material-symbols-outlined text-primary text-[20px]">bed</span>
                      <span>Furnished Bed</span>
                    </button>
                    <button className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md text-left" type="button">
                      <span className="material-symbols-outlined text-primary text-[20px]">desk</span>
                      <span>Study Table &amp; Chair</span>
                    </button>
                    <button className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md text-left" type="button">
                      <span className="material-symbols-outlined text-primary text-[20px]">mode_fan</span>
                      <span>Ceiling Fan</span>
                    </button>
                    <button className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md text-left" type="button">
                      <span className="material-symbols-outlined text-primary text-[20px]">two_wheeler</span>
                      <span>Bike / Car Parking</span>
                    </button>
                    <button className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md text-left hover:bg-surface-container transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">ac_unit</span>
                      <span>A/C (වායුසමනය)</span>
                    </button>
                    <button className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md text-left hover:bg-surface-container transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">balcony</span>
                      <span>Private Balcony</span>
                    </button>
                    <button className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md text-left hover:bg-surface-container transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">videocam</span>
                      <span>CCTV Security</span>
                    </button>
                    <button className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md text-left hover:bg-surface-container transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">kitchen</span>
                      <span>Pantry / Kitchen</span>
                    </button>
                    <button className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md text-left hover:bg-surface-container transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">water_heater</span>
                      <span>Hot Water Shower</span>
                    </button>
                    <button className="flex items-center gap-space-xs p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-label-md text-label-md text-left hover:bg-surface-container transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]">local_laundry_service</span>
                      <span>Laundry Machine</span>
                    </button>
                  </div>
                </div>

                {/* SECTION 6: Upload Real Photos */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[24px]">add_a_photo</span>
                      <div>
                        <h2 className="font-headline-md text-headline-md text-on-surface">6. Room &amp; Property Photos</h2>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">පින්තූර 3 සිට 10 දක්වා එක්කරන්න</p>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm px-space-sm py-space-xs bg-emerald-subtle text-emerald-dark rounded-full font-bold">2 Photos Attached</span>
                  </div>
                  <div className="p-space-xl rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center gap-space-sm cursor-pointer hover:bg-surface-container transition-all">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[36px]">cloud_upload</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-headline-sm text-headline-sm text-on-surface">Drag &amp; Drop Room Photos Here</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Upload high quality photos of bed, study desk, bathroom, and building gate (JPG, PNG)</p>
                    </div>
                    <button className="px-space-lg py-space-xs bg-surface-container-lowest text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container-high transition-colors" type="button">
                      Browse Files From Device
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md pt-space-xs">
                    <div className="relative rounded-lg overflow-hidden group shadow-sm bg-surface-container">
                      <img
                        className="w-full h-32 object-cover"
                        alt="A clean modern Sri Lankan boarding room with a solid teak single bed, beige curtains, a polished study table, fan on ceiling, sunlit window view of coconut trees."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvQHb0yRrOnoa5r5WnJod76p2SugOdHyjSPNH8rpfX2VL-DV85eWOBUbhMHCDj052uIdkbXz4Ej1XLZDGyj_oILOrQLxphP6kCfhw2WdWfmAL1M6eQI36K-31o-0DdgE7ZDRcsV5ciX8ixk474Vb8wfRTvjyE8VAbZ_WlgawUDA5_O3rXPdnEqPW8jZaLcp42b0t8TZ3kax3I1QmEixnZzzKlwI2MT27KTxvjkR7_NSIcj9WtRXLFTWQ"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm rounded-full shadow">
                        Cover Photo
                      </div>
                      <button className="absolute top-2 right-2 w-6 h-6 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-error hover:bg-surface-container-lowest transition-colors" type="button">
                        <span className="material-symbols-outlined text-[14px]">close</span>
                      </button>
                    </div>
                    <div className="relative rounded-lg overflow-hidden group shadow-sm bg-surface-container">
                      <img
                        className="w-full h-32 object-cover"
                        alt="Sparkling clean attached modern tiled bathroom in an urban Sri Lankan annex, with clean sink, shower area, neutral slate tiles, and natural ventilation."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvdudv9vUvrYNZjFzW484764GDpz71j0YTGWIeeQyJd8VdbjK09mEGQ4ovnYqw5gDKpNfr8O_ZofPjy_HrUxP88zBQJQ9zAkaUEer9W8tGplT5bAXVBQZYBFDvEkVEzZndMcx2Iwux06OnFdTpj-mRsx9tn_sYBCv95mcbBi69M1gV5XeJu7QjXmkqBYj081j8Yp4H7MEk7J8UtIrOHzGQRCSdLStERska1BlgyXrHIG9nPDV344pTpQ"
                      />
                      <button className="absolute top-2 right-2 w-6 h-6 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-error hover:bg-surface-container-lowest transition-colors" type="button">
                        <span className="material-symbols-outlined text-[14px]">close</span>
                      </button>
                    </div>
                    <div className="rounded-lg bg-surface-container-low flex flex-col items-center justify-center p-space-md text-on-surface-variant cursor-pointer hover:bg-surface-container transition-colors h-32">
                      <span className="material-symbols-outlined text-[28px] text-primary mb-1">add_photo_alternate</span>
                      <span className="font-label-sm text-label-sm">+ Add Photo 3</span>
                    </div>
                  </div>
                </div>

                {/* SECTION 7: Landlord Contact & Direct WhatsApp */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[24px]">contact_phone</span>
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface">7. Landlord / Caretaker Contact</h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">අයිතිකරුගේ තොරතුරු සහ දුරකථන අංකය</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="ownerName">Owner / Contact Name (නම)</label>
                      <input className="w-full bg-surface-container-low px-space-md py-space-sm rounded-lg text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container" id="ownerName" placeholder="e.g. Mr. Bandara / Aunty Kanthi" type="text" defaultValue="Mrs. Kanthi Perera" />
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="phoneNum">Mobile &amp; WhatsApp Number (දුරකථන අංකය)</label>
                      <div className="flex items-center bg-surface-container-low rounded-lg px-space-md py-space-xs">
                        <span className="font-label-lg text-label-lg text-on-surface-variant mr-2">+94</span>
                        <input className="w-full bg-transparent py-space-xs text-on-surface font-body-md text-body-md focus:outline-none" id="phoneNum" placeholder="77 123 4567" type="tel" defaultValue="77 234 8921" />
                        <span className="material-symbols-outlined text-tertiary-container text-[20px] shrink-0" title="WhatsApp Connected">chat</span>
                      </div>
                    </div>
                  </div>
                  <label className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg cursor-pointer">
                    <input defaultChecked className="w-5 h-5 accent-primary rounded mt-0.5" type="checkbox" />
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">Enable Direct WhatsApp Chat Inquiries (ක්ෂණික WhatsApp පණිවිඩ)</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Undergraduates can send direct questions to your WhatsApp without middlemen.</span>
                    </div>
                  </label>
                </div>

                {/* Agreement Checkbox */}
                <div className="bg-surface-container-low p-space-md rounded-xl flex items-start gap-space-sm">
                  <input defaultChecked className="w-5 h-5 accent-primary rounded mt-0.5" id="termsCheck" type="checkbox" />
                  <label className="font-body-md text-body-md text-on-surface-variant cursor-pointer" htmlFor="termsCheck">
                    I agree to the <strong className="text-on-surface font-semibold">Boarding.lk Landlord Safety Code</strong> and confirm that all property details, rental advance terms, and amenities are 100% accurate with no hidden charges or middleman brokerage cuts.
                  </label>
                </div>

                {/* Form Submission Action Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs mb-space-xl">
                  <button className="w-full sm:w-auto px-space-lg py-space-md bg-surface-container-lowest text-on-surface font-label-lg text-label-lg rounded-lg shadow-sm hover:bg-surface-container transition-colors flex items-center justify-center gap-space-xs" type="button">
                    <span className="material-symbols-outlined text-[18px]">bookmark</span>
                    <span>Save as Draft (කෙටුම්පතක් ලෙස සුරකින්න)</span>
                  </button>
                  <button className="w-full sm:w-auto px-space-xl py-space-md bg-primary text-on-primary font-headline-sm text-headline-sm rounded-lg shadow-md hover:bg-amber-hover transition-all flex items-center justify-center gap-space-sm" type="submit">
                    <span>Continue to Preview &amp; Publish (දැන්වීම පළකරන්න)</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                </div>
              </form>

              {/* RIGHT COLUMN: Guidelines, Trust Badges & Helpdesk (4 cols) */}
              <aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[24px]">verified</span>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Why Landlords Choose Us</h3>
                  </div>
                  <ul className="flex flex-col gap-space-md">
                    <li className="flex items-start gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-emerald-subtle text-emerald-dark flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">savings</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-on-surface">0% Broker Commissions</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Keep 100% of your rent. No brokers taking half of the first month's advance.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">bolt</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-on-surface">Fast Occupancy (7 Days)</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">85% of listings near SLIIT and Japura receive tenants within the first week of term.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-amber-subtle text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">forum</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-on-surface">Direct Student WhatsApp</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Screen verified undergraduates and young software interns directly on phone.</span>
                      </div>
                    </li>
                  </ul>
                  <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>Weekly Inquiries Trend</span>
                      <span className="text-tertiary font-bold">+24% this semester</span>
                    </div>
                    <svg className="w-full h-12 text-primary" fill="none" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 32 Q 30 35, 50 24 T 100 18 T 150 8 T 200 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                      <path d="M0 32 Q 30 35, 50 24 T 100 18 T 150 8 T 200 4 L 200 40 L 0 40 Z" fill="currentColor" fillOpacity="0.08"></path>
                    </svg>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-xs text-on-surface">
                    <span className="material-symbols-outlined text-primary text-[22px]">tips_and_updates</span>
                    <h3 className="font-headline-sm text-headline-sm font-bold">Tips for High Visibility</h3>
                  </div>
                  <div className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-emerald-dark text-[18px] shrink-0 mt-0.5">check_circle</span>
                      <p><strong className="text-on-surface">Take daytime photos:</strong> Natural Sri Lankan morning sunlight makes compact rooms appear much larger.</p>
                    </div>
                    <div className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-emerald-dark text-[18px] shrink-0 mt-0.5">check_circle</span>
                      <p><strong className="text-on-surface">Mention distance in meters:</strong> Say "350m to SLIIT Malabe gate" rather than a vague "very close".</p>
                    </div>
                    <div className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-emerald-dark text-[18px] shrink-0 mt-0.5">check_circle</span>
                      <p><strong className="text-on-surface">Clear utility rules:</strong> Specify if electricity is sub-metered or bundled into the flat monthly rent.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-on-primary p-space-lg rounded-xl shadow-md flex flex-col gap-space-sm relative overflow-hidden">
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-on-primary/10 rounded-full blur-xl pointer-events-none"></div>
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[24px]">support_agent</span>
                    <h4 className="font-headline-sm text-headline-sm font-bold">Landlord Help Desk</h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-primary/90">
                    Need help uploading photos or writing a description in Sinhala? Our local support team in Battaramulla is here to help you publish for free.
                  </p>
                  <div className="pt-space-xs flex flex-col gap-space-xs">
                    <a className="inline-flex items-center gap-space-xs font-label-lg text-label-lg bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-lg hover:bg-surface-container transition-colors justify-center" href="tel:0112345678">
                      <span className="material-symbols-outlined text-[18px] text-primary">phone_in_talk</span>
                      <span>Call: (011) 234-5678</span>
                    </a>
                    <a className="inline-flex items-center gap-space-xs font-label-lg text-label-lg bg-tertiary text-on-tertiary px-space-md py-space-sm rounded-lg hover:bg-emerald-dark transition-colors justify-center" href="https://wa.me/94786733237" target="_blank" rel="noreferrer">
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>WhatsApp: +94 78 673 3237</span>
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
