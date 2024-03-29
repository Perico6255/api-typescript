import express from "express";
import routerAuth from "./routes/auth.route";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/auth", routerAuth);

export default app;
