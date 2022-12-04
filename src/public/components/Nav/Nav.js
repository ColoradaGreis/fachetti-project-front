import React from 'react'
import logo from '../../assets/LogoBlanco.png'
import style from './nav.module.css'
import Navegador from './Navegador'
import { AiOutlineMenu } from 'react-icons/ai' // eslint-disable-line
import { PublicNameRoutes } from '../../../routes'

// Colocar aqui las nuevas rutas
const routes = [
  { name: 'INICIO', path: PublicNameRoutes.HOME },
  { name: 'CLIENTES', path: PublicNameRoutes.CLIENTS },
  { name: 'PRODUCTOS', path: PublicNameRoutes.PRODUCTS },
  { name: 'NOTICIAS', path: PublicNameRoutes.NEWS },
  { name: 'CONTACTO', path: PublicNameRoutes.CONTACT },
  { name: 'OBRAS', path: PublicNameRoutes.WORKS }
]

export default function Nav () {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${style.nav}`}>
      <div className='container-fluid d-flex align-items-center'>
        <Navegador link='/'>
          <img src={logo} alt='logo' className={`${style.imgLogo}`} />
        </Navegador>
        <button className={`${style.button} d-lg-none`} type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className={style.spanToggle}><AiOutlineMenu color='white' /></span>
        </button>
        <div className='collapse navbar-collapse justify-content-lg-end' id='navbarNav'>
          <ul className='navbar-nav align-items-center'>

            {routes.map((route, index) => (
              <li className='nav-item' key={index}>
                <Navegador key={index} link={route.path}>{route.name}</Navegador>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  )
}
