import { useState } from 'react'
import { useAccordionButton } from 'react-bootstrap'
import blueArrow from './blueArrow.png'
import greenArrow from './greenArrow.png'
import style from './style.module.css'

export function CustomToggle ({ eventKey, read, name, date, index, setState, state }) {
  const [rotate, setRotate] = useState(false)
  const handleClick = useAccordionButton(eventKey, () => {
    setRotate(!rotate)
    if (state[index]) return
    setState(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }
  )

  return (
    <button
      className='d-flex justify-content-between align-items-center h-100 w-100 border-0'
      type='button'
      onClick={handleClick}
    >
      <p>{name}</p>
      <p>{date}</p>
      <img
        src={!read ? greenArrow : blueArrow}
        alt='Arrow'
        className={`${style.icon} ${rotate && style.rotate} `}
      />
    </button>
  )
}
