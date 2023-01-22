import s from './style.module.css'
import { useGetAllCategories } from '@/hooks'
import { Loading, Card } from '../../components'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Categories () {
  const { t } = useTranslation('public')
  const { data, loading, error } = useGetAllCategories()
  // TODO: H1 solo debe estar una vez que sera en la landing Page, modificarlo a otra etiqueta

  return (
    <div>
      <h1 className={s.h1Products}>{t('Products.title')}</h1>
      <h3 className={s.h3Products}>{t('Products.subTitle')}</h3>
      <div className='d-flex flex-wrap mx-md-5 p-md-5 gap-sm-5 gap-4 justify-content-center'>

        {
        loading
          ? <Loading />
          : error
            ? alert(error) //eslint-disable-line
            : data.map(e =>
              <Link key={e.id} to={`/categories/${e.name}`}>
                <Card
                  key={e.id}
                  id={e.id}
                  title={e.name}
                  image={e.image}
                />
              </Link>
            )

        }
      </div>
    </div>
  )
}
