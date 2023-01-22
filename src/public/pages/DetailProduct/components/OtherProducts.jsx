import { Card } from '../../../components'
import { useGetAllProducts } from '@/hooks'
import { Link, useParams } from 'react-router-dom'

export default function OtherProducts () {
  const { category, id } = useParams()

  const { data } = useGetAllProducts(category)

  const products = data.filter(e => e.id !== id)

  return (
    <div className='w-100'>
      <div className='d-flex py-5 gap-5 overflow-auto'>

        {
          products.map(e =>
            <Link key={e.id} to={`/categories/${category}/detail/${e.id}`}>
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
