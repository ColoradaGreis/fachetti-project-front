import { faker } from '@faker-js/faker'
// import { faker } from '@faker-js/faker/locale/de';

export const Consults = []
const cellPhoneArray = [
  faker.phone.number(),
  undefined
]

function createRandomUser () {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.helpers.arrayElement(cellPhoneArray),
    message: faker.lorem.paragraph(),
    date: faker.date.recent(),
    read: faker.datatype.boolean()
  }
}

Array.from({ length: 8 }).forEach(() => {
  Consults.push(createRandomUser())
})
