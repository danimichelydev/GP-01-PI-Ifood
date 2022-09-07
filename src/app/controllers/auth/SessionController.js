import jwt from "jsonwebtoken";
import ListUserService from "../../services/User/ListUserService.js.js";
import HashPassword from "../../utils/HashPassword.js";

export default class SessionController {
  constructor() {}

  static async create(request, response) {
    const { email, senha } = request.body;

    const service = new ListUserService();
    const usuario = await service.listOne(email);

    if (!usuario) {
      return response.status(401).json({ error: "User not found" });
    }

    const isValidPassword = HashPassword.validate(
      senha,
      usuario.senha
    );

    if (!isValidPassword) {
      return response.status(401).json({ error: "Invalid password" });
    }

    const { id, nome } = usuario;

    return response.json({
      usuario: {
        id,
        nome,
        email,
      },
      token: jwt.sign({ id }, process.env.JWT_PRIVATE_KEY, {
        expiresIn: "2d",
      }),
    });
  }
}