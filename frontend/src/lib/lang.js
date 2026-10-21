import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { T } from "./i18n";

const LangCtx = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("sarau-lang") || "es");
  useEffect(() => {
    localStorage.setItem("sarau-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return <LangCtx.Provider value={{ lang, setLang, t: T[lang] }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70, duration: 1.6 });
  else el.scrollIntoView({ behavior: "smooth" });
}

export function useGo() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  return (id) => {
    if (id === "blog") { nav("/blog"); window.scrollTo(0, 0); return; }
    if (pathname !== "/") nav("/", { state: { scrollTo: id } });
    else scrollToId(id);
  };
}
