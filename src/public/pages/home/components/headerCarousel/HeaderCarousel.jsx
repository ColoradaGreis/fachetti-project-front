import { Carousel } from 'react-bootstrap'
import { carrouselImages } from './assets/images'

const firstImages = {
  small: carrouselImages.firstImage400,
  medium: carrouselImages.firstImage900,
  large: carrouselImages.firstImage1200,
  alt: 'exampleImage'
}
const secondImages = {
  small: carrouselImages.secondImage400,
  medium: carrouselImages.secondImage900,
  large: carrouselImages.secondImage1200,
  alt: 'exampleImage'
}
const thirdImages = {
  small: carrouselImages.thirdImage400,
  medium: carrouselImages.thirdImage900,
  large: carrouselImages.thirdImage1200,
  alt: 'exampleImage'
}
const fourthImages = {
  small: carrouselImages.fourthImage400,
  medium: carrouselImages.fourthImage900,
  large: carrouselImages.fourthImage1200,
  alt: 'exampleImage'
}
const arrayImages = [firstImages, secondImages, thirdImages, fourthImages]

export default function HeaderCarousel () {
  return (
    <Carousel>
      {
        arrayImages.map((e, i) => (
          <Carousel.Item key={i}>
            <picture>
              <source media='(min-width: 1200px)' srcSet={e.large} />
              <source media='(min-width: 900px)' srcSet={e.medium} />
              <source media='(min-width: 400px)' srcSet={e.small} />
              <img
                className='d-block w-100'
                src={e.small}
                alt={e.alt}
              />
            </picture>
          </Carousel.Item>
        ))
      }
    </Carousel>

  )
}
