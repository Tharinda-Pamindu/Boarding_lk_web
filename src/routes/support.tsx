import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/support")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Help & Support Center | boarding.lk" },
      {
        name: "description",
        content:
          "Get help with boarding.lk - WhatsApp live desk, voice helpline, scam reporting, and FAQs for students and landlords in Sri Lanka.",
      },
      { property: "og:title", content: "Help & Support Center | boarding.lk" },
      {
        property: "og:description",
        content:
          "Trusted resolution for Sri Lankan university undergraduates, working youth, and property owners. Instant answers, zero broker fees.",
      },
    ],
  }),
});

type FaqItem = {
  id: string;
  number: string;
  numberClass: string;
  question: string;
  questionClass?: string;
  content: React.ReactNode;
};

const studentFaqs: FaqItem[] = [
  {
    id: "s1",
    number: "1",
    numberClass: "bg-primary/10 text-primary",
    question: "Is Boarding.lk 100% free to search and contact?",
    content: (
      <p className="pl-11">
        Yes! Boarding.lk will never charge students, interns, or job seekers a finder’s fee, commission, or subscription. You receive direct unfiltered phone numbers and WhatsApp access to the property owners without middle brokers (broker-free guarantee).
      </p>
    ),
  },
  {
    id: "s2",
    number: "2",
    numberClass: "bg-primary/10 text-primary",
    question: "How do I verify that a boarding room is legitimate and safe?",
    content: (
      <div className="pl-11 space-y-2">
        <p>Always inspect the boarding in person during daylight. Look for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Verified Badge:</strong> Look for the green badge denoting the landlord has verified their National Identity Card (NIC).</li>
          <li><strong>Physical Locks:</strong> Confirm secure bedroom locks, well-lit street entry, and reliable water pressure.</li>
          <li><strong>Ask current boarders:</strong> Speak briefly with other university students living on the same premises regarding landlord behavior and quiet hours.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "s3",
    number: "3",
    numberClass: "bg-primary/10 text-primary",
    question: 'What if a landlord demands advance or "key money" before showing the room?',
    questionClass: "text-error",
    content: (
      <p className="pl-11 bg-error-container/20 p-space-sm rounded-lg text-on-surface">
        <strong>NEVER send advance money via eZ Cash, bank deposit, or reload before setting foot inside the property.</strong> Legitimate hosts will gladly arrange a visit. If a landlord claims "too many students are waiting so send Rs. 5,000 right now to hold it", immediately hit "Report Scam".
      </p>
    ),
  },
  {
    id: "s4",
    number: "4",
    numberClass: "bg-primary/10 text-primary",
    question: "How are campus walking distances calculated?",
    content: (
      <p className="pl-11">
        Walking distances (e.g., "7 mins to SLIIT Main Entrance", "400m to Japura Management Faculty") are mapped directly to official student pedestrian turnstiles and gates rather than distant highway centerlines.
      </p>
    ),
  },
];

const landlordFaqs: FaqItem[] = [
  {
    id: "l1",
    number: "1",
    numberClass: "bg-amber-subtle text-primary",
    question: "How do I post my room or annex for free?",
    content: (
      <p className="pl-11">
        Click the amber "Post an Ad (Free)" button in the top navigation bar. Enter your district, nearest landmark or faculty, rent per month, gender policy (e.g. "Girls Only"), and upload 3-5 clear photos taken with your smartphone. It takes under 3 minutes.
      </p>
    ),
  },
  {
    id: "l2",
    number: "2",
    numberClass: "bg-amber-subtle text-primary",
    question: "How do students contact me?",
    content: (
      <p className="pl-11">
        You can select whether students reach you via regular voice call or direct WhatsApp message. You may set convenient calling hours (e.g., 9:00 AM - 8:00 PM) to preserve personal privacy.
      </p>
    ),
  },
  {
    id: "l3",
    number: "3",
    numberClass: "bg-amber-subtle text-primary",
    question: "How do I mark my room as rented out or temporarily hide my ad?",
    content: (
      <p className="pl-11">
        Log in with the mobile phone number used to post the listing. Go to "My Ads" and toggle the listing status to "Occupied / සතුන් ගෙන ඇත" or "Pause Listing". This stops calls immediately while preserving your listing details for the next academic semester.
      </p>
    ),
  },
];

const scamFaqs: FaqItem[] = [
  {
    id: "sc1",
    number: "!",
    numberClass: "bg-error-container text-error",
    question: "Major red flags when renting in Sri Lanka",
    content: (
      <ul className="pl-11 list-disc space-y-2">
        <li>Host claims to be overseas or in Nuwara Eliya and promises to courier the key once money is transferred.</li>
        <li>Refuses an in-person walkthrough or will not let your parents or senior batchmate accompany you.</li>
        <li>Listings displaying luxurious air-conditioned Colombo 7 duplexes for an unrealistically low rent of Rs. 8,000/month.</li>
      </ul>
    ),
  },
  {
    id: "sc2",
    number: "✓",
    numberClass: "bg-emerald-subtle text-emerald-dark",
    question: "How does the Landlord Verification Badge work?",
    content: (
      <p className="pl-11">
        Property owners upload a Government NIC copy alongside a recent Ceylon Electricity Board (CEB) or National Water Supply bill matching the boarding house street address. Our desk verifies names and phone OTP before awarding the badge.
      </p>
    ),
  },
];

function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card-bg rounded-xl shadow-xs overflow-hidden">
      <button
        className="w-full p-space-md text-left flex items-center justify-between gap-space-md hover:bg-surface-container-lowest/50 transition-colors"
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        <div className="flex items-center gap-space-sm">
          <span className={`w-8 h-8 rounded-full ${item.numberClass} flex items-center justify-center font-bold text-sm shrink-0`}>
            {item.number}
          </span>
          <span className={`font-headline-sm text-headline-sm text-on-surface ${item.questionClass ?? ""}`}>
            {item.question}
          </span>
        </div>
        <span
          className="material-symbols-outlined text-on-surface-variant transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="px-space-md pb-space-md pt-0 text-on-surface-variant font-body-md text-body-md">
          {item.content}
        </div>
      )}
    </div>
  );
}

