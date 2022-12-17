import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import Languagedetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18next
  .use(Backend)
  .use(Languagedetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: 'http://127.0.0.1:5173/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })
