import s from './News.module.css'

import { Card, Loading } from '../../components'

import { useGetAllPublications } from '@/hooks'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function News () {
  const { t } = useTranslation('public')
  const { data, loading, error } = useGetAllPublications()
  const firstNews = data.slice(0, 3)
  const oneNew = firstNews.shift()

  // TODO: Modificar alert por sweetalert

  return (
    <div className='justify-content-center m-5 p-5'>
      <h1 className={` ${s.h1Products}`}>{t('Publications.title')}</h1>
      <div className='justify-content-center m-5 p-5'>

        {
        loading
          ? <Loading />
          : error
            ? alert(error) //eslint-disable-line
            : <div className='d-flex flex-wrap gap-5'>
              <div className=' d-flex flex-wrap gap-5 justify-content-between'>
                <div>
                  <Card
                    key={oneNew.id}
                    id={oneNew.id}
                    title={oneNew.title}
                    image={oneNew.image}
                    type='big'
                  />
                </div>
                <div className='d-flex flex-column gap-5 justify-content-between'>
                  {
                  firstNews.map(e => <Link className='gap-5' key={e.id} to={`/publications/${e.id}`}>
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
              <div className='d-flex flex-wrap gap-5 mx-2 justify-content-start'>
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
