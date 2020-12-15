const connection = require('../database/connection')

module.exports = {
  async index(request, response){
    //contar itens no banco
    const [count] = await connection('incidents').count()

    const {page = 1} = request.query

    const incidents = await connection('incidents')
    //relaciona duas tabelas
    .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
    // até 5 por vez
    .limit(5)
    //comeca a ler de:
    .offset((page-1) * 5)
    .select(['incidents.*',
      'ongs.name',
      'ongs.email',
      'ongs.whatsapp',
      'ongs.city',
      'ongs.uf'
    ])

    response.header('X-Total-Count', count['count(*)'])
    return response.json(incidents)
  },

  async create(request, response){
    const {title, description, value} = request.body
    const ong_id = request.headers.authorization
    //estudar mais sobre isso:(primeira chave do array é armazenado no id)
    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    })
    return response.json({ id })
  },

  async delete(request, response){
    const { id } = request.params
    const ong_id = request.headers.authorization

    const incident = await connection('incidents')
    .where('id', id)
    .select('ong_id')
    .first()
    console.log( await connection('incidents').select('*'))

    if(incident.ong_id !== ong_id){
      return response.status(401).json({error:'Operation not permitted'})
    }
    await connection('incidents').where('id', id).delete()
    return response.status(204).send()
  }
}