import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getData} from '../../utils';
import en from '../languages/en.json';
import ar from '../languages/ar.json';
import {MMKV_KEYS} from '../../constants';
const storedLanguage = getData(MMKV_KEYS.LANGUAGE);

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: storedLanguage ?? 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const isArabic = i18next.language === 'ar';

export default i18next;
