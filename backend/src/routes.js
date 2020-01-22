const { Router } = require('express');
const PostController = require ('./controllers/PostController');
const routes = Router();
const UserController = require ('./controllers/UserController');
const SearchController = require('./controllers/SearchController');

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);
routes.put('/user', UserController.update);
routes.delete('/user', UserController.destroy);

routes.get('/search', SearchController.index);

routes.get('/post', PostController.index);
routes.post('/post', PostController.store);
routes.put('/post', PostController.update);
routes.delete('/post', PostController.destroy);

module.exports = routes;