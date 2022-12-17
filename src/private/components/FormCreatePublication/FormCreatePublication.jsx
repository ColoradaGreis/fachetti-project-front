import { Card, CustonBotton, SerachAll } from '..'
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
          <SerachAll route='/' />
        </div>
        <div className='col-6  pe-5'>
          <CustonBotton disabled={isSubmitting} />
        </div>
      </div>
    </form>
  )
}
