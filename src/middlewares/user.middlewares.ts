import { Middleware } from "express-validator/src/base";
import { hashPassword } from "../security/password.tools";
import { Response } from "express";

export const autheticationMiddleware: Middleware = (
  req,
  res: Response,
  next,
) => {
  const cookies = req.cookies;
  console.log(cookies);
  next();
};
