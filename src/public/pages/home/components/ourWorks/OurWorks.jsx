import style from './style.module.css'

import { SeparateSections } from '../'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { imagesExport } from './assets'

const colArrayOne = [
  'Mercado de Liniers', 'Es Ruiz la Pastelería', 'Mansión Funtime Baum', 'Parque Leloir', 'Verbena Tapería', 'Buenos Aires Verde', 'Italica Concretto', 'Los Petersen Eat Catering', 'Taco Box', 'Iga Good y Green Iose', 'Café Registrado', 'Restaurante Govinda', 'Mendoza Sheraton', 'Park Tower', 'Hotel Internacional'
]
const colArrayTwo = [
  'Llao Llao',
  'Casa Cruz',
  'Madero Tango',
  'Olsen',
  'Isabel Bar',
  'Francesca',
  'Stefano',
  'Celetto',
  'Nestlé',
  'Moliere Nordelta',
  'Sindicato de Pasteleros',
  'Balneario 12 Punta',
  'Mogotes',
  'Il Ballo TV',
  'Sofitel Reserva Cardales',
  'Country el Nacional'
]

export default function OurWorks () {
  const { t } = useTranslation('public')
  return (
    <>
      <SeparateSections text={t('home.ourWorks')} id='works' />
      <Container as='section' fluid className='px-0'>
        <Row className='position-relative'>

          <PortalImage images={imagesExport} text={t('home.industrialKitchens')} />

          <Col sm={12} className={`p-3 ${style.textContainer} d-flex justify-content-center align-items-center`}>

            <Card className={`border-0 p-2 col-10 col-sm-6 col-md-6 col-lg-5 ${style.card}`}>
              <Card.Body className='p-0 d-flex gap-2 justify-content-around'>

                <ColText text={colArrayOne} />

                <ColText text={colArrayTwo} />

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const PortalImage = ({ images, text }) => {
  return (
    <Col sm={12} className='position-relative'>
      <div className='position-absolute w-100 h-100 d-flex p-4 align-items-center justify-content-center '>
        <p className={`px-0 my-0 text-uppercase white bold d-lg-none ${style.text}`}>{text}</p>
      </div>
      <picture>
        <source media='(min-width: 1200px)' srcSet={images.image1200} />
        <source media='(min-width: 900px)' srcSet={images.image900} />
        <source media='(min-width: 400px)' srcSet={images.image400} />
        <img
          className='d-block w-100'
          src={images.image400}
          alt='exampleImage'
        />
      </picture>
    </Col>
  )
}

export const ColText = ({ text }) => {
  return (
    <Col sm={5} className='p-0'>
      <ul className='list-unstyled'>
        {text.map((item, index) => (
          <li key={index}>
            <p className={`m-0 bold ${style.textWorks} `}>{item}</p>
          </li>
        ))}
      </ul>
    </Col>
  )
}
