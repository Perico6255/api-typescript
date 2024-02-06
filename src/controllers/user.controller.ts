import { Request, Response } from "express";
import User from "../models/User";
import { createToken } from "../security/jwt.tools";
import UserModel from "../models/User";
import { hashPassword } from "../security/password.tools";

export const loginController = async (req: Request, res: Response) => {
  res.json({ message: "login" });
};

export const registerController = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const hashedPassword = await hashPassword(password);

  const user = new User({
    username: username,
    email: email,
    password: hashPassword,
  });

  const token = createToken({
    sub: user.id,
  });

  res.cookie("token", token);
  res.json({ message: "register" });
};
