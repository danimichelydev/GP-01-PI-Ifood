import UsuarioModel from "../../models/UserModel";

export default class ListUserService {
    async listAll() {
        try {
            const usuarios = await UsuarioModel.findAll({ attributes: ['id', 'nome', 'email'] });
            return usuarios;
        } catch (error) {
            return { erro: error.message };
        }
    }

    async listOne(email, senha) {
        try {
            const usuario = await UsuarioModel.findOne({
                where: {
                    email,
                }
            });

            return usuario;
        } catch (error) {
            return { erro: error.message };
        }
    }

    async listOneById(id) {
        try {
            const usuario = await UsuarioModel.findOne({
                where: { id }
            });

            return usuario;
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
};

