import React, { useEffect, useState } from 'react'
import s from './footer.module.css'
import mail from '@/assets/EmailContact.png'
import phone from '@/assets/PhoneContact.png'
import instagram from '@/assets/Instagram.png'
import facebook from '@/assets/Facebook.png'
import logo from '@/assets/LogoFooter.png'
import wapp from '@/assets/wapp.png'
import impulse from '@/assets/impulse.png'
import ENG from '@/assets/ENG.png'
import ESP from '@/assets/ESP.png'
import i18n from 'i18next'

export default function Footer () {
  const [lang, setLang] = useState({
    lang: false
  })
  function handleLanguageChange (lng) {
    setLang(!lang)
    i18n.changeLanguage(lng)
  }
  useEffect(() => {}, [lang])

  return (
    <div className={`${s.footerContainer} d-lg-flex flex-wrap`}>
      <div className={s.footer}>
        <div className={`col m-3 ${s.contactoSection}`}>
          <h3 className={s.titleContacto}>CONTACTO</h3>
          <div className='row'>
            <div className='d-flex flex-row justify-content-center align-items-center gap-3 fs-5'>
              <img width='30px' height='30px' src={mail} alt='mail' />
              <a className='text-decoration-none white' href={import.meta.env.VITE_MAIL_URL} target='_blank' rel='noreferrer'>administracion@fachetti.com.ar</a>
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
            <div className='d-flex justify-content-center align-items-center flex-row gap-3'>
              <a href={import.meta.env.VITE_INSTAGRAM_URL} target='_blank' rel='noreferrer'> <img width='30px' height='30px' src={instagram} alt='instagram' /> </a>
              <a href={import.meta.env.VITE_FACEBOOK_URL} target='_blank' rel='noreferrer'><img width='30px' height='30px' src={facebook} alt='facebook' /> </a>
            </div>
          </div>
          <div className='col mb-4 d-flex'>
            <p className={s.titlePage}>IDIOMA</p>
            {
              lang === false
                ? <span onClick={() => handleLanguageChange('en')}><img className={s.botonLang} src={ENG} alt='english' /></span>
                : <span onClick={() => handleLanguageChange('es')}><img className={s.botonLang} src={ESP} alt='español' /></span>
            }
          </div>
        </div>
        <div className='col d-flex flex-column justify-content-center align-items-center order-2 order-lg-1'>
          <img className={s.logoFooter} src={logo} alt='Fachetti' />
        </div>
        <div className={`col d-flex flex-column justify-content-center align-items-center ${s.map} align-text-top order-1 order-lg-2 mb-3`}>
          <h5 className={s.titleContacto}>UBICACION</h5>
          <p className={s.titleUbi}>Castañon 2952, C1437 CABA, Argentina</p>
          <iframe title='map' width='330' height='270' src='https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Casta%C3%B1on%202952%2C%20C1437%20CABA+(Title)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed' />
          <div className='col mb-4'>
            <p className={s.titlePage}>PAGINA HECHA POR</p>
            <img width='150px' src={impulse} alt='impulse' />
          </div>
        </div>
      </div>
    </div>
  )
}
