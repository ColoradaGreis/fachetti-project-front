import { urlApi } from '@/api'
import { fakerCategoriesPost, fakerProductsPost, fakerPublicationsPost, fakerQuestionsPost } from './'

const cantidad = {
  categories: 10,
  products: 10,
  publications: 10,
  questions: 10
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
