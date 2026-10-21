import axios from "axios";

export const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export function errText(e) {
  const d = e?.response?.data?.detail;
  if (!d) return e?.message || "Error";
  if (typeof d === "string") return d;
  if (Array.isArray(d)) return d.map((x) => x?.msg).filter(Boolean).join(" ");
  return String(d?.msg ?? d);
}

export const authHeaders = () => ({ headers: { Authorization: `Bearer ${localStorage.getItem("sarau-token") || ""}` } });

export default axios;
