import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Comment from 'App/Models/Comment'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number = 0

  @column()
  public user_id: number = 0

  @column()
  public content: string = ""

  @belongsTo(() => User)
  public users: BelongsTo<typeof User>

  @hasMany(() => Comment, {
    foreignKey: "posts_id"
  })
  public comments: HasMany<typeof Comment>

  @column()
  public likes_count: number = 0

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime = DateTime.now()

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime = DateTime.now()

  // constructor() {
  //   super()
  //   this.users = new HasMany(this)
  //   this.comments = new HasMany(this)
  // }
}
