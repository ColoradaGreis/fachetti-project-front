import React from 'react'
import { Form, Formik } from 'formik'
import s from './Contact.module.css'
export default function Contact () {
  return (
    <div>
      <h1>Contáctanos</h1>
      <h4>Ecríbenos y en breve nos pondremos en contacto contigo</h4>
      <Formik
        initialValues={{
          fullName: '',
          phone: '',
          email: '',
          message: ''
        }}
        validate={values => {
          const errors = {}
          if (!values.fullName) errors.fullName = 'Campo requerido'
          if (!values.phone) errors.fullName = 'Campo requerido'
          if (!values.email) errors.fullName = 'Campo requerido'
          if (!values.message) errors.fullName = 'Campo requerido'
        }}
        onSubmit={(values, { setFieldError }) => {
          return register(values)
            .catch(() => { setFieldError('fullName', 'This fullName is not valid') })
        }}
      >
        {
          ({ handleSubmit, handleChange, isSubmitting, errors }) => (
            <form onSubmit={handleSubmit}>
              <input onChange={handleChange} name='fullName' placeholder='Ingrese su nombre completo' />
              {errors.fullName && (
                <small style={{ color: 'red' }}>
                  {errors.fullName ? <p>{errors.fullName}</p> : ''}
                </small>)}
              <input onChange={handleChange} name='phone' placeholder='ingrese su número de teléfono' />
              <small style={{ color: 'red' }}>
                {errors.phone ? <p>{errors.phone}</p> : ''}
              </small>
              <input onChange={handleChange} name='email' placeholder='Ingrese su email' />
              <small style={{ color: 'red' }}>
                {errors.email ? <p>{errors.email}</p> : ''}
              </small>
              <input onChange={handleChange} name='message' placeholder='Cuál es su consulta?' />
              <small style={{ color: 'red' }}>
                {errors.message ? <p>{errors.message}</p> : ''}
              </small>
              <button className={s.btn} disabled={isSubmitting}>Enviar</button>
            </form>)
        }
      </Formik>
    </div>
  )
}
