import { useUserContext } from '@/context'
import { useEffect, useState } from 'react'
import style from './style.module.css'
import { useTranslation } from 'react-i18next'
import { ProfileImage } from '../ProfileImage'
import { urlApi } from '@/api'

export default function HeaderSettings () {
  const { t } = useTranslation('private')
  const [editingName, setEditingName] = useState(false)
  const { userContextValue, setUserContextValue } = useUserContext()
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    profileImage: ''
  })
  const handleNameChange = (e) => {
    setUserData({
      ...userData,
      name: e.target.value
    })
  }
  useEffect(() => {
    if (userContextValue) {
      setUserData({
        ...userData,
        name: userContextValue.fullName,
        email: userContextValue.email
      })
    }
  }, [userContextValue])

  if (userContextValue.name !== userData.name && editingName.edit) {
    setEditingName({
      wasEdit: true,
      edit: true
    })
  }
  const putName = async () => {
    setUserContextValue(prev => {
      return {
        ...prev,
        name: userData.name
      }
    })
    try {
      await urlApi.put('/users', userContextValue)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container px-0 mx-0'>
      <div className='row'>

        <div className='col-4 d-flex justify-content-center align-items-center'>
          <ProfileImage />
        </div>

        <div className='col-4'>
          <div className='row'>

            <div className={`col-12 px-0 ${style.underLine}`}>
              <h2 className='user-select-none'>{t('settings.headerSettings.name')}</h2>
              {
                editingName
                  ? <input
                      type='text'
                      className='noStyle'
                      value={userData.name}
                      onChange={handleNameChange}
                    />
                  : <p className='mb-0'>{userData.name}</p>
              }
            </div>

            <div className={`col-12 px-0 ${style.underLine}`}>
              <h2 className='user-select-none'>{t('settings.headerSettings.email')}</h2>
              <p className='mb-0'>{userData.email}</p>
            </div>

          </div>
        </div>

        <div className='col-4'>
          <button type='button' className='btn btn-light' onClick={() => setEditingName(!editingName)}>{t('settings.headerSettings.button')}</button>
          {
            editingName && <button type='submit' className='btn btn-primary ms-3' onClick={putName}>{t('settings.headerSettings.button2')}</button>
          }
        </div>
      </div>
    </div>
  )
}
