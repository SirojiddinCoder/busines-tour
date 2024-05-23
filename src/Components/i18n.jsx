import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector';
import uzTranslation from '../Components/locales/uz.json';
import ruTranslation from '../Components/locales/ru.json';
import enTranslation from '../Components/locales/en.json';

i18next
.use(Backend)
.use(languageDetector)
.use(initReactI18next)
.init({
  falbackLng:'uz',
  lng:i18next.language,
  debug:true,
  resources:{
    uz:{translation:uzTranslation},
    en:{translation:enTranslation},
    ru:{translation:ruTranslation},
  }
})

export default i18next;

