import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'

export default class CommentsController {
  public async index({response}: HttpContextContract) 
  {
    try {
      const comment = await Comment.all();

      response.ok(comment)
  }
  catch (e) {
      response.badRequest()
  }
  }

  //public async create({}: HttpContextContract) {}

  public async store({response, request}: HttpContextContract) 
  {
    try {
      const comment = request.all()

      await Comment.create(comment)

      response.ok({
          msg: "El registro se creó correctamente.",
          data: comment
      })
  }
  catch (e) {
      response.badRequest()
  }
  }

  public async show({}: HttpContextContract) {}

  //public async edit({}: HttpContextContract) {}

  public async update({params, response, request}: HttpContextContract) 
  {
    try {
      const comment = await Comment.findOrFail(params.id)

      comment.id = request.input("id", "no existe")

      comment.save()

      response.ok("El comentario se editó correctamente")
  }
  catch (e) {
      response.badRequest("No se encontró ningun comentario con ese ID.")
  }
  }

  public async destroy({params, response}: HttpContextContract) 
  {
    try {
      const comment = await Comment.findOrFail(params.id)

      comment.delete()
      comment.save()

      comment.save()

      response.ok("El comentario se elliminó correctamente")
  }
  catch (e) {
      response.badRequest("No se encontró nada con ese ID.")
  }
  }
}
