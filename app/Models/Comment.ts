import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Post from 'App/Models/Post'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number = 0

  @column()
  public user_id: number = 0

  @belongsTo(() => User)
  public users: BelongsTo<typeof User>

  @belongsTo(() => Post)
  public posts: BelongsTo<typeof Post>

  @column()
  public post_id: number = 0

  @column()
  public content_comment: string = ""

  @column()
  public likes_count_comment: number = 0

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime = DateTime.now()

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime = DateTime.now()
}
