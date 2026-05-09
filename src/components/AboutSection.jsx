import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowDown } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();
  
  const features = {
    es: [
      'Baile y música flamenca profesional',
      'Repertorio tradicional y contemporáneo',
      'Adaptación a todo tipo de eventos y escenarios',
      'Experiencia internacional',
      'Producción técnica profesional'
    ],
    en: [
      'Professional flamenco dance and music',
      'Traditional and contemporary repertoire',
      'Adaptation to all types of events and venues',
      'International experience',
      'Professional technical production'
    ],
    fr: [
      'Danse et musique flamenco professionnelles',
      'Répertoire traditionnel et contemporain',
      'Adaptation à tous types d\'événements et de lieux',
      'Expérience internationale',
      'Production technique professionnelle'
    ],
    it: [
      'Danza e musica flamenco professionali',
      'Repertorio tradizionale e contemporaneo',
      'Adattamento a tutti i tipi di eventi e luoghi',
      'Esperienza internazionale',
      'Produzione tecnica professionale'
    ],
    de: [
      'Professioneller Flamenco-Tanz und Musik',
      'Traditionelles und zeitgenössisches Repertoire',
      'Anpassung an alle Arten von Veranstaltungen und Veranstaltungsorten',
      'Internationale Erfahrung',
      'Professionelle technische Produktion'
    ],
    pl: [
      'Profesjonalny taniec i muzyka flamenco',
      'Repertuar tradycyjny i współczesny',
      'Dostosowanie do wszystkich rodzajów wydarzeń i miejsc',
      'Doświadczenie międzynarodowe',
      'Profesjonalna produkcja techniczna'
    ],
    tr: [
      'Profesyonel flamenko dansı ve müziği',
      'Geleneksel ve çağdaş repertuar',
      'Her türlü etkinlik ve mekana uyum',
      'Uluslararası deneyim',
      'Profesyonel teknik prodüksiyon'
    ],
    hu: [
      'Professzionális flamenco tánc és zene',
      'Hagyományos és kortárs repertoár',
      'Minden típusú eseményhez és helyszínhez alkalmazkodás',
      'Nemzetközi tapasztalat',
      'Professzionális technikai produkció'
    ],
    ru: [
      'Профессиональный танец и музыка фламенко',
      'Традиционный и современный репертуар',
      'Адаптация ко всем типам мероприятий и площадок',
      'Международный опыт',
      'Профессиональное техническое производство'
    ],
    id: [
      'Tarian dan musik flamenco profesional',
      'Repertoar tradisional dan kontemporer',
      'Adaptasi ke semua jenis acara dan tempat',
      'Pengalaman internasional',
      'Produksi teknis profesional'
    ],
    zh: [
      '专业弗拉门戈舞蹈和音乐',
      '传统与现代曲目',
      '适应各类活动和场地',
      '国际经验',
      '专业技术制作'
    ],
    ja: [
      'プロフェッショナルなフラメンコダンスと音楽',
      '伝統的および現代的なレパートリー',
      'あらゆる種類のイベントや会場に対応',
      '国際的な経験',
      'プロフェッショナルな技術プロダクション'
    ]
  };

  const { i18n } = useTranslation();
  const currentFeatures = features[i18n.language] || features.es;

  return (
    <section id="about-section" className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Image Side */}
          <div className="relative lg:mt-20">
            <div className="aspect-square overflow-hidden rounded-lg relative">
              <img
                src="/assets/about-image.jpg"
                alt="SarauProject - Artistas flamencos profesionales en escenario"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold sm:text-5xl" style={{color: '#b0b0b0'}}>
                {t('about.title')}
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-gray-300">
              <img 
                src="/assets/sarauproject-logo-texto.png" 
                alt="SarauProject"
                className="inline"
                style={{height: '2em', verticalAlign: 'text-bottom', marginRight: '-12px', marginBottom: '-2px'}}
              /> {t('about.descriptionAfterName')}
            </p>

            <p className="text-lg italic text-gray-400 border-l-4 border-red-600 pl-4 mt-6">
              "{t('about.quote')}"
            </p>

            <div className="space-y-4 pt-4">
              {currentFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-blue-500 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-16 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">25+</div>
                <div className="text-sm text-gray-400 mt-1">{t('about.yearsExperience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-500">200+</div>
                <div className="text-sm text-gray-400 mt-1">{t('about.internationalEvents')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-12">
        <button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })} className="animate-bounce text-gray-400 hover:text-white transition-colors" aria-label="Scroll to contact">
          <ArrowDown className="h-10 w-10" />
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
