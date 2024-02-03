import { Request, Response } from "express";
import User from "../models/User";
export const singup = async (req: Request, res: Response) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    password: req.body.password,
  });
  user.save();
  res.send("usuario guardado");
};
