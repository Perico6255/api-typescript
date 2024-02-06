import { Request, Response } from "express";
import User from "../models/User";

export const loginController = async (req: Request, res: Response) => {
  res.json({ message: "login" });
};

export const registerController = async (req: Request, res: Response) => {
  res.json({ message: "register" });
};
