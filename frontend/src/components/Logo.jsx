export const LogoMark = ({ className = "h-8 w-8" }) => (
  <img src="/assets/logo.jpg" alt="SarauProject" className={`${className} object-cover`} />
);

export const Logo = ({ onClick }) => (
  <button onClick={onClick} data-testid="nav-logo" className="group flex items-center gap-2.5" aria-label="SarauProject">
    <img src="/assets/letras-sarauproject.png" alt="SarauProject" className="h-8 w-auto transition-opacity duration-300 group-hover:opacity-80 sm:h-9" />
  </button>
);
