import React from 'react'
import s from './footer.module.css'
import mail from '@/assets/EmailContact.png'
import phone from '@/assets/PhoneContact.png'
import instagram from '@/assets/Instagram.png'
import facebook from '@/assets/Facebook.png'
import logo from '@/assets/LogoFooter.png'
import wapp from '@/assets/wapp.png'
import impulse from '@/assets/impulse.png'

export default function Footer () {
  return (
    <div className={`${s.footerContainer} d-lg-flex flex-wrap`}>
      <div className={`${s.footer} my-5 py-5`}>
        <div className={`col ${s.contactoSection}`}>
          <h5 className={s.titleContacto}>CONTACTO</h5>
          <div className='row'>
            <div className='d-flex flex-row justify-content-center align-items-center gap-3'>
              <img width='30px' height='30px' src={mail} alt='mail' />
              <a className='text-decoration-none white h6' href={import.meta.env.VITE_MAIL_URL} target='_blank' rel='noreferrer'>administracion@fachetti.com.ar</a>
            </div>
          </div>
          <div className='row'>
            <div className='d-flex justify-content-center align-items-center flex-row gap-3 text-decoration-none'>
              <img width='30px' height='30px' src={phone} alt='phone' />
              <a className='text-decoration-none white h6' href='tel:+5401149196349' target='_blank' rel='noreferrer'>(011) 4919-6349</a>
            </div>
          </div>
          <div className='row'>
            <div className='d-flex justify-content-center align-items-center flex-row gap-3 text-decoration-none'>
              <img width='30px' height='30px' src={wapp} alt='phone' />
              <a className='text-decoration-none white h6' href={`https://wa.me/+${import.meta.env.VITE_WHATSAPP_NUMBER}`} target='_blank' rel='noreferrer'>(+54) 11-6162-5130</a>
            </div>
          </div>
          <div className='row '>
            <div className='d-flex justify-content-center align-items-center flex-row gap-3'>
              <a href={import.meta.env.VITE_INSTAGRAM_URL} target='_blank' rel='noreferrer'> <img width='30px' height='30px' src={instagram} alt='instagram' /> </a>
              <a href={import.meta.env.VITE_FACEBOOK_URL} target='_blank' rel='noreferrer'><img width='30px' height='30px' src={facebook} alt='facebook' /> </a>
            </div>
          </div>

        </div>
        <div className='col d-flex flex-column justify-content-center align-items-center mt-5'>
          <img className={s.logoFooter} src={logo} alt='Fachetti' />
        </div>
        <div className={`col d-flex flex-column justify-content-center align-items-center ${s.map} my-5 py-5`}>
          <h5 className={s.titleContacto}>UBICACION</h5>
          <p className={s.titleUbi}>Castañon 2952, C1437 CABA, Argentina</p>
          <iframe title='map' width='330' height='270' src='https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Casta%C3%B1on%202952%2C%20C1437%20CABA+(Title)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed' />
          <div className='col mt-5'>
            <p className={s.titlePage}>PAGINA HECHA POR</p>
            <img width='150px' src={impulse} alt='impulse' />
          </div>
        </div>
      </div>
    </div>
  )
}
