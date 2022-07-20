const Router = require('express');
const userController = require('./app/controllers/UserControllers')
const routes = new Router();

routes.post('/users', userController.create);

module.exports = routes;