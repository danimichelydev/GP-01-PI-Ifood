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
<<<<<<< HEAD
module.exports = routes;
// coment
=======
=======
>>>>>>> 1fd603135547d63796bc9c8733d31e3b88e35cf1
routes.get("/moteis/:id", MotelController.listaUmMotel);
routes.post("/moteis", MotelController.addMotel);
routes.get("/moteis", MotelController.listarMoteis);
routes.put("/moteis/:id", MotelController.atualizaMotel);
routes.delete("/moteis/:id", MotelController.deletaMotel);


export { routes as default };
<<<<<<< HEAD
>>>>>>> 94783711732cd9e2d82a29532074b1a2be524c84
=======
>>>>>>> 1fd603135547d63796bc9c8733d31e3b88e35cf1
