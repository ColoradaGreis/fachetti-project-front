import { useTranslation } from 'react-i18next'

export default function Body ({ user }) {
  const { t } = useTranslation('private')
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
    </div>
  )
}
