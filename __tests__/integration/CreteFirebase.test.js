const request = require('supertest')

const app = require('../../src/app')
// const { Player } = require('../../src/app/models')
const truncate = require('../utils/truncate')
const firebaseTruncate = require('../utils/firebaseTruncate')
const faker = require('../utils/faker')


describe('Test Chess Clash', () => {
  beforeEach( async () => {
    await truncate()
  })

  beforeEach( async() => {
    await firebaseTruncate()
  })

  it.skip("Firebase Creation Controller Test", async () => {
    const response = await request(app)
      .post('/players')
      .send({
      name: faker.name,
      email: faker.email,
      password: faker.password
      })

    expect(response.status).toBe(200)
  })

})