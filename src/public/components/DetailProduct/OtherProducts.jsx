import React from 'react'
// import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import { useGetAllProducts } from '../../../hooks'
// import Loading from '../Loading/Loading.jsx'
import { Link, useParams } from 'react-router-dom'

export default function OtherProducts () {
  const { category } = useParams()
  const { data } = useGetAllProducts(category)

  return (
    <div className='w-100'>
      <div className='d-flex mx-5 p-5 gap-5 overflow-auto'>

        {
          data.map(e =>
            <Link key={e.id} to={`/categories/detail/${e.id}`}>
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
