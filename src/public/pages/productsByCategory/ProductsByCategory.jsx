import { Card, Loading } from '../../components'
import s from './style.module.css'
import { useGetAllProducts } from '@/hooks'
import { Link, useParams } from 'react-router-dom'
import { swallError } from '../../utils/sweetAlerts'

export default function ProductsByCategory () {
  const { category } = useParams()
  const { data, loading, error } = useGetAllProducts(category)

  return (
    <div>
      <h1 className={s.h1Products}>{category}</h1>
      <div className='d-flex flex-wrap mx-md-5 p-md-5 gap-sm-5 gap-4 justify-content-center'>

        {
        loading
          ? <Loading />
          : error
            // eslint-disable-next-line no-undef
            ? swallError('Productos no encontrados')
            : data.map(e =>
              <Link key={e.id} to={`detail/${e.id}`}>
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