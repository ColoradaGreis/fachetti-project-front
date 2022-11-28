import React from 'react'
import Card from '../Card/Card'
import s from './home.module.css'

export default function Home () {
  return (
    <div className={s.homeContainer}>
      <Card />
    </div>
  )
}
