const Router = require("express");
const userController = require("./app/controllers/UserControllers");
const routes = new Router();

routes.post("/users", userController.create);
routes.get("/users", userController.list);
routes.delete("/users/:id", userController.delete);


module.exports = routes;
