import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPublications } from '../../redux/publications/publicationSlice'
import Card from '../Card/Card'

export default function News () {
  const dispatch = useDispatch()
  const news = useSelector(state => state.publications)

  useEffect(() => {
    dispatch(getAllPublications())
  }, [])
  return (
    <div>
      <h1>Novedades</h1>
      {
        Array.isArray(news) && news.map(n => (
          <Navigator key={n.id} link={n.name}>
            <Card
              key={n.id}
              id={n.id}
              title={n.name}
              image={n.image}
              description={n.description}
            />
          </Navigator>
        ))
            }
    </div>
  )
}
