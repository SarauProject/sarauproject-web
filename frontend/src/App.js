import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import "lenis/dist/lenis.css";
import "./App.css";
import { LangProvider } from "./lib/lang";
import Home from "./pages/Home";

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster theme="dark" position="top-center" richColors />
    </LangProvider>
  );
}
