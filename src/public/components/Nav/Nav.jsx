import React from 'react'
import logo from '@/assets/LogoBlanco.png'
import style from './nav.module.css'
import Navegador from './Navegador'
import { AiOutlineMenu } from 'react-icons/ai' // eslint-disable-line
import { PublicNameRoutes } from '@/routes/routes.name'
import { useTranslation } from 'react-i18next'

export default function Nav () {
  const { t, i18n } = useTranslation('global')

  // Colocar aqui las nuevas rutas
  const routes = [
    { name: t('nav.home'), path: PublicNameRoutes.HOME },
    { name: t('nav.clients'), path: PublicNameRoutes.CLIENTS },
    { name: t('nav.products'), path: PublicNameRoutes.CATEGORIES },
    { name: t('nav.news'), path: PublicNameRoutes.NEWS },
    { name: t('nav.contact'), path: PublicNameRoutes.CONTACT },
    { name: t('nav.works'), path: PublicNameRoutes.WORKS }
  ]

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
          <div className='nav-item dropdown'>
            <div className={`nav-link dropdown-toggle noStyle white ${style.dropdown}`} id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
              {t('nav.idioma')}
            </div>
            <ul className='dropdown-menu ' aria-labelledby='navbarDropdown'>
              <li><button onClick={() => i18n.changeLanguage('en')} className='dropdown-item '>{t('nav.english')}</button></li>
              <li><button onClick={() => i18n.changeLanguage('es')} className='dropdown-item'>{t('nav.spanish')}</button></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
