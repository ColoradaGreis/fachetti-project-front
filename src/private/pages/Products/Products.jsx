import { useState } from 'react'
import style from './style.module.css'
import { FormCreateProduct, FormCreateCategori, HeaderProducts } from './components'
import { useTranslation } from 'react-i18next'
import { useParams, useLocation } from 'react-router-dom'

export default function Products () {
  const { pathname } = useLocation()
  const params = useParams()
  const { t } = useTranslation('private')
  const [editing, setEditing] = useState(false) // eslint-disable-line
  const text = editing ? t('utils.edit') : t('utils.create')
  const [creating, setCreating] = useState({
    status: true,
    product: t('products.title'),
    category: t('categories.title')
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
          {
            creating.status
              ? <FormCreateProduct />
              : <FormCreateCategori />
         }
        </div>
      </div>
    </section>
  )
}
