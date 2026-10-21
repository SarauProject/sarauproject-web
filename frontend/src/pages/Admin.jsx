import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { LogOut, Trash2, Mail, Loader2 } from "lucide-react";
import axios, { API, errText, authHeaders } from "../lib/api";
import { LogoMark } from "../components/Logo";

const STATUS = { new: "Nueva", contacted: "Contactada", closed: "Cerrada" };

const Login = ({ onOk }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true); setErr("");
    try {
      const { data } = await axios.post(`${API}/auth/login`, { email, password });
      localStorage.setItem("sarau-token", data?.token ?? "");
      onOk();
    } catch (e2) { setErr(errText(e2)); } finally { setBusy(false); }
  };
  return (
    <div className="grid min-h-screen place-items-center px-5">
      <form onSubmit={submit} data-testid="admin-login-form" className="w-full max-w-sm space-y-5 border border-white/10 bg-[#141216] p-8">
        <div className="flex items-center gap-3"><LogoMark className="h-8 w-8" /><h1 className="font-display text-3xl">Panel Sarau</h1></div>
        <input data-testid="admin-email" type="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input data-testid="admin-password" type="password" placeholder="Contraseña" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {err && <p data-testid="admin-login-error" className="text-sm text-[#ff6b6b]">{err}</p>}
        <button data-testid="admin-login-btn" disabled={busy} className="btn-primary w-full justify-center">{busy ? <Loader2 size={16} className="animate-spin" /> : "Entrar"}</button>
      </form>
    </div>
  );
};

const QuoteRow = ({ q, onStatus, onDelete }) => (
  <article data-testid={`quote-${q.id}`} className="grid gap-4 border border-white/10 bg-[#141216] p-6 md:grid-cols-12">
    <div className="md:col-span-4">
      <p className="font-display text-2xl">{q.name}</p>
      <a href={`mailto:${q.email}`} className="mt-1 flex items-center gap-2 text-sm text-[#D4AF37]"><Mail size={14} />{q.email}</a>
      {q.phone && <p className="mt-1 text-sm text-[#B8B3AC]">{q.phone}</p>}
      <p className="mt-2 font-mono text-xs text-[#B8B3AC]">{new Date(q.created_at).toLocaleString("es-ES")}</p>
    </div>
    <div className="space-y-1 text-sm text-[#EAE5D9] md:col-span-5">
      <p><span className="text-[#B8B3AC]">Espectáculo:</span> {q.show || "—"} · <span className="text-[#B8B3AC]">Tipo:</span> {q.event_type || "—"}</p>
      <p><span className="text-[#B8B3AC]">Fecha:</span> {q.event_date || "—"} · <span className="text-[#B8B3AC]">Lugar:</span> {q.location || "—"}</p>
      <p className="whitespace-pre-line pt-2 text-[#B8B3AC]">{q.message}</p>
    </div>
    <div className="flex items-start gap-2 md:col-span-3 md:justify-end">
      <select data-testid={`quote-status-${q.id}`} value={q.status} onChange={(e) => onStatus(q.id, e.target.value)} className="input !w-auto !py-2">
        {Object.entries(STATUS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
      </select>
      <button data-testid={`quote-delete-${q.id}`} onClick={() => onDelete(q.id)} className="rounded-full border border-white/15 p-2.5 text-[#B8B3AC] hover:text-[#ff6b6b]" aria-label="delete"><Trash2 size={16} /></button>
    </div>
  </article>
);

export default function Admin() {
  const [authed, setAuthed] = useState(null);
  const [quotes, setQuotes] = useState([]);

  const load = useCallback(async () => {
    try {
      const { data } = await axios.get(`${API}/quotes`, authHeaders());
      setQuotes(Array.isArray(data) ? data : []);
      setAuthed(true);
    } catch { setAuthed(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const onStatus = async (id, status) => {
    try { await axios.patch(`${API}/quotes/${id}`, { status }, authHeaders()); load(); } catch (e) { toast.error(errText(e)); }
  };
  const onDelete = async (id) => {
    if (!window.confirm("¿Eliminar esta solicitud?")) return;
    try { await axios.delete(`${API}/quotes/${id}`, authHeaders()); load(); } catch (e) { toast.error(errText(e)); }
  };
  const logout = () => { localStorage.removeItem("sarau-token"); setAuthed(false); };

  if (authed === null) return <div className="grid min-h-screen place-items-center bg-[#0B0A0C]"><Loader2 className="animate-spin text-[#D4AF37]" /></div>;
  return (
    <div className="min-h-screen bg-[#0B0A0C] text-[#FAF8F5]">
      {!authed ? <Login onOk={load} /> : (
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3"><LogoMark className="h-8 w-8" /><h1 className="font-display text-4xl">Solicitudes</h1>
              <span data-testid="quotes-count" className="rounded-full bg-[#C82323] px-3 py-1 font-mono text-xs">{quotes.length}</span></div>
            <button data-testid="admin-logout-btn" onClick={logout} className="btn-ghost"><LogOut size={15} />Salir</button>
          </div>
          <div className="space-y-4">
            {quotes.length === 0 && <p data-testid="quotes-empty" className="text-[#B8B3AC]">Todavía no hay solicitudes.</p>}
            {quotes.map((q) => <QuoteRow key={q.id} q={q} onStatus={onStatus} onDelete={onDelete} />)}
          </div>
        </div>
      )}
    </div>
  );
}
