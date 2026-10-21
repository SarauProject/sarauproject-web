import { useLang } from "../lib/lang";
import { Reveal, Eyebrow } from "./Reveal";

export const Venues = () => {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28" data-testid="venues-section">
      <Reveal><Eyebrow>{t.venues.eyebrow}</Eyebrow></Reveal>
      <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2">
        {t.venues.items.map((v, i) => (
          <Reveal key={v} delay={0.05 * i} y={24}>
            <span className="group inline-flex items-baseline font-display text-4xl tracking-tight text-[#FAF8F5] transition-colors duration-300 hover:text-[#D4AF37] sm:text-6xl">
              {v}<span className="ml-4 text-2xl text-[#C82323] sm:text-4xl">/</span>
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export const HowItWorks = () => {
  const { t } = useLang();
  return (
    <section id="how" className="border-t border-white/10 bg-[#141216]" data-testid="how-section">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal><Eyebrow>{t.how.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.1}><h2 className="mt-6 max-w-2xl font-display text-4xl font-medium tracking-tight text-[#FAF8F5] sm:text-5xl">{t.how.title}</h2></Reveal>
        <ol className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
          {t.how.steps.map(([h, p], i) => (
            <li key={h} className="bg-[#141216]" data-testid={`how-step-${i + 1}`}>
              <Reveal delay={0.1 * i} className="group h-full p-7 sm:p-10">
                <span className="font-display text-7xl italic text-stroke-gold transition-colors duration-500 group-hover:text-[#D4AF37]">0{i + 1}</span>
                <h3 className="mt-8 font-display text-2xl text-[#FAF8F5]">{h}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#B8B3AC] sm:text-base">{p}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
