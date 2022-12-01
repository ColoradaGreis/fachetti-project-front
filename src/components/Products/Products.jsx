import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import s from './Product.module.css'

export default function Products () {
  const categories = useSelector(state => state.categories)
  return (
    <div>
      <h1 className={s.h1Products}>PRODUCTOS</h1>
      <h3 className={s.h3Products}>Nuestro productos</h3>
      {
        Array.isArray(categories) && categories.map(c => (
          <Navigator key={c.id} link={c.name}>
            <Card
              key={c.id}
              id={c.id}
              title={c.name}
              image={c.image}
            />
          </Navigator>
        ))
            }
    </div>
  )
}
