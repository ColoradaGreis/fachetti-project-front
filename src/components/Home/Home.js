import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/products/productsActions'
import { getPublications } from '../../redux/publications/publicationsActions'
import Card from '../Card/Card'

export default function Home () {
  const dispatch = useDispatch()
  // const publications = useSelector(state => state.publications)
  const products = useSelector(state => state.products.allProducts)

  useEffect(() => {
    dispatch(getPublications())
    dispatch(getProducts())
  }, [])
  return (
    <div className='d-flex justify-content-center'>
      {Array.isArray(products) && products.map(p => (
        <Card
          key={p.id}
          id={p.id}
          title={p.title}
          description={p.description}
          isBanned={p.isBanned}
          isImportant={p.isImportant}
          image={p.image}
        />
      ))}
    </div>
  )
}
