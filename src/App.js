import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoCard from './components/VideoCard';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { mockVideos, categories } from './data/mock';
import { Music, Clock } from 'lucide-react';

// Admin pages
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function HomePage() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Track which video is currently playing (by id)
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // Función para obtener el título/descripción traducido del video
  const getVideoTranslation = (videoId, field) => {
    const key = `videos.video${videoId}.${field}`;
    const translation = t(key);
    // Si no hay traducción, devolver el valor por defecto
    return translation !== key ? translation : null;
  };

  // Función para traducir instrumentos
  const translateInstrument = (instrument) => {
    const normalized = instrument.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(' ', '');
    const instrumentMap = {
      'cante': 'cante',
      'baile': 'baile', 
      'guitarra': 'guitarra',
      'percusion': 'percusion',
      'bajo': 'bajo',
      'cantex2': 'cantex2',
      'bailex2': 'bailex2'
    };
    const key = instrumentMap[normalized] || normalized;
    const translationKey = `videos.instruments.${key}`;
    const translation = t(translationKey);
    return translation !== translationKey ? translation : instrument;
  };

  // Función para traducir la duración
  const translateDuration = (duration) => {
    if (duration === "1 hora y media") return t('duration.1hourHalf');
    if (duration === "2 horas") return t('duration.2hours');
    if (duration === "1 hora") return t('duration.1hour');
    return duration;
  };

  const filteredVideos = selectedCategory === 'all'
    ? mockVideos
    : mockVideos.filter(video => video.category === selectedCategory);

  // When clicking a video, toggle play state
  const handleVideoClick = (video) => {
    if (playingVideoId === video.id) {
      // If clicking the same video, stop it
      setPlayingVideoId(null);
    } else {
      // Play this video (stops any other)
      setPlayingVideoId(video.id);
    }
  };

  const handleContactClick = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App min-h-screen bg-black">
      <Header onContactClick={handleContactClick} />
      
      <Hero onContactClick={handleContactClick} />

      {/* Videos Section */}
      <section id="videos-section" className="bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold sm:text-5xl" style={{color: '#b0b0b0'}}>
              {t('videos.title')}
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              {t('videos.subtitle')}
            </p>
          </div>

          {/* Videos with Individual Descriptions */}
          <div className="flex flex-col gap-4">
            {filteredVideos.map((video, index) => (
              <div key={video.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left: Video Card or Player */}
                  <div>
                    {playingVideoId === video.id ? (
                      // Show YouTube player inline
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&vq=hd1080&hd=1`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0"
                        />
                      </div>
                    ) : (
                      // Show video card thumbnail
                      <VideoCard
                        video={video}
                        onClick={handleVideoClick}
                        translatedTitle={getVideoTranslation(video.id, 'title')}
                        translatedDescription={getVideoTranslation(video.id, 'description')}
                        translateInstrument={translateInstrument}
                      />
                    )}
                  </div>

                  {/* Right: Video Description */}
                  <div className="border-l border-gray-700 pl-8">
                    {/* Línea horizontal desde el ángulo hasta el final */}
                    <div className="border-t border-gray-700 -ml-8 mb-4 w-full"></div>
                    <h3 className="text-2xl font-bold" style={{color: '#b0b0b0'}}>
                      {getVideoTranslation(video.id, 'title') || video.title}
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed mt-4">
                      {getVideoTranslation(video.id, 'description') || video.description}
                    </p>
                    
                    <div className="mt-6">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock className="h-5 w-5" />
                        <span>{translateDuration(video.duration)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredVideos.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No videos available
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <AboutSection />
      
      <ContactForm />
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
