import jwt from 'jsonwebtoken';
import listUserService from '../app/services/User/ListUserService.js'
export default async function validateSessionToken(request, response, next) {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ error: "Precisa ser feito o login" });
  }
  
  const getValidToken = String(token).split('#bearer ')[1]
  
  try {
    const validateToken = jwt.verify(
      getValidToken,
      process.env.JWT_PRIVATE_KEY);
      
    const list = new listUserService();
    const isValidUserId = await list.listOneById(validateToken.id);

    if (!isValidUserId) {
      return response.status(401).json({ error: "User not found" });
    }
  } catch (error) {
    return response.status(401).json({ error: error.message });
  }

  next();
};