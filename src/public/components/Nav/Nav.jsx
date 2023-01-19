import logo from '@/assets/LogoBlanco.png'
import style from './nav.module.css'
import { AiOutlineMenu } from 'react-icons/ai'

import Navegador from './Navegador'

import { PublicNameRoutes } from '@/routes/routes.name'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'

export default function Nav () {
  const { t } = useTranslation('public')

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
    <>
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
      <Outlet />
      <Footer />
    </>
  )
}
