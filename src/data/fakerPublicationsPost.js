import { faker } from '@faker-js/faker'
import { postAll } from './'

const fakerPublicationsImages = [
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311464/fachetti/cargarBaseDatos/publicaciones/Rectangle_42_edlnid.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311461/fachetti/cargarBaseDatos/publicaciones/Rectangle_33_ukuczh.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311461/fachetti/cargarBaseDatos/publicaciones/Rectangle_34_ccmoow.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311461/fachetti/cargarBaseDatos/publicaciones/Rectangle_32_cku75o.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311461/fachetti/cargarBaseDatos/publicaciones/Rectangle_26_owdxcc.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311461/fachetti/cargarBaseDatos/publicaciones/Rectangle_66_lgciwr.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311460/fachetti/cargarBaseDatos/publicaciones/Rectangle_24_ic2kuo.png'
]

const fakerPublicationsPost = async cantidad => {
  if (!cantidad) return

  const fakePublications = []

  const createFakerPublications = () => {
    return {
      title: faker.lorem.sentence(5),
      image: faker.helpers.arrayElement(fakerPublicationsImages)
    }
  }

  Array.from({ length: cantidad }).forEach(() => {
    fakePublications.push(createFakerPublications())
  })

  await postAll('publications', fakePublications)
}

export default fakerPublicationsPost
