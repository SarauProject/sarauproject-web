import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogData';

const blogLabels = {
  es: { back: 'Volver al blog', subtitle: 'Noticias, consejos y todo sobre el mundo del flamenco profesional', cta: '¿Quieres contratar un espectáculo de flamenco? Escríbenos y te enviamos un presupuesto sin compromiso.', ctaBtn: 'Solicitar Presupuesto' },
  en: { back: 'Back to blog', subtitle: 'News, tips and everything about professional flamenco', cta: 'Want to hire a flamenco show? Contact us for a no-obligation quote.', ctaBtn: 'Request a Quote' },
  fr: { back: 'Retour au blog', subtitle: 'Actualités, conseils et tout sur le flamenco professionnel', cta: 'Vous voulez engager un spectacle de flamenco ? Contactez-nous pour un devis gratuit.', ctaBtn: 'Demander un Devis' },
  it: { back: 'Torna al blog', subtitle: 'Notizie, consigli e tutto sul flamenco professionale', cta: 'Vuoi prenotare uno spettacolo di flamenco? Contattaci per un preventivo gratuito.', ctaBtn: 'Richiedi un Preventivo' },
  de: { back: 'Zurück zum Blog', subtitle: 'Neuigkeiten, Tipps und alles über professionellen Flamenco', cta: 'Möchten Sie eine Flamenco-Show buchen? Kontaktieren Sie uns für ein unverbindliches Angebot.', ctaBtn: 'Angebot Anfordern' },
  pl: { back: 'Powrót do bloga', subtitle: 'Aktualności, porady i wszystko o profesjonalnym flamenco', cta: 'Chcesz zarezerwować pokaz flamenco? Skontaktuj się z nami po bezpłatną wycenę.', ctaBtn: 'Zapytaj o Wycenę' },
  tr: { back: 'Bloga dön', subtitle: 'Profesyonel flamenko hakkında haberler, ipuçları ve her şey', cta: 'Bir flamenko gösterisi mi ayırtmak istiyorsunuz? Ücretsiz teklif için bize ulaşın.', ctaBtn: 'Teklif İste' },
  hu: { back: 'Vissza a blogra', subtitle: 'Hírek, tippek és minden a professzionális flamencóról', cta: 'Szeretne flamenco show-t foglalni? Kérjen tőlünk ingyenes árajánlatot.', ctaBtn: 'Árajánlat Kérése' },
  ru: { back: 'Назад к блогу', subtitle: 'Новости, советы и всё о профессиональном фламенко', cta: 'Хотите заказать шоу фламенко? Свяжитесь с нами для бесплатного расчёта.', ctaBtn: 'Запросить Расчёт' },
  id: { back: 'Kembali ke blog', subtitle: 'Berita, tips, dan semua tentang flamenco profesional', cta: 'Ingin memesan pertunjukan flamenco? Hubungi kami untuk penawaran gratis.', ctaBtn: 'Minta Penawaran' },
  zh: { back: '返回博客', subtitle: '关于专业弗拉门戈的新闻、建议和一切', cta: '想预订弗拉门戈表演吗？联系我们获取免费报价。', ctaBtn: '请求报价' },
  ja: { back: 'ブログに戻る', subtitle: 'プロフェッショナルフラメンコに関するニュース、ヒント、すべて', cta: 'フラメンコショーを予約しませんか？無料見積もりはお問い合わせください。', ctaBtn: '見積もりを依頼' }
};

const BlogPage = () => {
  const { i18n } = useTranslation();
  const [selectedPost, setSelectedPost] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const lang = i18n.language;
  const posts = blogPosts[lang] || blogPosts.en;
  const labels = blogLabels[lang] || blogLabels.en;

  useEffect(() => {
    setSelectedPost(null);
    window.scrollTo(0, 0);
  }, [location.key]);

  const handleContactClick = () => { navigate('/', { state: { scrollTo: 'contact-section' } }); };

  const renderContent = (text) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part);
  };

  const formatDate = (dateStr) => {
    const localeMap = { es: 'es-ES', en: 'en-US', fr: 'fr-FR', it: 'it-IT', de: 'de-DE', pl: 'pl-PL', tr: 'tr-TR', hu: 'hu-HU', ru: 'ru-RU', id: 'id-ID', zh: 'zh-CN', ja: 'ja-JP' };
    return new Date(dateStr).toLocaleDateString(localeMap[lang] || 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (selectedPost) {
    const post = posts.find(p => p.id === selectedPost);
    if (!post) return null;
    return (
      <div className="min-h-screen bg-black">
        <Header onContactClick={handleContactClick} />
        <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <button onClick={() => setSelectedPost(null)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors" data-testid="blog-back-btn">
              <ArrowLeft className="h-4 w-4" /> {labels.back}
            </button>
            <header className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4" data-testid="blog-post-title">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {formatDate(post.date)}</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
              </div>
            </header>
            <div className="space-y-6">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="text-lg leading-relaxed text-gray-300">{renderContent(paragraph)}</p>
              ))}
            </div>
            <div className="mt-12 p-6 rounded-lg bg-gray-900 border border-gray-800">
              <p className="text-lg text-gray-300 mb-4">{labels.cta}</p>
              <Button onClick={handleContactClick} className="rounded-full bg-red-600 px-8 py-3 text-base font-semibold uppercase tracking-wider text-white hover:bg-red-700" data-testid="blog-contact-cta">
                {labels.ctaBtn}
              </Button>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header onContactClick={handleContactClick} />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold sm:text-5xl text-white mb-4" data-testid="blog-title">Blog</h1>
            <p className="text-lg text-gray-400">{labels.subtitle}</p>
          </div>
          <div className="space-y-6" data-testid="blog-posts-list">
            {posts.map((post) => (
              <Card key={post.id} className="bg-gray-900 border-gray-800 p-6 cursor-pointer transition-all hover:border-gray-600" onClick={() => setSelectedPost(post.id)} data-testid={`blog-post-${post.id}`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white mb-2 hover:text-red-400 transition-colors">{post.title}</h2>
                    <p className="text-gray-400 mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {formatDate(post.date)}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-600 mt-1 flex-shrink-0" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
