import { useState, useRef, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import style from './navAdmin.module.css'
import Engran from '@/assets/Engran.png'
import Notificacion from '@/assets/Notificacion.png'
import NavLinks from './NavLinks'
import { getCountMessages } from '../../utilities'
import { SubjetManajerGetCount } from '../../services/manager-status'
import { PrivateNameRoutes } from '../../../routes'
import { useUserContext } from '@/context'
import { firstLetterUppercase } from '@/utils'

export default function NavAdmin () {
  const { userContextValue } = useUserContext()
  const { fullName } = userContextValue
  const { pathname } = useLocation()
  const noRouteRender = `/admin/${PrivateNameRoutes.CONSULTS}`
  const ref = useRef(false)
  const subject = SubjetManajerGetCount.getSubject()
  const [cant, setCant] = useState(0)
  useEffect(() => {
    getCountMessages().then((value) => {
      setCant(value)
    })
  }, [])
  useEffect(() => {
    subject.subscribe((value) => {
      if (ref.current !== value) {
        ref.current = value
        getCountMessages().then((value) => {
          setCant(value)
        })
      }
    })
  }, [])
  return (
    <div className='container-fluid mx-0 px-0'>

      {/* --------------------------------------NAV-------------------------------------------------------------- */}

      <div className='row mx-0'>
        <nav className='col-3'>{/* La nav siempre ocupara la cantidad de col que aqui le digamos */}

          <div className={`row  align-items-center bkgGray ${style.containerProfile}`}>
            <div className='col-12 text-center'>
              <img src={userContextValue.profileImage} alt='foto' className={style.profileImage} />
              <h3 className='fw-bold mt-2 mb-0'>{firstLetterUppercase(fullName)}</h3>
              <p>{firstLetterUppercase('admin')}</p>
            </div>
          </div>

          <div className='row bkgGray align-items-center'>
            <div className={`col-6 text-center ${style.borderRight}`}>
              <Link to={PrivateNameRoutes.CONSULTS} className='position-relative'>
                {
                (pathname !== noRouteRender && cant) && <span className={`position-absolute badge rounded-pill bg-danger ${style.badge}`}>{cant}</span>
              }
                <img src={Notificacion} alt='icono' className='my-2 pointer' />

              </Link>
            </div>

            <div className={`col-6 text-center ${style.borderLeft}`}>
              <Link to={PrivateNameRoutes.SETTINGS}>
                <img src={Engran} alt='icono' className='my-2 opacity pointer' />
              </Link>
            </div>

          </div>

          <div className='row bkgBlue pt-4  fs-5 '>
            <NavLinks />{/* Aqui se renderizan los links */}
          </div>

        </nav>

        {/* ------------------------------------OTROS COMPONENTES------------------------------------------------- */}
        <div className='col-9 px-5 py-5'> {/* Aqui se renderizaran las direrentes rutas dentro de NavAdmin */}
          <Outlet />{/* Gracias a este componente, que deja un lugar para renderizar */}
        </div>
      </div>
    </div>

  )
}
