import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/listing")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Modern Furnished Single Annex Room with Attached Washroom - Malabe | boarding.lk" },
      {
        name: "description",
        content:
          "Spacious furnished annex room near SLIIT Malabe with attached washroom, LKR 18,500/month, verified landlord, all utilities included.",
      },
      { property: "og:title", content: "Modern Furnished Single Annex Room with Attached Washroom - Malabe | boarding.lk" },
      {
        property: "og:description",
        content:
          "Verified boarding place 500m from SLIIT Malabe Campus. Private bathroom, separate entrance, free Wi-Fi and more.",
      },
    ],
  }),
});

function ScheduleVisitModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-2xl flex flex-col gap-space-md relative animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">calendar_month</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Schedule an In-Person Visit</h3>
          </div>
          <button
            className="w-8 h-8 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface"
            type="button"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Send your preferred day &amp; time to Mr. Sunil Jayasinghe for code{" "}
          <span className="font-semibold text-on-surface">BLK-4920</span>.
        </p>
        <form
          className="flex flex-col gap-space-sm"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <div>
            <label className="font-label-sm text-label-sm text-on-surface block mb-1">Your Full Name (ඔබේ නම)</label>
            <input
              className="w-full bg-surface-container-low px-space-md py-space-xs rounded-lg text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary"
              placeholder="e.g. Kasun Bandara"
              required
              type="text"
            />
          </div>
          <div>
            <label className="font-label-sm text-label-sm text-on-surface block mb-1">Mobile / WhatsApp Number</label>
            <input
              className="w-full bg-surface-container-low px-space-md py-space-xs rounded-lg text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary"
              placeholder="07X XXXXXXX"
              required
              type="tel"
            />
          </div>
          <div className="grid grid-cols-2 gap-space-sm">
            <div>
              <label className="font-label-sm text-label-sm text-on-surface block mb-1">Preferred Date</label>
              <input
                className="w-full bg-surface-container-low px-space-md py-space-xs rounded-lg text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary"
                required
                type="date"
              />
            </div>
            <div>
              <label className="font-label-sm text-label-sm text-on-surface block mb-1">Preferred Time</label>
              <select className="w-full bg-surface-container-low px-space-md py-space-xs rounded-lg text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary">
                <option>Morning (9:00 AM - 12:00 PM)</option>
                <option>Afternoon (1:00 PM - 4:00 PM)</option>
                <option>Evening (4:00 PM - 6:30 PM)</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-space-xs pt-space-xs">
            <button
              className="flex-1 bg-primary text-on-primary py-space-sm rounded-lg font-label-lg text-label-lg hover:bg-amber-hover transition-colors shadow-sm"
              type="submit"
            >
              Confirm Visit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Page() {
  const [isSaved, setIsSaved] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Breadcrumb Bar */}
          <div className="w-full bg-surface-container-lowest shadow-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-sm">
              <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-space-xs font-label-md text-label-md text-on-surface-variant">
                <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                  Home
                </Link>
                <span className="text-outline-variant">/</span>
                <Link className="hover:text-primary transition-colors" to="/">Boarding Places</Link>
                <span className="text-outline-variant">/</span>
                <Link className="hover:text-primary transition-colors" to="/districts">Colombo District</Link>
                <span className="text-outline-variant">/</span>
                <Link className="hover:text-primary transition-colors" to="/university-hubs">Malabe Hub</Link>
                <span className="text-outline-variant">/</span>
                <span className="text-on-surface font-semibold truncate max-w-[280px] sm:max-w-md">Spacious Furnished Annex Room near SLIIT</span>
              </nav>
            </div>
          </div>

          {/* Main Viewport Container */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-lg w-full">
            {/* Hero Listing Header & Gallery Mosaic */}
            <section className="flex flex-col gap-space-md mb-space-xl">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs max-w-3xl">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 bg-emerald-subtle text-emerald-dark rounded-full font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      Verified Landlord / සත්‍යාපිත හිමිකරු
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-sm py-0.5 bg-amber-subtle text-primary rounded-full font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[14px]">group</span>
                      Girls or Boys Friendly / මිශ්‍ර
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-sm py-0.5 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-label-sm">
                      Code: BLK-4920
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Modern Furnished Single Annex Room with Attached Washroom - Malabe
                  </h1>
                  <div className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs font-body-md text-body-md text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                      500m to SLIIT Malabe Main Campus Gate, Kaduwela Road, Malabe
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-xs py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[14px]">directions_walk</span>
                      6 mins walk to lecture halls
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs self-start lg:self-end shrink-0">
                  <button
                    className="inline-flex items-center gap-1.5 bg-surface-container-lowest text-on-surface px-space-md py-space-xs rounded-lg shadow-sm hover:bg-surface-container-low transition-all"
                    type="button"
                    onClick={() => setIsSaved(!isSaved)}
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] ${isSaved ? "text-danger-red" : "text-primary"}`}
                      style={{ fontVariationSettings: isSaved ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {isSaved ? "favorite" : "favorite_border"}
                    </span>
                    <span className="font-label-md text-label-md">Save / සුරකින්න</span>
                  </button>
                  <button className="inline-flex items-center gap-1.5 bg-surface-container-lowest text-on-surface px-space-md py-space-xs rounded-lg shadow-sm hover:bg-surface-container-low transition-all" type="button">
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant">share</span>
                    <span className="font-label-md text-label-md">Share</span>
                  </button>
                </div>
              </div>

              {/* Photo Gallery Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm rounded-2xl overflow-hidden relative shadow-md">
                <div className="md:col-span-8 relative aspect-[16/10] md:aspect-[16/10] overflow-hidden group">
                  <img
                    alt="Spacious modern furnished single room with double bed, study workstation, natural daylight and kitchenette in Malabe"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhRW_-pcWdsXpW8w2MlATn8dO0yGx-vhdJoJ_q3F6P4oR199SdmxrelzPnxJswZzc9WdWak_yzXZHT1Gp6Bghb5QO6aX6eS0af-ZpiYi5bnC15_KcRadzuH6kEN5ZM0_EOGQt0pzkvLhufDiHT5AG4s6OlkKDmTkCLGPz762_KLWmxl0vs-jswlGEPYd28KgqYE-DN33mhUeEyj-C1bubVSElXJijZZSbimecl90Jh2k-IW7fgWiMIyw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-space-md left-space-md text-on-primary pointer-events-none">
                    <span className="font-label-sm text-label-sm bg-primary/90 px-space-sm py-1 rounded-full uppercase tracking-wider backdrop-blur-md">Primary Annex View</span>
                    <p className="font-headline-sm text-headline-sm text-on-primary font-bold mt-1 drop-shadow-sm">Room &amp; Study Corner with Attached Bath</p>
                  </div>
                </div>
                <div className="md:col-span-4 flex flex-col gap-space-sm">
                  <div className="relative flex-1 aspect-[16/10] md:aspect-auto overflow-hidden group">
                    <img
                      alt="Bright study desk setup with bookshelf, comfortable ergonomic chair and garden-facing window"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuADWZbUz8U0-mXob_AUkghJ6zrbCwDUXP-8b5k1AfeqDLrMPqx4VPtXaWbWOyQD_KvW-axn2pkmHzAInC1K16efQL8TWP6_NZT4pD2Sb992tD1TP6no7ikJz9KiV9Hb_byg-MDs2M2Z7wvU2hWVHsD6hqWv2ynHh-1vT9L9gMPIJl536RZOp4Q-ZnTZ2o3zmLqHjNEaGPBJad5uzL_lL3GP7o-0yYoOuzASN05Y_bUOuUrAuwBoHbvskg"
                    />
                    <div className="absolute top-space-xs right-space-xs bg-surface-container-lowest/90 backdrop-blur-md px-space-xs py-0.5 rounded text-on-surface font-label-sm text-label-sm">
                      Study Workstation
                    </div>
                  </div>
                  <div className="relative bg-surface-container-highest flex items-center justify-between p-space-md rounded-b-xl md:rounded-b-none md:rounded-br-2xl">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[24px]">photo_library</span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface">6 High-Resolution Photos</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Bathroom, Entrance &amp; Garden</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-1 bg-surface-container-lowest text-on-surface hover:bg-primary hover:text-on-primary px-space-sm py-space-xs rounded-lg font-label-sm text-label-sm shadow-sm transition-colors" type="button">
                      <span>View All (6)</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Content Architecture Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* LEFT CONTENT COLUMN */}
              <div className="lg:col-span-8 flex flex-col gap-space-xl">
                {/* Key Quick Specs Cards Grid */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-md flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">apartment</span>
                    Key Accommodation Highlights
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md">
                    {[
                      { icon: "single_bed", label: "Room Layout", value: "1 Bed (Single)" },
                      { icon: "shower", label: "Bathroom", value: "Private Attached" },
                      { icon: "meeting_room", label: "Entry & Access", value: "Separate Entrance" },
                      { icon: "grid_view", label: "Floor Finish", value: "Fully Tiled Floor" },
                      { icon: "bolt", label: "Electricity", value: "Free / Included" },
                      { icon: "water_drop", label: "Water Supply", value: "Free / 24h Tap+Well" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-low">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                          <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-sm text-label-sm text-on-surface-variant">{item.label}</span>
                          <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Transparency Section */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">payments</span>
                    Rent Breakdown &amp; Key Money Terms
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Monthly Base Rent (මාසික කුලිය)</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display-lg text-display-lg text-primary font-bold">LKR 18,500</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">/ month</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-emerald-dark font-medium flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        All water &amp; standard electrical power bills included
                      </p>
                    </div>
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Key Money Deposit (පෙරගෙවුම් මුදල්)</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display-lg text-display-lg text-on-surface font-bold">2 Months</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">(LKR 37,000)</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-[16px] text-primary">info</span>
                        100% Refundable upon 1-month prior checkout notice
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">description</span>
                    About This Bodim Place / විස්තරය
                  </h2>
                  <div className="space-y-space-sm font-body-lg text-body-lg text-slate-body leading-relaxed">
                    <p>
                      Looking for a peaceful, comfortable, and well-maintained private room just footsteps away from SLIIT? This newly updated single annex room is tailored specifically for students and young corporate interns desiring study tranquility, uninterrupted connectivity, and total privacy.
                    </p>
                    <p>
                      The unit features high ceilings, cooling cross-ventilation, a solid mahogany single bed with orthopedic mattress, a designated study workstation with an ergonomic swivel chair and warm desk illumination, plus your own private attached washroom with modern shower fixtures.
                    </p>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low border-l-4 border-l-primary flex flex-col gap-1">
                    <span className="font-label-md text-label-md text-primary font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">translate</span>
                      සිංහල විස්තරය (Sinhala Overview)
                    </span>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed pt-1">
                      මාලඹේ SLIIT ප්‍රධාන පිවිසුමට මීටර් 500ක් දුරින් පිහිටි නවීන, නිස්කලංක තනි කාමරයකි. අනුයුක්ත නාන කාමරය, වෙනම පිවිසුම, අධ්‍යයන මේස සහ පුටුව, අධිවේගී Wi-Fi පහසුකම් සහිතයි. ජල හා විදුලි බිල්පත් ගාස්තුවට ඇතුළත් වේ. SLIIT, CINEC, Horizon Campus සහ ITUM සිසුන් සඳහා විශේෂයෙන් සුදුසුයි. ආරක්ෂිත යතුරුපැදි නැවතුම් පහසුකම් ඇත.
                    </p>
                  </div>
                </div>

                {/* Amenities & Features Checklist */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">check_box</span>
                      Amenities &amp; Facilities (පහසුකම්)
                    </h2>
                    <span className="font-label-sm text-label-sm text-emerald-dark bg-emerald-subtle px-space-xs py-0.5 rounded-full font-bold">All Active</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-space-md gap-x-space-lg">
                    {[
                      "Free High-Speed Wi-Fi (Fiber)",
                      "Private Attached Bathroom",
                      "Separate Private Entrance",
                      "Study Desk & Office Chair",
                      "Ceiling Fan (KDK)",
                      "Individual Clothes Wardrobe",
                      "Filtered Drinking Water",
                      "Motorbike Parking Bay",
                      "CCTV Security 24/7 (Gate)",
                      "Flexible Entry / Own Key",
                      "Overhead Water Storage Tank",
                      "Ironing & Laundry Area",
                    ].map((amenity) => (
                      <div key={amenity} className="flex items-center gap-space-xs text-on-surface font-body-md text-body-md">
                        <span className="material-symbols-outlined text-emerald-dark text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Campus Proximity & Neighborhood Transit */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">school</span>
                      Campus Proximity &amp; Nearby Transit
                    </h2>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Estimated commute times</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container-low">
                      <div className="w-10 h-10 rounded-lg bg-amber-subtle text-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[22px]">directions_walk</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-on-surface font-semibold">SLIIT Malabe Campus</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">500 meters • 6 mins walk via back gate path</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container-low">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[22px]">directions_bus</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-on-surface font-semibold">CINEC Maritime Campus</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">1.2 km • 3 mins by bus 177 / 143</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container-low">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[22px]">local_hospital</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-on-surface font-semibold">Horizon Campus / NFTH</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">1.5 km • 5 mins ride</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container-low">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg text-on-surface font-semibold">Malabe Junction &amp; Supermarkets</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">800 meters • Keells, Cargills &amp; ATMs</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-space-xs rounded-xl overflow-hidden shadow-sm relative">
                    <div
                      className="w-full h-56 bg-surface-container-high bg-cover bg-center flex flex-col justify-end p-space-md relative"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZwqT4G1fpebm937brYIpXNR6wJvkIeZcv8LEHpF5kvBhkdjorAixuKbO7ZZuJCdcZloEjNKw6LkIa-v6h9h7j8akRfh3mcfippCDhRJR3yBsg10jtQehJ11RD0ZJRRgcXPoyZDkpPZcwFysbfqC7o1ES9Z0DxbTX9HBWmI-4grUOShTo4eqpceukPvpZaM2nxVENI27--ReoJolNXCpIbUkCFAD3pMMtawbqGSoebenpwYTbGKMaicQ')",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
                      <div className="relative z-10 flex items-center justify-between text-on-primary">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[24px] text-primary-fixed">pin_drop</span>
                          <div>
                            <div className="font-label-lg text-label-lg font-bold">Kaduwela Road, Pittugala, Malabe</div>
                            <div className="font-body-sm text-body-sm opacity-90">Exact house coordinates shared after landlord contact</div>
                          </div>
                        </div>
                        <a
                          className="bg-surface-container-lowest text-on-surface hover:bg-primary hover:text-on-primary px-space-md py-space-xs rounded-lg font-label-sm text-label-sm shadow-sm transition-colors"
                          href="https://maps.google.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Open in Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Landlord House Rules */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">policy</span>
                    House Rules &amp; Tenancy Guidelines (නීති රීති)
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md">
                        <span className="material-symbols-outlined text-primary text-[18px]">smoke_free</span>
                        Non-Smoking
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Strictly no smoking inside the room or bathroom.</p>
                    </div>
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md">
                        <span className="material-symbols-outlined text-primary text-[18px]">bedtime</span>
                        Quiet Hours
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">After 10:30 PM to respect studying and sleeping roommates.</p>
                    </div>
                    <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-on-surface font-label-md text-label-md">
                        <span className="material-symbols-outlined text-primary text-[18px]">group_add</span>
                        Visitor Policy
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Guest visits permitted in the common porch until 8:00 PM.</p>
                    </div>
                  </div>
                </div>

                {/* Verified Safety Charter & Field Inspection Notice */}
                <div className="bg-surface-container-low p-space-lg rounded-2xl flex flex-col sm:flex-row items-center gap-space-md">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-subtle text-emerald-dark flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  </div>
                  <div className="flex flex-col gap-0.5 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Field-Inspected &amp; Certified</span>
                      <span className="px-2 py-0.5 bg-emerald-dark text-on-tertiary font-label-sm text-label-sm rounded-full">100% Genuine</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Inspected &amp; Verified by Boarding.lk Field Team on 14th Feb 2026. Landlord National Identity Card (NIC) &amp; Municipal Title Deed documents have been digitally confirmed to protect tenants from unauthorized sub-leases.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR COLUMN */}
              <aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-md flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm border-b-0">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Monthly Rental</span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-headline-lg text-headline-lg text-primary font-extrabold">LKR 18,500</span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">/ month</span>
                      </div>
                    </div>
                    <span className="px-space-sm py-1 bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm rounded-full font-bold">
                      Available Now
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm p-space-sm rounded-xl bg-surface-container-low">
                    <div className="w-12 h-12 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-headline-sm shadow-sm shrink-0">
                      SJ
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-label-lg text-label-lg text-on-surface font-bold truncate">Mr. Sunil Jayasinghe</span>
                        <span className="material-symbols-outlined text-emerald-dark text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Owner • Registered Member since 2022</span>
                      <span className="font-label-sm text-label-sm text-emerald-dark flex items-center gap-1 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-dark animate-pulse"></span>
                        Replies in &lt; 15 mins
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-container text-on-surface-variant rounded font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[13px] text-tertiary">check</span> NIC Checked
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-container text-on-surface-variant rounded font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[13px] text-tertiary">check</span> Phone Active
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-surface-container text-on-surface-variant rounded font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[13px] text-tertiary">check</span> Property Visited
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <a
                      className="w-full bg-[#10B981] hover:bg-[#059669] text-on-tertiary font-label-lg text-label-lg py-space-sm px-space-md rounded-xl flex items-center justify-center gap-space-xs shadow-sm transition-all text-center"
                      href="https://wa.me/94771234567?text=Hello%20Sunil,%20I%20am%20interested%20in%20your%20single%20annex%20room%20near%20SLIIT%20(Code%20BLK-4920)%20on%20boarding.lk"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                      <span>Chat on WhatsApp / වට්ස්ඇප්</span>
                    </a>
                    <a
                      className="w-full bg-primary hover:bg-amber-hover text-on-primary font-label-lg text-label-lg py-space-sm px-space-md rounded-xl flex items-center justify-center gap-space-xs shadow-sm transition-all text-center"
                      href="tel:+94771234567"
                    >
                      <span className="material-symbols-outlined text-[20px]">call</span>
                      <span>Call Landlord: 077 123 4567</span>
                    </a>
                    <button
                      className="w-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg py-space-sm px-space-md rounded-xl flex items-center justify-center gap-space-xs transition-colors text-center"
                      type="button"
                      onClick={() => setShowModal(true)}
                    >
                      <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                      <span>Schedule a Visit / බැලීමට වේලාවක්</span>
                    </button>
                  </div>
                  <p className="font-body-sm text-body-sm text-center text-on-surface-variant">
                    Mention <span className="font-bold text-on-surface">BLK-4920</span> when calling for priority arrangement.
                  </p>
                </div>

                {/* Student Safety & Anti-Scam Advisory Banner */}
                <div className="bg-amber-subtle/80 p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs text-primary font-label-lg text-label-lg font-bold">
                    <span className="material-symbols-outlined text-[20px] text-primary">security</span>
                    Student Anti-Scam Safety Tip
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                    <span className="font-bold">Never send money or advance deposits online</span> prior to visiting the boarding premises in person and checking the keys with the landlord.
                  </p>
                  <div className="pt-space-xs flex items-center justify-between text-body-sm text-on-surface-variant">
                    <span>Report concerns:</span>
                    <a className="text-primary hover:underline font-semibold font-label-sm text-label-sm" href="mailto:athulasiriproduction@gmail.com">Support Helpdesk</a>
                  </div>
                </div>

                {/* Similar Boarding Places Nearby */}
                <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Nearby in Malabe Hub</h3>
                  <a className="flex items-center gap-space-sm p-space-xs rounded-xl hover:bg-surface-container-low transition-colors group" href="#">
                    <div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                      <img
                        alt="Modern Sri Lankan student bodim studio apartment with clean white walls and bright sunlit window near university"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOVUuHVOsCuEFVAIL8vZkcKWoRIxkDUkWpic0x8-iNn8hJ6PBBoS7h6-pGPAWTY2IKdsHKRI3ba6AkY-IX9Gx4nPspg3FuDFPzQLoWmLCmYsUmaoTSrY4wMLxxKartqxuFWnbiXW90qbprhTWR6znrlKxuvDIInZOcBDVwMJapfDmRKeHnxpcjehUWKH4EzeBDL89UsLsTk6ZfLj1SoWlhI3nFZDjOcMjJNN9eXnMU0EJR_TUykOp7FA"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors truncate">
                        Two-Sharing Room with AC - Malabe
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">700m to Horizon Campus</span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">LKR 12,000 / person</span>
                    </div>
                  </a>
                  <a className="flex items-center gap-space-sm p-space-xs rounded-xl hover:bg-surface-container-low transition-colors group" href="#">
                    <div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                      <img
                        alt="Cozy residential annex apartment exterior with parking area and tropical greenery in Malabe Sri Lanka"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAlfeOrlx0wNoJnUMsonoe3n_GQdXBiFcLjWKgpuy5owoBtlWohUF5clFS7H0J-U-_8fP6EtDCW0aILegk0E6uhHJDwTsdQD4a7MdtroGPcyxhLZSHG3tRTVLKzRx9_EkiIhXQtsx4PnbjR_xmGu9YkfcrBWF7xlO_Y2dJCklzTxTct4maougxKn6aM-QW9cRBneJmptvTICzKxiOcjxtsvbZUg89FrzCOnui_I-FLLBSfNC6M046dMw"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors truncate">
                        Full 1-Bedroom Upper Annex
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">CINEC 1.5 km • Kitchen included</span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">LKR 28,000 / month</span>
                    </div>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {showModal && <ScheduleVisitModal onClose={() => setShowModal(false)} />}
      </main>
      <SiteFooter />
    </div>
  );
}
