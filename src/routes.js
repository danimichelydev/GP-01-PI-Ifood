import Router from "express";
import userController from "./app/controllers/UserControllers.js";
import validatorUsers from './middlewares/ValidatorUser.js'
import usuarios from './app/controllers/User.js'
import moteis from './app/controllers/Motel.js'

const routes = new Router();

routes.get("/users/:id", usuarios.findUsuario);
routes.post("/users", usuarios.addUsuario);
routes.get("/users", usuarios.findAll);
routes.put("/users/:id", usuarios.updateUsuario);
routes.delete("/users/:id", usuarios.deleteUsuario);

routes.get("/moteis/:id", moteis.findMotel);
routes.post("/moteis", moteis.addMotel);
routes.get("/moteis", moteis.findAll);
routes.put("/moteis/:id", moteis.updateMotel);
routes.delete("/moteis/:id", moteis.deleteMotel);


export { routes as default };