/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
// import UsersController from 'App/Controllers/Http/UsersController'
// import PostsController from 'App/Controllers/Http/PostsController'
// import CommentsController from 'App/Controllers/Http/CommentsController'

import Route from '@ioc:Adonis/Core/Route'
//import PostsController from 'App/Controllers/Http/PostsController'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/allUsers', 'UsersController.index')

//Route.post('/newUser', 'UsersController.store')
// Route.put('/editUser', 'UsersController.update')
// Route.delete('/eraseUser', 'UsersController.destroy')

Route.get('/allPosts', 'PostsController.index')

// Route.post('/newPosts', 'PostsController.store')
// Route.put('/editPosts', 'PostsController.update')
// Route.delete('/erasePosts', 'PostsController.destroy')

Route.get('/allComments', 'CommentsController.index')

// Route.post('/newComment', 'CommentController.store')
// Route.put('/editComment', 'CommentController.update')
// Route.delete('/eraseComment', 'CommentController.destroy')

Route.get('miMetodo', 'UsersController.miMetodo')

// Importa el controlador User
// import UserController from 'App/Controllers/Http/UserController'

// Define la ruta en tu archivo routes.ts
Route.get('users/:id', 'UsersController.getUserWithPostsAndComments')
Route.any('mi-ruta', 'UsersController.showMethod');

//Ruta con el comodin del request.method en el switch

Route.any('/method/', 'UsersController.crudOperations')
Route.any('/method/:id', 'UsersController.crudOperations')