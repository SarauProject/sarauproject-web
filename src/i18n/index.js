import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import de from './locales/de.json';
import pl from './locales/pl.json';
import tr from './locales/tr.json';
import hu from './locales/hu.json';
import ru from './locales/ru.json';
import id from './locales/id.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';

const resources = {
  es: { translation: es },
  en: { translation: en },
  fr: { translation: fr },
  it: { translation: it },
  de: { translation: de },
  pl: { translation: pl },
  tr: { translation: tr },
  hu: { translation: hu },
  ru: { translation: ru },
  id: { translation: id },
  zh: { translation: zh },
  ja: { translation: ja }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage']
    }
  });

export default i18n;

export const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' }
];
