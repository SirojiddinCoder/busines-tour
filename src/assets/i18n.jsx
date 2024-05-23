import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // translate fayllarni backenddan yuklash
  .use(LanguageDetector) // foydalanuvchi tilini aniqlash
  .use(initReactI18next) // React kutubxonasi bilan integratsiya qilish
  .init({
    fallbackLng: 'en', // Default til
    debug: true,
    interpolation: {
      escapeValue: false, // React allaqachon XSS himoya qiladi
    },
  });

export default i18n;
