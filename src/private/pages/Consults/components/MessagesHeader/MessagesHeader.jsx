import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SubjetManajerGetCount } from '@/private/services/manager-status'
import { getCountMessages } from '@/private/utilities'
import style from './style.module.css'

export default function MessagesHeader () {
  const ref = useRef(false)
  const { t } = useTranslation('private')
  const subject = SubjetManajerGetCount.getSubject()
  const [state, setState] = useState(0)

  useEffect(() => {
    subject.subscribe((value) => {
      if (ref.current !== value) {
        ref.current = value
        getCountMessages().then((value) => {
          setState(value)
        })
      }
    })
  }, [])

  useEffect(() => {
    getCountMessages().then((value) => {
      setState(value || '0')
    })
  }, [])
  return (
    <div className='container mx-0 user-select-none '>
      <div className='row px-0 mx-0 d-flex gap-3 mb-5'>

        <div className={`col-7 text-uppercase bkgGreen ${style.container}`}>
          <p className='my-0 fs-2'><span className='bold fs-1 mx-5'>{state}</span> {t('consults.messagesHeader.noReaded')}</p>
        </div>

        <div className={`col text-uppercase bkgBlue2 ${style.container}`}>
          <p className='my-0 fs-2 white'>{t('consults.messagesHeader.readed')}</p>
        </div>

      </div>

      <div className={`row px-0 mx-0 bkgGray ${style.shadow}`}>
        <div className='col text-uppercase d-flex align-items-center' style={{ height: '100px' }}>
          <p className='my-0 fs-2 bold ms-4'>{t('consults.messagesHeader.details')}</p>
        </div>
      </div>

    </div>
  )
}
