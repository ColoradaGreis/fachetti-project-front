import s from './Contact.module.css'
import telefono from '@/assets/telefonoContact.png'
import instagram from '@/assets/instagramContact.png'
import mail from '@/assets/gmailContact.png'
import facebook from '@/assets/facebookContact.png'
import { postForms } from '@/private/utilities'
import { formConsultSchema } from '../../utils/schemasPublic'
import { useTranslation } from 'react-i18next'
import { swallError } from '../../utils/sweetAlerts'
import { Field, Form, Formik } from 'formik'
import { areaCode } from '@/public/utils/areaCode'

const initialValues = {
  name: '',
  phone: '',
  email: '',
  message: '',
  pais: '+54'
}

const handleSubmit = async (values, { resetForm }) => {
  const newValues = { ...values, phone: `${values.pais}${values.phone}` }
  const { message, ok } = await postForms('questions', newValues)
  if (ok) {
    resetForm()
    swallError(`Consulta ${message}`, ok)
  } else if (!ok) {
    swallError(message, ok)
  }
}
export default function Contact () {
  const { t } = useTranslation('public')

  return (
    <div className={s.contactContainer}>
      <div className={s.redesSociales}>
        <div className={s.sigamosConectados}>
          <h1 className={s.h1Concact}>Sigamos conectados</h1>
          <div className={s.images}>
            <a href={`https://wa.me/+${import.meta.env.VITE_WHATSAPP_NUMBER}`} alt='telefono' target='_blank' rel='noreferrer'>
              <img className={s.imagesRedes} src={telefono} alt='' />
            </a>
            <a href={import.meta.env.VITE_INSTAGRAM_URL} alt='Instagram' target='_blank' rel='noreferrer'>
              <img className={s.imagesRedes} src={instagram} alt='' />
            </a>
            <a href={import.meta.env.VITE_FACEBOOK_URL} alt='facebook' target='_blank' rel='noreferrer'>
              <img className={s.imagesRedes} src={facebook} alt='' />
            </a>
            <a href={import.meta.env.VITE_MAIL_URL} alt='correo' target='_blank' rel='noreferrer'>
              <img className={s.imagesRedes} src={mail} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className={s.titleContact}>
        <h1 className='fw-bold'>Contáctanos</h1>
        <h4 className='fw-semibold'>Escríbenos y en breve nos pondremos en contacto contigo</h4>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={formConsultSchema}
        onSubmit={handleSubmit}

      >
        {
          ({ isSubmitting, errors, isValid, touched }) => (
            <Form className={s.formContainer}>
              <div className={s.namePhone}>
                <Field className={s.inputNamePhone} name='name' placeholder={t('validation.placeholderName')} />
                {errors.name && touched.name && <div className={s.error}>{t(errors.name)}</div>}
                <Field className={s.areaCode} component='select' name='pais'>
                  {
                    areaCode.map((e, i) => <option key={i} value={e.code}> {e.name} ({e.code}) </option>)
                  }
                </Field>
                <Field className={s.inputNamePhone} name='phone' placeholder={t('validation.placeholderPhone')} />
                {errors.phone && touched.phone && <div className={s.error}>{t(errors.phone)}</div>}
              </div>
              <Field className={s.input} name='email' placeholder={t('validation.placeholderEmail')} />
              {errors.email && touched.email && <div className={s.error}>{t(errors.email)}</div>}
              <Field className={`pb-5 ${s.input}`} name='message' placeholder={t('validation.placeholderMessage')} />
              {errors.message && touched.message && <div className={s.error}>{t(errors.message)}</div>}
              <button type='submit' className={s.btn} disabled={!isValid || isSubmitting}>Enviar</button>
            </Form>)
        }
      </Formik>
    </div>
  )
}
