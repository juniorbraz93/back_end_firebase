const request = require('supertest')

const app = require('../../src/app')
const firebaseToken = require('../utils/firebaseToken')

describe('Test Chess Clash', () => {

  it("Firebase Auth Controller Test", async () => {
    const response = await request(app)
      .get('/players')
      .set("Authorization", `Bearer ${firebaseToken()}`);

    expect(response.status).toBe(200)  
    
  })

})