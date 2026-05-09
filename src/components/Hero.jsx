import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ onContactClick }) => {
  const { t } = useTranslation();
  
  const scrollToVideos = () => {
    document.getElementById('videos-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full overflow-hidden">
          <img 
            src="/assets/portada.jpg"
            alt="SarauProject - Actuación de flamenco en vivo con baile, cante, guitarra y percusión"
            className="h-full w-full object-cover"
          />
          {/* Overlay negro MUY GRANDE para cubrir TODA la "t" y letras */}
          <div className="absolute bottom-0 left-0 w-[700px] h-[350px] bg-black"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="flex flex-col items-center space-y-6">
            {/* Logo y letras SarauProject */}
            <img 
              src="/assets/letras-sarauproject.png" 
              alt="SarauProject - Espectáculos de Flamenco Profesional"
              className="w-auto h-24 md:h-32 lg:h-40"
            />
            <h2 className="hero-title text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl" style={{color: '#b0b0b0'}}>
              {t('hero.title')}
            </h2>
          </div>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl" style={{color: '#b0b0b0'}}>
            {t('hero.subtitle')}
            <span className="mt-2 block" style={{color: '#b0b0b0'}}>
              {t('hero.tagline')}
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
            <Button
              onClick={scrollToVideos}
              size="lg"
              className="group rounded-full bg-red-600 px-8 py-6 text-base font-semibold uppercase tracking-wider text-white transition-all hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/50"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              {t('hero.watchPerformances')}
            </Button>
            
            <Button
              onClick={onContactClick}
              size="lg"
              variant="outline"
              className="rounded-full border-2 bg-transparent px-8 py-6 text-base font-semibold uppercase tracking-wider transition-all"
              style={{borderColor: '#b0b0b0', color: '#b0b0b0'}}
            >
              {t('hero.requestQuote')}
            </Button>
          </div>

          {/* Features - texto simple con separadores */}
          <div className="pt-6 text-base" style={{color: '#b0b0b0'}}>
            <span>{t('hero.traditionalMusic')}</span>
            <span className="mx-3">/</span>
            <span>{t('hero.professionalArtists')}</span>
            <span className="mx-3">/</span>
            <span>{t('hero.internationalReach')}</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToVideos}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white transition-opacity hover:opacity-70"
        aria-label="Scroll to videos"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};

// Missing import
const Music = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Globe = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default Hero;
