const generateId = require('../utils/generateId')
const connection = require('../database/connection')

module.exports = {
  async index(require, response){
    const ongs = await connection('ongs').select('*')
    return response.json(ongs)
  },

  async create(require, response){
    //async pq pode demorar p registrar no banco
  const {name, email, whatsapp, city, uf} = require.body

  const id = generateId()

  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  })

  return response.json({id})
  }
}