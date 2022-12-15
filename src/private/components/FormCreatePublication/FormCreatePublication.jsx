import { Link } from 'react-router-dom'
import search from '@/assets/SearchIcon.png'
import { Card } from '..'
import style from './style.module.css'
import { useFormik } from 'formik'
import { formPublicationsSchema, postForms, swalErrorOrSuccess } from '../../utilities'

export default function FormCreatePublication () {
  // Inicio Formik
  const {values, handleChange, handleSubmit, setValues, handleBlur, touched, errors, isSubmitting} = useFormik({ // eslint-disable-line
    initialValues: {
      title: '',
      image: ''
    },
    validationSchema: formPublicationsSchema,
    onSubmit: async (values, { resetForm }) => {
      const { message, ok } = await postForms('publications', values)
      if (ok) {
        resetForm()
        swalErrorOrSuccess(`Publicación ${message}`, ok)
      }
      swalErrorOrSuccess(message, ok)
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
          title
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
          <button type='submit' disabled={isSubmitting} className='button'>{!isSubmitting ? 'GUARDAR' : 'GUARDANDO...'}</button>
        </div>
      </div>
    </form>
  )
}
