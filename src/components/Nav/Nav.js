import React from 'react'
import logo from '../../assets/Logo.png'
import style from './nav.module.css'
import Navegador from './Navegador'
import { AiOutlineMenu } from 'react-icons/ai' // eslint-disable-line

export default function Nav () {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${style.nav}`}>
      <div className='container-fluid d-flex align-items-center'>
        <Navegador link='/'>
          <img src={logo} alt='logo' className={`${style.imgLogo}`} />
        </Navegador>
        <button className={`${style.button} d-lg-none`} type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          {/* <span className='navbar-toggler-icon' /> */}
          <span><AiOutlineMenu /></span>
        </button>
        <div className='collapse navbar-collapse justify-content-lg-end' id='navbarNav'>
          <ul className='navbar-nav align-items-center'>
            <li className='nav-item'>
              <Navegador link='/'>INICIO</Navegador>
            </li>
            <li className='nav-item'>
              <Navegador link='/news'>NOTICIAS</Navegador>
            </li>
            <li className='nav-item'>
              <Navegador link='/products'>PRODUCTOS</Navegador>
            </li>
            <li className='nav-item'>
              <Navegador link='/clients'>CLIENTES</Navegador>
            </li>
            <li className='nav-item'>
              <Navegador link='/works'>OBRAS</Navegador>
            </li>
            <li className='nav-item'>
              <Navegador link='/contact'>CONTACTO</Navegador>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
