import Router from 'express';

import validatorUsers from './middlewares/ValidatorUser.js';
import CreateAndDeleteUserController from './app/controllers/User/CreateAndDeleteUserController.js';
import UpdateUserController from './app/controllers/User/UpdateUserController.js';
import ListUserController from './app/controllers/User/ListUserController.js';
import SessionController from './app/controllers/auth/SessionController.js';
import QuartoController from './app/controllers/Quartos/QuartoController';
import validatorMotel from './middlewares/ValidatorMotel.js';
import CreateAndDeleteMotelController from './app/controllers/Motel/CreateAndDeleteMotelController.js';
import UpdateMotelController from './app/controllers/Motel/UpdateMotelController.js';
import ListMotelController from './app/controllers/Motel/ListMotelController.js';
import validateSessionToken from './middlewares/ValidatorSessionToken.js';
import CreateAndDeleteReservaController from './app/controllers/Reserva/CreateAndDeleteReservaController.js';
import ListReservaController from './app/controllers/Reserva/ListReservaController.js';
import UpdateReservaController from './app/controllers/Reserva/UpdateReservaController.js';
const routes = new Router();

import swagger from 'swagger-ui-express';
import swaggerJson from './docs/swagger.json';

const createAndDeleteUserController = new CreateAndDeleteUserController();
const updateUserController = new UpdateUserController();
const listUserController = new ListUserController();


routes.use('/docs', swagger.serve, swagger.setup(swaggerJson));

routes.post('/session', (req, res) => SessionController.create(req, res));

routes.get('/moteis/search', (req, res) =>
    listMotelController.listaUmMotel(req, res)
);
routes.get('/moteis', (req, res) => listMotelController.listarMoteis(req, res));

routes.get('/moteis/bairro', (req, res) =>
    listMotelController.listaMoteisPorBairro(req, res)
);


routes.post('/users', validatorUsers, (req, res) =>
    createAndDeleteUserController.addUsuario(req, res)
);

routes.use(validateSessionToken);
//apos essa rota tudo precisa ser feito apos o login e uso do token

routes.get('/users', (req, res) => listUserController.listarUsuarios(req, res));
routes.put('/users/:id', (req, res) =>
    updateUserController.atualizaUsuario(req, res)
);
routes.delete('/users/:id', (req, res) =>
    createAndDeleteUserController.deletaUsuario(req, res)
);

const createAndDeleteMotelController = new CreateAndDeleteMotelController();
const updateMotelController = new UpdateMotelController();
const listMotelController = new ListMotelController();
const quartoController = new QuartoController();
const createAndDeleteReservaController = new CreateAndDeleteReservaController();
const listReservaController = new ListReservaController();
const updateReservaController = new UpdateReservaController();

routes.post('/moteis', validatorMotel, (req, res) =>
    createAndDeleteMotelController.addMotel(req, res)
);
routes.put('/moteis/:id', (req, res) =>
    updateMotelController.atualizaMotel(req, res)
);
routes.delete('/moteis/:id', (req, res) =>
    createAndDeleteMotelController.deletaMotel(req, res)
);

routes.get('/motel/:id_motel/quartos', (req, res) =>
    quartoController.listarQuartos(req, res)
);
routes.post('/motel/quarto', (req, res) =>
    quartoController.addQuarto(req, res)
);
routes.get('/motel/quartos/:id', (req, res) =>
    quartoController.listaUmQuarto(req, res)
);

routes.delete('/motel/quarto/:id', (req, res) => 
    quartoController.deletaQuarto(req, res)
)

routes.post('/reserva', (req, res) =>
    createAndDeleteReservaController.addReserva(req, res)
);
routes.delete('/reserva/:id', (req, res) =>
    createAndDeleteReservaController.deletaReserva(req, res)
);
routes.get('/reserva/user/:id', (req, res) =>
    listReservaController.listByUser(req, res)
);

routes.get('/reserva/quarto/:id', (req, res) =>
    listReservaController.listByRoom(req, res)
);
routes.get('/reserva/', (req, res) =>
    listReservaController.list(req, res)
);
routes.get('/reserva/motel/:id', (req, res) =>
    listReservaController.listByMotel(req, res)
);
routes.put('/reserva/:id', (req, res) =>
    updateReservaController.updateReserva(req, res)
);


export { routes as default };
