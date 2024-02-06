import { Request, Response } from "express";
import User from "../models/User";
import { createToken } from "../security/jwt.tools";

export const loginController = async (req: Request, res: Response) => {
  res.json({ message: "login" });
};

export const registerController = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const token = createToken({
    sub: username,
  });

  res.cookie("token", token);
  res.json({ message: "register" });
};
