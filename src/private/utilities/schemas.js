import * as Yup from 'yup'

const errorMesagges = {
  required: 'validation.required',
  min: 'validation.minLength',
  min2: 'validation.minLength2',
  max: 'validation.maxLength',
  max2: 'validation.maxLength2',
  image: 'validation.image',
  url: 'validation.url'
}
// no encontré de traducción pasando por párametros el valor de min y max

export const formProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, errorMesagges.min)
    .max(50, errorMesagges.max)
    .required(errorMesagges.required),
  description: Yup.string()
    .min(50, errorMesagges.min2)
    .max(300, errorMesagges.max2)
    .required(errorMesagges.required),
  image: Yup.string()
    .url(errorMesagges.url)
    .required(errorMesagges.image),
  categoryId: Yup.string()
    .uuid()
    .required(errorMesagges.required)
})

export const formCategorySchema = Yup.object().shape({
  name: Yup.string()
    .min(2, errorMesagges.min)
    .max(50, errorMesagges.max)
    .required(errorMesagges.required),
  image: Yup.string()
    .url(errorMesagges.url)
    .required(errorMesagges.image)
})

export const formPublicationsSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, errorMesagges.min)
    .max(50, errorMesagges.max)
    .required(errorMesagges.required),
  image: Yup.string()
    .url(errorMesagges.url)
    .required(errorMesagges.image)
})
