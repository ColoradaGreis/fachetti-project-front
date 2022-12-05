import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getAllPublications } from '@/redux/publications/publicationSlice'
import { Card } from '../Card'
import s from './News.module.css'

export default function News () {
  const dispatch = useDispatch()
  const news = useSelector(state => state.publications)

  useEffect(() => {
    dispatch(getAllPublications())
  }, [])
  return (
    <div>
      <h1 className={s.h1News}>Novedades</h1>
      {
        Array.isArray(news) && news.map(n => (
          <Navigate key={n.id} link={n.id}>
            <Card
              key={n.id}
              id={n.id}
              title={n.name}
              image={n.image}
              description={n.description}
            />
          </Navigate>
        ))
            }
    </div>
  )
}
