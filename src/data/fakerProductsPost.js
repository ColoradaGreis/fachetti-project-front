import { faker } from '@faker-js/faker'
import { postAll } from './'
import { urlApi } from '@/api'

const fakerProductsImages = [
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312281/fachetti/cargarBaseDatos/products/img_20220311_095313535_edited1-3d75a6c28d3f9e814e16470055084438-640-0_ygdmls.jpg',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312278/fachetti/cargarBaseDatos/products/D_NQ_NP_760863-MLA31009504937_062019-O_lzdql4.jpg',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312140/fachetti/cargarBaseDatos/products/Rectangle_59_mhqzzs.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312140/fachetti/cargarBaseDatos/products/Rectangle_59_3_qbsblv.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312140/fachetti/cargarBaseDatos/products/Rectangle_59_3_qbsblv.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312139/fachetti/cargarBaseDatos/products/Rectangle_59_1_acfpvm.png',
  'https://res.cloudinary.com/dnitjpfm5/image/upload/v1671312139/fachetti/cargarBaseDatos/products/Rectangle_59_2_vgymst.png'
]

const fakerProductsPost = async (cantidad) => {
  if (!cantidad) return
  const getAllCategories = async () => {
    const response = await urlApi.get('/categories')
    if (typeof response.data === 'string') return []
    return response.data.map((value) => value.id)
  }
  const arrayIdsCategories = await getAllCategories()

  const fakeProducts = []
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

  await postAll('products', fakeProducts)
}

export default fakerProductsPost
