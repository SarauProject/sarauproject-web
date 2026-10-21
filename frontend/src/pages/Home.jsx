import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Shows from "../components/Shows";
import VideoModal from "../components/VideoModal";
import About from "../components/About";
import { Venues, HowItWorks } from "../components/Sections";
import Booking from "../components/Booking";
import { Footer, StickyCTA } from "../components/Footer";
import { scrollToId } from "../lib/lang";

export default function Home() {
  const [active, setActive] = useState(null);
  const [preset, setPreset] = useState("");
  const { state } = useLocation();

  useEffect(() => {
    if (!state?.scrollTo) return undefined;
    const tm = setTimeout(() => scrollToId(state.scrollTo), 400);
    return () => clearTimeout(tm);
  }, [state]);

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, lerp: 0.09 });
    window.__lenis = lenis;
    return () => { lenis.destroy(); window.__lenis = null; };
  }, []);

  const close = useCallback(() => setActive(null), []);
  const book = (show) => {
    setPreset(show.title);
    setActive(null);
    setTimeout(() => scrollToId("book"), 350);
  };

  return (
    <div className="grain relative bg-[#0B0A0C] text-[#FAF8F5]">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Shows onOpen={setActive} />
        <About />
        <Venues />
        <HowItWorks />
        <Booking preset={preset} />
      </main>
      <Footer />
      <StickyCTA />
      <VideoModal show={active} onClose={close} onBook={book} />
    </div>
  );
}
