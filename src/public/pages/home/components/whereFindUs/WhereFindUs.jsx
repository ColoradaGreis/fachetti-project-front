import style from './style.module.css'
import { ColText, PortalImage } from '../ourWorks/OurWorks'
import { SeparateSections } from '../'
import { exportImages } from './assets'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function WhereFindUs () {
  const colOne = [
    'Gastrobaires',
    'Bazar Gastronómico San Isidro',
    'Bazar Online',
    'Bazar Yrigoyen',
    'Insumos Gastronómicos',
    'Proveeduría Gastronómica',
    'Bazar Rosemblit',
    'Gastroshop'
  ]
  const colTwo = [
    'Gastronomía Jujuy',
    'Muy Gastronómico',
    'Cook Gourmet',
    'Egyh',
    'Distribaz',
    'Bazar Gadol',
    'Bazar Alem',
    'Nbs',
    'Lynch Co',
    'Rajatabla Bazar'
  ]
  const { t } = useTranslation('public')
  return (
    <>
      <SeparateSections text={t('home.whereFindUs')} id='whereFindUs' />
      <Container as='section' fluid className='px-0'>
        <Row className='position-relative'>

          <PortalImage images={exportImages} text={t('home.innovation')} />

          <Col sm={12} className={`p-3 ${style.textContainer} d-flex justify-content-center align-items-center`}>

            <Card className={`border-0 p-2 col-10 col-sm-6 col-md-6 col-lg-5 ${style.card}`}>
              <Card.Body className='p-0 d-flex gap-2 justify-content-around'>
                <ColText text={colOne} />
                <ColText text={colTwo} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div style={{ width: '100%', overflow: 'hidden', height: '300px' }}>
          <iframe style={{ border: 0, marginTop: '-150px' }} src='https://www.google.com/maps/d/embed?mid=1P7xEKdRW3NLRSyt7rkLEhlswGVqw8Zo&ehbc=2E312F' width='100%' height='600' />
        </div>
      </Container>
    </>
  )
}
