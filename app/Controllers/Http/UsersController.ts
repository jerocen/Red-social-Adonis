import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post';
import User from 'App/Models/User';

export default class UsersController 
{
    public async getUserWithPostsAndComments({ params, response }: HttpContextContract) 
    {
        const user = await User.query()
            .where('id', params.id)
            .preload('posts', (postQuery) => {
                postQuery.preload('comments')
            })
            .first()

        return response.json(user)
    }

    public async index({ response }: HttpContextContract) 
    {
        try 
        {
            const user = await User.all();

            response.ok(user)
        }
        catch (e) {
            response.badRequest()
        }
    }

    //public async create({}: HttpContextContract) {}

    public async store({ response, request }: HttpContextContract) 
    {
        try 
        {
            const user = request.all()

            await User.create(user)

            response.ok({
                msg: "El registro se creó correctamente.",
                data: user
            })
        }
        catch (e) 
        {
            response.badRequest()
        }
    }

    public async show({ }: HttpContextContract) { }

    //public async edit({ }: HttpContextContract) { }

    public async update({ params, response, request }: HttpContextContract) 
    {
        try 
        {
            const user = await User.findOrFail(params.id)

            user.username = request.input("username", "Sin nombre")

            user.save()

            response.ok("El usuario se editó correctamente")
        }
        catch (e) 
        {
            response.badRequest("No se encontró a nadie con ese ID.")
        }
    }

    public async destroy({ params, response }: HttpContextContract) 
    {
        try 
        {
            const user = await User.findOrFail(params.id)

            user.delete()
            user.save()

            user.save()

            response.ok("El usuario se elliminó correctamente")
        }
        catch (e) 
        {
            response.badRequest("No se encontró a nadie con ese ID.")
        }
    }

    public async miMetodo({ response }: HttpContextContract) 
    {
        response.ok("Hola")
    }

    async showMethod({ request, response }: HttpContextContract) 
    {
        const method = request.method();

        return response.status(200).json({ method });
    }

    //Métod con el switch para cualquiera de las cuatro operaciones
    //POST, GET, PUT, DELETE
    public async crudOperations({ request, params, response }: HttpContextContract) 
    {
        const { id } = params
        const method = request.method()

        switch (method) 
        {
            case 'GET':
                try 
                {
                    let query = User.query().where('is_active', true)

                    if (params.id) 
                    {
                        // Si se proporciona un ID en la ruta, filtra por ese ID
                        query = query.where('id', id)

                        query = query.orderBy('id', 'desc')
                        const users = await query.preload('posts').preload('comments')
                        const user = await query.first()

                        if (!query) 
                        {
                            return response.notFound({ msg: 'Usuario no encontrado', data: user })
                        }
                        if(!user)
                        {
                            return response.status(404).json({msg: 'El usuario está desactivado'})
                        }
                        return response.status(200).json({ msg: 'Usuario encontrado', data: user })
                    }
                    else 
                    {
                        query = query.orderBy('id', 'desc')
                        const users = await query.preload('posts').preload('comments')
                        users.reverse()

                        if (users.length === 0) 
                        {
                            // Si no se encontraron usuarios activos, devuelve un mensaje de error
                            return response.status(404).json({ message: 'No se encontraron usuarios activos' })
                        }

                        return response.status(200).json(users)
                    }

                }
                catch (error) 
                {
                    return response.status(500).json({ message: 'Error en la consulta' })
                }

            case 'POST':
                const data = request.only(['username', 'email', 'contrasenia', 'age', 'sex', 'biography', 'No_followers'])
                const nuevoRegistro = await User.create(data)
                return response.status(201).json(nuevoRegistro)

            case 'PUT':
                const registroExistente = await User.findOrFail(id)
                const datosActualizados = request.only(['username', 'email', 'contrasenia', 'age', 'sex', 'biography', 'No_followers'])
                registroExistente.merge(datosActualizados)
                await registroExistente.save()
                return response.json(registroExistente)

            case 'DELETE':
                const userId = params.id
                const user = await User.findOrFail(userId)

                user.is_active = false
                await user.save()

                return response.status(200).json({ message: 'Usuario desactivado exitosamente' })

            default:
                return response.status(405).json({ message: 'Método no permitido' })
        }
    }
}
