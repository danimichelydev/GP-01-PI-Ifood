import Router from "express";
import userController from "./app/controllers/UserControllers_old.js";
import validatorUsers from './middlewares/ValidatorUser.js';
import UserController from './app/controllers/UserController.js';
import MotelController from './app/controllers/MotelController.js';

const routes = new Router();

routes.get("/users/:id", UserController.listaUmUsuario);
routes.post("/users", UserController.addUsuario);
routes.get("/users", UserController.listarUsuarios);
routes.put("/users/:id", UserController.atualizaUsuario);
routes.delete("/users/:id", UserController.deletaUsuario);

<<<<<<< HEAD
module.exports = routes;
// coment
=======
routes.get("/moteis/:id", MotelController.listaUmMotel);
routes.post("/moteis", MotelController.addMotel);
routes.get("/moteis", MotelController.listarMoteis);
routes.put("/moteis/:id", MotelController.atualizaMotel);
routes.delete("/moteis/:id", MotelController.deletaMotel);


export { routes as default };
>>>>>>> 94783711732cd9e2d82a29532074b1a2be524c84
