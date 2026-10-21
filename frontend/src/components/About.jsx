import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useLang } from "../lib/lang";
import { Reveal, Eyebrow } from "./Reveal";

export default function About() {
  const { t } = useLang();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} className="relative bg-[#EAE5D9] text-[#0B0A0C]" data-testid="about-section">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 md:px-10 md:py-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 6%, 100% 100%, 0 94%)" }}>
              <motion.img style={{ y, scale: 1.15 }} src="/assets/about-image.jpg" alt="SarauProject — artistas flamencos en escenario" loading="lazy"
                className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-3 border-t border-[#0B0A0C]/15 pt-6" data-testid="about-stats">
            {t.about.stats.map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-4xl tracking-tight text-[#9E1B1B] sm:text-5xl">{v}</p>
                <p className="mt-1 text-xs leading-snug text-[#3a3530] sm:text-sm">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
          <Reveal><Eyebrow className="!text-[#9E1B1B]">{t.about.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
              “{t.about.title}”
            </h2>
            <p className="mt-4 font-display text-xl italic text-[#9E1B1B]">{t.about.quote}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-[#2a2622]">
              <p>{t.about.p1}</p><p>{t.about.p2}</p><p>{t.about.p3}</p>
            </div>
          </Reveal>
          <ul className="mt-10 divide-y divide-[#0B0A0C]/10 border-y border-[#0B0A0C]/10">
            {t.about.bullets.map((b, i) => (
              <Reveal key={b} delay={0.05 * i} y={16}>
                <li className="flex items-center gap-4 py-4 text-sm sm:text-base">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#0B0A0C] text-[#D4AF37]"><Check size={14} /></span>{b}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
