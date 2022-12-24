import { FormCreatePublication } from './components'
import style from './style.module.css'

export default function Publications () {
  return (
    <section className='container-xl user-select-none '>

      {/* -----------------Title------------------------------------ */}
      <div className='row bkgWhite w-100'>
        <h2 className='col-12  text-uppercase'>PUBLICACIONES</h2>
      </div>
      {/* -----------------Fin-Title------------------------------------ */}
      <div className={`container bkgGray px-5 py-5 ${style.container}`}> {/* Container padre */}
        {/* -----------------HEADER------------------------------------ */}
        <div className={`row ${style.borderBottom}`}>
          <div className='col-12 px-0'>
            <h3 className='bold'>
              CREAR PUBLICACIÓN
            </h3>
          </div>
        </div>
        {/* -----------------FIN-HEADER------------------------------------ */}

        {/* -----------------FORM------------------------------------ */}
        <div className={`container-fluid mt-5 ${style.containerBody}`}>
          <FormCreatePublication />
        </div>
      </div>
    </section>
  )
}
