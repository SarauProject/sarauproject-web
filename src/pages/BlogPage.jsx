import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Clock, Calendar, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogPosts = {
  es: [
    {
      id: 'flamenco-bodas',
      title: '5 Razones para Contratar Flamenco en tu Boda',
      excerpt: 'Descubre por qué un espectáculo de flamenco es la mejor elección para hacer de tu boda un evento inolvidable.',
      date: '2026-04-15',
      readTime: '4 min',
      content: [
        'Una boda es uno de los momentos más especiales de la vida, y la elección del entretenimiento puede marcar la diferencia entre un evento bonito y un evento inolvidable. El flamenco, con su pasión y su fuerza, es la opción perfecta para crear recuerdos que durarán toda la vida.',
        '**1. Emoción garantizada** — El flamenco es pura emoción. El cante transmite sentimientos profundos, el baile cautiva con su fuerza y elegancia, y la guitarra envuelve a los invitados en una atmósfera mágica. No hay invitado que quede indiferente.',
        '**2. Espectáculo visual impresionante** — La bata de cola, el mantón, los zapateados... El flamenco ofrece un espectáculo visual que deja boquiabiertos a todos los asistentes. Las fotos y vídeos de tu boda serán espectaculares.',
        '**3. Adaptable a cualquier momento** — Un cuadro flamenco puede actuar durante el cóctel, la cena o la fiesta. Se adapta perfectamente a espacios interiores y exteriores, desde salones elegantes hasta jardines al aire libre.',
        '**4. Impresiona a invitados internacionales** — Si tienes invitados de otros países, el flamenco es una experiencia cultural auténtica que recordarán para siempre. Es el sello de identidad de España y una de las artes más admiradas del mundo.',
        '**5. Personalización total** — En SarauProject adaptamos el espectáculo a tus gustos y necesidades. Desde un cuadro íntimo de cuatro artistas hasta un gran espectáculo con seis componentes. Tú eliges la duración, el estilo y el momento.'
      ]
    },
    {
      id: 'flamenco-eventos-corporativos',
      title: 'Flamenco para Eventos Corporativos: Impacto y Elegancia',
      excerpt: 'Cómo el flamenco puede transformar tu evento corporativo en una experiencia única para clientes y empleados.',
      date: '2026-04-10',
      readTime: '3 min',
      content: [
        'Los eventos corporativos necesitan algo especial para destacar. El flamenco ofrece exactamente eso: un espectáculo de alto impacto que transmite valores como la pasión, la excelencia y la autenticidad.',
        '**Cenas de gala y premiaciones** — Un cuadro flamenco durante una cena de gala crea una atmósfera sofisticada e inolvidable. La combinación de música en vivo, baile y cante eleva cualquier evento al siguiente nivel.',
        '**Lanzamientos de producto** — ¿Quieres que tu producto se asocie con la pasión y la calidad? Un espectáculo de flamenco genera un impacto emocional que ninguna presentación de PowerPoint puede igualar.',
        '**Team building cultural** — Ofrece a tu equipo una experiencia cultural única. El flamenco inspira creatividad, trabajo en equipo y pasión por la excelencia.',
        '**Ferias y congresos internacionales** — Si representas una marca española o quieres ofrecer una experiencia auténtica en tu stand, el flamenco es tu mejor carta de presentación ante clientes internacionales.',
        'En SarauProject hemos actuado en eventos corporativos de todo tipo, adaptándonos siempre al formato, el espacio y la audiencia. Contacta con nosotros para diseñar el espectáculo perfecto para tu evento.'
      ]
    },
    {
      id: 'contratar-flamenco-festival',
      title: 'Cómo Contratar Flamenco para tu Festival Internacional',
      excerpt: 'Guía completa para programadores de festivales que buscan incluir flamenco de alta calidad en su programación.',
      date: '2026-04-05',
      readTime: '5 min',
      content: [
        'El flamenco es uno de los géneros artísticos más demandados en festivales de todo el mundo. Su combinación de música, danza y cante lo convierte en un espectáculo completo que conecta con audiencias de cualquier cultura.',
        '**¿Qué incluye un espectáculo de flamenco?** — Un cuadro flamenco profesional incluye bailaor/a, cantaor/a, guitarrista y percusionista como mínimo. Los espectáculos más grandes pueden incluir dos bailes, dos cantes y bajo eléctrico, creando un sonido más potente y contemporáneo.',
        '**Duración y formato** — Los espectáculos de flamenco para festivales suelen durar entre 1 hora y 2 horas. El formato se adapta al escenario: desde un tablao íntimo hasta un gran escenario al aire libre para miles de personas.',
        '**Rider técnico** — El flamenco requiere un escenario sólido (especialmente para el zapateado), microfonía de calidad y una buena iluminación. En SarauProject proporcionamos un rider técnico detallado para facilitar la producción.',
        '**Repertorio** — Nuestros espectáculos combinan palos tradicionales (soleá, bulería, alegría, seguiriya) con creaciones contemporáneas. El repertorio se adapta al público y al contexto del festival.',
        '**Presupuesto** — El coste varía según el número de artistas, la duración del espectáculo y los desplazamientos. Contacta con nosotros para un presupuesto personalizado sin compromiso.',
        'SarauProject ofrece cuatro espectáculos diferentes: Tarannà (5 artistas), Sarsalé (5 artistas), Sarsalé Sextet (6 artistas) y Alikindoi (4 artistas). Cada uno tiene su personalidad y se adapta a diferentes contextos y presupuestos.'
      ]
    },
    {
      id: 'flamenco-patrimonio-humanidad',
      title: 'El Flamenco: Patrimonio Inmaterial de la Humanidad',
      excerpt: 'Por qué el flamenco es una de las expresiones artísticas más valiosas del mundo y cómo disfrutarlo en directo.',
      date: '2026-03-28',
      readTime: '4 min',
      content: [
        'En 2010, la UNESCO declaró el flamenco Patrimonio Cultural Inmaterial de la Humanidad. Este reconocimiento sitúa al flamenco al mismo nivel que otras grandes tradiciones artísticas del mundo.',
        '**Más que música y danza** — El flamenco es una forma de expresión completa que integra cante (voz), toque (guitarra), baile y jaleo (palmas y vítores). Cada elemento se nutre de los demás, creando una experiencia artística única e irrepetible.',
        '**Siglos de historia** — El flamenco nació en Andalucía hace más de 200 años, fruto de la mezcla de culturas gitana, árabe, judía y castellana. Esta riqueza cultural es lo que le da su profundidad y su capacidad de emocionar a personas de cualquier origen.',
        '**Evolución constante** — Aunque sus raíces son tradicionales, el flamenco no ha dejado de evolucionar. Artistas contemporáneos incorporan jazz, electrónica y música latina, creando nuevas formas de expresión sin perder la esencia.',
        '**Experiencia en directo** — El flamenco se vive en directo. La conexión entre los artistas y el público, la improvisación, la energía del momento... Todo eso solo se puede experimentar en una actuación en vivo.',
        'En SarauProject honramos esta tradición llevando espectáculos de flamenco auténtico y profesional a escenarios de todo el mundo. Nuestros artistas combinan la técnica y el conocimiento de los palos tradicionales con una propuesta contemporánea que conecta con audiencias internacionales.'
      ]
    }
  ],
  en: [
    {
      id: 'flamenco-bodas',
      title: '5 Reasons to Hire Flamenco for Your Wedding',
      excerpt: 'Discover why a flamenco show is the best choice to make your wedding an unforgettable event.',
      date: '2026-04-15',
      readTime: '4 min',
      content: [
        'A wedding is one of the most special moments in life, and the choice of entertainment can make the difference between a nice event and an unforgettable one. Flamenco, with its passion and strength, is the perfect option to create memories that will last a lifetime.',
        '**1. Guaranteed emotion** — Flamenco is pure emotion. The singing transmits deep feelings, the dance captivates with its strength and elegance, and the guitar wraps guests in a magical atmosphere. No guest remains indifferent.',
        '**2. Stunning visual spectacle** — The bata de cola, the shawl, the footwork... Flamenco offers a visual spectacle that leaves everyone speechless. Your wedding photos and videos will be spectacular.',
        '**3. Adaptable to any moment** — A flamenco group can perform during the cocktail, dinner or party. It adapts perfectly to indoor and outdoor spaces, from elegant halls to open-air gardens.',
        '**4. Impresses international guests** — If you have guests from other countries, flamenco is an authentic cultural experience they will remember forever. It is Spain\'s hallmark and one of the most admired arts in the world.',
        '**5. Total customization** — At SarauProject we adapt the show to your tastes and needs. From an intimate group of four artists to a grand show with six components. You choose the duration, style and timing.'
      ]
    },
    {
      id: 'flamenco-eventos-corporativos',
      title: 'Flamenco for Corporate Events: Impact and Elegance',
      excerpt: 'How flamenco can transform your corporate event into a unique experience for clients and employees.',
      date: '2026-04-10',
      readTime: '3 min',
      content: [
        'Corporate events need something special to stand out. Flamenco offers exactly that: a high-impact show that conveys values such as passion, excellence and authenticity.',
        '**Gala dinners and award ceremonies** — A flamenco group during a gala dinner creates a sophisticated and unforgettable atmosphere. The combination of live music, dance and singing elevates any event to the next level.',
        '**Product launches** — Want your product associated with passion and quality? A flamenco show generates an emotional impact that no PowerPoint presentation can match.',
        '**Cultural team building** — Offer your team a unique cultural experience. Flamenco inspires creativity, teamwork and passion for excellence.',
        '**International fairs and conferences** — If you represent a Spanish brand or want to offer an authentic experience at your booth, flamenco is your best calling card for international clients.',
        'At SarauProject we have performed at corporate events of all kinds, always adapting to the format, space and audience. Contact us to design the perfect show for your event.'
      ]
    },
    {
      id: 'contratar-flamenco-festival',
      title: 'How to Book Flamenco for Your International Festival',
      excerpt: 'Complete guide for festival programmers looking to include high-quality flamenco in their lineup.',
      date: '2026-04-05',
      readTime: '5 min',
      content: [
        'Flamenco is one of the most in-demand artistic genres at festivals worldwide. Its combination of music, dance and singing makes it a complete show that connects with audiences from any culture.',
        '**What does a flamenco show include?** — A professional flamenco group includes a dancer, singer, guitarist and percussionist as a minimum. Larger shows can include two dancers, two singers and electric bass, creating a more powerful and contemporary sound.',
        '**Duration and format** — Flamenco shows for festivals typically last between 1 hour and 2 hours. The format adapts to the stage: from an intimate tablao to a large outdoor stage for thousands of people.',
        '**Technical rider** — Flamenco requires a solid stage (especially for footwork), quality microphones and good lighting. At SarauProject we provide a detailed technical rider to facilitate production.',
        '**Repertoire** — Our shows combine traditional palos (soleá, bulería, alegría, seguiriya) with contemporary creations. The repertoire adapts to the audience and festival context.',
        '**Budget** — Cost varies depending on the number of artists, show duration and travel. Contact us for a personalized no-obligation quote.',
        'SarauProject offers four different shows: Tarannà (5 artists), Sarsalé (5 artists), Sarsalé Sextet (6 artists) and Alikindoi (4 artists). Each has its own personality and suits different contexts and budgets.'
      ]
    },
    {
      id: 'flamenco-patrimonio-humanidad',
      title: 'Flamenco: Intangible Cultural Heritage of Humanity',
      excerpt: 'Why flamenco is one of the most valuable artistic expressions in the world and how to enjoy it live.',
      date: '2026-03-28',
      readTime: '4 min',
      content: [
        'In 2010, UNESCO declared flamenco an Intangible Cultural Heritage of Humanity. This recognition places flamenco at the same level as other great artistic traditions of the world.',
        '**More than music and dance** — Flamenco is a complete form of expression that integrates cante (voice), toque (guitar), baile (dance) and jaleo (clapping and cheering). Each element feeds off the others, creating a unique and unrepeatable artistic experience.',
        '**Centuries of history** — Flamenco was born in Andalusia over 200 years ago, born from the mix of Romani, Arab, Jewish and Castilian cultures. This cultural richness is what gives it its depth and ability to move people of any background.',
        '**Constant evolution** — Although its roots are traditional, flamenco has never stopped evolving. Contemporary artists incorporate jazz, electronic and Latin music, creating new forms of expression without losing the essence.',
        '**Live experience** — Flamenco is experienced live. The connection between artists and audience, the improvisation, the energy of the moment... All of this can only be experienced in a live performance.',
        'At SarauProject we honor this tradition by bringing authentic and professional flamenco shows to stages around the world. Our artists combine technique and knowledge of traditional palos with a contemporary approach that connects with international audiences.'
      ]
    }
  ]
};

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const [selectedPost, setSelectedPost] = useState(null);
  const lang = i18n.language;
  const posts = blogPosts[lang] || blogPosts.en;

  const handleContactClick = () => {
    window.location.href = '/#contact-section';
  };

  const renderContent = (text) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part
    );
  };

  if (selectedPost) {
    const post = posts.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <div className="min-h-screen bg-black">
        <Header onContactClick={handleContactClick} />
        <article className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
              data-testid="blog-back-btn"
            >
              <ArrowLeft className="h-4 w-4" />
              {lang === 'es' ? 'Volver al blog' : 'Back to blog'}
            </button>

            <header className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4" data-testid="blog-post-title">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </header>

            <div className="space-y-6">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="text-lg leading-relaxed text-gray-300">
                  {renderContent(paragraph)}
                </p>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-lg bg-gray-900 border border-gray-800">
              <p className="text-lg text-gray-300 mb-4">
                {lang === 'es'
                  ? '¿Quieres contratar un espectáculo de flamenco? Escríbenos y te enviamos un presupuesto sin compromiso.'
                  : 'Want to hire a flamenco show? Contact us and we\'ll send you a no-obligation quote.'}
              </p>
              <Button
                onClick={handleContactClick}
                className="rounded-full bg-red-600 px-8 py-3 text-base font-semibold uppercase tracking-wider text-white hover:bg-red-700"
                data-testid="blog-contact-cta"
              >
                {lang === 'es' ? 'Solicitar Presupuesto' : 'Request a Quote'}
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
            <h1 className="text-4xl font-bold sm:text-5xl text-white mb-4" data-testid="blog-title">
              Blog
            </h1>
            <p className="text-lg text-gray-400">
              {lang === 'es'
                ? 'Noticias, consejos y todo sobre el mundo del flamenco profesional'
                : 'News, tips and everything about the world of professional flamenco'}
            </p>
          </div>

          <div className="space-y-6" data-testid="blog-posts-list">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="bg-gray-900 border-gray-800 p-6 cursor-pointer transition-all hover:border-gray-600"
                onClick={() => setSelectedPost(post.id)}
                data-testid={`blog-post-${post.id}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white mb-2 hover:text-red-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
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
