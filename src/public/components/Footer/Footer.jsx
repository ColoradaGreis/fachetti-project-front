import React from 'react'
import s from './footer.module.css'
import mail from '@/assets/EmailContact.png'
import phone from '@/assets/PhoneContact.png'
import instagram from '@/assets/Instagram.png'
import facebook from '@/assets/Facebook.png'
import logo from '@/assets/LogoFooter.png'
import wapp from '@/assets/wapp.png'

export default function Footer () {
  return (
    <div className={s.footerContainer}>
      <div className={s.footer}>
        <div className={`col ${s.contactoSection}`}>
          <h3 className={s.titleContacto}>CONTACTO</h3>
          <div className='row'>
            <div className='d-flex flex-row justify-content-center align-items-center gap-3 fs-5'>
              <img width='30px' height='30px' src={mail} alt='mail' />
              <a className='text-decoration-none white' href='mailto:administracion@fachetti.com.ar' target='_blank' rel='noreferrer'>administracion@fachetti.com.ar</a>
            </div>
          </div>
          <div className='row'>
            <div className='d-flex justify-content-center align-items-center flex-row gap-3 fs-5 text-decoration-none'>
              <img width='30px' height='30px' src={phone} alt='phone' />
              <a className='text-decoration-none white' href='tel:+5401149196349' target='_blank' rel='noreferrer'>(011) 4919-6349</a>
            </div>
          </div>
          <div className='row'>
            <div className='d-flex justify-content-center align-items-center flex-row gap-3 fs-5 text-decoration-none'>
              <img width='30px' height='30px' src={wapp} alt='phone' />
              <a className='text-decoration-none white' href={`https://wa.me/+${import.meta.env.VITE_WHATSAPP_NUMBER}`} target='_blank' rel='noreferrer'>(+54) 11-6162-5130</a>
            </div>
          </div>
          <div className='col mt-3'>
            <h5 className={s.titleContacto}>REDES SOCIALES</h5>
            <div className='d-flex justify-content-center align-items-center flex-row gap-3'>
              <a href='https://www.instagram.com/fachetti.equipamiento/?hl=es' target='_blank' rel='noreferrer'> <img width='30px' height='30px' src={instagram} alt='instagram' /> </a>
              <a href='https://www.facebook.com/fachettiEquipamientoGastronomico' target='_blank' rel='noreferrer'><img width='30px' height='30px' src={facebook} alt='facebook' /> </a>
            </div>
          </div>
          <div className='col mt-3'>
            <p className={s.titlePage}>PAGINA HECHA POR IMPULSE</p>
          </div>
        </div>
        <div className='col d-flex flex-column justify-content-center align-items-center'>
          <img className={s.logoFooter} src={logo} alt='Fachetti' />
        </div>
        <div className={`col d-flex flex-column justify-content-center align-items-center ${s.map} align-text-top`}>
          <h5 className={s.titleContacto}>UBICACION</h5>
          <p className={s.titleUbi}>Castañon 2952, C1437 CABA, Argentina</p>
          <iframe title='map' width='330' height='270' src='https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Casta%C3%B1on%202952%2C%20C1437%20CABA+(Title)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed' frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' />

        </div>
      </div>
    </div>
  )
}
