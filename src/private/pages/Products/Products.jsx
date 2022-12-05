import { useState } from 'react'
import style from './style.module.css'
import add from '@/assets/add.png'

export default function Products () {
  const [editing, setEditing] = useState(false) // eslint-disable-line
  const text = editing ? 'Editar' : 'Crear'
  const [creating, setCreating] = useState({
    status: true,
    product: 'Producto',
    category: 'Categoría'
  })
  const handleChange = () => {
    setCreating({
      ...creating,
      status: !creating.status
    })
  }
  return (
    <section className='container-fluid user-select-none '>
      <div className='row bkgWhite w-100'>
        <h2 className='col-12  text-uppercase'>{`${text} ${creating.status ? creating.product : creating.category}`}</h2>
      </div>

      {/* -----------------HEADER------------------------------------ */}
      <div className={`container-fluid bkgGray px-5 py-5 ${style.container}`}>

        <div className={`row ${style.borderBottom}`}>
          <div className='col-12 px-0'>
            <h3 className='bold'>
              {`${text} ${creating.status ? creating.product : creating.category}s`}
            </h3>
          </div>
          <div className='col offset-1 '>
            <h5 className='pointer bold pointer underLineHover' onClick={handleChange}>
              <img src={add} alt='more' className={style.add} />
              {`${text} ${creating.status ? creating.category : creating.product}s`}
            </h5>
          </div>
        </div>
        {/* -----------------FIN-HEADER------------------------------------ */}
        {/* -----------------FORM------------------------------------ */}

      </div>
    </section>
  )
}
