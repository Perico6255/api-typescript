import { Request, Response } from "express";
import User from "../models/User";

export const singup = async (req: Request, res: Response) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user.save();
  res.send("usuario guardado");
};

export const singin = async (req: Request, res: Response) => {
  const email = req.body.email;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.send("no user");
  }
  if (user?.password == req.body.password) {
    res.send("logged");
  }
  res.send("bad");
};
