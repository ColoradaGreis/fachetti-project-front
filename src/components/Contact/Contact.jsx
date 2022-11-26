import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import s from './Contact.module.css'

const initialValues = {
  fullName: '',
  phone: '',
  email: '',
  message: ''
}
const validateFields = values => {
  const errors = {}
  if (!values.fullName) errors.fullName = 'Campo requerido'
  if (!values.phone) errors.fullName = 'Campo requerido'
  if (!values.email) errors.fullName = 'Campo requerido'
  if (!values.message) errors.fullName = 'Campo requerido'
  return errors
}
const handleSubmit = (values, { setFieldError }) => {
  return register(values)
    .catch(() => { setFieldError('fullName', 'This fullName is not valid') })
}
export default function Contact () {
  return (
    <div>
      <h1>Contáctanos</h1>
      <h4>Ecríbenos y en breve nos pondremos en contacto contigo</h4>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={handleSubmit}
      >
        {
          ({ isSubmitting, errors }) => (
            <Form>
              <Field name='fullName' placeholder='Ingrese su nombre completo' />
              <ErrorMessage name='fullname' component='small' />
              <Field name='phone' placeholder='ingrese su número de teléfono' />
              <ErrorMessage name='phone' component='small' />
              <Field name='email' placeholder='Ingrese su email' />
              <ErrorMessage name='email' component='small' />
              <Field name='message' placeholder='Cuál es su consulta?' />
              <ErrorMessage name='message' component='small' />
              <button className={s.btn} disabled={isSubmitting}>Enviar</button>
            </Form>)
        }
      </Formik>
    </div>
  )
}
