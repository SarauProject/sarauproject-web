import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Music } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

const VideoModal = ({ video, isOpen, onClose, translatedTitle, translatedDescription }) => {
  const { t } = useTranslation();
  
  if (!video) return null;

  // Función para traducir la duración
  const translateDuration = (duration) => {
    if (duration === "1 hora y media") return t('duration.1hourHalf');
    if (duration === "2 horas") return t('duration.2hours');
    if (duration === "1 hora") return t('duration.1hour');
    return duration;
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white pr-8">
            {translatedTitle || video.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {video.category} • {translateDuration(video.duration)}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&vq=hd1080&hd=1`}
              title={translatedTitle || video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
          
          <div className="space-y-3">
            <p className="text-gray-300 leading-relaxed">
              {translatedDescription || video.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {video.instruments.map((instrument, idx) => (
                <span 
                  key={idx}
                  className="rounded-full bg-red-600 px-3 py-1 text-sm font-medium text-white"
                >
                  {translateInstrument(instrument)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
