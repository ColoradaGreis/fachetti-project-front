import { Accordion, MessagesHeader } from './components'
import { useTranslation } from 'react-i18next'

export default function Consults () {
  const { t } = useTranslation('private')
  return (
    <div className='container-fluid px-0 mx-0 '>

      <div className='row'>
        <div className='col-12'>
          <h2 className='text-uppercase user-select-none fs-1'>{t('consults.title')}</h2>
        </div>
      </div>

      <div className='row mw-100 my-3'>
        <MessagesHeader />
      </div>

      <div className='row container-fluid px-0 py-0'>
        <div className='col-12'>
          <Accordion />
        </div>
      </div>

    </div>
  )
}
