import { Request, Response } from "express";
import User from "../models/User";
import { createToken } from "../security/jwt.tools";
import { comparePassword, hashPassword } from "../security/password.tools";

export const loginController = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      if (await comparePassword(password, user.password)) {
        const token = createToken({ sub: user.id });
        res.cookie("Authorization", token);
        res.json({ message: "logged" });
      } else {
        return res.json({ message: "contraseña incorrecta" });
      }
    } else {
      return res.json({ message: "No hay nadie registrado con este email" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "No hay nadie registrado con este email" });
  }
};

export const registerController = async (req: Request, res: Response) => {
  const username = req.body.username;
  const email = req.body.email;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.send("existe el email");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
  try {
    const password = await hashPassword(req.body.password);
    const user = new User({
      username: username,
      email: email,
      password: password,
    });
    const token = createToken({ sub: user.id });
    res.cookie("Authorization", token);
    res.json({ message: "logged" });
  } catch (error) {
    res.status(500).send(error);
  }
};
