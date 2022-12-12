import style from './style.module.css'
import { useFormik } from 'formik'
import { useGetAllCategories } from '../../../hooks'
import flechas from '@/assets/flechas.png'
import search from '@/assets/SearchIcon.png'
import { Card } from '../Card'
import { Link } from 'react-router-dom'

export default function FormCreateProduct () {
  const { data, loading, error } = useGetAllCategories() // Hook para traer todas las categorias y renderizar los selects

  // Inicio Formik
  const {values, handleChange, handleSubmit, setValues} = useFormik({ // eslint-disable-line
    initialValues: {
      name: '',
      image: '',
      details: '',
      categoryId: ''
    },
    onSubmit: values => {
      console.log(values)
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
        />
      </div>
      {/* --------------------------Fin-Card------------------------ */}
      {/* --------------------------Details------------------------ */}
      <div className={`col-5 offset-1 bkgWhite px-5 py-5 mb-2 ${style.detailsContainer}`}>
        <div className='row'>
          <div className='col-12'>
            <h2 className='bold'>Texto Detalle:</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <textarea
              maxLength={200}
              name='details'
              id='details'
              placeholder='Escribe aqui el detalle del producto..'
              className='w-100  textArea'
              onChange={handleChange}
              value={values.details}
            />
          </div>
        </div>

      </div>
      {/* --------------------------Fin-Details------------------------ */}

      <div className='row mt-5'>
        {/* --------------------------Select------------------------ */}
        <div className='col-6'>
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
              >
                <option hidden defaultValue>Seleccionar</option>
                {
                  data.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))
                }
              </select>
            </div>
          )
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
          <button>GUARDAR</button>
        </div>
      </div>
    </form>
  )
}
