import React from 'react'
import image1 from '../../assets/images/landing1.jpg'
import image2 from '../../assets/images/landing2.jpg'
import image3 from '../../assets/images/landing3.jpg'
import s from './landing.module.css'

export default function Landing () {
  return (
    <div className={s.containerLanding}>
      <div className={s.carouselContainer}>
        <div className={s.carouselMain} id='carousel'>
          <div className={s.carouselFeature}>
            <a href='#'><img className={s.carouselImage} alt='featureCarousel-1' width='320' height='200' src={image1} /></a>
          </div>

          <div className={s.carouselFeature}>
            <a href='#'><img className={s.carouselImage} alt='featureCarousel-2' width='320' height='200' src={image2} /></a>
          </div>

          <div className={s.carouselFeature}>
            <a href='#'><img className={s.carouselImage} alt='featureCarousel-3' width='320' height='200' src={image3} /></a>
          </div>
        </div>
        {/* <p>
          <a href='#' id='carousel-left'><i className='fa fa-chevron-left' aria-hidden='true' />
          </a>
          <a href='#' id='carousel-right'><i className='fa fa-chevron-right' aria-hidden='true' />
          </a>
        </p> */}
      </div>
    </div>
  )
}
