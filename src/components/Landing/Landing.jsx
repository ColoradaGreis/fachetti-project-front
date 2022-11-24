import React from 'react'
import image1 from '../../assets/images/landing1'
import image2 from '../../assets/images/landing2'
import image3 from '../../assets/images/landing3'

export default function Landing () {
  return (
    <div className='d-flex justify-content-center'>
      <div class='carousel-container'>
        <div class='carousel-main' id='carousel'>
          <div class='carousel-feature bg-1'>
            <a href='#'><img class='carousel-image' alt='featureCarousel-1' width='320' height='200' src={image1} /></a>
          </div>

          <div class='carousel-feature bg-2'>
            <a href='#'><img class='carousel-image' alt='featureCarousel-2' width='320' height='200' src={image2} /></a>
          </div>

          <div class='carousel-feature bg-3'>
            <a href='#'><img class='carousel-image' alt='featureCarousel-3' width='320' height='200' src={image3} /></a>
          </div>
        </div>
        <p>
          <a href='#' id='carousel-left'><i class='fa fa-chevron-left' aria-hidden='true' />
          </a>
          <a href='#' id='carousel-right'><i class='fa fa-chevron-right' aria-hidden='true' />
          </a>
        </p>
      </div>
    </div>
  )
}
