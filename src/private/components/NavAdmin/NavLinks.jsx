import { NavLink } from 'react-router-dom'
import { PrivateNameRoutes } from '@/routes'
import style from './navAdmin.module.css'
import { useTranslation } from 'react-i18next'

export const activeStyle = {
  textDecoration: 'underline',
  borderLeft: '7px solid #F2F2F2',
  color: '#fff'
}

export default function NavLinks () {
  const { t } = useTranslation('private')
  // Agregar Rutas nuevas aqui en el array
  const routes = [
    { name: t('sidebar.consults'), path: PrivateNameRoutes.CONSULTS },
    { name: t('sidebar.products'), path: PrivateNameRoutes.PRODUCTS },
    { name: t('sidebar.publications'), path: PrivateNameRoutes.PUBLICATIONS }
  ]
  // name es lo que ve el usuario
  // path es la ruta a la que se dirige
  return (
    <>
      {routes.map((link, index) => (
        <div className='col-12 w-100 d-flex align-items-center px-0' key={index}>
          <NavLink
            key={index}
            to={link.path}
            className={`d-flex align-items-center white w-100 nav-link ps-5 text-uppercase  ${style.link} pointer`}
            style={({ isActive }) =>
              isActive ? activeStyle : undefined}
          >{link.name}
          </NavLink>
        </div>
      ))}
    </>
  )
}
