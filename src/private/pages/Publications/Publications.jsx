import { useState } from 'react'
import { FormCreatePublication } from './components'
import style from './style.module.css'
import { useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'

export default function Publications () {
  const { t } = useTranslation('private')
  const { pathname } = useLocation()
  const isEdit = pathname.includes('put')
  const [editing, setEditing] = useState(isEdit) // eslint-disable-line no-unused-vars

  return (
    <section className='container-xl user-select-none '>

      {/* -----------------Title------------------------------------ */}
      <div className='row bkgWhite w-100'>
        <h2 className='col-12  text-uppercase'>{t('publications.title')}</h2>
      </div>
      {/* -----------------Fin-Title------------------------------------ */}
      <div className={`container bkgGray px-5 py-5 ${style.container}`}> {/* Container padre */}
        {/* -----------------HEADER------------------------------------ */}
        <div className={`row ${style.borderBottom}`}>
          <div className='col-12 px-0'>
            <h3 className='bold text-uppercase'>
              {editing ? t('publications.edit') : t('publications.create')}
            </h3>
          </div>
        </div>
        {/* -----------------FIN-HEADER------------------------------------ */}

        {/* -----------------FORM------------------------------------ */}
        <div className={`container-fluid mt-5 ${style.containerBody}`}>
          <FormCreatePublication edit={editing} />
        </div>
      </div>
    </section>
  )
}
