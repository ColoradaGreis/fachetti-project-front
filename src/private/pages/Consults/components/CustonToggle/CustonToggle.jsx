import { useState, useRef, useEffect } from 'react'
import { urlApi } from '@/api'
import { useAccordionButton } from 'react-bootstrap'
import blueArrow from './assets/blueArrow.png'
import greenArrow from './assets/greenArrow.png'
import style from './style.module.css'
import { SubjetManajerGetCount, subjectManager } from '@/private/services/manager-status'

function CustomToggle ({ eventKey, read, name, date, index, setState, state }) {
  const ref = useRef(false)
  const isChangeSwich = subjectManager.getSubject()
  const [rotate, setRotate] = useState(false)
  const handleClick = useAccordionButton(eventKey, async () => {
    setRotate(!rotate)
    if (state[index]) return
    setState(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
    await urlApi.put(`questions/${eventKey}?readed=true`)
    SubjetManajerGetCount.setContrarySubject()
  }
  )
  useEffect(() => {
    // Si ocurre el evento del swich, reinicio el estado de la flecha
    isChangeSwich.subscribe((value) => {
      if (value !== ref.current) {
        ref.current = value
        setRotate(false)
      }
    })
  })

  return (
    <button
      className='d-flex h-100 w-100 border-0 bkgGray row justify-content-between align-items-center '
      type='button'
      onClick={handleClick}
    >
      <p className='col-3 my-1 px-0'>{name}</p>
      <p className='col-3 my-1 px-0'>{date}</p>
      <img
        src={!read ? greenArrow : blueArrow}
        alt='Arrow'
        className={`${style.icon} ${rotate && style.rotate} col-2 `}
      />
    </button>
  )
}

export default CustomToggle
