import * as Yup from 'yup'

const errorMesagges = {
  required: 'validation.required',
  min: 'validation.minLength3',
  min2: 'validation.minLength2',
  max: 'validation.maxLength3',
  max2: 'validation.maxLength2',
  phone: 'validation.phone'
}

export const formConsultSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, errorMesagges.min)
    .max(30, errorMesagges.max)
    .required(errorMesagges.required),
  email: Yup.string()
    .email(errorMesagges.email)
    .required(errorMesagges.required),
  message: Yup.string()
    .min(2, errorMesagges.min)
    .required(errorMesagges.required),
  phone: Yup.string().matches(
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
    errorMesagges.phone
  ).required(errorMesagges.required)
})
