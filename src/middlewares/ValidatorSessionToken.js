export default function validateSessionToken(request, response, next) {
    const token = request.headers.authorization;
  
    if (!token) {
      return response.status(401).json({ error: "Precisa ser feito o login" });
    }
  
    next();
  }