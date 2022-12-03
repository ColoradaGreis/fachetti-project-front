import { NavLink } from 'react-router-dom'
import { PrivateNameRoutes } from '../../routes/routes.name'
import style from './navAdmin.module.css'

export const activeStyle = {
  textDecoration: 'underline',
  borderLeft: '7px solid #F2F2F2',
  color: '#fff'
}
// Agregar Rutas nuevas aqui en el array
const routes = [
  { name: 'TABLERO', path: PrivateNameRoutes.HOME },
  { name: 'EDICIÓN', path: PrivateNameRoutes.EDIT }
]
// name es lo que ve el usuario
// path es la ruta a la que se dirige

export default function NavLinks () {
  return (
    <>
      {routes.map((link, index) => (
        <div className='col-12 w-100 d-flex align-items-center px-0' key={index}>
          <NavLink
            key={index}
            to={link.path}
            className={`d-flex align-items-center white w-100 nav-link ps-5  ${style.link} pointer`}
            style={({ isActive }) =>
              isActive ? activeStyle : undefined}
          >{link.name}
          </NavLink>
        </div>
      ))}
    </>
  )
}
