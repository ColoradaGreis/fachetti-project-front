import { Button, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import style from './style.module.css'
import { userValidationSchema } from './utils'
import { urlApi } from '@/api'
import { swalErrorOrSuccess } from '../../../private/utilities'
import { useNavigate } from 'react-router-dom'
import { saveToken, tokenExists } from '@/public/utils'
import { PrivateNameRoutes } from '../../../routes'
import { useEffect } from 'react'

function LoginAdmin () {
  const routeToNavigateifAdmin = `/admin/${PrivateNameRoutes.CONSULTS}`
  useEffect(() => {
    if (tokenExists()) { navigate(routeToNavigateifAdmin) }
  }, [])
  const navigate = useNavigate()
  const { t } = useTranslation('public')
  const { values, handleSubmit, handleChange, errors, touched, handleBlur } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: userValidationSchema,
    onSubmit: async values => {
      try {
        const { data } = await urlApi.post('users/login', values)
        saveToken(data)
        swalErrorOrSuccess('Perfecto', true)
        setTimeout(() => {
          navigate(routeToNavigateifAdmin)
        }, 1500)
      } catch (error) {
        swalErrorOrSuccess(error.message)
      }
    }
  })
  return (
    <section className={style.container}>
      <Form onSubmit={handleSubmit} className={style.form}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>{t('login.emailLabel')}</Form.Label>
          <Form.Control
            type='email'
            placeholder={t('login.emailText')}
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={errors.email && touched.email}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.email && touched.email && errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>{t('login.passwordLabel')}</Form.Label>
          <Form.Control
            type='password'
            placeholder={t('login.passwordText')}
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={errors.password && touched.password}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.password && touched.password && errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant='primary' type='submit'>
          {t('login.submit')}
        </Button>
      </Form>
    </section>
  )
}

export default LoginAdmin
