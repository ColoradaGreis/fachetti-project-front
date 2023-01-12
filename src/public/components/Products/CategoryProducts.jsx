import React from 'react'
// import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import s from './Product.module.css'
import { useGetAllProducts } from '../../../hooks'
import Loading from '../Loading/Loading.jsx'
import { Link, useParams } from 'react-router-dom'

export default function CategoryProducts () {
  const { category } = useParams()
  const { data, loading, error } = useGetAllProducts(category)

  return (
    <div>
      <h1 className={s.h1Products}>{category}</h1>
      {/* <h3 className={s.h3Products}>Nuestros productos</h3> */}
      <div className='d-flex flex-wrap mx-md-5 p-md-5 gap-sm-5 gap-4 justify-content-center'>

        {
        loading
          ? <Loading />
          : error
            ? alert(error) //eslint-disable-line
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
