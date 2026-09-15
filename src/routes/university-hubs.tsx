import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/university-hubs")({
  component: Page,
  head: () => ({
    meta: [
      { title: "University Hubs | boarding.lk" },
      {
        name: "description",
        content:
          "Explore boarding, annexes and rooms near Sri Lanka's top universities and campuses. Verified landlords, direct WhatsApp contacts, zero commission.",
      },
      { property: "og:title", content: "University Hubs | boarding.lk" },
      {
        property: "og:description",
        content:
          "Explore boarding, annexes and rooms near Sri Lanka's top universities and campuses. Verified landlords, direct WhatsApp contacts, zero commission.",
      },
    ],
  }),
});

function Page() {
  return <UniversityHubsPage />;
}

function HeroSearchSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-fixed/25 via-surface to-surface pb-space-xl pt-space-lg">
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary-fixed-dim/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-tertiary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-lowest shadow-sm rounded-full font-label-sm text-label-sm text-primary font-bold">
            <span className="material-symbols-outlined text-[15px]">verified</span>
            1,450+ Verified Stays Islandwide
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-subtle text-emerald-dark rounded-full font-label-sm text-label-sm font-bold">
            <span className="material-symbols-outlined text-[15px]">school</span>
            Top Campus Bodim Directory
          </span>
        </div>
        <div className="max-w-3xl mb-space-lg">
          <h1 className="font-display-lg text-display-lg text-on-surface font-extrabold tracking-tight leading-tight">
            Find Your Ideal Boarding Place, Annex, or Home in Sri Lanka
          </h1>
          <p className="font-headline-sm text-headline-sm text-primary font-semibold mt-2">
            ඔබට ගැලපෙන පහසු සහ සුරක්ෂිත නවාතැන සොයාගන්න
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">
            Direct connections between campus undergraduates, interns, and trusted local landlords. No middleman charges. Verified contact details and genuine rent rates.
          </p>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg shadow-[0_20px_35px_-8px_rgba(15,23,42,0.12)] max-w-5xl">
          <div className="flex items-center gap-2 mb-space-md border-b pb-space-sm">
            <button className="search-tab-btn active px-space-md py-1.5 rounded-full font-label-lg text-label-lg bg-primary text-on-primary font-bold transition-colors" type="button">
              All Listings
            </button>
            <button className="search-tab-btn px-space-md py-1.5 rounded-full font-label-lg text-label-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors" type="button">
              Bodim Rooms | බෝඩිං
            </button>
            <button className="search-tab-btn px-space-md py-1.5 rounded-full font-label-lg text-label-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors" type="button">
              Annexes | ඇනෙක්ස්
            </button>
            <button className="search-tab-btn px-space-md py-1.5 rounded-full font-label-lg text-label-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors" type="button">
              Near Universities
            </button>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm">
            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Location / නගරය</label>
              <div className="relative flex items-center bg-surface-container-low rounded-xl px-3 py-2.5 hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-primary text-[20px] mr-2">location_on</span>
                <input className="bg-transparent w-full text-on-surface font-body-md text-body-md focus:outline-none placeholder:text-on-surface-variant/60" placeholder="e.g. Malabe, Wijerama, Borella" type="text" defaultValue="Colombo / Malabe" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Property Type / වර්ගය</label>
              <div className="relative flex items-center bg-surface-container-low rounded-xl px-3 py-2.5 hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-primary text-[20px] mr-2">home_work</span>
                <select className="bg-transparent w-full text-on-surface font-body-md text-body-md focus:outline-none appearance-none cursor-pointer" defaultValue="Any Accommodation">
                  <option>Any Accommodation</option>
                  <option>Boarding Place / කාමරය (651)</option>
                  <option>Annex / ඇනෙක්ස් (86)</option>
                  <option>Full House / නිවස (109)</option>
                  <option>Apartment (34)</option>
                  <option>Guest House (18)</option>
                </select>
                <span className="material-symbols-outlined text-on-surface-variant text-[18px] pointer-events-none absolute right-3">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tenant / බෝඩිං වර්ගය</label>
              <div className="relative flex items-center bg-surface-container-low rounded-xl px-3 py-2.5 hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-primary text-[20px] mr-2">group</span>
                <select className="bg-transparent w-full text-on-surface font-body-md text-body-md focus:outline-none appearance-none cursor-pointer" defaultValue="Any Gender / Any">
                  <option>Any Gender / Any</option>
                  <option>Girls Only (ගැහැණු ළමුන්)</option>
                  <option>Boys Only (පිරිමි ළමුන්)</option>
                  <option>Students Only (සිසුන්)</option>
                  <option>Working Professionals</option>
                  <option>Couples / Small Family</option>
                </select>
                <span className="material-symbols-outlined text-on-surface-variant text-[18px] pointer-events-none absolute right-3">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Budget / අයවැය (LKR)</label>
              <div className="flex items-center gap-2">
                <div className="relative flex-1 flex items-center bg-surface-container-low rounded-xl px-3 py-2.5 hover:bg-surface-container transition-colors">
                  <span className="font-label-sm text-label-sm text-on-surface-variant mr-1">Rs.</span>
                  <input className="bg-transparent w-full text-on-surface font-body-md text-body-md focus:outline-none placeholder:text-on-surface-variant/60" placeholder="Max" type="text" defaultValue="25,000" />
                </div>
                <button className="h-[44px] px-space-md bg-primary hover:bg-amber-hover text-on-primary rounded-xl font-label-lg text-label-lg font-bold flex items-center justify-center gap-1.5 transition-colors shadow-md shrink-0" type="button">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                  <span>Search</span>
                </button>
              </div>
            </div>
          </form>
          <div className="mt-space-md pt-space-xs flex flex-wrap items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
            <span className="font-semibold text-on-surface">Popular:</span>
            <a className="px-2.5 py-1 bg-surface-container-low hover:bg-surface-container rounded-full text-on-surface transition-colors" href="#">Borella (33)</a>
            <a className="px-2.5 py-1 bg-surface-container-low hover:bg-surface-container rounded-full text-on-surface transition-colors" href="#">Malabe SLIIT (61)</a>
            <a className="px-2.5 py-1 bg-surface-container-low hover:bg-surface-container rounded-full text-on-surface transition-colors" href="#">Nugegoda / Wijerama (55)</a>
            <a className="px-2.5 py-1 bg-surface-container-low hover:bg-surface-container rounded-full text-on-surface transition-colors" href="#">Homagama NSBM (62)</a>
            <a className="px-2.5 py-1 bg-surface-container-low hover:bg-surface-container rounded-full text-on-surface transition-colors" href="#">Dehiwala (41)</a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CategoryCard {
  alt: string;
  img: string;
  title: string;
  sinhala: string;
  count: string;
  extraClass?: string;
}

