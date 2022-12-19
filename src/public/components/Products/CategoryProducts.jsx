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
  console.log('esta es la data que me llega', data)
  console.log(error)

  return (
    <div>
      <h1 className={s.h1Products}>Acá hay sólo productos de una categoría</h1>
      <h3 className={s.h3Products}>Nuestros productos</h3>
      <div className='d-flex flex-wrap mx-5 p-5 gap-5 justify-content-center'>

        {
        loading
          ? <Loading />
          : error
            ? console.log(error) //eslint-disable-line
            : data.map(e =>
              <Link key={e.id} to={`categories/detail/${e.id}`}>
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