function Page() {
  const [activeTab, setActiveTab] = useState<"students" | "landlords" | "scam">("students");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const tabBtnClass = (tab: string) =>
    activeTab === tab
      ? "px-space-md py-space-xs rounded-lg font-label-lg text-label-lg bg-surface-container-lowest text-on-surface shadow-xs transition-all"
      : "px-space-md py-space-xs rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-all";

  const activeFaqs =
    activeTab === "students" ? studentFaqs : activeTab === "landlords" ? landlordFaqs : scamFaqs;

  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Top Breadcrumb Bar */}
          <div className="w-full bg-surface-container-low py-space-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
              <Link className="flex items-center gap-1 hover:text-primary transition-colors" to="/">
                <span className="material-symbols-outlined text-[16px]">home</span>
                <span>Home</span>
              </Link>
              <span className="text-outline-variant">/</span>
              <span className="text-on-surface font-semibold flex items-center gap-1">
                Need Help &amp; Support <span className="text-xs text-on-surface-variant font-normal">(උපකාරක මධ්‍යස්ථානය)</span>
              </span>
            </div>
          </div>

          {/* Hero Support Search Header */}
          <section className="relative w-full bg-surface-container-lowest overflow-hidden shadow-sm">
            <div className="absolute -right-16 -top-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
            <div className="absolute left-1/4 -bottom-20 w-80 h-80 rounded-full bg-tertiary/5 blur-3xl pointer-events-none"></div>
            <div className="max-w-5xl mx-auto px-6 lg:px-12 py-space-xl relative z-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-space-md py-space-xs bg-amber-subtle text-primary rounded-full font-label-sm text-label-sm uppercase tracking-wider mb-space-sm shadow-xs">
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
                Student &amp; Landlord Care Desk
              </div>
              <h1 className="font-headline-lg text-headline-lg lg:text-display-lg text-on-surface tracking-tight max-w-3xl">
                How can we help you today?
                <span className="block text-primary text-headline-md font-headline-md font-semibold mt-1">
                  ඔබට උදව් අවශ්‍ය කුමන කරුණකටද?
                </span>
              </h1>
              <p className="mt-space-xs text-on-surface-variant font-body-lg text-body-lg max-w-2xl">
                Trusted resolution for Sri Lankan university undergraduates, working youth, and property owners. Instant answers, zero broker fees.
              </p>

              <div className="w-full max-w-2xl mt-space-lg">
                <div className="relative flex items-center bg-surface rounded-xl shadow-md p-space-xs transition-shadow focus-within:shadow-xl">
                  <span className="material-symbols-outlined text-primary text-[24px] ml-space-sm">search</span>
                  <input
                    className="w-full bg-transparent px-space-sm py-space-sm text-on-surface font-body-md text-body-md focus:outline-none placeholder:text-on-surface-variant/70"
                    id="helpSearchInput"
                    placeholder="Search student safety, landlord contact issues, key money, fake ads..."
                    type="text"
                  />
                  <button
                    className="bg-primary hover:bg-amber-hover text-on-primary font-label-lg text-label-lg px-space-md py-space-sm rounded-lg transition-colors flex items-center gap-1 shrink-0"
                    type="button"
                  >
                    <span>Search</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 mt-space-md">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mr-1">Popular:</span>
                  <button
                    className="px-space-sm py-1 bg-surface-container rounded-full text-on-surface font-label-sm text-label-sm hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors"
                    onClick={() => setActiveTab("students")}
                    type="button"
                  >
                    💬 How to contact landlord
                  </button>
                  <button
                    className="px-space-sm py-1 bg-surface-container rounded-full text-on-surface font-label-sm text-label-sm hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors"
                    onClick={() => setActiveTab("scam")}
                    type="button"
                  >
                    🛡️ Key money safety
                  </button>
                  <button
                    className="px-space-sm py-1 bg-surface-container rounded-full text-on-surface font-label-sm text-label-sm hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors"
                    onClick={() => setActiveTab("landlords")}
                    type="button"
                  >
                    ✏️ Edit / delete my ad
                  </button>
                  <button
                    className="px-space-sm py-1 bg-error-container text-error rounded-full font-label-sm text-label-sm hover:opacity-90 transition-colors"
                    onClick={() => setActiveTab("scam")}
                    type="button"
                  >
                    🚨 Report fraudulent listing
                  </button>
                  <button
                    className="px-space-sm py-1 bg-surface-container rounded-full text-on-surface font-label-sm text-label-sm hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors"
                    onClick={() => setActiveTab("students")}
                    type="button"
                  >
                    🚶 University gate distances
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Multi-Channel Immediate Contact Cards (4 Grid) */}
          <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-xs">
              <div>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">Fast Direct Lines</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">We are standing by to protect your stay</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Whether you are trapped in an unfair lease or an elderly landlord posting your first ad, Sri Lankan support agents are ready.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Card 1: WhatsApp */}
              <div className="bg-card-bg rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-xl bg-emerald-subtle flex items-center justify-center text-emerald-dark">
                      <span className="material-symbols-outlined text-[28px]">chat</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-emerald-subtle text-emerald-dark font-bold">
                      <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
                      &lt; 5 mins
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">WhatsApp Live Desk</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Instant address checks, map confirmation, and direct photo verification before sending money.
                  </p>
                  <div className="p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Official WhatsApp</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-wide">+94 78 673 3237</span>
                  </div>
                </div>
                <a
                  className="w-full py-space-sm px-space-md bg-tertiary hover:bg-on-tertiary-fixed-variant text-on-tertiary rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                  href="https://wa.me/94786733237"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Card 2: Voice Helpline */}
              <div className="bg-card-bg rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-xl bg-amber-subtle flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[28px]">phone_in_talk</span>
                    </div>
                    <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded-full text-on-surface-variant">
                      Mon - Sat (8am - 9pm)
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Voice Helpline</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Speak in Sinhala or English directly with our Colombo operations team for urgent conflicts.
                  </p>
                  <div className="p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Helpline Numbers</span>
                    <span className="font-label-lg text-label-lg text-on-surface font-bold block">+94 78 673 3237</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">(011) 234-5678</span>
                  </div>
                </div>
                <a
                  className="w-full py-space-sm px-space-md bg-surface-container-high hover:bg-surface-container-highest text-on-surface rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 transition-colors"
                  href="tel:+94786733237"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>Call Helpline Now</span>
                </a>
              </div>

              {/* Card 3: Report Scam */}
              <div className="bg-card-bg rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-xl bg-error-container flex items-center justify-center text-error">
                      <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>gpp_bad</span>
                    </div>
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-error-container text-error px-2 py-0.5 rounded-full font-bold">
                      24h Removal
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Report Scam / Fake Ad</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Suspicious advance request or fake photos? We flag the IP and suspend unverified listings within 24h.
                  </p>
                  <div className="p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Trust &amp; Fraud Escalation</span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold truncate block">athulasiriproduction@gmail.com</span>
                  </div>
                </div>
                <a
                  className="w-full py-space-sm px-space-md bg-error text-on-error rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
                  href="mailto:athulasiriproduction@gmail.com?subject=Reporting%20Suspicious%20Boarding%20Listing"
                >
                  <span className="material-symbols-outlined text-[18px]">flag</span>
                  <span>Report Fraud Listing</span>
                </a>
              </div>

              {/* Card 4: Elder & Landlord Ad Helpdesk */}
              <div className="bg-card-bg rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined text-[28px]">handshake</span>
                    </div>
                    <span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-fixed-variant px-2 py-0.5 rounded-full font-semibold">
                      Sinhala &amp; EN
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Elder Landlord Helpdesk</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Need help drafting your listing, photographing rooms, or setting realistic campus rates? We do it free.
                  </p>
                  <div className="p-space-sm bg-surface-container-low rounded-lg mb-space-md">
                    <span className="font-label-sm text-label-sm text-on-surface-variant block">Free Community Support</span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">දැන්වීම් පළ කිරීමට සහය</span>
                  </div>
                </div>
                <a
                  className="w-full py-space-sm px-space-md bg-primary hover:bg-amber-hover text-on-primary rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                  href="#contactFormSection"
                >
                  <span className="material-symbols-outlined text-[18px]">add_business</span>
                  <span>Request Free Ad Help</span>
                </a>
              </div>
            </div>
          </section>

          {/* Interactive Categorized FAQ Accordion */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-space-lg">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">Frequently Asked Questions</span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Clear Answers for Students &amp; Owners</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl mx-auto">
                  Understand agreements, payments, safety inspections, and account management.
                </p>
                <div className="inline-flex p-1 bg-surface-container-high rounded-xl mt-space-md">
                  <button className={tabBtnClass("students")} onClick={() => setActiveTab("students")}>
                    🎓 Students &amp; Renters (ශිෂ්‍යයින්)
                  </button>
                  <button className={tabBtnClass("landlords")} onClick={() => setActiveTab("landlords")}>
                    🏡 Landlords &amp; Hosts (හිමිකරුවන්)
                  </button>
                  <button className={tabBtnClass("scam")} onClick={() => setActiveTab("scam")}>
                    🛡️ Scam Prevention &amp; Trust
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-space-sm" id="faqContainer">
                <div className="faq-group flex flex-col gap-space-sm">
                  {activeFaqs.map((item) => (
                    <FaqAccordion key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Split Contact & Support Ticket Form */}
          <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-space-xl" id="contactFormSection">
            <div className="bg-card-bg rounded-2xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              {/* Left Visual / Info Column */}
              <div className="lg:col-span-5 bg-gradient-to-br from-surface-container to-surface p-space-lg lg:p-space-xl flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-subtle text-primary font-label-sm text-label-sm font-bold mb-space-sm">
                    <span className="material-symbols-outlined text-[14px]">bolt</span>
                    Helpdesk Ticket System
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Send an official help inquiry
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
                    Need customized advice about lease deposits, safety inspections, or technical difficulty updating a listing? Fill out this quick form and our support desk will contact you via WhatsApp or phone.
                  </p>
                  <div className="mt-space-lg space-y-space-sm">
                    <div className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg shadow-xs">
                      <span className="material-symbols-outlined text-tertiary">check_circle</span>
                      <span className="font-label-md text-label-md text-on-surface">Average Response: Under 45 Minutes</span>
                    </div>
                    <div className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg shadow-xs">
                      <span className="material-symbols-outlined text-primary">translate</span>
                      <span className="font-label-md text-label-md text-on-surface">Trilingual: Sinhala, English &amp; Tamil</span>
                    </div>
                    <div className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg shadow-xs">
                      <span className="material-symbols-outlined text-error">lock</span>
                      <span className="font-label-md text-label-md text-on-surface">Your phone number is never shared with third parties</span>
                    </div>
                  </div>
                </div>
                <div className="pt-space-lg mt-space-md border-t border-slate-border">
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Emergency Student Assistance Desk:<br />
                    <strong className="text-on-surface font-label-md text-label-md">+94 78 673 3237 / athulasiriproduction@gmail.com</strong>
                  </p>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="lg:col-span-7 p-space-lg lg:p-space-xl">
                <form
                  className="space-y-space-md"
                  id="supportTicketForm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="fullName">Your Full Name *</label>
                      <input
                        className="w-full bg-surface-container-low rounded-lg px-space-md py-space-sm text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        id="fullName"
                        placeholder="e.g. Kasun Perera"
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="whatsappNumber">WhatsApp / Mobile *</label>
                      <input
                        className="w-full bg-surface-container-low rounded-lg px-space-md py-space-sm text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        id="whatsappNumber"
                        placeholder="07X XXX XXXX"
                        required
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="ticketCategory">Inquiry Category *</label>
                      <select
                        className="w-full bg-surface-container-low rounded-lg px-space-md py-space-sm text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        id="ticketCategory"
                        defaultValue="Student Inquiry"
                      >
                        <option value="Student Inquiry">Student Inquiry (Finding Bodim)</option>
                        <option value="Landlord Support">Landlord Support (Ad Assistance)</option>
                        <option value="Scam Report">Scam Report / Flagged Ad</option>
                        <option value="Technical Issue">Technical / Login Issue</option>
                        <option value="General Feedback">General Feedback</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="campusArea">Nearest Campus / Hub</label>
                      <select
                        className="w-full bg-surface-container-low rounded-lg px-space-md py-space-sm text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        id="campusArea"
                        defaultValue="SLIIT Malabe"
                      >
                        <option value="SLIIT Malabe">SLIIT Malabe</option>
                        <option value="USJ Gangodawila">USJ (Sri Jayewardenepura)</option>
                        <option value="University of Kelaniya">University of Kelaniya</option>
                        <option value="NSBM Green University">NSBM Pitipana</option>
                        <option value="Colombo UCSC / Arts">University of Colombo (Reid Ave)</option>
                        <option value="University of Moratuwa">University of Moratuwa</option>
                        <option value="Other Location">Other Area in Sri Lanka</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="inquiryMessage">How can we assist you? *</label>
                    <textarea
                      className="w-full bg-surface-container-low rounded-lg px-space-md py-space-sm text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                      id="inquiryMessage"
                      placeholder="Describe your question or issue in detail. If reporting a listing, please include the Bodim title or road name..."
                      required
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <input className="w-4 h-4 rounded text-primary focus:ring-0" id="consentBox" required type="checkbox" />
                    <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="consentBox">
                      I agree to receive a callback or WhatsApp response regarding this inquiry.
                    </label>
                  </div>
                  {formSubmitted && (
                    <div className="p-space-sm bg-emerald-subtle text-emerald-dark rounded-lg font-label-md text-label-md flex items-center gap-2" id="formSuccessMessage">
                      <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      <span>Your message has been sent to our Sri Lanka support team! We will message you on WhatsApp shortly.</span>
                    </div>
                  )}
                  <button
                    className="w-full sm:w-auto px-space-xl py-space-sm bg-primary hover:bg-amber-hover text-on-primary font-label-lg text-label-lg rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Campus Student Help Ambassadors Banner */}
          <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-space-xl">
            <div className="relative rounded-2xl overflow-hidden shadow-sm bg-surface-container-lowest">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-8 p-space-lg lg:p-space-xl z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm font-bold mb-space-sm">
                    <span className="material-symbols-outlined text-[16px]">school</span>
                    Active Campus Network
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                    Connect with your Campus Peer Ambassador
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
                    Finding a bodim as a fresher is daunting. We have trained senior student volunteers stationed physically near major faculties to help you spot safe boarding streets, understand realistic bus routes, and steer clear of overpriced annexes.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm mt-space-md">
                    <div className="p-space-sm bg-surface-container rounded-lg">
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold block">SLIIT Hub</span>
                      <span className="font-body-sm text-body-sm text-on-surface font-semibold">Malabe &amp; Kaduwela</span>
                    </div>
                    <div className="p-space-sm bg-surface-container rounded-lg">
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold block">USJ Japura</span>
                      <span className="font-body-sm text-body-sm text-on-surface font-semibold">Gangodawila / Nugegoda</span>
                    </div>
                    <div className="p-space-sm bg-surface-container rounded-lg">
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold block">Kelaniya</span>
                      <span className="font-body-sm text-body-sm text-on-surface font-semibold">Dalugama &amp; Waragoda</span>
                    </div>
                    <div className="p-space-sm bg-surface-container rounded-lg">
                      <span className="font-label-sm text-label-sm text-primary uppercase font-bold block">NSBM</span>
                      <span className="font-body-sm text-body-sm text-on-surface font-semibold">Pitipana / Homagama</span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 h-64 lg:h-full relative min-h-[220px]">
                  <img
                    className="w-full h-full object-cover"
                    alt="A cheerful group of diverse Sri Lankan university students smiling with backpacks and notebooks outside a modern university campus with bright tropical sunshine, wearing casual student clothes in neutral and amber tones"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6khmbI9XIeoQ3bi6L-hs_r9_wqAwLNBSDmxBwaCrUtVf3EXuZB3gPhTvGQWiObe8li6TcQqidCMgcVIkDfUhtTv5GyW_q-hbeP9Zl4fL_6tW4uCnWVe_f8KPMTeSXsR4pEBsHM8CSygjkstro9bCN4MfaJVoVK4rh3Ei0FbuzOt_8mJuSibppJRK8kPEd1A9Uh-xS8qBbfb8A8qrjW1EzZFq5DOiWNBzDp8FxJpsu0Eh6V8aGPNu_ZA"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-surface-container-lowest via-transparent to-transparent"></div>
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
