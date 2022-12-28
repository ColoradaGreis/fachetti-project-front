import { urlApi } from '@/api'
import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SubjetManajerGetCount } from '../../services/manager-status'

export default function MessagesHeader () {
  const ref = useRef(false)
  const { t } = useTranslation('private')
  const subject = SubjetManajerGetCount.getSubject()
  const [state, setState] = useState(0)
  const getCountMessages = async () => {
    try {
      const response = await urlApi.get('questions?readed=false')
      setState(response.data[1])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    subject.subscribe((value) => {
      if (ref.current !== value) {
        ref.current = value
        getCountMessages()
      }
    })
  }, [])

  useEffect(() => {
    getCountMessages()
  }, [])

  return (
    <>
      <div className='col-8'>
        {t('consults.messagesHeader.noReaded', { count: state || 0 })}
      </div>
      <div className='col-4'>
        {t('consults.messagesHeader.readed')}
      </div>
    </>
  )
}
