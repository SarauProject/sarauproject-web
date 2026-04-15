import React from 'react';
import { useTranslation } from 'react-i18next';
import { Music, Clock, Users, Youtube } from 'lucide-react';
import { Card } from './ui/card';

const VideoCard = ({ video, onClick, translatedTitle, translatedDescription, translateInstrument }) => {
  const { t } = useTranslation();
  
  const getCategoryColor = (category) => {
    const colors = {
      Festival: 'bg-violet-600',
      Bodas: 'bg-blue-600',
      Teatro: 'bg-gray-700',
      Corporativo: 'bg-red-700'
    };
    return colors[category] || 'bg-gray-600';
  };

  // Función local para traducir instrumentos si no se pasa como prop
  const localTranslateInstrument = (instrument) => {
    if (translateInstrument) return translateInstrument(instrument);
    
    // Normalizar el instrumento
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

  const handleYoutubeClick = (e) => {
    e.stopPropagation();
    window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank');
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden rounded-lg border-0 bg-black transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      onClick={() => onClick(video)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={video.thumbnail}
          alt={translatedTitle || video.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
      </div>
      
      <div className="space-y-3 bg-gradient-to-b from-black to-gray-900 p-5">
        <h3 className="line-clamp-2 text-lg font-semibold transition-colors group-hover:text-red-500" style={{color: '#b0b0b0'}}>
          {translatedTitle || video.title}
        </h3>
        
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{translateDuration(video.duration)}</span>
          </div>
          <button 
            onClick={handleYoutubeClick}
            className="flex items-center gap-1.5 text-red-500 hover:text-red-400 transition-colors"
          >
            <Youtube className="h-4 w-4" />
            <span>YouTube</span>
          </button>
        </div>
        
        <div className="flex flex-wrap gap-1.5 pt-2">
          {video.instruments.map((instrument, idx) => (
            <span 
              key={idx}
              className="rounded-full bg-gray-800 px-2 py-1 text-xs text-gray-400"
            >
              {localTranslateInstrument(instrument)}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
