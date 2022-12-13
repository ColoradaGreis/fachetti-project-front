import { Link } from 'react-router-dom'
import search from '@/assets/SearchIcon.png'
import { Card } from '..'
import style from './style.module.css'
import { useFormik } from 'formik'
import { urlApi } from '@/api'

export default function FormCreateCategori () {
  // Inicio Formik
  const {values, handleChange, handleSubmit, setValues, handleBlur, touched, errors} = useFormik({ // eslint-disable-line
    initialValues: {
      name: '',
      image: ''
    },
    onSubmit: async values => {
      const res = await urlApi.post('categories', values)
      console.log(res)
    }
  })
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

      <div className='row mt-5'>
        {/* --------------------------Search-Icon------------------------ */}
        <div className='col-6'>
          <Link to='/'>
            <img src={search} alt='search' className={style.icons} /><span className='black'> BUSCAR PRODUCTOS</span>
          </Link>
        </div>
        <div className='col-6  pe-5'>
          <button>GUARDAR</button>
        </div>
      </div>
    </form>
  )
}
