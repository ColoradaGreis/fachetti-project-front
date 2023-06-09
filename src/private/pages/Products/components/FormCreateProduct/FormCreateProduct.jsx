import { useFormik } from 'formik'
import style from './style.module.css'
import { useGetAllCategories } from '@/hooks'
import flechas from './assets/flechas.png'
import { Card, CustonBotton, SerachAll } from '@/private/components'
import { formProductSchema, postForms, swalErrorOrSuccess, putForms } from '@/private/utilities'
import { useTranslation } from 'react-i18next'
import { PrivateNameRoutes } from '@/routes'
import { useParams } from 'react-router-dom'
import { initialProductFormValues } from '../../../../utilities'
import { useEffect } from 'react'

export default function FormCreateProduct ({ edit }) {
  const getInitialValues = async () => {
    return await initialProductFormValues(edit, id)
  }
  const { t } = useTranslation('private')
  const { data, loading, error } = useGetAllCategories() // Hook para traer todas las categorias y renderizar los selects
  // Inicio Formik
  const { id } = useParams()
  const { values, handleChange, handleSubmit, setValues, isSubmitting, handleBlur, touched, errors } = useFormik({
    initialValues: {
      name: '',
      image: '',
      description: '',
      categoryId: ''
    },
    validationSchema: formProductSchema,
    onSubmit: async (values, { resetForm }) => {
      if (!edit) {
        const { message, ok } = await postForms('products', values)
        if (ok) {
          resetForm()
          swalErrorOrSuccess(`Producto ${message}`, ok)
        }
        swalErrorOrSuccess(message, ok)
      } else if (edit) {
        const { message, ok } = await putForms('products', values, id)
        if (ok) {
          swalErrorOrSuccess(`Producto ${message}`, ok)
        }
        swalErrorOrSuccess(message, ok)
      }
    }
  })
  useEffect(() => { if (edit)getInitialValues().then(res => setValues(res)) }, [])
  // Fin Formik
  return (
    <form className='row h-100 justify-content-center' onSubmit={handleSubmit}>

      {/* ---------------------------Card------------------------ */}
      <div className='col-6 col-lg-5'>
        <Card
          values={values}
          handleChange={handleChange}
          setValues={setValues}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
        />
      </div>
      {/* --------------------------Fin-Card------------------------ */}
      {/* --------------------------description------------------------ */}
      <div className={`col-5 offset-1 bkgWhite px-5 py-5 mb-2 position-relative ${style.detailsContainer}`}>
        <div className='row'>
          <div className='col-12'>
            <h2 className='bold'>{t('products.details')}</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <textarea
              maxLength={600}
              rows={13}
              name='description'
              id='description'
              placeholder={t('products.placeHolder')}
              className='w-100  textArea'
              onChange={handleChange}
              value={values.description}
              onBlur={handleBlur}
            />
          </div>
        </div>
        {
          touched.description && errors.description && <span className='errorText position-absolute'>{t(errors.description)}</span>
        }
      </div>
      {/* --------------------------Fin-description------------------------ */}

      <div className='row mt-5'>
        {/* --------------------------Select------------------------ */}
        <div className='col-6 position-relative'>
          <label htmlFor='categoryId' className='form-label bold pointer mb-0'>
            <img src={flechas} alt='arrows' className={style.icons} /><span className='text-uppercase'> {t('products.selectTitle')}</span>
          </label>
          {
          (!loading && !error) && (
            <div className='offset-1 col-10 mt-1'>
              <select
                name='categoryId'
                id='categoryId'
                className='w-100 select'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.categoryId}
              >
                <option className='option' hidden defaultValue value=''>{t('utils.select')}</option>
                {
                  data.map(category => (
                    <option className='option' key={category.id} value={category.id}>{category.name}</option>
                  ))
                }
              </select>
            </div>
          )

        }
          {
          touched.categoryId && errors.categoryId && <span className='errorText position-absolute ms-5 mt-2'>{t(errors.categoryId)}</span>
        }
        </div>
        {/* --------------------------Fin-Select------------------------ */}
        {/* --------------------------Search-Icon------------------------ */}
        <div className='col-6'>
          <SerachAll route={PrivateNameRoutes.EDIT_CATEGORIES} />
        </div>
      </div>
      <div className='row  pe-5'>
        <div className='offset-9 col-3 px-0'>
          <CustonBotton disabled={isSubmitting} />
        </div>
      </div>
    </form>
  )
}
