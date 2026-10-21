import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";
import { MaskLine } from "./Reveal";
import { useLang, scrollToId } from "../lib/lang";

export default function Hero() {
  const { t, lang } = useLang();
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotY = useTransform(sx, [0, 1], [-7, 7]);
  const rotX = useTransform(sy, [0, 1], [6, -6]);
  const lx = useTransform(sx, (v) => `${v * 100}%`);
  const ly = useTransform(sy, (v) => `${v * 100}%`);
  const spot = useMotionTemplate`radial-gradient(520px circle at ${lx} ${ly}, rgba(212,175,55,0.16), transparent 65%)`;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <section id="top" ref={ref} onMouseMove={onMove} data-testid="hero-section"
      className="relative min-h-[100svh] overflow-hidden pt-[76px] sm:pt-[88px]">
      <motion.div className="pointer-events-none absolute inset-0 z-[1]" style={{ background: spot }} />
      <div aria-hidden className="pointer-events-none absolute -left-[4vw] bottom-[6vh] z-0 select-none font-display text-[34vw] italic leading-none text-stroke opacity-40">
        Sarau
      </div>

      <div className="relative z-[2] mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 pb-20 pt-10 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pt-16">
        <motion.div style={{ y: textY }} className="lg:col-span-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}
            className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            <span className="mr-3 inline-block h-2 w-2 animate-pulse rounded-full bg-[#C82323] align-middle" />
            {t.hero.eyebrow}
          </motion.p>
          <h1 key={lang} data-testid="hero-title" className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-[#FAF8F5] sm:text-7xl lg:text-[6.5rem]">
            <MaskLine delay={0.3}>{t.hero.lines[0]}</MaskLine>
            <MaskLine delay={0.45} className="italic text-[#D4AF37]">{t.hero.lines[1]}</MaskLine>
            <MaskLine delay={0.6}>{t.hero.lines[2]}</MaskLine>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.9 }}
            className="mt-8 max-w-md text-base leading-relaxed text-[#B8B3AC] sm:text-lg">
            {t.hero.sub}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.9 }}
            className="mt-10 flex flex-wrap gap-4">
            <button data-testid="hero-quote-btn" onClick={() => scrollToId("book")} className="btn-primary group">
              {t.hero.cta2} <ArrowDownRight size={16} className="transition-transform duration-300 group-hover:rotate-[-45deg]" />
            </button>
            <button data-testid="hero-shows-btn" onClick={() => scrollToId("shows")} className="btn-ghost group">
              <Play size={14} className="fill-current" /> {t.hero.cta1}
            </button>
          </motion.div>
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-[#B8B3AC]">
            {t.hero.chips.map((c) => <li key={c} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[#D4AF37]" />{c}</li>)}
          </motion.ul>
        </motion.div>

        <div className="relative lg:col-span-6" style={{ perspective: 1200 }}>
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2px] sm:aspect-[5/4] lg:aspect-[4/5]"
            data-testid="hero-image">
            <motion.img src="/assets/portada.jpg" alt="SarauProject — flamenco en directo" style={{ y: imgY, scale: 1.12 }}
              className="h-full w-full object-cover object-[74%_45%]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,transparent_30%,rgba(11,10,12,0.85)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-7">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF8F5]">Live · Baile · Cante · Toque</span>
              <span className="font-display text-4xl italic text-[#D4AF37]">25+</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX: rotX, rotateY: rotY, z: 80 }}
            className="absolute -bottom-8 left-3 w-40 border border-white/15 bg-[#141216] p-1.5 shadow-2xl sm:-left-10 sm:w-56" data-testid="hero-floating-card">
            <button onClick={() => scrollToId("shows")} className="group block w-full text-left">
              <div className="relative aspect-video overflow-hidden">
                <img src="/assets/yt-oZ1yeRvoo2s.jpg" alt="Taranna" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute inset-0 grid place-items-center"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#C82323]"><Play size={13} className="ml-0.5 fill-white text-white" /></span></span>
              </div>
              <p className="px-1.5 pb-1 pt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#EAE5D9]">Tarannà · Live</p>
            </button>
          </motion.div>
          <div className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-[#D4AF37]/60" />
          <div className="absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-[#D4AF37]/60" />
        </div>
      </div>

      <button onClick={() => scrollToId("shows")} data-testid="hero-scroll-indicator"
        className="absolute bottom-6 left-1/2 z-[2] hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-[#B8B3AC] md:flex">
        {t.hero.scroll}
        <span className="relative h-10 w-px overflow-hidden bg-white/15"><span className="scroll-dot absolute left-0 top-0 h-4 w-px bg-[#D4AF37]" /></span>
      </button>
    </section>
  );
}
