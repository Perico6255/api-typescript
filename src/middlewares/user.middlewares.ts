import { NextFunction, Request, Response } from "express";
import { loginSchema, registerSchema } from "../validations/auth.validations";
import { Schema } from "zod";

const validatorMiddleware = (shema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
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
