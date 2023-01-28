import s from './News.module.css'

import { Card, Loading } from '../../components'

import { useGetAllPublications } from '@/hooks'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { swallError } from '../../utils/sweetAlerts'

export default function News () {
  const { t } = useTranslation('public')
  const { data, loading, error } = useGetAllPublications()
  const firstNews = data.slice(0, 3)
  const oneNew = firstNews.shift()

  return (
    <div className='justify-content-center m-5 p-5'>
      <h1 className={` ${s.h1Products}`}>{t('Publications.title')}</h1>
      <div className='justify-content-center m-xxl-5 p-xl-5'>

        {
        loading
          ? <Loading />
          : error
            ? swallError('No se encontraron novedades') //eslint-disable-line
            : <div className='d-flex flex-wrap gap-xxl-5 gap-md-4 justify-content-center'>
              <div className=' d-flex flex-wrap gap-xxl-5 gap-md-4 justify-content-between'>
                <div>
                  <Card
                    key={oneNew.id}
                    id={oneNew.id}
                    title={oneNew.title}
                    image={oneNew.image}
                    type='big'
                  />
                </div>
                <div className='d-flex flex-column justify-content-between my-xl-0'>
                  {
                  firstNews.map(e => <Link key={e.id} to={`/publications/${e.id}`}>
                    <Card
                      key={e.id}
                      id={e.id}
                      title={e.title}
                      image={e.image}
                      type='small'
                    />
                  </Link> //eslint-disable-line
                  )
                }
                </div>

              </div>
              <div className='d-flex flex-wrap gap-xxl-5 gap-md-4 mx-xxl-2 justify-content-center'>
                {

               data.map(e =>
                 <Link className='' key={e.id} to={`/publications/${e.id}`}>
                   <Card
                     key={e.id}
                     id={e.id}
                     title={e.title}
                     image={e.image}
                     type='small'
                   />
                 </Link>
               )
                }
              </div>

            </div> //eslint-disable-line

        }
      </div>
    </div>
  )
}
