import { useTranslation } from 'react-i18next'
import style from './style.module.css'

export default function FooterSettings () {
  const { t, i18n } = useTranslation('private')

  const handleLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('es')
    } else {
      i18n.changeLanguage('en')
    }
  }
  return (
    <div className='container mx-0 px-0 py-5'>
      <div className='row'>

        <div className='offset-1 col-3'>
          <div className='row }'>
            <h2 className='col-12 px-0 bold pb-2'>{t('settings.footerSettings.title')}</h2>
            <p className={`col-12 mb-0 px-0 ${style.underLine}`}>{t('settings.footerSettings.language')}</p>
          </div>
        </div>

        <div className='col-3'>
          <button className='btn btn-light' onClick={handleLanguage}>{t('settings.footerSettings.button')}</button>
        </div>
      </div>
    </div>
  )
}
