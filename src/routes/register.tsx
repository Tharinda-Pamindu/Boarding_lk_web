import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/register")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Create Account | boarding.lk" },
      {
        name: "description",
        content:
          "Register on boarding.lk as a student/tenant or property owner and find or list bodims across Sri Lanka for free.",
      },
      { property: "og:title", content: "Create Account | boarding.lk" },
      {
        property: "og:description",
        content:
          "Join boarding.lk instantly with your phone number to search verified student boarding houses or list your property for free.",
      },
    ],
  }),
});

type Role = "student" | "owner";

function RoleToggle({ role, setRole }: { role: Role; setRole: (r: Role) => void }) {
  return (
    <div className="mb-space-lg">
      <label className="block font-label-md text-label-md text-on-surface-variant mb-2">
        I want to join as / මම ලියාපදිංචි වන්නේ:
      </label>
      <div className="grid grid-cols-2 p-1 bg-surface-container rounded-xl gap-1" id="roleToggleGroup">
        <button
          className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-4 rounded-lg font-label-lg text-label-lg transition-all text-center ${role === "student" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
          id="roleStudentBtn"
          onClick={() => setRole("student")}
          type="button"
        >
          <span
            className={`material-symbols-outlined text-[20px] ${role === "student" ? "text-primary" : ""}`}
            id="roleStudentIcon"
            style={{ fontVariationSettings: role === "student" ? "'FILL' 1" : "'FILL' 0" }}
          >
            school
          </span>
          <span className="flex flex-col text-left leading-tight">
            <span className="font-bold">Student / Tenant</span>
            <span className="font-label-sm text-label-sm text-secondary font-normal">ශිෂ්‍ය / කුලීකරු</span>
          </span>
        </button>
        <button
          className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-3 px-4 rounded-lg font-label-lg text-label-lg transition-all text-center ${role === "owner" ? "bg-surface-container-lowest text-on-surface shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
          id="roleOwnerBtn"
          onClick={() => setRole("owner")}
          type="button"
        >
          <span
            className={`material-symbols-outlined text-[20px] ${role === "owner" ? "text-primary" : ""}`}
            id="roleOwnerIcon"
            style={{ fontVariationSettings: role === "owner" ? "'FILL' 1" : "'FILL' 0" }}
          >
            real_estate_agent
          </span>
          <span className="flex flex-col text-left leading-tight">
            <span className="font-bold">Property Owner</span>
            <span className="font-label-sm text-label-sm text-secondary font-normal">දේපළ හිමිකරු</span>
          </span>
        </button>
      </div>
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="lg:col-span-5 bg-gradient-to-b from-surface-container-low via-surface-container-lowest to-surface-container-low p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-subtle/50 rounded-full blur-2xl pointer-events-none"></div>
      <div>
        <div className="flex items-center gap-space-sm mb-space-md">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-subtle text-emerald-dark font-label-sm text-label-sm font-bold">
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            100% Free for Students
          </span>
          <span className="font-label-sm text-label-sm text-primary font-bold tracking-wider uppercase bg-amber-subtle px-2.5 py-1 rounded-full">
            ලංකාවේ අංක 1
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs tracking-tight">
          Find your ideal bodim or list for free.
        </h1>
        <p className="font-headline-sm text-headline-sm text-primary font-bold mb-space-md">
          අනං මනං නෑ... බෝඩිමක් නම් Boarding.lk
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
          Skip traditional middlemen and informal notice boards. Directly connect with registered university house owners, inspect verified student annexes, and secure your safe stay in minutes.
        </p>
        <div className="space-y-space-md mb-space-lg">
          <div className="flex items-start gap-space-sm p-3 rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-lg bg-emerald-subtle text-emerald-dark flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface">Direct WhatsApp &amp; Phone Contact</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Deal straight with genuine property owners &amp; caretakers without waiting or intermediaries.</p>
            </div>
          </div>
          <div className="flex items-start gap-space-sm p-3 rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-lg bg-amber-subtle text-primary flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]">money_off</span>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface">0% Broker Commission (තැරැව්කාර ගාස්තු නැත)</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Zero fee for undergraduate room searches. No hidden broker cut or surprise reservation markups.</p>
            </div>
          </div>
          <div className="flex items-start gap-space-sm p-3 rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-lg bg-secondary-container text-on-secondary-fixed flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]">near_me</span>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface">Walking-Distance Campus Hubs</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Filtered by gate proximity for SLIIT Malabe, USJ Japura, Kelaniya, NSBM Pitipana &amp; UCSC.</p>
            </div>
          </div>
          <div className="flex items-start gap-space-sm p-3 rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-lg bg-emerald-subtle text-emerald-dark flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px]">gite</span>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface">1,450+ Inspected Student Stays</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Photo-verified rooms with clear Wi-Fi, electricity, tap-water, and study table specs.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-space-md pt-space-md bg-surface-container rounded-xl p-space-md">
        <div className="flex items-center gap-space-md">
          <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-surface-container-lowest shadow-sm">
            <img
              alt="Bodim Room preview"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AEtjO1VGABZwgHH4e5Cxe01JhCFrIKYOIt1QNdsqRliZEYpXAPeqKFezDBbAlfDxwjC52m8DH_Z6TiZ8IMxPHXZOADfgzlhRhQvEy2jo62VVnAd9MoUN3zSr4Z3qnEjxB51_wbSvEdjaKpg6DYbw6NATjLFl_eDt9-LfESuBhsBqPnH0jpS_GkBRZ8_f3Yl3vykmQeiy7KQSvhfliJkWi5tE-xSFYfEWV6G0BIaVZ4DYmhsTqvUjvncy76x-dtTB"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 text-emerald-dark font-label-sm text-label-sm font-bold mb-1">
              <span className="material-symbols-outlined text-[14px]">shield_person</span>
              Campus Safety Charter
            </div>
            <p className="font-body-sm text-body-sm text-on-surface line-clamp-2">
              "Found my single room in Wijerama just 400m from Japura faculty. WhatsApped aunty directly!"
            </p>
            <div className="flex items-center gap-2 mt-2">
              <img
                alt="Charter emblem"
                className="w-5 h-6 object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Wd_bYHWwnyqM1fXxLGrJ0q1OhKhHpToY6iNNS199LNXx0ydw-P_sItsn3KyREYAGcpHWOFUBEtB3GePOvNw2kUDAtLSqkDSkGIvyIaeuVZMm1m4idQ_izPbz1OnplICK_R7_UWSeiP9m47zO2W5x5luTg1G8Qg7V06VbfRy75wWtWuQMVXWuLzUP0b3SlliE6zGDB1NUL5Vau3F1B1KMukNauJoJYwVFYj30KzRnXmHAyYU0BnhGajWSD2"
              />
              <span className="font-label-sm text-label-sm text-secondary font-bold">Kavindu D. • BSc Computing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StrengthBars({ strength }: { strength: number }) {
  const colorFor = () => {
    if (strength === 1) return "bg-danger-red";
    if (strength === 2) return "bg-amber-hover";
    if (strength === 3) return "bg-tertiary";
    if (strength >= 4) return "bg-emerald-dark";
    return "bg-surface-variant";
  };
  const label = () => {
    if (strength === 1) return { text: "Weak (දුර්වලයි)", cls: "text-danger-red" };
    if (strength === 2) return { text: "Fair (සාමාන්‍යයි)", cls: "text-amber-hover" };
    if (strength === 3) return { text: "Good (හොඳයි)", cls: "text-tertiary" };
    if (strength >= 4) return { text: "Strong (ඉතා ආරක්ෂිතයි)", cls: "text-emerald-dark" };
    return { text: "Minimum 8 characters", cls: "text-secondary" };
  };
  const l = label();
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between font-label-sm text-label-sm">
        <span className="text-on-surface-variant">Security Level:</span>
        <span className={`font-bold ${l.cls}`} id="strengthText">
          {l.text}
        </span>
      </div>
      <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-full w-1/4 rounded-full transition-all duration-300 ${i <= strength ? colorFor() : "bg-surface-variant"}`}
            id={`bar${i}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

function computeStrength(val: string) {
  if (!val) return 0;
  let strength = 0;
  if (val.length >= 6) strength++;
  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val) && /[0-9]/.test(val)) strength++;
  if (/[^A-Za-z0-9]/.test(val)) strength++;
  return strength;
}

function RegisterForm({ role }: { role: Role }) {
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const strength = computeStrength(password);

  return (
    <form className="space-y-space-md" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="fullName">
          Full Name <span className="text-secondary font-normal">(සම්පූර්ණ නම)</span> <span className="text-danger-red">*</span>
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">person</span>
          <input
            className="w-full pl-11 pr-4 py-3 bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_2px_#d97706] transition-all"
            id="fullName"
            placeholder="e.g. Kasun Chamara Jayasinghe"
            required
            type="text"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="font-label-md text-label-md text-on-surface" htmlFor="mobileNo">
            Mobile Number <span className="text-secondary font-normal">(ජංගම දුරකථන අංකය)</span> <span className="text-danger-red">*</span>
          </label>
          <span className="font-label-sm text-label-sm text-emerald-dark flex items-center gap-1 font-semibold">
            <span className="material-symbols-outlined text-[14px]">sms</span> Instant SMS OTP
          </span>
        </div>
        <div className="flex rounded-lg overflow-hidden shadow-sm bg-surface-container-low focus-within:shadow-[0_0_0_2px_#d97706] focus-within:bg-surface-container-lowest transition-all">
          <div className="flex items-center gap-1.5 px-3.5 py-3 bg-surface-container font-label-md text-label-md text-on-surface select-none">
            <span className="inline-block w-4 h-3 bg-primary rounded-xs"></span>
            <span>+94</span>
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">arrow_drop_down</span>
          </div>
          <input
            className="flex-1 px-4 py-3 bg-transparent text-on-surface placeholder:text-on-surface-variant/50 font-body-md text-body-md focus:outline-none"
            id="mobileNo"
            maxLength={10}
            placeholder="77 123 4567"
            required
            type="tel"
          />
        </div>
        <p className="font-body-sm text-body-sm text-secondary mt-1 flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">info</span>
          Dialog, Mobitel, Airtel or Hutch numbers supported for quick key exchanges.
        </p>
      </div>

      <div>
        <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="emailAddr">
          Email Address{" "}
          <span className="text-secondary font-normal" id="emailNote">
            {role === "student"
              ? "(විද්‍යුත් තැපෑල - optional for student account)"
              : "(විද්‍යුත් තැපෑල - required for monthly statements)"}
          </span>
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">mail</span>
          <input
            className="w-full pl-11 pr-4 py-3 bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_2px_#d97706] transition-all"
            id="emailAddr"
            placeholder="name@sliit.lk or personal email"
            type="email"
          />
        </div>
      </div>

      <div id="affiliationSection">
        <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="campusSelect">
          <span id="affiliationLabel">
            {role === "student" ? "Primary University / Institute" : "Primary Property Location District"}
          </span>{" "}
          <span className="text-secondary font-normal" id="affiliationSinhala">
            {role === "student" ? "(විශ්වවිද්‍යාලය හෝ නගරය)" : "(දේපළ පිහිටි ප්‍රධාන දිස්ත්‍රික්කය)"}
          </span>
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" id="affiliationIcon">
            {role === "student" ? "school" : "location_on"}
          </span>
          <select
            className="w-full pl-11 pr-10 py-3 bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_2px_#d97706] appearance-none cursor-pointer transition-all"
            id="campusSelect"
            defaultValue="sliit"
          >
            <option value="sliit">SLIIT - Malabe Campus Zone</option>
            <option value="usj">University of Sri Jayewardenepura (USJ / Japura)</option>
            <option value="kelaniya">University of Kelaniya (Dalugama / Kelaniya)</option>
            <option value="nsbm">NSBM Green University - Pitipana, Homagama</option>
            <option value="ucsc">University of Colombo / UCSC / Reid Avenue</option>
            <option value="peradeniya">University of Peradeniya (Kandy Area)</option>
            <option value="moratuwa">University of Moratuwa (Katubedda)</option>
            <option value="kdu">General Sir John Kotelawala Defence University (KDU)</option>
            <option value="saitm">CINEC / Horizon Campus (Malabe Sector)</option>
            <option value="working">Working Professional (Colombo &amp; Suburbs)</option>
            <option value="other">Other District / General Rental</option>
          </select>
          <span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">unfold_more</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="password">
            Password <span className="text-secondary font-normal">(මුරපදය)</span> <span className="text-danger-red">*</span>
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">lock</span>
            <input
              className="w-full pl-11 pr-10 py-3 bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_2px_#d97706] transition-all"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 chars"
              required
              type={showPass ? "text" : "password"}
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
              onClick={() => setShowPass((s) => !s)}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">{showPass ? "visibility_off" : "visibility"}</span>
            </button>
          </div>
        </div>
        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="confirmPassword">
            Confirm Password <span className="text-secondary font-normal">(තහවුරු කරන්න)</span> <span className="text-danger-red">*</span>
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">lock_reset</span>
            <input
              className="w-full pl-11 pr-10 py-3 bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 rounded-lg font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:shadow-[0_0_0_2px_#d97706] transition-all"
              id="confirmPassword"
              placeholder="Repeat password"
              required
              type={showConfirm ? "text" : "password"}
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
              onClick={() => setShowConfirm((s) => !s)}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">{showConfirm ? "visibility_off" : "visibility"}</span>
            </button>
          </div>
        </div>
      </div>

      <StrengthBars strength={strength} />

      <div className="pt-1">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input className="mt-1 w-5 h-5 rounded text-primary accent-primary focus:ring-0 cursor-pointer" id="agreeTerms" required type="checkbox" />
          <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            I agree to Boarding.lk{" "}
            <Link className="text-primary font-semibold hover:underline" to="/terms">
              Terms of Service
            </Link>
            ,{" "}
            <a className="text-primary font-semibold hover:underline" href="#">
              Student Safety Guidelines
            </a>
            , and{" "}
            <Link className="text-primary font-semibold hover:underline" to="/refund-policy">
              Refund Policy
            </Link>
            .
          </span>
        </label>
      </div>

      <div className="pt-2">
        <button
          className="w-full py-3.5 px-6 rounded-lg bg-primary hover:bg-amber-hover text-on-primary font-label-lg text-label-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 font-bold cursor-pointer"
          id="submitBtn"
          type="submit"
        >
          <span className="material-symbols-outlined text-[20px]">{role === "student" ? "how_to_reg" : "storefront"}</span>
          <span>{role === "student" ? "Create Student Account (ගිණුම සාදන්න)" : "Register as Landlord (හිමිකරු ලෙස එක්වන්න)"}</span>
        </button>
      </div>

      <div className="relative flex items-center justify-center my-4">
        <div className="w-full h-[1px] bg-surface-container-high"></div>
        <span className="absolute bg-surface-container-lowest px-4 font-label-sm text-label-sm text-secondary uppercase tracking-wider">or sign up with</span>
      </div>

      <button
        className="w-full py-3 px-4 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-all flex items-center justify-center gap-3 cursor-pointer shadow-sm"
        type="button"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.3 8.9 5 12 5z" fill="#EA4335"></path>
          <path d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z" fill="#4285F4"></path>
          <path d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.4 0-.8.1-1.6.4-2.4L1.6 7c-.9 1.8-1.4 3.8-1.4 5.7 0 2 .5 3.9 1.4 5.7l3.7-3.7z" fill="#FBBC05"></path>
          <path d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.3-6.7-5.3L1.6 16.7C3.5 20.4 7.4 23 12 23z" fill="#34A853"></path>
        </svg>
        <span>Continue with Google / ගූගල් හරහා ලියාපදිංචි වන්න</span>
      </button>

      <div className="text-center pt-space-sm">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Already have an account?
          <Link className="text-primary font-bold hover:underline ml-1 inline-flex items-center gap-0.5" to="/login">
            <span>Log In (දැනටමත් ගිණුමක් තිබේද? ඇතුල් වන්න)</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </p>
      </div>
    </form>
  );
}

function RightColumn({ role, setRole }: { role: Role; setRole: (r: Role) => void }) {
  return (
    <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-center">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs mb-space-lg">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <img
              alt="Boarding.lk icon badge"
              className="h-6 w-6 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UChJKHMnMX3N4DSX1e7e3Io0yIlNmmlYNsLgyeG6DLma_B5ryzpYM5qF__kldSwUwWo5F_7CB-87rO6XROaAzUuFqno9vmxvZkzANyo8d9XZoewSxww3xRpFOdBj6oyOQRT4ODHkH7IBHecSukFQ-SKXOc2wwuJzPWuiSkYOFm6ibYP1zzluMQk2TufknGaSAy5KQA4i2zyBSdVfFoeyWRyB4aW0XMkQNOQuzrgUol15ya9aJinyVC-VU"
            />
            <span className="font-label-sm text-label-sm tracking-wide text-primary font-bold uppercase">Sri Lanka Rental Platform</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Create an Account</h2>
          <span className="font-headline-sm text-headline-sm text-on-surface-variant font-semibold">නව ගිණුමක් සාදන්න</span>
        </div>
        <div className="text-right">
          <span className="font-body-sm text-body-sm text-secondary block">Step 1 of 2</span>
          <span className="font-label-md text-label-md text-emerald-dark font-semibold">Instant Phone Sign In</span>
        </div>
      </div>

      <RoleToggle role={role} setRole={setRole} />
      <RegisterForm role={role} />
    </div>
  );
}

function Page() {
  const [role, setRole] = useState<Role>("student");

  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-fixed/40 blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] rounded-full bg-secondary-container/50 blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-tertiary-fixed/30 blur-2xl pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-4 flex items-center justify-between">
              <div className="flex items-center gap-space-sm text-on-surface-variant">
                <Link className="flex items-center gap-1 font-label-md text-label-md hover:text-primary transition-colors" to="/search">
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  <span>Back to Bodim Search</span>
                </Link>
                <span className="text-outline-variant">•</span>
                <span className="font-body-sm text-body-sm text-secondary">Campus Student Portal &amp; Landlord Hub</span>
              </div>
              <div className="hidden sm:flex items-center gap-space-xs font-label-sm text-label-sm bg-surface-container-low px-space-md py-1 rounded-full text-secondary">
                <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                <span>Colombo • Malabe • Kelaniya • Kandy verified network</span>
              </div>
            </div>

            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-space-md mb-space-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden">
                <LeftColumn />
                <RightColumn role={role} setRole={setRole} />
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-space-xl">
              <div className="bg-surface-container-low rounded-xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="w-12 h-12 rounded-xl bg-amber-subtle text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[28px]">domain_verification</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">Registered Landlords &amp; Campus Bodims</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Trusted by undergrads across University of Sri Jayewardenepura, SLIIT, Kelaniya, NSBM, and Colombo.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <div className="px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">electric_bolt</span>
                    <span className="font-label-sm text-label-sm font-semibold text-on-surface">Fast Electricity &amp; Water Disclosures</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">verified_user</span>
                    <span className="font-label-sm text-label-sm font-semibold text-on-surface">No Key Money Scams Guarantee</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
