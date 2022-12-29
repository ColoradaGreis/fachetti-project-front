import { urlApi } from '@/api'
import { fakerCategoriesPost, fakerProductsPost, fakerPublicationsPost, fakerQuestionsPost } from './'

const cantidad = {
  categories: 5,
  products: 20,
  publications: 10,
  questions: 5
}

const fakerDataToDB = async () => {
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
