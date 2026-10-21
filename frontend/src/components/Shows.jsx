import { motion } from "framer-motion";
import { Play, Clock, ArrowUpRight } from "lucide-react";
import { SHOWS } from "../lib/content";
import { useLang, scrollToId } from "../lib/lang";
import { Reveal, Eyebrow } from "./Reveal";

const SPANS = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-8",
];

const ShowCard = ({ show, i, onOpen }) => {
  const { lang, t } = useLang();
  return (
    <Reveal delay={i * 0.08} className={`${SPANS[i]} h-full`}>
      <motion.button
        onClick={() => onOpen(show)}
        data-testid={`show-card-${show.id}`}
        whileHover="hover"
        className="group relative block h-full min-h-[420px] w-full overflow-hidden bg-[#141216] text-left md:min-h-0"
      >
        <motion.img src={`/assets/yt-${show.yt}.jpg`} alt={show.title} loading="lazy"
          variants={{ hover: { scale: 1.06 } }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover opacity-80 grayscale-[35%] transition-[filter,opacity] duration-700 group-hover:opacity-100 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A0C] via-[#0B0A0C]/50 to-transparent" />
        <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-7 sm:top-7">
          <span className="font-mono text-xs text-[#D4AF37]">0{i + 1}</span>
          <span className="rounded-full border border-white/20 bg-[#0B0A0C]/50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#EAE5D9] backdrop-blur-md">
            {show.tag[lang]}
          </span>
        </div>
        <motion.span variants={{ hover: { scale: 1.1, rotate: 90 } }}
          className="absolute right-5 top-5 grid h-14 w-14 place-items-center rounded-full bg-[#C82323] text-white shadow-[0_0_40px_rgba(200,35,35,0.5)] sm:right-7 sm:top-7">
          <Play size={18} className="ml-0.5 fill-current" />
        </motion.span>
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
          <h3 className="font-display text-4xl font-medium tracking-tight text-[#FAF8F5] sm:text-5xl">{show.title}</h3>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.15em] text-[#B8B3AC]">
            <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#D4AF37]" />{show.duration[lang]}</span>
            <span>{show.lineup[lang].join(" · ")}</span>
          </div>
          <span className="mt-5 inline-flex items-center gap-2 text-sm text-[#FAF8F5] opacity-90">
            <span className="link-underline">{t.shows.watch}</span><ArrowUpRight size={15} />
          </span>
        </div>
      </motion.button>
    </Reveal>
  );
};

const HelpCard = () => {
  const { t } = useLang();
  return (
    <Reveal delay={0.3} className="h-full md:col-span-4">
      <div className="flex h-full min-h-[300px] flex-col justify-between border border-[#D4AF37]/30 bg-[#9E1B1B] p-7 sm:p-8" data-testid="shows-help-card">
        <p className="font-display text-3xl leading-tight tracking-tight text-[#FAF8F5]">{t.shows.helpTitle}</p>
        <div>
          <p className="mb-6 text-sm leading-relaxed text-[#FAF8F5]/90">{t.shows.helpText}</p>
          <button data-testid="shows-help-btn" onClick={() => scrollToId("book")}
            className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F5] px-5 py-3 text-sm font-semibold text-[#0B0A0C] transition-transform duration-300 hover:-translate-y-0.5">
            {t.shows.helpCta} <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </Reveal>
  );
};

export default function Shows({ onOpen }) {
  const { t } = useLang();
  return (
    <section id="shows" className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36" data-testid="shows-section">
      <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <Eyebrow>{t.shows.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-[#FAF8F5] sm:text-5xl lg:text-6xl">{t.shows.title}</h2>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:col-start-9 md:self-end">
          <p className="text-base leading-relaxed text-[#B8B3AC] md:text-lg">{t.shows.sub}</p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 gap-4 md:auto-rows-[300px] md:grid-cols-12 lg:auto-rows-[340px]">
        {SHOWS.map((s, i) => <ShowCard key={s.id} show={s} i={i} onOpen={onOpen} />)}
        <HelpCard />
      </div>
    </section>
  );
}
