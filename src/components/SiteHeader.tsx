import { Link } from "@tanstack/react-router";

const LOGO =
  "https://lh3.googleusercontent.com/aida/AEtjO1UChJKHMnMX3N4DSX1e7e3Io0yIlNmmlYNsLgyeG6DLma_B5ryzpYM5qF__kldSwUwWo5F_7CB-87rO6XROaAzUuFqno9vmxvZkzANyo8d9XZoewSxww3xRpFOdBj6oyOQRT4ODHkH7IBHecSukFQ-SKXOc2wwuJzPWuiSkYOFm6ibYP1zzluMQk2TufknGaSAy5KQA4i2zyBSdVfFoeyWRyB4aW0XMkQNOQuzrgUol15ya9aJinyVC-VU";

const NAV = [
  { label: "Find Boarding", to: "/search" },
  { label: "University Hubs", to: "/university-hubs" },
  { label: "Districts", to: "/districts" },
  { label: "Saved / Wishlist", to: "/saved" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md shrink-0">
          <Link className="flex items-center gap-space-sm" to="/">
            <img alt="boarding.lk logo" className="h-8 w-auto object-contain" src={LOGO} />
            <span className="font-headline-md text-headline-md text-primary tracking-tight font-bold">
              boarding.lk
            </span>
          </Link>
          <Link
            to="/search"
            className="hidden xl:flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">search</span>
            <span className="font-label-md text-label-md">Search campus, town or road...</span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-space-md">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors rounded-lg"
              activeProps={{
                className:
                  "px-space-sm py-space-xs transition-colors bg-surface-container text-on-surface font-bold rounded-lg",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-space-sm shrink-0">
          <div className="hidden sm:flex items-center bg-surface-container-low px-space-xs py-space-xs rounded-lg">
            <button
              className="px-space-xs py-space-xs font-label-sm text-label-sm text-on-surface rounded bg-surface-container-lowest shadow-sm"
              type="button"
            >
              EN
            </button>
            <button
              className="px-space-xs py-space-xs font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface rounded transition-colors"
              type="button"
            >
              සිංහල
            </button>
          </div>
          <Link
            to="/post-ad"
            className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary font-label-lg text-label-lg px-space-md py-space-sm rounded-lg hover:bg-amber-hover transition-colors shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] text-center"
          >
            <span>Post an Ad (Free)</span>
            <span className="hidden xl:inline ml-1 text-xs opacity-90">| දැන්වීමක්</span>
          </Link>
          <Link
            to="/login"
            className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface px-space-xs py-space-xs hidden sm:inline-block"
          >
            Sign In
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
