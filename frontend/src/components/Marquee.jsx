import { useLang } from "../lib/lang";

export default function Marquee() {
  const { t } = useLang();
  const items = [...t.marquee, ...t.marquee];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#0B0A0C] py-4" data-testid="marquee">
      <div className="marquee-track flex w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
            {items.map((m, i) => (
              <span key={`${k}-${i}`} className="flex items-center whitespace-nowrap font-display text-xl italic text-[#EAE5D9] sm:text-3xl">
                <span className={i % 2 ? "text-stroke-gold" : ""}>{m}</span>
                <span className="mx-4 text-sm not-italic text-[#C82323] sm:mx-6">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