const categories: CategoryCard[] = [
  {
    alt: "Boarding Places | බෝඩිං ස්ථානය",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuYqZgjgzR5v8dyhv7HlKk0ANaOe_D5wGOkBO_C6BYNpCNgmkF8z9XAFgO2GXh_bVmVYZ5AuaUL8eYWczgghBS8arwNeztUjTjq1iIoz9Epd7CXlCswW4YbQcTVqkRPinc4Y_Gonl9HoMn7yjdgD9V58qCBaL6IBcUPWr4h3GI-u47MjjaVnVFbUMdTp4d0rSIUNdhpiJoXxC5_FMpXNBj9JRoDDJnRGBGWqolwofZHG-OqGdplpJLRA",
    title: "Boarding Places",
    sinhala: "බෝඩිං ස්ථානය",
    count: "651 Ads",
  },
  {
    alt: "Annexes | ඇනෙක්ස්",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd-QSCiEfgpzQM2ZP8QFLla5v7kmasNvb4GJebg1PDE7JOREb2t6ySaBpQ4BYrVDcW6YLSk6lfa2LlVYaBQggKjLzDyQhXZh_SHMwJKhGuzIapBwVGmmeSb-JtYc22qJGwdgNc-cDns3rhHw0RFLfvFba6I5wFd1ox05cAicBySWn_sLVuSqlVQGeB0aky-RU1o40CtvOiXkYPmZXDA2bJy4eYpwMfOtwuRaUn0p3ysXTMFR2OaUXZYg",
    title: "Annexes",
    sinhala: "ඇනෙක්ස්",
    count: "86 Ads",
  },
  {
    alt: "Houses | නිවස",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7-L7zb9Ua6Yu6_EVHZ_-K0UOQuy8_TqOZkP6IkwOkS31ZnjU1BrAt__coLbAJhpkKNMhV3WVqBSkAJO2f1QS_gSmA9EsG2fohdNeHc0cfhd2GJy0e8MUGwHJjnuJ3dFkxbbSBuyI8G3TJYu8uxCThKFbRDGd4coI-ez7HuUngm1z9Jm6rFTf2J0ltjvJvX3bdgJmbZQ6bHIC49Ha_5mW9vT9XmlfjGp6kOQVMFYc2-02Rep94PR_KFg",
    title: "Houses",
    sinhala: "නිවස",
    count: "109 Ads",
  },
  {
    alt: "Apartments | මහල් නිවාසය",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBZsKfUjSbLO0txgwcxgAguiHneA_SxB04w-QeIQShI5QfFFaMAJZxrJOoCAE_hu1myXeRuqbv4itDwPNGIb2wWG-Y99S_fSlwyjSHQ2q-sK5hKbZ1r4akTOUktabbTyuxkCtm5lBhD6e-zzly7V2IzLRTPu7LqwruWnvAYYY5gPOrxFGX1IxRWr8QOr8nXDoUXrVpdtmqsw6Qz2ZBEtNui3oIgg4qP22PuGqc2_6NUIk0wMpO09qwaA",
    title: "Apartments",
    sinhala: "මහල් නිවාසය",
    count: "34 Ads",
  },
  {
    alt: "Guest Houses | විවේකාගාරය",
    img: "https://lh3.googleusercontent.com/aida/AEtjO1XwwzaWQi2_gKlKP-vgoae1BDdV804GU8Q7ZAODP3CJ538yPZGfSm7z3891oLPW6MmgEZoj1qAPDjjrmXHhkQVf9c1kWkDUXlu2BF038hXPbIJsPwEK1FLfAmgouiy5b3M_RIiunqStTRw9eZNN5ovPZPIrNp6pf2DmNheOCn32REzeTFdFy6MN5-yZuhQrVrS5dHrwG1htFLNwQvVz8v9Zr0jtI4Jhyg0kGuGcwbLuVb4jf1AV8yvvMHcO",
    title: "Guest Houses",
    sinhala: "විවේකාගාරය",
    count: "18 Ads",
    extraClass: "col-span-2 sm:col-span-1",
  },
];

function CategoriesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-lg w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-md gap-2">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Categories / නවාතැන් වර්ග</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Browse by Living Style</h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">Choose the exact layout suitable for your study term, internship, or stay</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md">
        {categories.map((c) => (
          <a
            key={c.title}
            className={`group flex flex-col items-center text-center p-space-md bg-surface-container-lowest rounded-2xl shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_10px_25px_-4px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all${c.extraClass ? ` ${c.extraClass}` : ""}`}
            href="#"
          >
            <div className="w-full aspect-square max-w-[130px] rounded-xl overflow-hidden mb-space-sm bg-surface-container-low flex items-center justify-center p-2">
              <img alt={c.alt} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" src={c.img} />
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">{c.title}</span>
            <span className="font-label-sm text-label-sm text-primary font-semibold mt-0.5">{c.sinhala}</span>
            <span className="mt-2 px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">{c.count}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

interface CampusZone {
  name: string;
  area: string;
  count: string;
}

const campuses: CampusZone[] = [
  { name: "SLIIT & CINEC", area: "Malabe / Kaduwela", count: "61 Boardings Active" },
  { name: "University of Sri Jayewardenepura", area: "Wijerama / Gangodawila", count: "55 Boardings Active" },
  { name: "University of Kelaniya", area: "Dalugama / Kelaniya", count: "15 Boardings Active" },
  { name: "NSBM Green University", area: "Pitipana / Homagama", count: "62 Boardings Active" },
];

function CampusZonesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-lg w-full">
      <div className="bg-surface-container-low rounded-2xl p-space-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm mb-space-md">
          <div className="flex items-center gap-space-sm">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">University Campus Stays</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Affordable student boarding within 10–15 mins walk to lecture halls</p>
            </div>
          </div>
          <a className="font-label-lg text-label-lg text-primary hover:text-amber-hover font-bold inline-flex items-center gap-1" href="#">
            <span>Explore All 24 Campuses</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm">
          {campuses.map((c) => (
            <a key={c.name} className="flex items-center justify-between p-space-md bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow group" href="#">
              <div className="flex flex-col">
                <span className="font-label-lg text-label-lg font-bold text-on-surface group-hover:text-primary transition-colors">{c.name}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{c.area}</span>
                <span className="font-label-sm text-label-sm text-emerald-dark font-semibold mt-1">{c.count}</span>
              </div>
              <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ListingCard {
  img: string;
  imgAlt: string;
  badge: string;
  genderTag: string;
  price: string;
  priceUnit: string;
  location: string;
  title: string;
  description: string;
  amenities: { icon: string; label: string }[];
  waLink: string;
}

const listings: ListingCard[] = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW6Fqw0q_T18MxdiisE5h6ZdN7HnnqYlnoHjo1sVAJzN5EJncixWTDkYzX-V6-qhfJbtlP4oNhGJu31um3aWQzVK7a3izARDNUh5o_u2dfJsdfMrs_X2wnBtgAndkYh_3ONF6TSVdFg2SBhdjas-5mFGyHOMLOlM5-7pCRnl2u-RRN3-ZYxVolJnMacAxcX56qRrdKm6zTqrSGnGqGj-Du4VyHZ4pIGttaQETxrNmHnJA8d_-RMgOSCQ",
    imgAlt: "A clean, sunlit Sri Lankan boarding room with a single wooden bed, study table, ceiling fan, and large window showing tropical foliage in Colombo, bright daytime, architectural interior photography.",
    badge: "Verified Landlord / සත්‍යාපිත",
    genderTag: "Girls Only / කාන්තා",
    price: "Rs. 18,500",
    priceUnit: "/ person / mo",
    location: "Borella, Colombo 08 (5 mins to Medical Faculty)",
    title: "Spacious Upstairs Room with Study Desk & Balcony",
    description: "Attached modern bathroom, separate utility meters, very calm and secure residential lane with CCTV, ideal for Colombo university or medical students.",
    amenities: [
      { icon: "wifi", label: "Wi-Fi Free" },
      { icon: "water_drop", label: "Water Inc." },
      { icon: "key", label: "Sep. Entrance" },
    ],
    waLink: "https://wa.me/94786733237?text=Hi,%20inquiring%20about%20Borella%20boarding%20room",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB43WqyVzLmwej5X_YxyCwjO3R4zrAmOyM_2Eu7-MnnILZEfwYKOFArdNMNdSlW6PiTFYLB5EILAI6sHN7cPWznLY4jrF6xJGBsjD5BtQaEdcChc6c4FtwXpk-JLBbDekjwIv6AkPYbxcitxpcVjphyxABAF4kv59r-tRnZle4fdmRhOkdRDxGsbwpu9wHUNITCeeLpTVNNShUgbl8pL4COq0V1njjJuleIqn-f_yOxgEWbUheCU14jnQ",
    imgAlt: "A modern Sri Lankan annex building exterior with tiled patio, boundary wall, green garden, sunny morning light in Malabe suburb Colombo, clean architectural photography.",
    badge: "Direct Owner",
    genderTag: "Boys Only / පිරිමි",
    price: "Rs. 32,000",
    priceUnit: "/ month (Annex)",
    location: "Kaduwela Road, Malabe (800m to SLIIT Campus)",
    title: "Complete Ground Floor Annex with Kitchen Pantry",
    description: "Two bedrooms, tiled bathroom, living space and kitchen. Fits 2-3 computing or engineering undergrads comfortably. Vehicle parking available.",
    amenities: [
      { icon: "countertops", label: "Pantry" },
      { icon: "directions_car", label: "Parking" },
      { icon: "bolt", label: "Bills Split" },
    ],
    waLink: "https://wa.me/94786733237?text=Hi,%20inquiring%20about%20Malabe%20annex",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlyLYOwrmzwhaotSWfiU5aQ2VtzxRvhMMyc9aby6hHiUUFQCndbiVI3ES56lKQrwAcbU_RF5_Z-itTbNkVUii35SL7X2fU-o8jlYEsLD4pBWHQARjGFaLBbtpizTfPqjA9ScebFEQ2kF4zuvF-EXvHSiFnnF_HFVbSpamus6MkWgqzxHm6brlDcAvKpsTfeJp7c8F6LYtqRxcqoVrIcB1qkiqW4stczRuX5Gr5Ek-7aHyXav8h4mtkXw",
    imgAlt: "A cozy Sri Lankan boarding bedroom with two single beds, wardrobe, wall fan, study lamp, warm ambient light, clean student hostel environment in Gangodawila, photography.",
    badge: "Campus Verified",
    genderTag: "Students / ශිෂ්‍ය",
    price: "Rs. 10,000",
    priceUnit: "/ person / mo",
    location: "Wijerama Junction, Gangodawila (USJ Campus Gate 2)",
    title: "Budget Twin-Sharing Room (Walk to Japura)",
    description: "Clean spring water well and pipeline water, refrigerator access, peaceful study environment, food options available nearby on High-Level road.",
    amenities: [
      { icon: "directions_walk", label: "3 min Walk" },
      { icon: "chair", label: "Furnished" },
      { icon: "water", label: "Purified Water" },
    ],
    waLink: "https://wa.me/94786733237?text=Hi,%20inquiring%20about%20Wijerama%20Japura%20boarding",
  },
];

function FeaturedListingsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-lg w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
        <div>
          <div className="inline-flex items-center gap-1 text-emerald-dark bg-emerald-subtle px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-bold mb-2">
            <span className="material-symbols-outlined text-[14px]">shield</span>
            Phone &amp; Location Verified
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Featured Boarding Places &amp; Annexes</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Direct phone contacts with landlords. Zero booking fee or commissions.</p>
        </div>
        <div className="flex items-center gap-space-xs">
          <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold" type="button">Latest</button>
          <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-md text-label-md" type="button">Budget &lt; 15,000</button>
          <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-md text-label-md" type="button">Girls Only</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {listings.map((l) => (
          <article key={l.title} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_10px_25px_-4px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all flex flex-col">
            <div className="relative w-full aspect-[4/3] bg-surface-container">
              <img className="w-full h-full object-cover" alt={l.imgAlt} src={l.img} />
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span className="bg-emerald-dark text-on-primary font-label-sm text-label-sm font-bold px-2 py-1 rounded-md shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">verified</span>
                  {l.badge}
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
                <span className="font-label-sm text-label-sm text-primary font-bold">{l.genderTag}</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-on-surface/90 backdrop-blur-md text-surface-bright px-3 py-1.5 rounded-lg font-headline-sm text-headline-sm font-bold shadow-md">
                {l.price} <span className="font-label-sm text-label-sm font-normal text-surface-variant">{l.priceUnit}</span>
              </div>
            </div>
            <div className="p-space-md flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm mb-1">
                  <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                  <span>{l.location}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold line-clamp-1 mb-2">
                  {l.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-space-sm">
                  {l.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-space-md">
                  {l.amenities.map((a) => (
                    <span key={a.label} className="inline-flex items-center gap-1 text-on-surface font-label-sm text-label-sm px-2 py-1 bg-surface-container-low rounded-md">
                      <span className="material-symbols-outlined text-[14px] text-tertiary">{a.icon}</span> {a.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t">
                <a className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-dark hover:bg-emerald-700 text-on-primary py-2 px-3 rounded-lg font-label-md text-label-md font-bold transition-colors" href={l.waLink}>
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>WhatsApp Landlord</span>
                </a>
                <button className="p-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors" title="View Phone Number" type="button">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </button>
                <button className="p-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors" title="Add to Wishlist" type="button">
                  <span className="material-symbols-outlined text-[20px]">favorite_border</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-space-lg text-center">
        <a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg font-bold transition-all shadow-sm" href="#">
          <span>Load More Bodim Places in Colombo &amp; Suburbs</span>
          <span className="material-symbols-outlined text-[18px]">south</span>
        </a>
      </div>
    </section>
  );
}

function LandlordCalloutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl w-full">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-container text-on-primary p-space-lg lg:p-space-xl shadow-xl">
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute top-0 right-1/3 w-64 h-64 bg-amber-hover/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-sm">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full font-label-sm text-label-sm font-bold w-fit">
              <span className="material-symbols-outlined text-[15px]">add_business</span>
              100% Free Listing | කිසිඳු ගාස්තුවක් අය නොකෙරේ
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-white leading-snug">
              Are you a Landlord? List Your Property for Free
            </h2>
            <p className="font-headline-sm text-headline-sm text-amber-subtle font-semibold">
              ඔබ සතු අමතර කාමරය, ඇනෙක්ස් එක හෝ නිවස අදම නොමිලේ පළකරන්න!
            </p>
            <p className="font-body-md text-body-md text-white/90 leading-relaxed max-w-xl">
              Turn your unused rooms, houses, or annexes into steady monthly rental income. Reach thousands of active university students, software interns, and banking staff looking for accommodations today.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-2">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-amber-subtle text-[20px] shrink-0 mt-0.5">check_circle</span>
                <span className="font-body-sm text-body-sm text-white"><strong className="block text-amber-subtle">Zero Commission</strong> 100% free advertising</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-amber-subtle text-[20px] shrink-0 mt-0.5">verified_user</span>
                <span className="font-body-sm text-body-sm text-white"><strong className="block text-amber-subtle">Direct WhatsApp</strong> Inquiries go straight to you</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-amber-subtle text-[20px] shrink-0 mt-0.5">speed</span>
                <span className="font-body-sm text-body-sm text-white"><strong className="block text-amber-subtle">Fast Tenant Find</strong> 85% rented within 7 days</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="bg-surface-container-lowest text-on-surface p-space-lg rounded-2xl shadow-xl w-full max-w-md">
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">Post Your Ad in 2 Minutes</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">No registration fees required. Photos upload instantly from phone.</p>
              <Link className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-amber-hover text-on-primary py-3 px-space-md rounded-xl font-label-lg text-label-lg font-bold transition-all shadow-md" to="/post-ad">
                <span className="material-symbols-outlined text-[20px]">add_circle</span>
                <span>Post an Ad (Free) | දැන්වීම් පළ කරන්න</span>
              </Link>
              <div className="mt-space-md pt-space-sm border-t flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-tertiary">lock</span> Safe &amp; Verified
                </span>
                <span>Over 80,000 Monthly Visitors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const majorDistricts = [
  { name: "Colombo", count: "717 listings" },
  { name: "Gampaha", count: "78 listings" },
  { name: "Kandy", count: "47 listings" },
  { name: "Anuradhapura", count: "22 listings" },
  { name: "Kalutara", count: "17 listings" },
  { name: "Galle", count: "16 listings" },
  { name: "Kurunegala", count: "8 listings" },
];

const suburbs = [
  { name: "Homagama", count: "62" },
  { name: "Malabe", count: "61" },
  { name: "Nugegoda", count: "55" },
  { name: "Maharagama", count: "47" },
  { name: "Dehiwala", count: "41" },
  { name: "Borella", count: "33" },
  { name: "Boralesgamuwa", count: "25" },
  { name: "Wellawatte", count: "25" },
  { name: "Kaduwela", count: "23" },
  { name: "Rajagiriya", count: "19" },
  { name: "Battaramulla", count: "18" },
  { name: "Kadawatha", count: "18" },
  { name: "Ratmalana", count: "17" },
  { name: "Piliyandala", count: "16" },
  { name: "Kirulapana", count: "16" },
  { name: "Kelaniya", count: "15" },
  { name: "Moratuwa", count: "14" },
  { name: "Mount-Lavinia", count: "14" },
];

function DistrictsExplorerSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-lg w-full mb-space-xl">
      <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md border-b mb-space-md gap-2">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Explore Sri Lankan Rental Hubs</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Live property listings categorized by commercial districts and university zones</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="px-2.5 py-1 rounded bg-amber-subtle text-primary font-label-sm text-label-sm font-bold">717 in Colombo</span>
            <span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-bold">78 in Gampaha</span>
          </div>
        </div>
        <div className="mb-space-lg">
          <h3 className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold mb-space-sm">Major Rental Districts</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {majorDistricts.map((d) => (
              <a key={d.name} className="p-2.5 rounded-xl bg-surface-container-low hover:bg-primary hover:text-on-primary transition-all text-center group" href="#">
                <span className="font-label-md text-label-md block font-bold group-hover:text-on-primary text-on-surface">{d.name}</span>
                <span className="font-label-sm text-label-sm text-primary group-hover:text-amber-subtle">{d.count}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold mb-space-sm">Popular Suburbs &amp; Towns / ප්‍රධාන නගර</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-space-md gap-y-2 font-body-sm text-body-sm">
            {suburbs.map((s) => (
              <a key={s.name} className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-between" href="#">
                <span>{s.name}</span> <span className="text-xs text-outline font-semibold">{s.count}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function UniversityHubsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <HeroSearchSection />
          <CategoriesSection />
          <CampusZonesSection />
          <FeaturedListingsSection />
          <LandlordCalloutSection />
          <DistrictsExplorerSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
