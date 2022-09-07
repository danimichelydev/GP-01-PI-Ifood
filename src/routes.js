import Router from "express";

import validatorUsers from './middlewares/ValidatorUser.js';
import CreateAndDeleteUserController from "./app/controllers/User/CreateAndDeleteUserController.js";
import UpdateUserController from "./app/controllers/User/UpdateUserController.js";
import ListUserController from "./app/controllers/User/ListUserController.js";
import SessionController from "./app/controllers/auth/SessionController.js";

import validatorMotel from "./middlewares/ValidatorMotel.js";
import CreateAndDeleteMotelController from "./app/controllers/Motel/CreateAndDeleteMotelController.js";
import UpdateMotelController from "./app/controllers/Motel/UpdateMotelController.js";
import ListMotelController from "./app/controllers/Motel/ListMotelController.js";

const routes = new Router();

const createAndDeleteUserController = new CreateAndDeleteUserController();
const updateUserController = new UpdateUserController();
const listUserController = new ListUserController();


routes.post("/session", (req, res) => SessionController.create(req, res));
routes.post("/users", validatorUsers, (req, res) => createAndDeleteUserController.addUsuario(req, res));
routes.get("/users", (req,res) => listUserController.listarUsuarios(req, res));
routes.put("/users/:id", (req, res) => updateUserController.atualizaUsuario(req, res));
routes.delete("/users/:id", (req, res) => createAndDeleteUserController.deletaUsuario(req, res));


const createAndDeleteMotelController = new CreateAndDeleteMotelController();
const updateMotelController = new UpdateMotelController();
const listMotelController = new ListMotelController();

routes.get("/moteis/search", (req,res) => listMotelController.listaUmMotel(req, res));
routes.post("/moteis", validatorMotel, (req, res) => createAndDeleteMotelController.addMotel(req,res));
routes.get("/moteis", (req, res) => listMotelController.listarMoteis(req, res));
routes.put("/moteis/:id", (req, res) => updateMotelController.atualizaMotel(req,res));
routes.delete("/moteis/:id", (req,res) => createAndDeleteMotelController.deletaMotel(req, res));

export { routes as default };
