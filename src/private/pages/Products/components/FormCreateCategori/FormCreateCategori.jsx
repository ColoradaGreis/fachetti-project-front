import { useFormik } from 'formik'
import { Card, SerachAll, CustonBotton } from '@/private/components'
import { formCategorySchema, postForms, swalErrorOrSuccess } from '@/private/utilities'

export default function FormCreateCategori () {
  // Inicio Formik
  const {values, handleChange, handleSubmit, setValues, handleBlur, touched, errors, isSubmitting} = useFormik({ // eslint-disable-line
    initialValues: {
      name: '',
      image: ''
    },
    validationSchema: formCategorySchema,
    onSubmit: async (values, { resetForm }) => {
      const { message, ok } = await postForms('categories', values)
      if (ok) {
        resetForm()
        swalErrorOrSuccess(`Categoría ${message}`, ok)
      }
      if (!ok) {
        swalErrorOrSuccess(message, ok)
      }
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
          <SerachAll route='/' />
        </div>
        <div className='col-6  pe-5'>
          <CustonBotton disabled={isSubmitting} />
        </div>
      </div>
    </form>
  )
}
