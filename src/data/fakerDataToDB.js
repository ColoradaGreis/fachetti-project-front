/* eslint-disable no-unused-vars */
import { urlApi } from '@/api'
import { fakerCategoriesPost, fakerProductsPost, fakerPublicationsPost, fakerQuestionsPost, postAnUser } from './'
// await postAnUser(user)

const cantidad = {
  categories: 15,
  products: 30,
  publications: 20,
  questions: 20
}

const user = {
  fullName: 'Julian Martinez',
  email: 'juli@hotmail.com',
  password: '123'
}

const fakerDataToDB = async () => {
  const getAllCategories = async () => {
    const response = await urlApi.get('/categories')
    if (typeof response.data === 'string') return []
    return response.data.map((value) => value.id)
  }
  const existCategories = await getAllCategories()
  if (existCategories.length > 0) return

  await fakerProductsPost(cantidad.products)
  await fakerCategoriesPost(cantidad.categories)
  await fakerPublicationsPost(cantidad.publications)
  await fakerQuestionsPost(cantidad.questions)
}

export default fakerDataToDB
