import { faker } from '@faker-js/faker'
import { postAll } from './'

const fakerCategoriesImages = [
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311634/fachetti/cargarBaseDatos/categories/Rectangle_47_h9rdxt.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311628/fachetti/cargarBaseDatos/categories/Rectangle_46_sxawqg.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311627/fachetti/cargarBaseDatos/categories/Rectangle_48_crf10s.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311627/fachetti/cargarBaseDatos/categories/Group_28_uep2rp.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311626/fachetti/cargarBaseDatos/categories/Rectangle_49_ntauhx.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311626/fachetti/cargarBaseDatos/categories/Rectangle_45_ogl6u8.png'
]

const fakerCategoriesPost = async (cantidad) => {
  if (!cantidad) return
  const fakeCategories = []
  const createFakerCategories = () => {
    return {
      name: faker.commerce.department(),
      image: faker.helpers.arrayElement(fakerCategoriesImages)
    }
  }

  Array.from({ length: cantidad }).forEach(() => {
    fakeCategories.push(createFakerCategories())
  })

  await postAll('categories', fakeCategories)
}

export default fakerCategoriesPost
