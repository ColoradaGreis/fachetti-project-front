import style from './headerAdmin.module.css'
import Exit from '@/assets/Exit.png'
import { useTranslation } from 'react-i18next'
import { Outlet, useNavigate } from 'react-router-dom'
import { removeToken } from '@/public/utils'

export default function HeaderAdmin () {
  const navigate = useNavigate()
  const { t } = useTranslation('private')
  const logOut = () => {
    removeToken()
    navigate('/login')
  }
  return (
    <>
      <header className={`container-fluid mx-0 px-0 ${style.header}`}>
        <div className='row h-100 align-items-center'>
          <div className='col-2 offset-1'>
            <p className='mb-0 fs-5'>{t('header.title')}</p>
          </div>
          <div className='col offset-6 pointer' onClick={logOut}>
            <p className='mb-0 fs-6 font-italic'>{t('header.logOut')}<img src={Exit} alt='exit' className='ms-2' /></p>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}
