import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comment from 'App/Models/Comment'
export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Comment.createMany([
      {
        user_id: 5,
        posts_id:1,
        content_comment: "Eso dicen las personas con esquizofenia.",
        likes_count_comment:45,
      },
      {
        user_id: 6,
        posts_id: 3,
        content_comment: "Lo peor que es sí es ciero, tiene razón en lo que dice.",
        likes_count_comment: 670,
      },
      {
        user_id: 8,
        posts_id: 5,
        content_comment: "Ojala se hiciera realidad.",
        likes_count_comment:56,
      },
      {
        user_id: 10,
        posts_id:7,
        content_comment: "Nou pues que delicado saliste pues..",
        likes_count_comment:12,
      },
      {
        user_id: 9,
        posts_id:8,
        content_comment: "Espero que no salga mal como otros.",
        likes_count_comment: 246,
      },
      {
        user_id: 11,
        posts_id:4,
        content_comment: "No tengo dudas pero tampoco pruebas.",
        likes_count_comment: 219,
      }
    ])
  }
}
