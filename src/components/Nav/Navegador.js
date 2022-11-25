import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import style from './Navegador.module.css'

function Navegador (props) {
  const { link, span, children } = props
  const location = useLocation()

  return (
    <>
      <NavLink
        to={link}
        className={`${location.pathname === link && style.navlinkActive} ${style.navlink}  `}
      >
        {span ? <span className={style.span}>{span}</span> : null}
        {children || null}
      </NavLink>
    </>
  )
}

export default Navegador
