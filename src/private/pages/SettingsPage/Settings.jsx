import { useTranslation } from 'react-i18next'
import { HeaderSettings, FooterSettings } from './components'
import style from './style.module.css'

export default function Settings () {
  const { t } = useTranslation('private')
  return (
    <div>
      <h1>{t('settings.title')}</h1>
      <div className={`containter mx-0 px-0 ${style.underBorder}`}>
        <HeaderSettings />
      </div>
      <div className={`containter mx-0 px-0 ${style.underBorder}`}>
        <FooterSettings />
      </div>
    </div>
  )
}
