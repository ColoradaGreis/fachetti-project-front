import { useUserContext } from '@/context'
import { useEffect, useState } from 'react'
import style from './style.module.css'
import { useTranslation } from 'react-i18next'
import { ProfileImage } from '../ProfileImage'
import { putUser } from '../../utils'

export default function HeaderSettings () {
  const { t } = useTranslation('private')
  const [editingName, setEditingName] = useState(false)
  const { userContextValue, setUserContextValue } = useUserContext()
  const [userData, setUserData] = useState(
    {
      fullName: '',
      email: '',
      profileImage: ''
    }
  )
  useEffect(() => {
    setUserData({
      fullName: userContextValue.fullName,
      email: userContextValue.email,
      profileImage: userContextValue.profileImage
    })
  }, [])

  const handleNameChange = (e) => {
    setUserData(prev => {
      return {
        ...prev,
        fullName: e.target.value
      }
    })
  }

  if (userContextValue.fullName !== userData.fullName && editingName.edit) {
    setEditingName({
      wasEdit: true,
      edit: true
    })
  }
  const putName = async () => {
    if (!userData.fullName) return
    if (userData.fullName === userContextValue.fullName) return
    const response = await putUser({ ...userContextValue, fullName: userData.fullName })
    setUserContextValue(response)
    setEditingName(false)
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
                      value={userData.fullName}
                      onChange={handleNameChange}
                      autoFocus
                    />
                  : <p className='mb-0'>{userData.fullName}</p>
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
