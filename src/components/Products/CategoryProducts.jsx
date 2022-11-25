import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsByCategories } from '../../redux/products/productsActions'
import Card from '../Card/Card'

export default function CategoryProduct () {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(getProductsByCategories(params.name))
  })
  return (
    <div>
      <h1>Nuestros Productos</h1>
      <h3>{params.name}</h3>
      {
        Array.isArray(products) && products.map(p => (
          <Card
            key={p.id}
            id={p.id}
            name={p.name}
            description={p.description}
            image={p.image}
          />
        ))
      }
    </div>
  )
}
