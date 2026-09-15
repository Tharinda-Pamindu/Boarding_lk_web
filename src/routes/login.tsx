import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/login")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Sign In | Boarding.lk" },
      {
        name: "description",
        content:
          "Sign in to Boarding.lk to manage saved rooms, contact bodim owners directly, and schedule visits. Secure and direct campus bodim access.",
      },
      { property: "og:title", content: "Sign In | Boarding.lk" },
      {
        property: "og:description",
        content:
          "Sign in to Boarding.lk to manage saved rooms, contact bodim owners directly, and schedule visits.",
      },
    ],
  }),
});

function Page() {
  const [role, setRole] = useState<"student" | "owner">("student");
  const [showPassword, setShowPassword] = useState(false);

  const isStudent = role === "student";

  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full py-space-lg lg:py-space-xl px-4 sm:px-6 lg:px-12 flex items-center justify-center overflow-hidden">
            {/* Ambient Warm Radial Backdrop Glow */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-fixed/40 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-subtle/60 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative w-full max-w-6xl mx-auto">
              {/* Main Glass & Card Container */}
              <div className="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                {/* Left Showcase & Trust Pillar (5 cols) */}
                <div className="lg:col-span-5 bg-gradient-to-br from-surface-container-low via-surface-container to-primary-fixed/20 p-space-lg lg:p-space-xl flex flex-col justify-between relative overflow-hidden">
                  {/* Background Atmospheric Pattern */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 400 400">
                      <path d="M0,100 L400,100 M0,200 L400,200 M0,300 L400,300" strokeDasharray="6,6" strokeWidth="1.5"></path>
                      <path d="M100,0 L100,400 M200,0 L200,400 M300,0 L300,400" strokeDasharray="6,6" strokeWidth="1.5"></path>
                    </svg>
                  </div>
                  {/* Top Brand & Slogan Badge */}
                  <div className="relative z-10 space-y-space-sm">
                    <div className="inline-flex items-center gap-2 px-space-sm py-1 bg-amber-subtle text-primary rounded-full font-label-sm text-label-sm font-bold">
                      <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_police</span>
                      <span>Sri Lanka's #1 Student Rental Network</span>
                    </div>
                    <div className="space-y-1">
                      <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                        Secure &amp; Direct <br />
                        <span className="text-primary font-extrabold">Campus Bodim</span> Access
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                        "අනං මනං නෑ... බෝඩිමක් නම් Boarding.lk"
                      </p>
                    </div>
                  </div>
                  {/* Mid Visual Card Showcase */}
                  <div className="relative z-10 my-space-lg space-y-space-md">
                    {/* Floating Social Proof Stat Card */}
                    <div className="bg-surface-container-lowest/90 backdrop-blur-md p-space-md rounded-lg shadow-sm">
                      <div className="flex items-center justify-between pb-2 mb-2 bg-surface-container-low/50 px-2 py-1.5 rounded">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-emerald-dark text-[18px]">verified</span>
                          <span className="font-label-sm text-label-sm text-emerald-dark">VERIFIED DIRECT LISTINGS</span>
                        </div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-bold">2025 Live</span>
                      </div>
                      <p className="font-headline-sm text-headline-sm text-on-surface font-bold">1,400+ Verified Stays</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Surrounding SLIIT, USJ Japura, Kelaniya, Moratuwa, Colombo UCSC &amp; NSBM Pitipana.
                      </p>
                      {/* Mini Avatar Cluster + University tags */}
                      <div className="mt-3 pt-3 flex flex-wrap items-center gap-1.5">
                        <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded-full">#SLIIT Malabe</span>
                        <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded-full">#Japura Gangodawila</span>
                        <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded-full">#Kelaniya</span>
                        <span className="px-2 py-0.5 bg-surface-container text-on-surface font-label-sm text-label-sm rounded-full">#Moratuwa</span>
                      </div>
                    </div>
                    {/* Value Pillars */}
                    <div className="space-y-space-sm">
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-emerald-subtle text-emerald-dark flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">money_off</span>
                        </div>
                        <div>
                          <h4 className="font-label-lg text-label-lg text-on-surface font-bold">0% Broker Fees</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Deal straight with genuine landlords. Zero hidden broker commissions.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-amber-subtle text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">badge</span>
                        </div>
                        <div>
                          <h4 className="font-label-lg text-label-lg text-on-surface font-bold">NIC &amp; Utility Verified Owners</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Prevent scams with landlord identity check and genuine student safety record.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-secondary-container text-secondary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">directions_walk</span>
                        </div>
                        <div>
                          <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Verified Walking Distances</h4>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Curated 500m-1.5km walking proximity to campus gates and bus halts.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Customer Care Strip */}
                  <div className="relative z-10 pt-space-sm bg-surface-container-lowest/80 backdrop-blur rounded-lg p-space-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary text-[20px]">support_agent</span>
                        <div>
                          <p className="font-label-sm text-label-sm text-on-surface-variant font-bold">NEED HELP LOGGING IN?</p>
                          <p className="font-label-md text-label-md text-on-surface font-bold">+94 78 673 3237 <span className="font-normal text-on-surface-variant text-xs">(WhatsApp)</span></p>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm text-tertiary font-bold bg-emerald-subtle px-2 py-0.5 rounded text-center">8 AM - 9 PM Daily</span>
                    </div>
                  </div>
                </div>
                {/* Right Login Action Form (7 cols) */}
                <div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-center bg-surface-container-lowest">
                  <div className="max-w-md w-full mx-auto space-y-space-md">
                    {/* Dual-Role Selection Switcher */}
                    <div className="space-y-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Select Account Category</label>
                      <div className="grid grid-cols-2 p-1 bg-surface-container rounded-lg gap-1">
                        <button
                          className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded font-label-md text-label-md transition-all duration-200 ${isStudent ? "bg-surface-container-lowest text-primary shadow-sm font-bold" : "text-on-surface-variant hover:text-on-surface font-semibold"}`}
                          type="button"
                          onClick={() => setRole("student")}
                        >
                          <span className="material-symbols-outlined text-[18px]">school</span>
                          <span>Student / Renter</span>
                          <span className="text-xs font-normal opacity-70 hidden sm:inline">(ශිෂ්‍ය)</span>
                        </button>
                        <button
                          className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded font-label-md text-label-md transition-all duration-200 ${!isStudent ? "bg-surface-container-lowest text-primary shadow-sm font-bold" : "text-on-surface-variant hover:text-on-surface font-semibold"}`}
                          type="button"
                          onClick={() => setRole("owner")}
                        >
                          <span className="material-symbols-outlined text-[18px]">real_estate_agent</span>
                          <span>Landlord</span>
                          <span className="text-xs font-normal opacity-70 hidden sm:inline">(හිමිකරු)</span>
                        </button>
                      </div>
                    </div>
                    {/* Header Description */}
                    <div className="pt-1">
                      <h1 className="font-headline-md text-headline-md text-on-surface font-bold">
                        Welcome back <span className="text-primary">{isStudent ? "Undergraduates & Renters" : "Property Owners & Hosts"}</span>
                      </h1>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                        Manage your saved rooms, contact bodim owners directly, and schedule visits.
                      </p>
                    </div>
                    {/* Instant 1-Click Fast Auth */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
                      {/* WhatsApp OTP Sign-in (Sri Lanka Essential) */}
                      <button className="flex items-center justify-center gap-2 py-2.5 px-space-md rounded-lg bg-emerald-subtle hover:bg-emerald-subtle/80 text-emerald-dark font-label-md text-label-md font-bold transition-colors shadow-sm" type="button">
                        <svg className="w-4 h-4 fill-emerald-dark shrink-0" viewBox="0 0 24 24">
                          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.84-3.05-.2-.31c-.83-1.31-1.27-2.84-1.27-4.43 0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.79 2.4 1.54 1.55 2.4 3.6 2.4 5.78 0 4.51-3.67 8.19-8.19 8.19zm4.49-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"></path>
                        </svg>
                        <span>WhatsApp OTP</span>
                      </button>
                      {/* Google Sign-in */}
                      <button className="flex items-center justify-center gap-2 py-2.5 px-space-md rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold transition-colors shadow-sm" type="button">
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                          <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" fill="#4285F4"></path>
                          <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.26 21.36 7.33 24 12 24z" fill="#34A853"></path>
                          <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z" fill="#FBBC05"></path>
                          <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335"></path>
                        </svg>
                        <span>Google Account</span>
                      </button>
                    </div>
                    {/* Clean Separator */}
                    <div className="relative flex items-center justify-center">
                      <div className="w-full bg-surface-variant h-px"></div>
                      <span className="absolute bg-surface-container-lowest px-3 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        or use mobile / email
                      </span>
                    </div>
                    {/* Standard Form Inputs */}
                    <form className="space-y-space-md" onSubmit={(e) => e.preventDefault()}>
                      {/* Phone / Email Field */}
                      <div className="space-y-1">
                        <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="loginIdentifier">
                          Mobile Number or Campus Email
                        </label>
                        <div className="relative flex items-center bg-surface-container-low rounded-lg focus-within:bg-surface-container-lowest focus-within:shadow-sm transition-all">
                          {/* Sri Lanka Prefix Badge */}
                          <div className="flex items-center gap-1 pl-3 pr-2 py-2.5 text-on-surface font-label-md text-label-md shrink-0 bg-surface-container rounded-l-lg">
                            <span className="text-base leading-none">🇱🇰</span>
                            <span className="font-bold">+94</span>
                          </div>
                          <input
                            className="w-full bg-transparent px-3 py-2.5 text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/60 focus:outline-none"
                            id="loginIdentifier"
                            placeholder={isStudent ? "07X XXX XXXX or student@sliit.lk" : "07X XXX XXXX or owner@boarding.lk"}
                            required
                            type="text"
                          />
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-1">
                          <span className="material-symbols-outlined text-[14px]">cell_tower</span>
                          <span>Dialog, Mobitel, Airtel, Hutch OTP or Uni Mail</span>
                        </p>
                      </div>
                      {/* Password Field */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label className="block font-label-md text-label-md text-on-surface font-semibold" htmlFor="loginPassword">
                            Account Password (මුරපදය)
                          </label>
                          <Link className="font-label-sm text-label-sm text-primary hover:text-amber-hover font-semibold transition-colors" to="/login">
                            Forgot password?
                          </Link>
                        </div>
                        <div className="relative flex items-center bg-surface-container-low rounded-lg focus-within:bg-surface-container-lowest focus-within:shadow-sm transition-all">
                          <span className="material-symbols-outlined text-on-surface-variant pl-3 text-[18px]">lock</span>
                          <input
                            className="w-full bg-transparent px-3 py-2.5 text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/60 focus:outline-none"
                            id="loginPassword"
                            placeholder="••••••••"
                            required
                            type={showPassword ? "text" : "password"}
                          />
                          <button
                            aria-label="Toggle password visibility"
                            className="pr-3 text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors cursor-pointer"
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                          >
                            <span className="material-symbols-outlined text-[20px]">{showPassword ? "visibility_off" : "visibility"}</span>
                          </button>
                        </div>
                      </div>
                      {/* Remember Device & Security Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                          <input defaultChecked className="w-4 h-4 rounded bg-surface-container-low accent-primary cursor-pointer" type="checkbox" />
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">Keep me signed in</span>
                        </label>
                        <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
                          <span>SSL 256-Bit Encrypted</span>
                        </div>
                      </div>
                      {/* Submit CTA */}
                      <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-amber-hover text-on-primary font-label-lg text-label-lg py-3 px-space-md rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] font-bold" type="submit">
                        <span>{isStudent ? "Log In as Student / Renter" : "Log In to Landlord Dashboard"}</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </button>
                    </form>
                    {/* Sign Up Switch Prompt */}
                    <div className="pt-2 text-center bg-surface-container-low/70 rounded-lg p-space-sm space-y-1">
                      <p className="font-body-md text-body-md text-on-surface">
                        New to Boarding.lk?{" "}
                        <Link className="font-label-lg text-label-lg text-primary hover:text-amber-hover font-bold inline-flex items-center ml-1 transition-colors" to="/register">
                          <span>Create an Account</span>
                          <span className="material-symbols-outlined text-[16px] ml-0.5">open_in_new</span>
                        </Link>
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        100% Free for students looking for bodim &amp; annexes in under 1 minute.
                      </p>
                    </div>
                    {/* Quick Sinhala Landlord Tag */}
                    <div className="text-center pt-1">
                      <Link className="inline-flex items-center gap-1.5 font-label-md text-label-md text-tertiary hover:underline font-semibold" to="/post-ad">
                        <span className="material-symbols-outlined text-[16px]">add_business</span>
                        <span>බෝඩිම් හිමිකරුවෙක්ද? ඔබේ දැන්වීම නොමිලේ පළ කරන්න →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Micro Bar for Sri Lankan Campus Support */}
              <div className="mt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm px-2 text-on-surface-variant font-body-sm text-body-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                  <span>Gateway Active: Sri Lankan Academic Year 2024/2025 Admissions</span>
                </div>
                <div className="flex items-center gap-space-md font-label-sm text-label-sm">
                  <span className="hover:text-primary cursor-pointer transition-colors">Student Safety Code</span>
                  <span>•</span>
                  <span className="hover:text-primary cursor-pointer transition-colors">Deposit Protection Guide</span>
                  <span>•</span>
                  <span className="hover:text-primary cursor-pointer transition-colors">Landlord Verifications</span>
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
