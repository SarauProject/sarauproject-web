import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";
import { Reveal, Eyebrow, MaskLine } from "../components/Reveal";
import { useLang, useGo } from "../lib/lang";

const IMGS = ["/assets/yt-oZ1yeRvoo2s.jpg", "/assets/yt-OixPUT8HNSI.jpg", "/assets/yt-JoAlDaPrVLk.jpg", "/assets/about-image.jpg"];

const Rich = ({ text }) => (
  <p className="text-base leading-relaxed text-[#B8B3AC] sm:text-lg">
    {text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i} className="font-semibold text-[#FAF8F5]">{part}</strong> : part))}
  </p>
);

const fmt = (d, lang) => new Date(`${d}T12:00:00`).toLocaleDateString(lang, { day: "numeric", month: "long", year: "numeric" });

const PostCard = ({ post, i }) => {
  const { lang } = useLang();
  return (
    <Reveal delay={i * 0.06}>
      <Link to={`/blog/${post.id}`} data-testid={`blog-card-${post.id}`} className="group grid gap-6 border-t border-white/10 py-10 md:grid-cols-12 md:gap-10">
        <div className="aspect-[16/10] overflow-hidden md:col-span-4">
          <img src={IMGS[i % IMGS.length]} alt={post.title} loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition-[transform,filter] duration-700 group-hover:scale-105 group-hover:grayscale-0" />
        </div>
        <div className="md:col-span-8">
          <p className="flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
            <span>{fmt(post.date, lang)}</span><span className="flex items-center gap-1.5 text-[#B8B3AC]"><Clock size={13} />{post.readTime}</span>
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-[#FAF8F5] transition-colors group-hover:text-[#D4AF37] sm:text-4xl">{post.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#B8B3AC]">{post.excerpt}</p>
          <span className="mt-6 inline-grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[#FAF8F5] transition-colors duration-300 group-hover:border-[#C82323] group-hover:bg-[#C82323]"><ArrowUpRight size={16} /></span>
        </div>
      </Link>
    </Reveal>
  );
};

const PostView = ({ post, idx }) => {
  const { t, lang } = useLang();
  const go = useGo();
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:pt-40" data-testid="blog-post">
      <Link to="/blog" data-testid="blog-back-btn" className="inline-flex items-center gap-2 text-sm text-[#B8B3AC] transition-colors hover:text-white"><ArrowLeft size={16} />{t.blog.back}</Link>
      <p className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
        <span>{fmt(post.date, lang)}</span><span className="flex items-center gap-1.5 text-[#B8B3AC]"><Clock size={13} />{post.readTime}</span>
      </p>
      <h1 key={post.id + lang} data-testid="blog-post-title" className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-[#FAF8F5] sm:text-6xl">
        <MaskLine delay={0.1}>{post.title}</MaskLine>
      </h1>
      <motion.div initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
        className="mt-10 aspect-[16/9] overflow-hidden">
        <img src={IMGS[idx % IMGS.length]} alt={post.title} className="h-full w-full object-cover" />
      </motion.div>
      <div className="mt-12 space-y-6">{post.content.map((c, i) => <Rich key={i} text={c} />)}</div>
      <div className="mt-16 border border-[#D4AF37]/30 bg-[#9E1B1B] p-8 sm:p-10" data-testid="blog-cta-box">
        <p className="font-display text-2xl leading-snug text-[#FAF8F5] sm:text-3xl">{t.blog.cta}</p>
        <button onClick={() => go("book")} data-testid="blog-contact-cta" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FAF8F5] px-6 py-3 text-sm font-semibold text-[#0B0A0C] transition-transform duration-300 hover:-translate-y-0.5">
          {t.blog.ctaBtn}<ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  );
};

export default function Blog() {
  const { t } = useLang();
  const { id } = useParams();
  const posts = Array.isArray(t.blog?.posts) ? t.blog.posts : [];
  const idx = posts.findIndex((p) => p.id === id);
  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  return (
    <div className="grain relative min-h-screen bg-[#0B0A0C] text-[#FAF8F5]">
      <Nav />
      {idx >= 0 ? <PostView post={posts[idx]} idx={idx} /> : (
        <main className="mx-auto max-w-[1400px] px-5 pb-24 pt-32 sm:pt-40 md:px-10" data-testid="blog-list-page">
          <Eyebrow>SarauProject</Eyebrow>
          <h1 data-testid="blog-title" className="mt-6 font-display text-6xl font-medium tracking-tight sm:text-8xl"><MaskLine delay={0.1}>Blog</MaskLine></h1>
          <p className="mt-6 max-w-xl text-base text-[#B8B3AC] sm:text-lg">{t.blog.subtitle}</p>
          <div className="mt-16" data-testid="blog-posts-list">{posts.map((p, i) => <PostCard key={p.id} post={p} i={i} />)}</div>
        </main>
      )}
      <Footer />
    </div>
  );
}
