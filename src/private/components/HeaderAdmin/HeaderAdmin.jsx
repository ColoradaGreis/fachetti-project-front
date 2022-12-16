import style from './headerAdmin.module.css'
import Exit from '@/assets/Exit.png'
import { useTranslation } from 'react-i18next'

export default function HeaderAdmin () {
  const { t } = useTranslation('private')
  return (
    <header className={`container-fluid mx-0 px-0 ${style.header}`}>
      <div className='row h-100 align-items-center'>
        <div className='col-2 offset-1'>
          <p className='mb-0 fs-4'>{t('header.title')}</p>
        </div>
        <div className='col offset-6 '>
          <p className='mb-0 fs-6 font-italic'>{t('header.logOut')}<img src={Exit} alt='exit' /></p>
        </div>
      </div>
    </header>
  )
}
