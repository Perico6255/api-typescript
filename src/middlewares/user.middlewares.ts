import { Middleware } from "express-validator/src/base";

export const autheticationMiddleware: Middleware = (req, res, next) => {
  const cookies = req.cookies;
  console.log(cookies);
  next();
};
