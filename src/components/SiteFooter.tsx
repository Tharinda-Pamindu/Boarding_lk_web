import { Link } from "@tanstack/react-router";

const DISTRICTS = [
  "Colombo Bodim",
  "Gampaha & Kelaniya",
  "Kandy Peradeniya",
  "Galle & Ruhuna",
  "Kurunegala Hubs",
];

const CAMPUS = [
  "SLIIT Malabe Hub",
  "USJ Japura Gangodawila",
  "Kelaniya University Area",
  "NSBM Green University Pitipana",
  "UCSC / Colombo Campus",
];

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter mb-space-xl">
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-md text-headline-md text-primary font-bold">
                boarding.lk
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant pr-space-lg leading-relaxed">
              Sri Lanka's trusted student housing &amp; rental ecosystem. Connecting undergraduates,
              interns, and professionals with secure boarding rooms, annexes, and houses near primary
              university faculties and economic hubs.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <span className="inline-flex items-center gap-1 px-space-sm py-space-xs bg-emerald-subtle text-emerald-dark rounded-full font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-[14px]">verified</span>Verified
                Boardings
              </span>
              <span className="inline-flex items-center gap-1 px-space-sm py-space-xs bg-amber-subtle text-primary font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-[14px]">lock</span>Landlord Identity
                Checked
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Top Districts
            </h3>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              {DISTRICTS.map((d) => (
                <li key={d}>
                  <Link className="hover:text-primary transition-colors" to="/districts">
                    {d}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Campus Zones
            </h3>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              {CAMPUS.map((c) => (
                <li key={c}>
                  <Link className="hover:text-primary transition-colors" to="/university-hubs">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Guides &amp; Safety
            </h3>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" to="/guides">
                  Student Budgeting Guide
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/terms">
                  Landlord Terms &amp; Rules
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/guides">
                  Scam Prevention &amp; Safety
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/refund-policy">
                  Refund &amp; Key Deposit Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/guides">
                  Bodim Inspection Checklist
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md bg-surface-container-low rounded-xl px-space-lg py-space-md">
          <span className="font-label-md text-label-md text-on-surface-variant text-center md:text-left">
            © 2025 boarding.lk. Built for Sri Lankan University &amp; Working Youth.
          </span>
          <div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
            <Link className="hover:text-on-surface transition-colors" to="/privacy">
              Privacy Policy
            </Link>
            <span className="text-outline-variant">•</span>
            <Link className="hover:text-on-surface transition-colors" to="/terms">
              Terms of Service
            </Link>
            <span className="text-outline-variant">•</span>
            <Link className="hover:text-on-surface transition-colors" to="/support">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
