import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  //constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({ trim: true }, [
      rules.required(),
      rules.unique({ table: 'users', column: 'username' }),
    ]),
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    contrasenia: schema.string({}, [
      rules.required(), rules.minLength(6)]),
    age: schema.number([
        rules.required(),
        rules.range(18, 120),
      ]),
    sex: schema.string({}, [
      rules.required(),
      rules.regex(/^hombre$|^mujer$/i),
    ]),
  })

  public messages: CustomMessages = {
    'username.required': 'El nombre de usuario es obligatorio',
    'username.unique': 'El nombre de usuario ya está en uso',
    'email.required': 'El correo electrónico es obligatorio',
    'email.email': 'El correo electrónico no es válido',
    'email.unique': 'El correo electrónico ya está en uso',
    'password.required': 'La contraseña es obligatoria',
    'password.minLength': 'La contraseña debe tener al menos 6 caracteres',
    'age.required': 'La edad es obligatoria',
    'age.range': 'La edad mínima permitida es 18 años',
    'sex.required': 'El sexo es obligatorio',
    'sex.regex': 'El sexo debe ser "hombre" o "mujer".',
  }
}
