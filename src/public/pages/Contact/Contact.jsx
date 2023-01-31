import s from './Contact.module.css'
import telefono from '@/assets/telefonoContact.png'
import instagram from '@/assets/instagramContact.png'
import mail from '@/assets/gmailContact.png'
import facebook from '@/assets/facebookContact.png'

import { ErrorMessage, Field, Form, Formik } from 'formik'

const initialValues = {
  fullName: '',
  phone: '',
  email: '',
  message: ''
}
const validateFields = values => {
  const errors = {}
  if (!values.fullName) {
    errors.fullName = 'Requerido'
  } else if (!/^[a-zA-Z]+$/i.test(values.fullName)) {
    errors.fullName = 'No se aceptan números ni caracteres especiales'
  }
  if (!values.phone) {
    errors.phone = 'Requerido'
  } else if (!/^\d{10}$/i.test(values.phone)) {
    errors.phone = 'Número de teléfono inválido, introduzca 10 dígitos con código de área sin el 15'
  }
  if (!values.email) {
    errors.email = 'Requerido'
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'email no válido'
  }
  if (!values.message) errors.message = 'Campo requerido'
  return errors
}
const handleSubmit = (values, { setFieldError }) => {
  console.log(values)
}
export default function Contact () {
  return (
    <div className={s.contactContainer}>
      <div className={s.redesSociales}>
        <div className={s.sigamosConectados}>
          <h1 className={s.h1Concact}>Sigamos conectados</h1>
          <div className={s.images}>
            <img className={s.imagesRedes} src={telefono} alt='' />
            <img className={s.imagesRedes} src={instagram} alt='' />
            <img className={s.imagesRedes} src={facebook} alt='' />
            <img className={s.imagesRedes} src={mail} alt='' />
          </div>
        </div>
      </div>
      <div className={s.titleContact}>
        <h1 className='fw-bold'>Contáctanos</h1>
        <h4 className='fw-semibold'>Escríbenos y en breve nos pondremos en contacto contigo</h4>
      </div>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={handleSubmit}
      >
        {
          ({ isSubmitting, errors }) => (
            <Form className={s.formContainer}>
              <div className={s.namePhone}>
                <Field className={s.inputNamePhone} name='fullName' placeholder='Ingrese su nombre completo' />
                <ErrorMessage name='fullName' component='small' />
                <Field className={s.inputNamePhone} name='phone' placeholder='Ingrese su número de teléfono' />
                <ErrorMessage name='phone' component='small' />
              </div>
              <Field className={s.input} name='email' placeholder='Ingrese su email' />
              <ErrorMessage name='email' component='small' />
              <Field className={`pb-5 ${s.input}`} name='message' placeholder='Cuál es su consulta?' />
              <ErrorMessage name='message' component='small' />
              <button className={s.btn} disabled={isSubmitting}>Enviar</button>
            </Form>)
        }
      </Formik>
    </div>
  )
}
