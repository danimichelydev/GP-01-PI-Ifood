import UsuarioModel from "../../models/UserModel";

export default class ListUserService {
    async listAll() {
        try {
            const usuarios = await UsuarioModel.findAll();
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
}