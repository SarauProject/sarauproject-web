import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useLang, scrollToId } from "../lib/lang";

const LINKS = [["shows", "shows"], ["about", "about"], ["how", "how"]];

const LangSwitch = ({ id }) => {
  const { lang, setLang } = useLang();
  return (
    <div className="flex rounded-full border border-white/15 p-0.5 font-mono text-xs" data-testid={`${id}-lang-switch`}>
      {["es", "en"].map((l) => (
        <button key={l} data-testid={`${id}-lang-${l}`} onClick={() => setLang(l)}
          className={`rounded-full px-3 py-1.5 uppercase transition-colors duration-300 ${lang === l ? "bg-[#FAF8F5] text-[#0B0A0C]" : "text-[#B8B3AC] hover:text-white"}`}>
          {l}
        </button>
      ))}
    </div>
  );
};

export default function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const go = (id) => { setOpen(false); scrollToId(id); };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${scrolled ? "border-b border-white/10 bg-[#0B0A0C]/80 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 md:px-10">
        <Logo onClick={() => go("top")} />
        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map(([k, id]) => (
            <button key={k} data-testid={`nav-${k}`} onClick={() => go(id)} className="link-underline text-sm text-[#B8B3AC] transition-colors hover:text-white">
              {t.nav[k]}
            </button>
          ))}
          <LangSwitch id="desktop" />
          <button data-testid="nav-book-btn" onClick={() => go("book")} className="btn-primary">{t.nav.book}</button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <LangSwitch id="mobile" />
          <button data-testid="mobile-menu-btn" onClick={() => setOpen(!open)} className="rounded-full border border-white/15 p-2.5 text-white" aria-label="menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div data-testid="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-[#0B0A0C]/95 px-5 pb-8 pt-4 backdrop-blur-xl md:hidden">
            {[...LINKS, ["book", "book"]].map(([k, id], i) => (
              <motion.button key={k} data-testid={`mobile-nav-${k}`} onClick={() => go(id)}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}
                className="block w-full border-b border-white/10 py-4 text-left font-display text-3xl text-[#FAF8F5]">
                {t.nav[k]}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
