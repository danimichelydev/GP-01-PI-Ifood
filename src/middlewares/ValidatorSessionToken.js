import jwt from 'jsonwebtoken';
import list from '../app/services/User/ListUserService.js'
export default async function validateSessionToken(request, response, next) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ error: "Precisa ser feito o login" });
  }

  const getValidToken = String(token).split('Bearer ')[1]

  try {
    const validateToken = jwt.verify(
      getValidToken,
      process.env.JWT_PRIVATE_KEY);

      //codigo de estudo, o jwt ja verifica o tempo
      //de expiração
    // if (new Date() > validateToken.exp * 1000) {
    //   return response.status(401).json(
    //     { error: "Invalid token" });
    // }

  const listUserService = new list();
  const isValidUserId = await list.listOne(email);

  } catch (error) {
    return response.status(401).json(
      { error: "Invalid token" });
  }

  next();
}