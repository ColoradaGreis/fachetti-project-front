import { useState, useRef } from 'react'
import { urlApi } from '@/api'
import { useTranslation } from 'react-i18next'
import { Form } from 'react-bootstrap'

export default function AccordionBody ({ user }) {
  const { t } = useTranslation('private')
  const isAnsweredRef = useRef(user.isAnswered)
  const [state, setState] = useState(isAnsweredRef.current)

  const handleChange = async (e) => {
    setState(e.target.checked)
    try {
      const response = await urlApi.put(`questions/${user.id}?answered=${e.target.checked}`)
      console.log(response)
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
            <a className='text-decoration-none black' href={`mailto:${user.email}`} target='_blank' rel='noreferrer'>{user.email}</a>
          </p>
        </div>
        {
                    user.phone && (
                      <div className='col-6'>
                        <span className='bold'>{t('consults.accordion.phone')}: {user.phone}</span>
                      </div>
                    )
                  }
      </div>
      <div className='row'>
        <div className='col-12'>
          <p>
            <span className='bold'>{t('consults.accordion.message')}: </span>
            {user.message}
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
