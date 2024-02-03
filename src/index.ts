import app from "./app";
import { API_URL, PORT } from "./myenvs";
import connectDB from "./database";

connectDB();

app.listen(PORT, () => {
  console.log(`Aplicacion escuchando en ${API_URL}`);
});
