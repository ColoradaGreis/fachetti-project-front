import style from './style.module.css'
import { useFormik } from 'formik'
import { useGetAllCategories } from '../../../hooks'
import flechas from '@/assets/flechas.png'
import search from '@/assets/SearchIcon.png'
import { Card } from '../Card'
import { Link } from 'react-router-dom'
import { formProductSchema, postForms } from '../../utilities'

export default function FormCreateProduct () {
  const { data, loading, error } = useGetAllCategories() // Hook para traer todas las categorias y renderizar los selects

  // Inicio Formik
  const {values, handleChange, handleSubmit, setValues, isSubmitting, handleBlur,touched, errors} = useFormik({ // eslint-disable-line
    initialValues: {
      name: '',
      image: '',
      description: '',
      categoryId: ''
    },
    validationSchema: formProductSchema,
    onSubmit: async (values, { resetForm }) => {
      const { message, ok } = await postForms('products', values)
      if (ok) {
        resetForm()
        alert(`Producto ${message}`) // eslint-disable-line
      }
      if(!ok) alert(`message`) // eslint-disable-line
    }
  })
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
            <h2 className='bold'>Texto Detalle:</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <textarea
              maxLength={600}
              rows={13}
              name='description'
              id='description'
              placeholder='Escribe aqui el detalle del producto..'
              className='w-100  textArea'
              onChange={handleChange}
              value={values.description}
              onBlur={handleBlur}
            />
          </div>
        </div>
        {
          touched.description && errors.description && <span className='errorText position-absolute'>{errors.description}</span>
        }
      </div>
      {/* --------------------------Fin-description------------------------ */}

      <div className='row mt-5'>
        {/* --------------------------Select------------------------ */}
        <div className='col-6 position-relative'>
          <label htmlFor='categoryId' className='form-label bold pointer mb-0'>
            <img src={flechas} alt='arrows' className={style.icons} /><span> SELECCIONAR UNA CATEGORÍA</span>
          </label>
          {
          (!loading && !error) && (
            <div className='offset-1 col-10 mt-1'>
              <select
                name='categoryId'
                id='categoryId'
                className='w-100'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.categoryId}
              >
                <option hidden defaultValue value=''>Seleccionar</option>
                {
                  data.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))
                }
              </select>
            </div>
          )
        }
          {
          touched.categoryId && errors.categoryId && <span className='errorText position-absolute ms-5 mt-2'>{errors.categoryId}</span>
        }
        </div>
        {/* --------------------------Fin-Select------------------------ */}
        {/* --------------------------Search-Icon------------------------ */}
        <div className='col-6'>
          <Link to='/'>
            <img src={search} alt='search' className={style.icons} /><span className='black'> BUSCAR PRODUCTOS</span>
          </Link>
        </div>
      </div>
      <div className='row  pe-5'>
        <div className='offset-9 col-3 px-0'>
          <button type='submit' disabled={isSubmitting}>GUARDAR</button>
        </div>
      </div>
    </form>
  )
}
