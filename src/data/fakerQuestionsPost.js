import { faker } from '@faker-js/faker'
import { postForms } from '../private/utilities'

const fakerQuestionsPost = async (cantidad) => {
  if (!cantidad) return
  const postFakerQuestions = async (value) => {
    await postForms('questions', value)
  }

  const fakeQuestions = []

  const createFakerQuestions = () => {
    const cellPhoneArray = [
      faker.phone.number('+54 ##-#######'),
      undefined
    ]
    return {
      name: faker.name.fullName(),
      message: faker.lorem.paragraph(),
      email: faker.internet.email(),
      phone: faker.helpers.arrayElement(cellPhoneArray)
    }
  }

  Array.from({ length: cantidad }).forEach(() => {
    fakeQuestions.push(createFakerQuestions())
  })

  fakeQuestions.forEach((value) => {
    postFakerQuestions(value)
  })
  console.log(fakeQuestions)
}

export default fakerQuestionsPost
