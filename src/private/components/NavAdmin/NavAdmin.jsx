import { Outlet } from 'react-router-dom'
import style from './navAdmin.module.css'
import userExample from '@/assets/userExample.png'
import Engran from '@/assets/Engran.png'
import Notificacion from '@/assets/Notificacion.png'
import NavLinks from './NavLinks'

export default function NavAdmin () {
  return (
    <div className='container-fluid mx-0 px-0'>

      {/* --------------------------------------NAV-------------------------------------------------------------- */}

      <div className='row mx-0'>
        <nav className='col-3'>{/* La nav siempre ocupara la cantidad de col que aqui le digamos */}

          <div className={`row  align-items-center bkgGray ${style.containerProfile}`}>
            <div className='col-12 text-center'>
              <img src={userExample} alt='foto' />
              <h3 className='fw-bold mt-2 mb-0'>User Name</h3>
              <p>Asesor</p>
            </div>
          </div>

          <div className='row bkgGray align-items-center'>
            <div className={`col-6 text-center ${style.borderRight}`}>
              <img src={Notificacion} alt='icono' className='my-2' />
            </div>
            <div className={`col-6 text-center ${style.borderLeft}`}>
              <img src={Engran} alt='icono' className='my-2' />
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
