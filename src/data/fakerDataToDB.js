import { urlApi } from '@/api'
import { fakerCategoriesPost, fakerProductsPost, fakerPublicationsPost, fakerQuestionsPost, postAnUser } from './'

const cantidad = {
  categories: 5,
  products: 20,
  publications: 10,
  questions: 5
}

const user = {
  name: 'Julian Martinez',
  email: 'juli@hotmail.com',
  password: '123'
}

const fakerDataToDB = async () => {
  await postAnUser(user)
  const getAllCategories = async () => {
    const response = await urlApi.get('/categories')
    if (typeof response.data === 'string') return []
    return response.data.map((value) => value.id)
  }
  const existCategories = await getAllCategories()
  if (existCategories.length > 0) return

  await fakerCategoriesPost(cantidad.categories)
  await fakerProductsPost(cantidad.products)
  await fakerPublicationsPost(cantidad.publications)
  await fakerQuestionsPost(cantidad.questions)
}

export default fakerDataToDB
