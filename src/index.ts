import app from "./app";
import { API_URL, PORT } from "./myenvs";
import connectDB from "./database";
import User from "./models/User";

app.listen(PORT, () => {
  console.log(`Aplicacion escuchando en ${API_URL}`);
});
connectDB()

const user = new User({
  name:"Oscar",
  password:"1234"
})
console.log(user)
