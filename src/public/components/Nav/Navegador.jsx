import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navegador.module.css'

function Navegador (props) {
  const { link, children } = props

  const active = {
    transition: 'all 0.3s ease',
    borderBottom: '3px solid whitesmoke',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  }

  return (
    <>
      <NavLink
        to={link}
        className={style.navlink}
        style={({ isActive }) =>
          isActive ? active : undefined}
      >
        {children || null}
      </NavLink>
    </>
  )
}

export default Navegador
