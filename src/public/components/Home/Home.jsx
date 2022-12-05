import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImportantPubs } from '../../../redux/publications/publicationsActions'
import { Card } from '../Card'

export default function Home () {
  const dispatch = useDispatch()
  const ImportantPublications = useSelector(state => state.ImportantPublications)

  useEffect(() => {
    dispatch(getImportantPubs())
  }, [])
  return (
    <div className='d-flex justify-content-center'>
      <h1>Home</h1>
      {Array.isArray(ImportantPublications) && ImportantPublications.map(p => (
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
