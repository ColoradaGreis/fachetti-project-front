import React from 'react'
import { Card } from '../Card'
import s from './News.module.css'
import { useGetAllPublications } from '../../../hooks'
import Loading from '../Loading/Loading.jsx'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function News () {
  const { t } = useTranslation('public')
  const { data, loading, error } = useGetAllPublications()

  return (
    <div>
      <h1 className={s.h1Products}>{t('Publications.title')}</h1>
      <h3 className={s.h3Products}>{t('Publications.subTitle')}</h3>
      <div className='d-flex flex-wrap mx-5 p-5 gap-5 justify-content-center'>

        {
        loading
          ? <Loading />
          : error
            ? alert(error) //eslint-disable-line
            : data.map(e =>
              <Link key={e.id} to={`/publications/${e.id}`}>
                <Card
                  key={e.id}
                  id={e.id}
                  title={e.title}
                  image={e.image}
                />
              </Link>
            )

        }
      </div>
    </div>
  )
}
