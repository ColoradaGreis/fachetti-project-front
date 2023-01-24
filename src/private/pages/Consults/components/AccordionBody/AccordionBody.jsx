import { useState, useEffect } from 'react'
import { urlApi } from '@/api'
import { useTranslation } from 'react-i18next'
import { Form } from 'react-bootstrap'

export default function AccordionBody ({ user }) {
  const { id, isAnswered, email, phone, message } = user
  const { t } = useTranslation('private')
  const [state, setState] = useState(false)

  useEffect(() => { setState(isAnswered) }, [user]) // Es necesario para que cuando modifiquen el swich se actualice el estado

  const handleChange = async (e) => {
    setState(e.target.checked)
    try {
      await urlApi.put(`questions/${id}?answered=${e.target.checked}`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container-fluid px-0 py-0'>
      <div className='row'>
        <div className='col-6'>
          <p>
            <span className='bold'>{t('consults.accordion.email')}: </span>
            <a className='text-decoration-none black' href={`mailto:${email}`} target='_blank' rel='noreferrer'>{email}</a>
          </p>
        </div>
        {
                    phone && (
                      <div className='col-6'>
                        <span className='bold'>{t('consults.accordion.phone')}: {phone}</span>
                      </div>
                    )
                  }
      </div>
      <div className='row'>
        <div className='col-12'>
          <p>
            <span className='bold'>{t('consults.accordion.message')}: </span>
            {message}
          </p>

        </div>
      </div>
      <Form.Check
        type='checkbox'
        id='checkbox'
        label={t('consults.accordion.answered')}
        className='mt-3'
        checked={state}
        onChange={handleChange}
      />

    </div>
  )
}
