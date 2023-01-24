import style from './style.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PublicNameRoutes } from '@/routes'

export default function NotFound () {
  const { t } = useTranslation('public')
  return (
    <section className={style.container}>
      <Link to={PublicNameRoutes.HOME} className={style.links}>
        <span className='fs-2'>{t('notFound.botton')}</span>
      </Link>
    </section>
  )
}
