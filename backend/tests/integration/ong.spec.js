const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')


describe('ONG',() => {
  beforeEach(async() => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    //.set('Autorization', 'id válido') para headers
    .send({
      name: "apae",
      email: "contato@gmailcom",
      whatsapp: '1100000000',
      city: 'Santa Rita',
      uf: 'MG'
    })
    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})
