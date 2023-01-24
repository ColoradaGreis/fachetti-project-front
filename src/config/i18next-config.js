import i18next from 'i18next'
import ChainedBackend from 'i18next-chained-backend'
import Languagedetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import HttpBackend from 'i18next-http-backend'

i18next
  .use(ChainedBackend)
  .use(Languagedetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    // ... your i18next config
    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend((lng, ns) => import(`./locales/${lng}/${ns}.json`))
      ],
      backendOptions: [{
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }]
    }
  })
