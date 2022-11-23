import React from 'react'
import logo from '../../assets/Logo.png'
import style from './nav.module.css'
import Navegador from './Navegador'

export default function Nav () {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${style.nav}`}>
      <div className='container-fluid d-flex align-items-center'>
        <Navegador link='/'>
          <img src={logo} alt='logo' className={`navbar-brand${style.img}`} />
        </Navegador>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse justify-content-lg-end' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Navegador link='/home'>INICIO</Navegador>
            </li>
            <li className='nav-item'>
              <Navegador link='/home'>NOTICIAS</Navegador>
            </li>
            <li className='nav-item'>
              <Navegador link='/home'>PRODUCTOS</Navegador>
            </li>
            <li className='nav-item'>
              <Navegador link='/home'>CLIENTES</Navegador>
            </li>
            <li className='nav-item'>
              <Navegador link='/home'>OBRAS</Navegador>
            </li>
            <li className='nav-item'>
              <Navegador link='/'>CONTACTO</Navegador>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
