import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        username: "Eduardo_Cardenas",
        email: "educar@gmail.com",
        contrasenia: "29387492879473",
        age: 39,
        sex: "hombre",
        biography: "Hola a todos, soy Eduardo. Me considero una persona amigable y apasionada por la vida. Siempre estoy dispuesto a ayudar a mis amigos y seres queridos cuando lo necesitan. Creo en el trabajo duro y la perseverancia para alcanzar mis objetivos. La amistad y la confianza son valores fundamentales para mí. ¡Conéctate conmigo y compartamos juntos esta aventura llamada vida!",
        No_followers: 3200,
      },
      {
        username: "Nicole Davila",
        email: "nicoldavly@gmail.com",
        contrasenia: "08827958795837",
        age: 48,
        sex: "mujer",
        biography: "Apasionada por la vida y las aventuras. Amante de la música, la naturaleza y los viajes. Vive cada día con entusiasmo y positividad. Disfruta de los pequeños momentos y las grandes sonrisas. Conectemos y compartamos historias juntos.",
        No_followers: 2300000,
      },
      {
        username: "Emma_Figueroa",
        email: "emmfig@gmail.com",
        contrasenia: "8749275ijri3hr4ur4",
        age: 48,
        sex: "mujer",
        biography: "Me gusta dibujar y hacer ejercicio, no suelo salir de fiesta xd.",
        No_followers: 2003010,
      },
      {
        username: "Agatha_Chavarria",
        email: "agathchav@gmail.com",
        contrasenia: "u82u3r287y8y83yr",
        age: 51,
        sex: "mujer",
        biography: "Experta en artes marciales mixtas, especialmente para la defensa personal, doy clases los jueves y los sábados también.",
        No_followers: 10500234,
      },
      {
        username: "Luan_Garcia",
        email: "luagar@gmail.com",
        contrasenia: "923847598475rr",
        age: 46,
        sex: "hombre",
        biography: "Tímido y trato de socializar, suelo caminar regularmente por las calles, aunque también suelo prácticar algunas disciplinas artísticas.",
        No_followers: 1403334,
      },
      {
        username: "Martin_Sanchez",
        email: "martsan@gmail.com",
        contrasenia: "fj3j33t837t38",
        age: 47,
        sex: "hombre",
        biography: "Soy introvertido, activo y controlador, cuidado conmigo, suelo ser infiles jsjsj",
        No_followers: 19859485,
      },
      {
        username: "Gaby_Jimenez",
        email: "gabjim@gmail.com",
        contrasenia: "r0j32j9893rj4",
        age: 49,
        sex: "mujer",
        biography: "Busco pareja fiel y amigable, que no use lenguaje inclusivo ni exclusivo de él, sorry.",
        No_followers: 9000293,
      },
      {
        username: "Luisa_Martinez",
        email: "luisamart@gmail.com",
        contrasenia: "34r34909223",
        age: 50,
        sex: "mujer",
        biography: "Soy una persona hábil para varias cosas, por lo general suelo relacionarme bien con todos, así es.",
        No_followers: 11548788,
      },
      {
        username: "Angie_Lopez",
        email: "angilop@gmail.com",
        contrasenia: "jr2r08r4829",
        age: 46,
        sex: "mujer",
        biography: "Me gusta la pizza, la buena vida y buena vibra de las personas.",
        No_followers: 903432,
      },
      {
        username: "Jinny_Contreras",
        email: "jinycont@gmail.com",
        contrasenia: "r29r402u8r",
        age: 45,
        sex: "mujer",
        biography: "Me gustaría conocer el mundo y su cultura en otros paises.",
        No_followers: 459900,
      },
      {
        username: "Jessica_Marquez",
        email: "jessamarq@gmail.com",
        contrasenia: "f30f3f--38uf",
        age: 31,
        sex: "mujer",
        biography: "Me gusta la aventura, la adrenalina, el ejercicio, entre muchas cosas más, además de los retos y nuevos objetivos a alcanzar.",
        No_followers: 239845,
      },
      {
        username: "Dylan_Adame",
        email: "dyladam@gmail.com",
        contrasenia: "4r32424",
        age: 34,
        sex: "hombre",
        biography: "Soy yo, me gustan los videojuegos, la música, entre mucho más como las aventuras a traves del mundo.",
        No_followers: 209944,
      },
      {
        username: "Alma_Orozco",
        email: "almoroz@gmail.com",
        contrasenia: "2r4020u4fu9jf34",
        age: 51,
        sex: "mujer",
        biography: "Tengo una personalidad y caracter fuertes e increibles, por lo que no soy alguien fácil de convecer.",
        No_followers: 189003,
      },
      {
        username: "Jenny_Xolio",
        email: "Jenyxol@gmail.com",
        contrasenia: "34453ii95u45vgbgb",
        age: 49,
        sex: "mujer",
        biography: "Suelo jugar juegos de mesa, de arcade y de manos.",
        No_followers: 3502333,
      },
      {
        username: "Courtney_Salazar",
        email: "courtsalaz@gmail.com",
        contrasenia: "0r4u83u9845",
        age: 53,
        sex: "mujer",
        biography: "Soy reportera y secretaría de una empresa del gobierno.",
        No_followers: 16739305,
      },
      {
        username: "Molly_Rodriguez",
        email: "mollrod@gmail.com",
        contrasenia: "fo3k40934",
        age: 52,
        sex: "mujer",
        biography: "Me encanta nadar, practicar boxeo, pintar, y hacer Lives seguidos por aquí.",
        No_followers: 12493049,
      },
      {
        username: "Gael_Salinas",
        email: "gaelsaln@gmail.com",
        contrasenia: "343i0493ir2",
        age: 44,
        sex: "hombre",
        biography: "Mis pasatiempos son jugar videojuegos, leer libros, leer el horóscopo, y replicar recetas de cocina.",
        No_followers: 891409,
      },
      {
        username: "Lucy_Mendez",
        email: "lucmend@gmail.com",
        contrasenia: "u9384ut945u",
        age: 51,
        sex: "mujer",
        biography: "Acostumbro a manejar y a administrar mi tiempo.",
        No_followers: 698989,
      },
      
    ])
  }
}
