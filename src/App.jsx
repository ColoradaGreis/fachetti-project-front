import { AppRoutes } from './routes'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import globalEn from './translations/en/global.json'
import globalEs from './translations/es/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    en: {
      global: globalEn // 'global' is our custom namespace
    },
    es: {
      global: globalEs
    }
  }
})

function App () {
  return (
    <I18nextProvider i18n={i18next}>
      <div className=' container-fluid ms-0 me-0 ps-0 pe-0 App '>
        <AppRoutes />
      </div>
    </I18nextProvider>
  )
}

export default App
