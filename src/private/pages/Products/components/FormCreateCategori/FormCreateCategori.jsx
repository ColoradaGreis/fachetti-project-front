import { useFormik } from 'formik'
import { Card, SerachAll, CustonBotton } from '@/private/components'
import { formCategorySchema, postForms, swalErrorOrSuccess, putForms } from '@/private/utilities'
import { PrivateNameRoutes } from '../../../../../routes'
import { initialCategoryFormValues } from '../../../../utilities'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function FormCreateCategori ({ edit }) {
  const getInitialValues = async () => {
    return await initialCategoryFormValues(edit, id)
  }
  // Inicio Formik
  const { id } = useParams()
  const {values, handleChange, handleSubmit, setValues, handleBlur, touched, errors, isSubmitting} = useFormik({ // eslint-disable-line
    initialValues: { name: '', image: '' },
    validationSchema: formCategorySchema,
    onSubmit: async (values, { resetForm }) => {
      if (!edit) {
        const { message, ok } = await postForms('categories', values)
        if (ok) {
          resetForm()
          swalErrorOrSuccess(`Categoría ${message}`, ok)
        }
        if (!ok) {
          swalErrorOrSuccess(message, ok)
        }
      } else if (edit) {
        const { message, ok } = await putForms('categories', values, id)
        if (ok) {
          swalErrorOrSuccess(`Categoría ${message}`, ok)
        }
        if (!ok) {
          swalErrorOrSuccess(message, ok)
        }
      }
    }
  })
  useEffect(() => { if (edit) getInitialValues().then((res) => setValues(res)) }, [])
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
          <SerachAll route={PrivateNameRoutes.EDIT_CATEGORIES} />
        </div>
        <div className='col-6  pe-5'>
          <CustonBotton disabled={isSubmitting} />
        </div>
      </div>
    </form>
  )
}
