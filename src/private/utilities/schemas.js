import * as Yup from 'yup'

export const formProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '*Demasiado corto')
    .max(50, '*Demasiado largo')
    .required('*Campo obligatorio'),
  description: Yup.string()
    .min(50, '*Demasiado corto')
    .max(300, '*Demasiado largo')
    .required('*Campo obligatorio'),
  image: Yup.string()
    .url()
    .required('*Debes ingresar una imagen'),
  categoryId: Yup.string()
    .uuid()
    .required('*Campo obligatorio')
})

export const formCategorySchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '*Demasiado corto')
    .max(50, '*Demasiado largo')
    .required('*Campo obligatorio'),
  image: Yup.string()
    .url()
    .required('*Debes ingresar una imagen')
})

export const formPublicationsSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, '*Demasiado corto')
    .max(50, '*Demasiado largo')
    .required('*Campo obligatorio'),
  image: Yup.string()
    .url()
    .required('*Debes ingresar una imagen')
})
