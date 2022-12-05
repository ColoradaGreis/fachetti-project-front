import style from './headerAdmin.module.css'
import Exit from '@/assets/Exit.png'

export default function HeaderAdmin () {
  return (
    <header className={`container-fluid mx-0 px-0 ${style.header}`}>
      <div className='row h-100 align-items-center'>
        <div className='col-2 offset-1'>
          <p className='mb-0 fs-4'>PANEL DE CONTROL</p>
        </div>
        <div className='col offset-6 '>
          <p className='mb-0 fs-6 font-italic'>CERRAR SESIÓN <img src={Exit} alt='exit' /></p>
        </div>
      </div>
    </header>
  )
}
