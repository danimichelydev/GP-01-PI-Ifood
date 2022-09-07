import UsuarioModel from "../../models/UserModel";
import HashPassword from "../../utils/HashPassword";

export default class UpdateUserService {
    async update(id, novasInfos) {
        try {
          const usuario = await UsuarioModel.findByPk(id);
          if (!usuario) {
            return { sucess: false, mensagem: "Usuário não encontrado" }
          }
    
          const [usuarioAtualizado] = await UsuarioModel.update(novasInfos,
            {
              where: { id },
            });
    
          if (usuarioAtualizado === 0) {
            return { sucess: false, mensagem: "Dados iguais" };
          } else {
            return novasInfos;
          };
        } catch (error) {
          return { sucess: false, message: error.message };
        }
      }
}