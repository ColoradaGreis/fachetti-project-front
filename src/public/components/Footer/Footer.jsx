import React from 'react'
import s from './footer.module.css'
import mail from '@/assets/EmailContact.png'
import phone from '@/assets/PhoneContact.png'
import instagram from '@/assets/Instagram.png'
import facebook from '@/assets/Facebook.png'
import logo from '@/assets/LogoFooter.png'

export default function Footer () {
  return (
    <div className={s.footerContainer}>
      <div className={s.footer}>
        <div className={`col ${s.contactoSection}`}>
          <h3 className={s.titleContacto}>CONTACTO</h3>frameBorder
          <div className='row'>
            <div className='d-flex flex-row justify-content-center align-items-center gap-3 fs-5'>
              <img width='30px' height='30px' src={mail} alt='mail' />
              michelle.rivera@example.com
            </div>
          </div>
          <div className='row'>
            <div className='d-flex justify-content-center align-items-center flex-row gap-3 fs-5'>
              <img width='30px' height='30px' src={phone} alt='phone' />
              (480) 555-0103
            </div>
          </div>
          <div className='col mt-3'>
            <h5 className={s.titleContacto}>REDES SOCIALES</h5>
            <div className='d-flex justify-content-center align-items-center flex-row gap-3'>
              <img width='30px' height='30px' src={instagram} alt='instagram' />
              <img width='30px' height='30px' src={facebook} alt='facebook' />
            </div>
          </div>
        </div>
        <div className='col d-flex flex-column justify-content-center align-items-center'>
          <img className={s.logoFooter} src={logo} alt='Fachetti' />
        </div>
        <div className={`col d-flex justify-content-center align-items-center ${s.map}`}>
          <iframe title='map' width='330' height='270' src='https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Casta%C3%B1on%202952%2C%20C1437%20CABA+(Title)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed' frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' />
        </div>
      </div>
    </div>
  )
}
