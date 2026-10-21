export const LogoMark = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <path d="M42 14c-9-4-22 0-22 9 0 12 24 8 24 20 0 9-14 12-24 7" fill="none" stroke="#C82323" strokeWidth="5" strokeLinecap="round" />
    <circle cx="46" cy="14" r="4" fill="#D4AF37" />
  </svg>
);

export const Logo = ({ onClick }) => (
  <button onClick={onClick} data-testid="nav-logo" className="group flex items-center gap-2.5" aria-label="SarauProject">
    <LogoMark className="h-8 w-8 transition-transform duration-500 group-hover:rotate-[-12deg]" />
    <span className="font-display text-2xl leading-none tracking-tight text-[#FAF8F5]">
      Sarau<span className="italic text-[#D4AF37]">Project</span>
    </span>
  </button>
);
