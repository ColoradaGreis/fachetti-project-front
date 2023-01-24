import { useFormik } from 'formik'
import { Card, CustonBotton, SerachAll } from '@/private/components'
import { formPublicationsSchema, postForms, swalErrorOrSuccess, putForms } from '@/private/utilities'
import { PrivateNameRoutes } from '../../../../../routes'
import { useParams } from 'react-router'
import { initialPublicationFormValues } from '../../../../utilities'
import { useEffect } from 'react'

export default function FormCreatePublication ({ edit }) {
  console.log(edit)
  const getInitialValues = async () => {
    return await initialPublicationFormValues(edit, id)
  }
  const { id } = useParams()
  // Inicio Formik
  const {values, handleChange, handleSubmit, setValues, handleBlur, touched, errors, isSubmitting} = useFormik({ // eslint-disable-line
    initialValues: {
      title: '',
      image: ''
    },
    validationSchema: formPublicationsSchema,
    onSubmit: async (values, { resetForm }) => {
      if (!edit) {
        const { message, ok } = await postForms('publications', values)
        if (ok) {
          resetForm()
          swalErrorOrSuccess(`Publicación ${message}`, ok)
        }
        swalErrorOrSuccess(message, ok)
      } else if (edit) {
        const { message, ok } = await putForms('publications', values, id)
        if (ok) {
          swalErrorOrSuccess(`Publicación ${message}`, ok)
        }
        swalErrorOrSuccess(message, ok)
      }
    }

  })
  console.log(values)
  useEffect(() => { getInitialValues().then(data => { setValues(() => data) }) }, [])
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
          <SerachAll route={PrivateNameRoutes.EDIT_PUBLICATIONS} />
        </div>
        <div className='col-6  pe-5'>
          <CustonBotton disabled={isSubmitting} />
        </div>
      </div>
    </form>
  )
}
