const Router = require("express");
const userController = require("./app/controllers/UserControllers");
const routes = new Router();
const validatorUsers = require('./middlewares/ValidatorUser')


routes.post("/users", validatorUsers, userController.create);
routes.get("/users", userController.list);
routes.put("/users/:id", validatorUsers, userController.update);
routes.delete("/users/:id", userController.delete);


module.exports = routes;
