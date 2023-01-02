import { useUserContext } from '@/context'
import { useEffect, useState } from 'react'
import userExample from '@/assets/userExample.png'
import style from './style.module.css'

export default function HeaderSettings () {
  const [editingName, setEditingName] = useState({
    wasEdit: false,
    edit: false
  })
  const { userContextValue } = useUserContext()
  const [userData, setUserData] = useState({
    name: 'Julian',
    lastName: 'Martinez',
    email: 'julian@hotmail.com',
    profileImage: ''
  })
  console.log(editingName)
  const handleNameChange = (e) => {
    setUserData({
      ...userData,
      name: e.target.value
    })
  }
  return (
    <div className='container px-0 mx-0'>
      <div className='row'>

        <div className='col-4'>
          <img src={userExample} alt='profileImage' />
        </div>

        <div className='col-4'>
          <div className='row'>

            <div className={`col-12 px-0 ${style.underLine}`}>
              <h2>Nombre</h2>
              {
                editingName.edit
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
              <h2>Email</h2>
              <p className='mb-0'>{userData.email}</p>
            </div>

          </div>
        </div>

        <div className='col-4'>
          <button
            type='button'
            className='btn btn-light'
            onClick={() => setEditingName({ wasEdit: false, edit: !editingName.edit })}
          >
            Cambiar Nombre
          </button>
        </div>
      </div>
    </div>
  )
}
