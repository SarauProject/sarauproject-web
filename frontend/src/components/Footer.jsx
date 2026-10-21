import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "./Logo";
import { useLang, scrollToId } from "../lib/lang";
import { EMAIL } from "../lib/i18n";

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="border-t border-white/10 bg-[#0B0A0C]" data-testid="footer">
      <div className="mx-auto max-w-[1400px] px-5 pb-28 pt-16 md:px-10 md:pb-12">
        <button onClick={() => scrollToId("book")} data-testid="footer-cta"
          className="group block" aria-label="SarauProject">
          <img src="/assets/letras-sarauproject.png" alt="SarauProject" className="h-16 w-auto transition-opacity duration-500 group-hover:opacity-80 sm:h-24" />
        </button>
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-[#B8B3AC] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3"><LogoMark className="h-7 w-7 rounded-sm" />{t.footer.tagline}</div>
          <a href={`mailto:${EMAIL}`} data-testid="footer-email" className="link-underline text-[#FAF8F5]">{EMAIL}</a>
          <p>© {new Date().getFullYear()} SarauProject. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export const StickyCTA = () => {
  const { t } = useLang();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => {
      const book = document.getElementById("book");
      const r = book?.getBoundingClientRect();
      const inBook = r ? r.top < window.innerHeight && r.bottom > 0 : false;
      setShow(window.scrollY > window.innerHeight * 0.8 && !inBook);
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="pointer-events-none fixed inset-x-0 bottom-5 z-[60] flex justify-center" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}>
        <button onClick={() => scrollToId("book")} data-testid="sticky-cta-btn"
          className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/15 bg-[#0B0A0C]/80 py-2 pl-5 pr-2 text-sm text-[#FAF8F5] shadow-2xl backdrop-blur-xl">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#C82323]" />
          {t.sticky}
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#C82323]"><ArrowUpRight size={16} /></span>
        </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
