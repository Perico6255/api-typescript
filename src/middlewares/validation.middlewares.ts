import { loginSchema, registerSchema } from "../validations/auth.validations";
import { Schema } from "zod";
import { Middleware } from "express-validator/src/base";

const validatorMiddleware = (shema: Schema): Middleware => {
  return (req, res, next) => {
    try {
      shema.parse(req.body);
      next();
    } catch (error) {
      res.status(400).send(error);
    }
  };
};

export const loginValidatorMiddleware = validatorMiddleware(loginSchema);
export const registerValidatorMiddleware = validatorMiddleware(registerSchema);
