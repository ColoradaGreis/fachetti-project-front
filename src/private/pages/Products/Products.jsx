import { useState } from 'react'
import style from './style.module.css'
import { FormCreateProduct } from '../../components'
import HeaderProducts from './HeaderProducts'

export default function Products () {
  const [editing, setEditing] = useState(false) // eslint-disable-line
  const text = editing ? 'Editar' : 'Crear'
  const [creating, setCreating] = useState({
    status: true,
    product: 'Producto',
    category: 'Categoría'
  })

  return (
    <section className='container-xl user-select-none '>

      {/* -----------------Title------------------------------------ */}
      <div className='row bkgWhite w-100'>
        <h2 className='col-12  text-uppercase'>{`${text} ${creating.status ? creating.product : creating.category}`}</h2>
      </div>
      {/* -----------------Fin-Title------------------------------------ */}
      <div className={`container bkgGray px-5 py-5 ${style.container}`}> {/* Container padre */}
        {/* -----------------HEADER------------------------------------ */}
        <HeaderProducts creating={creating} setCreating={setCreating} editing={editing} text={text} />
        {/* -----------------FIN-HEADER------------------------------------ */}

        {/* -----------------FORM------------------------------------ */}
        <div className={`container-fluid mt-5 ${style.containerBody}`}>
          <FormCreateProduct />
        </div>
      </div>
    </section>
  )
}
