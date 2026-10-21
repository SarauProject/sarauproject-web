import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Loader2, Mail } from "lucide-react";
import { SHOWS, EMAIL, GMAIL_URL } from "../lib/i18n";

const WEB3FORMS_KEY = "f1a1a5da-0e7d-4812-bde5-3819861a05c2";
import { useLang } from "../lib/lang";
import { Reveal, Eyebrow } from "./Reveal";

const EMPTY = { name: "", email: "", phone: "", show: "", event_type: "", event_date: "", location: "", message: "" };

const Field = ({ label, id, children }) => (
  <label htmlFor={id} className="group block">
    <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-[#B8B3AC] transition-colors group-focus-within:text-[#D4AF37]">{label}</span>
    {children}
  </label>
);

export default function Booking({ preset }) {
  const { t, lang } = useLang();
  const f = t.form;
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  useEffect(() => { if (preset) setForm((s) => ({ ...s, show: preset })); }, [preset]);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || form.message.trim().length < 5) { toast.error(f.required); return; }
    setBusy(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY, subject: "Nuevo contacto - SarauProject", from_name: "SarauProject Web",
          name: form.name, email: form.email, telefono: form.phone, espectaculo: form.show, tipo_evento: form.event_type,
          fecha: form.event_date, lugar: form.location, message: form.message, idioma: lang,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.success === false) throw new Error(data?.message || `HTTP ${res.status}`);
      toast.success(f.ok);
      setForm(EMPTY);
      setSent(true);
    } catch (err) {
      toast.error(`${f.err} ${EMAIL}`, { description: err?.message });
    } finally { setBusy(false); }
  };

  return (
    <section id="book" className="relative overflow-hidden" data-testid="booking-section">
      <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-[#9E1B1B]/25 blur-[120px]" />
      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 py-24 md:px-10 md:py-36 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal><Eyebrow>{f.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-6 font-display text-5xl font-medium leading-[1] tracking-tight text-[#FAF8F5] sm:text-6xl">{f.title}</h2></Reveal>
          <Reveal delay={0.15}><p className="mt-6 max-w-sm text-base leading-relaxed text-[#B8B3AC] sm:text-lg">{f.sub}</p></Reveal>
          <Reveal delay={0.2}>
            <a href={GMAIL_URL} target="_blank" rel="noopener noreferrer" data-testid="booking-email-link" className="mt-12 inline-flex items-center gap-3 text-[#FAF8F5]">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15"><Mail size={18} className="text-[#D4AF37]" /></span>
              <span><span className="block text-xs text-[#B8B3AC]">{f.direct}</span><span className="link-underline text-lg">{EMAIL}</span></span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <form onSubmit={submit} data-testid="booking-form" className="grid gap-6 border border-white/10 bg-[#141216]/80 p-6 backdrop-blur-xl sm:grid-cols-2 sm:p-10">
            <Field label={`${f.name} *`} id="q-name"><input id="q-name" data-testid="form-name" className="input" value={form.name} onChange={set("name")} required /></Field>
            <Field label={`${f.email} *`} id="q-email"><input id="q-email" type="email" data-testid="form-email" className="input" value={form.email} onChange={set("email")} required /></Field>
            <Field label={f.phone} id="q-phone"><input id="q-phone" data-testid="form-phone" className="input" value={form.phone} onChange={set("phone")} /></Field>
            <Field label={f.show} id="q-show">
              <select id="q-show" data-testid="form-show" className="input" value={form.show} onChange={set("show")}>
                <option value="">{f.any}</option>
                {SHOWS.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
            </Field>
            <Field label={f.type} id="q-type">
              <select id="q-type" data-testid="form-event-type" className="input" value={form.event_type} onChange={set("event_type")}>
                <option value="">—</option>
                {f.types.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </Field>
            <Field label={f.date} id="q-date"><input id="q-date" type="date" data-testid="form-date" className="input [color-scheme:dark]" value={form.event_date} onChange={set("event_date")} /></Field>
            <div className="sm:col-span-2"><Field label={f.location} id="q-loc"><input id="q-loc" data-testid="form-location" className="input" value={form.location} onChange={set("location")} /></Field></div>
            <div className="sm:col-span-2"><Field label={`${f.message} *`} id="q-msg"><textarea id="q-msg" rows={4} data-testid="form-message" className="input resize-none" value={form.message} onChange={set("message")} required /></Field></div>
            <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" disabled={busy} data-testid="form-submit-btn" className="btn-primary group w-full justify-center sm:w-auto">
                {busy ? <><Loader2 size={16} className="animate-spin" />{f.sending}</> : <>{f.send}<ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>}
              </button>
              {sent && <p data-testid="form-success" className="text-sm text-[#D4AF37]">{f.ok}</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
