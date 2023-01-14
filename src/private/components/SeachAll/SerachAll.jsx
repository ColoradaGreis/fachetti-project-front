import { Link } from 'react-router-dom'
import style from './style.module.css'
import search from '@/assets/SearchIcon.png'
import { useTranslation } from 'react-i18next'

export default function SerachAll ({ route }) {
  const { t } = useTranslation('private')
  return (
    <Link to={`/admin${route}`}>
      <img src={search} alt='search' className={style.icon} /><span className=' text-uppercase black'> {t('utils.searchAll')}</span>
    </Link>
  )
}
