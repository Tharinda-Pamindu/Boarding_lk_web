import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/saved")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Saved / Wishlist | boarding.lk" },
      {
        name: "description",
        content:
          "View and compare your saved boarding places and annexes near Sri Lankan university campuses. Track prices, chat with landlords, and manage your wishlist.",
      },
      { property: "og:title", content: "Saved / Wishlist | boarding.lk" },
      {
        property: "og:description",
        content:
          "View and compare your saved boarding places and annexes near Sri Lankan university campuses. Track prices, chat with landlords, and manage your wishlist.",
      },
    ],
  }),
});

function WishlistCard({
  imgSrc,
  imgAlt,
  badge,
  badgeIcon,
  distanceIcon,
  distanceText,
  statusBadge,
  typeBadge,
  audience,
  title,
  location,
  amenities,
  priceLabel,
  price,
  priceNote,
  strikePrice,
  discount,
  waLabel,
  callLabel,
  faded,
  checked,
  negotiation,
}: {
  imgSrc: string;
  imgAlt: string;
  badge: string;
  badgeIcon: string;
  distanceIcon: string;
  distanceText: string;
  statusBadge: React.ReactNode;
  typeBadge: string;
  audience: React.ReactNode;
  title: string;
  location: string;
  amenities: { icon: string; label: string }[];
  priceLabel: string;
  price: string;
  priceNote?: string;
  strikePrice?: string;
  discount?: string;
  waLabel?: string;
  callLabel?: string;
  faded?: boolean;
  checked?: boolean;
  negotiation?: React.ReactNode;
}) {
  return (
    <article
      className={`w-full ${
        faded ? "bg-surface-container-lowest/70 opacity-90 hover:opacity-100" : "bg-surface-container-lowest"
      } rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-4 sm:p-5 flex flex-col md:flex-row gap-5 relative group`}
    >
      <div className="absolute top-4 left-4 z-20">
        <label className="flex items-center cursor-pointer">
          <input
            defaultChecked={checked}
            className="w-5 h-5 rounded text-primary focus:ring-primary cursor-pointer accent-primary"
            type="checkbox"
          />
        </label>
      </div>
      <div className="relative w-full md:w-80 h-52 md:h-auto shrink-0 rounded-lg overflow-hidden bg-surface-container">
        <img
          className={`w-full h-full object-cover transition-transform duration-300 ${
            faded ? "grayscale-[30%] group-hover:grayscale-0" : "group-hover:scale-105"
          }`}
          alt={imgAlt}
          src={imgSrc}
        />
        <div
          className={`absolute top-3 right-3 font-label-sm text-label-sm px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm ${
            badge === "Price Dropped" || badge === "Rent Agreed"
              ? "bg-amber-subtle text-amber-hover"
              : "bg-emerald-subtle text-emerald-dark"
          }`}
        >
          <span className="material-symbols-outlined text-[14px]">{badgeIcon}</span>
          <span>{badge}</span>
        </div>
        <div className="absolute bottom-3 left-3 bg-on-surface/85 backdrop-blur-md text-surface-container-lowest font-label-sm text-label-sm px-2.5 py-1 rounded-md flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px] text-primary-fixed">{distanceIcon}</span>
          <span>{distanceText}</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {statusBadge}
              <span
                className={`px-2 py-0.5 rounded-full font-label-sm text-label-sm font-semibold ${
                  typeBadge === "Private Annex"
                    ? "bg-amber-subtle text-amber-hover"
                    : "bg-surface-container-high text-on-surface"
                }`}
              >
                {typeBadge}
              </span>
              {audience}
            </div>
            <button
              className="text-on-surface-variant hover:text-danger-red p-1 rounded transition-colors"
              title="Remove from wishlist"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
          <h3
            className={`font-headline-md text-headline-md ${
              faded ? "text-on-surface/80" : "text-on-surface"
            } font-bold hover:text-primary transition-colors cursor-pointer leading-snug`}
          >
            {title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
            <span>{location}</span>
          </p>
          {negotiation ? (
            negotiation
          ) : (
            <div className="flex flex-wrap items-center gap-2 pt-1 font-body-sm text-body-sm text-slate-body">
              {amenities.map((a) => (
                <span key={a.label} className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">{a.icon}</span>
                  {a.label}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 bg-surface-container-low/50 p-3 rounded-lg">
          <div>
            <span className="font-body-sm text-body-sm text-on-surface-variant block">{priceLabel}</span>
            <div className="flex items-baseline gap-1">
              <span
                className={`font-headline-lg text-headline-lg ${
                  faded ? "text-on-surface/80" : "text-on-surface"
                } font-extrabold tracking-tight`}
              >
                {price}
              </span>
              {strikePrice && (
                <span className="line-through text-on-surface-variant font-label-md text-label-md">{strikePrice}</span>
              )}
              {discount && (
                <span className="font-label-sm text-label-sm text-tertiary bg-emerald-subtle px-1.5 py-0.5 rounded font-bold">
                  {discount}
                </span>
              )}
              {!strikePrice && !discount && (
                <span className="font-body-sm text-body-sm text-on-surface-variant">/ month</span>
              )}
            </div>
            {priceNote && <span className="font-label-sm text-label-sm text-on-surface-variant">{priceNote}</span>}
          </div>
          <div className="flex items-center gap-2">
            {waLabel && (
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-dark text-on-primary font-label-md text-label-md hover:opacity-95 transition-all shadow-sm"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>{waLabel}</span>
              </a>
            )}
            {callLabel && (
              <button
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">call</span>
                <span>{callLabel}</span>
              </button>
            )}
            {faded && (
              <>
                <Link
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all"
                  to="/university-hubs"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">search</span>
                  <span>View Similar near Kelaniya</span>
                </Link>
                <button
                  className="p-2 rounded-lg text-on-surface-variant hover:text-danger-red transition-colors"
                  title="Remove"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function RecCard({
  imgSrc,
  imgAlt,
  locTag,
  audience,
  roomType,
  title,
  desc,
  price,
}: {
  imgSrc: string;
  imgAlt: string;
  locTag: string;
  audience: string;
  roomType: string;
  title: string;
  desc: string;
  price: string;
}) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        <div className="relative w-full h-44 rounded-lg overflow-hidden mb-3 bg-surface-container">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={imgAlt} src={imgSrc} />
          <span className="absolute top-2.5 left-2.5 bg-on-surface/85 backdrop-blur-md text-surface-container-lowest font-label-sm text-label-sm px-2 py-0.5 rounded">
            {locTag}
          </span>
          <button
            className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-surface-container-lowest/90 text-on-surface hover:text-primary flex items-center justify-center transition-colors shadow-sm"
            title="Save to wishlist"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">bookmark_add</span>
          </button>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-label-sm text-label-sm font-bold text-tertiary">{audience}</span>
          <span className="text-outline-variant">•</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">{roomType}</span>
        </div>
        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">{desc}</p>
      </div>
      <div className="flex items-center justify-between pt-4 mt-3 border-t-0">
        <div>
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">{price}</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">/mo</span>
        </div>
        <Link
          className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors"
          to="/search"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
            <div className="absolute -top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-80 left-0 w-80 h-80 bg-tertiary-container/5 rounded-full blur-2xl pointer-events-none -z-10"></div>

            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md mb-6">
              <Link className="hover:text-primary transition-colors flex items-center gap-1" to="/">
                <span className="material-symbols-outlined text-[16px]">home</span>
                <span>Home</span>
              </Link>
              <span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
              <span className="text-on-surface font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bookmark
                </span>
                <span>Saved / Wishlist</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">(සුරැකි දැන්වීම්)</span>
              </span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Saved Boarding Places &amp; Annexes
                  </h1>
                  <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary-fixed text-on-primary-fixed">
                    5 Places
                  </span>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant flex items-center gap-2">
                  <span>ඔබ සුරැකි කරගත් බෝඩිම් සහ ඇනෙක්ස්</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                  <span className="text-slate-body">Real-time status, landlord contacts &amp; comparison workspace</span>
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1 font-label-md text-label-md">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-dark animate-pulse"></span>
                    3 Verified Active
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-subtle text-amber-hover font-semibold">
                    <span className="material-symbols-outlined text-[15px]">trending_down</span>
                    1 Price Dropped
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-secondary-container">
                    <span className="material-symbols-outlined text-[15px]">pending_actions</span>
                    1 Under Negotiation
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px] text-tertiary">share</span>
                  <span>Share via WhatsApp</span>
                </button>
                <button
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-amber-hover transition-all"
                  id="compare-button"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">compare_arrows</span>
                  <span>
                    Compare Selected (<span id="compare-count">2</span>)
                  </span>
                </button>
                <button
                  className="p-2.5 rounded-lg text-on-surface-variant hover:text-danger-red hover:bg-error-container/40 transition-colors"
                  title="Clear all saved listings"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">delete_sweep</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 overflow-x-auto py-3 mb-6 scrollbar-none">
              <div className="flex items-center gap-2 shrink-0">
                <button className="px-4 py-1.5 rounded-full bg-on-surface text-surface-container-lowest font-label-md text-label-md font-semibold transition-colors" type="button">
                  All Saved (5)
                </button>
                <button className="px-4 py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-md text-label-md font-semibold transition-colors shadow-sm" type="button">
                  Rooms &amp; Annexes (3)
                </button>
                <button className="px-4 py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-md text-label-md font-semibold transition-colors shadow-sm" type="button">
                  Near Campus (4)
                </button>
                <button className="px-4 py-1.5 rounded-full bg-amber-subtle text-amber-hover hover:bg-amber-subtle/80 font-label-md text-label-md font-semibold transition-colors" type="button">
                  Price Drops (1)
                </button>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm shrink-0">
                <span>Sort by:</span>
                <select className="bg-surface-container-lowest text-on-surface font-label-md text-label-md py-1.5 px-3 rounded-lg shadow-sm outline-none cursor-pointer focus:ring-2 focus:ring-primary/20">
                  <option>Recently Saved</option>
                  <option>Price: Low to High</option>
                  <option>Closest to Campus</option>
                </select>
              </div>
            </div>

            <div className="w-full bg-surface-container-lowest rounded-xl p-4 mb-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-lg bg-amber-subtle text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">balance</span>
                </div>
                <div className="min-w-0">
                  <p className="font-label-lg text-label-lg text-on-surface">Campus Commute &amp; Rent Comparison</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                    Comparing: Malabe Annex (LKR 18.5k) vs Nugegoda Studio (LKR 28k)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
                <span className="font-label-sm text-label-sm text-emerald-dark bg-emerald-subtle px-2.5 py-1 rounded-full font-bold">
                  Save LKR 9,500/mo on Malabe
                </span>
                <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button">
                  View Side-by-Side
                </button>
              </div>
            </div>

            <div className="space-y-4 mb-12">
              <WishlistCard
                checked
                imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAKHDV5dYTudxhqWCeduJoO4k-bASNE49ZpICCxy0oH2FhCB__y-KwSbGVphRS55Wg36FxxVFW1SymX4Rf56vJ9R8UCehbNzuQsckLtmg0P-YaW932cEwh4U9TlKYlOxK2yDTBHp03uZw8tg-nXNtvap80BNqFI4C9Ntvju6lv39Gn925dXJOJWfsXEUta805ojJEHhSQ8A1Iz61I-DVXaiETeQ66OWtOa5BwzcNiCjaH0YCBDte-QyUw"
                imgAlt="A sunlit, spotless student bedroom in Malabe Sri Lanka featuring a comfortable single bed with patterned beige duvet, wooden study desk with modern chair, open window with steel security grilles looking out onto lush tropical green trees, ceiling fan, and tiled light-reflecting flooring in warm daylight."
                badge="Verified Bodim"
                badgeIcon="verified"
                distanceIcon="directions_walk"
                distanceText="6 mins to SLIIT Malabe"
                statusBadge={
                  <span className="px-2 py-0.5 rounded-full bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-dark"></span>
                    Available Now
                  </span>
                }
                typeBadge="Private Annex"
                audience={<span className="font-label-sm text-label-sm text-on-surface-variant">Girls / Boys</span>}
                title="Modern Furnished Single Annex Room with Attached Washroom - Malabe"
                location="Kaduwela Road, Pittugala, Malabe (Near SLIIT & CINEC)"
                amenities={[
                  { icon: "wifi", label: "Free High-Speed Wi-Fi" },
                  { icon: "shower", label: "Attached Private Bath" },
                  { icon: "bolt", label: "Water & Light Included" },
                  { icon: "table_restaurant", label: "Study Desk & Chair" },
                ]}
                priceLabel="Monthly Rent"
                price="LKR 18,500"
                priceNote="1 Month Key Deposit (Refundable)"
                waLabel="WhatsApp Mr. Sunil"
                callLabel="Call"
              />
              <WishlistCard
                checked
                imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAhFnSGEZblIshTmMEl35ux_jd6SY5wdvn-SCap1j7FoSUKWaVFZs6YfcQ3QoSKYHXdVIMXGHCP3Ojh_KyE0te1L6aWWrRXdZaFQ8bGTvQHMI4oO0gnpyKm2KMXtsDP19fKfvkmnRsUC9JjlGJ6iGUxj4xxDQlOeSX7vHrMwSVCcIIFoOJvM8Fp-qWYDe5X_tz5uT4Q4n0IuD7xr3xFQyySqxGad-rIdOJq8a7vfhUYI--UQali-1H9Gg"
                imgAlt="A bright studio apartment room in Nugegoda Colombo with warm wood cabinetry, modern kitchenette with mini fridge, microwave and cooktop, Queen size bed with blue runner runner, large window overlooking lush garden greenery, ergonomic office desk and chair, and air conditioning unit on wall."
                badge="Direct Landlord"
                badgeIcon="verified"
                distanceIcon="directions_bus"
                distanceText="10 mins to USJ Japura"
                statusBadge={
                  <span className="px-2 py-0.5 rounded-full bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-dark"></span>
                    Available Now
                  </span>
                }
                typeBadge="Studio Annex"
                audience={<span className="font-label-sm text-label-sm text-on-surface-variant">Graduates / Couples</span>}
                title="Modern Studio Annex with Kitchenette & AC - Nugegoda"
                location="Stanley Thilakarathne Mawatha, Nugegoda (Close to Supermarkets & Bus Stand)"
                amenities={[
                  { icon: "ac_unit", label: "Inverter AC" },
                  { icon: "kitchen", label: "Pantry & Induction Stove" },
                  { icon: "local_laundry_service", label: "Washing Machine Point" },
                  { icon: "lock", label: "Separate Private Entrance" },
                ]}
                priceLabel="Monthly Rent"
                price="LKR 28,000"
                priceNote="Separate sub-meters for electricity"
                waLabel="Chat WhatsApp"
                callLabel="Call Landlord"
              />
              <WishlistCard
                imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDR61cdArr9Ksnj2xM_esuA5elAvjaXD7uPEBKHQI7ZUARmvL2dxMLZnFU4SnHqEaWcDeTgrSSlEBVgzb2hQu0VFNycANrmSnZYdhJcechkrnizWiQMG_RTFWmiDWjVXbL4Argfq5qVOvmqn0hlF8kbMus64FOiSrHgrlUUgGnQ3vDQjDtlwTVGZjxz4zBfxQgF1T65NyDhl-EcD7hu2VQyH5F7uAdvKYDm9DZesdwrtUIHlHnoFHsVGg"
                imgAlt="Tidy twin sharing student bodim bedroom near University of Sri Jayewardenepura, featuring twin wooden single beds, two solid study desks with chairs, ceiling fan, bright white walls with student calendars, bookshelf, and clean tiled floor with daylight."
                badge="Price Dropped"
                badgeIcon="price_change"
                distanceIcon="directions_walk"
                distanceText="3 mins walk to USJ Gate 2"
                statusBadge={
                  <span className="px-2 py-0.5 rounded-full bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-dark"></span>
                    Available
                  </span>
                }
                typeBadge="Twin Sharing"
                audience={<span className="font-label-sm text-label-sm font-bold text-primary">Boys Only</span>}
                title="Budget Twin-Sharing Room for Boys - Gangodawila / Japura"
                location="Soratha Mawatha, Gangodawila, Nugegoda"
                amenities={[
                  { icon: "water_drop", label: "Clean Spring & Tap Water" },
                  { icon: "restaurant", label: "Home Cooked Meals Optional" },
                  { icon: "menu_book", label: "Quiet Study Atmosphere" },
                ]}
                priceLabel="Monthly Rent (Per Person)"
                price="LKR 10,000"
                strikePrice="LKR 11,500"
                discount="-13%"
                priceNote="Includes utility bill contribution"
                waLabel="Chat WhatsApp"
                callLabel="Call Landlord"
              />
              <WishlistCard
                imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuC-zDgz2g0z_DX6M8x31RrBdjLbhlBghYB0cRKQARV9BKCFeYbbM2hvkchYWLPQqZyW1ITkfcqlbEk8E6FD8OcznL1gYdzZ9HN4MOhOFmQrfCKBu9RsbAX2JBuP_yKlJ7em4F9Dt5znuHNoLNqEifU7haX0cGEyT4pLjFBcSKhCOnfomgxleZTy6txQHVgO0COfht6rN9yDlXJs5i24ZlpKcld0xVgeSZwjQSGUpHqMumVeHwgREip5rA"
                imgAlt="Well-furnished safe student annex in Borella Colombo 08 designed for medical undergraduates, displaying solid single wood bed, wardrobe with key, dressing mirror, study lamp, private balcony with iron security gate and tropical potted plants."
                badge="High Safety"
                badgeIcon="shield"
                distanceIcon="local_hospital"
                distanceText="Near Colombo Medical Faculty"
                statusBadge={
                  <span className="px-2 py-0.5 rounded-full bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-dark"></span>
                    Available
                  </span>
                }
                typeBadge="Independent Annex"
                audience={<span className="font-label-sm text-label-sm font-bold text-amber-hover">Girls Only</span>}
                title="Secure Girls-Only Annex with Separate Gate - Borella / Colombo 08"
                location="Kynsey Road, Borella (Walking distance to NHSL & Med Faculty)"
                amenities={[
                  { icon: "videocam", label: "24/7 CCTV & Security" },
                  { icon: "schedule", label: "No Strict Night Curfew" },
                  { icon: "shield", label: "Gated Family Compound" },
                ]}
                priceLabel="Monthly Rent"
                price="LKR 22,000"
                priceNote="Key money: 1 month only"
                waLabel="Chat WhatsApp"
                callLabel="Call Landlord"
              />
              <WishlistCard
                faded
                imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDFVIjt36luNpA46kjmMjOklzrrXw7XgxNiEQAfVWP18fe4Z8m-LGbWRGzKMZsfU1xgLhHzIyPGl8SM899Iqh4V6RpVHdWma9CKSM7_rLXEYRg3we9--d-Kx8sn3c3tLR49RHpVWF_D87sUh-VHU_1q4gF5N2olOdrHUuDvMFGBXsccQYxn47KS9rZK4RXU1_dIzgrDlFxKp05-UfvF5dBKYTSj33fmZTfjVqbHgavIMld_z9vfYfV_Og"
                imgAlt="Cozy upstairs room in Dalugama Kelaniya with balcony door opening onto green palm leaves, wooden bed frame, ceiling fan, study chair, and warm sunlight entering the tiled room."
                badge="Rent Agreed"
                badgeIcon="warning"
                distanceIcon="school"
                distanceText="8 mins to Kelaniya Campus"
                statusBadge={
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-hover"></span>
                    Under Negotiation / Rent Agreed
                  </span>
                }
                typeBadge="Upstairs Bodim"
                audience={<span className="font-label-sm text-label-sm text-on-surface-variant">Students</span>}
                title="Compact Upstairs Room near Kelaniya University - Dalugama"
                location="Dalugama Junction, Kelaniya (Kandy Road proximity)"
                amenities={[]}
                negotiation={
                  <div className="bg-amber-subtle/60 rounded-lg p-2.5 flex items-start gap-2">
                    <span className="material-symbols-outlined text-amber-hover text-[18px] shrink-0 mt-0.5">info</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Another student has agreed terms with the landlord yesterday. We recommend keeping this as a backup or viewing similar rooms nearby in Dalugama.
                    </p>
                  </div>
                }
                priceLabel="Monthly Rent"
                price="LKR 12,500"
              />
            </div>

            <section className="w-full bg-gradient-to-r from-amber-subtle/80 via-surface-container-low to-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-sm mb-12 relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-primary/10 to-transparent pointer-events-none hidden md:block"></div>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm font-bold shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">verified_user</span>
                    <span>Lanka Bodim Safety Protocol</span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                    Planning to inspect your saved boarding places?
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Protect your money and stay safe. Follow these critical steps before signing any agreement or paying an advance:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="flex items-start gap-2 bg-surface-container-lowest/80 p-3 rounded-lg">
                      <span className="material-symbols-outlined text-primary text-[20px] shrink-0">do_not_disturb_on</span>
                      <div className="font-body-sm text-body-sm text-slate-body">
                        <strong className="text-on-surface block font-semibold">Never Wire Advance</strong>
                        Inspect property in person before paying key money.
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-surface-container-lowest/80 p-3 rounded-lg">
                      <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0">electric_meter</span>
                      <div className="font-body-sm text-body-sm text-slate-body">
                        <strong className="text-on-surface block font-semibold">Check Sub-Meters</strong>
                        Confirm distinct water &amp; CEB electricity counters.
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-surface-container-lowest/80 p-3 rounded-lg">
                      <span className="material-symbols-outlined text-amber-hover text-[20px] shrink-0">description</span>
                      <div className="font-body-sm text-body-sm text-slate-body">
                        <strong className="text-on-surface block font-semibold">Written Receipt</strong>
                        Get signed landlord payment slip or simple agreement.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm shrink-0 w-full lg:w-72 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-tertiary-container/20 text-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">support_agent</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Student Support Desk</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Free bodim verification</p>
                    </div>
                  </div>
                  <a className="font-headline-sm text-headline-sm text-primary font-bold hover:underline flex items-center gap-1" href="tel:+94786733237">
                    <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                    +94 78 673 3237
                  </a>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Available Monday – Saturday (8am – 7pm)</span>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Recommended Stays Near Your Saved Campus Locations
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Hand-picked options matching your budget near SLIIT Malabe &amp; USJ Japura
                  </p>
                </div>
                <Link className="hidden sm:inline-flex items-center gap-1 font-label-lg text-label-lg text-primary hover:underline" to="/search">
                  <span>Explore All 140+ Stays</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <RecCard
                  imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDWbkwwON6_ALIZOS8iIlcAaPw5Ys6VaL8ns4Cm2-4B9ujC2sKM4pEZmb4GfJLtlz7_mCxDuG5gc9YZA5uxw1d9W6dnABfut2n_KFL8ph_34c2RhpNn-UwBO9PTR6451tFPm_eg7mqNYGe52sXUVELHgu4LB2gK-HEFyT_TRkgT2HtbZnGEm4z_OwbiIBAMRnBtNUfctD5hAle-KMI85vx4J60tQbmOLPXd97RAr1Jcxpt1QPeDhdO9eA"
                  imgAlt="Compact modern student room in Chandrika Kumaratunga Mawatha Malabe with single bed, ceiling fan, study table, and clean tiled floor in bright daylight."
                  locTag="Malabe • 8 mins to SLIIT"
                  audience="Girls & Boys"
                  roomType="Single Room"
                  title="Lake Road Annex with Study Desk"
                  desc="Pittugala, Malabe • Quiet residential lane"
                  price="LKR 16,000"
                />
                <RecCard
                  imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBATJ8xT7Xl_wZNLmNw_5SoUEugoaKQ_ID9fUNXTcuFEAbRdZOqevzH5fCJP87hbnSoOHJh6F9LesrFfd7t9Chv_r0TZ6SZwObb9EYb-pdpp3NBwKjy9GvBSlfw9ly5p2BEKumvXnQElAaZnwwqkhJgIygagoJfiMsew1og5odoW2GCVCz6LZCjzJy21EOX18AsllAAvRVug3I9Zw_iUwZ--VnMHwd3e_7lH6dMjVhF9bV0pEwa3uwLng"
                  imgAlt="Spacious airy twin room in Gangodawila near Sri Jayewardenepura campus with two wooden study desks, ceiling fan, wide window with security bars, and clean tiled floors."
                  locTag="Gangodawila • 5 mins to USJ"
                  audience="Boys Only"
                  roomType="Sharing"
                  title="Wijerama Student Villa (Twin)"
                  desc="Wijerama Junction • High-speed fiber Wi-Fi"
                  price="LKR 9,500"
                />
                <RecCard
                  imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB_p__pq6amXqQ4chuRM1s6YKFSVGGmfKcDwXRaHLvaadh7CYiZPnCddHU0Xu7TUJCVyQAey4oLGTZXqeDiw3KHloLeW5otLQr35cQdxQjDRyMXK9nShqNHcUzZOzVwJsYj7M3GoYnQNHSdZbBW6YP_vUbttkJgufEu8MizGqnc6XDMSsXA1Tw9YhuCXr2Pvo_Uh1xkqSLrgNtfw1CFBnwHgIfseLxCqQGUlzznhs08JkkRM9iYX6rtsw"
                  imgAlt="Modern studio apartment in Nawala Rajagiriya with private bathroom, desk workspace, ceiling fan, and garden window view."
                  locTag="Nawala • 15 mins to USJ / Open Uni"
                  audience="Female Professionals"
                  roomType="Private Annex"
                  title="Green Oasis Single Annex"
                  desc="Nawala Road • Quiet environment with balcony"
                  price="LKR 24,000"
                />
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
