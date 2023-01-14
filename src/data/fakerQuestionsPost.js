import { faker } from '@faker-js/faker'
import { postAll } from './'

const fakerQuestionsPost = async (cantidad) => {
  if (!cantidad) return

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

  await postAll('questions', fakeQuestions)
}

export default fakerQuestionsPost
