import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from 'App/Models/Post';
export default class PostsController {
  
  public async index({response}: HttpContextContract) 
  {
    try {
      const post = await Post.all();

      response.ok(post)
  }
  catch (e) {
      response.badRequest()
  }
  }

  //public async create({}: HttpContextContract) {}

  public async store({response, request}: HttpContextContract) 
  {
    try {
      const post = request.all()

      await Post.create(post)

      response.ok({
          msg: "El registro se creó correctamente.",
          data: post
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
      const post = await Post.findOrFail(params.id)

      post.id = request.input("id", "no existe")

      post.save()

      response.ok("El post se editó correctamente")
  }
  catch (e) {
      response.badRequest("No se encontró nada con ese ID.")
  }
  }

  public async destroy({params, response}: HttpContextContract) 
  {
    try {
      const post = await Post.findOrFail(params.id)

      post.delete()
      post.save()

      post.save()

      response.ok("El post se eliminó correctamente")
  }
  catch (e) {
      response.badRequest("No se encontró nada con ese ID.")
  }
  }
}
