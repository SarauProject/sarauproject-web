import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Clock, Users } from "lucide-react";
import { useLang } from "../lib/lang";

export default function VideoModal({ show, onClose, onBook }) {
  const { lang, t } = useLang();
  useEffect(() => {
    if (!show) return undefined;
    const k = (e) => { if (e.key === "Escape") onClose(); };
    window.__lenis?.stop();
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("keydown", k); window.__lenis?.start(); };
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div key="m" data-testid="video-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] overflow-y-auto bg-[#0B0A0C]/90 backdrop-blur-xl" onClick={onClose} data-lenis-prevent>
          <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto my-6 w-[calc(100%-2rem)] max-w-6xl border border-white/10 bg-[#141216] sm:my-12"
            onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} data-testid="video-modal-close" aria-label="close"
              className="absolute -top-3 right-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#FAF8F5] text-[#0B0A0C] transition-transform duration-300 hover:rotate-90 sm:-right-4 sm:-top-4">
              <X size={18} />
            </button>
            <div className="aspect-video w-full bg-black">
              <iframe title={show.title} data-testid="video-modal-iframe" className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${show.yt}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <h3 className="font-display text-4xl tracking-tight text-[#FAF8F5] sm:text-5xl">{show.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-[#B8B3AC] sm:text-base">{show.desc[lang]}</p>
              </div>
              <div className="flex flex-col gap-6 md:col-span-4 md:col-start-9">
                <div className="space-y-4 border-l border-[#D4AF37]/40 pl-5 text-sm text-[#EAE5D9]">
                  <p className="flex items-center gap-2"><Clock size={15} className="text-[#D4AF37]" /><span className="font-mono text-xs uppercase tracking-[0.18em] text-[#B8B3AC]">{t.shows.duration}</span> {show.duration[lang]}</p>
                  <div>
                    <p className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#B8B3AC]"><Users size={15} className="text-[#D4AF37]" />{t.shows.lineup}</p>
                    <div className="flex flex-wrap gap-2">{show.lineup[lang].map((l) => <span key={l} className="rounded-full border border-white/15 px-3 py-1 text-xs">{l}</span>)}</div>
                  </div>
                </div>
                <button data-testid="video-modal-book-btn" onClick={() => onBook(show)} className="btn-primary justify-center">{t.shows.book}</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
