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
export const hashPasswordMiddleware: Middleware = async (
  req,
  res: Response,
  next,
) => {
  try {
    req.body.password = await hashPassword(req.body.password);
    next();
  } catch {
    res.status(500).json({ message: "error hashing passwords" });
  }
  res.status(500).json({ message: "error hashing passwords" });
};
