import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'
export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Post.createMany([
      {
        user_id: 2,
        content: "Hoy me quiero sentir bien.",
        likes_count: 30,
      },
      {
        user_id: 2,
        content: "A veces pienso que el lenguje inclusivo es una tontera.",
        likes_count: 35,
      },
      {
        user_id: 3,
        content: "Mi ex es como Apple, dice que va a cambiar y no es cierto...",
        likes_count: 20,
      },
      {
        user_id: 3,
        content: "No tengo pruebas pero tampoco dudas.",
        likes_count: 16,
      },
      {
        user_id: 4,
        content: "Me gustaría ser una mariposa para volar a traves del tiempo. Sería sensacional.",
        likes_count: 56,
      },
      {
        user_id: 5,
        content: "Cuando tenga cincuenta años, espero poder aumentar mi sueldo, porque desde 2010 no lo hacen.",
        likes_count: 78,
      },
      {
        user_id: 6,
        content: "No me gustan los días lluviosos, me causan ansiedad y depresión.",
        likes_count: 39,
      },
      {
        user_id: 7,
        content: "Hace unos días hice un proyecto secreto, un emprendimiento o negocio especial.",
        likes_count: 49,
      }
    ])
  }
}
