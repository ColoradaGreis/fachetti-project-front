import { urlApi } from '../../api/API'

export const initialCategoryFormValues = async (edit, id) => {
  if (!edit || !id) return { name: '', image: '' }
  const { data } = await urlApi.get(`/categories/${id}`)
  return { name: data.name, image: data.image }
}

export const initialProductFormValues = async (edit, id) => {
  if (!edit) {
    return {
      name: '',
      image: '',
      description: '',
      categoryId: ''
    }
  }
  const { data } = await urlApi.get(`products/${id}`)
  return {
    name: data.name,
    description: data.description,
    image: data.image,
    categoryId: data.categoryId,
    categoryName: data.category
  }
}

export const initialPublicationFormValues = async (edit, id) => {
  console.log(edit, id)
  if (!edit || !id) {
    return {
      title: '',
      image: ''
    }
  }
  const { data } = await urlApi.get(`publications/${id}`)
  console.log(data)

  return {
    title: data.title,
    image: data.image
  }
}
