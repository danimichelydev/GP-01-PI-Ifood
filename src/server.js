import "dotenv/config";
import app from "./app.js";

app.listen(process.env.API_PORT);
