import { faker } from '@faker-js/faker'
import { postForms } from '../private/utilities'
import { urlApi } from '@/api'

const cantidad = 1

const fakerCategoriesImages = [
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311634/fachetti/cargarBaseDatos/categories/Rectangle_47_h9rdxt.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311628/fachetti/cargarBaseDatos/categories/Rectangle_46_sxawqg.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311627/fachetti/cargarBaseDatos/categories/Rectangle_48_crf10s.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311627/fachetti/cargarBaseDatos/categories/Group_28_uep2rp.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311626/fachetti/cargarBaseDatos/categories/Rectangle_49_ntauhx.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311626/fachetti/cargarBaseDatos/categories/Rectangle_45_ogl6u8.png'
]

const fakerProductsImages = [
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312281/fachetti/cargarBaseDatos/products/img_20220311_095313535_edited1-3d75a6c28d3f9e814e16470055084438-640-0_ygdmls.jpg',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312278/fachetti/cargarBaseDatos/products/D_NQ_NP_760863-MLA31009504937_062019-O_lzdql4.jpg',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312140/fachetti/cargarBaseDatos/products/Rectangle_59_mhqzzs.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312140/fachetti/cargarBaseDatos/products/Rectangle_59_3_qbsblv.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312140/fachetti/cargarBaseDatos/products/Rectangle_59_3_qbsblv.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312139/fachetti/cargarBaseDatos/products/Rectangle_59_1_acfpvm.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312139/fachetti/cargarBaseDatos/products/Rectangle_59_2_vgymst.png'
]

const fakerPublicationsImages = [
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311464/fachetti/cargarBaseDatos/publicaciones/Rectangle_42_edlnid.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311461/fachetti/cargarBaseDatos/publicaciones/Rectangle_33_ukuczh.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311461/fachetti/cargarBaseDatos/publicaciones/Rectangle_34_ccmoow.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311461/fachetti/cargarBaseDatos/publicaciones/Rectangle_32_cku75o.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311461/fachetti/cargarBaseDatos/publicaciones/Rectangle_26_owdxcc.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311461/fachetti/cargarBaseDatos/publicaciones/Rectangle_66_lgciwr.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671311460/fachetti/cargarBaseDatos/publicaciones/Rectangle_24_ic2kuo.png'
]

const fakerDataToDB = async () => {
  const getAllCategories = async () => {
    const response = await urlApi.get('/categories')
    if (typeof response.data === 'string') return []
    return response.data.map((value) => value.id)
  }
  const existCategories = await getAllCategories()
  if (existCategories.length > 0) return

  const postFakerCategories = async (value) => {
    await postForms('categories', value)
  }
  const postFakerProducts = async (value) => {
    await postForms('products', value)
  }
  const postFakerPublications = async (value) => {
    await postForms('publications', value)
  }

  const fakeCategories = []
  const fakeProducts = []
  const fakePublications = []

  const createFakerCategories = () => {
    return {
      name: faker.commerce.department(),
      image: faker.helpers.arrayElement(fakerCategoriesImages)
    }
  }

  Array.from({ length: cantidad }).forEach(() => {
    fakeCategories.push(createFakerCategories())
  })

  fakeCategories.forEach((value) => {
    postFakerCategories(value)
  })

  const arrayIdsCategories = await getAllCategories()

  const createFakerProducts = () => {
    return {
      name: faker.commerce.productName(),
      image: faker.helpers.arrayElement(fakerProductsImages),
      description: faker.lorem.words(70),
      categoryId: faker.helpers.arrayElement(arrayIdsCategories)
    }
  }

  Array.from({ length: cantidad }).forEach(() => {
    fakeProducts.push(createFakerProducts())
  })

  fakeProducts.forEach((value) => {
    postFakerProducts(value)
  })

  const createFakerPublications = () => {
    return {
      title: faker.lorem.sentence(5),
      image: faker.helpers.arrayElement(fakerPublicationsImages)
    }
  }

  Array.from({ length: cantidad }).forEach(() => {
    fakePublications.push(createFakerPublications())
  })

  fakePublications.forEach((value) => {
    postFakerPublications(value)
  })
}

export default fakerDataToDB
