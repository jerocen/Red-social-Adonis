import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
    public async getUserWithPostsAndComments({ params, response }: HttpContextContract) {
        const user = await User.query()
          .where('id', params.id)
          .preload('posts', (postQuery) => {
            postQuery.preload('comments')
          })
          .first()
    
        return response.json(user)
      }
      
    public async index({ response }: HttpContextContract) {
        try {
            const user = await User.all();

            response.ok(user)
        }
        catch (e) {
            response.badRequest()
        }
    }


    //public async create({}: HttpContextContract) {}

    public async store({ response, request }: HttpContextContract) {
        try {
            const user = request.all()

            await User.create(user)

            response.ok({
                msg: "El registro se creó correctamente.",
                data: user
            })
        }
        catch (e) {
            response.badRequest()
        }
    }

    public async show({ }: HttpContextContract) { }

    //public async edit({ }: HttpContextContract) { }

    public async update({ params, response, request }: HttpContextContract) {
        try {
            const user = await User.findOrFail(params.id)

            user.username = request.input("username", "Sin nombre")

            user.save()

            response.ok("El usuario se editó correctamente")
        }
        catch (e) {
            response.badRequest("No se encontró a nadie con ese ID.")
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
        try {
            const user = await User.findOrFail(params.id)

            user.delete()
            user.save()

            user.save()

            response.ok("El usuario se elliminó correctamente")
        }
        catch (e) {
            response.badRequest("No se encontró a nadie con ese ID.")
        }
    }

    public async miMetodo({response}: HttpContextContract)
    {
        response.ok("Hola")
    }

    async showMethod({ request, response }: HttpContextContract) {
        const method = request.method();
    
        return response.status(200).json({ method });
      }
}

