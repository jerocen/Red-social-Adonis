import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Post from 'App/Models/Post'
import Comment from 'App/Models/Comment'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number = 0

  @column()
  public username: string = ""

  @column()
  public email: string = ""

  @column()
  public contrasenia: string = ""

  @column()
  public age: number = 0

  @column()
  public sex: string = ""

  @column()
  public biography: string = ""

  @column()
  public No_followers: number = 0

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime = DateTime.now()

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime = DateTime.now()

  @hasMany(() => Post, {
    foreignKey:'user_id'
  })
  public posts: HasMany<typeof Post>

  @hasMany(() => Comment, {
    foreignKey:'user_id'
  })
  public comments: HasMany<typeof Comment>
}
